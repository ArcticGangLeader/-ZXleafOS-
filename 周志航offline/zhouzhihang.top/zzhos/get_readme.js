const currentPath = window.location.pathname;
const dirPath = currentPath.endsWith('/') ? currentPath : currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
fetch(dirPath + 'README.md')
.then(response => {
    if (!response.ok) throw new Error('README.md 不存在');
    return response.text();
})
.then(text => {
    document.getElementById('readme-box').innerHTML = 
    '<pre style="white-space: pre-wrap; font-family: monospace; font-size: 13px; color: rgba(255,255,255,0.7); line-height: 1.6;">' + 
	    text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + 
    '</pre>';
    })
.catch(err => {
    document.getElementById('readme-box').innerHTML = 
        '<p style="color: rgba(255,255,255,0.2);">README.md还没写</p>';
});