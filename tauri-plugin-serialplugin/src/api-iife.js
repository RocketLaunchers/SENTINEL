if("__TAURI__"in window){var __TAURI_PLUGIN_SERIALPLUGIN__=function(t){"use strict";function e(t,e=!1){return window.__TAURI_INTERNALS__.transformCallback(t,e)}async function i(t,e={},i){return window.__TAURI_INTERNALS__.invoke(t,e,i)}var r,a,s,n,o,p;async function c(t,r,a){const s=(void 0,{kind:"Any"});return i("plugin:event|listen",{event:t,target:s,handler:e(r)}).then((e=>async()=>async function(t,e){await i("plugin:event|unlisten",{event:t,eventId:e})}(t,e)))}"function"==typeof SuppressedError&&SuppressedError,function(t){t.WINDOW_RESIZED="tauri://resize",t.WINDOW_MOVED="tauri://move",t.WINDOW_CLOSE_REQUESTED="tauri://close-requested",t.WINDOW_DESTROYED="tauri://destroyed",t.WINDOW_FOCUS="tauri://focus",t.WINDOW_BLUR="tauri://blur",t.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",t.WINDOW_THEME_CHANGED="tauri://theme-changed",t.WINDOW_CREATED="tauri://window-created",t.WEBVIEW_CREATED="tauri://webview-created",t.DRAG_ENTER="tauri://drag-enter",t.DRAG_OVER="tauri://drag-over",t.DRAG_DROP="tauri://drag-drop",t.DRAG_LEAVE="tauri://drag-leave"}(r||(r={})),t.DataBits=void 0,(a=t.DataBits||(t.DataBits={})).Five="Five",a.Six="Six",a.Seven="Seven",a.Eight="Eight",t.FlowControl=void 0,(s=t.FlowControl||(t.FlowControl={})).None="None",s.Software="Software",s.Hardware="Hardware",t.Parity=void 0,(n=t.Parity||(t.Parity={})).None="None",n.Odd="Odd",n.Even="Even",t.StopBits=void 0,(o=t.StopBits||(t.StopBits={})).One="One",o.Two="Two",t.ClearBuffer=void 0,(p=t.ClearBuffer||(t.ClearBuffer={})).Input="Input",p.Output="Output",p.All="All";let l={},u={};setInterval((()=>{for(let t in u)u[t]("random")}),1e3);return t.SerialPort=class{constructor(e){this.is_test=!1,this.isOpen=!1,this.encoding=e.encoding||"utf-8",this.options={path:e.path,baudRate:e.baudRate,dataBits:e.dataBits||t.DataBits.Eight,flowControl:e.flowControl||t.FlowControl.None,parity:e.parity||t.Parity.None,stopBits:e.stopBits||t.StopBits.One,size:e.size||1024,timeout:e.timeout||200},this.size=e.size||1024,this.is_test=e.is_test||!1}static async available_ports(){try{const t=await i("plugin:serialplugin|available_ports");for(const e in l)t[e]={manufacturer:"tester",pid:"tester",product:"tester",serial_number:"tester",type:"USB",vid:"tester"};return Promise.resolve(t)}catch(t){return Promise.reject(t)}}static async available_ports_direct(){try{const t=await i("plugin:serialplugin|available_ports_direct");for(const e in l)t[e]={manufacturer:"tester",pid:"tester",product:"tester",serial_number:"tester",type:"USB",vid:"tester"};return Promise.resolve(t)}catch(t){return Promise.reject(t)}}static async managed_ports(){try{const t=await i("plugin:serialplugin|managed_ports");return Promise.resolve(t)}catch(t){return Promise.reject(t)}}static async forceClose(t){return l[t]?(delete l[t],Promise.resolve()):await i("plugin:serialplugin|force_close",{path:t})}static async closeAll(){return l={},await i("plugin:serialplugin|close_all")}async cancelListen(){try{return void(this.unListen&&(this.unListen(),this.unListen=void 0))}catch(t){return Promise.reject("Failed to cancel serial monitoring: "+t)}}async cancelRead(){if(this.is_test)return Promise.resolve();try{return await i("plugin:serialplugin|cancel_read",{path:this.options.path})}catch(t){return Promise.reject(t)}}async change(t){try{let e=!1;return this.isOpen&&(e=!0,await this.close()),t.path&&(this.options.path=t.path),t.baudRate&&(this.options.baudRate=t.baudRate),e&&await this.open(),Promise.resolve()}catch(t){return Promise.reject(t)}}async close(){try{if(!this.isOpen)return;let t;return await this.cancelRead(),this.is_test||(t=await i("plugin:serialplugin|close",{path:this.options.path})),await this.cancelListen(),this.isOpen=!1,t}catch(t){return Promise.reject(t)}}async disconnected(t){let e=this.options.path?.toString().replaceAll(".","-").replaceAll("/","-"),i=`plugin-serialplugin-disconnected-${e}`;console.log("listen event: "+i);let r=await c(i,(()=>{try{t(),r(),r=void 0}catch(t){console.error(t)}}))}async listen(t,e=!0){try{await this.cancelListen();let i=this.options.path?.toString().replaceAll(".","-").replaceAll("/","-"),r=`plugin-serialplugin-read-${i}`;return console.log("listen event: "+r),this.is_test?(console.log("add test event: "+this.options.path,t),u[this.options.path]=t,this.unListen=()=>{delete u[this.options.path]},Promise.resolve()):void(this.unListen=await c(r,(({payload:i})=>{try{if(e){const e=new TextDecoder(this.encoding).decode(new Uint8Array(i.data));t(e)}else t(new Uint8Array(i.data))}catch(t){console.error(t)}})))}catch(t){return Promise.reject("Failed to monitor serial port data: "+t)}}async open(){try{if(!this.options.path)return Promise.reject("path Can not be empty!");if(!this.options.baudRate)return Promise.reject("baudRate Can not be empty!");if(this.isOpen)return;let t;return this.is_test?l[this.options.path]=this:t=await i("plugin:serialplugin|open",{path:this.options.path,baudRate:this.options.baudRate,dataBits:this.options.dataBits,flowControl:this.options.flowControl,parity:this.options.parity,stopBits:this.options.stopBits,timeout:this.options.timeout}),this.isOpen=!0,this.disconnected((()=>{this.isOpen=!1})).catch((t=>console.error(t))),Promise.resolve(t)}catch(t){return Promise.reject(t)}}async startListening(){try{await i("plugin:serialplugin|start_listening",{path:this.options.path,size:this.options.size,timeout:this.options.timeout})}catch(t){return Promise.reject(t)}}async stopListening(){try{await i("plugin:serialplugin|stop_listening",{path:this.options.path})}catch(t){return Promise.reject(t)}}async read(t){try{if(this.is_test){const t="";return u[this.options.path]&&u[this.options.path](t),Promise.resolve("")}return await i("plugin:serialplugin|read",{path:this.options.path,timeout:t?.timeout||this.options.timeout,size:t?.size||this.size})}catch(t){return Promise.reject(t)}}async readBinary(t){try{if(this.is_test){const t=new Uint8Array;return u[this.options.path]&&u[this.options.path](t),Promise.resolve(new Uint8Array)}const e=await i("plugin:serialplugin|read_binary",{path:this.options.path,timeout:t?.timeout||this.options.timeout,size:t?.size||this.size});return new Uint8Array(e)}catch(t){return Promise.reject(t)}}async setBaudRate(t){try{return await i("plugin:serialplugin|set_baud_rate",{path:this.options.path,baudRate:t})}catch(t){return Promise.reject(t)}}async setDataBits(t){try{return await i("plugin:serialplugin|set_data_bits",{path:this.options.path,dataBits:t})}catch(t){return Promise.reject(t)}}async setFlowControl(t){try{return await i("plugin:serialplugin|set_flow_control",{path:this.options.path,flowControl:t})}catch(t){return Promise.reject(t)}}async setParity(t){try{return await i("plugin:serialplugin|set_parity",{path:this.options.path,parity:t})}catch(t){return Promise.reject(t)}}async setStopBits(t){try{return await i("plugin:serialplugin|set_stop_bits",{path:this.options.path,stopBits:t})}catch(t){return Promise.reject(t)}}async setTimeout(t){try{return await i("plugin:serialplugin|set_timeout",{path:this.options.path,timeout:t})}catch(t){return Promise.reject(t)}}async setRequestToSend(t){try{return await i("plugin:serialplugin|write_request_to_send",{path:this.options.path,level:t})}catch(t){return Promise.reject(t)}}async setDataTerminalReady(t){try{return await i("plugin:serialplugin|write_data_terminal_ready",{path:this.options.path,level:t})}catch(t){return Promise.reject(t)}}async readClearToSend(){try{return await i("plugin:serialplugin|read_clear_to_send",{path:this.options.path})}catch(t){return Promise.reject(t)}}async readDataSetReady(){try{return await i("plugin:serialplugin|read_data_set_ready",{path:this.options.path})}catch(t){return Promise.reject(t)}}async readRingIndicator(){try{return await i("plugin:serialplugin|read_ring_indicator",{path:this.options.path})}catch(t){return Promise.reject(t)}}async readCarrierDetect(){try{return await i("plugin:serialplugin|read_carrier_detect",{path:this.options.path})}catch(t){return Promise.reject(t)}}async bytesToRead(){try{return await i("plugin:serialplugin|bytes_to_read",{path:this.options.path})}catch(t){return Promise.reject(t)}}async bytesToWrite(){try{return await i("plugin:serialplugin|bytes_to_write",{path:this.options.path})}catch(t){return Promise.reject(t)}}async clearBuffer(t){try{return await i("plugin:serialplugin|clear_buffer",{path:this.options.path,bufferType:t})}catch(t){return Promise.reject(t)}}async setBreak(){try{return await i("plugin:serialplugin|set_break",{path:this.options.path})}catch(t){return Promise.reject(t)}}async clearBreak(){try{return await i("plugin:serialplugin|clear_break",{path:this.options.path})}catch(t){return Promise.reject(t)}}async write(t){try{return this.isOpen?this.is_test?Promise.resolve(2):await i("plugin:serialplugin|write",{value:t,path:this.options.path}):Promise.reject(`serial port ${this.options.path} not opened!`)}catch(t){return Promise.reject(t)}}async writeBinary(t){try{return this.isOpen?t instanceof Uint8Array||t instanceof Array?this.is_test?Promise.resolve(2):await i("plugin:serialplugin|write_binary",{value:Array.from(t),path:this.options.path}):Promise.reject("value Argument type error! Expected type: string, Uint8Array, number[]"):Promise.reject(`serial port ${this.options.path} not opened!`)}catch(t){return Promise.reject(t)}}},t}({});Object.defineProperty(window.__TAURI__,"serialplugin",{value:__TAURI_PLUGIN_SERIALPLUGIN__})}
