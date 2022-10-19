# Base64Wasm
convert wasm to base64 data file for injecting C into websites console. Successful Shell upon one trial before reddit ban

Usage, 
1st.write out your C program, 

2nd.use emcc https://emscripten.org/docs/tools_reference/emcc.html to convert to Wasm file. 

3rd. take the Wasm file and use base64wasm.js as such:   node base64wasm.js your/wasm/file

4th. will output 3 variations of usage. One through Fetch, one through XMLHTTPREQUEST and another that is purely base64
