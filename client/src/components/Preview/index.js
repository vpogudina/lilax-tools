
import Papa from 'papaparse';
import "./style.css"
import { saveAs } from 'file-saver';

export const Preview = ({files}) => {
    if (!files.length) {
        return null;
    } 
    const getAgentLogs = async (fileInfo) => {
        let data;
        let agentLogs = [];
        
        var csvData=[];
        
        Papa.parse(`//localhost:8000/${fileInfo.filename}`, {
            download: true,
            header: true,
            skipEmptyLines: true,
            forceUniformNewline: true,
            step: function(row) {
                csvData.push(row.data);
            },
            complete: function(results) {
                console.log('Complete', csvData.length, 'records.'); 
                data = csvData;
                let chunks = data.filter(event => event.message.includes('Agent log chunk'));
                // let chunksStartIndexes = data.filter(ev, i => ev.message.includes('"_logs:"'));
                let chunkMessages = chunks.map( a => {
                    let newLog = a?.message;
                    if (newLog) {
                    let i = newLog.indexOf('log chunk:') + 10; 
                    return newLog.slice(i);
                    } else {
                    return "";
                    }
                    
                });
                let k = 0;
                while(k < chunkMessages.length && !chunkMessages[k].includes('"_logs"')) {
                k++;
                }
                for (let i = k; i < chunkMessages.length; i++) {
    
                let agentLog = [];
                let j = i;
                
                do {
                    chunkMessages[j] = chunkMessages[j].replace(/\n/g, "");
                    chunkMessages[j] = chunkMessages[j].replace(/\\ /g, "\\\\ ");
                    agentLog.push(chunkMessages[j]);
                    j++;
                } while (j < chunkMessages.length && !chunkMessages[j].includes('"_logs"'));
                agentLogs.push(agentLog);
                
                i = j - 1;
                }
                const reducer = (previousValue, currentValue) => previousValue + currentValue;
                let logs;
                for (let i = 0; i < agentLogs.length; i++) {
                
                logs = agentLogs[i].reduce(reducer);
                let k = logs.indexOf('"_logs": ') + 9;
                let m = logs.indexOf('"_rolledLogs"') - 5;
                logs = logs.slice(k, m);
                var blob = new Blob([logs], { type: "text/plain;charset=utf-8" });
                saveAs(blob, `agent_log_${i}.txt`);
                }
            }
        });
    }

    const download = (file) => {
        getAgentLogs(file);
    }

    return files.map((file) => <button className="downloadBtn" key={Date.now() + file.originalname} onClick={download.bind(this, file)}>Get agent logs from {file.originalname}</button>)
}

