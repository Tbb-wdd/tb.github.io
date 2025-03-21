// 使用分散的字符片段，增加逆向难度
const _0x5f2a = ['value', 'charCodeAt', 'length', 'map', 'join', 'split'];
const _0x3e8b = ['floor', 'random', 'toString', 'slice', 'push', 'shift'];

// 混淆关键的密钥片段
const _k = {
    a: 'Ym9v',
    b: 'ZHJp',
    c: 'dmVy',
    d: ['aW5n', 'QWJj', 'ZGVm'],
    e: ['SGVs', 'bG8=']
};

// Base64解码函数
function _atob(str) {
    try {
        return decodeURIComponent(escape(window.atob(str)));
    } catch {
        // 如果原生atob失败，使用自定义实现
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        let output = '';
        str = str.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        for (let i = 0; i < str.length;) {
            const enc1 = chars.indexOf(str.charAt(i++));
            const enc2 = chars.indexOf(str.charAt(i++));
            const enc3 = chars.indexOf(str.charAt(i++));
            const enc4 = chars.indexOf(str.charAt(i++));
            
            const chr1 = (enc1 << 2) | (enc2 >> 4);
            const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            const chr3 = ((enc3 & 3) << 6) | enc4;
            
            output += String.fromCharCode(chr1);
            if (enc3 !== 64) output += String.fromCharCode(chr2);
            if (enc4 !== 64) output += String.fromCharCode(chr3);
        }
        return output;
    }
}

// 真正的密钥生成函数
function _0x2b4a() {
    const _p = [_k.d[0], _k.d[1], _k.d[2], _k.e[0], _k.e[1]];
    return _atob(_p.join(''));
}

// 解密函数
function decrypt(encoded) {
    try {
        const key = _0x2b4a();
        const text = _atob(encoded);
        let result = '';
        
        for(let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            result += String.fromCharCode(charCode);
        }
        
        return result;
    } catch(e) {
        console.error('解密失败:', e);
        return '';
    }
}

// 加密数据 - 一行字符串
const _0x4f8a = "USZRAzMhJy4xHSwu.PSkpByNRPS0+cDBV.I1cuGDMuJiEuGy01.JyMlDlYyLSswD1xf|BwsVJAwHDQIEJwYeLBYIBgguTAALCA==|PRpeeFZXXF0=@LT4iCFctLiQiEiNb.L1dfES0hPj9XGCcl.I1heFVMxU1IrfSk7.MzwxAlA7NlQ1ACk2|DAsLKgcOBQgELhYNGS8QDw8uDU0HCgs=|PRpeeFRVUFE=@I1cpeScsVjcoBFA0.IScvCys3UyA/eD1a.Ljs+ciBWMyIzGTNa.Jl8hDSY1UC9XHyIg|BFgRJBsMAF0WeVMKLAgEFkkiDQ4=|PRpeeFRVUFE=@XChUFTohPDEqC1cg.JSRWeTdSIlU1fzQj.Ky0wc1dQUl0sHFMq.JS9UCFoiKDdUcCw4|BFsWJQEJJA0eMQgAQgwGAw==|PRpWcFBRXVw=@XyJSEDpVN1BQDzUm.UFgyGCMqN1MoGS0n.WyNRdlYkUChTDTw+.WCAqEDcsITQifi0t|DBYGLBIPAVAmJQQFAEEKAQo=|OS4UMhVTFgFT"; 

// 构建加密数据
const encryptedData = {};
_0x4f8a.split('@').forEach((group, index) => {
    const [codes, account, password] = group.split('|');
    encryptedData[`group${index + 1}`] = {
        codes: codes.split('.'),
        account,
        password
    };
});

// 获取解密数据的函数
function getCodeMapping() {
    const decryptedData = {};
    for (const group in encryptedData) {
        decryptedData[group] = {
            codes: encryptedData[group].codes.map(code => decrypt(code)),
            account: decrypt(encryptedData[group].account),
            password: decrypt(encryptedData[group].password)
        };
    }
    return decryptedData;
} 
