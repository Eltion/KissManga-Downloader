//based on http://kissmanga.com/Scripts/lo.js
(function(_0xfac5x1) {
    for (var _0xfac5x2 = CryptoJS, _0xfac5x3 = _0xfac5x2['lib'], _0xfac5x4 = _0xfac5x3['WordArray'], _0xfac5x5 = _0xfac5x3['Hasher'], _0xfac5x3 = _0xfac5x2['algo'], _0xfac5x6 = [], _0xfac5x7 = [], _0xfac5x8 = function(_0xfac5xb) {
            return 4294967296 * (_0xfac5xb - (_0xfac5xb | 0)) | 0
        }, _0xfac5x9 = 2, _0xfac5xa = 0; 64 > _0xfac5xa;) {
        var _0xfac5xc;
        a: {
            _0xfac5xc = _0xfac5x9;
            for (var _0xfac5xd = _0xfac5x1['sqrt'](_0xfac5xc), _0xfac5xe = 2; _0xfac5xe <= _0xfac5xd; _0xfac5xe++) {
                if (!(_0xfac5xc % _0xfac5xe)) {
                    _0xfac5xc = !1;
                    break a
                }
            };_0xfac5xc = !0
        }
        _0xfac5xc && (8 > _0xfac5xa && (_0xfac5x6[_0xfac5xa] = _0xfac5x8(_0xfac5x1['pow'](_0xfac5x9, 0.5))), _0xfac5x7[_0xfac5xa] = _0xfac5x8(_0xfac5x1['pow'](_0xfac5x9, 1 / 3)), _0xfac5xa++);
        _0xfac5x9++
    };
    var _0xfac5xf = [],
        _0xfac5x3 = _0xfac5x3['SHA256'] = _0xfac5x5['extend']({
            _doReset: function() {
                this['_hash'] = new _0xfac5x4['init'](_0xfac5x6['slice'](0))
            },
            _doProcessBlock: function(_0xfac5xb, _0xfac5x3) {
                for (var _0xfac5x10 = this['_hash']['words'], _0xfac5x11 = _0xfac5x10[0], _0xfac5xc = _0xfac5x10[1], _0xfac5xa = _0xfac5x10[2], _0xfac5x1 = _0xfac5x10[3], _0xfac5x12 = _0xfac5x10[4], _0xfac5x2 = _0xfac5x10[5], _0xfac5x5 = _0xfac5x10[6], _0xfac5x9 = _0xfac5x10[7], _0xfac5x13 = 0; 64 > _0xfac5x13; _0xfac5x13++) {
                    if (16 > _0xfac5x13) {
                        _0xfac5xf[_0xfac5x13] = _0xfac5xb[_0xfac5x3 + _0xfac5x13] | 0
                    } else {
                        var _0xfac5x14 = _0xfac5xf[_0xfac5x13 - 15],
                            _0xfac5x15 = _0xfac5xf[_0xfac5x13 - 2];
                        _0xfac5xf[_0xfac5x13] = ((_0xfac5x14 << 25 | _0xfac5x14 >>> 7) ^ (_0xfac5x14 << 14 | _0xfac5x14 >>> 18) ^ _0xfac5x14 >>> 3) + _0xfac5xf[_0xfac5x13 - 7] + ((_0xfac5x15 << 15 | _0xfac5x15 >>> 17) ^ (_0xfac5x15 << 13 | _0xfac5x15 >>> 19) ^ _0xfac5x15 >>> 10) + _0xfac5xf[_0xfac5x13 - 16]
                    };
                    _0xfac5x14 = _0xfac5x9 + ((_0xfac5x12 << 26 | _0xfac5x12 >>> 6) ^ (_0xfac5x12 << 21 | _0xfac5x12 >>> 11) ^ (_0xfac5x12 << 7 | _0xfac5x12 >>> 25)) + (_0xfac5x12 & _0xfac5x2 ^ ~_0xfac5x12 & _0xfac5x5) + _0xfac5x7[_0xfac5x13] + _0xfac5xf[_0xfac5x13];
                    _0xfac5x15 = ((_0xfac5x11 << 30 | _0xfac5x11 >>> 2) ^ (_0xfac5x11 << 19 | _0xfac5x11 >>> 13) ^ (_0xfac5x11 << 10 | _0xfac5x11 >>> 22)) + (_0xfac5x11 & _0xfac5xc ^ _0xfac5x11 & _0xfac5xa ^ _0xfac5xc & _0xfac5xa);
                    _0xfac5x9 = _0xfac5x5;
                    _0xfac5x5 = _0xfac5x2;
                    _0xfac5x2 = _0xfac5x12;
                    _0xfac5x12 = _0xfac5x1 + _0xfac5x14 | 0;
                    _0xfac5x1 = _0xfac5xa;
                    _0xfac5xa = _0xfac5xc;
                    _0xfac5xc = _0xfac5x11;
                    _0xfac5x11 = _0xfac5x14 + _0xfac5x15 | 0
                };
                _0xfac5x10[0] = _0xfac5x10[0] + _0xfac5x11 | 0;
                _0xfac5x10[1] = _0xfac5x10[1] + _0xfac5xc | 0;
                _0xfac5x10[2] = _0xfac5x10[2] + _0xfac5xa | 0;
                _0xfac5x10[3] = _0xfac5x10[3] + _0xfac5x1 | 0;
                _0xfac5x10[4] = _0xfac5x10[4] + _0xfac5x12 | 0;
                _0xfac5x10[5] = _0xfac5x10[5] + _0xfac5x2 | 0;
                _0xfac5x10[6] = _0xfac5x10[6] + _0xfac5x5 | 0;
                _0xfac5x10[7] = _0xfac5x10[7] + _0xfac5x9 | 0
            },
            _doFinalize: function() {
                var _0xfac5xc = this['_data'],
                    _0xfac5xa = _0xfac5xc['words'],
                    _0xfac5x10 = 8 * this['_nDataBytes'],
                    _0xfac5x11 = 8 * _0xfac5xc['sigBytes'];
                _0xfac5xa[_0xfac5x11 >>> 5] |= 128 << 24 - _0xfac5x11 % 32;
                _0xfac5xa[(_0xfac5x11 + 64 >>> 9 << 4) + 14] = _0xfac5x1['floor'](_0xfac5x10 / 4294967296);
                _0xfac5xa[(_0xfac5x11 + 64 >>> 9 << 4) + 15] = _0xfac5x10;
                _0xfac5xc['sigBytes'] = 4 * _0xfac5xa['length'];
                this._process();
                return this['_hash']
            },
            clone: function() {
                var _0xfac5xa = _0xfac5x5['clone']['call'](this);
                _0xfac5xa['_hash'] = this['_hash']['clone']();
                return _0xfac5xa
            }
        });
    _0xfac5x2['SHA256'] = _0xfac5x5._createHelper(_0xfac5x3);
    _0xfac5x2['HmacSHA256'] = _0xfac5x5._createHmacHelper(_0xfac5x3)
})(Math);
var boxzq = 'a5e8e2e9c2721be0a84ad660c472c1f3';
var chko = 'mshsdf832nsdbash20asdm';
var iv, key;
iv = CryptoJS['enc']['Hex']['parse'](boxzq);
key = CryptoJS.SHA256(chko);

function wrapKA(_0xfac5x1b) {
    var _0xfac5x1c = null;
    try {
        var _0xfac5x1d = CryptoJS['lib']['CipherParams']['create']({
            ciphertext: CryptoJS['enc']['Base64']['parse'](_0xfac5x1b)
        });
        var _0xfac5x1e = CryptoJS['AES']['decrypt'](_0xfac5x1d, key, {
            mode: CryptoJS['mode']['CBC'],
            iv: iv,
            padding: CryptoJS['pad']['Pkcs7']
        });
        _0xfac5x1c = _0xfac5x1e.toString(CryptoJS['enc'].Utf8);
        return _0xfac5x1c
    } catch (err) {
        return 0;
    }
}
