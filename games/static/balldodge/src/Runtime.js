var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (c.get || c.set)
        throw new TypeError("ES3 does not support getters and setters.");
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
}
  , ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ca() {
    ca = function() {}
    ;
    ba.Symbol || (ba.Symbol = da)
}
var ea = 0;
function da(a) {
    return "jscomp_symbol_" + (a || "") + ea++
}
function fa() {
    ca();
    var a = ba.Symbol.iterator;
    a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return ga(this)
        }
    });
    fa = function() {}
}
function ga(a) {
    var b = 0;
    return ha(function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    })
}
function ha(a) {
    fa();
    a = {
        next: a
    };
    a[ba.Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
function ka(a, b) {
    fa();
    a instanceof String && (a += "");
    var c = 0
      , d = {
        next: function() {
            if (c < a.length) {
                var e = c++;
                return {
                    value: b(e, a[e]),
                    done: !1
                }
            }
            d.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return d.next()
        }
    };
    d[Symbol.iterator] = function() {
        return d
    }
    ;
    return d
}
function la(a, b) {
    if (b) {
        for (var c = ba, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            f in c || (c[f] = {});
            c = c[f]
        }
        d = d[d.length - 1];
        e = c[d];
        f = b(e);
        f != e && null != f && aa(c, d, {
            configurable: !0,
            writable: !0,
            value: f
        })
    }
}
la("Array.prototype.values", function(a) {
    return a ? a : function() {
        return ka(this, function(a, c) {
            return c
        })
    }
});
la("Array.prototype.fill", function(a) {
    return a ? a : function(a, c, d) {
        var b = this.length || 0;
        0 > c && (c = Math.max(0, b + c));
        if (null == d || d > b)
            d = b;
        d = Number(d);
        0 > d && (d = Math.max(0, b + d));
        for (c = Number(c || 0); c < d; c++)
            this[c] = a;
        return this
    }
});
function p(a, b) {
    var c = Object.create(a.prototype || a);
    if (void 0 !== b && (b = b.prototype || b))
        for (var d in b)
            b.hasOwnProperty(d) && (c[d] = b[d]);
    return c
}
function ma(a) {
    var b = (a >>> 16 & 255).toString(16)
      , c = (a >>> 8 & 255).toString(16);
    for (a = (a & 255).toString(16); 2 > b.length; )
        b = "0" + b;
    for (; 2 > c.length; )
        c = "0" + c;
    for (; 2 > a.length; )
        a = "0" + a;
    return "#" + b + c + a
}
function na(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
}
function oa(a, b, c, d, e) {
    ox = d / 2 * .5522848;
    oy = e / 2 * .5522848;
    xe = b + d;
    ye = c + e;
    xm = b + d / 2;
    ym = c + e / 2;
    a.beginPath();
    a.moveTo(b, ym);
    a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
    a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
    a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
    a.closePath()
}
function pa(a, b) {
    for (var c = a.toString(); 4 > c.length; )
        c = "0" + c;
    return c + ("." + b)
}
function qa(a, b) {
    if (a == b)
        return !0;
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a == b
}
function ra(a, b, c, d, e, f) {
    if (0 == b.length)
        return 0 != (c & 1024) && (d.right = d.left,
        d.bottom = d.top),
        0;
    e.$n || (a.font = e.Wk());
    var g = 0
      , h = String.fromCharCode(10)
      , k = String.fromCharCode(13)
      , m = b.indexOf(h);
    if (0 <= m) {
        var l = new sa;
        ta(l, d);
        var t, w = 0, r = 0, u;
        do
            t = -1,
            w < b.length && (t = b.indexOf(k, w)),
            u = Math.max(m, t),
            t == m - 1 && m--,
            m = b.substring(w, m),
            t = ua(a, m, c, l, f, e),
            r = Math.max(r, l.right - l.left),
            g += t,
            l.top += t,
            l.bottom = d.bottom,
            l.right = d.right,
            w = u + 1,
            m = -1,
            w < b.length ? m = b.indexOf(h, w) : (t = ua(a, "", c, l, f, e),
            r = Math.max(r, l.right - l.left),
            g += t,
            l.top += t,
            l.bottom = d.bottom,
            l.right = d.right);
        while (0 <= m);
        w < b.length && (m = b.substring(w),
        t = ua(a, m, c, l, f, e),
        r = Math.max(r, l.right - l.left),
        g += t);
        0 != (c & 1024) && (d.right = d.left + r,
        d.bottom = l.bottom);
        return g
    }
    return g = ua(a, b, c | 2048, d, f, e)
}
var va = null;
function ua(a, b, c, d, e, f) {
    0 == b.length && (b = " ");
    var g, h;
    g = f.Pi();
    h = f.$n ? f.measureText(" ") : a.measureText(" ").width;
    var k = d.right - d.left, m = 0, l = 0, t, w, r, u = 0, n = 0, z;
    null == va && (va = Array(100));
    var E, A, v = !1, H = !1, G = d.top;
    w = g;
    0 != (w & 1) && w++;
    var O = G;
    do {
        w = m;
        r = z = 0;
        n += g;
        do {
            va[z] = r;
            z += 1;
            t = l;
            l = -1;
            w < b.length && (l = b.indexOf(" ", w));
            -1 == l && (l = b.length);
            if (l < w) {
                r -= h;
                break
            }
            A = b.substring(w, l);
            E = f.$n ? f.measureText(A) : a.measureText(A).width;
            if (r + E > k) {
                z--;
                if (0 < z) {
                    r -= h;
                    l = t;
                    break
                }
                for (t = w; t < l; t++) {
                    E = f.$n ? f.measureText(b.substring(t, t + 1)) : a.measureText(b.substring(t, t + 1)).width;
                    if (r + E >= k) {
                        t--;
                        if (0 < t) {
                            u = Math.max(r, u);
                            0 == (c & 1024) && (r = 0 != (c & 1) ? d.left + (d.right - d.left) / 2 - r / 2 : 0 != (c & 2) ? d.right - r : d.left,
                            A = b.substring(w, t),
                            e.push(new wa(r,G,A)));
                            l = t - 1;
                            H = v = !0;
                            break
                        }
                        l = t < b.length ? b.indexOf(" ", t) : -1;
                        v = !0;
                        0 <= l && (H = !0);
                        break
                    }
                    r += E
                }
            }
            if (v)
                break;
            r += E;
            if (r + h > k)
                break;
            r += h;
            w = l + 1
        } while (1);
        if (0 == H) {
            if (v)
                break;
            u = Math.max(r, u);
            if (0 == (c & 1024))
                for (r = 0 != (c & 1) ? d.left + (d.right - d.left) / 2 - r / 2 : 0 != (c & 2) ? d.right - r : d.left,
                w = m,
                m = 0; m < z; m++) {
                    l = -1;
                    w < b.length && (l = b.indexOf(" ", w));
                    -1 == l && (l = b.length);
                    if (l < w)
                        break;
                    A = b.substring(w, l);
                    e.push(new wa(r + va[m],G,A));
                    w = l + 1
                }
        }
        H = v = !1;
        G += g;
        m = l + 1
    } while (m < b.length);
    d.right = d.left + u;
    d.bottom = O + n;
    return n
}
function xa(a, b, c, d, e, f) {
    var g;
    if (e.$n)
        for (f = 0; f < d.length; f++)
            g = d[f],
            e.fillText(a, g.text, b + g.x, c + g.y);
    else
        for (a.font = e.Wk(),
        a.fillStyle = ma(f),
        a.textAlign = "left",
        a.textBaseline = "top",
        f = 0; f < d.length; f++)
            g = d[f],
            a.fillText(g.text, b + g.x, c + g.y)
}
function ya(a, b) {
    var c = a.toString();
    if (0 != (b & za)) {
        var d = b & za;
        if (c.length > d)
            c = c.substring(c.length - d);
        else
            for (; c.length < d; )
                c = "0" + c
    }
    return c
}
function Aa(a, b) {
    var c;
    if (0 == (b & Ba))
        c = a.toString();
    else {
        var d = Math.floor(((b & Ca) >> Da) + 1);
        c = -1;
        0 != (b & Fa) ? c = (b & Ga) >> Ha : 0 != a && -1 < a && 1 > a && (c = d);
        c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
        var e, f, g;
        if (0 != (b & Ia))
            for (f = e = 0; f < c.length; f++)
                g = c.charAt(f),
                "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
        f = !1;
        "-" == c.charAt(0) && (f = !0,
        c = c.substr(1));
        for (; e < d; )
            c = "0" + c,
            e++;
        f && (c = "-" + c)
    }
    return c
}
function wa(a, b, c) {
    this.x = a;
    this.y = b;
    this.text = c
}
var Ja = !1
  , Ka = !1
  , La = !1
  , Ma = window.XMLHttpRequest ? new XMLHttpRequest : null;
if (Ma && Ma.overrideMimeType)
    try {
        Ka = "string" === typeof (new XMLHttpRequest).responseType,
        0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Ka = !1)
    } catch (a) {}
else {
    var Ja = !0
      , Na = document.createElement("script");
    Na.type = "text/vbscript";
    Na.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n                Dim xhr\n\r\n                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n                xhr.Open "GET", fileName, False\n\r\n                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n                xhr.send\n\r\n                Dim byteArray()\n\r\n                if xhr.Status = 200 Then\n\r\n                    Dim byteString\n\r\n                    Dim i\n\r\n                    byteString=xhr.responseBody\n\r\n                    ReDim byteArray(LenB(byteString))\n\r\n                    For i = 1 To LenB(byteString)\n\r\n                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n                    Next\n\r\n                End If\n\r\n                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n            End Function';
    document.head.appendChild(Na)
}
if (Ka) {
    var Oa = new FileReader;
    try {
        Oa.readAsBinaryString && (La = !0)
    } catch (a) {}
    Oa = null
}
Ma = null;
function Pa() {
    this.Ff = "";
    this.offset = this.Ba = 0;
    this.Oh = !1
}
Pa.prototype = {
    na: function() {
        return this.Ff.charCodeAt(this.Ba++) & 255
    },
    getFile: function(a, b, c) {
        this.Ez = b;
        if (Ja)
            try {
                var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(), e, f = d.length;
                f > c && (f = c);
                for (e = 0; e < f; e++)
                    this.Ff += String.fromCharCode(d[e]);
                this.end = this.Ff.length;
                this.Ez()
            } catch (k) {}
        else {
            var g = new XMLHttpRequest;
            g.open("GET", a, !0);
            var h = this;
            Ka ? (g.responseType = "blob",
            g.onload = function() {
                if (4 == g.readyState && 200 == g.status) {
                    var a = new FileReader;
                    a.onloadend = function() {
                        if (La)
                            h.Ff += a.result;
                        else {
                            var b = new Uint8Array(a.result), c;
                            for (c = 0; c < b.length; c++)
                                h.Ff += String.fromCharCode(b[c])
                        }
                        h.end = h.Ff.length;
                        h.Ez()
                    }
                    ;
                    La ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
                }
            }
            ) : (g.overrideMimeType("text/plain; charset=x-user-defined"),
            g.onload = function() {
                4 == g.readyState && 200 == g.status && (h.Ff += g.responseText,
                h.end = h.Ff.length,
                h.Ez())
            }
            );
            g.send(null)
        }
    },
    bd: function(a) {
        var b = "";
        if (this.Oh)
            if (1 > arguments.length) {
                if (this.Ba >= this.end)
                    return b;
                c = this.Ba;
                for (b = Qa(this); b && !(this.Ba >= this.end); )
                    b = Qa(this);
                b = (this.Ba - c - 2) / 2;
                this.Ba = c;
                b = this.bd(b);
                this.na();
                this.na()
            } else {
                b = "";
                c = this.Ba;
                for (e = 0; e < a; e++) {
                    d = Qa(this);
                    if (0 == d)
                        break;
                    b += String.fromCharCode(d)
                }
                this.Ba = c + 2 * a
            }
        else if (1 > arguments.length) {
            if (this.Ba >= this.end)
                return b;
            for (var c = this.Ba, b = this.na(); b && !(this.Ba >= this.end); )
                b = this.na();
            b = this.Ba - c - 1;
            this.Ba = c;
            b = this.bd(b);
            this.na()
        } else {
            for (var d, c = this.Ba, e = 0; e < a; ++e) {
                d = this.na();
                if (0 == d)
                    break;
                b += String.fromCharCode(d)
            }
            this.Ba = c + a
        }
        return b
    },
    seek: function(a) {
        a >= this.end && (a = this.end);
        this.Ba = a
    },
    dC: function() {
        var a = new Ra;
        a.dC(this);
        return a
    }
};
function Sa(a) {
    var b = [], c;
    for (c = 0; 4 > c; c++)
        b[c] = a.na();
    return b
}
function Ta(a) {
    var b, c, d, e, f, g, h;
    b = a.na();
    c = a.na();
    d = a.na();
    e = a.na();
    f = a.na();
    g = a.na();
    h = a.na();
    a = 72057594037927936 * a.na() + 281474976710656 * h + 1099511627776 * g + 4294967296 * f + 16777216 * e + 65536 * d + 256 * c + b;
    0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
    return a / 4294967296
}
function Ua(a) {
    var b, c, d;
    b = a.na();
    c = a.na();
    d = a.na();
    a = 16777216 * a.na() + 65536 * d + 256 * c + b;
    2147483648 < a && (a -= 4294967296);
    return a / 65536
}
function Va(a) {
    var b, c, d;
    b = a.na();
    c = a.na();
    d = a.na();
    a.na();
    return 65536 * b + 256 * c + d
}
function D(a) {
    var b, c, d;
    b = a.na();
    c = a.na();
    d = a.na();
    a = 16777216 * a.na() + 65536 * d + 256 * c + b;
    return 2147483647 >= a ? a : a - 4294967296
}
function Qa(a) {
    var b;
    b = a.na();
    return 256 * a.na() + b
}
function F(a) {
    var b;
    b = a.na();
    a = 256 * a.na() + b;
    return 32768 > a ? a : a - 65536
}
function S(a) {
    var b;
    b = a.na();
    return 256 * a.na() + b
}
function T(a, b) {
    a.Ba += b
}
function Wa(a, b, c) {
    var d = new Pa;
    d.Ff = a.Ff;
    d.offset = b;
    d.Ba = b;
    d.end = b + c;
    d.Oh = a.Oh;
    return d
}
function Xa(a, b) {
    a.Ff = b;
    a.end = b.length;
    a.na = function() {
        return a.Ff.charCodeAt(a.Ba++) & 255
    }
}
function V() {
    this.sg = []
}
V.prototype = {
    add: function(a) {
        this.sg.push(a)
    },
    get: function(a) {
        return a < this.sg.length ? this.sg[a] : null
    },
    put: function(a, b) {
        this.sg[a] = b
    },
    set: function(a, b) {
        a < this.sg.length && (this.sg[a] = b)
    },
    indexOf: function(a) {
        return this.sg.indexOf(a)
    },
    contains: function(a) {
        return 0 <= this.sg.indexOf(a)
    },
    size: function() {
        return this.sg.length
    },
    clear: function() {
        this.sg.length = 0
    },
    sort: function(a) {
        Array.prototype.sort.call(this.sg, a)
    }
};
function Ya(a, b) {
    var c = a.sg.indexOf(b);
    0 <= c && a.sg.splice(c, 1)
}
function Za(a, b) {
    b < a.sg.length && a.sg.splice(b, 1)
}
function sa(a, b, c, d) {
    this.left = a ? a : 0;
    this.top = b ? b : 0;
    this.right = c ? c : 0;
    this.bottom = d ? d : 0
}
sa.prototype = {
    load: function(a) {
        this.left = D(a);
        this.top = D(a);
        this.right = D(a);
        this.bottom = D(a)
    }
};
function ta(a, b) {
    a.left = b.left;
    a.right = b.right;
    a.top = b.top;
    a.bottom = b.bottom
}
function $a() {
    this.y = this.x = 0
}
function Ra() {
    this.fd = 12;
    this.Ah = 400;
    this.zh = 0;
    this.yh = "Arial";
    this.$n = !1
}
Ra.prototype = {
    Wk: function() {
        var a;
        a = this.zh ? "italic " : "normal ";
        var b = 100 * Math.floor(this.Ah / 100)
          , b = Math.max(b, 100)
          , b = Math.min(b, 900);
        a = a + (b + " ") + (this.fd + "px ");
        return a += this.yh
    },
    Pi: function() {
        return this.fd + Math.ceil(this.fd / 8)
    },
    ya: function() {
        this.yh = "Arial";
        this.fd = 13;
        this.Ah = 400;
        this.zh = 0
    },
    dC: function(a) {
        this.fd = D(a);
        0 > this.fd && (this.fd = -this.fd);
        T(a, 12);
        this.Ah = D(a);
        this.zh = a.na();
        a.na();
        a.na();
        T(a, 5);
        this.yh = a.bd(32)
    }
};
function ab(a, b, c) {
    this.app = a;
    this.width = b;
    this.height = c;
    this.canvas = document.createElement("canvas");
    this.canvas.width = b;
    this.canvas.height = c;
    this.vg = this.canvas.getContext("2d")
}
ab.prototype = {
    measureText: function(a, b) {
        b = bb(this.app, b);
        if (b.$n)
            return b.measureText(a);
        this.vg.font = b.Wk();
        return this.vg.measureText(a).width
    },
    resize: function(a, b) {
        if (a != this.width || b != this.height)
            this.width = a,
            this.height = b,
            this.canvas.width = a,
            this.canvas.height = b
    },
    Oc: function(a, b, c, d, e) {
        a.Rm(this.canvas, b, c, this.width, this.height, d, e)
    }
};
function cb(a, b, c, d, e, f, g) {
    var h = [];
    c || (c = new sa(0,0,a.width,a.height));
    e = bb(a.app, e);
    b = ra(a.vg, b, 5, c, e, h);
    if (0 != b)
        switch (b = a.height / 2 - b / 2,
        f) {
        case 1:
            xa(a.vg, 1, b + 1, h, e, g);
            xa(a.vg, 0, b, h, e, d);
            break;
        case 2:
            xa(a.vg, 1, b, h, e, g);
            xa(a.vg, 1, b + 2, h, e, g);
            xa(a.vg, 0, b + 1, h, e, g);
            xa(a.vg, 2, b + 1, h, e, g);
            xa(a.vg, 1, b + 1, h, e, d);
            break;
        case 0:
            xa(a.vg, 0, b, h, e, d)
        }
}
function db(a, b) {
    b ? (a.vg.fillStyle = ma(b),
    a.vg.fillRect(0, 0, a.width, a.height)) : a.vg.clearRect(0, 0, a.width, a.height)
}
function eb(a, b, c, d, e, f) {
    if (b == a.IL && c == a.EL && d == a.HL && e == a.FL && f == a.DL)
        return a.GL;
    var g = a.vg;
    g.clearRect(0, 0, a.width, a.height);
    d || (d = new sa(0,0,a.width,a.height));
    var h = [];
    e = bb(a.app, e);
    var k = ra(g, b, c, d, e, h);
    if (0 != k) {
        var m = 0;
        0 != (c & 8) ? m = a.height - k : 0 != (c & 4) && (m = a.height / 2 - k / 2);
        xa(g, 0, m, h, e, f)
    }
    a.IL = b;
    a.EL = c;
    a.HL = d;
    a.FL = e;
    a.DL = f;
    return a.GL = k
}
var fb = [{
    nd: navigator.userAgent,
    gf: "Chrome",
    Ee: "Chrome"
}, {
    nd: navigator.userAgent,
    gf: "OmniWeb",
    ir: "OmniWeb/",
    Ee: "OmniWeb"
}, {
    nd: navigator.vendor,
    gf: "Apple",
    Ee: "Safari",
    ir: "Version"
}, {
    GM: window.opera,
    Ee: "Opera",
    ir: "Version"
}, {
    nd: navigator.vendor,
    gf: "iCab",
    Ee: "iCab"
}, {
    nd: navigator.vendor,
    gf: "KDE",
    Ee: "Konqueror"
}, {
    nd: navigator.userAgent,
    gf: "Firefox",
    Ee: "Firefox"
}, {
    nd: navigator.vendor,
    gf: "Camino",
    Ee: "Camino"
}, {
    nd: navigator.userAgent,
    gf: "Netscape",
    Ee: "Netscape"
}, {
    nd: navigator.userAgent,
    gf: "MSIE",
    Ee: "Explorer",
    ir: "MSIE"
}, {
    nd: navigator.userAgent,
    gf: "Gecko",
    Ee: "Mozilla",
    ir: "rv"
}, {
    nd: navigator.userAgent,
    gf: "Mozilla",
    Ee: "Netscape",
    ir: "Mozilla"
}]
  , gb = [{
    nd: navigator.platform,
    gf: "Win",
    Ee: "Windows"
}, {
    nd: navigator.platform,
    gf: "Mac",
    Ee: "MacOS"
}, {
    nd: navigator.userAgent,
    gf: "iPhone",
    Ee: "iOS"
}, {
    nd: navigator.userAgent,
    gf: "iPod",
    Ee: "iOS"
}, {
    nd: navigator.userAgent,
    gf: "iPad",
    Ee: "iOS"
}, {
    nd: navigator.userAgent,
    gf: "Android",
    Ee: "Android"
}, {
    nd: navigator.platform,
    gf: "Windows Phone",
    Ee: "Windows Phone"
}, {
    nd: navigator.platform,
    gf: "Linux",
    Ee: "Linux"
}];
function hb() {
    this.zL = !!window.opr && !!opr.vO || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
    this.yL = "undefined" !== typeof InstallTrigger;
    this.AL = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
    this.fq = !!document.documentMode;
    this.vL = !this.fq && !!window.StyleMedia;
    (this.wL = (this.CF = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) && -1 != navigator.userAgent.indexOf("Edg")) || this.CF || this.vL || this.fq || this.yL || this.zL || this.AL || ib(this, fb);
    this.version = jb(this, navigator.userAgent) || jb(this, navigator.appVersion) || "Unknown version";
    ib(this, gb)
}
hb.prototype = {};
function jb(a, b) {
    var c = b.indexOf(a.oI);
    if (-1 != c)
        return parseFloat(b.substring(c + a.oI.length + 1))
}
function ib(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c].nd
          , e = b[c].GM;
        a.oI = b[c].ir || b[c].Ee;
        if (d) {
            if (-1 != d.indexOf(b[c].gf))
                break
        } else if (e)
            break
    }
}
;function kb() {}
function lb() {
    this.fa = 0;
    this.name = null;
    this.index = 0
}
function mb() {}
mb.prototype = {
    eg: function() {}
};
function nb() {}
nb.prototype = {
    eg: function(a) {
        var b;
        if (26 == this.ha[0].code) {
            b = this.ha[0].value;
            var c = a.m;
            if (-1 == (null == c.Hs || -1 == b || b >= c.Is ? -1 : c.Hs[b]))
                return
        } else {
            b = ob(a, this.ha[0]) - 1;
            if (0 > b || 4096 <= b)
                return;
            a.m.GO && b++;
            b |= 32768
        }
        a.Uc = pb;
        a.Zq = b;
        a.m.ep = !0
    }
};
function qb() {}
qb.prototype = {
    eg: function(a) {
        var b = ob(a, this.ha[0])
          , c = this.Gf
          , d = rb(a.m);
        d[c] = b;
        sb(a, c, tb, d[c])
    }
};
function ub() {}
ub.prototype = {
    eg: function(a) {
        var b = ob(a, this.ha[0])
          , c = this.Gf
          , b = vb(a.m)[c] - b
          , d = vb(a.m);
        if (b != d[c]) {
            if (0 == b && 0 != d[c]) {
                var e = a.G
                  , f = new wb(0,-262151,0,null,c);
                null == e.nk && (e.nk = new V);
                e.nk.add(f)
            }
            d[c] = b;
            sb(a, c, xb, b)
        }
    }
};
function yb() {}
yb.prototype = {
    eg: function(a) {
        var b = ob(a, this.ha[0])
          , c = this.Gf
          , d = rb(a.m);
        d[c] += b;
        sb(a, c, tb, d[c])
    }
};
function zb() {}
zb.prototype = {
    eg: function(a) {
        var b = Ab(a.G, this);
        if (null != b) {
            var c = new Bb;
            Cb(this.ha[0], a, 1, c) && (Db(b, c.x),
            Eb(b, c.y),
            -1 != c.dir && (c = c.dir &= 31,
            a.Ed(b) != c && (b.b.Fb = c,
            b.b.la = !0,
            b.L.Va.ri(c),
            2 == b.Bb && Fb(b.cb, 0))))
        }
    }
};
function Gb() {}
Gb.prototype = {
    eg: function(a) {
        a = Ab(a.G, this);
        null != a && null != a.L && a.L.Va.stop()
    }
};
function Hb() {}
Hb.prototype = {
    eg: function(a) {
        a = Ab(a.G, this);
        null != a && null != a.ca && (Ib(a.ca),
        a.ca.Ga &= ~Jb,
        a.ca.vC = 0)
    }
};
function Kb() {}
Kb.prototype = {
    eg: function(a) {
        var b = Ab(a.G, this);
        if (null != b) {
            var c;
            c = 53 == this.ha[0].code ? ob(a, this.ha[0]) : this.ha[0].value;
            0 <= c && null != b.za && (c >= b.za.Hc.length && Lb(b.za, c + 10),
            a = Mb(a, this.ha[1]),
            b.za.Hc[c] = a)
        }
    }
};
function Nb() {}
Nb.prototype = {
    eg: function(a) {
        a = Ab(a.G, this);
        null != a && 0 <= this.ci && null != a.za && (this.ci >= a.za.Hc.length && Lb(a.za, this.ci + 10),
        a.za.Hc[this.ci] = this.value)
    }
};
function Ob() {}
Ob.prototype = {
    eg: function(a) {
        var b = Ab(a.G, this);
        if (null != b) {
            var c;
            c = 53 == this.ha[0].code ? ob(a, this.ha[0]) : this.ha[0].value;
            0 <= c && null != b.za && (c >= b.za.Hc.length && Lb(b.za, c + 10),
            a = Mb(a, this.ha[1]),
            b.za.Hc[c] += a)
        }
    }
};
function Pb() {}
Pb.prototype = {
    eg: function(a) {
        a = Ab(a.G, this);
        null != a && 0 <= this.ci && null != a.za && (this.ci >= a.za.Hc.length && Lb(a.za, this.ci + 10),
        a.za.Hc[this.ci] += this.value)
    }
};
W.oD = 6;
W.tI = -983041;
W.uI = -1507329;
W.vI = -1572865;
function W() {}
W.create = function(a) {
    var b = a.file.Ba, c = S(a.file), d, e = D(a.file);
    switch (e) {
    case -2752513:
        d = new CND_STARTCHILDEVENT;
        break;
    case -2686977:
        d = new Qb;
        break;
    case -2555905:
        d = new CND_RUNNINGAS;
        break;
    case -2490369:
        d = new CND_COMPAREGCONST_GT;
        break;
    case -2424833:
        d = new CND_COMPAREGCONST_GE;
        break;
    case -2359297:
        d = new CND_COMPAREGCONST_LT;
        break;
    case -2293761:
        d = new CND_COMPAREGCONST_LE;
        break;
    case -2228225:
        d = new CND_COMPAREGCONST_NE;
        break;
    case -2162689:
        d = new CND_COMPAREGCONST_EQ;
        break;
    case -2097153:
        d = new CND_COMPAREGCONST_GT;
        break;
    case -2031617:
        d = new CND_COMPAREGCONST_GE;
        break;
    case -1966081:
        d = new CND_COMPAREGCONST_LT;
        break;
    case -1900545:
        d = new CND_COMPAREGCONST_LE;
        break;
    case -1835009:
        d = new CND_COMPAREGCONST_NE;
        break;
    case -1769473:
        d = new CND_COMPAREGCONST_EQ;
        break;
    case -1703937:
        d = new Qb;
        break;
    case -1638401:
        d = new CND_CHANCE;
        break;
    case -1572865:
        d = new Qb;
        break;
    case -1507329:
        d = new Qb;
        break;
    case -1441793:
        d = new CND_GROUPSTART;
        break;
    case -1245185:
        d = new CND_COMPAREGSTRING;
        break;
    case -983041:
        d = new CND_ONLOOP;
        break;
    case -720897:
        d = new CND_GROUPACTIVATED;
        break;
    case -655361:
        d = new Qb;
        break;
    case -589825:
        d = new Qb;
        break;
    case -524289:
        d = new Qb;
        break;
    case -458753:
        d = new CND_COMPAREG;
        break;
    case -393217:
        d = new CND_NOTALWAYS;
        break;
    case -327681:
        d = new CND_ONCE;
        break;
    case -262145:
        d = new CND_REPEAT;
        break;
    case -196609:
        d = new CND_NOMORE;
        break;
    case -131073:
        d = new CND_COMPARE;
        break;
    case -65537:
        d = new Qb;
        break;
    case -1:
        d = new Rb;
        break;
    case -524290:
        d = new CND_SPCHANNELPAUSED;
        break;
    case -458754:
        d = new CND_NOSPCHANNELPLAYING;
        break;
    case -327682:
        d = new CND_SPSAMPAUSED;
        break;
    case -131074:
        d = new CND_NOSAMPLAYING;
        break;
    case -2:
        d = new CND_NOSPSAMPLAYING;
        break;
    case -458755:
        d = new CND_ENDOFPAUSE;
        break;
    case -393219:
        d = new CND_ISVSYNCON;
        break;
    case -327683:
        d = new CND_ISLADDER;
        break;
    case -262147:
        d = new CND_ISOBSTACLE;
        break;
    case -196611:
        d = new CND_QUITAPPLICATION;
        break;
    case -131075:
        d = new CND_LEVEL;
        break;
    case -65539:
        d = new CND_END;
        break;
    case -3:
        d = new CND_START;
        break;
    case -458756:
        d = new Sb;
        break;
    case -393220:
        d = new CND_TIMEREQUALS;
        break;
    case -327684:
        d = new CND_ONEVENT;
        break;
    case -262148:
        d = new CND_TIMEOUT;
        break;
    case -196612:
        d = new CND_EVERY;
        break;
    case -131076:
        d = new CND_TIMER;
        break;
    case -65540:
        d = new CND_TIMERINF;
        break;
    case -4:
        d = new CND_TIMERSUP;
        break;
    case -720902:
        d = new CND_ONMOUSEWHEELDOWN;
        break;
    case -655366:
        d = new CND_ONMOUSEWHEELUP;
        break;
    case -589830:
        d = new CND_MOUSEON;
        break;
    case -524294:
        d = new CND_ANYKEY;
        break;
    case -458758:
        d = new CND_MKEYDEPRESSED;
        break;
    case -393222:
        d = new CND_MCLICKONOBJECT;
        break;
    case -327686:
        d = new CND_MCLICKINZONE;
        break;
    case -262150:
        d = new CND_MCLICK;
        break;
    case -196614:
        d = new CND_MONOBJECT;
        break;
    case -131078:
        d = new CND_MINZONE;
        break;
    case -65542:
        d = new CND_KBKEYDEPRESSED;
        break;
    case -6:
        d = new Tb;
        break;
    case -327687:
        d = new CND_JOYPUSHED;
        break;
    case -262151:
        d = new CND_NOMORELIVE;
        break;
    case -196615:
        d = new CND_JOYPRESSED;
        break;
    case -131079:
        d = new CND_LIVE;
        break;
    case -65543:
        d = new CND_SCORE;
        break;
    case -7:
        d = new CND_PLAYERPLAYING;
        break;
    case -1441797:
        d = new CND_CHOOSEALLINLINE;
        break;
    case -1376261:
        d = new CND_CHOOSEFLAGRESET;
        break;
    case -1310725:
        d = new CND_CHOOSEFLAGSET;
        break;
    case -1245189:
        d = new CND_CHOOSEVALUE;
        break;
    case -1179653:
        d = new CND_PICKFROMID;
        break;
    case -1114117:
        d = new CND_CHOOSEALLINZONE;
        break;
    case -1048581:
        d = new CND_CHOOSEALL;
        break;
    case -983045:
        d = new CND_CHOOSEZONE;
        break;
    case -917509:
        d = new CND_NUMOFALLOBJECT;
        break;
    case -851973:
        d = new CND_NUMOFALLZONE;
        break;
    case -786437:
        d = new CND_NOMOREALLZONE;
        break;
    case -720901:
        d = new CND_CHOOSEFLAGRESET_OLD;
        break;
    case -655365:
        d = new CND_CHOOSEFLAGSET_OLD;
        break;
    case -458757:
        d = new CND_CHOOSEVALUE_OLD;
        break;
    case -393221:
        d = new CND_PICKFROMID_OLD;
        break;
    case -327685:
        d = new CND_CHOOSEALLINZONE_OLD;
        break;
    case -262149:
        d = new CND_CHOOSEALL_OLD;
        break;
    case -196613:
        d = new CND_CHOOSEZONE_OLD;
        break;
    case -131077:
        d = new CND_NUMOFALLOBJECT_OLD;
        break;
    case -65541:
        d = new CND_NUMOFALLZONE_OLD;
        break;
    case -5:
        d = new CND_NOMOREALLZONE_OLD;
        break;
    case -5505022:
        d = new CND_CMPSCALEY;
        break;
    case -5439486:
        d = new CND_CMPSCALEX;
        break;
    case -5373950:
        d = new CND_CMPANGLE;
        break;
    case -5308409:
        d = new CND_CCOUNTER;
        break;
    case -5439484:
        d = new CND_QEQUAL;
        break;
    case -5373948:
        d = new CND_QFALSE;
        break;
    case -5308412:
        d = new CND_QEXACT;
        break;
    case -5505015:
        d = new CND_CCAISPAUSED;
        break;
    case -5439479:
        d = new CND_CCAISVISIBLE;
        break;
    case -5373943:
        d = new CND_CCAAPPFINISHED;
        break;
    case -5308407:
        d = new CND_CCAFRAMECHANGED;
        break;
    default:
        switch (e & 4294901760) {
        case -3211264:
            d = new CND_EXTCMPINSTANCEDATA;
            break;
        case -3145728:
            d = new CND_EXTPICKMAXVALUE;
            break;
        case -3080192:
            d = new CND_EXTPICKMINVALUE;
            break;
        case -3014656:
            d = new CND_EXTCMPLAYER;
            break;
        case -2949120:
            d = new CND_EXTCOMPARE;
            break;
        case -2883584:
            d = new CND_EXTPICKCLOSEST;
            break;
        case -2818048:
            d = new Ub;
            break;
        case -2752512:
            d = new Ub;
            break;
        case -2686976:
            d = new CND_EXTONLOOP;
            break;
        case -2621440:
            d = new CND_EXTISSTRIKEOUT;
            break;
        case -2555904:
            d = new CND_EXTISUNDERLINE;
            break;
        case -2490368:
            d = new CND_EXTISITALIC;
            break;
        case -2424832:
            d = new CND_EXTISBOLD;
            break;
        case -2359296:
            d = new CND_EXTCMPVARSTRING;
            break;
        case -2293760:
            d = new CND_EXTPATHNODENAME;
            break;
        case -2228224:
            d = new CND_EXTCHOOSE;
            break;
        case -2162688:
            d = new CND_EXTNOMOREOBJECT;
            break;
        case -2097152:
            d = new CND_EXTNUMOFOBJECT;
            break;
        case -2031616:
            d = new CND_EXTNOMOREZONE;
            break;
        case -1966080:
            d = new CND_EXTNUMBERZONE;
            break;
        case -1900544:
            d = new CND_EXTSHOWN;
            break;
        case -1835008:
            d = new CND_EXTHIDDEN;
            break;
        case -1769472:
            d = new Vb;
            break;
        case -1703936:
            d = new CND_EXTCMPVARFIXED;
            break;
        case -1638400:
            d = new CND_EXTFLAGSET;
            break;
        case -1572864:
            d = new CND_EXTFLAGRESET;
            break;
        case -1507328:
            d = new CND_EXTISCOLBACK;
            break;
        case -1441792:
            d = new CND_EXTNEARBORDERS;
            break;
        case -1376256:
            d = new CND_EXTENDPATH;
            break;
        case -1310720:
            d = new CND_EXTPATHNODE;
            break;
        case -1245184:
            d = new CND_EXTCMPACC;
            break;
        case -1179648:
            d = new CND_EXTCMPDEC;
            break;
        case -1114112:
            d = new CND_EXTCMPX;
            break;
        case -1048576:
            d = new CND_EXTCMPY;
            break;
        case -983040:
            d = new CND_EXTCMPSPEED;
            break;
        case -917504:
            d = new CND_EXTCOLLISION;
            break;
        case -851968:
            d = new Wb;
            break;
        case -786432:
            d = new CND_EXTOUTPLAYFIELD;
            break;
        case -720896:
            d = new CND_EXTINPLAYFIELD;
            break;
        case -655360:
            d = new CND_EXTISOUT;
            break;
        case -589824:
            d = new CND_EXTISIN;
            break;
        case -524288:
            d = new CND_EXTFACING;
            break;
        case -458752:
            d = new CND_EXTSTOPPED;
            break;
        case -393216:
            d = new CND_EXTBOUNCING;
            break;
        case -327680:
            d = new CND_EXTREVERSED;
            break;
        case -262144:
            d = new CND_EXTISCOLLIDING;
            break;
        case -196608:
            d = new CND_EXTANIMPLAYING;
            break;
        case -131072:
            d = new CND_EXTANIMENDOF;
            break;
        case -65536:
            d = new CND_EXTCMPFRAME;
            break;
        default:
            d = new Xb
        }
    }
    if (null != d && (d.Qa = e,
    d.Gf = F(a.file),
    d.Nd = F(a.file),
    d.Qb = a.file.na(),
    d.Sh = a.file.na(),
    d.Ce = a.file.na(),
    d.Qn = a.file.na(),
    d.YK = S(a.file),
    0 < d.Ce))
        for (d.ha = Array(d.Ce),
        e = 0; e < d.Ce; e++)
            d.ha[e] = Yb(a);
    a.file.seek(b + c);
    return d
}
;
W.oM = function(a) {
    return a.Sh & Zb ? !1 : !0
}
;
W.TG = function(a) {
    return a.Sh & Zb ? !0 : !1
}
;
W.pM = function(a, b) {
    return a.Sh & Zb ? !b : b
}
;
W.IK = function(a) {
    var b = a.G.pi
      , c = b.Pn;
    a = b.Pn = a.se;
    if (a == c)
        return !1;
    a--;
    return a == c ? !1 : !0
}
;
W.JK = function(a, b) {
    var c, d = b.Yv;
    if (null == d)
        d = new V,
        b.Yv = d;
    else
        for (c = 0; c < d.size(); c++)
            if (d.get(c) == a)
                return !1;
    d.add(a);
    d = b.BF;
    if (null == d)
        return !0;
    for (c = 0; c < d.size(); c++)
        if (d.get(c) == a)
            return !1;
    return !0
}
;
W.KO = function(a, b) {
    return 0 == b ? !1 : b == a.se || b == a.se - 1 ? !0 : !1
}
;
function Qb() {}
Qb.prototype = {
    Bj: function() {
        return !1
    },
    Ag: function() {
        return !1
    }
};
function Rb() {}
Rb.prototype = {
    Bj: function() {
        return !0
    },
    Ag: function() {
        return !0
    }
};
function W() {}
W.prototype = {};
function $b(a, b, c) {
    a = ac(b.G, a.Nd);
    for (var d = b.G.Rn; null != a; )
        0 == c.WK(a) && (d--,
        bc(b.G)),
        a = cc(b.G);
    return 0 != d ? !0 : !1
}
function Tb() {}
Tb.prototype = {
    Bj: function(a) {
        return this.Ag(a)
    },
    Ag: function(a) {
        return 0 == a.m.We[this.ha[0].key] ? W.TG(this) : W.IK(a) ? W.oM(this) : W.TG(this)
    }
};
function Sb() {}
Sb.prototype = {
    Bj: function(a) {
        return this.Ag(a)
    },
    Ag: function(a) {
        var b = this.ha[1];
        if (0 == b.Ux)
            a = 22 == this.ha[0].code ? ob(a, this.ha[0]) : this.ha[0].ph,
            b.value = a,
            b.Ux = -1;
        else if (b.value -= a.cu,
        0 >= b.value)
            return a = 22 == this.ha[0].code ? ob(a, this.ha[0]) : this.ha[0].ph,
            b.value += a,
            !0;
        return !1
    }
};
function Vb() {}
Vb.prototype = {
    Bj: function(a) {
        return this.Ag(a)
    },
    Ag: function(a) {
        var b = ac(a.G, this.Nd);
        if (null == b)
            return !1;
        var c = a.G.Rn, d, e = this.ha[1];
        do
            d = 53 == this.ha[0].code ? ob(a, this.ha[0]) : this.ha[0].value,
            0 <= d && null != b.za ? (b = d < b.za.Hc.length ? dc(b.za, d) : 0,
            d = Mb(a, e),
            0 == ec(b, d, e.Lz) && (c--,
            bc(a.G))) : (c--,
            bc(a.G)),
            b = cc(a.G);
        while (null != b);
        return 0 != c
    }
};
function Ub() {}
Ub.prototype = {
    Bj: function(a) {
        return this.Ag(a)
    },
    Ag: function(a) {
        var b = ac(a.G, this.Nd);
        if (null == b)
            return !1;
        var c = a.G.Rn
          , d = this.ha[0].value
          , e = this.ha[1]
          , f = e.Gb[0].value;
        do
            0 <= d && null != b.za ? (b = d < b.za.Hc.length ? dc(b.za, d) : 0,
            0 == ec(b, f, e.Lz) && (c--,
            bc(a.G))) : (c--,
            bc(a.G)),
            b = cc(a.G);
        while (null != b);
        return 0 != c
    }
};
function Wb() {}
Wb.prototype = p(new W, {
    Bj: function(a, b) {
        return W.JK(this.YK, b) ? (fc(a.G, b),
        !0) : 0 == (a.G.pi.lb & gc) ? !1 : a.G.iC = !0
    },
    Ag: function(a) {
        return W.pM(this, $b(this, a, this))
    },
    WK: function(a) {
        return hc(a.c, a, a.b.xc, a.b.Kc, a.b.Lc, a.B, a.A, 0, ic)
    }
});
function jc() {}
jc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = ""
    }
};
function kc() {}
kc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = 0
    }
};
function lc() {}
lc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = this.value
    }
};
function mc() {}
mc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = this.value;
        a.Un = !0
    }
};
function nc() {}
nc.prototype = {
    evaluate: function(a) {
        var b = oc(a.G, this.Tf);
        null == b ? a.uf[a.cd] = 0 : (b = null != b.za ? dc(b.za, this.di) : 0,
        Math.ceil(b) != b && (a.Un = !0),
        a.uf[a.cd] = b)
    }
};
function pc() {}
pc.prototype = {
    evaluate: function(a) {
        var b = oc(a.G, this.Tf);
        a.uf[a.cd] = null == b ? "" : qc(b.za, this.di)
    }
};
function rc() {}
rc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = sc(a.m, this.di)
    }
};
function tc() {}
tc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = uc(a.m, this.di)
    }
};
function vc() {}
vc.prototype = {
    evaluate: function(a) {
        a.uf[a.cd] = this.nd
    }
};
function wc() {}
wc.prototype = {
    evaluate: function(a) {
        var b = oc(a.G, this.Tf);
        a.oi++;
        var c = xc(a);
        null != b && null != b.za && 0 <= c && c < b.za.Hc.length ? (b = dc(b.za, c),
        Math.ceil(b) != b && (a.Un = !0),
        a.uf[a.cd] = b) : a.uf[a.cd] = 0
    }
};
function yc() {}
yc.prototype = {
    evaluate: function(a) {
        var b = oc(a.G, this.Tf);
        a.oi++;
        var c = xc(a);
        a.uf[a.cd] = null != b && null != b.za && 0 <= c && c < b.za.og.length ? qc(b.za, c) : ""
    }
};
window.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 292.24";
function zc() {
    var a = window.Re;
    a.Iv++;
    if (a.Iv > a.sM) {
        var b = (new Ac(a.nw.Ff,"content")).file("Application.ccj").MD();
        a.nw = null;
        a.file = new Pa;
        Xa(a.file, b);
        a.digest();
        Bc(a)
    } else
        b = D(a.file),
        a.nw.getFile(a.path.substring(0, a.path.length - 1) + a.Iv.toString(), zc, b)
}
function Cc() {
    var a = window.Re
      , b = D(a.Rs);
    0 > a.cw && (a.cw = b);
    b != a.cw && (a.Rs.Oh = !0,
    b = a.Rs.bd(),
    window.open(a.bw + b, "_self"));
    a.Qs = 25
}
window.loadApplication = zc;
window.loadInfo = Cc;
function Dc(a, b, c, d) {
    this.CL = !0 === d;
    this.tA = !1;
    this.CL ? (this.canvas = a.canvas,
    this.Rw = a.Rw) : "string" === typeof a ? (this.canvas = document.getElementById(a),
    this.Rw = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"),
    this.Rw = a);
    a = this.Mz = a.Mz || document.createElement("div");
    a.appendChild(this.canvas);
    this.Rw.appendChild(a);
    a.style.overflow = "hidden";
    a.style.position = "relative";
    a.style.transform = "translateZ(0)";
    a.style.margin = "0";
    a.style.padding = "0";
    a.style.display = "block";
    a.style.boxSizing = "content-box";
    a.className = "MMFDiv";
    this.nF = this.oF = this.eA = null;
    this.$p = 0;
    this.appName = this.fA = null;
    this.wq = 0;
    this.kA = this.yF = null;
    this.At = 0;
    this.pu = this.xf = this.uk = this.td = this.xa = this.ze = this.jA = null;
    this.gc = this.VH = 0;
    this.Js = this.Ks = this.kH = this.lu = this.Xs = null;
    this.wh = this.$c = this.Mx = 0;
    this.kb = this.file = this.frame = null;
    this.Pw = this.Qw = this.Jm = 0;
    this.hj = this.Y = null;
    this.DA = !1;
    this.gA = this.Ni = this.qF = this.rF = this.sF = this.ib = this.bb = this.Ms = this.Ls = this.sj = this.qj = 0;
    this.Hs = this.LB = this.jH = null;
    this.cj = this.bj = this.OK = this.NK = this.Is = 0;
    this.We = null;
    this.IE = 0;
    this.cursor = "auto";
    this.cx = !1;
    this.Zz = this.Qv = null;
    this.Oh = !1;
    this.rj = this.pj = 0;
    this.eB = this.yG = null;
    this.sb = this.alpha = this.zg = this.yg = this.KE = 0;
    this.file = b;
    this.Sm = "";
    this.path = c;
    b = c.lastIndexOf("/");
    0 <= b && (this.Sm = c.substring(0, b + 1));
    this.Cj = 0;
    this.Y = null;
    this.Xk = this.Yk = this.ph = 0;
    this.eo = !1;
    this.dc = [];
    this.Nt = -1;
    this.Yw = this.Go = this.qH = this.sH = this.rH = this.pH = this.oH = 0;
    this.oj = this.yf = this.IC = this.transition = null;
    this.xz = !1;
    this.Bv = new hb;
    this.yk = this.xk = this.vi = null;
    this.vt = 1770410840;
    this.$a = null;
    this.Kr = this.$k = 0;
    this.Ny = null;
    this.Jk = this.Ik = this.rn = this.qn = 0;
    this.Vd = this.Wd = 1;
    this.hasFocus = !0;
    this.Ps = this.yz = !1;
    this.lA = this.Zw = null;
    this.cw = -1;
    this.Rs = null;
    this.Qs = 1E9;
    this.bw = null;
    0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"),
    0 <= b && (this.bw = window.location.href.substring(0, b + 6),
    this.cw = -1,
    this.Qs = 25));
    this.yj = !1;
    this.PK = 3;
    this.us = new V;
    this.Kv = new V;
    this.Ke = [];
    this.Kg = 0;
    this.oh = null;
    this.UA = "Please touch the screen to start";
    this.fullScreen = !1;
    this.nI = "***version***";
    this.MC = this.yu = 0;
    this.Zi = null
}
Dc.prototype = {
    load: function() {
        this.sM = S(this.file);
        this.Iv = 1;
        this.nw = new Pa;
        var a = D(this.file);
        this.nw.getFile(this.path.substring(0, this.path.length - 1) + this.Iv.toString(), zc, a)
    },
    digest: function() {
        this.file.seek(0);
        var a = Sa(this.file);
        this.Oh = !1;
        80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.Oh = !0);
        this.file.Oh = this.Oh;
        T(this.file, 8);
        T(this.file, 4);
        this.ze = new Ec;
        this.xa = new Fc(this);
        this.td = new Gc(this);
        this.uk = new Hc(this);
        this.xf = new Ic(this);
        for (var b, c = 0; 32639 != c; )
            if (c = S(this.file),
            S(this.file),
            b = D(this.file),
            0 != b) {
                a = this.file.Ba + b;
                switch (c) {
                case 8739:
                    var d;
                    T(this.file, 4);
                    this.Ls = S(this.file);
                    this.Ms = S(this.file);
                    S(this.file);
                    S(this.file);
                    this.bb = S(this.file);
                    this.ib = S(this.file);
                    this.sF = D(this.file);
                    this.rF = D(this.file);
                    this.jH = Array(4);
                    for (d = 0; 4 > d; d++)
                        this.jH[d] = S(this.file);
                    this.LB = Array(32);
                    for (d = 0; 4 > d; d++)
                        for (b = 0; 8 > b; b++)
                            this.LB[8 * d + b] = S(this.file);
                    this.qF = Va(this.file);
                    this.Ni = D(this.file);
                    this.gA = D(this.file);
                    T(this.file, 1);
                    T(this.file, 3);
                    this.eA = Array(this.Ni);
                    this.oF = Array(this.Ni);
                    this.nF = Array(this.Ni);
                    this.fA = Array(this.Ni);
                    for (b = 0; b < this.Ni; b++)
                        this.fA[b] = null;
                    break;
                case 8773:
                    this.sb = D(this.file);
                    D(this.file);
                    D(this.file);
                    S(this.file);
                    S(this.file);
                    break;
                case 8740:
                    this.appName = this.file.bd();
                    break;
                case 8774:
                    D(this.file);
                    break;
                case 8750:
                    this.file.bd();
                    break;
                case 8782:
                    this.UA = this.file.bd();
                    break;
                case 8754:
                    this.wq = S(this.file);
                    this.kA = Array(this.wq);
                    this.yF = Array(this.wq);
                    for (b = 0; b < this.wq; b++)
                        this.kA[b] = D(this.file);
                    d = this.file;
                    var e = this.yF
                      , f = e.length;
                    for (b = 0; b < f; b++)
                        e[b] = d.na();
                    break;
                case 8755:
                    this.At = D(this.file);
                    this.jA = Array(this.At);
                    for (b = 0; b < this.At; b++)
                        this.jA[b] = this.file.bd();
                    break;
                case 8745:
                case 8767:
                    b = this.Qv = new Jc(this);
                    b.Tn = Array(6);
                    b.Jw = Array(6);
                    for (d = 0; 6 > d; d++)
                        b.Tn[d] = null,
                        b.Jw[d] = 0;
                    d = new Kc;
                    d.handle = 2;
                    Lc(b, d);
                    d = new Kc;
                    d.handle = 3;
                    Lc(b, d);
                    d = new Kc;
                    d.handle = 4;
                    Lc(b, d);
                    d = new Kc;
                    d.handle = 5;
                    Lc(b, d);
                    this.ze.wl(this.file);
                    break;
                case 8747:
                    this.Is = b / 2;
                    this.Hs = Array(this.Is);
                    for (b = 0; b < this.Is; b++)
                        this.Hs[b] = S(this.file);
                    break;
                case 8778:
                    this.Nt = D(this.file);
                    this.oH = D(this.file);
                    this.pH = D(this.file);
                    this.rH = D(this.file);
                    this.sH = D(this.file);
                    this.qH = Va(this.file);
                    this.Go = D(this.file);
                    -1 != this.Go && (b = this.file,
                    d = b.Ba,
                    d -= 4,
                    0 > d && (d = 0),
                    b.Ba = d,
                    this.Go = Va(this.file));
                    this.Yw = D(this.file);
                    this.DA = !0;
                    break;
                case 13107:
                    this.eA[this.$p] = this.file.Ba;
                    for (d = 0; 32639 != d; )
                        if (d = S(this.file),
                        S(this.file),
                        b = D(this.file),
                        0 != b) {
                            e = this.file.Ba + b;
                            switch (d) {
                            case 13108:
                                0 == this.$p && (T(this.file, 8),
                                Va(this.file));
                                break;
                            case 13110:
                                this.fA[this.$p] = this.file.bd();
                                break;
                            case 13129:
                                this.oF[this.$p] = D(this.file);
                                this.nF[this.$p] = D(this.file);
                                break;
                            case 13128:
                                for (f = b / 6,
                                b = 0; b < f; b++) {
                                    var g = S(this.file);
                                    T(this.file, 4);
                                    0 != g && (this.Ke[g] = 1,
                                    this.Kg = Math.max(this.Kg, g + 1))
                                }
                            }
                            this.file.seek(e)
                        }
                    this.$p++;
                    break;
                case 8760:
                    d = D(this.file);
                    this.Zz = Array(d);
                    for (b = 0; b < d; b++)
                        this.Zz[b] = new Mc(this),
                        this.Zz[b].wl();
                    break;
                case 26214:
                    this.xa.wl(this.file);
                    break;
                case 26215:
                    this.td.wl(this.file);
                    break;
                case 26216:
                    this.uk.wl(this.file)
                }
                this.file.seek(a)
            }
        this.context = new Nc(this.canvas);
        this.xf.uz = 0 != (this.Ls & 1024);
        null == this.kb && (this.Ig = new Oc)
    },
    click: function(a) {
        if (this.Bv.fq) {
            var b;
            for (b = 0; b < this.dc.length; b++)
                this.dc[b].click(a)
        }
    },
    $J: function(a) {
        var b = a.acceleration.x / 9.780318
          , c = a.acceleration.y / 9.780318
          , d = a.accelerationIncludingGravity.x / 9.780318;
        a = a.accelerationIncludingGravity.y / 9.780318;
        this.qn = b;
        this.rn = c;
        this.Ik = d;
        this.Jk = a;
        switch (window.orientation) {
        case 0:
            this.qn = -b;
            this.rn = c;
            this.Ik = -d;
            this.Jk = a;
            break;
        case 90:
            this.qn = c;
            this.rn = b;
            this.Ik = a;
            this.Jk = d;
            break;
        case 180:
            this.qn = b;
            this.rn = -c;
            this.Ik = d;
            this.Jk = -a;
            break;
        case -90:
            this.qn = -c,
            this.rn = -b,
            this.Ik = -a,
            this.Jk = -d
        }
        this.Ps && (this.qn = -this.qn,
        this.rn = -this.rn,
        this.Ik = -this.Ik,
        this.Jk = -this.Jk)
    },
    Tv: function() {
        var a = 0;
        -.2 > this.Ik && (a |= 4);
        .2 < this.Ik && (a |= 8);
        -.2 > this.Jk && (a |= 1);
        .2 < this.Jk && (a |= 2);
        return a
    }
};
function Pc(a, b) {
    if (b.fp) {
        null == a.oh && (b.$H = 2);
        switch (b.$H) {
        case 0:
            0 < b.nj && (b.nj -= 2,
            0 > b.nj && (b.nj = 0,
            phase++));
            break;
        case 2:
            128 > b.nj && (b.nj += 4,
            128 <= b.nj && (b.nj = 128,
            b.Qx = !0))
        }
        a.context.qe(b.Og.left, b.Og.top, b.Og.right - b.Og.left, b.Og.bottom - b.Og.top, a.Cj, 0, 0);
        b.fp.Oc(a.context, b.Og.left, b.Og.top, Qc, b.nj);
        b.Qx && (b.fp = null,
        b.Og = null,
        b.fr = null)
    } else if (b.Qx = !0,
    null != a.oh && 0 != (a.sb & 33554432)) {
        b.fr = new Rc;
        Sc(b.fr);
        b.fr.fd = 24;
        var c = b.fr.fd + 6;
        b.fp = new ab(a,120,c);
        var d = b.fp.measureText(a.UA, b.fr) + 64;
        b.fp.resize(d, c);
        db(b.fp);
        cb(b.fp, a.UA, null, 16776960, b.fr, 2, 0);
        b.Og = new sa;
        b.Og.left = a.bb / 2 - d / 2;
        b.Og.top = a.ib / 2 - c / 2;
        b.Og.right = b.Og.left + d;
        b.Og.bottom = b.Og.top + c;
        b.nj = 128;
        b.$H = 0;
        b.Qx = !1;
        a.context.qe(0, 0, a.bb, a.ib, a.Cj, 0, 0)
    }
    return b.Qx
}
function Tc(a) {
    null == a.$a && (a.$a = new Uc(a),
    Vc(a.$a),
    a.$a.reset(void 0),
    a.$k = 1,
    null != a.frame && 0 != (a.frame.mm & Wc) ? (a.canvas.setAttribute("style", "-ms-touch-action: manipulation;"),
    a.canvas.setAttribute("style", "touch-action: manipulation;")) : (a.canvas.setAttribute("style", "-ms-touch-action: none;"),
    a.canvas.setAttribute("style", "touch-action: none;")),
    0 > a.ui.indexOf(a.$a) && a.ui.add(a.$a))
}
function Xc(a, b) {
    a.IE = b;
    a.canvas.style.cursor = 0 <= a.IE ? a.cursor : "none"
}
function Yc(a, b) {
    for (var c = b.pageY, d = b.target; d && "BODY" != d.tagName; )
        c -= d.offsetTop,
        d = d.offsetParent;
    return Math.floor((c - a.rj) / a.Wd)
}
function Zc(a, b) {
    for (var c = b.pageX, d = b.target; d && "BODY" != d.tagName; )
        c -= d.offsetLeft,
        d = d.offsetParent;
    return Math.floor((c - a.pj) / a.Vd)
}
function $c(a, b, c) {
    a.Ps && a.oh && (ad(a.oh),
    a.oh = null);
    if (null != a.vi) {
        var d, e, f, g = c ? 1 : b.changedTouches.length;
        for (d = 0; d < g; d++) {
            var h;
            c ? (h = b,
            h.identifier = b.pointerId) : h = b.changedTouches[d];
            for (e = 0; 10 > e; e++)
                if (a.vi[e] == h.identifier) {
                    a.vi[e] = 1770410840;
                    if (a.dm[e])
                        bd(a.ui.get(a.gr[e]), h);
                    else {
                        for (f = 0; f < a.ui.size(); f++)
                            bd(a.ui.get(f), h);
                        a.xk[e] = Zc(a, h);
                        a.yk[e] = Yc(a, h)
                    }
                    if (e == a.vt)
                        for (a.bj = a.xk[e],
                        a.cj = a.yk[e],
                        a.vt = 1770410840,
                        a.We[200] = !1,
                        f = 0; f < a.dc.length; f++)
                            $c(a.dc[f], b, c)
                }
        }
    }
}
function cd(a, b, c) {
    if (null != a.vi) {
        var d, e, f, g = c ? 1 : b.changedTouches.length;
        for (d = 0; d < g; d++) {
            var h;
            c ? (h = b,
            h.identifier = b.pointerId) : h = b.changedTouches[d];
            for (e = 0; 10 > e; e++)
                if (a.vi[e] == h.identifier) {
                    if (a.dm[e])
                        dd(a.ui.get(a.gr[e]), h);
                    else {
                        for (f = 0; f < a.ui.size(); f++)
                            dd(a.ui.get(f), h);
                        a.xk[e] = Zc(a, h);
                        a.yk[e] = Yc(a, h)
                    }
                    if (a.vt == e)
                        for (a.bj = a.xk[e],
                        a.cj = a.yk[e],
                        null != a.Y && null != a.Y.G && ed(a.Y.G),
                        e = 0; e < a.dc.length; e++)
                            cd(a.dc[e], b, c);
                    break
                }
        }
    }
}
function fd(a, b, c) {
    gd(a);
    !a.Ps && a.oh && (ad(a.oh),
    a.oh = null);
    if (null != a.vi) {
        var d, e, f = c ? 1 : b.changedTouches.length;
        for (d = 0; d < f; d++) {
            var g;
            c ? (g = b,
            g.identifier = b.pointerId) : g = b.changedTouches[d];
            for (e = 0; 10 > e; e++)
                if (1770410840 == a.vi[e]) {
                    a.vi[e] = g.identifier;
                    a.dm[e] = !1;
                    for (o = 0; o < a.ui.size(); o++) {
                        var h = a.ui.get(o)
                          , k = g
                          , m = !1
                          , l = Zc(h.app, k)
                          , t = Yc(h.app, k)
                          , w = h.getKey(l, t);
                        -1 != w && (h.touches[w] = k.identifier,
                        0 == w && (h.$a &= 240,
                        m = !0,
                        0 != (h.fa & 16) && hd(h, l, t)),
                        1 == w ? (h.$a |= 16,
                        m = !0) : 2 == w && (h.$a |= 32,
                        m = !0));
                        if (m) {
                            a.dm[e] = !0;
                            a.gr[e] = o;
                            break
                        }
                    }
                    if (!a.dm[e] && (a.xk[e] = Zc(a, g),
                    a.yk[e] = Yc(a, g),
                    1770410840 == a.vt && 592880741 != g.identifier))
                        for (a.vt = e,
                        a.bj = a.xk[e],
                        a.cj = a.yk[e],
                        a.eo = !0,
                        a.We[200] = !0,
                        null != a.Y && null != a.Y.G && id(a.Y.G, 0, 1),
                        e = 0; e < a.dc.length; e++)
                            fd(a.dc[e], b, c);
                    break
                }
        }
    }
}
function gd(a) {
    a.Bv.fq || null == a.pu || "suspended" != a.pu.state || a.pu.resume()
}
function jd(a, b) {
    a.KE = "undefined" != typeof b.wheelDelta ? b.wheelDelta / 40 : -b.detail;
    if (null != a.Y && null != a.Y.G) {
        var c = a.Y;
        0 > a.KE ? kd(c.G, -720902) : kd(c.G, -655366)
    }
}
function ld(a, b) {
    if (a.Bv.fq) {
        null != a.Y && null != a.Y.G && id(a.Y.G, 0, 2);
        var c;
        for (c = 0; c < a.dc.length; c++)
            ld(a.dc[c], b)
    }
}
function md(a, b) {
    a.We[200] = !1;
    a.We[201] = !1;
    a.We[202] = !1;
    var c;
    for (c = 0; c < a.dc.length; c++)
        md(a.dc[c], b);
    $c(a, new nd(b.pageX,b.pageY,a.canvas), !1)
}
function od(a, b) {
    a.We[200] = b;
    var c;
    for (c = 0; c < a.dc.length; c++)
        od(a.dc[c], b)
}
function pd(a, b, c) {
    var d = qd(b);
    rd(a, b, a.canvas);
    a.eo = !0;
    a.We[d] = !0;
    gd(a);
    if (null != a.Y && null != a.Y.G)
        if (c) {
            var e = Date.now()
              , f = null !== a.eB && a.yG == d && 300 >= e - a.eB ? 2 : 1;
            a.yG = d;
            a.eB = e;
            id(a.Y.G, d - 200, f)
        } else
            a.Bv.fq ? id(a.Y.G, d - 200, 1) : id(a.Y.G, d - 200, 0 == b.detail % 2 ? 2 : 1);
    for (d = 0; d < a.dc.length; d++)
        pd(a.dc[d], b, c);
    fd(a, new nd(b.pageX,b.pageY,a.canvas), !1);
    window.focus()
}
function sd(a, b) {
    var c = qd(b);
    rd(a, b, a.canvas);
    a.We[c] = !1;
    for (c = 0; c < a.dc.length; c++)
        sd(a.dc[c], b);
    $c(a, new nd(b.pageX,b.pageY,a.canvas), !1)
}
function qd(a) {
    if (a.which)
        switch (a.which) {
        case 2:
            return 201;
        case 3:
            return 202;
        default:
            return 200
        }
    else
        switch (a.button) {
        case 2:
            return 202;
        case 4:
            return 201;
        default:
            return 200
        }
}
function rd(a, b, c) {
    b.pageX ? (a.bj = b.pageX,
    a.cj = b.pageY) : b.clientY && (a.bj = b.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
    a.cj = b.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    for (var d = 0, e = 0, f = c; f && "BODY" != f.tagName; )
        d += f.offsetTop,
        e += f.offsetLeft,
        f = f.offsetParent;
    a.bj -= e + a.pj;
    a.cj -= d + a.rj;
    a.bj = Math.floor(a.bj / a.Vd);
    a.cj = Math.floor(a.cj / a.Wd);
    null != a.Y && null != a.Y.G && ed(a.Y.G);
    for (d = 0; d < a.dc.length; d++)
        rd(a.dc[d], b, c);
    cd(a, new nd(b.pageX,b.pageY,a.canvas), !1)
}
function td(a, b) {
    if (b) {
        a.We[b.keyCode] = !1;
        var c;
        for (c = 0; c < a.dc.length; c++)
            td(a.dc[c], b)
    }
}
function ud(a, b) {
    if (b) {
        a.We[b.keyCode] = !0;
        a.eo = !0;
        if (null != a.Y && null != a.Y.G) {
            var c = a.Y.G;
            null != c.v && 0 != c.ks && (c.v.Xq = 0,
            kd(c, -524294))
        }
        for (c = 0; c < a.dc.length; c++)
            ud(a.dc[c], b)
    }
}
function sc(a, b) {
    var c = vd(a, b);
    return null != c ? c[b] : ""
}
function vd(a, b) {
    var c;
    for (c = a; null == c.Js; )
        c = c.kb;
    c = c.Js;
    if (0 > b || 1E3 < b)
        return null;
    var d = c.length;
    if (b + 1 > d)
        for (; d < b + 1; d++)
            c.push("");
    return c
}
function uc(a, b) {
    var c = wd(a, b);
    return null != c ? c[b] : 0
}
function wd(a, b) {
    var c;
    for (c = a; null == c.Ks; )
        c = c.kb;
    c = c.Ks;
    if (0 > b || 1E3 < b)
        return null;
    var d = c.length;
    if (b + 1 > d)
        for (; d < b + 1; d++)
            c.push(0);
    return c
}
function rb(a) {
    for (var b = a; null == b.lu; )
        b = a.kb;
    return b.lu
}
function vb(a) {
    for (var b = a; null == b.Xs; )
        b = a.kb;
    return b.Xs
}
function bb(a, b) {
    if (a.lA) {
        var c;
        for (c = 0; c < a.lA.size(); c++)
            if (gFont = a.lA.get(c),
            gFont.OO(b))
                return gFont
    }
    return b
}
function xd(a) {
    null != a.transition && (a.oj = a.transition.C,
    a.transition.end(),
    a.transition = null,
    a.yf = null,
    4 == a.gc && (a.gc = 5))
}
function yd(a, b) {
    var c, d, e = a.frame.Fs;
    if (null != e) {
        c = document.createElement("canvas");
        c.width = a.bb;
        c.height = a.ib;
        d = document.createElement("canvas");
        d.width = a.bb;
        d.height = a.ib;
        var f = new Nc(d);
        f.qe(0, 0, a.bb, a.ib, a.Cj);
        a.Ig.Oc(f, 0, 0);
        f = new Nc(c);
        0 != (e.uu & zd) ? f.qe(0, 0, a.bb, a.ib, e.tu) : (f.qe(0, 0, a.bb, a.ib, a.qF),
        null != b && f.Rm(b, 0, 0, b.width, b.height, 0, 0));
        a.yf = document.createElement("canvas");
        a.yf.width = a.bb;
        a.yf.height = a.ib;
        a.yf.getContext("2d").drawImage(c, 0, 0);
        a.transition = Ad(a).Qp(e, a.yf, c, d);
        if (null != a.transition) {
            a.gc = 2;
            return
        }
    }
    a.yf = null;
    a.gc = 3;
    Bd(a.Y)
}
function Ad(a) {
    null == a.IC && (a.IC = new Cd(a));
    return a.IC
}
function Dd(a) {
    var b;
    b = a.Y;
    var c;
    100 < b.Uc && (b.Uc = Ed);
    c = b.Zq;
    var d, e, f, g, h, k;
    for (f = 0; f < b.ta.length; f++)
        if (e = b.ta[f],
        k = e.Fc,
        32767 != e.bf && 0 == (k & 2147483648) && (g = Fd(b.m.ze, e.bf),
        0 != (g.rl & Gd) && (d = b.U[k],
        e.lg == Hd || e.lg == Id || null != d.za))) {
            h = e.Co + e.lg.toString();
            null == b.m.Wl && (b.m.Wl = new V);
            var m = !1;
            g = null;
            for (d = 0; d < b.m.Wl.size(); d++)
                if (g = b.m.Wl.get(d),
                h == g.name) {
                    m = !0;
                    break
                }
            0 == m ? (g = new Jd,
            g.name = h,
            g.jd = new V,
            b.m.Wl.add(g)) : g.jd.clear();
            for (; ; ) {
                d = b.U[k];
                if (e.lg == Hd)
                    k = new Kd,
                    k.text = d.$q,
                    k.Gc = d.Gc,
                    g.jd.add(k);
                else if (e.lg == Id)
                    k = new Ld,
                    k.value = d.pb,
                    k.Gc = d.Gc,
                    k.Oe = d.Oe,
                    k.Cx = d.Cx,
                    k.Bx = d.Bx,
                    g.jd.add(k);
                else {
                    h = new Md;
                    h.fa = d.za.ju;
                    h.values = Array(d.za.Hc.length);
                    for (k = 0; k < d.za.Hc.length; k++)
                        h.values[k] = d.za.Hc[k];
                    h.ge = Array(d.za.og.length);
                    for (k = 0; k < d.za.og.length; k++)
                        h.ge[k] = d.za.og[k];
                    g.jd.add(h)
                }
                k = d.Od;
                if (0 != (k & 2147483648))
                    break
            }
        }
    Nd(b);
    Od(b, !1);
    Pd(b.G);
    Qd(b);
    Rd(b);
    Sd(b, !0);
    e = b.m;
    null != e.$a && (1 == e.$k && Ya(e.ui, e.$a),
    e.$a = null);
    2 == e.$k && (e.Kr--,
    0 >= e.Kr && (window.DeviceMotionEvent && window.removeEventListener("devicemotion", e.Ny),
    e.Kr = 0));
    e.$k = 0;
    b = c << 16 | b.Uc & 65535;
    if (0 != (a.Ms & 4))
        a.gc = 6;
    else
        switch (b & 65535) {
        case 1:
            a.$c = a.wh + 1;
            1 == a.Nt && a.$c == a.Yw && a.$c++;
            a.gc = 1;
            a.$c >= a.Ni && (a.gc = 6);
            break;
        case 2:
            a.$c = Math.max(0, a.wh - 1);
            1 == a.Nt && a.$c == a.Yw && (0 == a.$c ? a.$c = a.wh : a.$c--);
            a.gc = 1;
            break;
        case 3:
            a.gc = 1;
            0 != (b >> 16 & 32768) ? (a.$c = b >> 16 & 32767,
            a.$c >= a.Ni && (a.$c = a.Ni - 1),
            0 > a.$c && (a.$c = 0)) : b >> 16 < a.Is ? (a.$c = a.Hs[b >> 16],
            -1 == a.$c && (a.$c = a.wh + 1)) : a.$c = a.wh + 1;
            break;
        case 4:
            a.gc = 0;
            a.$c = a.Mx;
            break;
        default:
            a.gc = 6
        }
    1 == a.gc && (0 > a.$c || a.$c >= a.Ni) && (a.gc = a.wh);
    if (1 != a.gc || a.$c != a.wh) {
        for (b = 0; b < a.frame.me; b++)
            Td(a.frame.Lb[b]);
        a.frame = null;
        a.wh = -1
    }
}
function Ud(a) {
    null != a.kb ? (a.qj = 0,
    a.sj = 0) : (a.qj = a.bb / 2 - a.frame.Ws / 2,
    a.sj = a.ib / 2 - a.frame.Vs / 2);
    var b;
    for (b = 0; b < a.frame.me; b++) {
        var c = a.frame.Lb[b]
          , d = a.qj
          , e = a.sj;
        c.Td.x = d;
        c.Td.y = e;
        c.kd.x = d;
        c.kd.y = e;
        c.Db.x = d;
        c.Db.y = e;
        c.show()
    }
}
function Vd(a) {
    null == a.kb && (window.PointerEvent ? (a.canvas.addEventListener("pointerdown", function(a) {
        switch (a.pointerType) {
        case "mouse":
        case "pen":
            pd(that, a, !0);
            break;
        case "touch":
            fd(that, a, !0)
        }
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("pointermove", function(a) {
        switch (a.pointerType) {
        case "mouse":
        case "pen":
            rd(that, a, that.canvas);
            break;
        case "touch":
            cd(that, a, !0)
        }
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("pointerup", function(a) {
        switch (a.pointerType) {
        case "mouse":
        case "pen":
            sd(that, a);
            break;
        case "touch":
            $c(that, a, !0)
        }
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("pointercancel", function(a) {
        switch (a.pointerType) {
        case "touch":
            $c(that, a, !0)
        }
        a.preventDefault && a.preventDefault()
    }, !1)) : (a.canvas.addEventListener("mousemove", function(a) {
        rd(that, a, that.canvas);
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("mousedown", function(a) {
        pd(that, a, !1);
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("mouseup", function(a) {
        sd(that, a);
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("mouseout", function(a) {
        md(that, a);
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("click", function(a) {
        that.click(a);
        a.preventDefault && a.preventDefault()
    }, !1),
    a.canvas.addEventListener("dblclick", function(a) {
        ld(that, a);
        a.preventDefault && a.preventDefault()
    }, !1)),
    a.canvas.addEventListener("contextmenu", function(a) {
        a.preventDefault && a.preventDefault()
    }, !1));
    null == a.xf || a.tA || Wd(a.xf);
    a.oh && (a.oh = null)
}
function Xd(a, b, c, d) {
    a.Ij || (a.context.mx(0 != (a.sb & 4)),
    null == a.yf ? (d || a.context.qe(b, c, a.Qw, a.Pw, a.Cj),
    a.context.clip(b, c, a.Qw, a.Pw),
    a.Ig.Oc(a.context, 0, 0),
    a.context.NN()) : (a.context.mx(),
    a.context.Rm(a.yf, b, c, a.bb, a.ib, 0, 0)))
}
function Yd(a) {
    a.bw && (a.Qs--,
    0 > a.Qs && (a.Qs = 1E9,
    a.Rs = new Pa,
    a.Rs.getFile(a.bw + "info.dat", Cc)));
    a.ph = (new Date).getTime();
    0 == (a.sb & 1048576) && (a.hasFocus ? a.yz && (a.Y.resume(),
    a.yz = !1) : (a.Y.pause(a.Ms & 8),
    a.yz = !0));
    var b = !0
      , c = !0;
    do
        switch (a.gc) {
        case 0:
            var d, e = a;
            if (null == e.kb || null != e.kb && 0 == (e.Jm & Zd))
                for (e.Xs = Array(4),
                d = 0; 4 > d; d++)
                    e.Xs[d] = e.rF ^ 4294967295;
            else
                e.Xs = null;
            if (null == e.kb || null != e.kb && 0 == (e.Jm & $d))
                for (e.lu = Array(4),
                d = 0; 4 > d; d++)
                    e.lu[d] = e.sF ^ 4294967295;
            else
                e.lu = null;
            e.kH = Array(4);
            for (d = 0; 4 > d; d++)
                e.kH[d] = "";
            if (null == e.kb || null != e.kb && 0 == (e.Jm & ae))
                for (e.Ks = Array(e.wq),
                d = 0; d < e.wq; d++)
                    e.Ks[d] = e.kA[d];
            else
                e.Ks = null;
            if (null == e.kb || null != e.kb && 0 == (e.Jm & ae))
                for (e.Js = Array(e.At),
                d = 0; d < e.At; d++)
                    e.Js[d] = e.jA[d];
            else
                e.Js = null;
            a.$c = a.Mx;
            a.gc = 1;
            a.Wl = null;
        case 1:
            d = a;
            if (d.$c != d.wh) {
                d.frame = new be(d);
                var f, g, h, k, m, l, e = d.frame;
                e.app.file.seek(e.app.eA[d.$c]);
                e.Es = new ce(e.app);
                e.Af = new de;
                e.hw = new sa;
                f = 0;
                for (e.Dw = -1; 32639 != f; )
                    if (f = S(e.app.file),
                    S(e.app.file),
                    g = D(e.app.file),
                    0 != g) {
                        e.FM = e.app.file.Ba + g;
                        switch (f) {
                        case 13108:
                            e.BA();
                            null != e.app.kb && 0 != (e.app.Jm & ee) ? (e.Ws = e.app.NK,
                            e.Vs = e.app.OK) : (e.Ws = Math.min(e.app.bb, e.Fg),
                            e.Vs = Math.min(e.app.ib, e.Xe));
                            break;
                        case 13128:
                            h = g / 6;
                            e.tt = Array(h);
                            e.$i = Array(h);
                            e.aj = Array(h);
                            for (g = e.Kg = 0; g < h; g++)
                                e.tt[g] = S(e.app.file),
                                e.Kg = Math.max(e.Kg, e.tt[g]),
                                e.$i[g] = S(e.app.file),
                                e.aj[g] = S(e.app.file);
                            e.Kg++;
                            break;
                        case 13130:
                            e.$a = S(e.app.file);
                            e.mm = S(e.app.file);
                            break;
                        case 13122:
                            e.hw.load(e.app.file);
                            break;
                        case 13124:
                            e.Dw = S(e.app.file);
                            break;
                        case 13127:
                            e.VF = D(e.app.file);
                            break;
                        case 13109:
                            e.pF = e.app.file.bd();
                            break;
                        case 13115:
                            e.Fs = new fe;
                            e.Fs.load(e.app.file);
                            break;
                        case 13116:
                            e.$z = new fe;
                            e.$z.load(e.app.file);
                            break;
                        case 13121:
                            h = e;
                            h.me = D(h.app.file);
                            h.Lb = Array(h.me);
                            for (g = 0; g < h.me; g++)
                                h.Lb[g] = new ge(h.app),
                                h.Lb[g].load(h.app.file);
                            break;
                        case 13125:
                            h = e;
                            for (g = 0; g < h.me; g++)
                                h.Lb[g].yg = D(h.app.file),
                                h.Lb[g].zg = D(h.app.file),
                                T(h.app.file, 12);
                            break;
                        case 13112:
                            e.Af.load(e.app);
                            break;
                        case 13117:
                            e.Es.load(e.app),
                            e.Yj = e.Es.Yj
                        }
                        e.app.file.seek(e.FM)
                    }
                e.app.ze.mi();
                for (g = 0; g < e.Af.dj; g++)
                    e.app.ze.bn(e.Af.list[g].Xh);
                e.app.xa.mi();
                e.app.uk.mi();
                e.app.td.mi();
                e.app.ze.load(e.app.file);
                e.app.ze.Zd(e.app.xa, e.app.td);
                e.app.sb & 16777216 && (e.app.td.nu(),
                e.app.uk.nu(),
                (0 == e.app.Kg || e.app.tA) && e.app.xa.nu());
                e.app.xa.load(e.app.file);
                e.app.td.load(e.app.file);
                var t = e.Es
                  , w = e.app.uk;
                for (k = 0; k < t.yt; k++)
                    for (l = t.Bg[k],
                    h = 0; h < l.sd + l.$g; h++)
                        for (m = l.ic[h],
                        g = 0; g < m.Ce; g++)
                            switch (m.ha[g].code) {
                            case 6:
                            case 35:
                                f = m.ha[g],
                                w.Vk(f.HN)
                            }
                e.app.uk.load();
                g = e.app.ze;
                for (f = 0; f < g.Em; f++)
                    g.Tc[f].rl &= -17;
                for (g = 0; g < e.Af.dj; g++)
                    h = e.Af.list[g],
                    h.Ys >= he && (f = e.app.ze,
                    h = h.Xh,
                    f.Tc[f.sl[h]].rl |= 16)
            }
            d.Cj = d.frame.IF;
            d.wh = d.$c;
            d.frame.nm = d.frame.om = 0;
            d.frame.vA = d.frame.wA = 0;
            d.frame.NH = !1;
            e = d;
            e.yj = !1;
            e.SH = 0;
            e.wN = e.xN = 1;
            e.zN = e.yN = e.bb / 2;
            e.BN = e.AN = e.ib / 2;
            null != d.kb ? (d.qj = 0,
            d.sj = 0) : (d.qj = d.bb / 2 - d.frame.Ws / 2,
            d.sj = d.ib / 2 - d.frame.Vs / 2);
            for (e = 0; e < d.frame.me; e++)
                f = d.frame.Lb[e],
                g = d.qj,
                h = d.sj,
                f.Td = new Oc,
                f.Td.x = g,
                f.Td.y = h,
                f.kd = new Oc,
                f.kd.x = g,
                f.kd.y = h,
                f.Db = new Oc,
                f.Db.x = g,
                f.Db.y = h,
                f.zC(0),
                f.scale = 1,
                ie(f),
                je(f),
                ke(f, f.app.bb / 2),
                le(f, f.app.ib / 2),
                me(f, f.app.bb / 2),
                ne(f, f.app.ib / 2),
                oe(f),
                pe(f.app.Ig, f.Td),
                pe(f.app.Ig, f.kd),
                pe(f.app.Ig, f.Db),
                f.sb & 16 ? f.show() : f.Xv();
            d.frame.ud & qe && (document.title = d.frame.pF);
            d.Zw = null;
            d.frame.ud & re && (d.Zw = d.oj);
            d.frame.ud & se && (d.frame.gw = !0);
            d.Y.J = d.frame;
            e = d.Y;
            f = null != d.frame.Fs;
            te(e);
            e.m.$k = 0;
            null == e.m.kb && e.m.Rx && (3 == e.J.$a ? (null == e.m.$a && (e.m.$a = new Uc(e.m),
            Vc(e.m.$a)),
            e.m.$a.reset(0),
            Tc(e.m)) : 0 != e.J.$a && (g = 0,
            0 != (e.J.mm & 1) && (g = 2),
            0 != (e.J.mm & 2) && (g |= 4),
            0 != (e.J.mm & 4) && (g |= 8),
            0 != (e.J.mm & Wc) && (g |= 16),
            1 == e.J.$a && (g |= 1),
            0 != (g & 7) && (Tc(e.m),
            e.m.$a.reset(g)),
            2 == e.J.$a && (g = e.m,
            0 == g.Kr && window.DeviceMotionEvent && (g.Ny = g.$J.bind(g),
            window.addEventListener("devicemotion", g.Ny)),
            g.Kr++,
            g.$k = 2)));
            e.pC = 255;
            f && (e.Me |= 16);
            ue(e);
            Sd(e, !1);
            ve(e);
            e.se = 0;
            we(e, f);
            ze(e);
            for (f = 0; f < e.J.me; f++)
                g = e.J.Lb[f],
                g.sb & Ae && g.Xv();
            Be(e);
            Ce(e.G);
            De(e.G, e);
            Xc(e.m, 1);
            Ee(e);
            e.Zq = 0;
            Fe(e);
            e.Az = !1;
            d.gc = 3;
            null != d.frame.Fs ? d.Ij ? d.xz = !0 : 0 != Ge(d.Y) ? d.gc = 5 : (d.gc = 3,
            yd(d, d.oj),
            d.oj = null) : d.oj = null;
            d.Ij ? d.Y.pause(!0) : d.Y.Pk();
            break;
        case 2:
            null != a.transition ? He(a.transition) ? d = !1 : (a.transition.md(Ie),
            d = !0) : d = !1;
            0 == d ? (d = a,
            null != d.transition && (d.transition.end(),
            d.transition = null,
            d.yf = null,
            2 == d.gc && (d.gc = 3),
            Bd(d.Y)),
            6 != a.gc && 0 != a.gc || Dd(a)) : b = !1;
            break;
        case 3:
            Ge(a.Y);
            if (0 != a.Y.Uc) {
                a: {
                    f = a;
                    g = f.frame.$z;
                    if (null != g && (e = document.createElement("canvas"),
                    e.width = f.bb,
                    e.height = f.ib,
                    d = document.createElement("canvas"),
                    d.width = f.bb,
                    d.height = f.ib,
                    h = new Nc(e),
                    h.qe(0, 0, f.bb, f.ib, f.Cj),
                    f.Ig.Oc(h, 0, 0),
                    h = new Nc(d),
                    0 != (g.uu & zd) ? h.qe(0, 0, f.bb, f.ib, g.tu) : h.qe(0, 0, f.bb, f.ib, 0),
                    f.yf = document.createElement("canvas"),
                    f.yf.width = f.bb,
                    f.yf.height = f.ib,
                    f.yf.getContext("2d").drawImage(e, 0, 0),
                    f.transition = Ad(f).Qp(g, f.yf, e, d),
                    null != f.transition)) {
                        f.gc = 4;
                        d = !0;
                        break a
                    }
                    f.yf = null;
                    d = !1
                }
                d ? a.gc = 4 : Dd(a)
            } else
                b = !1;
            break;
        case 4:
            a: {
                d = a;
                if (null != d.transition) {
                    if (He(d.transition)) {
                        xd(d);
                        d = !1;
                        break a
                    }
                    d.transition.md(Je)
                }
                d = !0
            }
            0 == d ? (xd(a),
            6 != a.gc && 0 != a.gc || Dd(a)) : b = !1;
            break;
        case 5:
            Dd(a);
            break;
        default:
            b = !1
        }
    while (1 == b);
    6 == a.gc && (c = !1);
    if (c) {
        if (a.Ij) {
            if (null == a.hj) {
                b = a.Cj;
                a.DA ? (a.hj = 0 == a.Nt ? new Ke(a) : new Le(a),
                0 == a.Nt && -1 != a.Go && (b = a.Go)) : a.hj = new Me(a);
                a.tH = !1;
                a.gC = !0;
                null == a.kb && (a.frame.gw ? a.context.ps(0, 0, a.canvas.width, a.canvas.height) : a.context.qe(0, 0, a.bb, a.ib, b),
                Ne());
                return
            }
            if (null != a.hj && 0 == a.tH) {
                a.tH = a.hj.load();
                null == a.kb && Ne();
                return
            }
            for (; 0 < a.us.size() && a.Kv.size() < a.PK; )
                b = a.us.get(0),
                a.Kv.add(b),
                Za(a.us, 0),
                b.Sz();
            Oe(a.xf);
            b = !1;
            0 == a.us.size() && 0 == a.Kv.size() && (b = !0);
            null != a.hj && (0 != (a.sb & 16777216) && !a.hj.Wx || 0 != (a.frame.mm & Pe)) && (a.gC || (a.hj.reset(),
            a.gC = !0),
            a.hj.step(),
            b = a.hj.rA()) && (a.hj.Wx = !0);
            b && (a.gC = !1,
            a.Y.resume(),
            a.Y.Pk(),
            a.Ij = !1,
            a.xa.mi(),
            a.uk.mi(),
            a.td.mi(),
            a.Yk = 0,
            a.Xk = 0,
            a.xz && (a.xz = !1,
            0 != Ge(a.Y) ? a.gc = 5 : (a.gc = 3,
            yd(a, a.oj),
            a.oj = null)));
            null == a.kb && Ne()
        } else
            null == a.kb && (null == a.yf ? (a.context.mx(0 != (a.sb & 4)),
            a.Zw ? a.context.Rm(a.Zw, 0, 0, a.bb, a.ib, 0, 0) : a.frame.gw ? a.context.ps(0, 0, a.bb, a.ib) : a.context.qe(0, 0, a.bb, a.ib, a.Cj),
            b = a.context.Jb,
            a.yj && (bRestore = !0,
            b.save(),
            b.translate(a.yN, a.AN),
            0 != a.SH && b.rotate(.0174532925 * -a.SH),
            b.scale(Math.max(.001, a.wN), Math.max(.001, a.xN)),
            b.translate(-a.zN, -a.BN)),
            a.Ig.Oc(a.context, 0, 0),
            a.yj && b.restore(),
            a.$k && a.$a.Oc(a.context),
            a.MC && (a.MC--,
            a.Vx || (b = new Rc,
            Sc(b),
            b.fd = 16,
            a.Vx = new ab(a,a.bb,30),
            db(a.Vx, 16711680),
            cb(a.Vx, window.FusionVersion, null, 16777215, b, 1, 10526880)),
            a.Vx.Oc(a.context, 0, 0, 0, 0))) : (a.context.mx(),
            a.context.Rm(a.yf, 0, 0, a.bb, a.ib, 0, 0)),
            0 != (a.Ms & 4096) && window.requestAnimationFrame ? window.requestAnimationFrame(Qe) : (b = (new Date).getTime() - a.ph,
            b = Math.max(1E3 / a.gA - b, 1),
            window.setTimeout(Qe, b)));
        return !0
    }
    Vd(a);
    return !1
}
function Se(a, b) {
    a.us.add(b);
    a.Yk++;
    a.Ij = !0
}
function Te(a, b) {
    Ya(a.Kv, b);
    a.Xk++
}
function Ue() {
    var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"), b = navigator.userAgent, c;
    for (c in a)
        if (0 <= b.indexOf(a[c]))
            return !0;
    return "ontouchstart"in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1
}
function Ve(a) {
    var b = a.bb, c = a.ib, d, e;
    a.fullScreen || a.Ls & 16 ? (d = window.innerWidth,
    e = window.innerHeight,
    document.documentElement.style.overflow = "hidden",
    document.body.scroll = "no") : (d = b,
    e = c);
    d /= b;
    e /= c;
    if (a.sb & 1 || a.Ls & 16 && a.Ls & 4)
        d = e = Math.min(d, e);
    if (d != a.Vd || e != a.Wd)
        if (a.Vd = d,
        a.Wd = e,
        a.canvas.width = Math.floor(a.Vd * b),
        a.canvas.height = Math.floor(a.Wd * c),
        a.context.Jx(a.Vd, a.Wd),
        b = a.canvas.offsetParent)
            b.style.width = a.canvas.width.toString() + "px",
            b.style.height = a.canvas.height.toString() + "px",
            b.position = "absolute";
    a.Y && a.Y.Zl()
}
function Bc(a) {
    a.Ps = !!(/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && "undefined" !== typeof navigator.AQ);
    a.Ps && 0 < a.uk.Zc && (a.oh = new We(a),
    Xe(a.oh));
    Ve(a);
    a.We = Array(203);
    var b;
    for (b = 0; 203 > b; b++)
        a.We[b] = !1;
    a.canvas.Re = a;
    if (null == a.kb) {
        window.addEventListener("keypress", function(b) {
            b && (a.nI.charCodeAt(a.yu) == b.charCode ? (a.yu++,
            a.yu == a.nI.length && (a.MC = 250,
            a.yu = 0)) : a.yu = 0)
        }, !1);
        window.addEventListener("keydown", function(b) {
            a.hasFocus || (window.focus(),
            a.hasFocus = !0);
            gd(a);
            ud(a, b)
        }, !1);
        window.addEventListener("keyup", function(b) {
            td(a, b)
        }, !1);
        window.addEventListener("blur", function() {
            a.hasFocus = !1
        }, !1);
        window.addEventListener("focus", function() {
            a.hasFocus = !0
        }, !1);
        if (window !== window.top)
            try {
                var c = window.top;
                c.addEventListener("focus", function() {
                    a.hasFocus = !0;
                    a.canvas.focus()
                });
                c.addEventListener("blur", function() {
                    a.hasFocus = !1
                })
            } catch (d) {}
        window.addEventListener("resize", function() {
            Ve(a)
        }, !1);
        document.addEventListener("blur", function() {
            a.hasFocus = !1
        }, !1);
        document.addEventListener("focus", function() {
            a.hasFocus = !0
        }, !1);
        document.addEventListener("fullscreenchange", function() {
            a.fullScreen = document.oP;
            Ve(a)
        }, !1);
        document.addEventListener("mozfullscreenchange", function() {
            a.fullScreen = document.mozFullScreen;
            Ve(a)
        }, !1);
        document.addEventListener("webkitfullscreenchange", function() {
            a.fullScreen = document.webkitIsFullScreen;
            Ve(a)
        }, !1);
        window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (a.canvas.setAttribute("style", "-ms-touch-action: none;"),
        a.canvas.setAttribute("style", "touch-action: none;")),
        a.canvas.addEventListener("pointerdown", function(b) {
            switch (b.pointerType) {
            case "mouse":
            case "pen":
                pd(a, b, !0);
                break;
            case "touch":
                fd(a, b, !0)
            }
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("pointermove", function(b) {
            switch (b.pointerType) {
            case "mouse":
            case "pen":
                rd(a, b, a.canvas);
                break;
            case "touch":
                cd(a, b, !0)
            }
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("pointerup", function(b) {
            switch (b.pointerType) {
            case "mouse":
            case "pen":
                sd(a, b);
                break;
            case "touch":
                $c(a, b, !0)
            }
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("pointercancel", function(b) {
            switch (b.pointerType) {
            case "touch":
                $c(a, b, !0)
            }
            b.preventDefault && b.preventDefault()
        }, !1)) : (a.canvas.addEventListener("mousemove", function(b) {
            rd(a, b, a.canvas);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("mousedown", function(b) {
            pd(a, b, !1);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("mouseup", function(b) {
            sd(a, b);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("mouseout", function(b) {
            md(a, b);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("click", function(b) {
            a.click(b);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("dblclick", function(b) {
            ld(a, b);
            b.preventDefault && b.preventDefault()
        }, !1));
        a.canvas.addEventListener("contextmenu", function(a) {
            a.preventDefault && a.preventDefault()
        }, !1);
        b = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
        document.attachEvent ? document.attachEvent("on" + b, function(b) {
            jd(a, b)
        }) : document.addEventListener && document.addEventListener(b, function(b) {
            jd(a, b)
        }, !1);
        document.onselectstart = function() {
            return !1
        }
        ;
        a.canvas.onselectstart = function(a) {
            a.preventDefault && a.preventDefault();
            return !1
        }
        ;
        a.Rx = Ue();
        a.ui = new V;
        a.vi = Array(10);
        a.dm = Array(10);
        a.gr = Array(10);
        a.xk = Array(10);
        a.yk = Array(10);
        for (b = 0; 10 > b; b++)
            a.vi[b] = 1770410840,
            a.xk[b] = 0,
            a.yk[b] = 0,
            a.dm[b] = !1,
            a.gr[b] = 0;
        a.Rx && !window.PointerEvent && (a.canvas.addEventListener("touchstart", function(b) {
            fd(a, b, !1);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("touchmove", function(b) {
            cd(a, b, !1);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("touchend", function(b) {
            $c(a, b, !1);
            b.preventDefault && b.preventDefault()
        }, !1),
        a.canvas.addEventListener("touchcancel", function(b) {
            $c(a, b, !1);
            b.preventDefault && b.preventDefault()
        }, !1));
        window.focus();
        Ne()
    } else
        for (a.Rx = a.kb.Rx,
        a.ui = new V,
        a.vi = Array(10),
        a.dm = Array(10),
        a.gr = Array(10),
        a.xk = Array(10),
        a.yk = Array(10),
        b = 0; 10 > b; b++)
            a.vi[b] = 1770410840,
            a.xk[b] = 0,
            a.yk[b] = 0,
            a.dm[b] = !1,
            a.gr[b] = 0;
    a.pj = 0;
    a.rj = 0;
    a.gc = 0;
    a.wh = -2;
    a.Y = new Ye(a)
}
function Ne() {
    window.setTimeout(window.eI + "()", 20)
}
function nd(a, b, c) {
    this.changedTouches = Array(1);
    this.changedTouches[0] = {
        pageX: a,
        pageY: b,
        target: c,
        identifier: 592880741
    }
}
var qe = 1
  , re = 4
  , se = 131072
  , Wc = 8
  , Pe = 256;
function be(a) {
    this.app = a;
    this.v = null;
    this.IF = this.Xe = this.Fg = 0;
    this.gw = !1;
    this.ud = 0;
    this.hw = null;
    this.Vs = this.Ws = 0;
    this.pF = null;
    this.me = 0;
    this.Es = this.Af = this.Lb = null;
    this.VF = this.Dw = this.wA = this.vA = this.om = this.nm = this.Yj = 0;
    this.aj = this.$i = this.tt = this.$z = this.Fs = null;
    this.mm = this.$a = this.Kg = 0
}
be.prototype = {
    BA: function() {
        this.Fg = D(this.app.file);
        this.Xe = D(this.app.file);
        this.IF = Va(this.app.file);
        this.ud = D(this.app.file)
    }
};
var Ze = 48;
function Ic(a) {
    this.app = a;
    this.Wc = null;
    this.uz = !1;
    this.WD = !0;
    this.js = this.zu = null;
    this.gG = 0;
    this.Kn = null;
    this.Oz = !1;
    this.Wc = Array(Ze);
    this.zu = Array(Ze);
    this.js = Array(Ze);
    this.uz = this.WD = !0;
    var b;
    for (b = 0; b < Ze; b++)
        this.Wc[b] = null,
        this.zu[b] = 100,
        this.js[b] = !1;
    this.gG = 100;
    b = new Audio;
    var c = Array(4);
    c[0] = b.canPlayType("audio/ogg");
    c[1] = b.canPlayType("audio/x-m4a");
    c[2] = b.canPlayType("audio/mpeg");
    c[3] = b.canPlayType("audio/wav");
    for (b = this.YA = this.PB = 0; 4 > b; b++)
        "probably" == c[b] && (this.PB |= 1 << b),
        "maybe" == c[b] && (this.YA |= 1 << b);
    for (; null != a.kb; )
        a = a.kb;
    this.context = a.pu;
    this.Pp = a.VH;
    null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext,
    this.Pp = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext,
    this.Pp = 0),
    a.pu = this.context,
    a.VH = this.Pp)
}
Ic.prototype = {
    reset: function() {
        var a;
        for (a = 0; a < Ze; a++)
            this.js[a] = !1
    },
    play: function(a, b, c, d, e, f) {
        var g;
        if (0 != this.WD && (g = this.app.uk,
        a = 0 <= a && a < g.wm && -1 != g.vb[a] ? g.cp[g.vb[a]] : null,
        null != a)) {
            0 == this.uz && (c = 0);
            if (0 > c) {
                for (g = 0; g < Ze && (null != this.Wc[g] || 0 != this.js[g]); g++)
                    ;
                if (g == Ze)
                    for (g = 0; g < Ze && (0 != this.js[g] || null == this.Wc[g] || 0 != this.Wc[g].ls); g++)
                        ;
                c = g;
                0 <= c && c < Ze && -1 == e && (this.zu[c] = this.gG)
            }
            if (!(0 > c || c >= Ze)) {
                if (null != this.Wc[c]) {
                    if (1 == this.Wc[c].ls)
                        return;
                    this.Wc[c] != a && (this.Wc[c].stop(),
                    this.Wc[c] = null)
                }
                for (g = 0; g < Ze; g++)
                    this.Wc[g] == a && (this.Wc[g].stop(),
                    this.Wc[g] = null);
                this.Wc[c] = a;
                -1 != e && (this.zu[c] = e);
                a.play(b, d, this.zu[c]);
                0 != f && (b = f / a.frequency,
                a.Rp = f,
                a.Ic ? a.Ic.playbackRate = b : a.source && (a.source.playbackRate.value = b))
            }
        }
    },
    pause: function() {
        var a;
        for (a = 0; a < Ze; a++)
            if (null != this.Wc[a]) {
                var b = this.Wc[a];
                b.Yg ? b.Av = !1 : (b.pause(),
                b.Av = !0)
            }
    },
    resume: function() {
        var a;
        for (a = 0; a < Ze; a++)
            if (null != this.Wc[a]) {
                var b = this.Wc[a];
                b.Av && (b.resume(),
                b.Av = !1)
            }
    }
};
function Wd(a) {
    var b;
    for (b = 0; b < Ze; b++)
        null != a.Wc[b] && (a.Wc[b].stop(),
        a.Wc[b] = null)
}
function Oe(a) {
    if (null != a.Kn && 0 < a.Kn.size() && !a.Oz) {
        var b = a.Kn.get(0);
        Za(a.Kn, 0);
        a.Oz = !0;
        a.context.decodeAudioData(b.response, function(c) {
            b.buffer = c;
            b.response = null;
            Te(a.app, b);
            a.Oz = !1
        }, function(a) {
            console.log("Sound Error, name: " + b.name + " and error: " + a.message)
        })
    }
}
function Mc(a) {
    this.app = a
}
Mc.prototype = {
    wl: function() {
        var a = S(this.app.file);
        this.path = this.app.file.bd(a);
        a = this.path.lastIndexOf("\\");
        0 <= a && (this.path = this.path.substring(a + 1));
        this.length = D(this.app.file);
        this.offset = this.app.file.Ba;
        T(this.app.file, this.length)
    },
    open: function() {
        return Wa(this.app.file, this.offset, this.length)
    }
};
function Ke(a) {
    this.app = a;
    this.sA = !1;
    this.M = null;
    this.context = this.app.context;
    this.mg = this.app.rH;
    this.color = this.app.qH;
    this.Hl = this.app.oH;
    0 > this.Hl && (this.Hl = this.app.bb / 2);
    this.Jl = this.app.pH;
    0 > this.Jl && (this.Jl = this.app.ib / 2);
    this.size = this.app.sH;
    this.CB = 0;
    this.Fv = 25;
    this.Jh = 0;
    this.Wx = !1;
    this.Eg = new Image;
    var b = this;
    this.Eg.onload = function() {
        b.sA = !0
    }
    ;
    this.Eg.src = this.app.Sm + "Preloader.png"
}
Ke.prototype = {
    load: function() {
        return this.sA
    },
    reset: function() {
        this.CB = this.Jh = 0;
        this.Fv = 25
    },
    step: function() {
        switch (this.Jh) {
        case 0:
            -1 != this.app.Go ? this.context.qe(0, 0, this.app.bb, this.app.ib, this.app.Go) : this.context.ps(0, 0, this.app.bb, this.app.ib);
            this.context.Rm(this.Eg, this.Hl - this.Eg.width / 2, this.Jl - this.Eg.height / 2, this.Eg.width, this.Eg.height, 0, 0);
            this.Jh++;
            break;
        case 1:
            var a = this.angle = this.app.Xk / this.app.Yk * 2 * Math.PI, b, c, d, e, f;
            for (b = this.CB; b <= a; b += .005) {
                c = this.Hl + Math.cos(b) * (this.mg - this.size);
                d = this.Jl - Math.sin(b) * (this.mg - this.size);
                e = this.Hl + Math.cos(b) * this.mg;
                f = this.Jl - Math.sin(b) * this.mg;
                this.context.Vf(c, d, e, f, this.color, 1, 0, 0);
                var g;
                for (g = 0; 3 > g; g++)
                    c = this.Hl + Math.cos(b) * (this.mg - this.size - g),
                    d = this.Jl - Math.sin(b) * (this.mg - this.size - g),
                    e = this.Hl + Math.cos(b) * (this.mg - this.size - g - 1),
                    f = this.Jl - Math.sin(b) * (this.mg - this.size - g - 1),
                    this.context.Vf(c, d, e, f, this.color, 1, 0, 0),
                    c = this.Hl + Math.cos(b) * (this.mg + g),
                    d = this.Jl - Math.sin(b) * (this.mg + g),
                    e = this.Hl + Math.cos(b) * (this.mg + g + 1),
                    f = this.Jl - Math.sin(b) * (this.mg + g + 1),
                    this.context.Vf(c, d, e, f, this.color, 1, 0, 0)
            }
            this.CB = a;
            this.app.Xk == this.app.Yk && this.Jh++;
            break;
        case 2:
            0 < this.Fv && this.Fv--;
            0 == this.Fv && this.Jh++;
            break;
        case 3:
            Pc(this.app, this) && this.Jh++
        }
    },
    rA: function() {
        return 4 == this.Jh
    }
};
function Me(a) {
    this.app = a;
    this.context = this.app.context;
    this.width = 100;
    this.height = 12;
    this.position = 0;
    this.wK = 10526880;
    this.borderColor = 8421504;
    this.xK = 0;
    this.rect = new sa;
    this.rect.left = this.app.bb / 2 - this.width / 2;
    this.rect.top = this.app.ib / 2 - this.height / 2;
    this.rect.right = this.rect.left + this.width;
    this.rect.bottom = this.rect.top + this.height;
    this.reset();
    this.Wx = !1
}
Me.prototype = {
    load: function() {
        return !0
    },
    reset: function() {
        this.cx = !1;
        this.Jh = 0;
        this.alpha = 128;
        this.position = 0
    },
    step: function() {
        if (this.app.Xk < this.app.Yk)
            switch (this.Jh) {
            case 0:
                0 < this.alpha && (this.alpha -= 2,
                0 >= this.alpha && (this.alpha = 0,
                this.Jh++))
            }
        else
            switch (this.Jh) {
            case 0:
            case 1:
                this.Jh = 2;
                break;
            case 2:
                128 > this.alpha && (this.alpha += 4);
                128 <= this.alpha && (this.alpha = 128,
                null == this.app.oh ? this.cx = !0 : this.Jh++);
                break;
            default:
                this.cx = Pc(this.app, this);
                return
            }
        this.context.qe(this.rect.left, this.rect.top, this.width, this.height, this.wK, Qc, this.alpha);
        this.context.lx(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, Qc, this.alpha);
        this.position = this.app.Xk / this.app.Yk * (this.width - 2);
        this.context.qe(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.xK, Qc, this.alpha)
    },
    rA: function() {
        return this.cx && this.app.Xk == this.app.Yk
    }
};
function Le(a) {
    this.app = a;
    this.sA = !1;
    this.Ae = new Oc;
    this.M = new Dc(this.app,this.app.file,this.app.path,!0);
    this.M.tA = !0;
    a = this.M;
    var b = this.app.Yw
      , c = this.Ae
      , d = this.app.bb
      , e = this.app.ib;
    a.kb = this.app;
    a.Jm = 0;
    a.Ig = c;
    a.Mx = b;
    a.Qw = d;
    a.Pw = e;
    this.M.digest();
    this.M.DA = !1;
    this.M.ep = !1;
    this.M.sb &= -16777217;
    Bc(this.M);
    a = this.M;
    a.pj = 0;
    a.rj = 0;
    Yd(this.M);
    this.Ae.x = this.app.bb / 2 - this.M.frame.Fg / 2;
    this.Ae.y = this.app.ib / 2 - this.M.frame.Xe / 2;
    this.IN = 0 != (this.app.sb & 8388608);
    this.app.dc.push(this.M);
    this.Tp = 0;
    this.Wx = !1
}
Le.prototype = {
    load: function() {
        this.step();
        return !this.M.Ij
    },
    reset: function() {
        Wd(this.M.Y.m.xf);
        Nd(this.M.Y);
        Od(this.M.Y, !1);
        Sd(this.M.Y, !1);
        Pd(this.M.Y.G);
        Rd(this.M.Y);
        Qd(this.M.Y);
        this.M.Y.J.nm = this.M.Y.J.vA = this.M.Y.Oq = 0;
        this.M.Y.J.om = this.M.Y.J.wA = this.M.Y.Pq = 0;
        Ud(this.M);
        te(this.M.Y);
        ue(this.M.Y);
        Sd(this.M.Y, !1);
        ve(this.M.Y);
        we(this.M.Y, !1);
        ze(this.M.Y);
        Be(this.M.Y);
        Ce(this.M.Y.G);
        De(this.M.Y.G, this.M.Y);
        Fe(this.M.Y);
        Ee(this.M.Y);
        this.M.Y.Uc = 0;
        this.M.Y.Zq = 0;
        this.M.ep = !1;
        this.app.dc.push(this.M);
        this.Tp = 0
    },
    step: function() {
        this.M.ep || (this.IN && (this.M.ep = this.app.Xk == this.app.Yk),
        0 == Yd(this.M) && (this.M.ep = !0),
        Xd(this.M, this.Ae.x, this.Ae.y, !1));
        this.M.ep && this.app.oh && Pc(this.app, this)
    },
    rA: function() {
        var a = this.M.ep;
        if (a) {
            if (0 < this.Tp && (this.Tp--,
            0 < this.Tp))
                return !1;
            this.M.Y.Uc = Ed;
            0 !== Ge(this.M.Y) && this.M.context.ps(0, 0, this.M.canvas.width, this.M.canvas.height);
            Vd(this.M);
            var b;
            for (b = 0; b < this.app.dc.length; b++)
                if (this.app.dc[b] == this.M) {
                    this.app.dc.splice(b, 1);
                    break
                }
        }
        return a
    }
};
function Uc(a) {
    this.app = a;
    this.jF = this.iF = this.Cg = this.Hf = this.FF = this.uA = this.EF = this.co = this.DF = this.Ts = this.GF = this.gq = this.ew = this.Xc = null;
    this.jc = Array(3);
    this.kc = Array(3);
    this.fa = this.$a = this.Ti = this.Si = 0;
    this.touches = Array(3);
    this.vz = !1;
    this.Us = this.Hj = this.HF = 0
}
Uc.prototype = {
    reset: function(a) {
        this.fa = a;
        null != this.Xc && 0 != this.Xc.width ? $e(this) : this.vz = !0;
        this.Hj = 70 * Math.PI / 180
    },
    ef: function(a, b) {
        0 != (a & 1) ? this.jc[0] = b : 0 != (a & 2) ? this.jc[1] = b : 0 != (a & 4) && (this.jc[2] = b)
    },
    ff: function(a, b) {
        0 != (a & 1) ? this.kc[0] = b : 0 != (a & 2) ? this.kc[1] = b : 0 != (a & 4) && (this.kc[2] = b)
    },
    Oc: function(a) {
        this.vz && (this.vz = !1,
        $e(this));
        var b, c;
        if (0 != (this.fa & 1))
            if (0 != (this.fa & 16)) {
                var d = this.$a & 1 ? this.GF : this.gq;
                b = this.jc[0] - d.width / 2;
                c = this.kc[0] - d.height;
                a.tf(d, b, c, 0, 1, 1, 0, 0);
                d = this.$a & 2 ? this.DF : this.Ts;
                b = this.jc[0] - d.width / 2;
                c = this.kc[0];
                a.tf(d, b, c, 0, 1, 1, 0, 0);
                d = this.$a & 4 ? this.EF : this.co;
                b = this.jc[0] - d.width;
                c = this.kc[0] - d.height / 2;
                a.tf(d, b, c, 0, 1, 1, 0, 0);
                d = this.$a & 8 ? this.FF : this.uA;
                b = this.jc[0];
                c = this.kc[0] - d.height / 2;
                a.tf(d, b, c, 0, 1, 1, 0, 0)
            } else
                b = this.jc[0] - this.Xc.width / 2,
                c = this.kc[0] - this.Xc.height / 2,
                a.tf(this.Xc, b, c, 0, 1, 1, 0, 0),
                b = this.jc[0] + this.Si - this.ew.width / 2,
                c = this.kc[0] + this.Ti - this.ew.height / 2,
                a.tf(this.ew, b, c, 0, 1, 1, 0, 0);
        0 != (this.fa & 2) && (d = 0 == (this.$a & 16) ? this.Hf : this.iF,
        b = this.jc[1] - d.width / 2,
        c = this.kc[1] - d.height / 2,
        a.tf(d, b, c, 0, 1, 1, 0, 0));
        0 != (this.fa & 4) && (d = 0 == (this.$a & 32) ? this.Cg : this.jF,
        b = this.jc[2] - d.width / 2,
        c = this.kc[2] - d.height / 2,
        a.tf(d, b, c, 0, 1, 1, 0, 0))
    },
    getKey: function(a, b) {
        if (0 != (this.fa & 1))
            if (0 != (this.fa & 16)) {
                if (a >= this.jc[0] - this.co.width && a < this.jc[0] + this.uA.width && b > this.kc[0] - this.gq.height && b < this.kc[0] + this.Ts.height)
                    return 0
            } else if (a >= this.jc[0] - this.Xc.width / 2 && a < this.jc[0] + this.Xc.width / 2 && b > this.kc[0] - this.Xc.height / 2 && b < this.kc[0] + this.Xc.height / 2)
                return 0;
        return 0 != (this.fa & 2) && a >= this.jc[1] - this.Hf.width / 2 && a < this.jc[1] + this.Hf.width / 2 && b > this.kc[1] - this.Hf.height / 2 && b < this.kc[1] + this.Hf.height / 2 ? 1 : 0 != (this.fa & 4) && a >= this.jc[2] - this.Cg.width / 2 && a < this.jc[2] + this.Cg.width / 2 && b > this.kc[2] - this.Cg.height / 2 && b < this.kc[2] + this.Cg.height / 2 ? 2 : -1
    },
    Tv: function() {
        return this.$a
    }
};
function bd(a, b) {
    var c;
    for (c = 0; 3 > c; c++)
        if (a.touches[c] == b.identifier) {
            a.touches[c] = 0;
            switch (c) {
            case 0:
                a.Si = 0;
                a.Ti = 0;
                a.$a &= 240;
                break;
            case 1:
                a.$a &= -17;
                break;
            case 2:
                a.$a &= -33
            }
            break
        }
}
function af(a, b, c) {
    return a > b - c / 2 && a < b + c / 2
}
function dd(a, b) {
    var c = Zc(a.app, b)
      , d = Yc(a.app, b);
    0 == a.getKey(c, d) && (a.touches[0] = b.identifier);
    a.touches[0] == b.identifier && hd(a, c, d)
}
function hd(a, b, c) {
    a.Si = b - a.jc[0];
    a.Ti = c - a.kc[0];
    0 == (a.fa & 16) && (a.Si < -a.Xc.width / 4 && (a.Si = -a.Xc.width / 4),
    a.Si > a.Xc.width / 4 && (a.Si = a.Xc.width / 4),
    a.Ti < -a.Xc.height / 4 && (a.Ti = -a.Xc.height / 4),
    a.Ti > a.Xc.height / 4 && (a.Ti = a.Xc.height / 4));
    b = (2 * Math.PI - Math.atan2(a.Ti, a.Si)) % (2 * Math.PI);
    a.$a &= 240;
    c = Math.sqrt(a.Si * a.Si + a.Ti * a.Ti);
    if (c > a.HF && c <= a.Us) {
        a.Si = Math.cos(b) * a.Us / 2;
        a.Ti = Math.sin(b) * -a.Us / 2;
        c = 0;
        if (0 <= b)
            for (; ; ) {
                if (af(b, 0, a.Hj) || af(b, 2 * Math.PI, a.Hj)) {
                    c = 8;
                    break
                }
                if (af(b, Math.PI / 2, a.Hj)) {
                    c = 1;
                    break
                }
                if (af(b, Math.PI, a.Hj)) {
                    c = 4;
                    break
                }
                if (af(b, Math.PI / 4 * 6, a.Hj)) {
                    c = 2;
                    break
                }
                if (af(b, Math.PI / 4, Math.PI / 2 - a.Hj)) {
                    c = 9;
                    break
                }
                if (af(b, Math.PI / 4 * 3, Math.PI / 2 - a.Hj)) {
                    c = 5;
                    break
                }
                if (af(b, Math.PI / 4 * 5, Math.PI / 2 - a.Hj)) {
                    c = 6;
                    break
                }
                if (af(b, Math.PI / 4 * 7, Math.PI / 2 - a.Hj)) {
                    c = 10;
                    break
                }
                break
            }
        a.$a |= c
    }
}
function $e(a) {
    var b, c;
    b = a.app.bb;
    c = a.app.ib;
    a.Us = 0 != (a.fa & 16) ? Math.ceil(Math.sqrt(a.co.width * a.co.width + a.gq.height * a.gq.height)) : Math.ceil(Math.sqrt(a.Xc.width / 2 * a.Xc.width / 2 + a.Xc.height / 2 * a.Xc.height / 2));
    a.HF = .25 * a.Us;
    0 == (a.fa & 8) ? (0 != (a.fa & 1) && (0 != (a.fa & 16) ? (a.jc[0] = 16 + a.co.width,
    a.kc[0] = c - 16 - a.Ts.height) : (a.jc[0] = 16 + a.Xc.width / 2,
    a.kc[0] = c - 16 - a.Xc.height / 2)),
    0 != (a.fa & 2) && 0 != (a.fa & 4) ? (a.jc[1] = b - a.Hf.width / 2 - 32,
    a.kc[1] = c - a.Hf.height / 2 - 16,
    a.jc[2] = b - a.Cg.width / 2 - 16,
    a.kc[2] = c - a.Cg.height / 2 - a.Hf.height - 24) : 0 != (a.fa & 2) ? (a.jc[1] = b - a.Hf.width / 2 - 16,
    a.kc[1] = c - a.Hf.height / 2 - 16) : 0 != (a.fa & 4) && (a.jc[2] = b - a.Cg.width / 2 - 16,
    a.kc[2] = c - a.Cg.height / 2 - 16)) : (0 != (a.fa & 1) && (0 != (a.fa & 16) ? (a.jc[0] = b - 16 - a.co.width,
    a.kc[0] = c - 16 - a.Ts.height) : (a.jc[0] = b - 16 - a.Xc.width / 2,
    a.kc[0] = c - 16 - a.Xc.height / 2)),
    0 != (a.fa & 2) && 0 != (a.fa & 4) ? (a.jc[1] = a.Hf.width / 2 + 16 + 2 * a.Cg.width / 3,
    a.kc[1] = c - a.Hf.height / 2 - 16,
    a.jc[2] = a.Cg.width / 2 + 16,
    a.kc[2] = c - a.Cg.height / 2 - a.Hf.height - 24) : 0 != (a.fa & 2) ? (a.jc[1] = a.Hf.width / 2 + 16,
    a.kc[1] = c - a.Hf.height / 2 - 16) : 0 != (a.fa & 4) && (a.jc[2] = a.Cg.width / 2 + 16,
    a.kc[2] = c - a.Cg.height / 2 - 16))
}
function Vc(a) {
    null == a.Xc && (a.Xc = bf(a.app, "joyback.png"),
    a.ew = bf(a.app, "joyfront.png"));
    null == a.gq && 0 != (a.app.frame.mm & Wc) && (a.gq = bf(a.app, "joyup.png"),
    a.GF = bf(a.app, "joyupd.png"),
    a.Ts = bf(a.app, "joydown.png"),
    a.DF = bf(a.app, "joydownd.png"),
    a.co = bf(a.app, "joyleft.png"),
    a.EF = bf(a.app, "joyleftd.png"),
    a.uA = bf(a.app, "joyright.png"),
    a.FF = bf(a.app, "joyrightd.png"));
    null == a.Hf && (a.Hf = bf(a.app, "fire1U.png"),
    a.Cg = bf(a.app, "fire2U.png"),
    a.iF = bf(a.app, "fire1D.png"),
    a.jF = bf(a.app, "fire2D.png"))
}
;var pb = 3
  , Ed = -2
  , cf = !1
  , df = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255]
  , qf = [0, 1, 2, 0, 4, 5, 6, 0, 8, 9, 10, 0, 0, 0, 0, 0]
  , rf = !1;
function ec(a, b, c) {
    switch (c) {
    case 0:
        return a == b;
    case 1:
        return a != b;
    case 2:
        return a <= b;
    case 3:
        return a < b;
    case 4:
        return a >= b;
    case 5:
        return a > b
    }
    return !1
}
function Ye(a) {
    this.m = a;
    this.J = null;
    this.pk = this.Sb = this.Zq = this.sC = this.Uc = this.df = this.Me = this.rC = this.lh = 0;
    this.G = this.ta = null;
    this.Xo = this.au = this.cu = this.Yo = this.Wm = this.se = this.qC = this.Cl = this.bu = this.Zo = this.Ra = this.Ma = this.fe = this.ee = 0;
    this.ox = this.hC = this.px = null;
    this.vx = this.jC = this.To = this.Ro = this.Uo = this.So = this.Sq = this.Qq = this.Tq = this.Rq = this.kC = this.jh = this.mC = this.lC = this.Pq = this.Oq = this.GH = this.kj = this.Zt = this.Yt = this.Wt = this.Qo = 0;
    this.Vo = null;
    this.cd = this.Xq = this.yx = this.xx = this.Uq = this.nC = this.JH = 0;
    this.ux = this.Wq = this.uf = null;
    this.oi = 0;
    this.tx = this.Yq = null;
    this.Vq = 0;
    this.Wo = null;
    this.de = 0;
    this.U = this.bx = null;
    this.Un = !1;
    this.eF = 0;
    this.pC = 255;
    this.dx = this.qM = !1
}
function Db(a, b) {
    null != a.L ? a.L.Va.ef(b) : a.B != b && (a.B = b,
    null != a.b && (a.b.la = !0,
    a.b.Rb = !0))
}
function Eb(a, b) {
    null != a.L ? a.L.Va.ff(b) : a.A != b && (a.A = b,
    null != a.b && (a.b.la = !0,
    a.b.Rb = !0))
}
Ye.prototype = {
    Pk: function() {
        var a, b, c;
        for (c = a = 0; a < this.Sb; a++) {
            for (; null == this.U[c]; )
                c++;
            c++
        }
        for (c = a = 0; a < this.Sb; a++) {
            for (; null == this.U[c]; )
                c++;
            b = this.U[c];
            c++;
            b.Pk()
        }
    },
    Nl: function() {
        if (0 == this.HH) {
            this.HH = !0;
            this.Um = null;
            var a = 0, b;
            for (b = 0; b < this.Sb; a++,
            b++) {
                for (; null == this.U[a]; )
                    a++;
                var c = this.U[a];
                if (32 <= c.Bb && 1110590791 == c.ma.Le) {
                    this.Um = c.ext;
                    break
                }
            }
        }
        return this.Um
    },
    fc: function(a) {
        return a && 0 == (a.Da & sf) && 0 != (a.mb & tf) && a.b.pe == Uf && a.ma.fi.sf[a.L.gu].Ss ? a.L.Va.Ze : null
    },
    Ed: function(a) {
        return null != a.L && null != a.L.Va ? a.L.Va.Ed() : a.b.Fb
    },
    pause: function(a) {
        if (0 == this.kj) {
            this.kj = 1;
            this.GH = this.m.ph;
            var b = 0, c;
            for (c = 0; c < this.Sb; c++) {
                for (; null == this.U[b]; )
                    b++;
                b++
            }
            a || this.m.xf.pause()
        }
    },
    resume: function() {
        if (!this.qM && 0 != this.kj) {
            this.kj = 0;
            Ee(this);
            var a = 0, b;
            for (b = 0; b < this.Sb; b++) {
                for (; null == this.U[a]; )
                    a++;
                a++
            }
            this.m.xf.resume();
            a = this.m.ph;
            a -= this.GH;
            this.Yo += a;
            this.vx = 0;
            this.dx = !1
        }
    },
    Zl: function() {
        var a = 0, b;
        for (b = 0; b < this.Sb; b++) {
            for (; null == this.U[a]; )
                a++;
            var c = this.U[a];
            a++;
            c.Zl()
        }
    },
    random: function(a) {
        var b = 31415 * this.jC + 1;
        this.jC = b &= 65535;
        return b * a >>> 16
    },
    getExpression: function() {
        var a, b = this.cd;
        this.Wq[this.cd] = this.ux;
        do {
            this.cd++;
            this.Yq[this.oi].evaluate(this);
            this.oi++;
            do
                if (a = this.Yq[this.oi],
                0 < a.code && 1310720 > a.code)
                    a.code > this.Wq[this.cd - 1].code ? (this.Wq[this.cd] = a,
                    this.oi++,
                    this.cd++,
                    this.Yq[this.oi].evaluate(this),
                    this.oi++) : (this.cd--,
                    this.Wq[this.cd].evaluate(this));
                else {
                    this.cd--;
                    if (this.cd == b)
                        break;
                    this.Wq[this.cd].evaluate(this)
                }
            while (1)
        } while (this.cd > b + 1);
        return this.uf[b + 1]
    },
    doScroll: function() {
        if (0 != (this.kC & 1)) {
            this.kC = 0;
            var a = this.J.nm != this.Oq || this.J.om != this.Pq;
            if (!a)
                for (var b = 0; b < this.J.me; b++)
                    if (0 != this.J.Lb[b].Mn || 0 != this.J.Lb[b].Nn) {
                        a = !0;
                        break
                    }
            if (a) {
                for (var b = this.Oq, c = this.Pq, d, e, f = 0; f < this.J.me; f++) {
                    a = this.J.Lb[f];
                    d = b;
                    e = c;
                    0 != (a.sb & (Vf | Wf)) && (0 != (a.sb & Vf) && (d *= a.lr),
                    0 != (a.sb & Wf) && (e *= a.mr));
                    d += a.jx;
                    e += a.kx;
                    d += a.Mn;
                    e += a.Nn;
                    var g = 0 != (a.sb & Xf);
                    0 != (a.sb & Yf) && (d %= this.J.Fg,
                    0 > d && (d += this.J.Fg));
                    g && (e %= this.J.Xe,
                    0 > e && (e += this.J.Xe));
                    a.x = d;
                    a.y = e;
                    a.jx += a.Mn;
                    a.kx += a.Nn;
                    a.Td.x = -d + this.m.qj;
                    a.Td.y = -e + this.m.sj;
                    a.kd.x = -d + this.m.qj;
                    a.kd.y = -e + this.m.sj;
                    a.Db.x = -d + this.m.qj;
                    a.Db.y = -e + this.m.sj
                }
                this.J.nm = b;
                this.J.om = c;
                var a = this.J.nm
                  , b = this.J.om
                  , h = !1;
                this.xx = a - this.Ma;
                this.yx = b - this.Ra;
                if (0 != this.xx || 0 != this.yx)
                    h = !0;
                if (!h)
                    for (c = 0; c < this.J.me; c++)
                        if (g = this.J.Lb[c],
                        0 != g.Mn || 0 != g.Nn) {
                            h = !0;
                            break
                        }
                c = this.Ma;
                d = this.Ra;
                e = this.xx;
                f = this.yx;
                this.Ma = a;
                this.Rq = a - 64;
                0 > this.Rq && (this.Rq = this.So);
                this.Ra = b;
                this.Tq = b - 16;
                0 > this.Tq && (this.Tq = this.Uo);
                this.Qq = a + this.lC + 64;
                this.Qq > this.ee && (this.Qq = this.Ro);
                this.Sq = b + this.mC + 16;
                this.Sq > this.fe && (this.Sq = this.To);
                if (h)
                    for (var k = h = 0; k < this.Sb; k++) {
                        for (; null == this.U[h]; )
                            h++;
                        var m = this.U[h];
                        h++;
                        if (0 != (m.mb & Zf))
                            null == m.L ? (m.B += e,
                            m.A += f) : (m.L.Va.ef(m.B + e),
                            m.L.Va.ff(m.A + f));
                        else if (g = m.Dg,
                        g < this.J.me) {
                            var l = c
                              , t = d
                              , w = a
                              , r = b
                              , g = this.J.Lb[g];
                            0 != (g.sb & Vf) && (l *= g.lr,
                            w *= g.lr);
                            0 != (g.sb & Wf) && (t *= g.mr,
                            r *= g.mr);
                            l = m.B + l - w + e - g.Mn;
                            g = m.A + t - r + f - g.Nn;
                            0 == (m.mb & tf) ? (m.B = l,
                            m.A = g) : (m.L.Va.ef(l),
                            m.L.Va.ff(g));
                            m.Zp()
                        }
                    }
                for (b = 0; b < this.J.me; b++)
                    this.J.Lb[b].Mn = 0,
                    this.J.Lb[b].Nn = 0
            }
            this.Oq = this.Ma;
            this.Pq = this.Ra
        }
    },
    hv: function(a, b, c, d, e, f) {
        d = this.J.Lb[d];
        var g = new $f(this.m,b - this.Ma + d.x,c - this.Ma + d.y,null,a,e);
        g.Ef(0, d);
        !f || e != ag.vp && e != ag.uj || null == this.Um || (g.body = this.Um.HM(pHo.B - this.Ma + d.x, pHo.A - this.Ra + d.y, pHo.b.qc, e));
        f = 0 != (d.sb & Xf);
        0 != (d.sb & Yf) ? (g = new $f(this.m,this.J.Fg + b - this.Ma + d.x,c - this.Ra + d.y,null,a,e),
        g.Ef(1, d),
        b + g.width > this.J.Fg && (g = new $f(this.m,b - this.Ma + d.x - this.J.Fg,c - this.Ra + d.y,null,a,e),
        g.Ef(4, d)),
        f && (g = new $f(this.m,b - this.Ma + d.x,this.J.Xe + c - this.Ra + d.y,null,a,e),
        g.Ef(2, d),
        g = new $f(this.m,this.J.Fg + b - this.Ma + d.x,this.J.Xe + c - this.Ra + d.y,null,a,e),
        g.Ef(3, d),
        c + g.height > this.J.Xe && (g = new $f(this.m,b - this.Ma + d.x,c - this.Ra + d.y - this.J.Xe,null,a,e),
        g.Ef(5, d)))) : f && (g = new $f(this.m,b - this.Ma + d.x,this.J.Xe + c - this.Ra + d.y,null,a,e),
        g.Ef(2, d),
        c + g.height > this.J.Xe && (g = new $f(this.m,b - this.Ma + d.x,c - this.Ra + d.y - this.J.Xe,null,a,e),
        g.Ef(5, d)))
    },
    gF: function(a) {
        var b, c;
        if (0 != this.Sb)
            for (b = 0; b < this.pk; b++)
                if ((c = this.U[b]) && c.$d.Co == a)
                    return this.bA = c.$d.Hm - 1,
                    c;
        return null
    },
    hF: function(a) {
        if (a && this.bA) {
            var b = a.Pc + 1;
            a = a.$d.Co;
            for (var c; ; ) {
                c = this.U[b];
                if (null != c && c.$d.Co == a)
                    return this.bA--,
                    c;
                b++
            }
        }
        this.bA = 0;
        return null
    }
};
function ze(a) {
    var b, c = new sa, d;
    for (d = 0; d < a.J.me; d++) {
        var e = a.J.Lb[d], f = 0 != (e.sb & Yf), g = 0 != (e.sb & Xf), h = e.xt, k;
        for (k = 0; k < h; k++) {
            b = a.J.Af.list[e.zt + k];
            b.Ys < he && (c.left = b.jw,
            c.top = b.kw);
            var m;
            m = new $f(a.m,c.left,c.top,b,null,0);
            m.Ef(0, e);
            f ? (m = new $f(a.m,a.J.Fg + c.left,c.top,b,null,0),
            m.Ef(1, e),
            c.left + m.width > a.J.Fg && (m = new $f(a.m,c.left - a.J.Fg,c.top,b,null,0),
            m.Ef(4, e)),
            g && (m = new $f(a.m,c.left,a.J.Xe + c.top,b,null,0),
            m.Ef(2, e),
            m = new $f(a.m,a.J.Fg + c.left,a.J.Xe + c.top,b,null,0),
            m.Ef(3, e),
            c.top + m.height > a.J.Xe && (m = new $f(a.m,c.left,c.top - a.J.Xe,b,null,0),
            m.Ef(5, e)))) : g && (m = new $f(a.m,c.left,a.J.Xe + c.top,b,null,0),
            m.Ef(2, e),
            c.top + m.height > a.J.Xe && (m = new $f(a.m,c.left,c.top - a.J.Xe,b,null,0),
            m.Ef(5, e)))
        }
    }
}
function sb(a, b, c, d) {
    b++;
    var e = 0, f;
    for (f = 0; f < a.Sb; f++) {
        for (; null == a.U[e]; )
            e++;
        var g = a.U[e];
        if (g.Bb == c)
            switch (c) {
            case 5:
                g.Dl == b && g.Kx(d);
                break;
            case 6:
                g.Dl == b && g.Kx(d)
            }
        e++
    }
}
function xc(a) {
    a.Un = !1;
    a = a.getExpression();
    return 0 > a ? Math.ceil(a) : Math.floor(a)
}
function bg(a, b) {
    a.Yq = b.Gb;
    a.oi = 0;
    a.Un = !1;
    return a.getExpression()
}
function ob(a, b) {
    a.Yq = b.Gb;
    a.oi = 0;
    a.Un = !1;
    return a.getExpression()
}
function Mb(a, b) {
    a.Yq = b.Gb;
    a.oi = 0;
    a.Un = !1;
    return a.getExpression()
}
function cg(a, b) {
    if (0 == b || -1 == b)
        return a.random(32);
    var c, d = 0, e = 0, f = b;
    for (c = 0; 32 > c; c++)
        0 != (f & 1) && (e++,
        d = c),
        f >>>= 1;
    if (1 == e)
        return d;
    e = a.random(e);
    f = b;
    for (c = 0; 32 > c; c++) {
        if (0 != (f & 1) && (e--,
        0 > e))
            return c;
        f >>>= 1
    }
    return 0
}
function dg(a, b, c, d, e) {
    var f = 15;
    b < a.ee && (f &= -3);
    c < a.fe && (f &= -9);
    0 < d && (f &= -2);
    0 < e && (f &= -5);
    return qf[f]
}
function eg(a, b, c, d, e) {
    var f = 0;
    0 > b && (f |= 1);
    0 > c && (f |= 4);
    d > a.ee && (f |= 2);
    e > a.fe && (f |= 8);
    return qf[f]
}
function hc(a, b, c, d, e, f, g, h, k) {
    var m = a.J.Lb[b.Dg];
    switch (b.Bb) {
    case he:
        if (0 == (b.ca.Ga & fg)) {
            if (b = X(a.m.xa, b.b.qc),
            null != b)
                return b = gg(b, hg, c, d, e),
                null != m.cn(b, f - a.Ma, g - a.Ra, h, k)
        } else
            return f = f - b.Ya - a.Ma,
            a = g - b.Za - a.Ra,
            g = f + b.aa,
            b = a + b.$,
            h = null != m.Ox(f, a, g, b, h, k);
        return !1;
    default:
        return f = f - b.Ya - a.Ma,
        a = g - b.Za - a.Ra,
        g = f + b.aa,
        b = a + b.$,
        h = null != m.Ox(f, a, g, b, h, k)
    }
}
function ig(a, b, c, d, e, f, g, h, k) {
    var m = null;
    g -= b.Ya;
    var l = g + b.aa;
    h -= b.Za;
    var t = h + b.$, w, r;
    if (0 != (b.Da & jg) || 0 != (b.Da & sf))
        return m;
    var u = !1
      , n = null
      , z = -1;
    b.Bb == he && 0 == (b.ca.Ga & fg) && (u = !0);
    b.Bb == he && (z = b.ca.$o);
    var E = b.Da;
    b.Da |= jg;
    var A = 0, v, H, G;
    if (null != k)
        for (A = 0; A < k.length; A += 2)
            for (var O = a.ta[k[A + 1]].Fc; 0 == (O & 2147483648); ) {
                if (v = a.U[O],
                O = v.Od,
                0 == (v.Da & jg) && 0 == (v.Da & sf) && (H = v.B - v.Ya,
                G = v.A - v.Za,
                H < l && H + v.aa > g && G < t && G + v.$ > h))
                    switch (v.Bb) {
                    case he:
                        (0 > z || 0 <= z && z == v.ca.$o) && 0 != (v.ca.Ga & kg) && (0 == u || 0 != (v.ca.Ga & fg) ? (null == m && (m = new V),
                        m.add(v)) : (null == n && (r = X(a.m.xa, c),
                        null != r && (n = gg(r, 0, d, e, f))),
                        r = X(a.m.xa, v.b.qc),
                        null != r && (w = gg(r, 0, v.b.xc, v.b.Kc, v.b.Lc)),
                        null != n && null != w && n.cn(g, h, 0, w, H, G, 0) && (null == m && (m = new V),
                        m.add(v))));
                        break;
                    case Hd:
                    case Id:
                    case xb:
                    case tb:
                    case lg:
                        null == m && (m = new V);
                        m.add(v);
                        break;
                    default:
                        null == m && (m = new V),
                        m.add(v)
                    }
            }
    else
        for (k = 0; k < a.Sb; k++) {
            for (; null == a.U[A]; )
                A++;
            v = a.U[A];
            A++;
            if (0 == (v.Da & jg) && (H = v.B - v.Ya,
            G = v.A - v.Za,
            H < l && H + v.aa > g && G < t && G + v.$ > h))
                switch (v.Bb) {
                case he:
                    (0 > z || 0 <= z && z == v.ca.$o) && 0 != (v.ca.Ga & kg) && (0 == u || 0 != (v.ca.Ga & fg) ? (null == m && (m = new V),
                    m.add(v)) : (null == n && (r = X(a.m.xa, c),
                    null != r && (n = gg(r, 0, d, e, f))),
                    r = X(a.m.xa, v.b.qc),
                    null != r && (w = gg(r, 0, v.b.xc, v.b.Kc, v.b.Lc)),
                    null != n && null != w && n.cn(g, h, 0, w, H, G, 0) && (null == m && (m = new V),
                    m.add(v))));
                    break;
                case Hd:
                case Id:
                case xb:
                case tb:
                case lg:
                    null == m && (m = new V);
                    m.add(v);
                    break;
                default:
                    null == m && (m = new V),
                    m.add(v)
                }
        }
    b.Da = E;
    return m
}
function mg(a, b) {
    rf = b.L.sa = !1;
    b.L.fu = 0;
    var c, d;
    0 != (b.Uh & ng) && (c = dg(a, b.b.$B, b.b.bC, b.b.aC, b.b.cC),
    0 != c && (d = dg(a, b.B - b.Ya, b.A - b.Za, b.B - b.Ya + b.aa, b.A - b.Za + b.$),
    0 == d && (c ^= d,
    0 != c && (b.L.fu |= og,
    a.G.Id = c,
    pg(a.G, b, -720896 | b.Bb & 65535)))),
    c = dg(a, b.B - b.Ya, b.A - b.Za, b.B - b.Ya + b.aa, b.A - b.Za + b.$),
    0 != (c & b.L.tC) && (d = b.L.sa,
    0 != (c & 1) ? b.L.Va.ef(b.B + a.ee) : 0 != (c & 2) && b.L.Va.ef(b.B - a.ee),
    0 != (c & 4) ? b.L.Va.ff(b.A + a.fe) : 0 != (c & 8) && b.L.Va.ff(b.A - a.fe),
    b.b.pe != qg && b.b.pe != Uf && (b.L.sa = d)),
    c = eg(a, b.b.$B, b.b.bC, b.b.aC, b.b.cC),
    15 != c && (d = eg(a, b.B - b.Ya, b.A - b.Za, b.B - b.Ya + b.aa, b.A - b.Za + b.$),
    c = ~c & d,
    0 != c && (b.L.fu |= rg,
    a.G.Id = c,
    pg(a.G, b, -786432 | b.Bb & 65535))));
    0 != (b.Uh & sg) && (b.b.pe == qg ? b.L.Va.nM() : hc(a, b, b.b.xc, b.b.Kc, b.b.Lc, b.B, b.A, 0, 1) && pg(a.G, b, -851968 | b.Bb & 65535));
    if (0 != (b.Uh & tg) && (c = ig(a, b, b.b.qc, b.b.xc, b.b.Kc, b.b.Lc, b.B, b.A, b.$d.Fm),
    null != c))
        for (d = 0; d < c.size(); d++) {
            var e = c.get(d);
            if (0 == (e.Da & sf)) {
                var f = b.Bb
                  , g = b
                  , h = e;
                g.Bb > h.Bb && (g = e,
                h = b,
                f = g.Bb);
                a.G.Id = h.De;
                a.G.nx = h.Pc;
                pg(a.G, g, -917504 | f & 65535)
            }
        }
    return rf
}
function ug(a) {
    a.Yt = a.m.bj + a.Ma - a.m.qj;
    a.Zt = a.m.cj + a.Ra - a.m.sj
}
function vg(a) {
    var b = a.m.xf, c;
    for (c = 0; c < Ze; c++)
        null != b.Wc[c] && wg(b.Wc[c]) && (b.Wc[c] = null);
    if (null != a.m.kb && a.m.Ij)
        return a.Yo = a.m.ph,
        a.Wm = 0,
        a.Uc;
    if (null != a.m.Zi)
        return a.m.Zi.handle(),
        0;
    if (!a.Az) {
        b = a.Nl();
        if (null != b) {
            c = 0;
            var d;
            for (d = 0; d < a.Sb; c++,
            d++) {
                for (; null == a.U[c]; )
                    c++;
                var e = a.U[c];
                32 <= e.Bb && (1110591041 == e.ma.Le || 1110594637 == e.ma.Le || 1110600435 == e.ma.Le || 1110634490 == e.ma.Le || 1110874198 == e.ma.Le ? e.ext.Io() : 1110590791 == e.ma.Le && e.ext.Io())
            }
            for (d = c = 0; d < a.Sb; c++,
            d++) {
                for (; null == a.U[c]; )
                    c++;
                e = a.U[c];
                if (0 != (e.mb & tf)) {
                    var f = !1;
                    if (e.b.pe == Uf) {
                        var g = e.ma.fi.sf[e.L.gu];
                        g.Ss && (e.L.Va.Ze.pr(),
                        f = !0)
                    }
                    0 == f && 2 == e.Bb && b.IM(e)
                }
            }
            for (d = c = 0; d < a.Sb; c++,
            d++) {
                for (; null == a.U[c]; )
                    c++;
                e = a.U[c];
                0 != (e.mb & tf) && e.b.pe == Uf && (g = e.ma.fi.sf[e.L.gu],
                g.Ss && e.L.Va.Ze.sc())
            }
        }
        a.Az = !0
    }
    b = a.m.ph - a.Yo;
    c = a.Wm;
    a.Wm = b;
    b -= c;
    a.cu = b;
    a.Xq += b;
    a.se += 1;
    a.de = a.cu * a.J.VF / 1E3;
    a.tx[a.Vq] = b;
    a.Vq++;
    10 <= a.Vq && (a.Vq = 0);
    for (b = 0; 4 > b; b++)
        a.px[b] = a.df[b];
    for (b = 0; 4 > b; b++)
        a.df[b] = 0;
    for (b = a.m; null != b.kb && 0 != (b.Jm & xg); )
        b = b.kb;
    c = b.LB;
    for (b = 0; 4 > b; b++)
        for (d = 0; 8 > d; d++)
            a.m.We[c[8 * b + d]] && (a.df[b] |= 1 << d);
    1 == a.m.$k ? a.df[0] |= a.m.$a.Tv() & a.pC : 2 == a.m.$k && (a.df[0] |= a.m.Tv() & a.pC);
    if (0 != a.Xo)
        for (ug(a),
        a.Qo = 0,
        a.m.We[200] && (a.Qo |= 16),
        a.m.We[202] && (a.Qo |= 32),
        b = 0; b < a.rC; b++)
            0 != (a.IP & 1) && (c = a.df[b] & 207,
            c |= a.Qo,
            a.df[b] = c);
    else
        ug(a);
    for (b = 0; 4 > b; b++)
        c = a.df[b] & df[4 * a.rC + b],
        c &= a.ox[b],
        a.df[b] = c,
        c ^= a.px[b],
        a.hC[b] = c,
        0 != c && (c &= a.df[b],
        0 != (c & 240) ? (a.G.KH = b,
        c = a.hC[b],
        0 != (c & 240) && (a.G.Id = c,
        kd(a.G, -196615)),
        0 != (c & 15) && (a.G.Id = c,
        kd(a.G, -196615))) : (d = a.G.Pd[a.G.Kh[-yg] + 4],
        0 != d && (a.G.Id = c,
        zg(a.G, d, null))));
    if (0 != a.Sb) {
        b = a.Sb;
        c = 0;
        do {
            for (a.nC = 0; null == a.U[c]; )
                c++;
            d = a.U[c];
            d.BF = d.Yv;
            d.Yv = null;
            d.Zv && (a.JH = c,
            d.handle());
            b += a.nC;
            c++;
            b--
        } while (0 != b)
    }
    a.jh++;
    b = a.G;
    if (0 != (b.v.Me & 16))
        c = b.Pd[b.Kh[-Ag] + 1],
        0 != c && (b.Pd[b.Kh[-Ag] + 1] = -1,
        zg(b, c, null),
        b.$t = !0);
    else {
        c = b.Pd[b.Kh[-Bg] + 3];
        0 != c && zg(b, c, null);
        c = b.Pd[b.Kh[-Ag] + 1];
        var h;
        if (0 != c) {
            if (b.$t) {
                g = null;
                d = c;
                do {
                    f = b.Md[d];
                    if (f != g)
                        for (g = f,
                        e = f.sd; e < f.sd + f.$g; e++)
                            h = f.ic[e],
                            0 == (h.Qb & Cg) && (h.Qb |= Dg);
                    d++
                } while (null != b.Md[d])
            }
            zg(b, c, null);
            b.Pd[b.Kh[-Ag] + 1] = 0;
            if (b.$t) {
                g = null;
                d = c;
                do {
                    f = b.Md[d];
                    if (f != g)
                        for (g = f,
                        e = f.sd; e < f.sd + f.$g; e++)
                            h = f.ic[e],
                            h.Qb &= ~Dg;
                    d++
                } while (null != b.Md[d]);
                b.$t = !1
            }
        }
        c = b.Pd[b.Kh[-Bg] + 2];
        0 != c && zg(b, c, null);
        c = b.Pd[b.Kh[-Bg] + 1];
        0 != c && zg(b, c, null)
    }
    b = a.G;
    d = !1;
    for (c = b.v.oC; c; ) {
        if (b.v.Wm >= c.ph)
            if (c.type == Eg)
                b.v.G.Id = c.name,
                e = b.Pd[b.Kh[-Bg] + W.oD],
                0 != e && zg(b, e, null),
                d = c.UD = !0;
            else
                for (0 == c.Px && (c.Px = b.v.Wm); b.v.Wm >= c.Px; ) {
                    b.v.G.Id = c.name;
                    b.v.G.LH = c.index;
                    e = b.Pd[b.Kh[-Bg] + W.oD];
                    0 != e && zg(b, e, null);
                    c.index++;
                    c.FA--;
                    if (0 == c.FA) {
                        d = c.UD = !0;
                        break
                    }
                    c.Px += c.BQ
                }
        c = c.next
    }
    if (d)
        for (c = b.v.oC,
        d = null; c; )
            e = c.next,
            c.UD ? null == d ? b.v.oC = e : d.next = e : d = c,
            c = e;
    a.G.MH && 0 == (a.Me & 16) && zg(a.G, 0, null);
    b = a.G;
    if (null != b.nk) {
        for (c = 0; c < b.nk.size(); c++)
            if (d = b.nk.get(c),
            null != d && 0 != d.code)
                switch (b.Id = d.zM,
                b.KH = d.Cm,
                d.cN) {
                case 0:
                    kd(b, d.code);
                    break;
                case 1:
                    pg(b, d.yM, d.code)
                }
        b.nk.clear()
    }
    if (0 != a.au)
        for (b = 0; b < a.pk; ) {
            c = a.Wo[b / 32];
            if (0 != c) {
                for (d = a.Wo[b / 32] = 0; 0 != c && 32 > d; d++)
                    0 != (c & 1) && (e = a.U[b + d],
                    null != e && 1 == e.$d.Hm && pg(a.G, e, e.Bb | -2162688),
                    Fg(a, b + d, !1),
                    a.au--),
                    c >>= 1;
                if (0 == a.au)
                    break
            }
            b += 32
        }
    a.doScroll();
    a.G.FH = -1;
    a.Uq++;
    if (0 == a.Uc)
        return a.sC;
    1 != a.Uc && 2 != a.Uc && a.Uc != Ed && a.Uc != pb && 100 != a.Uc && 4 != a.Uc || kd(a.G, -65539);
    return a.Uc
}
function Fe(a) {
    a.Yo = a.m.ph;
    a.Wm = 0;
    a.se = 0;
    a.Uc = 0;
    a.sC = 0;
    a.au = 0;
    var b;
    for (b = 0; b < (a.pk + 31) / 32; b++)
        a.Wo[b] = 0;
    a.lC = a.J.Ws;
    a.mC = a.J.Vs;
    a.So = -480;
    a.Uo = -300;
    a.Ro = a.ee + 480;
    a.To = a.fe + 300;
    b = a.Ma;
    a.Oq = b;
    b -= 64;
    0 > b && (b = a.So);
    a.Rq = b;
    b = a.Ra;
    a.Pq = b;
    b -= 16;
    0 > b && (b = a.Uo);
    a.Tq = b;
    b = a.Ma;
    b += a.lC + 64;
    b > a.ee && (b = a.Ro);
    a.Qq = b;
    b = a.Ra;
    b += a.mC + 16;
    b > a.fe && (b = a.To);
    a.Sq = b;
    a.kC = 0;
    a.Uq = 0;
    a.Xq = 0;
    for (b = a.kj = 0; 4 > b; b++)
        a.df[b] = 0,
        a.px[b] = 0,
        a.ox[b] = 255;
    a.Qo = 0;
    a.G.Dz = !1;
    a.G.$t = !1;
    a.vx = 0;
    a.Um = null;
    a.HH = !1;
    a.IH = null;
    a.qx = null;
    a.rx = null;
    a.oC = null;
    for (b = 0; 10 > b; b++)
        a.tx[b] = 20;
    a.Vq = 0
}
function Gg(a, b, c, d) {
    a: {
        c -= a.Ma;
        d -= a.Ra;
        var e;
        -1 == b ? (e = 0,
        b = a.J.me) : (e = b,
        b += 1);
        for (; e < b; e++) {
            var f;
            b: {
                var g, h = a.J.Lb[e], k = c, m = d, k = k + h.x, m = m + h.y;
                if (null != h.Eo)
                    for (g = 0; g < h.Eo.size(); g++)
                        if (f = h.Eo.get(g),
                        k >= f.left && m >= f.top && k < f.right && m < f.bottom)
                            break b;
                f = null
            }
            if (null != f) {
                a = f;
                break a
            }
        }
        a = null
    }
    return null != a ? a.top : 2147483647
}
function Hg(a, b) {
    a.Wo[Math.floor(b / 32)] |= 1 << (b & 31);
    a.au++
}
function Fg(a, b, c) {
    var d = a.U[b];
    if (null != d) {
        if (1 != c || 0 != d.bq) {
            var e = 0, f, g;
            if (0 != (d.Da & Ig))
                for (f = 0; f < a.Sb; f++) {
                    for (; null == a.U[e]; )
                        e++;
                    g = a.U[e];
                    e++;
                    null != g.L && g.b.pe == Jg && (g = g.L.Va,
                    g.qp == d && 1 == g.Uu && g.WH())
                }
            null != d.L && d.L.ed(c);
            null != d.za && d.za.ed(c);
            null != d.ca && d.ca.ed(c);
            null != d.b && d.b.ed(c);
            d.ed(c);
            e = d.$d;
            --e.Hm;
            0 == (d.Gj & 2147483648) ? (c = a.U[d.Gj],
            0 == (d.Od & 2147483648) ? (e = a.U[d.Od],
            null != c && (c.Od = d.Od),
            null != e && (e.Gj = d.Gj)) : null != c && (c.Od = 2147483648)) : 0 == (d.Od & 2147483648) ? (c = a.U[d.Od],
            null != c && (c.Gj = d.Gj,
            e.Fc = c.Pc)) : e.Fc = 2147483648
        }
        a.U[b] = null;
        a.Sb--
    }
}
function Kg(a, b, c, d) {
    for (var e = -1, f = -1; ; ) {
        var g = new Lg
          , h = null;
        if (-1 != b)
            var k = a.J.Af
              , h = b < k.vb.length ? k.list[k.vb[b]] : null;
        var m = Fd(a.m.ze, c)
          , k = m.Gd;
        0 == (k.zm & Mg) && (d |= 2);
        if (a.Sb >= a.pk)
            break;
        var l = null
          , t = new Ng;
        switch (m.Gh) {
        case 2:
            l = new Og;
            break;
        case 3:
            l = new Pg;
            break;
        case 4:
            l = new Qg;
            break;
        case 5:
            l = new Rg;
            break;
        case 6:
            l = new Sg;
            break;
        case 7:
            l = new Tg;
            break;
        case 8:
            break;
        case 9:
            l = new Ug;
            break;
        default:
            l = new Vg(m.Gh,a),
            null == l.ext && (l = null)
        }
        if (null == l)
            break;
        l.prototype = t;
        l.LL = h;
        if (0 > f)
            for (f = 0; f < a.pk && null != a.U[f]; f++)
                ;
        if (f >= a.pk)
            break;
        a.U[f] = l;
        a.Sb++;
        l.oL = k.Le;
        l.mb = k.bk;
        f > a.JH && a.nC++;
        l.Pc = f;
        a.Wt++;
        0 == a.Wt && (a.Wt = 1);
        l.bq = a.Wt;
        l.De = c;
        l.km = b;
        l.Bb = m.Gh;
        f = a;
        b = l;
        m = b.De;
        for (c = 0; c < f.lh && f.ta[c].bf != m; c++)
            ;
        m = f.ta[c];
        0 != (m.Fc & 2147483648) ? (m.Fc = b.Pc,
        b.Gj = c | 2147483648,
        b.Od = 2147483648) : (c = f.U[m.Fc],
        b.Gj = c.Gj,
        c.Gj = b.Pc,
        b.Od = c.Pc,
        m.Fc = b.Pc);
        b.mA = m.AB;
        b.$d = m;
        b.Uh = m.kg;
        -1 == b.km ? b.km = m.Kt : -1 == m.Kt && (m.Kt = b.km);
        m.Hm += 1;
        l.c = a;
        l.Zv = !0;
        l.ma = k;
        0 == (l.mb & Wg) && (l.mb &= ~Xg,
        0 != (l.Uh & sg) && 0 != (a.J.ud & 32) && (l.mb |= Xg),
        0 != (l.Uh & (Yg | ng)) && (l.mb |= Xg));
        b = 2147483648;
        2147483648 == b && (b = h.jw);
        g.AK = b;
        l.B = b;
        b = 2147483648;
        2147483648 == b && (b = h.kw);
        g.BK = b;
        l.A = b;
        null != h && -1 == e && (e = h.LF);
        g.sE = e;
        l.Dg = e;
        e = a.J.Lb[e];
        e.lB++;
        g.tE = e.lB;
        g.Jz = d;
        g.rE = -1;
        g.zK = h;
        l.b = null;
        0 != (l.mb & (Zg | tf | $g)) && (l.b = new ah,
        l.b.ya());
        l.L = null;
        0 != (l.mb & tf) && (l.L = new bh,
        0 == (g.Jz & 1) && l.L.ya(0, l, k, g, -1));
        l.cb = null;
        0 != (l.mb & Zg) && (l.cb = new ch,
        l.cb.ya(l));
        l.ca = null;
        0 != (l.mb & $g) && (l.ca = new dh,
        d = l.ca,
        e = g,
        d.a = l,
        d.$o = e.sE,
        d.Dx = e.tE,
        d.Ga = 0,
        d.Ga |= kg,
        0 == (d.a.Uh & Yg) && (d.Ga &= ~kg),
        0 != (d.a.$d.eH & 4) && (d.Ga |= fg),
        0 != (e.Jz & 2) ? (d.Ga |= eh,
        d.a.Bb == Hd && (d.a.Da |= jg,
        d.Ga &= ~kg)) : d.Ga |= Jb,
        d.Ne = d.a.$d.dH,
        d.ue = d.a.$d.cH,
        d.a.b.pe == fh && (d.Ga |= 2));
        l.za = null;
        0 != (l.mb & gh) && (l.za = new hh,
        l.za.ya(l, k, g));
        l.ya(k, g);
        0 != (l.mb & $g) && l.ca.qA(!0);
        1 <= a.se && l.Pk();
        break
    }
}
function Be(a) {
    var b, c, d, e, f, g;
    if (null != a.m.Wl)
        for (d = 0; d < a.ta.length; d++)
            if (c = a.ta[d],
            b = c.Fc,
            32767 != c.bf && 0 <= b && (f = Fd(a.m.ze, c.bf),
            0 != (f.rl & Gd)))
                for (g = c.Co + c.lg.toString(),
                e = 0; e < a.m.Wl.size(); e++)
                    if (f = a.m.Wl.get(e),
                    g == f.name) {
                        for (e = 0; ; ) {
                            b = a.U[b];
                            if (c.lg == Hd)
                                g = f.jd.get(e),
                                b.$q = g.text,
                                b.Gc = g.Gc,
                                b.b.la = !0,
                                b.HO = !0;
                            else if (c.lg == Id)
                                g = f.jd.get(e),
                                b.pb = g.value,
                                b.Gc = g.Gc,
                                b.Oe = g.Oe,
                                b.Cx = g.Cx,
                                b.Bx = g.Bx,
                                b.FO = !0,
                                b.b.la = !0;
                            else {
                                g = f.jd.get(e);
                                b.za.ju = g.fa;
                                Lb(b.za, g.values.length);
                                var h, k = b.za, m = g.ge.length;
                                if (m > k.og.length)
                                    for (h = k.og.length; h < m; h++)
                                        k.og[h] = "";
                                for (h = 0; h < g.values.length; h++)
                                    b.za.Hc[h] = g.values[h];
                                for (h = 0; h < g.ge.length; h++)
                                    b.za.og[h] = g.ge[h]
                            }
                            b = b.Od;
                            if (0 != (b & 2147483648))
                                break;
                            e++;
                            if (e >= f.jd.size())
                                break
                        }
                        break
                    }
}
function ih(a, b) {
    var c, d;
    for (d = 0; d < a.Vo.size() && (c = a.Vo.get(d),
    !qa(c.name, b)); d++)
        ;
    d == a.Vo.size() && (c = new lb,
    a.Vo.add(c),
    d = a.Vo.size() - 1,
    c.name = b,
    c.fa = 0);
    return d
}
function Rd(a) {
    0 != a.Xo && Xc(a.m, 1)
}
function Ee(a) {
    0 != a.Xo && Xc(a.m, -1)
}
function Sd(a, b) {
    var c, d;
    d = a.J.me;
    for (c = 0; c < d; c++) {
        var e = a.J.Lb[c];
        e.reset();
        e.Td.children.length = 0;
        b && Td(e)
    }
}
function Od(a, b) {
    if (!b)
        if (0 == (a.m.Ms & 1))
            Wd(a.m.xf);
        else {
            var c = a.m.xf, d;
            for (d = 0; d < Ze; d++)
                if (null != c.Wc[d]) {
                    var e = c.Wc[d];
                    (e.Ic || e.source) && e.cm && c.app.uk.bn(c.Wc[d].handle)
                }
        }
}
function Nd(a) {
    var b;
    for (b = 0; b < a.pk && 0 != a.Sb; b++)
        if (null != a.U[b]) {
            var c = a.U[b];
            (32 > c.Bb || 1110590791 != c.ma.Le) && Fg(a, b, !0)
        }
    for (b = 0; b < a.pk && 0 != a.Sb; b++)
        null != a.U[b] && (c = a.U[b],
        32 <= c.Bb && 1110590791 == c.ma.Le && Fg(a, b, !0))
}
function we(a, b) {
    var c, d, e, f, g;
    e = 0;
    for (g = jh(a.J.Af); null != g; e++,
    g = kh(a.J.Af))
        if (c = Fd(a.m.ze, g.Xh),
        d = c.Gd,
        c = c.Gh,
        f = 8,
        g.AA == lh) {
            c == Hd && (f |= 4);
            if (0 == (d.zm & Mg)) {
                if (c == mh)
                    continue;
                f |= 2
            }
            b && c >= nh && 0 == (d.bk & oh) || 0 == (d.bk & ph) && Kg(a, g.pm, g.Xh, f)
        }
    a.Me &= -513
}
function Bd(a) {
    var b, c, d, e, f;
    a.Me &= -17;
    d = 0;
    for (f = jh(a.J.Af); null != f; d++,
    f = kh(a.J.Af))
        if (b = Fd(a.m.ze, f.Xh),
        c = b.Gd,
        b = b.Gh,
        !(b < nh) && 0 == (c.bk & oh) && (e = 8,
        f.AA == lh)) {
            if (0 == (c.zm & Mg)) {
                if (b != Hd)
                    continue;
                e |= 2
            }
            0 == (c.bk & ph) && Kg(a, f.pm, f.Xh, e)
        }
    De(a.G, a);
    a.Yo = (new Date).getTime() - a.eF
}
function ve(a) {
    var b, c;
    a.Me |= 32;
    a.Me |= 512;
    var d = a.Wt = 0;
    a.ta = Array(a.lh);
    a.Xo = 0;
    for (b = qh(a.m.ze); null != b; b = rh(a.m.ze))
        if (c = b.Gh,
        c >= he) {
            a.ta[d] = new sh;
            var e, f = a.ta[d];
            e = b;
            f.bf = e.It;
            f.lg = e.Gh;
            var g = e.Gd;
            f.eH = g.zm;
            f.dH = e.uB;
            f.cH = e.vB;
            f.Ow = g.bk;
            f.Mg = 0;
            f.Fc = -1;
            f.kg = 65535;
            null != e.wB && (f.Co = e.wB);
            f.Eq = Array(8);
            for (e = 0; 8 > e; e++)
                f.Eq[e] = g.rB[e];
            a.ta[d].uM = d;
            a.ta[d].Kt = -1;
            if (c == Hd || c == mh)
                for (c = jh(a.J.Af); null != c; c = kh(a.J.Af))
                    if (c.Xh == a.ta[d].bf) {
                        a.ta[d].Kt = c.pm;
                        break
                    }
            d++;
            b = b.Gd;
            if (0 != (b.bk & tf) && null != b.fi)
                for (c = 0; c < b.fi.Bt; c++)
                    f = b.fi.sf[c],
                    f.jB == th && (a.Xo |= 1 << f.uq - 1)
        }
    for (d = 0; d < a.J.me; d++)
        a.J.Lb[d].lB = 1
}
function ue(a) {
    var b;
    for (b = 0; b < a.pk; b++)
        a.U[b] = null
}
function Ge(a) {
    if (0 < a.kj && null == a.m.Zi)
        a.dx && (1 == a.m.eo && (0 <= a.vx ? a.m.We[a.vx] && (a.resume(),
        a.Uc = 0,
        kd(a.G, -458755)) : a.m.eo && (a.resume(),
        a.Uc = 0,
        kd(a.G, -458755))),
        a.m.eo = !1),
        null != a.bx && a.bx.mL(),
        b = a.Uc;
    else {
        a.m.Ry |= 4;
        var b = vg(a);
        a.m.Ry &= -5;
        0 != (a.Me & 16) && (a.eF = (new Date).getTime() - a.Yo,
        Od(a, !0),
        Pd(a.G))
    }
    if (1 == b || 2 == b || b == pb) {
        a.m.oj = document.createElement("canvas");
        a.m.oj.width = a.m.bb;
        a.m.oj.height = a.m.ib;
        var c = new Nc(a.m.oj);
        a.m.frame.gw ? c.ps(0, 0, a.bb, a.ib) : c.qe(0, 0, a.bb, a.ib, a.Cj);
        c.qe(0, 0, a.m.bb, a.m.ib, a.m.Cj);
        a.m.Ig.Oc(c, 0, 0)
    }
    if (0 != b)
        switch (b) {
        case 5:
            a.pause();
            a.m.eo = !1;
            a.dx = !0;
            b = 0;
            break;
        case 101:
            if (a.J.kP)
                break;
            Wd(a.m.xf);
            Nd(a);
            Od(a, !1);
            Sd(a, !1);
            Pd(a.G);
            Rd(a);
            Qd(a);
            a.J.nm = a.J.vA = a.Oq = 0;
            a.J.om = a.J.wA = a.Pq = 0;
            Ud(a.m);
            te(a);
            ue(a);
            Sd(a, !1);
            ve(a);
            we(a, !1);
            ze(a);
            Be(a);
            Ce(a.G);
            De(a.G, a);
            Fe(a);
            Xc(a.m, 1);
            Ee(a);
            b = 0;
            a.Zq = 0;
            break;
        case 100:
        case -2:
            kd(a.G, -196611)
        }
    return a.Uc = b
}
function Qd(a) {
    a.J.NH = !1;
    a.U = null;
    a.ta = null;
    a.Wo = null;
    a.Vo = null;
    a.kh = null;
    var b;
    for (b = 0; 128 > b; b++)
        a.uf[b] = 0;
    a.ux = null
}
function te(a) {
    a.U = Array(a.J.Yj);
    a.G = a.J.Es;
    a.lh = 0;
    var b;
    for (b = qh(a.m.ze); null != b; b = rh(a.m.ze))
        b.Gh >= he && a.lh++;
    a.jC = -1 == a.J.Dw ? a.m.ph & 65535 : a.J.Dw;
    a.Wo = Array(Math.round(a.J.Yj / 32 + 1));
    a.Vo = new V;
    a.pk = a.J.Yj;
    a.rC = a.G.SG;
    a.J.nm = 0;
    a.J.om = 0;
    a.Ma = a.J.nm;
    a.Ra = a.J.om;
    a.xx = 0;
    a.yx = 0;
    a.ee = a.J.hw.right;
    -1 == a.ee && (a.ee = 2147479552);
    a.fe = a.J.hw.bottom;
    -1 == a.fe && (a.fe = 2147479552);
    a.Sb = 0;
    a.Uc = 0;
    a.sC = 0;
    a.Me &= 128;
    a.Me |= 4;
    a.Vq = 0;
    a.tx = Array(10);
    a.kh = null;
    a.Me |= 64;
    a.uf = Array(128);
    a.Wq = Array(128);
    a.ux = new kc;
    a.ux.code = 0;
    a.px = Array(4);
    a.hC = Array(4);
    a.ox = Array(4);
    a.df = Array(4);
    for (b = a.de = 0; 10 > b; b++)
        a.tx[b] = 50;
    a.dx = !1;
    a.Az = !1;
    a.J.NH = !0
}
function Lg() {
    this.zK = null;
    this.tE = this.sE = this.rE = this.BK = this.AK = this.Jz = 0
}
var tg = 128
  , Yg = 256
  , sg = 512
  , ng = 1024;
function sh() {
    this.BB = this.AB = this.Fc = this.lg = this.Jc = this.bf = 0;
    this.ej = !1;
    this.Kt = this.cH = this.dH = this.eH = this.Dq = this.kg = this.Ow = this.hh = this.Mg = this.Im = this.dk = this.Gm = this.yB = this.xB = this.Hm = 0;
    this.Co = this.Eq = null;
    this.zB = 0;
    this.Fm = null;
    this.uM = 0
}
sh.prototype = {};
function Jd() {
    this.jd = this.name = null
}
function Ld() {
    this.value = null;
    this.Bx = this.Cx = this.Oe = this.Gc = 0
}
function Kd() {
    this.text = null;
    this.Gc = 0
}
function Md() {
    this.ge = this.values = null;
    this.fa = 0
}
function uh() {
    this.LA = this.ea = 0;
    this.pc = !1;
    this.R = this.Oa = null;
    this.UL = 0;
    this.o = this.O = null;
    this.Hd = new sa;
    this.at = this.$s = 0;
    this.Zs = !1;
    this.YF = -1;
    this.OL = !1
}
uh.prototype = {
    TC: function(a, b) {
        this.$s = a;
        this.at = b;
        this.Zs = !0
    },
    RJ: function(a, b) {
        var c = this.R.qh()
          , d = this.R.K.position;
        d.x += a / 2.56;
        d.y += b / 2.56;
        this.QF.wH(this.R, d, c)
    },
    pr: function() {
        return !1
    },
    sc: function() {},
    AD: function() {},
    DD: function() {},
    bv: function() {},
    yD: function() {},
    ya: function(a) {
        this.O = a;
        this.o = this.O.c
    },
    ed: function() {},
    move: function() {
        return !1
    },
    setPosition: function() {},
    ef: function() {},
    ff: function() {},
    stop: function() {},
    zj: function() {},
    reverse: function() {},
    start: function() {},
    ti: function() {},
    tk: function() {},
    ri: function() {},
    Ix: function() {},
    Gx: function() {},
    Rz: function(a) {
        return this.O.L.Rz(this.O, a, 32)
    },
    Lr: function(a) {
        this.O.b.ih = a;
        null != this.O.cb && this.O.cb.Ug()
    },
    Tv: function(a) {
        return this.O.c.df[a]
    },
    zC: function() {}
};
function vh(a, b, c) {
    a.Oa = b;
    a.ea = c;
    a.pc = !1;
    m_currentAngle = 0
}
;var wh = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
function xh() {
    this.Hi = this.sh = this.bg = null
}
xh.prototype = {
    load: function(a) {
        var b = a.Ba, c = Array(32), d;
        for (d = 0; 32 > d; d++)
            c[d] = S(a);
        this.bg = Array(32);
        this.sh = Array(32);
        this.Hi = Array(32);
        for (d = 0; 32 > d; d++)
            this.bg[d] = null,
            this.sh[d] = 0,
            this.Hi[d] = 0,
            0 != c[d] && (this.bg[d] = new yh,
            a.seek(b + c[d]),
            this.bg[d].load(a))
    },
    Zd: function(a) {
        var b;
        for (b = 0; 32 > b; b++)
            null != this.bg[b] && this.bg[b].Zd(a)
    }
};
var zh = [3, 1, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function Ah() {
    this.Fi = 0;
    this.Xl = this.Gi = null
}
Ah.prototype = {
    load: function(a) {
        var b = a.Ba;
        T(a, 2);
        this.Fi = S(a);
        var c = Array(this.Fi), d;
        for (d = 0; d < this.Fi; d++)
            c[d] = S(a);
        this.Gi = Array(this.Fi);
        this.Xl = Array(this.Fi);
        for (d = 0; d < this.Fi; d++)
            this.Gi[d] = null,
            this.Xl[d] = 0,
            0 != c[d] && (this.Gi[d] = new xh,
            a.seek(b + c[d]),
            this.Gi[d].load(a),
            this.Xl[d] = 1);
        for (a = 0; a < this.Fi; a++)
            if (0 == this.Xl[a]) {
                b = !1;
                if (12 > a)
                    for (d = 0; 4 > d; d++)
                        if (0 != this.Xl[zh[4 * a + d]]) {
                            this.Gi[a] = this.Gi[zh[4 * a + d]];
                            b = !0;
                            break
                        }
                if (0 == b)
                    for (d = 0; d < this.Fi; d++)
                        if (0 != this.Xl[d]) {
                            this.Gi[a] = this.Gi[d];
                            break
                        }
            } else {
                var e, f, g = this.Gi[a], h = a;
                for (f = 0; 32 > f; f++)
                    if (null == g.bg[f]) {
                        e = 0;
                        for (b = f + 1; 32 > e; e++,
                        b++)
                            if (b &= 31,
                            null != g.bg[b]) {
                                g.sh[f] = b;
                                break
                            }
                        c = 0;
                        for (d = f - 1; 32 > c; c++,
                        d--)
                            if (d &= 31,
                            null != g.bg[d]) {
                                g.Hi[f] = d;
                                break
                            }
                        b == d || e < c ? g.sh[f] |= 64 : c < e && (g.Hi[f] |= 64)
                    } else
                        16 > h && 0 == wh[h] && (g.bg[f].Py = g.bg[f].Oy)
            }
    },
    Zd: function(a) {
        var b;
        for (b = 0; b < this.Fi; b++)
            0 != this.Xl[b] && this.Gi[b].Zd(a)
    }
};
function yh() {
    this.xp = this.JD = this.ID = this.Oy = this.Py = 0;
    this.sn = null
}
yh.prototype = {
    load: function(a) {
        this.Py = a.na();
        this.Oy = a.na();
        this.ID = S(a);
        this.JD = S(a);
        this.xp = S(a);
        this.sn = Array(this.xp);
        var b;
        for (b = 0; b < this.xp; b++)
            this.sn[b] = S(a)
    },
    Zd: function(a) {
        var b;
        for (b = 0; b < this.xp; b++)
            if (null != a) {
                var c = a.Vk(this.sn[b]);
                -1 != c && (this.sn[b] = c)
            }
    }
};
var Bh = [0, 1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, -1];
function ch() {
    this.a = null;
    this.Lo = this.gx = this.ki = 0;
    this.XB = !1;
    this.Lq = 0;
    this.Ud = null;
    this.Jo = this.fx = 0;
    this.Iq = null;
    this.Mq = this.Jq = this.jk = this.jj = this.zH = this.Ko = this.Hq = this.Gq = this.yH = this.Kq = this.Nm = this.WB = 0;
    this.AH = -1
}
ch.prototype = {
    ya: function(a) {
        this.a = a;
        this.Mq = 0;
        Ch(this);
        if (Dh(this, 3))
            this.Mq = 1,
            this.ki = 4,
            Fb(this, 0),
            Eh(this),
            this.Lr();
        else {
            for (a = 0; 0 <= Bh[a] && !Dh(this, Bh[a]); a++)
                ;
            0 > Bh[a] && Dh(this, 4) && (this.Mq = 2,
            this.ki = 5,
            Fb(this, 0),
            Eh(this),
            this.jj = this.Gq = 0,
            this.Iq = this.Ud = null,
            this.Jo = this.Lq = -1,
            this.Lr())
        }
    },
    Ug: function() {
        switch (this.Mq) {
        case 0:
            return this.Lr();
        case 1:
            Fb(this, 1);
            if (4 != this.ki)
                if (Dh(this, 0) || Dh(this, 1) || Dh(this, 2))
                    this.ki = this.Mq = 0,
                    Fb(this, 0);
                else {
                    this.Mq = 2;
                    a: {
                        var a = this.a.c
                          , b = this.a
                          , c = !1
                          , d = 0;
                        if (0 != (b.mb & Zg)) {
                            var e;
                            if (e = null != b.ca)
                                e = b.ca,
                                e.Qp(!0) ? (e.a.Da |= jg,
                                e = !0) : e = !1;
                            if (e)
                                break a;
                            null != b.cb && Dh(b.cb, 4) && (d = 1)
                        }
                        0 == d && (c = !0);
                        c ? (b.Zv = !1,
                        Hg(a, b.Pc)) : (null != b.ca && (Fh(b.ca, !1),
                        b.Da |= jg),
                        null != b.L && (b.L.ed(!1),
                        a = b.L,
                        null != a.Va && a.Va.ed(),
                        b.b.pe = 11,
                        a.Va = new Gh,
                        a.Va.a = b,
                        a.Va.ya(b, null),
                        b.b.Ca = 0),
                        0 != (d & 1) && (d = b.cb,
                        d.ki = 5,
                        Fb(d, 0),
                        Eh(b.cb)))
                    }
                }
            break;
        case 2:
            0 == (this.a.Da & Hh) && (Fb(this, 1),
            5 != this.ki && Hg(this.a.c, this.a.Pc))
        }
        return !1
    },
    Lr: function() {
        var a = this.a.B;
        this.a.b.Om = a;
        a -= this.a.Ya;
        this.a.b.$B = a;
        a += this.a.aa;
        this.a.b.aC = a;
        a = this.a.A;
        this.a.b.Pm = a;
        a -= this.a.Za;
        this.a.b.bC = a;
        a += this.a.$;
        this.a.b.cC = a;
        this.a.b.ix = this.a.b.qc;
        this.a.b.hx = this.a.b.xc;
        return Fb(this, 1)
    }
};
function Eh(a) {
    0 == a.Ko && (a.Ko = 1)
}
function Dh(a, b) {
    return 0 == a.a.ma.xm.Xl[b] ? !1 : !0
}
function Fb(a, b) {
    var c = a.a.ma
      , d = a.a.b.Ca
      , e = a.a.b.ih;
    0 != a.Lo && (d = a.Lo - 1);
    1 == e && (0 == d && (e = 0),
    75 <= d && (e = 2));
    0 != a.ki && (e = a.ki - 1);
    e != a.Lq && (a.Lq = e,
    e >= c.xm.Fi && (e = c.xm.Fi - 1),
    c = c.xm.Gi[e],
    c != a.Ud && (a.Ud = c,
    a.fx = -1,
    a.jj = 0,
    0 == (a.a.mb & Ih) && (a.Gq = 0)));
    var f;
    f = a.a.b.Fb % 32;
    c = !1;
    0 != a.gx && (f = a.gx - 1);
    if (a.fx != f && (a.fx = f,
    e = a.Ud.bg[f],
    null == e ? 0 != (a.Ud.Hi[f] & 64) ? f = a.Ud.Hi[f] & 63 : 0 != (a.Ud.sh[f] & 64) ? f = a.Ud.sh[f] & 63 : (e = f,
    0 > a.Jo ? f = a.Ud.sh[f] & 63 : (f -= a.Jo,
    f = 15 < (f & 31) ? a.Ud.sh[e] & 63 : a.Ud.Hi[e] & 63)) : a.Jo = f,
    e = a.Ud.bg[f],
    null != a.Ud.bg[0] && 0 != (a.a.ma.zm & Jh) && (a.a.b.xc = 360 * a.fx / 32,
    e = a.Ud.bg[0],
    a.Iq = null,
    c = !0),
    a.Iq != e)) {
        a.Iq = e;
        a.Ko = e.ID;
        a.zH = e.JD;
        f = e.Py;
        var g = e.Oy;
        if (f != a.Nm || g != a.Kq)
            a.Nm = f,
            a.Kq = g,
            a.yH = g - f,
            a.Hq = f,
            a.WB = -1;
        a.jk = e.xp;
        0 != a.Jq && a.Jq - 1 >= a.jk && (a.Jq = 0);
        a.jj >= a.jk && (a.jj = 0);
        e = e.sn[a.jj];
        0 == a.XB && (a.a.b.qc = e,
        e = Kh(a.a.c.m.xa, e, a.a.b.xc, a.a.b.Kc, a.a.b.Lc),
        null != e && (a.a.aa = e.width,
        a.a.$ = e.height,
        a.a.Ya = e.Hb,
        a.a.Za = e.Eb,
        a.a.nA = e.Gl,
        a.a.oA = e.Il),
        a.a.b.la = !0,
        a.a.b.Rb = !0);
        if (1 == a.jk) {
            0 == a.Nm && (a.jk = 0);
            e = a.a.b.qc;
            if (0 == e)
                return !1;
            e = Kh(a.a.c.m.xa, e, a.a.b.xc, a.a.b.Kc, a.a.b.Lc);
            null != e && (a.a.aa = e.width,
            a.a.$ = e.height,
            a.a.Ya = e.Hb,
            a.a.Za = e.Eb,
            a.a.nA = e.Gl,
            a.a.oA = e.Il);
            return !1
        }
    }
    if (0 == b && 0 == a.Jq || 0 == c && 0 == a.jk)
        return !1;
    e = a.yH;
    d != a.WB && (a.WB = d,
    0 == e ? (a.Hq = a.Nm,
    0 != a.Lo && (a.Hq = a.Lo - 1)) : (f = a.a.b.rc - a.a.b.yl,
    0 == f ? 0 != a.Lo ? (e = e * d / 100 + a.Nm,
    e > a.Kq && (e = a.Kq)) : (e /= 2,
    e += a.Nm) : (e = e * d / f + a.Nm,
    e > a.Kq && (e = a.Kq)),
    a.Hq = e));
    e = a.Iq;
    f = a.Jq;
    if (0 == f) {
        if (0 == a.Hq || a.XB)
            return !1;
        d = a.Gq;
        f = a.jj;
        g = a.Hq;
        0 != (a.a.c.J.ud & 32768) && (g = Math.round(g * a.a.c.de));
        for (d += g; 100 < d; )
            if (d -= 100,
            f++,
            f >= a.jk && (f = a.zH,
            0 != a.Ko && (a.Ko--,
            0 == a.Ko))) {
                a.jj = a.jk - 1;
                a.jk = 0;
                0 != a.ki && (a.ki = 0,
                a.gx = 0,
                a.Lo = 0);
                a.jj < e.xp && (e = e.sn[a.jj],
                e != a.a.b.qc && (a.a.b.qc = e,
                a.a.b.la = !0,
                a.a.b.Rb = !0));
                a.Gq = d;
                if (0 != (a.a.c.Me & 512))
                    return !1;
                c && (a.a.b.la = !0,
                a.a.b.Rb = !0,
                e = Kh(a.a.c.m.xa, a.a.b.qc, a.a.b.xc, a.a.b.Kc, a.a.b.Lc),
                null != e && (a.a.aa = e.width,
                a.a.$ = e.height,
                a.a.Ya = e.Hb,
                a.a.Za = e.Eb,
                a.a.nA = e.Gl,
                a.a.oA = e.Il));
                d = -131072;
                d |= a.a.Bb & 65535;
                a.a.c.G.Id = a.a.cb.Lq;
                return pg(a.a.c.G, a.a, d)
            }
        a.Gq = d
    } else
        f--;
    a.jj = f;
    a.a.b.la = !0;
    a.a.b.Rb = !0;
    e = e.sn[f];
    if (a.a.b.qc != e || a.AH != a.a.b.xc)
        a.a.b.qc = e,
        a.AH = a.a.b.xc,
        0 <= e && (e = Kh(a.a.c.m.xa, e, a.a.b.xc, a.a.b.Kc, a.a.b.Lc),
        null != e && (a.a.aa = e.width,
        a.a.$ = e.height,
        a.a.Ya = e.Hb,
        a.a.Za = e.Eb,
        a.a.nA = e.Gl,
        a.a.oA = e.Il));
    return !1
}
function Ch(a) {
    a.a.b.ih = 1;
    a.XB = !1;
    a.ki = 0;
    a.gx = 0;
    a.Lo = 0;
    a.Jq = 0;
    a.Gq = 0;
    a.jj = 0;
    a.Lq = -1;
    a.Nm = -1;
    a.Jo = -1;
    a.Ud = null;
    a.Iq = null;
    a.Lr()
}
;function Lh(a, b) {
    this.xa = a;
    this.app = a.app;
    this.handle = b
}
Lh.prototype = {
    Sz: function() {
        var a = this.app.Sm + "M" + pa(this.handle, "png")
          , b = new Image;
        this.xa.Ke[this.handle] = b;
        var c = this;
        b.onload = function() {
            Te(c.app, c)
        }
        ;
        b.onerror = function() {
            Te(c.app, c)
        }
        ;
        b.src = a
    }
};
function Fc(a) {
    this.app = a;
    this.images = this.file = null;
    this.$e = this.wm = this.Zc = 0;
    this.tl = this.Ke = this.ul = this.vn = this.Zn = this.xl = this.Tb = this.vb = this.Bo = null
}
Fc.prototype = {
    wl: function(a) {
        this.file = a;
        this.Zc = S(this.file);
        this.Bo = Array(this.Zc);
        a = S(this.file);
        var b, c, d = new Mh;
        for (b = 0; b < a; b++)
            c = this.file.Ba,
            d.hq(this.file),
            this.Bo[d.handle] = c;
        this.Tb = Array(this.Zc);
        for (b = 0; b < this.Zc; b++)
            this.Tb[b] = 0;
        this.vb = null;
        this.wm = this.Zc;
        this.$e = 0;
        this.images = null
    },
    nu: function() {
        var a;
        for (a = 0; a < this.Zc; a++)
            this.Bo[a] && (this.Tb[a] = 1)
    },
    mi: function() {
        if (0 == (this.app.sb & 16777216) && 0 == (this.app.sb & 32768)) {
            var a;
            for (a = 0; a < this.Zc; a++)
                this.Tb[a] = 0
        }
        this.tl = null
    },
    bn: function(a) {
        this.Tb[a]++
    },
    Vk: function(a) {
        this.bn(a);
        return -1
    },
    load: function(a) {
        var b;
        if (0 < this.app.Kg)
            if (null == this.Ke) {
                if (this.Ke = Array(this.app.Kg),
                this.app.sb & 16777216)
                    for (b = 0; b < this.app.Kg; b++)
                        this.app.Ke[b] && Nh(this, b)
            } else if (0 == (this.app.sb & 16777216)) {
                this.tl = Array(this.app.Kg);
                for (b = 0; b < this.app.Kg; b++)
                    this.tl[b] = this.Ke[b];
                this.Ke = Array(this.app.Kg);
                for (b = 0; b < this.app.Kg; b++)
                    this.Ke[b] = null
            }
        for (b = this.$e = 0; b < this.Zc; b++)
            0 != this.Tb[b] && this.$e++;
        b = Array(this.$e);
        var c = 0, d;
        for (d = 0; d < this.Zc; d++)
            if (0 != this.Tb[d]) {
                if (null != this.images && -1 != this.vb[d] && null != this.images[this.vb[d]]) {
                    if (b[c] = this.images[this.vb[d]],
                    b[c].Tb = this.Tb[d],
                    null != this.Ke && null != this.tl) {
                        var e = b[c].rf;
                        0 < e && (this.Ke[e] = this.tl[e])
                    }
                } else
                    0 != this.Bo[d] && (b[c] = new Mh,
                    a.seek(this.Bo[d]),
                    b[c].load(this.app),
                    b[c].Tb = this.Tb[d]);
                c++
            }
        this.images = b;
        this.vb = Array(this.Zc);
        for (b = 0; b < this.Zc; b++)
            this.vb[b] = -1;
        for (b = 0; b < this.$e; b++)
            this.images[b] && (this.vb[this.images[b].handle] = b);
        this.wm = this.Zc
    },
    lw: function(a) {
        var b;
        for (b = 0; b < a.length; b++)
            if (0 <= a[b] && a[b] < this.wm && 0 != this.Bo[a[b]] && null == X(this, a[b])) {
                var c, d = -1;
                for (c = 0; c < this.$e; c++)
                    if (null == this.images[c]) {
                        d = c;
                        break
                    }
                if (-1 == d) {
                    var e = Array(this.$e + 10);
                    for (c = 0; c < this.$e; c++)
                        e[c] = this.images[c];
                    for (; c < this.$e + 10; c++)
                        e[c] = null;
                    d = this.$e;
                    this.$e += 10;
                    this.images = e
                }
                this.vb[a[b]] = d;
                this.images[d] = new Mh;
                this.images[d].Tb = 1;
                this.file.seek(this.Bo[a[b]]);
                this.images[d].load(this.app)
            }
    }
};
function Kh(a, b, c, d, e) {
    var f;
    null == a.ul && (a.ul = new Mh);
    f = X(a, b);
    if (null != f) {
        b = f.width;
        var g = f.height
          , h = f.Hb
          , k = f.Eb
          , m = f.Gl;
        f = f.Il;
        if (0 == c)
            1 != d && (h *= d,
            m *= d,
            b *= d),
            1 != e && (k *= e,
            f *= e,
            g *= e);
        else {
            1 != d && (h *= d,
            m *= d,
            b *= d);
            1 != e && (k *= e,
            f *= e,
            g *= e);
            null == a.xl && (a.xl = new sa);
            null == a.Zn && (a.Zn = new $a);
            null == a.vn && (a.vn = new $a);
            a.Zn.x = h;
            a.Zn.y = k;
            a.vn.x = m;
            a.vn.y = f;
            a.xl.left = a.xl.top = 0;
            a.xl.right = b;
            a.xl.bottom = g;
            d = a.xl;
            e = a.Zn;
            b = a.vn;
            var l;
            90 == c ? (c = 0,
            g = 1) : 180 == c ? (c = -1,
            g = 0) : 270 == c ? (c = 0,
            g = -1) : (g = c * Math.PI / 180,
            c = Math.cos(g),
            g = Math.sin(g));
            var t, w;
            null == e ? k = h = f = l = 0 : (t = -e.x * c,
            w = -e.x * g,
            f = -e.y * c,
            l = -e.y * g,
            k = t + l,
            h = f - w);
            m = null == e ? d.right : d.right - e.x;
            t = m * c;
            w = m * g;
            m = t + l;
            f -= w;
            var r;
            l = null == e ? d.bottom : d.bottom - e.y;
            r = t + l * g;
            l = l * c - w;
            var u, n;
            u = k + r - m;
            n = h + l - f;
            t = Math.min(k, Math.min(m, Math.min(r, u)));
            w = Math.min(h, Math.min(f, Math.min(l, n)));
            k = Math.max(k, Math.max(m, Math.max(r, u)));
            h = Math.max(h, Math.max(f, Math.max(l, n)));
            null != b && (null == e ? (m = b.x,
            l = b.y) : (m = b.x - e.x,
            l = b.y - e.y),
            b.x = m * c + l * g - t,
            b.y = l * c - m * g - w);
            null != e && (e.x = -t,
            e.y = -w);
            d.right = k - t;
            d.bottom = h - w;
            b = a.xl.right;
            g = a.xl.bottom;
            h = a.Zn.x;
            k = a.Zn.y;
            m = a.vn.x;
            f = a.vn.y
        }
        a.ul.width = b;
        a.ul.height = g;
        a.ul.Hb = h;
        a.ul.Eb = k;
        a.ul.Gl = m;
        a.ul.Il = f;
        return a.ul
    }
    return f
}
function Nh(a, b) {
    null == a.Ke[b] && (null != a.tl && b < a.tl.length && null != a.tl[b] ? a.Ke[b] = a.tl[b] : (a.Ke[b] = new Lh(a,b),
    Se(a.app, a.Ke[b])))
}
function X(a, b) {
    return 0 <= b && b < a.wm && -1 != a.vb[b] ? a.images[a.vb[b]] : null
}
function Mh() {
    this.app = null;
    this.Tb = this.Il = this.Gl = this.Eb = this.Hb = this.height = this.width = this.handle = 0;
    this.yo = this.Fw = this.vm = this.Jf = null;
    this.aj = this.$i = this.rf = 0
}
function bf(a, b) {
    var c = new Mh;
    c.app = a;
    c.Jf = new Image;
    c.Jf.onload = function() {
        c.app.Xk++;
        c.width = c.Jf.width;
        c.height = c.Jf.height
    }
    ;
    a.Yk++;
    a.Ij = !0;
    c.Jf.src = a.Sm + b;
    return c
}
Mh.prototype = {
    hq: function(a) {
        this.handle = S(a);
        T(a, 12)
    },
    Sz: function() {
        this.Jf = new Image;
        var a = this;
        this.Jf.onload = function() {
            Te(a.app, a)
        }
        ;
        this.Jf.onerror = function() {
            Te(a.app, a)
        }
        ;
        this.Jf.src = this.app.Sm + pa(this.handle, "png")
    },
    load: function(a) {
        this.app = a;
        this.handle = S(a.file);
        this.width = S(a.file);
        this.height = S(a.file);
        this.Hb = F(a.file);
        this.Eb = F(a.file);
        this.Gl = F(a.file);
        this.Il = F(a.file);
        this.rf = 0;
        this.Jf = null;
        null != this.app.frame.tt ? (this.rf = this.app.frame.tt[this.handle],
        0 != this.rf ? (Nh(this.app.xa, this.rf),
        this.$i = this.app.frame.$i[this.handle],
        this.aj = this.app.frame.aj[this.handle]) : Se(this.app, this)) : Se(this.app, this)
    },
    createElement: function() {
        var a = document.createElement("div");
        a.style.width = this.width + "px";
        a.style.height = this.height + "px";
        a.style.backgroundRepeat = "no-repeat";
        0 == this.rf ? a.style.backgroundImage = "url('" + this.Jf.src + "')" : (a.style.backgroundPosition = "-" + this.$i + "px -" + this.aj + "px",
        a.style.backgroundImage = "url('" + this.app.Sm + "M" + pa(this.rf, "png") + "')");
        return a
    }
};
function gg(a, b, c, d, e) {
    if (0 == (b & Oh)) {
        null == a.vm && (a.vm = new Ph,
        Qh(a.vm, a.app, a, b));
        if (0 == c && 1 == d && 1 == e)
            return a.vm;
        null == a.yo && (a.yo = new V);
        var f, g = 2147483647, h = -1;
        for (f = 0; f < a.yo.size(); f++) {
            b = a.yo.get(f);
            if (c == b.angle && d == b.Vd && e == b.Wd)
                return b.ra;
            b.HC < g && (g = b.HC,
            h = f)
        }
        a.yo.size() < a.HP && (h = -1);
        b = new Rh;
        b.ra = new Ph;
        f = b.ra;
        var g = a.vm, k, m, l = g.width;
        k = g.height;
        var t = new sa;
        t.right = Math.floor(g.width * d);
        t.bottom = Math.floor(g.height * e);
        var w = new $a;
        w.x = Math.floor(g.Hb * d);
        w.y = Math.floor(g.Eb * e);
        var r, u, n, z;
        90 == c ? (n = 0,
        z = 1) : 180 == c ? (n = -1,
        z = 0) : 270 == c ? (n = 0,
        z = -1) : (z = c * Math.PI / 180,
        n = Math.cos(z),
        z = Math.sin(z));
        var E, A;
        null == w ? (u = A = 0,
        Sh.x = Sh.y = 0) : (E = -w.x * n,
        r = -w.x * z,
        u = -w.y * n,
        A = -w.y * z,
        Sh.x = Math.floor(E + A),
        Sh.y = Math.floor(u - r));
        r = null == w ? t.right : t.right - w.x;
        E = r * n;
        r *= z;
        Th.x = Math.floor(E + A);
        Th.y = Math.floor(u - r);
        u = null == w ? t.bottom : t.bottom - w.y;
        Uh.x = Math.floor(E + u * z);
        Uh.y = Math.floor(u * n - r);
        Vh.x = Sh.x + Uh.x - Th.x;
        Vh.y = Sh.y + Uh.y - Th.y;
        n = Math.min(Sh.x, Math.min(Th.x, Math.min(Uh.x, Vh.x)));
        z = Math.min(Sh.y, Math.min(Th.y, Math.min(Uh.y, Vh.y)));
        E = Math.max(Sh.x, Math.max(Th.x, Math.max(Uh.x, Vh.x)));
        r = Math.max(Sh.y, Math.max(Th.y, Math.max(Uh.y, Vh.y)));
        null != w && (w.x = -n,
        w.y = -z);
        t.right = E - n;
        t.bottom = r - z;
        var v = t.right
          , t = t.bottom;
        if (!(0 >= v || 0 >= t)) {
            n = g.lineWidth;
            z = (v + 15 & 2147483632) / 16;
            f.ra = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (z * t + 1))) : Array(z * t + 1);
            for (E = z * t; 0 <= E; E--)
                f.ra[E] = 0;
            f.lineWidth = z;
            f.width = v;
            f.height = t;
            f.Hb = w.x;
            f.Eb = w.y;
            var w = .017453292 * c
              , H = Math.cos(w)
              , G = Math.sin(w)
              , w = 0;
            E = Math.floor(65536 * (l / 2 - (v / 2 * H - t / 2 * G) / d));
            r = Math.floor(65536 * (k / 2 - (v / 2 * G + t / 2 * H) / e));
            u = Math.floor(65536 * H / d);
            A = Math.floor(65536 * G / e);
            var O = v / 16, v = v % 16, H = Math.floor(65536 * H / e), G = Math.floor(65536 * G / d), l = 65536 * l, N = 65536 * k, J, K;
            for (m = 0; m < t; m++) {
                var L = E, M = r, q = w, C;
                for (k = 0; k < O; k++) {
                    var B = 0;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 32768));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 16384));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 8192));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 4096));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 2048));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 1024));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 512));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 256));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 128));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 64));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 32));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 16));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 8));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 4));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 2));
                    L += u;
                    M += A;
                    0 <= L && L < l && 0 <= M && M < N && (C = Math.floor(L / 65536),
                    K = Math.floor(M / 65536),
                    J = 32768 >>> C % 16,
                    K = g.ra[Math.floor(K * n + C / 16)],
                    0 != (K & J) && (B |= 1));
                    L += u;
                    M += A;
                    f.ra[q++] = B
                }
                if (0 != v) {
                    B = 32768;
                    for (k = C = 0; k < v; k++,
                    B = B >> 1 & 32767) {
                        if (0 <= L && L < l && 0 <= M && M < N) {
                            K = Math.floor(L / 65536);
                            var I = Math.floor(M / 65536);
                            J = 32768 >>> K % 16;
                            K = g.ra[Math.floor(I * n + K / 16)];
                            0 != (K & J) && (C |= B)
                        }
                        L += u;
                        M += A
                    }
                    f.ra[q] = C
                }
                w += z;
                E -= G;
                r += H
            }
        }
        b.angle = c;
        b.Vd = d;
        b.Wd = e;
        b.HC = a.app.ph;
        0 > h ? a.yo.add(b) : a.yo.set(h, b);
        return b.ra
    }
    null == a.Fw && (null == a.vm && (a.vm = new Ph,
    Qh(a.vm, a.app, a, 0)),
    a.Fw = new Ph,
    Qh(a.Fw, a.app, a, b));
    return a.Fw
}
function Gc(a) {
    this.app = a;
    this.Mw = this.fonts = this.file = null;
    this.il = 0;
    this.vb = null;
    this.Xj = this.Jg = 0;
    this.Tb = null;
    this.Dt = new Rc;
    Sc(this.Dt)
}
Gc.prototype = {
    wl: function(a) {
        var b = D(a), c;
        this.Jg = 0;
        var d = a.Ba
          , e = new Rc;
        for (c = 0; c < b; c++)
            e.hq(a),
            this.Jg = Math.max(this.Jg, e.handle + 1);
        a.seek(d);
        this.Mw = Array(this.Jg);
        for (c = 0; c < b; c++)
            d = a.Ba,
            e.hq(a),
            this.Mw[e.handle] = d;
        this.Tb = Array(this.Jg);
        for (c = 0; c < this.Jg; c++)
            this.Tb[c] = 0;
        this.vb = null;
        this.Xj = this.Jg;
        this.il = 0;
        this.fonts = null
    },
    load: function(a) {
        var b;
        for (b = this.il = 0; b < this.Jg; b++)
            0 != this.Tb[b] && this.il++;
        b = Array(this.il);
        var c = 0, d;
        for (d = 0; d < this.Jg; d++)
            0 != this.Tb[d] && (null != this.fonts && -1 != this.vb[d] && null != this.fonts[this.vb[d]] ? b[c] = this.fonts[this.vb[d]] : (b[c] = new Rc,
            a.seek(this.Mw[d]),
            b[c].load(a)),
            b[c].Tb = this.Tb[d],
            c++);
        this.fonts = b;
        this.vb = Array(this.Jg);
        for (b = 0; b < this.Jg; b++)
            this.vb[b] = -1;
        for (b = 0; b < this.il; b++)
            this.vb[this.fonts[b].handle] = b;
        this.Xj = this.Jg
    },
    mi: function() {
        if (0 == (this.app.$O & 16777216) && 0 == (this.app.sb & 32768)) {
            var a;
            for (a = 0; a < this.Jg; a++)
                this.Tb[a] = 0
        }
    },
    nu: function() {
        var a;
        for (a = 0; a < this.Jg; a++)
            this.Mw[a] && (this.Tb[a] = 1)
    },
    bn: function(a) {
        -1 == a ? null == this.Dt && (this.Dt = new Rc,
        Sc(this.Dt)) : this.Tb[a]++
    },
    Vk: function(a) {
        this.bn(a);
        return -1
    }
};
function Wh(a, b) {
    var c, d;
    for (d = 0; d < a.il && (null == a.fonts[d] || a.fonts[d].fd != b.fd || a.fonts[d].Ah != b.Ah || a.fonts[d].zh != b.zh || a.fonts[d].yh != b.yh); d++)
        ;
    if (d < a.il)
        return a.fonts[d].handle;
    d = -1;
    for (c = a.Jg; c < a.Xj && -1 != a.vb[c]; c++)
        ;
    if (-1 == d) {
        var e = Array(a.Xj + 10);
        for (c = 0; c < a.Xj; c++)
            e[c] = a.vb[c];
        for (; c < a.Xj + 10; c++)
            e[c] = -1;
        d = a.Xj;
        a.Xj += 10;
        a.vb = e
    }
    e = -1;
    for (c = 0; c < a.il; c++)
        if (null == a.fonts[c]) {
            e = c;
            break
        }
    -1 == e && (e = a.il,
    a.fonts.push(null));
    a.vb[d] = e;
    a.fonts[e] = new Rc;
    a.fonts[e].handle = d;
    a.fonts[e].fd = b.fd;
    a.fonts[e].Ah = b.Ah;
    a.fonts[e].zh = b.zh;
    a.fonts[e].yh = b.yh;
    return d
}
function Xh(a, b) {
    return -1 == b ? a.Dt : 0 <= b && b < a.Xj && -1 != a.vb[b] ? a.fonts[a.vb[b]] : null
}
function Rc() {
    this.zh = this.Ah = this.fd = this.handle = this.Tb = 0;
    this.font = this.yh = null;
    this.$n = !1
}
Rc.prototype = {
    hq: function(a) {
        this.handle = D(a);
        0 == a.Oh ? T(a, 72) : T(a, 104)
    },
    load: function(a) {
        this.handle = D(a);
        var b = a.Ba;
        T(a, 12);
        this.fd = D(a);
        0 > this.fd && (this.fd = -this.fd);
        D(a);
        D(a);
        D(a);
        this.Ah = D(a);
        this.zh = a.na();
        a.na();
        a.na();
        a.na();
        a.na();
        a.na();
        a.na();
        a.na();
        this.yh = a.bd();
        0 == a.Oh ? a.seek(b + 72) : a.seek(b + 104)
    },
    Pi: function() {
        return this.fd + Math.ceil(this.fd / 8)
    },
    Wk: function() {
        if (null == this.font) {
            this.font = this.zh ? "italic " : "normal ";
            var a = 100 * Math.floor(this.Ah / 100)
              , a = Math.max(a, 100)
              , a = Math.min(a, 900);
            this.font += a + " ";
            this.font += this.fd + "px ";
            this.font += this.yh
        }
        return this.font
    }
};
function Sc(a) {
    a.yh = "Arial";
    a.fd = 13;
    a.Ah = 400;
    a.zh = 0
}
function Yh(a) {
    var b = new Ra;
    b.fd = a.fd;
    b.Ah = a.Ah;
    b.zh = a.zh;
    b.yh = a.yh;
    return b
}
function Hc(a) {
    this.app = a;
    this.cp = null;
    this.Ct = this.wm = this.Zc = 0;
    this.file = this.Tb = this.vb = this.Nw = null
}
Hc.prototype = {
    wl: function(a) {
        this.file = a;
        this.Zc = S(this.file);
        this.Nw = Array(this.Zc);
        this.Tb = Array(this.Zc);
        this.vb = Array(this.Zc);
        for (a = 0; a < this.Zc; a++)
            this.Tb[a] = 0,
            this.vb[a] = -1;
        var b = S(this.file), c = new We(this.app), d;
        for (a = 0; a < b; a++)
            d = this.file.Ba,
            c.hq(),
            this.Nw[c.handle] = d;
        this.wm = this.Zc;
        this.Ct = 0;
        this.cp = null
    },
    mi: function() {
        if (0 == (this.app.sb & 16777216) && 0 == (this.app.sb & 32768)) {
            var a;
            for (a = 0; a < this.Zc; a++)
                this.Tb[a] = 0
        }
    },
    nu: function() {
        var a;
        for (a = 0; a < this.Zc; a++)
            this.Nw[a] && (this.Tb[a] = 1)
    },
    bn: function(a) {
        this.Tb[a]++
    },
    Vk: function(a) {
        this.bn(a);
        return -1
    },
    load: function() {
        var a;
        for (a = this.Ct = 0; a < this.Zc; a++)
            0 != this.Tb[a] && this.Ct++;
        a = Array(this.Ct);
        var b = 0, c;
        for (c = 0; c < this.Zc; c++)
            0 != this.Tb[c] && (null != this.cp && -1 != this.vb[c] && null != this.cp[this.vb[c]] ? a[b] = this.cp[this.vb[c]] : (a[b] = new We(this.app),
            this.file.seek(this.Nw[c]),
            a[b].load()),
            a[b].Tb = this.Tb[c],
            b++);
        this.cp = a;
        this.vb = Array(this.Zc);
        for (a = 0; a < this.Zc; a++)
            this.vb[a] = -1;
        for (a = 0; a < this.Ct; a++)
            this.vb[this.cp[a].handle] = a;
        this.wm = this.Zc;
        this.mi()
    }
};
function We(a) {
    this.Re = a;
    this.context = a.xf.context;
    this.Pp = a.xf.Pp;
    this.fL = a.xf.fL;
    this.type = 0;
    this.file = a.file;
    this.handle = -1;
    this.Ic = this.source = null;
    this.Tb = 0;
    this.ls = !1;
    this.kl = 0;
    this.name = null;
    this.cm = this.Av = this.Yg = !1;
    this.frequency = 0;
    this.gain = this.response = null;
    this.volume = 100
}
We.prototype = {
    hq: function() {
        this.handle = S(this.file);
        T(this.file, 5);
        var a = S(this.file);
        0 == this.file.Oh ? T(this.file, a) : T(this.file, 2 * a)
    },
    Sz: function() {
        var a, b = this.Re.xf.PB & this.type;
        0 == b && (b = this.Re.xf.YA & this.type);
        for (a = 0; 4 > a && !(b & 1 << a); a++)
            ;
        if (4 > a) {
            b = "";
            switch (a) {
            case 0:
                b = "ogg";
                break;
            case 1:
                b = "m4a";
                break;
            case 2:
                b = "mp3";
                break;
            case 3:
                b = "wav"
            }
            if (this.context) {
                var c = this
                  , d = new XMLHttpRequest;
                d.open("GET", this.Re.Sm + pa(this.handle, b), !0);
                d.responseType = "arraybuffer";
                d.addEventListener("load", function() {
                    c.response = d.response;
                    var a = c.Re.xf
                      , b = c;
                    null == a.Kn && (a.Kn = new V);
                    a.Kn.add(b)
                });
                d.send()
            } else
                this.Ic = new Audio,
                this.Ic.MP = "auto",
                c = this,
                this.Ic.addEventListener("loadeddata", function(a) {
                    Te(c.Re, c);
                    c.Ic.removeEventListener("loadeddata", arguments.callee, !1)
                }, !1),
                this.Ic.addEventListener("error", function() {
                    Te(c.Re, c);
                    c.Ic = null
                }, !1),
                this.Ic.src = this.Re.Sm + pa(this.handle, b),
                this.Ic.load(),
                this.Ic.autoplay = !1
        } else
            Te(this.Re, this)
    },
    load: function() {
        this.handle = S(this.file);
        this.type = this.file.na();
        this.Rp = this.frequency = D(this.file);
        var a = S(this.file);
        this.name = this.file.bd(a);
        this.Ic = null;
        Se(this.Re, this)
    },
    play: function(a, b, c) {
        this.kl = a;
        0 == this.kl && (this.kl = 1E7);
        this.volume = c;
        ad(this)
    },
    stop: function() {
        this.Ic ? this.Ic.pause() : this.source && this.cm && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0),
        this.source.onended = null);
        this.cm = this.ls = !1
    },
    pause: function() {
        this.Yg || (this.Ic ? this.Ic.pause() : this.source && (this.source.onended = null,
        "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0),
        this.CM = Date.now() - this.startTime),
        this.Yg = !0)
    },
    resume: function() {
        this.Yg && (this.Ic ? this.Ic.play() : this.source && ad(this, this.CM),
        this.Yg = !1)
    },
    dw: function() {
        return this.Yg
    },
    setPosition: function(a) {
        this.Ic ? this.Ic.currentTime = a / 1E3 : this.source && (this.cm && (this.source.onended = null,
        "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)),
        ad(this, a))
    }
};
function wg(a) {
    if (1 == a.cm && 0 == a.Yg)
        if (a.Ic) {
            if (a.Ic.ended) {
                if (0 < a.kl && (a.kl--,
                0 < a.kl))
                    return ad(a, 0, a.Rp),
                    !1;
                a.ls = !1;
                a.cm = !1;
                return !0
            }
        } else if (a.source && (3 == a.source.playbackState || a.VD)) {
            if (0 < a.kl && (a.kl--,
            0 < a.kl))
                return ad(a, 0, a.Rp),
                !1;
            a.ls = !1;
            a.cm = !1;
            return !0
        }
    return !1
}
function ad(a, b, c) {
    b || (b = 0);
    c || (c = a.frequency);
    a.Ic ? (a.Ic.volume = a.volume / 100,
    a.Rp = c,
    a.Ic.playbackRate = c / a.frequency,
    a.Ic.duration && (a.Ic.currentTime = 0),
    a.Ic.play()) : a.buffer && (a.source = a.context.createBufferSource(),
    a.source.buffer = a.buffer,
    0 == a.Pp ? (a.source.gain.value = a.volume / 100,
    a.source.connect(a.context.destination)) : (a.gain = a.context.createGain(),
    a.source.connect(a.gain),
    a.gain.connect(a.context.destination),
    a.gain.gain.value = a.volume / 100),
    b || (b = 0),
    c || (c = a.frequency),
    a.Rp = c,
    a.source.playbackRate.value = c / a.frequency,
    a.startTime = Date.now() - b,
    "undefined" !== typeof a.source.start ? a.source.start(0, b / 1E3) : a.source.noteOn(b),
    a.source.onended = function() {
        a.VD = !0
    }
    );
    a.Yg = !1;
    a.cm = !0;
    a.VD = !1
}
function Xe(a) {
    a.handle = 9999;
    a.type = 4;
    a.frequency = 4E4;
    a.Rp = a.frequency;
    a.name = "";
    a.Ic = null;
    Se(a.Re, a)
}
;function Zh(a) {
    this.name = a;
    this.mH = [];
    this.position = 0;
    this.rw = !1
}
Zh.prototype = {};
function $h(a) {
    this.lH = a;
    this.mu = []
}
$h.prototype = {};
function ai(a) {
    a &= 65535;
    return 0 != (a & 32768) ? a - 65536 : a
}
function ce(a) {
    this.Re = a;
    this.v = null;
    this.SG = this.Yj = 0;
    this.kB = Array(bi + ci);
    this.yt = this.ll = 0;
    this.fo = this.Rh = this.Md = this.Pd = this.oe = this.Bg = this.hk = null;
    this.Kh = Array(bi + 1);
    this.MH = !1;
    this.Ph = null;
    this.Rt = this.Tt = this.Qt = this.St = 0;
    this.$t = !1;
    this.pi = null;
    this.zx = 0;
    this.wx = Array(4);
    this.Nq = this.Oo = this.No = !1;
    this.sx = this.Al = this.Mo = this.ce = 0;
    this.iC = this.Vm = !1;
    this.lk = null;
    this.Xt = this.ni = this.mk = 0;
    this.Po = this.Bl = null;
    this.Rn = 0;
    this.re = !1;
    this.FH = this.LH = this.Id = this.KH = 0;
    this.ks = !1;
    this.Tm = null;
    this.nx = 0;
    this.nk = null;
    this.Dz = !1;
    this.hG = 0;
    this.Hz = null;
    this.Dv = [];
    this.Sp = di
}
ce.prototype = {
    load: function(a) {
        for (var b, c, d = 0; ; )
            if (b = Sa(a.file),
            69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
                this.Yj = S(a.file);
                300 > this.Yj && (this.Yj = 300);
                S(a.file);
                this.SG = S(a.file);
                for (c = 0; c < 7 + ci; c++)
                    this.kB[c] = S(a.file);
                this.ll = S(a.file);
                if (0 < this.ll)
                    for (this.hk = Array(this.ll),
                    c = 0; c < this.ll; c++)
                        this.hk[c] = new ei,
                        this.hk[c].$w = F(a.file),
                        this.hk[c].ax = F(a.file)
            } else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3])
                D(a.file),
                this.yt = D(a.file),
                this.Bg = Array(this.yt);
            else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
                for (D(a.file),
                b = D(a.file),
                c = 0; c < b; c++) {
                    var e = this.Bg, f = d, g, h = a, k = h.file.Ba, m = F(h.file), l = new fi;
                    l.sd = h.file.na();
                    l.$g = h.file.na();
                    l.lb = S(h.file);
                    l.XK = S(h.file);
                    l.Pn = D(h.file);
                    l.Yp = D(h.file);
                    l.ic = Array(l.sd + l.$g);
                    var t = 0;
                    for (g = 0; g < l.sd; g++)
                        l.ic[t++] = W.create(h);
                    for (g = 0; g < l.$g; g++) {
                        var w = l.ic, r = t++, u, n, z = h, E = !1, A = !1, v = !1, H = !1, G = !1, O = !1, N = !1, J = !1, K = !1;
                        u = !1;
                        var L = z.file.Ba
                          , M = S(z.file)
                          , q = D(z.file);
                        switch (q) {
                        case 65535:
                            n = new mb;
                            break;
                        case 131071:
                            n = new mb;
                            break;
                        case 262143:
                            n = new ACT_SETVARG;
                            break;
                        case 327679:
                            n = new ACT_SUBVARG;
                            break;
                        case 393215:
                            n = new ACT_ADDVARG;
                            break;
                        case 458751:
                            n = new ACT_GRPACTIVATE;
                            break;
                        case 524287:
                            n = new ACT_GRPDEACTIVATE;
                            break;
                        case 983039:
                            n = new ACT_STARTLOOP;
                            break;
                        case 1048575:
                            n = new ACT_STOPLOOP;
                            break;
                        case 1114111:
                            n = new ACT_SETLOOPINDEX;
                            break;
                        case 1179647:
                            n = new ACT_RANDOMIZE;
                            break;
                        case 1310719:
                            n = new ACT_SETGLOBALSTRING;
                            break;
                        case 1572863:
                            n = new mb;
                            break;
                        case 1638399:
                            n = new mb;
                            break;
                        case 1835007:
                            n = new ACT_SETVARGCONST;
                            E = !0;
                            break;
                        case 1900543:
                            n = new ACT_SETVARG;
                            break;
                        case 1966079:
                            n = new ACT_SETVARGCONST;
                            E = !0;
                            break;
                        case 2031615:
                            n = new ACT_SETVARG;
                            break;
                        case 2097151:
                            n = new ACT_ADDVARGCONST;
                            A = !0;
                            break;
                        case 2162687:
                            n = new ACT_ADDVARG;
                            break;
                        case 2228223:
                            n = new ACT_ADDVARGCONST;
                            A = !0;
                            break;
                        case 2293759:
                            n = new ACT_ADDVARG;
                            break;
                        case 2359295:
                            n = new ACT_SUBVARGCONST;
                            v = !0;
                            break;
                        case 2424831:
                            n = new ACT_SUBVARG;
                            break;
                        case 2490367:
                            n = new ACT_SUBVARGCONST;
                            v = !0;
                            break;
                        case 2555903:
                            n = new ACT_SUBVARG;
                            break;
                        case 2883583:
                            n = new ACT_EXECUTECHILDEVENTS;
                            break;
                        case 2949119:
                            n = new mb;
                            break;
                        case 65534:
                            n = new ACT_PLAYSAMPLE;
                            break;
                        case 131070:
                            n = new ACT_STOPSAMPLE;
                            break;
                        case 327678:
                            n = new ACT_PLAYLOOPSAMPLE;
                            break;
                        case 458750:
                            n = new ACT_STOPSPESAMPLE;
                            break;
                        case 524286:
                            n = new ACT_PAUSESAMPLE;
                            break;
                        case 589822:
                            n = new ACT_RESUMESAMPLE;
                            break;
                        case 786430:
                            n = new ACT_PLAYCHANNEL;
                            break;
                        case 851966:
                            n = new ACT_PLAYLOOPCHANNEL;
                            break;
                        case 917502:
                            n = new ACT_PAUSECHANNEL;
                            break;
                        case 983038:
                            n = new ACT_RESUMECHANNEL;
                            break;
                        case 1048574:
                            n = new ACT_STOPCHANNEL;
                            break;
                        case 1114110:
                            n = new ACT_SETCHANNELPOS;
                            break;
                        case 1179646:
                            n = new ACT_SETCHANNELVOL;
                            break;
                        case 1245182:
                            n = new mb;
                            break;
                        case 1310718:
                            n = new ACT_SETSAMPLEPOS;
                            break;
                        case 1376254:
                            n = new ACT_SETSAMPLEMAINVOL;
                            break;
                        case 1441790:
                            n = new ACT_SETSAMPLEVOL;
                            break;
                        case 1507326:
                            n = new mb;
                            break;
                        case 1572862:
                            n = new mb;
                            break;
                        case 1638398:
                            n = new ACT_PAUSEALLCHANNELS;
                            break;
                        case 1703934:
                            n = new ACT_RESUMEALLCHANNELS;
                            break;
                        case 2031614:
                            n = new ACT_LOCKCHANNEL;
                            break;
                        case 2097150:
                            n = new ACT_UNLOCKCHANNEL;
                            break;
                        case 2162686:
                            n = new ACT_SETCHANNELFREQ;
                            break;
                        case 2228222:
                            n = new ACT_SETSAMPLEFREQ;
                            break;
                        case 2424830:
                            n = new ACT_PLAYSAMPLE2;
                            break;
                        case 65533:
                            n = new ACT_NEXTLEVEL;
                            break;
                        case 131069:
                            n = new ACT_PREVLEVEL;
                            break;
                        case 196605:
                            n = new nb;
                            break;
                        case 262141:
                            n = new ACT_PAUSEKEY;
                            break;
                        case 327677:
                            n = new ACT_ENDGAME;
                            break;
                        case 393213:
                            n = new ACT_RESTARTGAME;
                            break;
                        case 458749:
                            n = new ACT_RESTARTLEVEL;
                            break;
                        case 524285:
                            n = new ACT_CDISPLAY;
                            break;
                        case 589821:
                            n = new ACT_CDISPLAYX;
                            break;
                        case 655357:
                            n = new ACT_CDISPLAYY;
                            break;
                        case 983037:
                            n = new ACT_FULLSCREENMODE;
                            break;
                        case 1048573:
                            n = new ACT_WINDOWEDMODE;
                            break;
                        case 1114109:
                            n = new ACT_SETFRAMERATE;
                            break;
                        case 1179645:
                            n = new ACT_PAUSEKEY;
                            break;
                        case 1245181:
                            n = new ACT_PAUSEANYKEY;
                            break;
                        case 1310717:
                            n = new ACT_SETVSYNCON;
                            break;
                        case 1376253:
                            n = new ACT_SETVSYNCOFF;
                            break;
                        case 1441789:
                            n = new ACT_SETVIRTUALWIDTH;
                            break;
                        case 1507325:
                            n = new ACT_SETVIRTUALHEIGHT;
                            break;
                        case 1572861:
                            n = new ACT_SETFRAMEBDKCOLOR;
                            break;
                        case 1638397:
                            n = new ACT_DELCREATEDBKDAT;
                            break;
                        case 1703933:
                            n = new ACT_DELALLCREATEDBKD;
                            break;
                        case 1769469:
                            n = new ACT_SETFRAMEWIDTH;
                            break;
                        case 1835005:
                            n = new ACT_SETFRAMEHEIGHT;
                            break;
                        case 2097149:
                            n = new ACT_PLAYDEMO;
                            break;
                        case 2162685:
                            n = new mb;
                            break;
                        case 2228221:
                            n = new mb;
                            break;
                        case 2293757:
                            n = new mb;
                            break;
                        case 2359293:
                            n = new mb;
                            break;
                        case 2424829:
                            n = new mb;
                            break;
                        case 2490365:
                            n = new ACT_SETSTRETCHRESAMPLING;
                            break;
                        case 65532:
                            n = new ACT_SETTIMER;
                            break;
                        case 131068:
                            n = new ACT_EVENTAFTER;
                            break;
                        case 196604:
                            n = new ACT_NEVENTSAFTER;
                            break;
                        case 65530:
                            n = new ACT_HIDECURSOR;
                            break;
                        case 131066:
                            n = new ACT_SHOWCURSOR;
                            break;
                        case 65529:
                            n = new qb;
                            break;
                        case 131065:
                            n = new ACT_SETLIVES;
                            break;
                        case 196601:
                            n = new ACT_NOINPUT;
                            break;
                        case 262137:
                            n = new ACT_RESTINPUT;
                            break;
                        case 327673:
                            n = new yb;
                            break;
                        case 393209:
                            n = new ACT_ADDLIVES;
                            break;
                        case 458745:
                            n = new ACT_SUBSCORE;
                            break;
                        case 524281:
                            n = new ub;
                            break;
                        case 589817:
                            n = new ACT_SETINPUT;
                            break;
                        case 655353:
                            n = new ACT_SETINPUTKEY;
                            break;
                        case 720889:
                            n = new ACT_SETPLAYERNAME;
                            break;
                        case 65531:
                            n = new ACT_CREATE;
                            break;
                        case 131067:
                            n = new ACT_CREATEBYNAME;
                            break;
                        case 196603:
                            n = new ACT_CREATEEXP;
                            break;
                        case 262139:
                            n = new ACT_CREATEBYNAMEEXP;
                            break;
                        case 5242883:
                            n = new ACT_STRDESTROY;
                            break;
                        case 5308419:
                            n = new ACT_STRDISPLAY;
                            break;
                        case 5373955:
                            n = new ACT_STRDISPLAYDURING;
                            break;
                        case 5439491:
                            n = new ACT_STRSETCOLOUR;
                            break;
                        case 5505027:
                            n = new ACT_STRSET;
                            break;
                        case 5570563:
                            n = new ACT_STRPREV;
                            break;
                        case 5636099:
                            n = new ACT_STRNEXT;
                            break;
                        case 5701635:
                            n = new ACT_STRDISPLAYSTRING;
                            break;
                        case 5767171:
                            n = new ACT_STRSETSTRING;
                            break;
                        case 5242882:
                            n = new ACT_SPRPASTE;
                            break;
                        case 5308418:
                            n = new ACT_SPRFRONT;
                            break;
                        case 5373954:
                            n = new ACT_SPRBACK;
                            break;
                        case 5439490:
                            n = new ACT_SPRADDBKD;
                            break;
                        case 5505026:
                            n = new ACT_SPRREPLACECOLOR;
                            break;
                        case 5570562:
                            n = new ACT_SPRSETSCALE;
                            break;
                        case 5636098:
                            n = new ACT_SPRSETSCALEX;
                            break;
                        case 5701634:
                            n = new ACT_SPRSETSCALEY;
                            break;
                        case 5767170:
                            n = new ACT_SPRSETANGLE;
                            break;
                        case 5242887:
                            n = new ACT_CSETVALUE;
                            break;
                        case 5308423:
                            n = new ACT_CADDVALUE;
                            break;
                        case 5373959:
                            n = new ACT_CSUBVALUE;
                            break;
                        case 5439495:
                            n = new ACT_CSETMIN;
                            break;
                        case 5505031:
                            n = new ACT_CSETMAX;
                            break;
                        case 5570567:
                            n = new ACT_CSETCOLOR1;
                            break;
                        case 5636103:
                            n = new ACT_CSETCOLOR2;
                            break;
                        case 5242884:
                            n = new ACT_QASK;
                            break;
                        case 5242889:
                            n = new ACT_CCARESTARTAPP;
                            break;
                        case 5308425:
                            n = new ACT_CCARESTARTFRAME;
                            break;
                        case 5373961:
                            n = new ACT_CCANEXTFRAME;
                            break;
                        case 5439497:
                            n = new ACT_CCAPREVIOUSFRAME;
                            break;
                        case 5505033:
                            n = new ACT_CCAENDAPP;
                            break;
                        case 5636105:
                            n = new ACT_CCAJUMPFRAME;
                            break;
                        case 5701641:
                            n = new ACT_CCASETGLOBALVALUE;
                            break;
                        case 5767177:
                            n = new ACT_CCASHOW;
                            break;
                        case 5832713:
                            n = new ACT_CCAHIDE;
                            break;
                        case 5898249:
                            n = new ACT_CCASETGLOBALSTRING;
                            break;
                        case 5963785:
                            n = new ACT_CCAPAUSEAPP;
                            break;
                        case 6029321:
                            n = new ACT_CCARESUMEAPP;
                            break;
                        case 6094857:
                            n = new ACT_CCASETWIDTH;
                            break;
                        case 6160393:
                            n = new ACT_CCASETHEIGHT;
                            break;
                        default:
                            switch (q & 4294901760) {
                            case 0:
                                n = new ACT_EXTEXTRA;
                                u = !0;
                                break;
                            case 65536:
                                n = new zb;
                                break;
                            case 131072:
                                n = new ACT_EXTSETX;
                                break;
                            case 196608:
                                n = new ACT_EXTSETY;
                                break;
                            case 262144:
                                n = new Gb;
                                break;
                            case 327680:
                                n = new ACT_EXTSTART;
                                break;
                            case 393216:
                                n = new ACT_EXTSPEED;
                                break;
                            case 458752:
                                n = new ACT_EXTMAXSPEED;
                                break;
                            case 524288:
                                n = new ACT_EXTWRAP;
                                break;
                            case 589824:
                                n = new ACT_EXTBOUNCE;
                                break;
                            case 655360:
                                n = new ACT_EXTREVERSE;
                                break;
                            case 720896:
                                n = new ACT_EXTNEXTMOVE;
                                break;
                            case 786432:
                                n = new ACT_EXTPREVMOVE;
                                break;
                            case 851968:
                                n = new ACT_EXTSELMOVE;
                                break;
                            case 917504:
                                n = new ACT_EXTLOOKAT;
                                break;
                            case 983040:
                                n = new ACT_EXTSTOPANIM;
                                break;
                            case 1048576:
                                n = new ACT_EXTSTARTANIM;
                                break;
                            case 1114112:
                                n = new ACT_EXTFORCEANIM;
                                break;
                            case 1179648:
                                n = new ACT_EXTFORCEDIR;
                                break;
                            case 1245184:
                                n = new ACT_EXTFORCESPEED;
                                break;
                            case 1310720:
                                n = new ACT_EXTRESTANIM;
                                break;
                            case 1376256:
                                n = new ACT_EXTRESTDIR;
                                break;
                            case 1441792:
                                n = new ACT_EXTRESTSPEED;
                                break;
                            case 1507328:
                                n = new ACT_EXTSETDIR;
                                break;
                            case 1572864:
                                n = new ACT_EXTDESTROY;
                                break;
                            case 1638400:
                                n = new ACT_EXTSHUFFLE;
                                break;
                            case 1703936:
                                n = new Hb;
                                break;
                            case 1769472:
                                n = new ACT_EXTSHOW;
                                break;
                            case 1835008:
                                n = new ACT_EXTDISPLAYDURING;
                                break;
                            case 1900544:
                                n = new ACT_EXTSHOOT;
                                break;
                            case 1966080:
                                n = new ACT_EXTSHOOTTOWARD;
                                break;
                            case 2031616:
                                n = new Kb;
                                H = !0;
                                break;
                            case 2097152:
                                n = new Ob;
                                G = !0;
                                break;
                            case 2162688:
                                n = new ACT_EXTSUBVAR;
                                O = !0;
                                break;
                            case 2228224:
                                n = new ACT_EXTDISPATCHVAR;
                                break;
                            case 2293760:
                                n = new ACT_EXTSETFLAG;
                                N = !0;
                                break;
                            case 2359296:
                                n = new ACT_EXTCLRFLAG;
                                J = !0;
                                break;
                            case 2424832:
                                n = new ACT_EXTCHGFLAG;
                                K = !0;
                                break;
                            case 2490368:
                                n = new ACT_EXTINKEFFECT;
                                break;
                            case 2555904:
                                n = new ACT_EXTSETSEMITRANSPARENCY;
                                break;
                            case 2621440:
                                n = new ACT_EXTFORCEFRAME;
                                break;
                            case 2686976:
                                n = new ACT_EXTRESTFRAME;
                                break;
                            case 2752512:
                                n = new ACT_EXTSETACCELERATION;
                                break;
                            case 2818048:
                                n = new ACT_EXTSETDECELERATION;
                                break;
                            case 2883584:
                                n = new ACT_EXTSETROTATINGSPEED;
                                break;
                            case 2949120:
                                n = new ACT_EXTSETDIRECTIONS;
                                break;
                            case 3014656:
                                n = new ACT_EXTBRANCHNODE;
                                break;
                            case 3080192:
                                n = new ACT_EXTSETGRAVITY;
                                break;
                            case 3145728:
                                n = new ACT_EXTGOTONODE;
                                break;
                            case 3211264:
                                n = new ACT_EXTSETVARSTRING;
                                break;
                            case 3276800:
                                n = new ACT_EXTSETFONTNAME;
                                break;
                            case 3342336:
                                n = new ACT_EXTSETFONTSIZE;
                                break;
                            case 3407872:
                                n = new ACT_EXTSETBOLD;
                                break;
                            case 3473408:
                                n = new ACT_EXTSETITALIC;
                                break;
                            case 3538944:
                                n = new ACT_EXTSETUNDERLINE;
                                break;
                            case 3604480:
                                n = new mb;
                                break;
                            case 3670016:
                                n = new ACT_EXTSETTEXTCOLOR;
                                break;
                            case 3735552:
                                n = new ACT_EXTSPRFRONT;
                                break;
                            case 3801088:
                                n = new ACT_EXTSPRBACK;
                                break;
                            case 3866624:
                                n = new ACT_EXTMOVEBEFORE;
                                break;
                            case 3932160:
                                n = new ACT_EXTMOVEAFTER;
                                break;
                            case 3997696:
                                n = new ACT_EXTMOVETOLAYER;
                                break;
                            case 4063232:
                                n = new mb;
                                break;
                            case 4128768:
                                n = new ACT_EXTSETEFFECT;
                                break;
                            case 4194304:
                                n = new mb;
                                break;
                            case 4259840:
                                n = new ACT_EXTSETALPHACOEF;
                                break;
                            case 4325376:
                                n = new ACT_EXTSETRGBCOEF;
                                break;
                            case 4390912:
                                n = new mb;
                                break;
                            case 4456448:
                                n = new ACT_EXTSETFRICTION;
                                break;
                            case 4521984:
                                n = new ACT_EXTSETELASTICITY;
                                break;
                            case 4587520:
                                n = new ACT_EXTAPPLYIMPULSE;
                                break;
                            case 4653056:
                                n = new ACT_EXTAPPLYANGULARIMPULSE;
                                break;
                            case 4718592:
                                n = new ACT_EXTAPPLYFORCE;
                                break;
                            case 4784128:
                                n = new ACT_EXTAPPLYTORQUE;
                                break;
                            case 4849664:
                                n = new ACT_EXTSETLINEARVELOCITY;
                                break;
                            case 4915200:
                                n = new ACT_EXTSETANGULARVELOCITY;
                                break;
                            case 4980736:
                                n = new ACT_EXTFOREACH;
                                break;
                            case 5046272:
                                n = new ACT_EXTFOREACH2;
                                break;
                            case 5111808:
                                n = new ACT_EXTSTOPFORCE;
                                break;
                            case 5177344:
                                n = new ACT_EXTSTOPTORQUE;
                                break;
                            default:
                                n = new gi
                            }
                        }
                        if (null != n) {
                            n.Qa = q;
                            n.Gf = F(z.file);
                            n.Nd = F(z.file);
                            n.Qb = z.file.na();
                            n.Sh = z.file.na();
                            n.Ce = z.file.na();
                            n.Qn = z.file.na();
                            q = 0;
                            if (u) {
                                n.Ce--;
                                u = z.file.Ba;
                                var C = S(z.file);
                                S(z.file);
                                q = S(z.file);
                                z.file.seek(u + C)
                            }
                            if (0 < n.Ce)
                                for (n.ha = Array(n.Ce),
                                u = 0; u < n.Ce; u++)
                                    n.ha[u] = Yb(z);
                            if (0 != q) {
                                u = null;
                                switch (q) {
                                case 1:
                                    u = new ACT_EXTSETFLAGBYEXP
                                }
                                null != u && (u.Qa = n.Qa,
                                u.Gf = n.Gf,
                                u.Nd = n.Nd,
                                u.Qb = n.Qb,
                                u.Sh = n.Sh,
                                u.Ce = n.Ce,
                                u.Qn = n.Qn,
                                u.ha = n.ha,
                                n = u)
                            }
                            if (E || A || v)
                                E = n.ha[0],
                                n.ci = E.value,
                                E = n.ha[1],
                                n.value = E.Gb[0].value;
                            if (H || G || O)
                                u = null,
                                E = n.ha[0],
                                53 != E.code && (A = E.value,
                                E = n.ha[1],
                                0 <= A && 2 == E.Gb.length && (0 >= E.Gb[1].code || 1310720 <= E.Gb[1].code) && (65535 == E.Gb[0].code || 1572863 == E.Gb[0].code) && (H ? (u = new Nb,
                                u.ci = A,
                                u.value = E.Gb[0].value) : G ? (u = new Pb,
                                u.ci = A,
                                u.value = E.Gb[0].value) : O && (u = new ACT_EXTSUBVARCONST,
                                u.ci = A,
                                u.value = E.Gb[0].value)),
                                null != u && (u.Qa = n.Qa,
                                u.Gf = n.Gf,
                                u.Nd = n.Nd,
                                u.Qb = n.Qb,
                                u.Sh = n.Sh,
                                u.Ce = n.Ce,
                                u.Qn = n.Qn,
                                u.ha = n.ha,
                                n = u));
                            if (N || J || K)
                                u = null,
                                H = n.ha[0],
                                2 == H.Gb.length && (0 >= H.Gb[1].code || 1310720 <= H.Gb[1].code) && 65535 == H.Gb[0].code && (N ? (u = new ACT_EXTSETFLAGCONST,
                                u.ra = 1 << H.Gb[0].value) : J ? (u = new ACT_EXTCLRFLAGCONST,
                                u.ra = 1 << H.Gb[0].value) : K && (u = new ACT_EXTCHGFLAGCONST,
                                u.ra = 1 << H.Gb[0].value)),
                                null != u && (u.Qa = n.Qa,
                                u.Gf = n.Gf,
                                u.Nd = n.Nd,
                                u.Qb = n.Qb,
                                u.Sh = n.Sh,
                                u.Ce = n.Ce,
                                u.Qn = n.Qn,
                                u.ha = n.ha,
                                n = u)
                        }
                        z.file.seek(L + M);
                        w[r] = n
                    }
                    h.file.seek(k - m);
                    e[f] = l;
                    d++
                }
            else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3])
                0 != (D(a.file) & 1) && (this.Sp |= hi);
            else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3])
                break;
        this.hG = Math.max(this.hG, d)
    }
};
function ii(a, b, c, d) {
    for (d = ji(a, d); -1 != d; d = ki(a)) {
        d = a.v.ta[d].bf;
        var e;
        for (e = 0; e < b && (a.Ph[e] != c || a.Ph[e + 1] != d); e += 2)
            ;
        e == b && (a.Ph[b++] = c,
        a.Ph[b++] = d)
    }
    return b
}
function li(a, b, c, d) {
    var e, f, g, h, k;
    for (k = 0; k < b.sd; k++)
        if (h = b.ic[k],
        2 <= ai(h.Qa))
            switch (f = 32784,
            g = h.Qa & 4294901760,
            g) {
            case -917504:
                g = h.ha[0];
                for (e = ji(a, h.Nd); -1 != e; e = ki(a))
                    e = a.v.ta[e].bf,
                    d == e && (f = 0,
                    c = ii(a, c, d, g.Tf));
                if (0 == f)
                    break;
                for (e = ji(a, g.Tf); -1 != e; e = ki(a))
                    e = a.v.ta[e].bf,
                    d == e && (c = ii(a, c, d, h.Nd));
                break;
            case -786432:
                g = h.ha[0],
                f = 32768 + g.value;
            case -851968:
                for (e = ji(a, h.Nd); -1 != e; e = ki(a))
                    e = a.v.ta[e].bf,
                    d == e && (a.Ph[c++] = d,
                    a.Ph[c++] = f)
            }
    return c
}
function mi(a, b, c, d, e) {
    var f, g;
    if (0 > c) {
        if (null != a.oe)
            for (f = a.oe[b & 32767],
            g = 0; g < f.bc.length; )
                mi(a, f.bc[g + 1], f.bc[g], d, e),
                g += 2
    } else if (0 > e) {
        if (null != a.oe)
            for (f = a.oe[d & 32767],
            g = 0; g < f.bc.length; )
                mi(a, b, c, f.bc[g + 1], f.bc[g]),
                g += 2
    } else {
        a = a.v.ta[b];
        if (null == a.Fm)
            a.Fm = [],
            a = a.Fm;
        else
            for (a = a.Fm,
            b = 0; b < a.length; b += 2)
                if (e == a[b])
                    return;
        a.push(e);
        a.push(d)
    }
}
function ni(a) {
    var b;
    if (-1 == a.Tt || a.Rt >= a.oe[a.Tt].bc.length)
        return -1;
    b = a.oe[a.Tt].bc[a.Rt + 1];
    a.Rt += 2;
    return b
}
function ki(a) {
    var b;
    if (-1 == a.St || a.Qt >= a.oe[a.St].bc.length)
        return -1;
    b = a.oe[a.St].bc[a.Qt + 1];
    a.Qt += 2;
    return b
}
function ji(a, b) {
    if (0 == (b & 32768))
        return a.St = -1,
        b;
    if (-1 == b)
        return -1;
    a.St = b & 32767;
    a.Qt = 0;
    return ki(a)
}
function oi(a, b) {
    var c;
    for (c = 0; c < a.v.lh; c++)
        if (-1 != a.v.ta[c].bf && a.v.ta[c].lg == b)
            if (0 != (a.v.ta[c].Ow & $g) && 0 == (a.v.ta[c].Ow & pi))
                break;
            else
                return !1;
    return !0
}
function qi(a, b, c) {
    if (0 != (b & ri)) {
        var d;
        for (d = 0; b != a.hk[d].$w || c != a.hk[d].ax; )
            d++;
        return d | 32768
    }
    for (c = 0; c < a.v.lh && a.v.ta[c].bf != b; )
        c++;
    return c
}
function Pd(a) {
    a.ks = !1;
    a.oe = null;
    a.fo = null;
    a.Pd = null;
    a.Md = null;
    a.Rh = null
}
function De(a, b) {
    var c, d, e, f, g, h, k, m, l, t, w, r, u, n, z, E;
    a.v = b;
    for (m = k = E = a.Mo = 0; m < a.v.lh; m++)
        -1 != a.v.ta[m].bf && (a.v.ta[m].xB = -1,
        a.v.ta[m].kg = 0,
        a.v.ta[m].Dq = -1,
        k++,
        a.v.ta[m].bf + 1 > E && (E = a.v.ta[m].bf + 1));
    a.oe = null;
    var A;
    if (0 < a.ll) {
        d = Array(a.ll);
        for (c = 0; c < a.ll; c++)
            for (h = a.hk[c].$w & 32767,
            A = d[c] = 0; A < a.v.lh; A++)
                if (a.v.ta[A].lg == a.hk[c].ax)
                    for (m = 0; 8 > m && -1 != a.v.ta[A].Eq[m]; m++)
                        h == a.v.ta[A].Eq[m] && d[c]++;
        a.oe = Array(a.ll);
        for (c = 0; c < a.ll; c++) {
            a.oe[c] = new si;
            0 != d[c] && (a.oe[c].bc = Array(2 * d[c]));
            k = 0;
            h = a.hk[c].$w & 32767;
            for (A = 0; A < a.v.lh; A++)
                if (a.v.ta[A].lg == a.hk[c].ax)
                    for (m = 0; 8 > m && -1 != a.v.ta[A].Eq[m]; m++)
                        h == a.v.ta[A].Eq[m] && (a.oe[c].bc[2 * k] = a.v.ta[A].bf,
                        a.oe[c].bc[2 * k + 1] = A,
                        k++);
            a.oe[c].RB = -1
        }
    }
    a.Ph = Array(200 * E + 1);
    k = 0;
    t = [];
    for (A = 0; A < a.Bg.length; A++) {
        c = a.Bg[A];
        for (n = 0; n < c.$g + c.sd; n++) {
            d = c.ic[n];
            d.Qb &= ~ti;
            0 <= ai(d.Qa) && (d.Nd = qi(a, d.Gf, ai(d.Qa)));
            if (983039 == d.Qa)
                g = d.ha[0],
                g.bL = 0,
                262143 == g.Gb[0].code && 0 == g.Gb[1].code && (w = {},
                w.aK = d.ha[0],
                w.name = g.Gb[0].nd,
                t.push(w),
                ih(a.v, g.Gb[0].nd));
            else if (d.Qa == kb.VN || d.Qa == kb.UN)
                g = d.ha[0],
                262143 == g.Gb[0].code && 0 == g.Gb[1].code && (g.Gb[0] = new lc,
                g.Gb[0].code = 65535,
                g.Gb[0].value = ih(a.v, g.Gb[0].nd));
            if (0 < d.Ce)
                for (w = 0; w < d.Ce; w++)
                    switch (e = d.ha[w],
                    e.code) {
                    case 25:
                        e.value = 0;
                        break;
                    case 21:
                        if (0 == (d.Gf & ri))
                            for (r = jh(a.v.J.Af); null != r; r = kh(a.v.J.Af)) {
                                if (d.Gf == r.Xh) {
                                    e.Fz = r.pm;
                                    break
                                }
                            }
                        else
                            e.Fz = -1;
                        h = e.Lt;
                        -1 != h && (e.Mt = qi(a, h, e.Vw));
                        break;
                    case 9:
                    case 18:
                    case 16:
                        h = e.Lt;
                        -1 != h && (e.Mt = qi(a, h, e.Vw));
                        break;
                    case 1:
                        e.Tf = qi(a, e.Cm, e.type);
                        break;
                    case 69:
                        for (m = 0; m < e.Tc.length; m += 2)
                            e.Tc[m + 1] = qi(a, e.Tc[m], 0);
                        break;
                    case 15:
                    case 27:
                    case 28:
                    case 45:
                    case 46:
                    case 22:
                    case 23:
                    case 52:
                    case 59:
                    case 53:
                    case 62:
                    case 54:
                        for (r = e,
                        m = 0; m < r.Gb.length; m++)
                            0 < ai(r.Gb[m].code) && (l = r.Gb[m],
                            l.Tf = qi(a, l.Cm, ai(l.code)))
                    }
        }
        w = 0;
        r = ui | vi | gc;
        for (n = 0; n < c.sd + c.$g; n++) {
            d = c.ic[n];
            f = ai(d.Qa);
            g = d.Qa;
            l = u = m = 0;
            e = null;
            if (f >= he)
                switch (g & 4294901760) {
                case 262144:
                case 589824:
                    w |= gc;
                    h = d.Gf;
                    if (0 != (h & ri))
                        for (h = a,
                        z = d.Nd,
                        0 == (z & 32768) ? (h.Tt = -1,
                        f = z) : -1 == z ? f = -1 : (h.Tt = z & 32767,
                        h.Rt = 0,
                        f = ni(h)); -1 != f; f = ni(a))
                            k = li(a, c, k, a.v.ta[f].bf);
                    else
                        k = li(a, c, k, h);
                    break;
                case 1638400:
                    w |= wi;
                    break;
                case -917504:
                    e = d.ha[0];
                    m = d.ha[0];
                    mi(a, d.Nd, d.Gf, m.Tf, m.Cm);
                    mi(a, m.Tf, m.Cm, d.Nd, d.Gf);
                    l = ai(d.Qa);
                    l = oi(a, l) ? Yg | tg : Yg | 4096 | tg;
                    m = m.type;
                    u = oi(a, m) ? Yg | tg : Yg | 4096 | tg;
                    m = 3;
                    break;
                case -262144:
                    l = ai(d.Qa);
                    l = oi(a, l) ? Yg : Yg | 4096;
                    e = d.ha[0];
                    m = d.ha[0].type;
                    u = oi(a, m) ? Yg : Yg | 4096;
                    m = 3;
                    break;
                case -720896:
                case -786432:
                    u = ng;
                    m = 1;
                    break;
                case -851968:
                    u = sg,
                    m = 1
                }
            else
                switch (g) {
                case -327681:
                    r &= ~ui;
                    break;
                case -393217:
                    r |= xi;
                    break;
                case -262145:
                    r |= xi;
                    break;
                case -196609:
                    r |= yi + zi;
                    break;
                case -196614:
                    l = Yg;
                    e = d.ha[0];
                    m = 2;
                    break;
                case -393222:
                    l = Yg,
                    e = d.ha[1],
                    m = 2
                }
            if (0 != (m & 1))
                for (f = ji(a, d.Nd); -1 != f; f = ki(a))
                    a.v.ta[f].kg |= u;
            if (0 != (m & 2))
                for (f = ji(a, e.Tf); -1 != f; f = ki(a))
                    a.v.ta[f].kg |= l
        }
        c.lb &= ~r;
        c.lb |= w
    }
    a.Ph[k] = -1;
    r = Array(bi + E + 1);
    c = n = 0;
    for (f = -bi; 0 > f; f++,
    c++)
        r[c] = n,
        n += a.kB[bi + f];
    for (A = 0; A < a.v.lh; A++,
    c++)
        r[c] = n,
        n = a.v.ta[A].lg < nh ? n + (a.kB[bi + a.v.ta[A].lg] + 80 + 1) : n + (a.Re.Qv.Wn(a.v.ta[A].lg) + 80 + 1);
    u = n;
    a.Pd = Array(u);
    for (m = 0; m < u; m++)
        a.Pd[m] = 0;
    w = h = 0;
    l = Array(a.v.J.Yj);
    for (A = 0; A < a.yt; A++)
        for (c = a.Bg[A],
        c.lb &= ~Ai,
        e = !0,
        n = z = 0; n < c.sd; n++) {
            d = c.ic[n];
            f = ai(d.Qa);
            g = d.Qa;
            m = -(g >> 16);
            if (e && -2686977 != d.Qa)
                if (0 != (d.Qb & Bi) && (h++,
                0 == (c.lb & Ci) && w++),
                0 > f)
                    a.Pd[r[7 + f] + m]++;
                else {
                    e = 0;
                    for (f = ji(a, d.Nd); -1 != f; f = ki(a))
                        a.Pd[r[bi + f] + m]++,
                        l[e++] = f;
                    l[e] = -1;
                    if (-917504 == (g & 4294901760))
                        for (e = d.ha[0],
                        g = ji(a, e.Tf); -1 != g; g = ki(a)) {
                            for (e = 0; l[e] != g && -1 != l[e]; )
                                e++;
                            -1 == l[e] && a.Pd[r[bi + g] + m]++
                        }
                }
            e = !1;
            if (-1507329 == d.Qa || -1572865 == d.Qa)
                e = !0,
                c.lb |= Ai,
                0 == z ? z = d.Qa : d.Qa = z,
                -1572865 == z && (c.lb |= Di);
            -2686977 == d.Qa && (h++,
            c.lb |= Ei)
        }
    d = h + 1;
    for (c = 0; c < u; c++)
        0 != a.Pd[c] && (n = a.Pd[c],
        a.Pd[c] = d,
        d += n + 1);
    a.Md = Array(d);
    a.Rh = Array(d);
    for (m = 0; m < d; m++)
        a.Md[m] = null,
        a.Rh[m] = 0;
    h = Array(u);
    for (m = 0; m < u; m++)
        h[m] = a.Pd[m];
    a.v.kh = null;
    u = 0;
    var v;
    z = [];
    var H = []
      , G = w + 1;
    for (A = 0; A < a.yt; A++) {
        c = a.Bg[A];
        e = !0;
        for (n = 0; n < c.sd; n++) {
            d = c.ic[n];
            f = ai(d.Qa);
            g = d.Qa;
            m = -(g >> 16);
            if (e && -2686977 != d.Qa)
                if (0 != (d.Qb & Bi) && (0 != (c.lb & Ci) ? 0 < z.length && (v = z[z.length - 1],
                v.push(c),
                v.push(n)) : (a.Md[u] = c,
                a.Rh[u] = n,
                u++)),
                0 > f) {
                    if (v = r[bi + f] + m,
                    a.Md[h[v]] = c,
                    a.Rh[h[v]] = n,
                    h[v]++,
                    d.Qa == W.tI) {
                        e = !1;
                        for (m = 0; m < c.sd && c.ic[m].Qa != W.uI && c.ic[m].Qa != W.vI; m++)
                            ;
                        m < c.sd && (e = !0);
                        g = d.ha[0];
                        if (262143 == g.Gb[0].code && 0 == g.Gb[1].code) {
                            m = null;
                            var O;
                            g = g.Gb[0].nd;
                            ih(a.v, g);
                            for (f = 0; f < t.length; f++)
                                if (v = t[f],
                                qa(v.name, g)) {
                                    a.v.kh || (a.v.kh = []);
                                    if (null == m) {
                                        for (O = 0; O < a.v.kh.length && (m = a.v.kh[O],
                                        !qa(g, m.name)); O++)
                                            ;
                                        O == a.v.kh.length && (m = new Zh(g),
                                        a.v.kh.push(m));
                                        var N = c;
                                        m.mH[m.position++] = N;
                                        m.rw |= e
                                    }
                                    v.aK.bL = O + 1
                                }
                            if (null == m) {
                                a.v.kh || (a.v.kh = []);
                                for (O = 0; O < a.v.kh.length && (m = a.v.kh[O],
                                !qa(g, m.name)); O++)
                                    ;
                                O == a.v.kh.length && (m = new Zh(g),
                                a.v.kh.push(m));
                                g = c;
                                m.mH[m.position++] = g;
                                m.rw |= e
                            }
                        }
                    }
                } else {
                    e = 0;
                    for (f = ji(a, d.Nd); -1 != f; f = ki(a))
                        v = r[bi + f] + m,
                        a.Md[h[v]] = c,
                        a.Rh[h[v]] = n,
                        h[v]++,
                        l[e++] = f;
                    l[e] = -1;
                    if (-917504 == (g & 4294901760))
                        for (e = d.ha[0],
                        g = ji(a, e.Tf); -1 != g; g = ki(a)) {
                            for (e = 0; l[e] != g && -1 != l[e]; )
                                e++;
                            -1 == l[e] && (v = r[bi + g] + m,
                            a.Md[h[v]] = c,
                            a.Rh[h[v]] = n,
                            h[v]++)
                        }
                }
            e = !1;
            if (-1507329 == d.Qa || -1572865 == d.Qa)
                e = !0;
            if (-2686977 == d.Qa && 0 < z.length) {
                H.pop().dF = G;
                v = z.pop();
                for (d = 0; d < v.length; d += 2)
                    a.Md[G] = v[d],
                    a.Rh[G] = v[d + 1],
                    G++;
                a.Md[G] = null;
                a.Rh[G] = null;
                G++
            }
        }
        if (0 != (c.lb & Fi))
            for (v = [],
            z.push(v),
            m = 0; m < c.$g; m++)
                if (d = c.ic[c.sd + m],
                2883583 == d.Qa) {
                    0 < d.Ce && (e = d.ha[0],
                    H.push(e));
                    break
                }
    }
    a.fo = Array(E + 1 + k / 2);
    for (A = O = 0; A < a.v.lh; A++)
        if (E = a.v.ta[A],
        c = r[bi + A],
        E.AB = c,
        0 != (E.Ow & tf)) {
            k = 0;
            n = a.Pd[c - -12];
            if (0 != n)
                for (; null != a.Md[n]; ) {
                    c = a.Md[n];
                    d = c.ic[a.Rh[n]];
                    t = d.ha[0].value;
                    l = c.sd + 0;
                    for (m = c.$g; 0 < m; m--,
                    l++)
                        d = c.ic[l],
                        d.Qa == (524288 | E.lg & 65535) && (k |= t);
                    n++
                }
            E.BB = k;
            c = E.bf;
            for (t = k = 0; -1 != a.Ph[k]; k += 2)
                if (a.Ph[k] == c)
                    if (d = a.Ph[k + 1],
                    0 != (d & 32768))
                        E.kg |= d;
                    else {
                        for (n = 0; n < t && a.fo[O + n] != d; )
                            n++;
                        n == t && (a.fo[O + t++] = d)
                    }
            0 < t && (E.Dq = O,
            a.fo[O + t++] = -1,
            O += t)
        }
    a.Kh[0] = 0;
    for (m = 1; m <= bi; m++)
        a.Kh[m] = r[bi - m];
    for (A = 0; A < a.v.lh; A++)
        if (E = a.v.ta[A],
        f = E.Fc,
        0 == (f & 2147483648)) {
            do
                k = a.v.U[f],
                k.mA = E.AB,
                k.$d = E,
                k.Uh = E.kg,
                0 != (k.mb & tf) && (k.L.tC = E.BB),
                0 != (k.mb & $g) && 0 == (k.Uh & Yg) && Fh(k.ca, !1),
                0 == (k.mb & Wg) && (k.mb &= ~Xg,
                0 != (k.Uh & sg) && 0 != (a.v.J.ud & 32) && (k.mb |= Xg),
                0 != (k.Uh & (Yg | ng)) && (k.mb |= Xg)),
                f = k.Od;
            while (0 == (f & 2147483648))
        }
    a.MH = 0 != w ? !0 : !1;
    a.Ph = null;
    a.ks = !0
}
function Ce(a) {
    var b, c, d, e, f, g, h = new V, k;
    for (e = 0; e < a.Bg.length; )
        b = a.Bg[e],
        b.lb &= a.Sp,
        c = b.ic[0],
        -589825 == c.Qa && (b = c.ha[0],
        k = new Gi,
        k.id = b.lL,
        k.cF = e,
        h.add(k),
        b.Dj &= ~(Hi | Ii),
        0 != (b.Dj & Ji) && (b.Dj |= Ii)),
        e++;
    for (e = 0; e < a.Bg.length; ) {
        b = a.Bg[e];
        b.lb &= a.Sp;
        c = b.ic[0];
        if (-589825 == c.Qa && (b = c.ha[0],
        b.Dj &= ~Hi,
        0 != (b.Dj & Ii))) {
            e = Ki(a, e);
            continue
        }
        e++
    }
    for (e = 0; e < a.Bg.length; e++)
        switch (b = a.Bg[e],
        c = b.ic[0],
        c.Qa) {
        case -589825:
        case -655361:
            break;
        default:
            for (b.Pn = 0,
            f = b.Yp = 0; f < b.sd + b.$g; f++)
                if (c = b.ic[f],
                c.Qb = 0 > c.Qa ? c.Qb & Li : c.Qb & ~(1 | Cg),
                0 != c.Ce)
                    for (g = 0; g < c.Ce; g++)
                        switch (d = c.ha[g],
                        d.code) {
                        case 25:
                            d.Ux = 0;
                            break;
                        case 13:
                            d.EK = d.Tp;
                            break;
                        case 39:
                            var m;
                            for (m = 0; m < h.size(); m++)
                                if (k = h.get(m),
                                k.id == d.id) {
                                    d.Ba = k.cF;
                                    break
                                }
                        }
        }
}
function Ki(a, b) {
    var c, d;
    d = a.Bg[b];
    d.lb &= a.Sp;
    d.lb |= Ei;
    b++;
    for (c = !1; ; ) {
        d = a.Bg[b];
        d.lb &= a.Sp;
        d.lb |= Ei;
        d = d.ic[0];
        switch (d.Qa) {
        case -589825:
            d = d.ha[0];
            d.Dj |= Hi;
            b = Ki(a, b);
            continue;
        case -655361:
            c = !0,
            b++
        }
        if (c)
            break;
        b++
    }
    return b
}
function ed(a) {
    0 != a.ks && 0 == a.v.kj && (a.v.Xq = 0)
}
function id(a, b, c) {
    ug(a.v);
    if (null != a.v && 0 == a.v.kj && 0 != a.ks && (2 == c && (b += 256),
    a.v.Xq = 0,
    0 == a.v.Xo)) {
        a.Id = b;
        a.FH = b;
        kd(a, -262150);
        kd(a, -327686);
        c = 0;
        var d, e, f, g, h, k = new V;
        for (b = 0; b < a.v.Sb; b++) {
            for (; null == a.v.U[c]; )
                c++;
            d = a.v.U[c];
            c++;
            e = d.B - d.Ya;
            f = d.A - d.Za;
            g = e + d.aa;
            h = f + d.$;
            if (a.v.Yt >= e && a.v.Yt < g && a.v.Zt >= f && a.v.Zt < h && 0 != (d.Uh & Yg) && 0 == (d.Da & sf))
                if (d.Bb == he)
                    if (0 == (d.ca.Ga & fg)) {
                        e = gg(X(a.Re.xa, d.b.qc), hg, 0, 1, 1);
                        var m = d.b.xc;
                        f = d.b.Kc;
                        g = d.b.Lc;
                        h = Math.floor(a.v.Yt - d.B);
                        var l = Math.floor(a.v.Zt - d.A)
                          , t = h
                          , w = l;
                        if (0 == m) {
                            if (1 != f || 1 != g)
                                t = Math.floor(t / f),
                                w = Math.floor(w / g)
                        } else if (t = 3.141592653589 * m / 180,
                        m = Math.cos(t),
                        w = Math.sin(t),
                        t = h * m - l * w,
                        w = l * m + h * w,
                        1 != f || 1 != g)
                            t /= f,
                            w /= g;
                        t += e.Hb;
                        w += e.Eb;
                        h = Math.floor(t);
                        l = Math.floor(w);
                        e = 0 > h || h >= e.width || 0 > l || l >= e.height ? !1 : 0 != (e.ra[l * e.lineWidth + Math.floor(h / 16)] & 32768 >>> (h & 15)) ? !0 : !1;
                        e && k.add(d)
                    } else
                        k.add(d);
                else
                    k.add(d)
        }
        for (c = 0; c < k.size(); c++)
            d = k.get(c),
            a.LH = d.De,
            kd(a, -393222)
    }
}
function Mi(a, b) {
    a.Hz = null;
    if (0 != (b.lb & vi)) {
        0 != (b.lb & wi) && (a.Tm = new V);
        if (0 != (b.lb & yi)) {
            var c = a.v.se
              , d = b.Pn;
            b.Pn = c;
            if (c == d || c - 1 == d)
                return
        }
        if (0 != (b.lb & zi))
            if (0 != b.Yp)
                b.Yp--;
            else
                return;
        if (0 != (b.lb & xi)) {
            c = a.v.Wm / 10;
            d = b.Yp;
            if (0 != d && c < d)
                return;
            b.Yp = c + b.Pn
        }
    }
    a.Mo++;
    a.No = !1;
    a.Al = 0;
    a.Oo = !0;
    c = 0;
    do
        d = b.ic[c + b.sd],
        0 == (d.Qb & (ti | Dg)) && (d.Qb &= -2,
        d.eg(a.v)),
        c++;
    while (c < b.$g);
    if (a.No) {
        do
            for (a.No = !1,
            a.Al++,
            c = 0; c < b.$g; c++)
                d = b.ic[c + b.sd],
                0 != (d.Qb & 1) && (d.Qb &= -2,
                d.eg(a.v));
        while (a.No)
    }
    c = a.Hz;
    0 != (b.lb & hi) && 0 != (b.lb & Ci) && (c = null);
    a.Hz = null;
    a.Oo = !1;
    if (null != a.Tm && !(1 >= a.Tm.size())) {
        var d = a.v.random(a.Tm.size()), e;
        do
            e = a.v.random(a.Tm.size());
        while (d == e);
        d = a.Tm.get(d);
        e = a.Tm.get(e);
        var f = d.B
          , g = d.A
          , h = e.A;
        Db(d, e.B);
        Eb(d, h);
        Db(e, f);
        Eb(e, g);
        a.Tm = null
    }
    if (a.Dz) {
        a.Dz = !1;
        d = a.v.qx;
        for (e = a.v.rx; ; ) {
            g = f = null;
            for (h = a.v.IH; null != h; ) {
                if (0 > h.index) {
                    (f = h.next) && (qa(h.name, f.name) || (f = null));
                    break
                }
                g = h;
                h = h.next
            }
            if (null == h)
                break;
            h.stop = !1;
            for (h.index = 0; h.index < h.di; h.index++) {
                a.v.qx = h;
                if (a.v.rx = f)
                    f.index = h.index;
                a.Oo = 0;
                pg(a, h.jd[h.index], -2686976);
                if (h.stop)
                    break
            }
            if (f)
                for (f.index = 0; f.index < f.di; f.index++) {
                    a.v.qx = f;
                    if (a.v.rx = h)
                        h.index = f.index;
                    a.Oo = 0;
                    pg(a, f.jd[f.index], -2686976);
                    if (f.stop)
                        break
                }
            f && (h.next = f.next);
            null == g ? a.v.IH = h.next : g.next = h.next
        }
        a.v.qx = d;
        a.v.rx = e
    }
    if (c) {
        e = a.Dv.length;
        d = [];
        if (0 < e)
            for (e = a.Dv[e - 1],
            f = 0; f < e.length; f++) {
                for (var g = e[f], h = new $h(g.lH), k = 0; k < g.mu.length; k++)
                    h.mu.push(g.mu[k]);
                d.push(h)
            }
        e = c.Tc;
        for (f = 0; f < e.length; f += 2)
            if (h = a.v.ta[e[f + 1]],
            h.Mg == a.ce) {
                for (g = 0; g < d.length && d[g].lH != h; g++)
                    ;
                g < d.length ? (g = d[g],
                g.mu.length = 0) : (g = new $h(h),
                d.push(g));
                for (h = h.Jc; 0 <= h; ) {
                    k = a.v.U[h];
                    if (null == k)
                        break;
                    0 == (k.Da & sf) && g.mu.push(h);
                    h = k.je
                }
            }
        a.Dv.push(d);
        zg(a, c.dF, null);
        a.Dv.pop()
    }
}
function zg(a, b, c) {
    var d, e, f;
    a.iC = !1;
    do
        if (e = a.Md[b],
        0 == (e.lb & Ei))
            if (a.pi = e,
            a.wx[0] = 0,
            a.wx[1] = 0,
            a.wx[2] = 0,
            a.wx[3] = 0,
            0 == (e.lb & Ai)) {
                a.ce += 1;
                a.Vm = !1;
                f = 0;
                if (e.ic[f].Bj(a.v, c))
                    for (f++; f < e.sd && 0 != e.ic[f].Ag(a.v); f++)
                        ;
                if (f == e.sd)
                    if (a.iC) {
                        if (null != c) {
                            var g;
                            d = a;
                            f = c;
                            e = f.De;
                            d.ce += 1;
                            fc(d, f);
                            d.Mo++;
                            d.No = !1;
                            d.Al = 0;
                            d.Oo = !0;
                            var h = 0;
                            do {
                                f = d.pi.ic[d.pi.sd + h];
                                g = f.Qa & 4294901760;
                                if (262144 == g || 589824 == g)
                                    if (e == f.Gf)
                                        f.eg(d.v);
                                    else if (g = f.Nd,
                                    0 != (g & 32768)) {
                                        var k = d.oe[g & 32767];
                                        for (g = 0; g < k.bc.length; ) {
                                            if (k.bc[g] == e) {
                                                f.eg(d.v);
                                                break
                                            }
                                            g += 2
                                        }
                                    }
                                h++
                            } while (h < d.pi.$g);
                            d.Oo = !1
                        }
                    } else if (Mi(a, e),
                    0 != (e.lb & hi))
                        break;
                b++
            } else {
                a.sx++;
                if (0 == (e.lb & Di)) {
                    d = !1;
                    do {
                        a.ce++;
                        a.Vm = !1;
                        f = a.Rh[b];
                        0 == e.ic[f].Bj(a.v, c) && (a.Vm = !0);
                        for (f++; f < e.sd && -1507329 != e.ic[f].Qa; )
                            0 == e.ic[f].Ag(a.v) && (a.Vm = !0),
                            f++;
                        Ni(a);
                        0 == a.Vm && (d = !0);
                        b++;
                        e = a.Md[b];
                        if (null == e)
                            break
                    } while (e == a.pi)
                } else {
                    d = a.Vm = !1;
                    do {
                        a.ce++;
                        h = !1;
                        f = a.Rh[b];
                        if (e.ic[f].Bj(a.v, c))
                            for (f++; f < e.sd && -1572865 != e.ic[f].Qa; ) {
                                if (0 == e.ic[f].Ag(a.v)) {
                                    h = !0;
                                    break
                                }
                                f++
                            }
                        else
                            h = !0;
                        0 == h && (Ni(a),
                        d = !0);
                        b++;
                        e = a.Md[b];
                        if (null == e)
                            break
                    } while (e == a.pi)
                }
                if (d && (a.ce++,
                Oi(a),
                e = 0 != (a.pi.lb & hi),
                Mi(a, a.pi),
                e))
                    break
            }
        else if (b++,
        null != a.Md[b])
            for (d = a.Md[b]; d == e; ) {
                b++;
                if (null == a.Md[b])
                    break;
                d = a.Md[b]
            }
    while (null != a.Md[b])
}
function pg(a, b, c) {
    a.zx = c;
    c = a.Pd[b.mA + -(c >> 16)];
    return 0 != c ? (zg(a, c, b),
    !0) : !1
}
function kd(a, b) {
    var c = b & 65535;
    0 != (c & 32768) && (c = 65536 - c);
    c = a.Pd[a.Kh[c] + -(b >> 16)];
    0 != c && zg(a, c, null)
}
function Pi(a, b) {
    for (var c = b.Ho, d; c < b.bc.length; ) {
        d = b.bc[c + 1];
        d = a.v.ta[d];
        if (0 == (d.Fc & 2147483648))
            return b.Ho = c + 2,
            d.Fc;
        c += 2
    }
    return -1
}
function Qi(a, b) {
    b.Ho = 0;
    b.TB = !1;
    return Ri(a, b)
}
function Ri(a, b) {
    for (var c = b.Ho, d; c < b.bc.length; ) {
        d = b.bc[c + 1];
        d = a.v.ta[d];
        if (d.Mg == a.ce && (b.TB = !0,
        0 == (d.Jc & 2147483648)))
            return b.Ho = c + 2,
            d.Jc;
        c += 2
    }
    return -1
}
function Si(a, b) {
    var c, d, e = a.oe[b & 32767];
    if (e.RB != a.Mo) {
        e.RB = a.Mo;
        e.SB = a.Al;
        d = Qi(a, e);
        if (0 <= d) {
            e.gk = d;
            c = a.v.U[d];
            if (null == c)
                return e.Km = 0,
                e.gk = -1,
                null;
            d = c.je;
            if (0 != (d & 2147483648) && (d = Ri(a, e),
            0 > d))
                return e.Km = 1,
                e.ij = !1,
                a.re = !1,
                c;
            e.Lm = d;
            e.Km = 2;
            e.ij = !0;
            a.re = !0;
            return c
        }
        if (a.Nq && e.TB)
            return e.Km = 0,
            e.gk = -1,
            null;
        e.Ho = 0;
        d = Pi(a, e);
        if (0 <= d && (e.gk = d,
        c = a.v.U[d],
        null != c)) {
            d = c.Od;
            if (0 != (d & 2147483648) && (d = Pi(a, e),
            0 != (d & 2147483648)))
                return e.Km = 1,
                e.ij = !1,
                a.re = !1,
                c;
            e.Lm = d;
            e.Km = 3;
            e.ij = !0;
            a.re = !0;
            return c
        }
        e.Km = 0;
        e.gk = -1;
        return null
    }
    if (e.SB != a.Al)
        switch (e.SB = a.Al,
        e.Km) {
        case 0:
            return a.re = e.ij,
            null;
        case 1:
            return c = a.v.U[e.gk],
            a.re = e.ij,
            c;
        case 2:
            return e.gk = e.Lm,
            c = a.v.U[e.Lm],
            null != c && (d = c.je,
            0 != (d & 2147483648) && (d = Ri(a, e),
            0 > d && (e.ij = !1,
            d = Qi(a, e))),
            e.Lm = d),
            a.re = e.ij,
            c;
        case 3:
            return e.gk = e.Lm,
            c = a.v.U[e.Lm],
            null != c && (d = c.Od,
            0 != (d & 2147483648) && (d = Pi(a, e),
            0 != (d & 2147483648) && (e.ij = !1,
            e.Ho = 0,
            d = Pi(a, e))),
            e.Lm = d),
            a.re = e.ij,
            c
        }
    if (0 > e.gk)
        return null;
    c = a.v.U[e.gk];
    a.re = e.ij;
    return c
}
function Ti(a, b) {
    var c, d = a.v.ta[b];
    if (d.xB != a.Mo) {
        d.xB = a.Mo;
        d.yB = a.Al;
        if (d.Mg == a.ce && 0 == (d.Jc & 2147483648)) {
            d.dk = d.Jc;
            c = a.v.U[d.Jc];
            d.Im = c.je;
            if (0 != (c.je & 2147483648))
                return d.ej = !1,
                d.Gm = 1,
                a.re = !1,
                c;
            d.ej = !0;
            d.Gm = 2;
            a.re = !0;
            return c
        }
        if (a.Nq && d.Mg == a.ce)
            return d.Gm = 0,
            d.dk = -1,
            null;
        if (0 == (d.Fc & 2147483648)) {
            d.dk = d.Fc;
            c = a.v.U[d.Fc];
            if (null == c)
                return d.Gm = 0,
                d.dk = -1,
                null;
            if (0 == (c.Od & 2147483648))
                return d.Im = c.Od,
                d.ej = !0,
                d.Gm = 3,
                a.re = !0,
                c;
            d.ej = !1;
            d.Gm = 1;
            a.re = !1;
            return c
        }
        d.Gm = 0;
        d.dk = -1;
        return null
    }
    if (d.yB != a.Al) {
        var e;
        d.yB = a.Al;
        switch (d.Gm) {
        case 0:
            return a.re = d.ej,
            null;
        case 1:
            return c = a.v.U[d.dk],
            a.re = d.ej,
            c;
        case 2:
            d.dk = d.Im;
            c = a.v.U[d.Im];
            if (null == c)
                return null;
            e = c.je;
            0 != (e & 2147483648) && (d.ej = !1,
            e = d.Jc);
            d.Im = e;
            a.re = d.ej;
            return c;
        case 3:
            d.dk = d.Im;
            c = a.v.U[d.Im];
            if (null == c)
                return null;
            e = c.Od;
            0 != (e & 2147483648) && (d.ej = !1,
            e = d.Fc);
            d.Im = e;
            a.re = d.ej;
            return c
        }
    }
    if (0 > d.dk)
        return null;
    c = a.v.U[d.dk];
    a.re = d.ej;
    return c
}
function Ui(a, b) {
    return 0 == (b & 32768) ? Ti(a, b) : Si(a, b)
}
function Ab(a, b) {
    b.Qb &= ~Cg;
    a.Nq = !0;
    var c = Ui(a, b.Nd);
    if (null != c)
        return 0 != a.re && (b.Qb |= 1,
        a.No = !0),
        c;
    b.Qb |= Cg;
    return c
}
function oc(a, b) {
    var c;
    if (a.Oo)
        return a.Nq = !1,
        c = Ui(a, b);
    if (0 == (b & 32768))
        return c = a.v.ta[b],
        c.Mg == a.ce && 0 == (c.Jc & 2147483648) ? a.v.U[c.Jc] : 0 == (c.Fc & 2147483648) ? a.v.U[c.Fc] : null;
    var d = a.oe[b & 32767]
      , e = 0;
    if (e >= d.bc.length)
        return null;
    do {
        c = a.v.ta[d.bc[e + 1]];
        if (c.Mg == a.ce && 0 == (c.Jc & 2147483648))
            return a.v.U[c.Jc];
        e += 2
    } while (e < d.bc.length);
    e = 0;
    do {
        c = a.v.ta[d.bc[e + 1]];
        if (0 == (c.Fc & 2147483648))
            return a.v.U[c.Fc];
        e += 2
    } while (e < d.bc.length);
    return null
}
function Oi(a) {
    var b, c, d, e, f;
    for (e = 0; e < a.v.lh; e++)
        if (f = a.v.ta[e],
        f.zB == a.sx)
            for (f.Mg = a.ce,
            b = f.Fc,
            d = null; 0 == (b & 2147483648); )
                c = a.v.U[b],
                0 != c.pA && (null != d ? d.je = b : f.Jc = b,
                c.je = -1,
                d = c),
                b = c.Od
}
function Ni(a) {
    var b, c, d;
    for (c = 0; c < a.v.lh; c++)
        if (d = a.v.ta[c],
        d.Mg == a.ce) {
            if (d.zB != a.sx)
                for (d.zB = a.sx,
                b = d.Fc; 0 == (b & 2147483648); )
                    b = a.v.U[b],
                    b.pA = 0,
                    b = b.Od;
            for (b = d.Jc; 0 == (b & 2147483648); )
                b = a.v.U[b],
                b.pA = 1,
                b = b.je
        }
}
function fc(a, b) {
    var c = b.$d;
    if (c.Mg != a.ce)
        c.Mg = a.ce,
        c.Jc = b.Pc,
        c.hh = 1,
        b.je = -1;
    else {
        var d = c.Jc;
        if (0 != (d & 2147483648))
            c.Jc = b.Pc,
            c.hh += 1,
            b.je = -1;
        else {
            do {
                if (b.Pc == d)
                    return;
                c = a.v.U[d];
                d = c.je
            } while (0 == (d & 2147483648));
            c.je = b.Pc;
            b.je = -1;
            b.$d.hh += 1
        }
    }
}
function bc(a) {
    --a.ni.$d.hh;
    null != a.Bl ? (a.Bl.je = a.ni.je,
    a.ni = a.Bl) : (a.Po.Jc = a.ni.je,
    a.ni = null)
}
function cc(a) {
    var b = a.ni, c;
    if (null == b && (c = a.v.ta[a.Xt],
    0 == (c.Jc & 2147483648)))
        return b = a.v.U[c.Jc],
        a.Bl = null,
        a.Po = c,
        a.ni = b;
    if (null != b && 0 == (b.je & 2147483648))
        return a.Bl = b,
        a.Po = null,
        b = a.v.U[b.je],
        a.ni = b;
    if (null == a.lk)
        return null;
    do {
        a.mk += 2;
        if (a.mk >= a.lk.bc.length)
            return null;
        c = a.v.ta[a.lk.bc[a.mk + 1]]
    } while (0 != (c.Jc & 2147483648));
    a.Bl = null;
    a.Po = c;
    b = a.v.U[c.Jc];
    a.ni = b;
    a.Xt = a.lk.bc[a.mk + 1];
    return b
}
function ac(a, b) {
    var c;
    a.Rn = 0;
    a.lk = null;
    a.mk = -1;
    if (0 != (b & 32768)) {
        if (32767 == (b & 32767))
            c = null;
        else {
            for (var d, e, f = c = 0, g = a.oe[b & 32767]; f < g.bc.length; ) {
                e = g.bc[f + 1];
                e = a.v.ta[e];
                if (e.Mg == a.ce)
                    d = 0,
                    0 == (e.Jc & 2147483648) && (d = e.hh,
                    null == a.lk && (a.lk = g,
                    a.mk = f));
                else if (d = 0,
                e.Mg = a.ce,
                a.Vm)
                    e.Jc = -1,
                    e.hh = 0;
                else if (e.Jc = e.Fc,
                0 != (e.Fc & 2147483648))
                    e.hh = 0;
                else {
                    null == a.lk && (a.lk = g,
                    a.mk = f);
                    d = e.Fc;
                    do
                        d = a.v.U[d],
                        d = d.je = d.Od;
                    while (0 == (d & 2147483648));
                    d = e.hh = e.Hm
                }
                c += d;
                f += 2
            }
            g = a.lk;
            null != g ? (e = a.v.ta[g.bc[a.mk + 1]],
            a.Bl = null,
            a.Po = e,
            d = a.v.U[e.Jc],
            a.ni = d,
            a.Xt = g.bc[a.mk + 1],
            a.Rn = c,
            c = d) : c = null
        }
        return c
    }
    f = a.v.ta[b];
    if (f.Mg == a.ce) {
        if (0 != (f.Jc & 2147483648))
            return null;
        c = a.v.U[f.Jc];
        a.Bl = null;
        a.Po = f;
        a.ni = c;
        a.Xt = b
    } else {
        f.Mg = a.ce;
        if (a.Vm)
            return f.Jc = -1,
            f.hh = 0,
            null;
        f.Jc = f.Fc;
        if (0 != (f.Fc & 2147483648))
            return f.hh = 0,
            null;
        g = f.Fc;
        do
            c = a.v.U[g],
            g = c.Od,
            c.je = g;
        while (0 == (g & 2147483648));
        c = a.v.U[f.Fc];
        a.Bl = null;
        a.Po = f;
        a.ni = c;
        a.Xt = b;
        f.hh = f.Hm
    }
    a.Rn = f.hh;
    return c
}
var ui = 1
  , yi = 2
  , zi = 4
  , xi = 8
  , wi = 16
  , Fi = 64
  , hi = 128
  , Ai = 1024
  , gc = 2048
  , Di = 4096
  , Ei = 16384
  , Ci = 32768
  , vi = wi + yi + zi + xi
  , di = 8448 + Fi + Ci;
function fi() {
    this.Yp = this.Pn = this.lb = this.$g = this.sd = 0;
    this.ic = null;
    this.XK = 0
}
var Dg = 8
  , Cg = 16
  , Bi = 32
  , ti = 128
  , Li = Bi + 1 + 4 + Dg + Cg
  , Zb = 1;
function Gi() {
    this.cF = this.id = 0
}
function ei() {
    this.ax = this.$w = 0
}
function wb(a, b, c, d, e) {
    this.cN = a;
    this.code = b;
    this.zM = c;
    this.yM = d;
    this.Cm = e
}
function si() {
    this.SB = this.RB = this.Km = this.Ho = this.Lm = this.gk = 0;
    this.TB = this.ij = !1;
    this.bc = null
}
var Eg = 0;
var lh = 0;
function Vi() {
    this.Ys = this.LF = this.AA = this.kw = this.jw = this.Xh = this.pm = 0;
    this.zA = null;
    this.zA = Array(4);
    var a;
    for (a = 0; 4 > a; a++)
        this.zA[a] = null
}
Vi.prototype = {
    load: function(a) {
        this.pm = S(a);
        this.Xh = S(a);
        this.jw = D(a);
        this.kw = D(a);
        this.AA = S(a);
        S(a);
        this.LF = S(a);
        T(a, 2)
    },
    Ef: function(a, b) {
        this.zA[a] = b
    }
};
function de() {
    this.vb = this.list = null;
    this.iw = this.dj = 0
}
de.prototype = {
    load: function(a) {
        this.dj = D(a.file);
        this.list = Array(this.dj);
        var b, c = 0;
        for (b = 0; b < this.dj; b++)
            this.list[b] = new Vi,
            this.list[b].load(a.file),
            this.list[b].pm + 1 > c && (c = this.list[b].pm + 1),
            this.list[b].Ys = Fd(a.ze, this.list[b].Xh).Gh;
        this.vb = Array(c);
        for (b = 0; b < this.dj; b++)
            this.vb[this.list[b].pm] = b
    }
};
function jh(a) {
    a.iw = 0;
    return kh(a)
}
function kh(a) {
    var b;
    if (a.iw < a.dj) {
        do
            if (b = a.list[a.iw++],
            2 <= b.Ys)
                return b;
        while (a.iw < a.dj)
    }
    return null
}
var Vf = 1
  , Wf = 2
  , Yf = 32
  , Xf = 64
  , Ae = 131072;
function ge(a) {
    this.app = a;
    this.Nn = this.Mn = this.kx = this.jx = this.y = this.x = 0;
    this.iv = this.vl = this.Fq = null;
    this.Zg = !1;
    this.Eo = null;
    this.aE = this.$D = this.cE = this.bE = this.ZD = this.zg = this.yg = this.zt = this.xt = this.mr = this.lr = this.sb = this.lB = 0;
    this.Db = this.kd = this.Td = null;
    this.angle = 0;
    this.scale = this.Vd = this.Wd = 1;
    this.Hb = this.Au = 320;
    this.Eb = this.Eu = 240
}
ge.prototype = {
    load: function(a) {
        this.sb = D(a);
        this.lr = Ua(a);
        this.mr = Ua(a);
        this.xt = D(a);
        this.zt = D(a);
        a.bd();
        this.ZD = this.sb;
        this.bE = this.lr;
        this.cE = this.mr;
        this.$D = this.xt;
        this.aE = this.zt
    },
    reset: function() {
        this.sb = this.ZD;
        this.lr = this.bE;
        this.mr = this.cE;
        this.xt = this.$D;
        this.zt = this.aE;
        this.x = this.y = this.Mn = this.Nn = this.jx = this.kx = 0;
        this.iv = this.Eo = this.vl = this.Fq = null;
        this.zC(0);
        this.scale = 1;
        ie(this);
        je(this);
        ke(this, this.app.bb / 2);
        le(this, this.app.ib / 2);
        me(this, this.app.bb / 2);
        ne(this, this.app.ib / 2);
        oe(this);
        this.sb & Ae ? (this.Zg = !0,
        this.Xv()) : (this.Zg = !1,
        this.show())
    },
    hv: function(a) {
        null == this.iv && (this.iv = new V);
        this.iv.add(a)
    },
    zC: function(a) {
        this.angle = a;
        this.Td.angle = a;
        this.kd.angle = a;
        this.Db.angle = a
    },
    Xv: function() {
        this.sb &= ~Ae;
        this.Zg && (this.Td.visible = !1,
        this.kd.visible = !1,
        this.Zg = this.Db.visible = !1)
    },
    show: function() {
        0 == this.Zg && (this.Td.visible = !0,
        this.kd.visible = !0,
        this.Zg = this.Db.visible = !0)
    },
    cn: function(a, b, c, d, e) {
        b = b + this.x - a.Hb;
        c = c + this.y - a.Eb;
        var f = b + a.width
          , g = c + a.height
          , h = c;
        0 != d && (h = g - d);
        var k, m;
        m = e == Wi ? this.Fq : this.vl;
        if (null == m)
            return null;
        for (e = 0; e < m.size(); e++)
            if (k = m.get(e),
            k.x < f && k.x + k.width > b && k.y < g && k.y + k.height > h && k.cn(a, b, c, d))
                return k;
        return null
    },
    Ox: function(a, b, c, d, e, f) {
        f = f == Wi ? this.Fq : this.vl;
        if (null == f)
            return null;
        a += this.x;
        b += this.y;
        c += this.x;
        d += this.y;
        0 != e && (b = d - e);
        for (e = 0; e < f.size(); e++) {
            var g = f.get(e);
            if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.Ox(a, b, c, d))
                return g
        }
        return null
    }
};
function Td(a) {
    null != a.Td && (a.app.Ig.removeChild(a.Td),
    a.Td = null);
    null != a.kd && (a.app.Ig.removeChild(a.kd),
    a.kd = null);
    null != a.Db && (a.app.Ig.removeChild(a.Db),
    a.Db = null)
}
function oe(a) {
    a.yj = !1;
    a.Td.yj = !1;
    a.kd.yj = !1;
    a.Db.yj = !1
}
function ne(a, b) {
    b = a.app.ib - b;
    a.Eu = b;
    a.Td.Eu = b;
    a.kd.Eu = b;
    a.Db.Eu = b
}
function me(a, b) {
    b = a.app.bb - b;
    a.Au = b;
    a.Td.Au = b;
    a.kd.Au = b;
    a.Db.Au = b
}
function le(a, b) {
    a.Eb = b;
    a.Td.Eb = b;
    a.kd.Eb = b;
    a.Db.Eb = b
}
function ke(a, b) {
    a.Hb = b;
    a.Td.Hb = b;
    a.kd.Hb = b;
    a.Db.Hb = b
}
function je(a) {
    a.Wd = 1;
    a.Td.Wd = 1;
    a.kd.Wd = 1;
    a.Db.Wd = 1
}
function ie(a) {
    a.Vd = 1;
    a.Td.Vd = 1;
    a.kd.Vd = 1;
    a.Db.Vd = 1
}
function $f(a, b, c, d, e, f) {
    this.app = a;
    this.JL = d;
    this.ei = this.type = 0;
    this.x = b;
    this.y = c;
    this.height = this.width = 0;
    this.Ng = null;
    this.Np = !1;
    this.nf = null;
    this.borderWidth = 0;
    this.borderColor = this.Kz = this.Fn = null;
    this.zg = this.yg = 0;
    this.O = this.body = null;
    if (d)
        if (this.Ng = Fd(this.app.ze, d.Xh),
        this.type = this.Ng.Gh,
        this.ei = this.Ng.Gd.qB,
        this.borderWidth = this.Ng.Gd.Lw,
        this.zF = this.Ng.Gd.Gt,
        this.yg = this.Ng.uB,
        this.zg = this.Ng.vB,
        this.width = this.Ng.Gd.oB,
        this.height = this.Ng.Gd.pB,
        this.Np = 0 != this.Ng.Gd.WG,
        this.Fn = this.Ng.Gd.$j,
        this.Kz = this.Ng.Gd.Bq,
        this.borderColor = this.Ng.Gd.Kw,
        1 == this.type)
            this.nf = X(this.app.xa, this.Ng.Gd.ak),
            this.width = this.nf.width,
            this.height = this.nf.height;
        else {
            if (32 <= this.type) {
                a = this.app.Y;
                b = null;
                for (e = c = 0; e < a.Sb; e++) {
                    for (; null == a.U[c]; )
                        c++;
                    b = a.U[c];
                    c++;
                    if (b.LL == d)
                        break
                }
                this.O = b
            }
        }
    else {
        this.type = Xi;
        this.nf = e;
        this.width = this.nf.width;
        this.height = this.nf.height;
        this.x -= this.nf.Hb;
        this.y -= this.nf.Eb;
        switch (f) {
        case 0:
            this.ei = ag.YI;
            break;
        case 1:
            this.ei = ag.vp;
            break;
        case 2:
            this.ei = ag.uj;
            break;
        case 3:
            this.ei = ag.qD
        }
        this.Np = !1
    }
}
$f.prototype = {
    Oc: function(a, b, c) {
        if (null != this.JL)
            if (this.type == Yi) {
                var d = this.Ng.Gd, e;
                switch (d.ym) {
                case 1:
                    switch (d.nl) {
                    case 1:
                        a.Vf(b + this.x, c + this.y, this.width, this.height, this.Fn, this.yg, this.zg);
                        break;
                    case 2:
                        a.qe(b + this.x, c + this.y, this.width, this.height, this.Fn, this.yg, this.zg);
                        break;
                    case 3:
                        a.fC(b + this.x, c + this.y, this.width, this.height, this.Fn, this.yg, this.zg)
                    }
                    break;
                case 2:
                    switch (d.nl) {
                    case 1:
                        a.Vf(b + this.x, c + this.y, this.width, this.height, this.Fn, this.yg, this.zg);
                        break;
                    case 2:
                        a.eC(b + this.x, c + this.y, this.width, this.height, this.Fn, this.Kz, 0 != this.zF, this.yg, this.zg);
                        break;
                    case 3:
                        a.CH(b + this.x, c + this.y, this.width, this.height, this.Fn, this.Kz, 0 != this.zF, this.yg, this.zg)
                    }
                    break;
                case 3:
                    switch (d.nl) {
                    case 2:
                        e = X(this.app.xa, d.ak);
                        a.DH(e, b + this.x, c + this.y, this.width, this.height, this.yg, this.zg);
                        break;
                    case 3:
                        e = X(this.app.xa, d.ak),
                        a.EH(e, b + this.x, c + this.y, this.width, this.height, this.yg, this.zg)
                    }
                }
                if (0 < this.borderWidth)
                    switch (d.nl) {
                    case 1:
                        var f = e = 0
                          , g = this.width
                          , h = this.height;
                        0 != (d.Ht & Zi) && (e += g,
                        g = -g);
                        0 != (d.Ht & $i) && (f += h,
                        h = -h);
                        a.Vf(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + h, this.borderColor, this.borderWidth);
                        break;
                    case 2:
                        a.lx(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
                        break;
                    case 3:
                        a.BH(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
                    }
            } else
                this.type == aj ? a.tf(this.nf, b + this.x + this.nf.Hb, c + this.y + this.nf.Eb, 0, 1, 1, this.yg, this.zg) : null != this.O && this.O.Oc(a, b, c);
        else
            a.tf(this.nf, b + this.x + this.nf.Hb, c + this.y + this.nf.Eb, 0, 1, 1, this.yg, this.zg)
    },
    TH: function(a, b) {
        this.yg = a;
        this.zg = b
    },
    Ef: function(a, b) {
        pe(b.Td, this);
        this.type == Xi && b.hv(this);
        switch (this.ei) {
        case ag.vp:
            null == b.Fq && (b.Fq = new V);
            b.Fq.add(this);
            null == b.vl && (b.vl = new V);
            b.vl.add(this);
            break;
        case ag.uj:
            null == b.vl && (b.vl = new V);
            b.vl.add(this);
            break;
        case ag.qD:
            var c = this.y
              , d = this.x + this.width
              , e = this.y + this.height
              , f = new sa;
            f.left = this.x;
            f.top = c;
            f.right = d;
            f.bottom = e;
            null == b.Eo && (b.Eo = new V);
            b.Eo.add(f)
        }
    },
    cn: function(a, b, c, d) {
        var e;
        switch (this.type) {
        case 0:
            return e = this.height,
            this.ei == ag.uj && (e = 6),
            bj(a, b, c, d, this.x, this.y, this.width, e);
        case 1:
            if (0 != this.Np)
                return !0;
            e = hg;
            this.ei == ag.uj && (e = Oh);
            e = gg(this.nf, e, 0, 1, 1);
            return a.cn(b, c, d, e, this.x, this.y, 0);
        case 11:
            if (0 != this.Np)
                return !0;
            e = hg;
            this.ei == ag.uj && (e = Oh);
            e = gg(this.nf, e, 0, 1, 1);
            return a.cn(b, c, d, e, this.x, this.y, 0)
        }
        return !1
    },
    Ox: function(a, b, c, d) {
        var e;
        switch (this.type) {
        case 0:
            if (this.ei == ag.uj) {
                a = this.y + Math.min(this.height, 6);
                if (this.y < d && a > b)
                    return !0;
                break
            }
            return !0;
        case 1:
            if (0 != this.Np)
                return !0;
            e = hg;
            this.ei == ag.uj && (e = Oh);
            e = gg(this.nf, e, 0, 1, 1);
            return bj(e, this.x, this.y, 0, a, b, c, d);
        case 11:
            if (0 != this.Np)
                return !0;
            e = hg;
            this.ei == ag.uj && (e = Oh);
            e = gg(this.nf, e, 0, 1, 1);
            return bj(e, this.x, this.y, 0, a, b, c, d)
        }
        return !1
    }
};
var Gd = 4
  , bi = 7
  , yg = -7
  , Bg = -4
  , Ag = -3
  , Yi = 0
  , aj = 1
  , he = 2
  , Hd = 3
  , mh = 4
  , tb = 5
  , xb = 6
  , Id = 7
  , lg = 9
  , Xi = 11
  , ci = 10
  , nh = 32
  , ri = 32768;
function cj() {
    this.vB = this.uB = this.rl = this.Gh = this.It = 0;
    this.Gd = this.wB = null;
    this.bH = this.aH = 0
}
cj.prototype = {
    BA: function(a) {
        this.It = S(a);
        this.Gh = S(a);
        this.rl = S(a);
        T(a, 2);
        this.uB = D(a);
        this.vB = D(a)
    },
    load: function(a) {
        a.seek(this.aH);
        switch (this.Gh) {
        case 0:
            this.Gd = new dj;
            break;
        case 1:
            this.Gd = new ej;
            break;
        default:
            this.Gd = new fj
        }
        this.Gd.load(a, this.Gh);
        this.bH = 0
    },
    Zd: function(a, b) {
        this.Gd.Zd(a, b)
    }
};
function Ec() {
    this.ck = this.Tc = this.Em = 0;
    this.Dm = this.Jt = this.sl = null;
    this.Jv = 0
}
Ec.prototype = {
    wl: function(a) {
        this.Em = D(a);
        this.Tc = Array(this.Em);
        var b;
        for (b = this.ck = 0; b < this.Em; b++)
            for (var c = 0, d; 32639 != c; )
                if (c = S(a),
                S(a),
                d = D(a),
                0 != d) {
                    d = a.Ba + d;
                    switch (c) {
                    case 17476:
                        this.Tc[b] = new cj;
                        this.Tc[b].BA(a);
                        this.Tc[b].It >= this.ck && (this.ck = this.Tc[b].It + 1);
                        break;
                    case 17477:
                        this.Tc[b].wB = a.bd();
                        break;
                    case 17478:
                        this.Tc[b].aH = a.Ba
                    }
                    a.seek(d)
                }
        this.sl = Array(this.ck);
        for (b = 0; b < this.Em; b++)
            this.sl[this.Tc[b].It] = b;
        this.Jt = Array(this.ck);
        this.Dm = Array(this.ck);
        for (a = 0; a < this.ck; a++)
            this.Jt[a] = 0,
            this.Dm[a] = 0
    },
    mi: function() {
        var a;
        for (a = 0; a < this.ck; a++)
            this.Jt[a] = 0
    },
    bn: function(a) {
        this.Jt[a] = 1
    },
    load: function(a) {
        var b;
        for (b = 0; b < this.ck; b++)
            if (0 != this.Jt[b]) {
                if (0 == this.Dm[b] || 0 != this.Dm[b] && 0 != (this.Tc[this.sl[b]].bH & 32))
                    this.Tc[this.sl[b]].load(a),
                    this.Dm[b] = 1
            } else
                0 != this.Dm[b] && (this.Tc[this.sl[b]].Gd = null,
                this.Dm[b] = 0);
        this.mi()
    },
    Zd: function(a, b) {
        var c;
        for (c = 0; c < this.ck; c++)
            0 != this.Dm[c] && this.Tc[this.sl[c]].Zd(a, b)
    }
};
function rh(a) {
    if (a.Jv < a.Em) {
        var b;
        for (b = a.Jv + 1; b < a.Em; b++)
            if (0 != (a.Tc[b].rl & 16))
                return a.Jv = b,
                a.Tc[b]
    }
    return null
}
function qh(a) {
    var b;
    for (b = 0; b < a.Em; b++)
        if (0 != (a.Tc[b].rl & 16))
            return a.Jv = b,
            a.Tc[b];
    return null
}
function Fd(a, b) {
    return a.Tc[a.sl[b]]
}
ag.YI = 0;
ag.vp = 1;
ag.uj = 2;
ag.qD = 3;
ag.nO = 4;
function ag() {}
function ej() {
    this.ak = 0
}
ej.prototype = {
    load: function(a) {
        T(a, 4);
        this.qB = S(a);
        this.WG = S(a);
        this.oB = D(a);
        this.pB = D(a);
        this.ak = S(a)
    },
    Zd: function(a) {
        null != a && (a = a.Vk(this.ak),
        -1 != a && (this.ak = a))
    }
};
var Zi = 1
  , $i = 2;
function dj() {
    this.ak = this.Gt = this.Bq = this.$j = this.Ht = this.ym = this.nl = this.Kw = this.Lw = 0
}
dj.prototype = {
    load: function(a) {
        T(a, 4);
        this.qB = S(a);
        this.WG = S(a);
        this.oB = D(a);
        this.pB = D(a);
        this.Lw = S(a);
        this.Kw = Va(a);
        this.nl = S(a);
        this.ym = S(a);
        if (1 == this.nl)
            this.Ht = S(a);
        else
            switch (this.ym) {
            case 1:
                this.$j = this.Bq = Va(a);
                break;
            case 2:
                this.$j = Va(a);
                this.Bq = Va(a);
                this.Gt = D(a);
                break;
            case 3:
                this.ak = S(a)
            }
    },
    Zd: function(a) {
        3 == this.ym && null != a && (a = a.Vk(this.ak),
        -1 != a && (ocImage = a))
    }
};
var oh = 8
  , tf = 16
  , Zg = 32
  , gh = 256
  , $g = 512
  , Zf = 2048
  , pi = 4096
  , Xg = 16384
  , Wg = 32768
  , ph = 131072
  , Ih = 1048576
  , Mg = 8
  , Jh = 64;
fj.prototype = ag;
function fj() {
    this.bk = 0;
    this.rB = null;
    this.Le = this.zm = 0;
    this.af = this.wc = this.xm = this.Am = this.ol = this.fi = null;
    this.YG = this.ZG = this.XG = 0;
    this.Ft = this.Cq = null
}
fj.prototype = {
    load: function(a, b) {
        var c = a.Ba;
        this.rB = Array(8);
        var d;
        T(a, 4);
        T(a, 2);
        var e = S(a);
        T(a, 2);
        var f = S(a)
          , g = S(a)
          , h = S(a);
        this.bk = D(a);
        for (d = 0; 8 > d; d++)
            this.rB[d] = F(a);
        S(a);
        var k = S(a)
          , m = S(a);
        this.zm = S(a);
        var l = S(a);
        this.Le = D(a);
        Va(a);
        d = D(a);
        var t = D(a);
        this.Ft = this.Cq = null;
        0 != h && (a.seek(c + h),
        this.fi = new gj,
        this.fi.load(a));
        0 != k && (a.seek(c + k),
        this.ol = new hj,
        this.ol.load(a, 0 != (this.zm & 128)));
        0 != m && (a.seek(c + m),
        this.Am = new ij,
        this.Am.load(a));
        0 != g && (a.seek(c + g),
        this.xm = new Ah,
        this.xm.load(a));
        0 != f && (a.seek(c + f),
        this.af = new jj,
        this.af.load(a));
        0 != l && (a.seek(c + l),
        f = D(a),
        T(a, 4),
        this.ZG = D(a),
        D(a),
        this.YG = D(a),
        0 != f - 20 && (this.XG = a.Ba));
        0 != d && (a.seek(c + d),
        this.Cq = new fe,
        this.Cq.load(a));
        0 != t && (a.seek(c + t),
        this.Ft = new fe,
        this.Ft.load(a));
        if (0 != e)
            switch (a.seek(c + e),
            b) {
            case 3:
            case 4:
                this.af = new kj;
                this.af.load(a);
                break;
            case 5:
            case 6:
            case 7:
                this.wc = new lj;
                this.wc.load(a);
                break;
            case 8:
                this.af = new mj;
                this.af.load(a);
                this.bk &= ~($g | pi | 4);
                break;
            case 9:
                this.af = new nj,
                this.af.load(a)
            }
    },
    Zd: function(a, b) {
        null != this.xm && this.xm.Zd(a);
        null != this.af && this.af.Zd(a, b);
        null != this.wc && this.wc.Zd(a, b)
    }
};
function nj() {
    this.jg = this.$G = this.ql = this.pl = 0;
    this.sB = null
}
nj.prototype = {
    load: function(a) {
        T(a, 4);
        this.pl = D(a);
        this.ql = D(a);
        S(a);
        this.$G = S(a);
        this.jg = D(a);
        T(a, 8);
        this.sB = a.bd()
    },
    Zd: function() {}
};
function jj() {
    this.CE = this.DE = this.BE = 0
}
jj.prototype = {
    load: function(a) {
        T(a, 2);
        this.BE = D(a);
        this.DE = D(a);
        this.CE = D(a)
    },
    Zd: function() {}
};
function lj() {
    this.vq = this.Gt = this.Bq = this.$j = this.Ht = this.ym = this.nl = this.Kw = this.Lw = this.Bm = this.Ao = this.gi = this.tB = this.ql = this.pl = 0;
    this.frames = null
}
lj.prototype = {
    load: function(a) {
        T(a, 4);
        this.pl = D(a);
        this.ql = D(a);
        this.tB = S(a);
        this.gi = S(a);
        this.Ao = S(a);
        this.Bm = S(a);
        switch (this.gi) {
        case 1:
        case 4:
            this.vq = S(a);
            this.frames = Array(this.vq);
            var b;
            for (b = 0; b < this.vq; b++)
                this.frames[b] = S(a);
            break;
        case 2:
        case 3:
        case 5:
            if (this.Lw = S(a),
            this.Kw = Va(a),
            this.nl = S(a),
            this.ym = S(a),
            1 == this.nl)
                this.Ht = S(a);
            else
                switch (this.ym) {
                case 1:
                    this.$j = Va(a);
                    break;
                case 2:
                    this.$j = Va(a),
                    this.Bq = Va(a),
                    this.Gt = D(a)
                }
        }
    },
    Zd: function(a, b) {
        switch (this.gi) {
        case 1:
        case 4:
            var c;
            for (c = 0; c < this.vq; c++)
                null != a && a.Vk(this.frames[c]);
            break;
        case 5:
            null != b && b.Vk(this.Bm)
        }
    }
};
function mj() {
    this.ql = this.pl = this.jg = 0;
    this.text = null
}
mj.prototype = {
    load: function(a) {
        D(a);
        D(a);
        this.jg = D(a);
        Va(a);
        this.pl = D(a);
        this.ql = D(a);
        T(a, 4);
        var b = D(a);
        this.text = a.bd(b)
    },
    Zd: function() {}
};
function oj() {
    this.JC = this.wu = this.hr = 0;
    this.Fl = null
}
oj.prototype = {
    load: function(a) {
        this.hr = F(a);
        this.wu = S(a);
        this.JC = Va(a);
        this.Fl = a.bd()
    },
    Zd: function(a, b) {
        null != b && b.Vk(this.hr)
    }
};
function kj() {
    this.Do = this.KB = this.JB = 0;
    this.Ad = null
}
kj.prototype = {
    load: function(a) {
        var b = a.Ba;
        T(a, 4);
        this.JB = D(a);
        this.KB = D(a);
        this.Do = D(a);
        this.Ad = Array(this.Do);
        var c = Array(this.Do), d;
        for (d = 0; d < this.Do; d++)
            c[d] = D(a);
        for (d = 0; d < this.Do; d++)
            this.Ad[d] = new oj,
            a.seek(b + c[d]),
            this.Ad[d].load(a)
    },
    Zd: function(a, b) {
        var c;
        for (c = 0; c < this.Do; c++)
            this.Ad[c].Zd(a, b)
    }
};
var sf = 1
  , Hh = 16
  , Ig = 64
  , jg = 8192;
function Ng() {
    this.je = this.Pc = 0;
    this.c = null;
    this.bq = this.Bb = this.Od = this.Gj = this.De = this.km = 0;
    this.$d = null;
    this.mA = 0;
    this.Yv = this.BF = null;
    this.$v = this.eq = 0;
    this.ma = this.cq = null;
    this.oL = this.Uh = this.Dg = this.pA = this.Da = this.mb = this.$ = this.aa = this.Za = this.Ya = this.A = this.Fj = this.B = this.Ej = 0;
    this.Zv = !1;
    this.ca = this.za = this.cb = this.L = this.b = null
}
Ng.prototype = {
    Jx: function(a, b) {
        if (this.b.Kc != a || this.b.Lc != b) {
            0 <= a && (this.b.Kc = a);
            0 <= b && (this.b.Lc = b);
            this.b.la = !0;
            var c = Kh(this.c.m.xa, this.b.qc, this.b.xc, this.b.Kc, this.b.Lc);
            null != c && (this.aa = c.width,
            this.$ = c.height,
            this.Ya = c.Hb,
            this.Za = c.Eb)
        }
    },
    ya: function() {},
    handle: function() {},
    Pk: function() {},
    zE: function() {},
    display: function() {},
    ed: function() {},
    hL: function() {
        return null
    },
    TH: function() {},
    Qy: function() {},
    yp: function() {},
    gm: function() {
        return 0
    },
    bp: function() {},
    Yn: function() {},
    dr: function() {},
    mf: function() {
        return -1
    },
    aq: function() {
        return 0
    },
    nh: function() {},
    Zl: function() {},
    Zp: function() {}
};
function Og() {
    this.DC = !1;
    this.Eg = null;
    this.gb = !1;
    this.jl = 0;
    this.Ta = null;
    this.Zg = !0;
    this.Wd = this.Vd = 1;
    this.y = this.x = this.angle = 0;
    this.gp = null
}
Og.prototype = p(new Ng, {
    handle: function() {
        this.ca.handle();
        this.b.la && (this.b.la = !1)
    },
    Qy: function(a, b, c, d, e) {
        this.jl = d;
        this.Ta = this.c.J.Lb[d];
        this.gb = e;
        pe(this.Ta.Db, this)
    },
    Oc: function(a, b, c) {
        if (this.gb && (0 == (this.Da & 8) || this.ca.sk)) {
            var d = this.ca.Ne;
            this.ca.Ga & pj && (d |= qj);
            var e = X(this.c.m.xa, this.b.qc);
            e && (this.gp ? a.Rm(this.gp, b + this.B - this.c.Ma + this.Ta.x - e.Hb, c + this.A - this.c.Ra + this.Ta.y - e.Eb, this.gp.width * this.b.Kc, this.gp.height * this.b.Lc, d, this.ca.ue) : a.tf(e, b + this.B - this.c.Ma + this.Ta.x, c + this.A - this.c.Ra + this.Ta.y, this.b.xc, this.b.Kc, this.b.Lc, d, this.ca.ue))
        }
    },
    gm: function() {
        return this.Ta.Db.removeChild(this)
    },
    bp: function() {
        this.gb = !0
    },
    Yn: function() {
        this.gb = !1
    },
    mf: function() {
        return this.Ta.Db.mf(this)
    },
    aq: function() {
        return this.Ta.Db.children.length
    },
    nh: function(a) {
        a >= this.Ta.Db.children.length && (a = this.Ta.Db.children.length);
        0 > a && (a = 0);
        this.Ta.Db.nh(this, a)
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    }
});
var ae = 1
  , Zd = 2
  , $d = 4
  , xg = 524288
  , ee = 2097152;
function Ug() {
    this.jg = this.fa = 0;
    this.M = null;
    this.IB = this.HB = 0;
    this.fH = this.level = -1;
    this.fw = null;
    this.Zg = !0
}
Ug.prototype = p(new Ng, {
    XH: function(a, b, c) {
        b = a.af;
        this.aa = b.pl;
        this.$ = b.ql;
        this.jg = b.jg;
        0 != (this.jg & 16) && (this.jg |= 65536);
        -1 == c && (c = 0,
        0 != (this.jg & 16384) && (c = b.$G));
        if (null != b.sB && 0 == b.sB.length && 0 != (this.jg & 16384) && !(c >= this.c.m.Ni) && c != this.c.m.wh) {
            this.Zg = 0 != (a.zm & Mg) ? !0 : !1;
            this.Ae = new Oc;
            this.Ae.x = this.B - this.c.Ma;
            this.Ae.y = this.A - this.c.Ra;
            pe(this.c.m.Ig, this);
            this.HB = this.B;
            this.IB = this.A;
            a = this.M = new Dc(this.c.m,this.c.m.file,this.c.m.path,!0);
            b = this.jg;
            var d = this.Ae
              , e = this.aa
              , f = this.$;
            a.kb = this.c.m;
            a.Jm = b;
            a.Ig = d;
            a.Mx = c;
            a.Qw = e;
            a.Pw = f;
            this.M.digest();
            0 != (this.jg & 4096) && null == this.c.m.Zi && (this.c.m.Zi = this,
            this.c.m.Y.pause());
            Bc(this.M);
            c = this.M;
            a = (this.c.m.rj + this.Ae.y) * this.c.m.Wd;
            c.pj = (this.c.m.pj + this.Ae.x) * this.c.m.Vd;
            c.rj = a;
            Yd(this.M);
            this.c.m.dc.push(this.M)
        }
    },
    ya: function(a) {
        this.XH(a, !0, -1)
    },
    handle: function() {
        this.L.move();
        if (null != this.M) {
            if (this.HB != this.B || this.IB != this.A) {
                this.Ae.x = this.B - this.c.Ma;
                this.Ae.y = this.A - this.c.Ra;
                this.HB = this.B;
                this.IB = this.A;
                var a = this.M
                  , b = this.Ae.y * this.c.m.Wd;
                a.pj = this.Ae.x * this.c.m.Vd;
                a.rj = b;
                this.ON()
            }
            0 == Yd(this.M) ? (this.Lv(),
            0 != (this.jg & 4096) && null != this.M.kb && this.M.kb.Zi == this && (this.M.kb.Zi = null,
            this.M.kb.Y.resume()),
            this.M = null) : (this.fH = this.level,
            this.level = this.M.wh)
        }
    },
    Oc: function() {
        this.Zg && null != this.M && Xd(this.M, this.Ae.x, this.Ae.y)
    },
    ed: function() {
        if (null != this.M) {
            switch (this.M.gc) {
            case 3:
                Dd(this.M)
            }
            this.Lv();
            Vd(this.M);
            0 != (this.jg & 4096) && null != this.M.kb && this.M.kb.Zi == this && (this.M.kb.Zi = null,
            this.M.kb.Y.resume());
            this.M = null
        }
    },
    Lv: function() {
        var a;
        for (a = 0; a < this.c.m.dc.length; a++)
            if (this.c.m.dc[a] == this.M) {
                this.c.m.dc.splice(a, 1);
                break
            }
        this.c.m.Ig.removeChild(this.Ae)
    },
    oQ: function() {
        if (null != this.M) {
            if (null != this.M.Y) {
                this.M.Y.Uc = 4;
                return
            }
            this.ed(!0)
        }
        this.XH(this.ma, !1, -1)
    },
    jP: function() {
        null != this.M && (null != this.M.Y && (this.M.Y.Uc = Ed),
        0 != (this.jg & 4096) && null != this.M.kb && this.M.kb.Zi == this && (this.M.kb.Zi = null,
        this.M.kb.Y.resume()))
    },
    Xv: function() {
        this.Zg = !1
    },
    show: function() {
        this.Zg = !0
    },
    FP: function(a) {
        null != this.M && null != this.M.Y && 0 <= a && 4096 > a && (this.M.Y.Uc = pb,
        this.M.Y.Zq = 32768 | a)
    },
    $c: function() {
        null != this.M && null != this.M.Y && (this.M.Y.Uc = 1)
    },
    NP: function() {
        null != this.M && null != this.M.Y && (this.M.Y.Uc = 2)
    },
    pQ: function() {
        null != this.M && null != this.M.Y && (this.M.Y.Uc = 101)
    },
    pause: function() {
        null != this.M && null != this.M.Y && this.M.Y.pause()
    },
    resume: function() {
        null != this.M && null != this.M.Y && this.M.Y.resume()
    },
    yQ: function(a, b) {
        if (null != this.M) {
            var c = wd(this.M, a);
            null != c && (c[a] = b)
        }
    },
    xQ: function(a, b) {
        if (null != this.M) {
            var c = vd(this.M, a);
            null != c && (c[a] = b)
        }
    },
    dw: function() {
        return null != this.M && null != this.M.Y ? 0 != this.M.Y.kj : !1
    },
    wO: function() {
        return null == this.M
    },
    DP: function() {
        return this.Zg
    },
    nP: function() {
        return this.level != this.fH
    },
    wP: function(a) {
        return null != this.M ? sc(this.M, a) : ""
    },
    xP: function(a) {
        return null != this.M ? uc(this.M, a) : 0
    },
    vP: function() {
        return this.level + 1
    },
    Lx: function() {},
    Hx: function() {},
    IO: function() {
        null != this.M && this.Zg && (hoAdRunHeader.m.DM.removeChild(this),
        pe(hoAdRunHeader.m.DM, this))
    },
    ON: function() {
        if (null != this.M && null != this.M.Y) {
            var a = this.M.Y, b = 0, c;
            for (c = 0; c < a.Sb; c++) {
                for (; null == a.U[b]; )
                    b++;
                var d = a.U[b];
                b++;
                d.Zp()
            }
        }
    },
    Zl: function() {
        if (null != this.M) {
            var a = this.M
              , b = (this.c.m.rj + this.Ae.y) * this.c.m.Wd;
            a.pj = (this.c.m.pj + this.Ae.x) * this.c.m.Vd;
            a.rj = b;
            Ve(this.M)
        }
    }
});
function ah() {
    this.ih = this.pe = this.zl = 0;
    this.qc = -1;
    this.Lc = this.Kc = 1;
    this.rc = this.yl = this.Ca = this.Fb = this.xc = 0;
    this.Rb = this.la = !1;
    this.Pm = this.Om = 0;
    this.ix = -1;
    this.cC = this.aC = this.bC = this.$B = this.ZB = this.hx = 0
}
ah.prototype = {
    ya: function() {
        this.Lc = this.Kc = 1;
        this.xc = 0;
        this.pe = -1
    },
    ed: function() {}
};
var za = 15
  , Ca = 240
  , Da = 4
  , Ga = 61440
  , Ha = 12
  , Ba = 512
  , Fa = 1024
  , Ia = 2048;
function Tg() {
    this.wf = this.vf = this.Oe = this.Gc = this.pb = this.type = 0;
    this.XD = this.gb = !1;
    this.cg = this.dj = this.rk = this.hu = this.te = 0;
    this.Cn = !1;
    this.Ta = this.Ua = null;
    this.ah = 0;
    this.font = null;
    this.wg = this.Kb = !1
}
Tg.prototype = p(new Ng, {
    ya: function() {
        this.ve = -1;
        this.hu = this.te = 0;
        this.aa = this.$ = 1;
        if (null == this.ma.wc)
            this.$ = this.wf = this.aa = this.vf = 1;
        else {
            var a = this.ma.wc;
            this.aa = this.vf = a.pl;
            this.$ = this.wf = a.ql;
            this.cg = a.Ao;
            this.type = a.gi;
            switch (this.type) {
            case 5:
                var b = this.ve;
                -1 == b && (b = a.Bm);
                this.font = Xh(this.c.m.td, b);
                this.ah = this.font.Pi();
                this.te = a.$j;
                break;
            case 2:
            case 3:
                this.te = a.$j,
                this.hu = a.Bq
            }
        }
        a = this.ma.af;
        this.Gc = a.DE;
        this.Oe = a.CE;
        this.pb = a.BE;
        this.Cn = !1
    },
    ed: function() {},
    handle: function() {
        this.ca.handle();
        this.b.la && (this.b.la = !1)
    },
    Wk: function() {
        var a = this.ma.wc;
        if (5 == this.type) {
            var b = rsFont;
            -1 == b && (b = a.Bm);
            return Yh(Xh(this.c.m.td, b))
        }
        return null
    },
    El: function(a, b) {
        5 == this.type && (this.ve = Wh(this.c.m.td, a),
        this.font = Xh(this.c.m.td, this.ve),
        this.ah = this.font.Pi(),
        null != b && (this.aa = this.vf = b.right - b.left,
        this.$ = this.wf = b.bottom - b.top),
        this.tc())
    },
    iA: function() {
        return this.te
    },
    AC: function(a) {
        this.te = a;
        this.tc()
    },
    xE: function(a) {
        0 == this.Cn && Math.ceil(a) != a && (this.Cn = !0)
    },
    Gv: function(a) {
        0 == this.Cn ? (a = na(a),
        a < this.Gc && (a = this.Gc),
        a > this.Oe && (a = this.Oe),
        a != Math.round(this.pb) && (this.pb = a,
        this.b.la = !0,
        this.tc())) : (a < this.Gc && (a = this.Gc),
        a > this.Oe && (a = this.Oe),
        a != this.pb && (this.pb = a,
        this.b.la = !0,
        this.tc()))
    },
    PO: function(a) {
        this.xE(a);
        this.Gv(this.pb + a)
    },
    ZO: function(a) {
        this.xE(a);
        this.Gv(this.pb - a)
    },
    YO: function(a) {
        this.Gc = a;
        this.Gv(this.pb)
    },
    XO: function(a) {
        this.Oe = a;
        this.Gv(this.pb)
    },
    VO: function(a) {
        this.te = a;
        this.tc()
    },
    WO: function(a) {
        this.hu = a;
        this.tc()
    },
    UO: function() {
        return this.pb
    },
    TO: function() {
        return this.Gc
    },
    SO: function() {
        return this.Oe
    },
    QO: function() {
        return this.te
    },
    RO: function() {
        return this.hu
    },
    yp: function(a, b, c, d, e, f) {
        null != this.ma.wc && 1 != this.Kb && (this.Kb = !0,
        this.XD = d,
        this.gb = e,
        this.Ta = this.c.J.Lb[c],
        this.Ua = this.XD ? this.Ta.kd : this.Ta.Db,
        0 > f ? pe(this.Ua, this) : rj(this.Ua, this, f),
        5 != this.type && this.tc())
    },
    gm: function() {
        if (null == this.ma.wc || 0 == this.Kb)
            return -1;
        this.Kb = !1;
        var a = this.Ua.mf(this);
        this.Ua.removeChild(this);
        return a
    },
    mf: function() {
        return this.Kb ? this.Ua.mf(this) : -1
    },
    aq: function() {
        return this.Kb ? this.Ua.children.length : -1
    },
    nh: function(a) {
        this.Kb && this.Ua.nh(this, a)
    },
    bp: function() {
        null != this.ma.wc && 0 == this.gb && (this.gb = !0,
        this.tc())
    },
    Yn: function() {
        null != this.ma.wc && 1 == this.gb && (this.gb = !1)
    },
    Pk: function() {
        this.wg || this.tc()
    },
    tc: function() {
        var a, b = this.ma.wc;
        switch (this.type) {
        case 4:
            this.rk = this.Oe <= this.Gc ? 0 : Math.floor((this.pb - this.Gc) * b.vq / (this.Oe - this.Gc));
            this.rk = Math.min(this.rk, b.vq - 1);
            a = X(this.c.m.xa, b.frames[Math.max(this.rk, 0)]);
            this.aa = a.width;
            this.$ = a.height;
            this.Ya = a.Hb;
            this.Za = a.Eb;
            break;
        case 2:
        case 3:
            a = this.vf;
            2 == b.gi && (a = this.wf);
            this.rk = this.Oe <= this.Gc ? 0 : (this.pb - this.Gc) * a / (this.Oe - this.Gc);
            3 == b.gi ? (this.Za = 0,
            this.$ = this.wf,
            this.aa = this.rk,
            this.Ya = 0 != (b.Ao & 256) ? this.rk - this.vf : 0) : (this.Ya = 0,
            this.aa = this.vf,
            this.$ = this.rk,
            this.Za = 0 != (b.Ao & 256) ? this.rk - this.wf : 0);
            break;
        case 1:
            a = 0 == this.Cn ? ya(this.pb, this.cg) : Aa(this.pb, this.cg);
            var c, d, e, f = 0, g = 0;
            for (c = a.length - 1; 0 <= c; c--)
                d = a.charCodeAt(c),
                e = 0,
                45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]),
                0 <= e && (d = X(this.c.m.xa, e),
                null != d ? (f += d.width,
                g = Math.max(g, d.height)) : toto = 2);
            this.Ya = f;
            this.Za = g;
            this.aa = f;
            this.$ = g;
            break;
        case 5:
            a = 0 == this.Cn ? ya(this.pb, this.cg) : Aa(this.pb, this.cg),
            this.Ya = b = null != this.yc ? this.yc.measureText(a, this.font) : (new ab(this.c.m,16,16)).measureText(a, this.font),
            this.Za = this.wf / 2 + this.ah / 2,
            this.aa = b,
            this.$ = this.ah,
            null == this.yc ? this.yc = new ab(this.c.m,this.aa,this.$) : (this.aa > this.yc.width || this.$ > this.yc.height) && this.yc.resize(this.aa, this.$),
            eb(this.yc, a, 0, new sa(0,0,1E3,1E3), this.font, this.te)
        }
        this.wg = !0
    },
    Oc: function(a, b, c) {
        if (this.gb && this.wg) {
            var d, e, f;
            d = this.ma.wc;
            b = b + this.B - this.Ya - this.c.Ma + this.Ta.x;
            c = c + this.A - this.Za - this.c.Ra + this.Ta.y;
            var g = this.aa
              , h = this.$;
            switch (this.type) {
            case 4:
                d = X(this.c.m.xa, d.frames[Math.max(this.rk, 0)]);
                a.tf(d, b + d.Hb, c + d.Eb, 0, 1, 1, this.ca.Ne, this.ca.ue);
                break;
            case 2:
            case 3:
                e = this.te;
                f = this.hu;
                switch (d.ym) {
                case 1:
                    a.qe(b, c, g, h, e, this.ca.Ne, this.ca.ue);
                    break;
                case 2:
                    0 != (d.Ao & 256) && (dl = e,
                    e = f,
                    f = dl),
                    a.eC(b, c, g, h, e, f, 0 != d.Gt, this.ca.Ne, this.ca.ue)
                }
                break;
            case 1:
                e = 0 == this.Cn ? ya(this.pb, this.cg) : Aa(this.pb, this.cg);
                for (f = 0; f < e.length; f++)
                    h = e.charCodeAt(f),
                    g = 0,
                    45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]),
                    g = X(this.c.m.xa, g),
                    null != g && (a.tf(g, b + g.Hb, c + g.Eb, 0, 1, 1, this.ca.Ne, this.ca.ue),
                    b += g.width);
                break;
            case 5:
                this.yc.Oc(a, b, c, this.ca.Ne, this.ca.ue)
            }
        }
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    }
});
function Rg() {
    this.type = this.te = this.ve = this.wf = this.vf = this.pb = this.Dl = 0;
    this.gb = !0;
    this.dj = this.jl = 0;
    this.Ua = null;
    this.cg = 0;
    this.Ta = null;
    this.ah = 0;
    this.alpha = 1;
    this.Gn = "source-over";
    this.wg = !1
}
Rg.prototype = p(new Ng, {
    ya: function() {
        this.ve = -1;
        this.te = 0;
        var a = this.ma.wc;
        this.aa = this.vf = a.pl;
        this.$ = this.wf = a.ql;
        this.type = a.gi;
        this.te = a.$j;
        this.Dl = a.tB;
        this.pb = rb(this.c.m)[this.Dl - 1];
        this.cg = a.Ao;
        if (5 == this.type) {
            var b = this.ve;
            -1 == b && (b = a.Bm);
            this.font = Xh(this.c.m.td, b);
            this.ah = this.font.Pi()
        }
    },
    ed: function() {},
    handle: function() {
        var a = rb(this.c.m)[this.Dl - 1];
        a != this.pb && (this.pb = a,
        this.tc());
        this.ca.handle();
        this.b.la && (this.b.la = !1)
    },
    Wk: function() {
        var a = this.ma.wc;
        if (5 == a.gi) {
            var b = this.ve;
            -1 == b && (b = a.Bm);
            return Yh(Xh(this.c.m.td, b))
        }
        return null
    },
    El: function(a, b) {
        5 == type && (this.ve = Wh(hoAdRunHeader.m.td, a),
        a = Xh(this.c.m.td, this.ve),
        this.ah = a.Pi(),
        null != b && (this.aa = this.vf = b.right - b.left,
        this.$ = this.wf = b.bottom - b.top),
        this.tc())
    },
    iA: function() {
        return this.te
    },
    AC: function(a) {
        this.te = a;
        this.tc()
    },
    yp: function(a, b, c, d, e, f) {
        null != this.ma.wc && 1 != this.Kb && (this.Kb = !0,
        this.gb = e,
        this.Ta = this.c.J.Lb[c],
        this.Ua = d ? this.Ta.kd : this.Ta.Db,
        0 > f ? pe(this.Ua, this) : rj(this.Ua, this, f),
        5 != this.type && this.tc())
    },
    gm: function() {
        if (null == this.ma.wc || 0 == this.Kb)
            return -1;
        this.Kb = !1;
        var a = this.Ua.mf(this);
        this.Ua.removeChild(this);
        return a
    },
    mf: function() {
        return this.Kb ? this.Ua.mf(this) : -1
    },
    aq: function() {
        return this.Kb ? this.Ua.children.length : -1
    },
    nh: function(a) {
        this.Kb && this.Ua.nh(this, a)
    },
    bp: function() {
        null != this.ma.wc && 0 == this.gb && (this.gb = !0,
        this.tc())
    },
    Yn: function() {
        null != this.ma.wc && 1 == this.gb && (this.gb = !1)
    },
    Kx: function(a) {
        a != this.pb && (this.pb = a,
        this.tc())
    },
    Pk: function() {
        this.wg || this.tc()
    },
    tc: function() {
        this.wg = !0;
        this.aa = this.$ = 1;
        if (null != this.ma.wc) {
            var a = this.ma.wc, b, c = ya(this.pb, this.cg);
            switch (a.gi) {
            case 1:
                var d, e, f = 0, g = 0;
                for (d = c.length - 1; 0 <= d; d--)
                    e = c.charCodeAt(d),
                    b = 0,
                    45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]),
                    0 <= b && (b = X(this.c.m.xa, b),
                    f += b.width,
                    g = Math.max(g, b.height));
                this.Ya = f;
                this.Za = g;
                this.aa = f;
                this.$ = g;
                break;
            case 5:
                this.Ya = a = null != this.yc ? this.yc.measureText(c, this.font) : (new ab(this.c.m,8,8)).measureText(c, this.font),
                this.Za = this.wf / 2 + this.ah / 2,
                this.aa = a,
                this.$ = this.ah,
                null == this.yc ? this.yc = new ab(this.c.m,this.aa,this.$) : (this.aa > this.yc.width || this.$ > this.yc.height) && this.yc.resize(this.aa, this.$),
                eb(this.yc, c, 0, new sa(0,0,1E3,1E3), this.font, this.te)
            }
        }
    },
    Oc: function(a, b, c) {
        if (this.gb && this.wg) {
            this.globalAlpha = this.alpha;
            this.globalCompositeOperation = this.Gn;
            var d = this.ma.wc;
            b = b + this.B - this.Ya - this.c.Ma + this.Ta.x;
            var e = c + this.A - this.Za - this.c.Ra + this.Ta.y;
            c = ya(this.pb, this.cg);
            switch (this.type) {
            case 1:
                var f, g;
                for (f = 0; f < c.length; f++) {
                    var h = c.charCodeAt(f);
                    g = 0;
                    45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]);
                    g = X(this.c.m.xa, g);
                    a.tf(g, b + g.Hb, e + g.Eb, 0, 1, 1, this.ca.Ne, this.ca.ue);
                    b += g.width
                }
                break;
            case 5:
                this.yc.Oc(a, b, e, this.ca.Ne, this.ca.ue)
            }
        }
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    }
});
function Sg() {
    this.type = this.te = this.ve = this.wf = this.vf = this.pb = this.Dl = 0;
    this.gb = !0;
    this.dj = this.jl = 0;
    this.Ua = null;
    this.cg = 0;
    this.Ta = null;
    this.ah = 0;
    this.alpha = 1;
    this.Gn = "source-over";
    this.wg = !1
}
Sg.prototype = p(new Ng, {
    ya: function() {
        this.ve = -1;
        this.te = 0;
        var a = this.ma.wc;
        this.aa = this.vf = a.pl;
        this.$ = this.wf = a.ql;
        this.type = a.gi;
        this.te = a.$j;
        this.Dl = a.tB;
        this.pb = vb(this.c.m)[this.Dl - 1];
        this.cg = a.Ao;
        if (5 == this.type) {
            var b = this.ve;
            -1 == b && (b = a.Bm);
            this.font = Xh(this.c.m.td, b);
            this.ah = this.font.Pi()
        }
    },
    ed: function() {},
    handle: function() {
        var a = vb(this.c.m)[this.Dl - 1];
        a != this.pb && (this.pb = a,
        this.tc());
        this.ca.handle();
        this.b.la && (this.b.la = !1)
    },
    Wk: function() {
        var a = this.ma.wc;
        if (5 == a.gi) {
            var b = this.ve;
            -1 == b && (b = a.Bm);
            return Yh(Xh(this.c.m.td, b))
        }
        return null
    },
    El: function(a, b) {
        5 == type && (this.ve = Wh(hoAdRunHeader.m.td, a),
        a = Xh(this.c.m.td, this.ve),
        this.ah = a.Pi(),
        null != b && (this.aa = this.vf = b.right - b.left,
        this.$ = this.wf = b.bottom - b.top),
        this.tc())
    },
    iA: function() {
        return this.te
    },
    AC: function(a) {
        this.te = a;
        this.tc()
    },
    yp: function(a, b, c, d, e, f) {
        null != this.ma.wc && 1 != this.Kb && (this.Kb = !0,
        this.gb = e,
        this.Ta = this.c.J.Lb[c],
        this.Ua = d ? this.Ta.kd : this.Ta.Db,
        0 > f ? pe(this.Ua, this) : rj(this.Ua, this, f),
        5 != this.type && this.tc())
    },
    gm: function() {
        if (null == this.ma.wc || 0 == this.Kb)
            return -1;
        this.Kb = !1;
        var a = this.Ua.mf(this);
        this.Ua.removeChild(this);
        return a
    },
    mf: function() {
        return this.Kb ? this.Ua.mf(this) : -1
    },
    aq: function() {
        return this.Kb ? this.Ua.children.length : -1
    },
    nh: function(a) {
        this.Kb && this.Ua.nh(this, a)
    },
    bp: function() {
        null != this.ma.wc && 0 == this.gb && (this.gb = !0,
        this.tc())
    },
    Yn: function() {
        null != this.ma.wc && 1 == this.gb && (this.gb = !1)
    },
    Kx: function(a) {
        a != this.pb && (this.pb = a,
        this.tc())
    },
    Pk: function() {
        this.wg || this.tc()
    },
    tc: function() {
        this.wg = !0;
        this.aa = this.$ = 1;
        if (null != this.ma.wc) {
            var a = this.ma.wc;
            switch (a.gi) {
            case 4:
                if (0 != this.pb) {
                    var b = X(this.c.m.xa, a.frames[0])
                      , c = this.pb * b.width;
                    c <= this.vf ? (this.aa = c,
                    this.$ = b.height) : (this.aa = this.vf,
                    this.$ = (this.vf / b.width + this.pb - 1) * b.height);
                    break
                }
                this.aa = this.$ = 1;
                break;
            case 1:
                var d, e, b, f = 0, g = 0, c = ya(this.pb, this.cg);
                for (d = c.length - 1; 0 <= d; d--)
                    b = c.charCodeAt(d),
                    e = 0,
                    45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]),
                    0 <= e && (b = X(this.c.m.xa, e),
                    f += b.width,
                    g = Math.max(g, b.height));
                this.Ya = f;
                this.Za = g;
                this.aa = f;
                this.$ = g;
                break;
            case 5:
                c = ya(this.pb, this.cg),
                this.Ya = a = null != this.yc ? this.yc.measureText(c, this.font) : (new ab(this.c.m,8,8)).measureText(c, this.font),
                this.Za = this.wf / 2 + this.ah / 2,
                this.aa = a,
                this.$ = this.ah,
                null == this.yc ? this.yc = new ab(this.c.m,this.aa,this.$) : (this.aa > this.yc.width || this.$ > this.yc.height) && this.yc.resize(this.aa, this.$),
                eb(this.yc, c, 0, new sa(0,0,1E3,1E3), this.font, this.te)
            }
        }
    },
    Oc: function(a, b, c) {
        if (this.gb && this.wg) {
            this.globalAlpha = this.alpha;
            this.globalCompositeOperation = this.Gn;
            var d, e = this.ma.wc;
            b = b + this.B - this.Ya - this.c.Ma + this.Ta.x;
            c = c + this.A - this.Za - this.c.Ra + this.Ta.y;
            switch (this.type) {
            case 1:
                var f, g;
                d = ya(this.pb, this.cg);
                for (f = 0; f < d.length; f++) {
                    var h = d.charCodeAt(f);
                    g = 0;
                    45 == h ? g = e.frames[10] : 46 == h || 44 == h ? g = e.frames[12] : 43 == h ? g = e.frames[11] : 69 == h || 101 == h ? g = e.frames[13] : 48 <= h && 57 >= h && (g = e.frames[h - 48]);
                    g = X(this.c.m.xa, g);
                    a.tf(g, b + g.Hb, c + g.Eb, 0, 1, 1, this.ca.Ne, this.ca.ue);
                    b += g.width
                }
                break;
            case 4:
                if (0 != this.pb) {
                    d = b + this.aa;
                    f = c + this.$;
                    var h = b
                      , k = this.pb;
                    for (g = X(this.c.m.xa, e.frames[0]); c < f && 0 < k; c += g.height)
                        for (b = h; b < d && 0 < k; b += g.width,
                        --k)
                            a.tf(g, b + g.Hb, c + g.Eb, 0, 1, 1, this.ca.Ne, this.ca.ue)
                }
                break;
            case 5:
                this.yc.Oc(a, b, c, this.ca.Ne, this.ca.ue)
            }
        }
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    }
});
function Pg() {
    this.$q = null;
    this.jl = this.iu = this.ve = this.Gc = this.Oe = 0;
    this.font = null;
    this.gb = !0;
    this.fa = 0;
    this.Ua = this.Ta = null;
    this.Kb = !1;
    this.rect = new sa;
    this.wf = this.vf = this.deltaY = 0;
    this.yc = null;
    this.wg = !1
}
Pg.prototype = p(new Ng, {
    ya: function(a) {
        a = a.af;
        this.aa = a.JB;
        this.$ = a.KB;
        this.vf = a.JB;
        this.wf = a.KB;
        this.Oe = a.Do;
        this.iu = 0;
        0 < a.Ad.length && (this.iu = a.Ad[0].JC);
        this.$q = null;
        this.ve = -1;
        this.Gc = 0;
        this.gb = !0;
        0 < a.Ad.length && (this.$q = a.Ad[0].Fl);
        var b = this.ve;
        -1 == b && 0 < a.Ad.length && (b = a.Ad[0].hr);
        this.font = Xh(this.c.m.td, b);
        this.yc = new ab(this.c.m,this.aa,this.$)
    },
    ed: function() {},
    handle: function() {
        this.ca.handle();
        this.b.la && (this.b.la = !1)
    },
    Wk: function() {
        var a = this.ve;
        -1 == a && (a = this.ma.af.Ad[0].hr);
        return Yh(Xh(this.c.m.td, a))
    },
    El: function(a, b) {
        this.ve = Wh(this.c.m.td, a);
        this.font = Xh(this.c.m.td, this.ve);
        null != b && (this.aa = b.right - b.left,
        this.$ = b.bottom - b.top,
        this.yc.resize(this.aa, this.$));
        this.b.la = !0;
        this.tc()
    },
    iA: function() {
        return this.iu
    },
    AC: function(a) {
        this.iu = a;
        this.tc()
    },
    yp: function(a, b, c, d, e, f) {
        1 != this.Kb && (this.Kb = !0,
        this.gb = e,
        this.Ta = this.c.J.Lb[c],
        this.Ua = d ? this.Ta.kd : this.Ta.Db,
        0 > f ? pe(this.Ua, this) : rj(this.Ua, this, f))
    },
    gm: function() {
        if (0 == this.Kb)
            return -1;
        this.Kb = !1;
        var a = this.Ua.mf(this);
        this.Ua.removeChild(this);
        return a
    },
    mf: function() {
        return this.Kb ? this.Ua.mf(this) : -1
    },
    aq: function() {
        return this.Kb ? this.Ua.children.length : -1
    },
    nh: function(a) {
        this.Kb && this.Ua.nh(this, a)
    },
    bp: function() {
        0 == this.gb && (this.gb = !0)
    },
    Yn: function() {
        1 == this.gb && (this.gb = !1)
    },
    CQ: function(a) {
        -1 > a && (a = -1);
        a >= this.Oe && (a = this.Oe - 1);
        if (a == this.Gc)
            return !1;
        this.Gc = a;
        0 <= a && this.MN(this.ma.af.Ad[this.Gc].Fl);
        this.tc();
        return 0 != (this.ca.Ga & eh) ? !1 : !0
    },
    MN: function(a) {
        this.$q = a;
        this.tc()
    },
    Pk: function() {
        this.wg || this.tc()
    },
    tc: function() {
        this.wg = !0;
        var a = this.ma.af
          , b = a.Ad[0].wu;
        this.Za = this.Ya = 0;
        this.rect.left = 0;
        this.rect.top = 0;
        this.rect.right = this.aa;
        this.rect.bottom = this.$;
        0 <= this.Gc ? a = a.Ad[this.Gc].Fl : (a = this.$q,
        null == a && (a = ""));
        b &= 47;
        a = eb(this.yc, a, b, this.rect, this.font, this.iu);
        0 == (b & 12) && (this.$ = a)
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    },
    Oc: function(a, b, c) {
        this.gb && this.wg && this.yc.Oc(a, b + this.B - this.c.Ma + this.Ta.x, c + this.A - this.c.Ra + this.Ta.y, this.ca.Ne, this.ca.ue)
    }
});
function Qg() {
    this.wf = this.vf = 0;
    this.ng = null;
    this.In = 0;
    this.wk = []
}
Qg.prototype = p(new Ng, {
    ya: function() {},
    ed: function() {},
    handle: function() {
        this.c.pause();
        this.c.bx = this;
        pe(this.c.J.Lb[this.c.J.me - 1].Db, this);
        this.HK()
    },
    Lv: function() {
        this.c.J.Lb[this.c.J.me - 1].Db.removeChild(this)
    },
    mL: function() {
        var a;
        a = this.c.m.bj - this.c.m.qj;
        var b = this.c.m.cj - this.c.m.sj;
        0 == this.In ? this.c.m.We[200] && (a = this.uF(a, b),
        0 != a && (this.In = a)) : this.c.m.We[200] || (this.uF(a, b) == this.In ? (this.c.G.Id = this.In,
        pg(this.c.G, this, -5439484),
        0 != (this.ma.af.Ad[this.In].wu & 256) ? pg(this.c.G, this, -5308412) : pg(this.c.G, this, -5373948),
        this.Lv(),
        this.c.bx = null,
        this.c.resume(),
        Fg(this.c, this.Pc, !0)) : this.In = 0)
    },
    uF: function(a, b) {
        var c;
        if (null != this.ng)
            for (c = 1; c < this.ng.length; c++)
                if (a >= this.ng[c].left && a < this.ng[c].right && b > this.ng[c].top && b < this.ng[c].bottom)
                    return c;
        return 0
    },
    fE: function(a, b, c) {
        var d, e;
        c ? (d = 8421504,
        e = 16777215) : (e = 8421504,
        d = 16777215);
        a.lx(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
        var f = Array(3), g;
        for (g = 0; 3 > g; g++)
            f[g] = new $a;
        f[0].x = b.right - 1;
        0 == c && --f[0].x;
        f[0].y = b.top + 1;
        f[1].y = b.top + 1;
        f[1].x = b.left + 1;
        f[2].x = b.left + 1;
        f[2].y = b.bottom;
        0 == c && --f[2].y;
        a.Vf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
        a.Vf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
        0 == c && --f[0].x;
        f[0].y += 1;
        f[1].x += 1;
        f[1].y += 1;
        f[2].x += 1;
        0 == c && --f[2].y;
        a.Vf(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
        a.Vf(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
        0 == c && (f[0].x += 2,
        f[1].x = b.right - 1,
        f[1].y = b.bottom - 1,
        f[2].y = b.bottom - 1,
        --f[2].x,
        a.Vf(f[0].x, f[0].y, f[1].x, f[1].y, e, 1),
        a.Vf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1),
        --f[0].x,
        f[0].y += 1,
        --f[1].x,
        --f[1].y,
        f[2].x += 1,
        --f[2].y,
        a.Vf(f[0].x, f[0].y, f[1].x, f[1].y, e, 1),
        a.Vf(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
    },
    ZM: function(a, b, c) {
        var d = new sa;
        ta(d, this.ng[b]);
        this.fE(a, this.ng[b], c);
        d.left += 2;
        d.top += 2;
        d.right -= 4;
        d.bottom -= 4;
        c && (d.left += 2,
        d.top += 2);
        this.wk[b].Oc(a, (d.left + d.right) / 2 - this.wk[b].width / 2, (d.top + d.bottom) / 2 - this.wk[b].height / 2, 0, 0)
    },
    HK: function() {
        this.Gw = new ab(this.c.m,8,8);
        var a = this.ma.af
          , b = this.c
          , c = a.Ad[1]
          , d = c.JC
          , e = 0 != (c.wu & 512)
          , f = Xh(b.m.td, c.hr);
        this.Xx = Math.floor(3 * this.Gw.measureText("X", f) / 2);
        this.lm = 4;
        this.fg = 64;
        var g;
        for (g = 1; g < a.Ad.length; g++)
            c = a.Ad[g],
            0 < c.Fl.length && (c = this.Gw.measureText(c.Fl, f),
            this.fg = Math.max(this.fg, c + 2 * this.Xx + 4),
            this.lm = Math.max(this.lm, Math.floor(3 * f.Pi() / 2)));
        this.aw = Math.max(Math.floor(this.lm / 4), 2);
        this.fg += 2 * this.Xx + 4;
        var h = new sa;
        for (g = 1; g < a.Ad.length; g++)
            c = a.Ad[g],
            this.wk[g] = new ab(b.m,this.fg,this.lm),
            h.right = this.fg,
            h.bottom = this.lm,
            cb(this.wk[g], c.Fl, h, d, f, e ? 1 : 0, 16777215);
        a = a.Ad[0];
        e = 0 != (a.wu & 512);
        f = Xh(b.m.td, a.hr);
        g = Math.floor(3 * this.Gw.measureText("X", f) / 2);
        c = this.Gw.measureText(a.Fl, f);
        this.Os = Math.floor(3 * f.Pi() / 2);
        this.fg = Math.max(this.fg, c + 2 * g + 4);
        this.fg > b.m.bb ? this.fg = b.m.bb : this.fg > b.J.Fg && (this.fg = b.J.Fg);
        h.right = this.fg;
        h.bottom = this.Os;
        this.wk[0] = new ab(b.m,this.fg,this.Os);
        cb(this.wk[0], a.Fl, h, d, f, e ? 1 : 0, 16777215)
    },
    Oc: function(a) {
        var b = this.ma.af
          , c = this.c
          , d = this.B - c.Ma
          , c = this.A - c.Ra
          , e = new sa;
        e.left = d;
        e.top = c;
        var f = this.Os + 1 + (this.lm + this.aw) * (b.Ad.length - 1) + this.aw + 4;
        e.right = d + this.fg;
        e.bottom = c + f;
        a.qe(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
        this.fE(a, e, !1);
        e.left += 2;
        e.top += 2;
        e.right -= 2;
        e.bottom = e.top + this.Os;
        this.wk[0].Oc(a, (e.left + e.right) / 2 - this.wk[0].width / 2, (e.top + e.bottom) / 2 - this.wk[0].height / 2, 0, 0);
        e.top = e.bottom;
        a.Vf(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
        e.top += 1;
        e.bottom += 1;
        a.Vf(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
        if (null == this.ng)
            for (this.ng = Array(b.Ad.length),
            sj = 1; sj < b.Ad.length; sj++)
                this.ng[sj] = new sa,
                this.ng[sj].left = d + 2 + this.Xx,
                this.ng[sj].right = d + this.fg - 2 - this.Xx,
                this.ng[sj].top = c + 2 + this.Os + 1 + this.aw + (this.lm + this.aw) * (sj - 1),
                this.ng[sj].bottom = this.ng[sj].top + this.lm;
        for (sj = 1; sj < b.Ad.length; sj++)
            this.ZM(a, sj, this.In == sj)
    }
});
function Vg(a, b) {
    this.ext = b.m.Qv.mw(a);
    this.mB = !1;
    this.nB = this.Et = this.OB = 0;
    this.Kb = !1;
    this.gb = !0;
    this.jl = 0;
    this.Ua = this.Ta = null
}
Vg.prototype = p(new Ng, {
    ya: function(a, b) {
        this.ext.ya(this);
        var c = Wa(this.c.m.file, a.XG);
        this.OB = a.YG;
        this.ext.rs(c, b, a.ZG)
    },
    Qy: function(a, b, c, d, e) {
        this.jl = d;
        this.Ta = this.c.J.Lb[d];
        this.gb = e;
        1 != this.Kb && (this.Kb = !0,
        this.Ua = this.Ta.Db,
        pe(this.Ua, this))
    },
    yp: function(a, b, c, d, e) {
        this.jl = c;
        this.Ta = this.c.J.Lb[c];
        this.gb = e;
        1 != this.Kb && (this.Kb = !0,
        this.Ua = d ? this.Ta.kd : this.Ta.Db,
        pe(this.Ua, this))
    },
    gm: function() {
        if (0 == this.Kb)
            return -1;
        this.Kb = !1;
        var a = this.Ua.mf(this);
        this.Ua.removeChild(this);
        return a
    },
    handle: function() {
        0 != (this.mb & 512) ? this.ca.handle() : 16 == (this.mb & 48) || 48 == (this.mb & 48) ? this.L.move() : 32 == (this.mb & 48) && this.cb.Ug();
        var a = 0;
        0 == this.mB && (a = this.ext.Ns());
        0 != (a & tj) && (this.mB = !0);
        null != this.b && this.b.la && (this.b.la = !1)
    },
    Zl: function() {
        this.ext.Zl()
    },
    zE: function() {},
    Oc: function() {},
    ed: function(a) {
        this.ext.Mv(a)
    },
    hL: function() {
        return null
    },
    Hn: function(a, b) {
        return this.ext.Hn(a, b)
    },
    action: function(a, b) {
        this.ext.action(a, b)
    },
    Sn: function(a) {
        return this.ext.Sn(a)
    },
    dr: function(a) {
        this.ca.Ne = Qc;
        this.ca.ue = a
    },
    wQ: function() {},
    bp: function() {
        this.gb = !0
    },
    Yn: function() {
        this.gb = !1
    },
    mf: function() {
        return this.Ua.mf(this)
    },
    aq: function() {
        return this.Ua.children.length
    },
    nh: function(a) {
        a >= this.Ua.children.length && (a = this.Ua.children.length);
        0 > a && (a = 0);
        this.Ua.nh(this, a)
    },
    BM: function() {},
    KK: function() {},
    Zp: function() {
        this.ext.Zp()
    },
    lw: function(a) {
        this.c.m.xa.lw(a)
    },
    yP: function(a) {
        return X(this.c.m.xa, a)
    },
    qP: function() {
        return this.c.m
    },
    BP: function() {
        return this.B
    },
    CP: function() {
        return this.A
    },
    AP: function() {
        return this.aa
    },
    Pi: function() {
        return this.$
    },
    BC: function(a) {
        null != this.L ? this.L.Va.ef(a) : (this.B = a,
        null != this.b && (this.b.la = !0,
        this.b.Rb = !0))
    },
    CC: function(a) {
        null != this.L ? this.L.Va.ff(a) : (this.A = a,
        null != this.b && (this.b.la = !0,
        this.b.Rb = !0))
    },
    Lx: function(a) {
        this.aa = a
    },
    Hx: function(a) {
        this.$ = a
    },
    ou: function(a, b) {
        this.aa = a;
        this.$ = b
    },
    lQ: function() {
        this.mB = !1
    },
    Dd: function(a, b) {
        if (0 == this.c.kj) {
            var c = this.c.G.Id;
            this.c.G.Id = b;
            a = -(a + 80 + 1) << 16 | this.Bb & 65535;
            pg(this.c.G, this, a);
            this.c.G.Id = c
        }
    },
    OP: function(a, b) {
        if (0 == this.c.kj) {
            a = -(a + 80 + 1) << 16 | this.Bb & 65535;
            var c = this.c.G
              , d = new wb(1,a,b,this,this.De);
            null == c.nk && (c.nk = new V);
            c.nk.add(d)
        }
    },
    pause: function() {
        this.c.pause()
    },
    resume: function() {
        this.c.resume()
    },
    mQ: function() {},
    Pz: function() {
        Hg(this.c, this.Pc)
    },
    setPosition: function(a, b) {
        null != this.L ? (this.L.Va.ef(a),
        this.L.Va.ff(b)) : (this.B = a,
        this.A = b,
        null != this.b && (this.b.la = !0,
        this.b.Rb = !0))
    },
    tP: function() {
        return this.OB
    },
    vQ: function(a) {
        this.OB = a
    },
    hv: function(a, b, c, d, e) {
        this.c.hv(a, b, c, e, d, !0)
    },
    rP: function() {
        return this.c.Uq
    },
    Oi: function() {
        this.c.oi++;
        return this.c.getExpression()
    },
    sP: function() {
        return this.c.G.Id
    },
    lE: function(a, b, c) {
        return 0 != (a.mb & tf) && a.b.pe == Uf ? a.L.Va.lE(b, c) : 0
    },
    uP: function() {
        this.nB = this.Et = 0;
        return this.iL()
    },
    iL: function() {
        if (this.nB < this.c.Sb) {
            for (; null == this.c.U[this.Et]; )
                this.Et++;
            var a = this.c.U[this.Et];
            this.nB++;
            this.Et++;
            return a
        }
        return null
    },
    zP: function(a) {
        var b = 0, c;
        for (c = 0; c < this.c.Sb; c++) {
            for (; null == this.c.U[b]; )
                b++;
            var d = this.c.U[b];
            b++;
            if ((d.bq << 16 | d.Pc & 65535) == a)
                return d
        }
        return null
    },
    gF: function(a) {
        return this.c.gF(a)
    },
    hF: function(a) {
        return this.c.hF(a)
    },
    xM: function(a) {
        return hoAdRunHeader.m.xM(a)
    },
    NO: function() {}
});
function Yb(a) {
    var b = a.file.Ba
      , c = null
      , d = S(a.file)
      , e = S(a.file);
    switch (e) {
    case 1:
        c = new uj(a);
        break;
    case 2:
        c = new vj(a);
        break;
    case 3:
        c = new wj(a);
        break;
    case 4:
        c = new wj(a);
        break;
    case 5:
        c = new xj(a);
        break;
    case 6:
        c = new yj(a);
        break;
    case 9:
        c = new zj(a);
        break;
    case 10:
        c = new wj(a);
        break;
    case 11:
        c = new wj(a);
        break;
    case 12:
        c = new wj(a);
        break;
    case 13:
        c = new Aj(a);
        break;
    case 14:
        c = new Jj(a);
        break;
    case 15:
        c = new Kj(a);
        break;
    case 16:
        c = new Lj(a);
        break;
    case 17:
        c = new wj(a);
        break;
    case 18:
        c = new Mj(a);
        break;
    case 19:
        c = new Nj(a);
        break;
    case 21:
        c = new zj(a);
        break;
    case 22:
        c = new Kj(a);
        break;
    case 23:
        c = new Kj(a);
        break;
    case 24:
        c = new Oj(a);
        break;
    case 25:
        c = new xj(a);
        break;
    case 26:
        c = new wj(a);
        break;
    case 27:
        c = new Kj(a);
        break;
    case 28:
        c = new Kj(a);
        break;
    case 29:
        c = new xj(a);
        break;
    case 31:
        c = new wj(a);
        break;
    case 32:
        c = new wj(a);
        break;
    case 34:
        c = new xj(a);
        break;
    case 35:
        c = new yj(a);
        break;
    case 36:
        c = new yj(a);
        break;
    case 37:
        c = new wj(a);
        break;
    case 38:
        c = new Pj(a);
        break;
    case 39:
        c = new Qj(a);
        break;
    case 40:
        c = new Rj(a);
        break;
    case 41:
        c = new Rj(a);
        break;
    case 42:
        c = new Sj(a);
        break;
    case 43:
        c = new wj(a);
        break;
    case 44:
        c = new Jj(a);
        break;
    case 45:
        c = new Kj(a);
        break;
    case 46:
        c = new Kj(a);
        break;
    case 47:
        c = new Tj(a);
        break;
    case 48:
        c = new xj(a);
        break;
    case 49:
        c = new wj(a);
        break;
    case 50:
        c = new wj(a);
        break;
    case 51:
        c = new Tj(a);
        break;
    case 52:
        c = new Kj(a);
        break;
    case 53:
        c = new Kj(a);
        break;
    case 54:
        c = new Kj(a);
        break;
    case 55:
        c = new Uj(a);
        break;
    case 56:
        c = new xj(a);
        break;
    case 57:
        c = new wj(a);
        break;
    case 58:
        c = new wj(a);
        break;
    case 59:
        c = new Kj(a);
        break;
    case 60:
        c = new wj(a);
        break;
    case 61:
        c = new wj(a);
        break;
    case 62:
        c = new Kj(a);
        break;
    case 63:
        c = new Rj(a);
        break;
    case 64:
        c = new Rj(a);
        break;
    case 67:
        c = new wj(a);
        break;
    case 68:
        c = new Vj(a);
        break;
    case 69:
        c = new Wj(a)
    }
    c.code = e;
    a.file.seek(b + d);
    return c
}
function Bb() {
    this.fw = this.dir = this.y = this.x = 0;
    this.YD = !1
}
function Tj(a) {
    S(a.file);
    this.Ux = S(a.file)
}
function Sj(a) {
    this.ph = D(a.file);
    this.FA = D(a.file);
    this.Lz = S(a.file)
}
function Oj(a) {
    this.color = Va(a.file)
}
function Aj(a) {
    this.Tp = D(a.file);
    this.EK = D(a.file)
}
function Kj(a) {
    this.Lz = S(a.file);
    for (var b = a.file.Ba, c = 0, d; ; ) {
        c++;
        d = D(a.file);
        if (0 == d)
            break;
        d = S(a.file);
        6 < d && T(a.file, d - 6)
    }
    a.file.seek(b);
    this.Gb = Array(c);
    for (b = 0; b < c; b++) {
        d = this.Gb;
        var e = b, f, g = a.file, h = g.Ba, k, m = D(g);
        switch (m) {
        case 0:
            k = new kc;
            break;
        case 131072:
            k = new EXP_PLUS;
            break;
        case 262144:
            k = new EXP_MINUS;
            break;
        case 393216:
            k = new EXP_MULT;
            break;
        case 524288:
            k = new EXP_DIV;
            break;
        case 655360:
            k = new EXP_MOD;
            break;
        case 786432:
            k = new EXP_POW;
            break;
        case 917504:
            k = new EXP_AND;
            break;
        case 1048576:
            k = new EXP_OR;
            break;
        case 1179648:
            k = new EXP_XOR;
            break;
        case 65535:
            k = new lc;
            break;
        case 131071:
            k = new EXP_RANDOM;
            break;
        case 196607:
            k = new EXP_VARGLO;
            break;
        case 262143:
            k = new vc;
            break;
        case 327679:
            k = new EXP_STR;
            break;
        case 393215:
            k = new EXP_VAL;
            break;
        case 458751:
        case 524287:
        case 589823:
        case 655359:
            k = new jc;
            break;
        case 720895:
            k = new EXP_SIN;
            break;
        case 786431:
            k = new EXP_COS;
            break;
        case 851967:
            k = new EXP_TAN;
            break;
        case 917503:
            k = new EXP_SQR;
            break;
        case 983039:
            k = new EXP_LOG;
            break;
        case 1048575:
            k = new EXP_LN;
            break;
        case 1114111:
            k = new EXP_HEX;
            break;
        case 1179647:
            k = new EXP_BIN;
            break;
        case 1245183:
            k = new EXP_EXP;
            break;
        case 1310719:
            k = new EXP_LEFT;
            break;
        case 1376255:
            k = new EXP_RIGHT;
            break;
        case 1441791:
            k = new EXP_MID;
            break;
        case 1507327:
            k = new EXP_LEN;
            break;
        case 1572863:
            k = new mc;
            break;
        case 1638399:
            k = new tc;
            break;
        case 1900543:
            k = new EXP_INT;
            break;
        case 1966079:
            k = new EXP_ABS;
            break;
        case 2031615:
            k = new EXP_CEIL;
            break;
        case 2097151:
            k = new EXP_FLOOR;
            break;
        case 2162687:
            k = new EXP_ACOS;
            break;
        case 2228223:
            k = new EXP_ASIN;
            break;
        case 2293759:
            k = new EXP_ATAN;
            break;
        case 2359295:
            k = new EXP_NOT;
            break;
        case 2686975:
            k = new EXP_MIN;
            break;
        case 2752511:
            k = new EXP_MAX;
            break;
        case 2818047:
            k = new EXP_GETRGB;
            break;
        case 2883583:
            k = new EXP_GETRED;
            break;
        case 2949119:
            k = new EXP_GETGREEN;
            break;
        case 3014655:
            k = new EXP_GETBLUE;
            break;
        case 3080191:
            k = new EXP_LOOPINDEX;
            break;
        case 3145727:
            k = new EXP_NEWLINE;
            break;
        case 3211263:
            k = new EXP_ROUND;
            break;
        case 3276799:
            k = new EXP_STRINGGLO;
            break;
        case 3342335:
            k = new rc;
            break;
        case 3407871:
            k = new EXP_LOWER;
            break;
        case 3473407:
            k = new EXP_UPPER;
            break;
        case 3538943:
            k = new EXP_FIND;
            break;
        case 3604479:
            k = new EXP_REVERSEFIND;
            break;
        case 3866623:
            k = new EXP_FLOATTOSTRING;
            break;
        case 3932159:
            k = new EXP_ATAN2;
            break;
        case 3997695:
            k = new kc;
            break;
        case 4063231:
            k = new jc;
            break;
        case 4128767:
            k = new EXP_DISTANCE;
            break;
        case 4194303:
            k = new EXP_ANGLE;
            break;
        case 4259839:
            k = new EXP_RANGE;
            break;
        case 4325375:
            k = new EXP_RANDOMRANGE;
            break;
        case 4456447:
            k = new EXP_RUNTIMENAME;
            break;
        case -1:
            k = new EXP_PARENTH1;
            break;
        case -65537:
            k = new EXP_PARENTH2;
            break;
        case -131073:
            k = new EXP_VIRGULE;
            break;
        case 65534:
            k = new EXP_GETSAMPLEMAINVOL;
            break;
        case 131070:
            k = new EXP_GETSAMPLEVOL;
            break;
        case 196606:
            k = new EXP_GETCHANNELVOL;
            break;
        case 262142:
            k = new kc;
            break;
        case 327678:
            k = new EXP_GETSAMPLEPAN;
            break;
        case 393214:
            k = new EXP_GETCHANNELPAN;
            break;
        case 458750:
            k = new EXP_GETSAMPLEPOS;
            break;
        case 524286:
            k = new EXP_GETCHANNELPOS;
            break;
        case 589822:
            k = new EXP_GETSAMPLEDUR;
            break;
        case 655358:
            k = new EXP_GETCHANNELDUR;
            break;
        case 720894:
            k = new EXP_GETSAMPLEFREQ;
            break;
        case 786430:
            k = new EXP_GETCHANNELFREQ;
            break;
        case 851966:
            k = new EXP_GETCHANNELSNDNAME;
            break;
        case 65533:
            k = new EXP_GAMLEVEL;
            break;
        case 131069:
            k = new EXP_GAMNPLAYER;
            break;
        case 196605:
            k = new EXP_PLAYXLEFT;
            break;
        case 262141:
            k = new EXP_PLAYXRIGHT;
            break;
        case 327677:
            k = new EXP_PLAYYTOP;
            break;
        case 393213:
            k = new EXP_PLAYYBOTTOM;
            break;
        case 458749:
            k = new EXP_PLAYWIDTH;
            break;
        case 524285:
            k = new EXP_PLAYHEIGHT;
            break;
        case 589821:
            k = new EXP_GAMLEVELNEW;
            break;
        case 655357:
            k = new EXP_GETCOLLISIONMASK;
            break;
        case 720893:
            k = new EXP_FRAMERATE;
            break;
        case 786429:
            k = new EXP_GETVIRTUALWIDTH;
            break;
        case 851965:
            k = new EXP_GETVIRTUALHEIGHT;
            break;
        case 917501:
            k = new EXP_GETFRAMEBKDCOLOR;
            break;
        case 983037:
            k = new kc;
            break;
        case 1048573:
            k = new kc;
            break;
        case 1114109:
            k = new EXP_FRAMEALPHACOEF;
            break;
        case 1179645:
            k = new EXP_FRAMERGBCOEF;
            break;
        case 1245181:
            k = new kc;
            break;
        case 65532:
            k = new EXP_TIMVALUE;
            break;
        case 131068:
            k = new EXP_TIMCENT;
            break;
        case 196604:
            k = new EXP_TIMSECONDS;
            break;
        case 262140:
            k = new EXP_TIMHOURS;
            break;
        case 327676:
            k = new EXP_TIMMINITS;
            break;
        case 393212:
            k = new EXP_EVENTAFTER;
            break;
        case 65530:
            k = new EXP_XMOUSE;
            break;
        case 131066:
            k = new EXP_YMOUSE;
            break;
        case 196602:
            k = new EXP_MOUSEWHEELDELTA;
            break;
        case 65529:
            k = new EXP_PLASCORE;
            break;
        case 131065:
            k = new EXP_PLALIVES;
            break;
        case 196601:
            k = new EXP_GETINPUT;
            break;
        case 262137:
            k = new EXP_GETINPUTKEY;
            break;
        case 327673:
            k = new EXP_GETPLAYERNAME;
            break;
        case 65531:
            k = new EXP_CRENUMBERALL;
            break;
        case 5242883:
            k = new EXP_STRNUMBER;
            break;
        case 5308419:
            k = new EXP_STRGETCURRENT;
            break;
        case 5373955:
            k = new EXP_STRGETNUMBER;
            break;
        case 5439491:
            k = new EXP_STRGETNUMERIC;
            break;
        case 5505027:
            k = new EXP_STRGETNPARA;
            break;
        case 5242882:
            k = new EXP_GETRGBAT;
            break;
        case 5308418:
            k = new EXP_GETSCALEX;
            break;
        case 5373954:
            k = new EXP_GETSCALEY;
            break;
        case 5439490:
            k = new EXP_GETANGLE;
            break;
        case 5242887:
            k = new EXP_CVALUE;
            break;
        case 5308423:
            k = new EXP_CGETMIN;
            break;
        case 5373959:
            k = new EXP_CGETMAX;
            break;
        case 5439495:
            k = new EXP_CGETCOLOR1;
            break;
        case 5505031:
            k = new EXP_CGETCOLOR2;
            break;
        case 5242889:
            k = new EXP_CCAGETFRAMENUMBER;
            break;
        case 5308425:
            k = new EXP_CCAGETGLOBALVALUE;
            break;
        case 5373961:
            k = new EXP_CCAGETGLOBALSTRING;
            break;
        default:
            switch (m & 4294901760) {
            case 65536:
                k = new EXP_EXTYSPR;
                break;
            case 131072:
                k = new EXP_EXTISPR;
                break;
            case 196608:
                k = new EXP_EXTSPEED;
                break;
            case 262144:
                k = new EXP_EXTACC;
                break;
            case 327680:
                k = new EXP_EXTDEC;
                break;
            case 393216:
                k = new EXP_EXTDIR;
                break;
            case 458752:
                k = new EXP_EXTXLEFT;
                break;
            case 524288:
                k = new EXP_EXTXRIGHT;
                break;
            case 589824:
                k = new EXP_EXTYTOP;
                break;
            case 655360:
                k = new EXP_EXTYBOTTOM;
                break;
            case 720896:
                k = new EXP_EXTXSPR;
                break;
            case 786432:
                k = new EXP_EXTIDENTIFIER;
                break;
            case 851968:
                k = new EXP_EXTFLAG;
                break;
            case 917504:
                k = new EXP_EXTNANI;
                break;
            case 983040:
                k = new EXP_EXTNOBJECTS;
                break;
            case 1048576:
                k = new nc;
                break;
            case 1114112:
                k = new EXP_EXTGETSEMITRANSPARENCY;
                break;
            case 1179648:
                k = new EXP_EXTNMOVE;
                break;
            case 1245184:
                k = new pc;
                break;
            case 1310720:
                k = new EXP_EXTGETFONTNAME;
                break;
            case 1376256:
                k = new EXP_EXTGETFONTSIZE;
                break;
            case 1441792:
                k = new EXP_EXTGETFONTCOLOR;
                break;
            case 1507328:
                k = new EXP_EXTGETLAYER;
                break;
            case 1572864:
                k = new EXP_EXTGETGRAVITY;
                break;
            case 1638400:
                k = new EXP_EXTXAP;
                break;
            case 1703936:
                k = new EXP_EXTYAP;
                break;
            case 1769472:
                k = new EXP_EXTALPHACOEF;
                break;
            case 1835008:
                k = new EXP_EXTRGBCOEF;
                break;
            case 1900544:
                k = new kc;
                break;
            case 1966080:
                k = new wc;
                break;
            case 2031616:
                k = new yc;
                break;
            case 2097152:
                k = new EXP_EXTDISTANCE;
                break;
            case 2162688:
                k = new EXP_EXTANGLE;
                break;
            case 2228224:
                k = new EXP_EXTLOOPINDEX;
                break;
            case 2293760:
                k = new EXP_EXTGETFRICTION;
                break;
            case 2359296:
                k = new EXP_EXTGETRESTITUTION;
                break;
            case 2424832:
                k = new EXP_EXTGETDENSITY;
                break;
            case 2490368:
                k = new EXP_EXTGETVELOCITY;
                break;
            case 2555904:
                k = new EXP_EXTGETANGLE;
                break;
            case 2621440:
                k = new EXP_EXTWIDTH;
                break;
            case 2686976:
                k = new EXP_EXTHEIGHT;
                break;
            case 2752512:
                k = new EXP_EXTGETMASS;
                break;
            case 2818048:
                k = new EXP_EXTGETANGULARVELOCITY;
                break;
            case 2883584:
                k = new EXP_EXTGETNAME;
                break;
            case 2949120:
                k = new EXP_NUMBEROFSELECTED;
                break;
            case 3014656:
                k = new EXP_EXTINSTANCEDATA;
                break;
            default:
                k = new Xj
            }
        }
        if (null != k && (k.code = m,
        0 != m)) {
            var l = S(g);
            switch (m) {
            case 262143:
                k.nd = g.bd();
                break;
            case 65535:
                k.value = D(g);
                break;
            case 1572863:
                k.value = Ta(g);
                break;
            case 1638399:
                T(g, 4);
                k.di = S(g);
                break;
            case 3342335:
                T(g, 4);
                k.di = S(g);
                break;
            default:
                if (f = m & 65535,
                0 != (f & 32768) && (f -= 65536),
                2 <= f || f == yg)
                    switch (k.Cm = F(g),
                    k.Tf = F(g),
                    m & 4294901760) {
                    case 1048576:
                        k.di = S(g);
                        break;
                    case 1245184:
                        k.di = S(g)
                    }
            }
            g.seek(h + l)
        }
        d[e] = k
    }
}
function Uj(a) {
    var b = S(a.file);
    T(a.file, 4);
    this.data = 0;
    6 < b && (this.data = a.file.Ba,
    T(a.file, b - 6))
}
var Ji = 1
  , Hi = 4
  , Ii = 8;
function Pj(a) {
    this.Dj = S(a.file);
    this.lL = S(a.file)
}
function Qj(a) {
    T(a.file, 4);
    this.Ba = 0;
    this.id = S(a.file)
}
function xj(a) {
    this.value = D(a.file);
    this.Ux = 0
}
function Jj(a) {
    this.key = S(a.file)
}
function uj(a) {
    this.Tf = F(a.file);
    this.Cm = F(a.file);
    this.type = F(a.file)
}
function Wj(a) {
    T(a.file, 4);
    this.dF = 0;
    for (this.Tc = []; ; ) {
        var b = F(a.file)
          , c = F(a.file);
        if (-1 == b)
            break;
        this.Tc.push(b);
        this.Tc.push(c)
    }
}
function Yj() {}
Yj.prototype = {};
function Cb(a, b, c, d) {
    d.fw = -1;
    if (-1 == a.Lt)
        0 != c && (d.dir = -1,
        0 == (a.Fo & 8) && (d.dir = cg(b, a.Tw))),
        d.x = a.Ww,
        d.y = a.Xw,
        a = a.NB,
        a > b.J.me - 1 && (a = b.J.me - 1),
        d.fw = a,
        d.YD = !1;
    else {
        b.G.Nq = !1;
        var e;
        e = Ui(b.G, a.Mt);
        d.YD = b.G.re;
        if (null == e)
            return !1;
        d.x = e.B;
        d.y = e.A;
        d.fw = e.Dg;
        if (0 != (a.Fo & 2) && 0 != (e.mb & Zg) && 0 <= e.b.qc) {
            var f;
            f = e.b.xc;
            null != b.fc(e) && (f = 0);
            f = Kh(b.m.xa, e.b.qc, f, e.b.Kc, e.b.Lc);
            d.x += f.Gl - f.Hb;
            d.y += f.Il - f.Eb
        }
        if (0 != (a.Fo & 1)) {
            f = a.MB + e.c.Ed(e) & 31;
            var g = a.Uw * Zj[f] / 256;
            d.x += a.Uw * ak[f] / 256;
            d.y += g
        } else
            d.x += a.Ww,
            d.y += a.Xw;
        0 != (c & 1) && (d.dir = 0 != (a.Fo & 8) ? -1 : 0 != (a.Fo & 4) ? e.c.Ed(e) : cg(b, a.Tw))
    }
    return 0 != (c & 2) && (d.x < b.So || d.x > b.Ro || d.y < b.Uo || d.y > b.To) ? !1 : !0
}
function Lj(a) {
    this.Lt = F(a.file);
    this.Fo = F(a.file);
    this.Ww = F(a.file);
    this.Xw = F(a.file);
    this.Uw = F(a.file);
    this.MB = F(a.file);
    this.Tw = D(a.file);
    this.Vw = F(a.file);
    this.Mt = F(a.file);
    this.NB = F(a.file)
}
Lj.prototype = p(new Yj, {});
function zj(a) {
    this.Lt = F(a.file);
    this.Fo = F(a.file);
    this.Ww = F(a.file);
    this.Xw = F(a.file);
    this.Uw = F(a.file);
    this.MB = F(a.file);
    this.Tw = D(a.file);
    this.Vw = F(a.file);
    this.Mt = F(a.file);
    this.NB = F(a.file);
    this.Fz = S(a.file);
    S(a.file)
}
zj.prototype = p(new Yj, {});
function Mj(a) {
    this.Lt = F(a.file);
    this.Fo = F(a.file);
    this.Ww = F(a.file);
    this.Xw = F(a.file);
    this.Uw = F(a.file);
    this.MB = F(a.file);
    this.Tw = D(a.file);
    this.Vw = F(a.file);
    this.Mt = F(a.file);
    this.NB = F(a.file);
    this.Fz = F(a.file);
    F(a.file);
    T(a.file, 4);
    S(a.file)
}
Mj.prototype = p(new Yj, {});
function yj(a) {
    this.HN = S(a.file);
    S(a.file)
}
function wj(a) {
    this.value = S(a.file)
}
function Rj(a) {
    this.nd = a.file.bd()
}
function vj(a) {
    this.ph = D(a.file);
    this.FA = D(a.file)
}
function Nj(a) {
    this.jr = F(a.file);
    this.Cu = F(a.file);
    this.kr = F(a.file);
    this.Du = F(a.file)
}
function bk(a, b, c) {
    this.index = D(a.file);
    this.wM = D(a.file);
    this.global = b;
    c ? this.lI = Ta(a.file) : (this.lI = D(a.file),
    T(a.file, 4))
}
function Vj(a) {
    this.fa = D(a.file);
    this.lF = D(a.file);
    this.dL = D(a.file);
    this.values = [];
    for (var b = 1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.fa & b); e++) {
        var f = new bk(a,0 != (this.fa & c),0 != (this.fa & d))
          , b = b << 4
          , c = c << 4
          , d = d << 4;
        this.values.push(f)
    }
}
Vj.prototype = {
    evaluate: function(a) {
        if (null == a.za || 0 != this.lF && (a.za.ju & this.lF) != this.dL)
            return !1;
        for (var b = 0; b < this.values.length; b++) {
            var c = this.values[b], d;
            d = c.global ? uc(a.c.m, c.index) : dc(a.za, c.index);
            if (!ec(d, c.lI, c.wM))
                return !1
        }
        return !0
    }
};
function ck() {
    this.En = []
}
ck.prototype = {
    qe: function() {},
    fC: function() {},
    eC: function() {},
    CH: function() {},
    tf: function() {},
    Rm: function() {},
    DH: function() {},
    EH: function() {},
    Vf: function() {},
    lx: function() {},
    BH: function() {},
    bN: function() {},
    vH: function(a, b, c, d) {
        var e = this.En[this.En.length - 1];
        e && (a < e.x && (a = e.x),
        b < e.y && (b = e.y),
        a + c > e.x + e.Vc && (c = e.x + e.Vc - a),
        b + d > e.y + e.Wv && (d = e.y + e.Wv - b));
        a = {
            x: a,
            y: b,
            Vc: c,
            Wv: d
        };
        this.En.push(a);
        return a
    },
    nH: function() {
        this.En.pop()
    }
};
function Nc(a) {
    this.Fu = this.Bu = 1;
    this.DB = -1;
    this.FB = this.DC = !1;
    this.im = this.hm = 0;
    if (!(this.Jb = a.getContext("2d")))
        throw Error("Failed to init standard renderer");
}
Nc.prototype = p(new ck, {
    mx: function(a) {
        this.FB = this.DC = a;
        this.Jb.imageSmoothingEnabled = a;
        this.Jb.webkitImageSmoothingEnabled = a;
        this.Jb.mozImageSmoothingEnabled = a;
        this.Jb.msImageSmoothingEnabled = a;
        this.DB = -1;
        this.si(0, 0)
    },
    Jx: function(a, b) {
        this.Jb.scale(a, b);
        this.Bu = a;
        this.Fu = b;
        this.im = this.hm = 0;
        1 < this.Bu ? this.hm = 1 : 0 < this.Bu && 1 > this.Bu && (this.hm = 1 / this.Bu);
        1 < this.Fu && (this.im = 1);
        0 < this.Fu && 1 > this.Fu && (this.im = 1 / this.Fu)
    },
    ps: function(a, b, c, d) {
        this.Jb.clearRect(a, b, c, d)
    },
    qe: function(a, b, c, d, e, f, g) {
        var h = this.Jb;
        this.si(f, g);
        h.fillStyle = ma(e);
        e = a - Math.floor(a);
        f = b - Math.floor(b);
        0 != e && (e = 1 - e);
        0 != f && (f = 1 - f);
        e += this.hm;
        f += this.im;
        h.fillRect(a, b, c + e, d + f)
    },
    fC: function(a, b, c, d, e, f, g) {
        var h = this.Jb;
        this.si(f, g);
        h.fillStyle = ma(e);
        oa(h, a, b, c, d);
        h.fill()
    },
    eC: function(a, b, c, d, e, f, g, h, k) {
        if (e == f)
            return this.qe(a, b, c, d, e, h, k);
        var m = this.Jb;
        this.si(h, k);
        h = a - Math.floor(a);
        k = b - Math.floor(b);
        0 != h && (h = 1 - h);
        0 != k && (k = 1 - k);
        h += this.hm;
        k += this.im;
        this.vE(a, b, c + h, d + k, g, e, f);
        m.fillRect(a, b, c + h, d + k)
    },
    CH: function(a, b, c, d, e, f, g, h, k) {
        if (e == f)
            return this.fC(a, b, c, d, e, h, k);
        var m = this.Jb;
        this.si(h, k);
        this.vE(a, b, c, d, g, e, f);
        oa(m, a, b, c, d);
        this.Jb.fill()
    },
    tf: function(a, b, c, d, e, f, g, h) {
        var k = this.Jb
          , m = b - a.Hb
          , l = c - a.Eb;
        this.si(g, h);
        g = b - Math.floor(b);
        h = c - Math.floor(c);
        0 != g && (g = 1 - g);
        0 != h && (h = 1 - h);
        g += this.hm;
        h += this.im;
        var t = 0, w = 0, r;
        0 == a.rf ? r = a.Jf : (r = a.app.xa.Ke[a.rf],
        t = a.$i,
        w = a.aj);
        null != r && (0 == d && 1 == e && 1 == f ? 0 == a.rf && 0 == g && 0 == h ? k.drawImage(r, m, l) : k.drawImage(r, t, w, a.width, a.height, m, l, a.width + g, a.height + h) : (k.save(),
        k.translate(b, c),
        0 != d && k.rotate(.0174532925 * -d),
        k.scale(Math.max(.001, e), Math.max(.001, f)),
        k.translate(-a.Hb, -a.Eb),
        k.drawImage(r, t, w, a.width, a.height, 0, 0, a.width, a.height),
        k.restore()))
    },
    Rm: function(a, b, c, d, e, f, g) {
        this.si(f, g);
        f = b - Math.floor(b);
        g = c - Math.floor(c);
        0 != f && (f = 1 - f);
        0 != g && (g = 1 - g);
        f += this.hm;
        g += this.im;
        this.Jb.drawImage(a, b, c, d + f, e + g)
    },
    DH: function(a, b, c, d, e, f, g) {
        var h = this.Jb;
        this.si(f, g);
        h.save();
        h.beginPath();
        h.moveTo(b, c);
        h.lineTo(b + d, c);
        h.lineTo(b + d, c + e);
        h.lineTo(b, c + e);
        h.lineTo(b, c);
        h.clip();
        f = a.width;
        g = a.height;
        d = Math.floor(d / f) + 1;
        e = Math.floor(e / g) + 1;
        var k, m, l = b - Math.floor(b), t = c - Math.floor(c);
        0 != l && (l = 1 - l);
        0 != t && (t = 1 - t);
        var l = l + this.hm, t = t + this.im, w = 0, r = 0, u;
        0 == a.rf ? u = a.Jf : (u = a.app.xa.Ke[a.rf],
        w = a.$i,
        r = a.aj);
        if (null != u)
            for (k = 0; k < d; k++)
                for (m = 0; m < e; m++)
                    h.drawImage(u, w, r, a.width, a.height, b + k * f, c + m * g, a.width + l, a.height + t);
        h.restore()
    },
    EH: function(a, b, c, d, e, f, g) {
        if (!(a instanceof Mh))
            throw Error("renderPatternEllipse: bad image type: " + typeof a);
        var h = this.Jb;
        this.si(f, g);
        0 == a.rf ? null != a.Jf && (h.fillStyle = h.createPattern(a.Jf, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"),
        a.pattern.width = a.width,
        a.pattern.height = a.height,
        h = a.pattern.getContext("2d"),
        h.drawImage(a.app.xa.Ke[a.rf], a.$i, a.aj, a.width, a.height, 0, 0, a.width, a.height)),
        h.fillStyle = h.createPattern(a.pattern, "repeat"));
        oa(h, b, c, d, e);
        this.Jb.fill()
    },
    Vf: function(a, b, c, d, e, f, g, h) {
        var k = this.Jb;
        this.si(g, h);
        k.strokeStyle = ma(e);
        k.lineCap = "round";
        k.lineWidth = f;
        k.beginPath();
        k.moveTo(a, b);
        k.lineTo(c, d);
        k.closePath();
        k.stroke()
    },
    lx: function(a, b, c, d, e, f, g, h) {
        var k = this.Jb;
        this.si(g, h);
        k.strokeStyle = ma(e);
        k.lineWidth = f;
        k.strokeRect(a, b, c, d)
    },
    BH: function(a, b, c, d, e, f, g, h) {
        var k = this.Jb;
        this.si(g, h);
        k.lineWidth = e;
        k.strokeStyle = ma(f);
        oa(k, a, b, c, d);
        this.Jb.stroke()
    },
    bN: function(a, b, c, d, e, f) {
        var g = this.Jb;
        e = ma(e);
        1 == f ? (g.beginPath(),
        g.moveTo(a, b),
        g.lineTo(a + c, b),
        g.lineTo(a + c / 2, b - d)) : (g.beginPath(),
        g.moveTo(a, b),
        g.lineTo(a, b - c),
        g.lineTo(a - d, b - c / 2));
        g.closePath();
        g.lineWidth = 1;
        g.strokeStyle = e;
        g.stroke();
        g.fillStyle = e;
        g.fill()
    },
    clip: function(a, b, c, d) {
        var e = this.Jb;
        e.save();
        e.beginPath();
        e.rect(a, b, c, d);
        e.clip()
    },
    NN: function() {
        this.Jb.restore()
    },
    vH: function() {
        var a = this.Jb
          , b = ck.prototype.vH.apply(this, arguments);
        a.beginPath();
        a.rect(b.x, b.y, b.Vc, b.Wv);
        a.clip()
    },
    nH: function() {
        var a = this.Jb;
        ck.prototype.nH.apply(this, arguments);
        if (0 < this.En.length) {
            var b = this.En[this.En.length - 1];
            a.beginPath();
            a.rect(b.x, b.y, b.Vc, b.Wv);
            a.clip()
        } else
            a.nQ()
    },
    si: function(a, b) {
        var c = this.Jb;
        if ("undefined" == typeof a)
            c.globalAlpha = 1,
            c.Gn = "source-over";
        else if (a != this.DB || b != this.vM) {
            this.DB = a;
            this.vM = b;
            var d = a & dk
              , e = 0 != (a & qj) | this.DC;
            e != this.FB && (this.FB = e,
            c.imageSmoothingEnabled = e,
            c.webkitImageSmoothingEnabled = e,
            c.mozImageSmoothingEnabled = e,
            c.msImageSmoothingEnabled = e);
            c.globalAlpha = 0 != (a & ek) ? (b >>> 24 & 255) / 255 : d == Qc ? (128 - b) / 128 : 1;
            switch (d) {
            case fk:
                c.Gn = "lighter";
                break;
            case gk:
                c.Gn = "xor";
                break;
            default:
                c.Gn = "source-over"
            }
        }
    },
    vE: function(a, b, c, d, e, f, g) {
        a = e ? this.Jb.createLinearGradient(a, b, a, b + d) : this.Jb.createLinearGradient(a, b, a + c, b);
        a.addColorStop(0, ma(f));
        a.addColorStop(1, ma(g));
        this.Jb.fillStyle = a
    }
});
var zd = 1;
function fe() {
    this.vs = "";
    this.JE = this.tu = this.uu = this.aI = this.bI = 0
}
fe.prototype = {
    load: function(a) {
        var b = a.Ba;
        T(a, 4);
        this.bI = D(a);
        this.aI = D(a);
        this.uu = D(a);
        this.tu = Va(a);
        var c = D(a)
          , d = D(a);
        a.seek(b + c);
        this.vs = a.bd();
        this.vs = this.vs.substr(0, this.vs.indexOf("."));
        this.JE = b + d
    }
};
function hk() {}
hk.prototype = {
    vF: function() {
        return null
    }
};
var Ie = 1
  , Je = 2;
function ik() {
    this.u = this.gt = this.et = this.vw = 0;
    this.jb = this.eG = !1;
    this.Tk = this.LE = this.C = this.wa = null
}
ik.prototype = {
    start: function(a, b, c, d) {
        this.LE = b;
        this.Tk = this.LE.getContext("2d");
        this.wa = c;
        this.C = d;
        this.vw = (new Date).getTime();
        this.u = a.aI;
        0 == this.u && (this.u = 1);
        this.et = this.vw;
        this.gt = this.vw + this.u;
        this.jb = this.eG = !0
    },
    T: function(a, b, c, d, e, f, g) {
        this.xw && (this.Tk.globalCompositeOperation = "source-atop");
        1 == arguments.length ? this.Tk.drawImage(a, 0, 0) : 0 < f && 0 < g && this.Tk.drawImage(a, d, e, f, g, b, c, f, g)
    },
    stretch: function(a, b, c, d, e, f, g, h, k) {
        this.xw && (this.Tk.globalCompositeOperation = "source-atop");
        0 < d && 0 < e && 0 < h && 0 < k && this.Tk.drawImage(a, f, g, h, k, b, c, d, e)
    },
    md: function() {},
    end: function() {},
    ya: function() {}
};
function jk(a) {
    a.et = (new Date).getTime();
    a.et > a.gt && (a.et = a.gt);
    return a.et - a.vw
}
function He(a) {
    if (a.eG) {
        var b = new Date;
        return b.getTime() >= a.gt ? !0 : b.getTime() >= a.gt
    }
    return !0
}
function Cd(a) {
    this.app = a
}
Cd.prototype = {
    Qp: function(a, b, c, d) {
        var e = null;
        "cctrans" == a.vs.toLowerCase() && (e = new Bk);
        return null != e ? (e = e.vF(a),
        this.app.file.seek(a.JE),
        e.xw = !1,
        e.ya(a, this.app.file, b, c, d),
        e) : null
    }
};
function Ck(a, b, c) {
    a = a.getContext("2d");
    a.drawImage(b, 0, 0);
    var d = b.width;
    b = b.height;
    var e = a.getImageData(0, 0, d, b), f, g = (c & 16711680) >> 16, h = (c & 65280) >> 8, k = c & 255;
    for (f = 0; f < b; f++)
        for (c = 0; c < d; c++)
            0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g,
            e.data[4 * (f * d + c) + 1] = h,
            e.data[4 * (f * d + c) + 2] = k);
    a.putImageData(e, 0, 0)
}
;var Dk = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
function Bk() {}
Bk.prototype = p(new hk, {
    vF: function(a) {
        var b = a.bI;
        a = "" + String.fromCharCode(b & 255);
        b >>= 8;
        a += String.fromCharCode(b & 255);
        b >>= 8;
        a += String.fromCharCode(b & 255);
        a += String.fromCharCode(b >> 8 & 255);
        for (b = 0; b < Dk.length && a != Dk[b]; b++)
            ;
        a = null;
        switch (b) {
        case 0:
            a = new Ek;
            break;
        case 1:
            a = new Fk;
            break;
        case 2:
            a = new Gk;
            break;
        case 3:
            a = new Hk;
            break;
        case 4:
            a = new Ik;
            break;
        case 5:
            a = new Jk;
            break;
        case 6:
            a = new Kk;
            break;
        case 7:
            a = new Lk;
            break;
        case 8:
            a = new Mk;
            break;
        case 9:
            a = new Nk;
            break;
        case 10:
            a = new Ok;
            break;
        case 11:
            a = new Pk;
            break;
        case 12:
            a = new Qk;
            break;
        case 13:
            a = new Rk;
            break;
        case 14:
            a = new Sk;
            break;
        case 15:
            a = new Tk;
            break;
        case 16:
            a = new Uk;
            break;
        case 17:
            a = new Vk;
            break;
        case 18:
            a = new Wk;
            break;
        case 19:
            a = new Xk;
            break;
        case 20:
            a = new Yk
        }
        return a
    }
});
function Fk() {
    this.fG = this.j = this.l = this.hc = 0
}
Fk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.fG = 8 != this.hc ? this.hc : Math.floor(8 * Math.random()));
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c;
            switch (this.fG) {
            case 0:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j * a / this.u;
                this.T(this.C, b, 0, b, this.j - c, b, c);
                break;
            case 1:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j * a / this.u;
                this.T(this.C, b, this.j - c, b, 0, b, c);
                break;
            case 2:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j * a / this.u;
                this.T(this.C, b, 0, b, 0, b, c);
                break;
            case 3:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j * a / this.u;
                this.T(this.C, b, this.j - c, b, this.j - c, b, c);
                break;
            case 4:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j / 2 * a / this.u;
                this.T(this.C, b, 0, b, this.j / 2 - c, b, c);
                this.T(this.C, b, this.j - c, b, this.j / 2, b, c);
                break;
            case 5:
                b = this.l / 3 * a / this.u;
                c = this.j;
                this.T(this.C, 0, 0, this.l / 3 - b, 0, b, c);
                this.T(this.C, this.l - b, 0, 2 * this.l / 3, 0, b, c);
                b = this.l / 3;
                c = this.j / 2 * a / this.u;
                this.T(this.C, b, 0, b, 0, b, c);
                this.T(this.C, b, this.j - c, b, this.j - c, b, c);
                break;
            case 6:
                b = this.l / 3;
                c = this.j * a / this.u;
                this.T(this.C, 0, this.j - c, 0, 0, b, c);
                this.T(this.C, b, 0, b, this.j - c, b, c);
                this.T(this.C, 2 * b, this.j - c, 2 * b, 0, b, c);
                break;
            case 7:
                b = this.l / 7;
                c = this.j * a / this.u;
                this.T(this.C, 0, this.j - c, 0, 0, b, c);
                this.T(this.C, b, 0, b, this.j - c, b, c);
                this.T(this.C, 2 * b, this.j - c, 2 * b, 0, b, c);
                this.T(this.C, 3 * b, 0, 3 * b, this.j - c, b, c);
                this.T(this.C, 4 * b, this.j - c, 4 * b, 0, b, c);
                this.T(this.C, 5 * b, 0, 5 * b, this.j - c, b, c);
                this.T(this.C, 6 * b, this.j - c, 6 * b, 0, 2 * b, c);
                break;
            default:
                this.T(this.C)
            }
        }
        return null
    },
    end: function() {}
});
function Gk() {
    this.j = this.l = this.hc = 0
}
Gk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c;
            this.T(this.C);
            switch (this.hc) {
            case 0:
                b = this.l / 2 * a / this.u;
                b = this.l / 2 - b;
                c = this.j / 2 * a / this.u;
                c = this.j / 2 - c;
                this.stretch(this.wa, 0, 0, b, c, 0, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                c = this.j / 2 - c;
                this.stretch(this.wa, this.l / 2 + b, 0, this.l / 2 - b, c, this.l / 2, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                b = this.l / 2 - b;
                c = this.j / 2 * a / this.u;
                this.stretch(this.wa, 0, this.j / 2 + c, b, this.j / 2 - c, 0, this.j / 2, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.stretch(this.wa, this.l / 2 + b, this.j / 2 + c, this.l / 2 - b, this.j / 2 - c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
                break;
            case 1:
                b = this.l * a / this.u;
                b = this.l - b;
                c = this.j * a / this.u;
                c = this.j - c;
                this.T(this.wa, 0, 0, this.l - b, this.j - c, b, c);
                break;
            case 2:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                c = this.j - c;
                this.T(this.wa, b, 0, 0, this.j - c, this.l - b, c);
                break;
            case 3:
                b = this.l * a / this.u;
                b = this.l - b;
                c = this.j * a / this.u;
                this.T(this.wa, 0, c, this.l - b, 0, b, this.j - c);
                break;
            case 4:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                this.T(this.wa, b, c, 0, 0, this.l - b, this.j - c);
                break;
            case 5:
                b = this.l / 2 * a / this.u;
                b = this.l / 2 - b;
                c = this.j / 2 * a / this.u;
                c = this.j / 2 - c;
                this.T(this.wa, b - this.l / 2, c - this.j / 2, 0, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                c = this.j / 2 - c;
                this.T(this.wa, this.l / 2 + b, c - this.j / 2, this.l / 2, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                b = this.l / 2 - b;
                c = this.j / 2 * a / this.u;
                this.T(this.wa, b - this.l / 2, this.j / 2 + c, 0, this.j / 2, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.T(this.wa, this.l / 2 + b, this.j / 2 + c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
                break;
            case 6:
                c = this.j / 2 * a / this.u;
                c = this.j / 2 - c;
                this.T(this.wa, 0, c - this.j / 2, 0, 0, this.l, this.j / 2);
                this.T(this.wa, 0, this.j - c, 0, this.j / 2, this.l, this.j / 2);
                break;
            case 7:
                b = this.l / 2 * a / this.u,
                b = this.l / 2 - b,
                this.T(this.wa, b - this.l / 2, 0, 0, 0, this.l / 2, this.j),
                this.T(this.wa, this.l - b, 0, this.l / 2, 0, this.l / 2, this.j)
            }
        }
        return null
    },
    end: function() {}
});
function Ek() {
    this.Rc = this.le = this.Bz = this.Ji = 0;
    this.dM = null
}
Ek.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ji = S(b);
        this.Bz = S(b);
        this.start(a, c, d, e)
    },
    md: function() {
        var a = this.wa.width, b = this.wa.height, c;
        if (this.jb) {
            0 == this.Ji && (this.Ji = 1);
            switch (this.Bz) {
            case 0:
            case 1:
                this.le = (a + this.Ji - 1) / this.Ji;
                0 == this.le && (this.le = 1,
                this.Ji = a);
                break;
            default:
                this.le = (b + this.Ji - 1) / this.Ji,
                0 == this.le && (this.le = 1,
                this.Ji = b)
            }
            this.Rc = 0;
            this.jb = !1
        }
        if (0 >= this.Ji || 0 >= this.le || 0 == this.u)
            this.T(this.C);
        else {
            var d = this.le * jk(this) / this.u;
            if (d > this.Rc) {
                var e = 0
                  , f = 0
                  , g = 0
                  , h = 0;
                for (c = 0; c < this.Ji; c++) {
                    switch (this.Bz) {
                    case 0:
                        e = this.Rc + c * this.le;
                        f = 0;
                        g = d - this.Rc;
                        h = b;
                        break;
                    case 1:
                        e = a - (this.Rc + c * this.le) - (d - this.Rc);
                        f = 0;
                        g = d - this.Rc;
                        h = b;
                        break;
                    case 2:
                        e = 0;
                        f = this.Rc + c * this.le;
                        g = a;
                        h = d - this.Rc;
                        break;
                    case 3:
                        e = 0,
                        f = b - (this.Rc + c * this.le) - (d - this.Rc),
                        g = a,
                        h = d - this.Rc
                    }
                    this.T(this.C, e, f, e, f, g, h)
                }
            }
            this.Rc = d
        }
        return this.dM
    },
    end: function() {}
});
function Hk() {
    this.j = this.l = this.Nv = this.Ub = 0
}
Hk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ub = D(b);
        this.Nv = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d, e, f, g, h, k, m, l;
            m = this.l / this.Ub;
            l = this.j / this.Nv;
            d = this.l / this.Ub;
            e = this.j / this.Nv;
            for (f = 0; f < this.Ub; f++)
                for (g = 0; g < this.Nv; g++)
                    b = f * m,
                    c = g * l,
                    h = d * a / this.u,
                    k = e * a / this.u,
                    this.stretch(this.C, b + (d - h) / 2, c + (e - k) / 2, h, k, b + (d - h) / 2, c + (e - k) / 2, h, k)
        }
        return null
    },
    end: function() {}
});
function Ik() {
    this.Rc = this.le = this.Nf = 0
}
Ik.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Nf = S(b);
        this.start(a, c, d, e)
    },
    md: function() {
        if (this.jb) {
            switch (this.Nf) {
            case 0:
            case 1:
                this.le = this.wa.width / 2;
                break;
            default:
                this.le = this.wa.height / 2
            }
            this.Rc = 0;
            this.jb = !1
        }
        if (0 == this.le)
            this.T(this.C);
        else {
            var a = 0
              , b = 0
              , c = 0
              , d = 0
              , e = this.le * jk(this) / this.u;
            if (e > this.Rc) {
                switch (this.Nf) {
                case 0:
                    a = this.wa.width / 2 - e;
                    b = 0;
                    c = e - this.Rc;
                    d = this.C.height;
                    break;
                case 1:
                    a = this.Rc;
                    b = 0;
                    c = e - this.Rc;
                    d = this.C.height;
                    break;
                case 2:
                    a = 0;
                    b = this.wa.height / 2 - e;
                    c = this.C.width;
                    d = e - this.Rc;
                    break;
                case 3:
                    a = 0,
                    b = this.Rc,
                    c = this.C.width,
                    d = e - this.Rc
                }
                this.T(this.C, a, b, a, b, c, d);
                switch (this.Nf) {
                case 0:
                    a = this.wa.width / 2 + this.Rc;
                    break;
                case 1:
                    a = this.wa.width - e;
                    break;
                case 2:
                    b = this.wa.height / 2 + this.Rc;
                    break;
                case 3:
                    b = this.wa.height - e
                }
                this.T(this.C, a, b, a, b, c, d)
            }
        }
        return null
    },
    end: function() {}
});
function Yk() {}
Yk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1);
        var a;
        this.Tk.globalAlpha = 1;
        this.T(this.wa);
        a = jk(this) / this.u;
        this.Tk.globalAlpha = a;
        this.T(this.C);
        return null
    },
    end: function() {
        this.Tk.globalAlpha = 1
    }
});
function Jk() {
    this.j = this.l = this.xs = this.hc = this.Ub = 0
}
Jk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ub = D(b);
        this.hc = D(b);
        this.xs = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d, e, f;
            b = 0;
            var g;
            if (0 == this.hc)
                for (g = this.j / this.Ub,
                f = 0; f < this.Ub; f++)
                    0 == b ? (b = 0,
                    c = f * g,
                    d = this.l * a / this.u,
                    e = f == this.Ub - 1 ? this.j : g + 1,
                    0 == this.xs ? this.T(this.C, b, c, b, c, d, e) : this.T(this.C, b, c, this.l - d, c, d, e),
                    b = 1) : (c = f * g,
                    d = this.l * a / this.u,
                    b = this.l - d,
                    e = f == this.Ub - 1 ? this.j : g + 1,
                    0 == this.xs ? this.T(this.C, b, c, b, c, d, e) : this.T(this.C, b, c, 0, c, d, e),
                    b = 0);
            else
                for (g = this.l / this.Ub,
                f = 0; f < this.Ub; f++)
                    0 == b ? (b = f * g,
                    c = 0,
                    e = this.j * a / this.u,
                    d = f == this.Ub - 1 ? this.l : g + 1,
                    0 == this.xs ? this.T(this.C, b, c, b, c, d, e) : this.T(this.C, b, c, b, this.j - e, d, e),
                    b = 1) : (b = f * g,
                    e = this.j * a / this.u,
                    c = this.j - e,
                    d = f == this.Ub - 1 ? this.l : g + 1,
                    0 == this.xs ? this.T(this.C, b, c, b, c, d, e) : this.T(this.C, b, c, b, 0, d, e),
                    b = 0)
        }
        return null
    },
    end: function() {}
});
function Kk() {
    this.SA;
    this.no = this.qo = this.Tj = this.Eh = this.da = 0;
    this.bh = null
}
Kk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.SA = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        if (this.jb) {
            var a = this.wa.width
              , b = this.wa.height;
            this.da = Math.floor((a * this.SA / 100 + b * this.SA / 100) / 2);
            0 == this.da && (this.da = 1);
            this.Eh = (a + this.da - 1) / this.da;
            this.Tj = (b + this.da - 1) / this.da;
            this.qo = this.Eh * this.Tj;
            a = Math.floor((this.qo + 7) / 8 + 2);
            this.no = 0;
            this.bh = Array(a);
            for (b = 0; b < a; b++)
                this.bh[b] = 0;
            this.jb = !1
        }
        if (null == this.bh || 2 > this.Eh || 2 > this.Tj || 0 == this.u)
            this.T(this.C);
        else {
            var c, d, b = a = 0;
            c = Math.floor(this.qo * jk(this) / this.u);
            var e = c - this.no;
            if (0 != e)
                for (this.no = c,
                d = 0; d < e; d++) {
                    for (c = 0; 1 > c; c++) {
                        var a = Math.floor(this.Eh * Math.random()), b = Math.floor(this.Tj * Math.random()), f, g;
                        f = b * this.Eh + a;
                        g = Math.floor(f / 8);
                        f = 1 << (f & 7);
                        if (0 == (this.bh[g] & f)) {
                            this.bh[g] |= f;
                            break
                        }
                        var h = g, k = (this.qo + 7) / 8, m, l = !1;
                        for (m = g; m < k; m++,
                        h++)
                            if (-1 != this.bh[h]) {
                                b = Math.floor(8 * m / this.Eh);
                                a = Math.floor(8 * m % this.Eh);
                                for (f = 1; 0 != f; f <<= 1) {
                                    if (0 == (this.bh[h] & f)) {
                                        this.bh[h] |= f;
                                        l = !0;
                                        break
                                    }
                                    if (++a >= this.Eh && (a = 0,
                                    ++b >= this.Tj))
                                        break
                                }
                                if (l)
                                    break
                            }
                        if (l)
                            break;
                        for (m = h = 0; m < g; m++,
                        h++) {
                            if (255 != this.bh[h]) {
                                b = Math.floor(8 * m / m_nbBlockPerLine);
                                a = Math.floor(8 * m % m_nbBlockPerLine);
                                for (f = 1; 0 != f; f <<= 1) {
                                    if (0 == (this.bh[h] & f)) {
                                        this.bh[h] |= f;
                                        l = !0;
                                        break
                                    }
                                    if (++a >= this.Eh && (a = 0,
                                    ++b >= this.Tj))
                                        break
                                }
                                if (l)
                                    break
                            }
                            if (l)
                                break;
                            l = !1
                        }
                    }
                    1 > c && this.T(this.C, Math.floor(a * this.da), Math.floor(b * this.da), Math.floor(a * this.da), Math.floor(b * this.da), this.da, this.da)
                }
        }
        return null
    },
    end: function() {}
});
function Lk() {
    this.j = this.l = this.hc = 0
}
Lk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this)
          , b = a / this.u;
        if (1 < b)
            this.T(this.C);
        else {
            var c, d, e;
            .25 > b ? (d = 2 * this.l * a / this.u,
            d *= 2,
            e = this.j / 7,
            b = this.l / 2 - d / 2,
            c = this.j / 2 - e / 2,
            this.T(this.C, b, c, b, c, d, e),
            d = this.l / 7,
            e = 2 * this.j * a / this.u,
            e *= 2,
            b = this.l / 2 - d / 2,
            c = this.j / 2 - e / 2) : (b = this.l / 2,
            d = this.l * a / this.u - b,
            e = this.j / 2,
            c = 0,
            this.T(this.C, b, c, b, c, d, e),
            c = this.j / 2,
            e = this.j * a / this.u - c,
            b = d = this.l / 2,
            this.T(this.C, b, c, b, c, d, e),
            d = this.l * a / this.u - this.l / 2,
            b = this.l / 2 - d,
            c = e = this.j / 2,
            this.T(this.C, b, c, b, c, d, e),
            e = this.j * a / this.u - this.j / 2,
            c = this.j / 2 - e,
            d = this.l / 2,
            b = 0);
            this.T(this.C, b, c, b, c, d, e)
        }
        return null
    },
    end: function() {}
});
function Mk() {
    this.RA = this.j = this.l = this.hc = 0
}
Mk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.RA = !1);
        var a = jk(this)
          , b = a / this.u;
        if (1 < b)
            this.T(this.C);
        else {
            var c, d, e, f;
            if (.5 >= b)
                switch (this.hc) {
                case 0:
                    e = this.l * a / this.u * 2;
                    f = this.j / 2;
                    c = this.l - e;
                    d = this.j / 2;
                    this.T(this.C, 0, 0, c, d, e, f);
                    break;
                case 1:
                    e = this.l * a / this.u * 2;
                    f = this.j / 2;
                    c = this.l - e;
                    d = this.j / 2;
                    this.T(this.C, c, 0, 0, d, e, f);
                    break;
                case 2:
                    e = this.l * a / this.u * 2;
                    f = this.j / 2;
                    c = this.l - e;
                    d = this.j / 2;
                    this.T(this.C, 0, d, c, 0, e, f);
                    break;
                case 3:
                    e = this.l * a / this.u * 2,
                    f = this.j / 2,
                    c = this.l - e,
                    d = this.j / 2,
                    this.T(this.C, c, d, 0, 0, e, f)
                }
            if (.5 < b)
                switch (0 == this.RA && (1 >= this.hc ? this.T(this.C, 0, 0, 0, this.j / 2, this.l, this.j / 2) : this.T(this.C, 0, this.j / 2, 0, 0, this.l, this.j / 2),
                this.RA = !0),
                b = a - this.u / 2,
                b /= this.u / 2,
                f = this.j / 2 * 1E3 * b / 1E3,
                this.hc) {
                case 0:
                case 1:
                    this.stretch(this.C, 0, f, this.l, this.j / 2, 0, this.j / 2, this.l, this.j / 2);
                    this.stretch(this.C, 0, 0, this.l, f, 0, this.j / 2 - f, this.l, f);
                    break;
                case 2:
                case 3:
                    this.stretch(this.C, 0, this.j / 2 - f, this.l, this.j / 2, 0, 0, this.l, this.j / 2),
                    this.stretch(this.C, 0, this.j - f, this.l, f, 0, this.j / 2, this.l, f)
                }
        }
        return null
    },
    end: function() {}
});
function Nk() {
    this.Nf;
    this.le;
    this.Rc
}
Nk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Nf = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        var a = this.wa.width
          , b = this.wa.height;
        if (this.jb) {
            switch (this.Nf) {
            case 0:
            case 1:
                this.le = a;
                break;
            default:
                this.le = b
            }
            this.Rc = 0;
            this.jb = !1
        }
        if (0 == this.u)
            this.T(this.C);
        else {
            var c = this.le * jk(this) / this.u;
            if (c > this.Rc) {
                var d = 0
                  , e = 0;
                switch (this.Nf) {
                case 0:
                    d = c - a;
                    e = 0;
                    break;
                case 1:
                    d = a - c;
                    e = 0;
                    break;
                case 2:
                    d = 0;
                    e = c - b;
                    break;
                case 3:
                    d = 0,
                    e = b - c
                }
                this.T(this.C, d, e, 0, 0, a, b);
                this.Rc = c
            }
        }
        return null
    },
    end: function() {}
});
function Ok() {
    this.j = this.l = this.RE = this.Ub = this.hc = 0
}
Ok.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.Ub = D(b);
        this.RE = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d, e, f, g;
            f = this.l * this.Ub / 100;
            g = this.j * this.Ub / 100;
            d = f * a / this.u;
            e = g * a / this.u;
            b = this.l / 2 - d / 2;
            c = this.j / 2 - e / 2;
            0 == this.RE ? this.T(this.C, b, c, b, c, d, e) : this.stretch(this.C, b, c, d, e, this.l / 2 - f / 2, this.j / 2 - g / 2, f, g);
            b = 100 - this.Ub;
            f = this.l * b / 100;
            g = this.j * b / 100;
            d = f / 2 * a / this.u;
            e = g / 2 * a / this.u;
            this.T(this.C, 0, 0, 0, 0, this.l, e);
            this.T(this.C, 0, 0, 0, 0, d, this.j);
            this.T(this.C, 0, this.j - e, 0, this.j - e, this.l, e);
            this.T(this.C, this.l - d, 0, this.l - d, 0, d, this.j)
        }
        return null
    },
    end: function() {}
});
function Pk() {
    this.j = this.l = this.hc = 0
}
Pk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c;
            switch (this.hc) {
            case 0:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j);
                break;
            case 1:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                this.stretch(this.C, this.l - b, 0, b, c, 0, 0, this.l, this.j);
                break;
            case 2:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                this.stretch(this.C, 0, this.j - c, b, c, 0, 0, this.l, this.j);
                break;
            case 3:
                b = this.l * a / this.u;
                c = this.j * a / this.u;
                this.stretch(this.C, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j);
                break;
            case 4:
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                5 > c && (c = 5);
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.wa.width / 2, this.wa.height / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                5 > c && (c = 5);
                this.stretch(this.C, this.l - b, 0, b, c, this.l / 2, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.stretch(this.C, 0, this.j - c, b, c, 0, this.j / 2, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.stretch(this.C, this.l - b, this.j - c, b, c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
                break;
            case 5:
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                5 > c && (c = 5);
                this.stretch(this.C, this.l / 2 - b, this.j / 2 - c, b, c, 0, 0, this.wa.width / 2, this.wa.height / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                5 > c && (c = 5);
                this.stretch(this.C, this.l / 2, this.j / 2 - c, b, c, this.l / 2, 0, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.stretch(this.C, this.l / 2 - b, this.j / 2, b, c, 0, this.j / 2, this.l / 2, this.j / 2);
                b = this.l / 2 * a / this.u;
                c = this.j / 2 * a / this.u;
                this.stretch(this.C, this.l / 2, this.j / 2, b, c, this.l / 2, this.j / 2, this.l / 2, this.j / 2);
                break;
            case 6:
                b = this.l;
                c = this.j * a / this.u;
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j);
                break;
            case 7:
                b = this.l * a / this.u;
                c = this.j;
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j);
                break;
            case 8:
                b = this.l * a / this.u;
                c = this.j;
                this.stretch(this.C, this.l - b, 0, b, c, 0, 0, this.l, this.j);
                break;
            case 9:
                b = this.l,
                c = this.j * a / this.u,
                this.stretch(this.C, 0, this.j - c, b, c, 0, 0, this.l, this.j)
            }
        }
        return null
    },
    end: function() {}
});
function Qk() {
    this.Qd = this.j = this.l = this.hc = 0
}
Qk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.Qd = 0);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c;
            switch (this.hc) {
            case 0:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 1:
                0 == this.Qd ? (b = this.l,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 2:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, this.l - b, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, this.l - b, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 3:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = this.j,
                this.stretch(this.wa, 0, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = this.j,
                this.stretch(this.C, 0, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 4:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = this.j,
                this.stretch(this.wa, this.l / 2 - b / 2, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = this.j,
                this.stretch(this.C, this.l / 2 - b / 2, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 5:
                0 == this.Qd ? (c = 2 * this.j * a / this.u,
                c = this.j - c,
                b = this.l,
                this.stretch(this.wa, 0, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (c = 2 * this.j * a / this.u,
                c -= this.j,
                b = this.l,
                this.stretch(this.C, 0, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j));
                break;
            case 6:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, this.l / 2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, this.l / 2 - b / 2, this.j / 2 - c / 2, b, c, 0, 0, this.l, this.j));
                break;
            case 7:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = this.j,
                this.stretch(this.wa, this.l - b, 0, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = this.j,
                this.stretch(this.C, this.j - b, 0, b, c, 0, 0, this.l, this.j));
                break;
            case 8:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, 0, this.j - c, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, 0, this.j - c, b, c, 0, 0, this.l, this.j));
                break;
            case 9:
                0 == this.Qd ? (b = this.l,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, 0, this.j - c, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, 0, this.j - c, b, c, 0, 0, this.l, this.j));
                break;
            case 10:
                0 == this.Qd ? (b = 2 * this.l * a / this.u,
                b = this.l - b,
                c = 2 * this.j * a / this.u,
                c = this.j - c,
                this.stretch(this.wa, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j),
                a >= this.u / 2 && (this.Qd = 1)) : (b = 2 * this.l * a / this.u,
                b -= this.l,
                c = 2 * this.j * a / this.u,
                c -= this.j,
                this.stretch(this.C, this.l - b, this.j - c, b, c, 0, 0, this.l, this.j))
            }
        }
        return null
    },
    end: function() {}
});
function Rk() {
    this.lo = this.ko = this.j = this.l = this.hc = 0
}
Rk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.lo = this.ko = 0);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d, e;
            b = this.j * a / this.u;
            a = this.l * a / this.u;
            if (0 == this.hc) {
                e = b % 2;
                for (c = 0; c < this.l; c += 2) {
                    for (d = this.ko; d < b; d++)
                        this.T(this.C, c, d, c, d, 1, 1);
                    for (d = this.j - b - e; d < this.j - this.ko; d++)
                        this.T(this.C, c + 1, d + 1, c + 1, d + 1, 1, 1)
                }
                this.ko = 0 == b % 2 ? b : b - 1
            }
            if (1 == this.hc) {
                e = a % 2;
                for (d = 0; d < this.j; d++) {
                    for (c = this.lo; c < a; c += 2)
                        this.T(this.C, c + 1, d, c + 1, d, 1, 1);
                    for (c = this.l - a - e; c < this.l - this.lo; c += 2)
                        this.T(this.C, c, d + 1, c, d + 1, 1, 1)
                }
                this.lo = 0 == a % 2 ? a : a - 1
            }
            if (2 == this.hc) {
                e = b % 2;
                for (c = 0; c < this.l; c += 2) {
                    for (d = this.ko; d < b; d += 2)
                        this.T(this.C, c, d, c, d, 1, 1);
                    for (d = this.j - b - e; d < this.j - this.ko; d += 2)
                        this.T(this.C, c + 1, d + 1, c + 1, d + 1, 1, 1)
                }
                e = a % 2;
                for (d = 0; d < this.j; d += 2) {
                    for (c = this.lo; c < a; c += 2)
                        this.T(this.C, c + 1, d, c + 1, d, 1, 1);
                    for (c = this.l - a - e; c < this.l - this.lo; c += 2)
                        this.T(this.C, c, d + 1, c, d + 1, 1, 1)
                }
                this.ko = 0 == b % 2 ? b : b - 1;
                this.lo = 0 == a % 2 ? a : a - 1
            }
        }
        return null
    },
    end: function() {}
});
function Sk() {
    this.jq = this.j = this.l = this.QE = this.ws = this.Ub = 0
}
Sk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ub = D(b);
        this.ws = D(b);
        this.QE = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.jq = 0);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d;
            b = this.l / 2;
            d = this.j / 2;
            this.jq = 6.28318 * this.Ub * a / this.u;
            1 == this.QE && (this.jq = 6.28318 - this.jq);
            c = this.l / 2 - this.l / 2 * a / this.u;
            b = Math.floor(b + Math.cos(this.jq) * c);
            c = Math.floor(d + Math.sin(this.jq) * c);
            d = this.l * a / this.u;
            a = this.j * a / this.u;
            this.stretch(this.wa, 0, 0, this.l, this.j, 0, 0, this.wa.width, this.wa.height);
            1 == this.DQ ? this.stretch(this.C, b - d / 2, c - a / 2, d, a, 0, 0, this.l, this.j) : this.stretch(this.C, b - d / 2, c - a / 2, d, a, this.l - d, this.j - a, d, a)
        }
        return null
    },
    end: function() {}
});
function Tk() {
    this.tw = this.j = this.l = this.ws = this.Ub = 0
}
Tk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ub = D(b);
        this.ws = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.tw = 0);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d;
            b = this.l / 2;
            c = this.j / 2;
            d = 6.28318 * this.Ub * a / this.u;
            d -= 6.28318 * this.tw;
            1 == this.ws && (d = 6.28318 - d);
            a = this.l * a / this.u;
            b = Math.floor(b + Math.cos(d) * a);
            c = Math.floor(c + Math.sin(d) * a);
            this.T(this.C);
            this.T(this.wa, b - this.l / 2, c - this.j / 2, 0, 0, this.l, this.j);
            0 == this.ws ? 6.28318 <= d && this.tw++ : 0 >= d && this.tw++
        }
        return null
    },
    end: function() {}
});
function Uk() {
    this.sw = this.Aw = this.Cw = this.ww = this.Mf = this.IA = this.Fa = this.Ea = this.no = this.qo = this.Tj = this.Eh = this.da = this.qI = this.Yx = this.NC = 0
}
Uk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.NC = D(b);
        this.Yx = S(b);
        this.qI = S(b);
        this.start(a, c, d, e)
    },
    md: function() {
        var a = this.wa.width
          , b = this.wa.height;
        if (this.jb) {
            this.da = Math.floor((a * this.NC / 100 + b * this.NC / 100) / 2);
            0 == this.da && (this.da = 1);
            this.Eh = (a + this.da - 1) / this.da;
            this.Tj = (b + this.da - 1) / this.da;
            this.IA = this.qI;
            this.Mf = this.Yx;
            switch (this.Yx) {
            case 0:
                this.Ea = this.Fa = 0;
                break;
            case 1:
                this.Ea = a - this.da;
                this.Fa = 0;
                break;
            case 2:
                this.Ea = 0;
                this.Fa = b - this.da;
                break;
            case 3:
                this.Ea = a - this.da;
                this.Fa = b - this.da;
                break;
            case 4:
                this.Ea = a / 2 - this.da,
                this.Fa = b / 2 - this.da,
                this.Mf = 0 == this.IA ? 0 : 1,
                this.ww = this.Ea - this.da,
                this.Cw = this.Fa - this.da,
                this.sw = this.Fa + 2 * this.da,
                this.Aw = this.Ea + 2 * this.da,
                this.Eh = 2 + 2 * (this.Ea + this.da - 1) / this.da,
                this.Tj = 2 + 2 * (this.Fa + this.da - 1) / this.da
            }
            this.qo = Math.floor(this.Eh * this.Tj);
            this.no = 0;
            this.jb = !1
        }
        if (this.da >= a || this.da >= b)
            this.T(this.C);
        else {
            var c;
            c = Math.floor(this.qo * jk(this) / this.u);
            var d = c - this.no;
            if (0 != d)
                for (this.no = c,
                c = 0; c < d; c++)
                    if (this.T(this.C, this.Ea, this.Fa, this.Ea, this.Fa, this.da, this.da),
                    4 == this.Yx)
                        switch (this.Mf) {
                        case 0:
                            this.Ea += this.da;
                            this.Ea >= this.Aw && (this.Ea -= this.da,
                            this.Fa += this.da,
                            this.Mf = 1,
                            this.Aw += this.da);
                            break;
                        case 1:
                            this.Fa += this.da;
                            this.Fa >= this.sw && (this.Fa -= this.da,
                            this.Ea -= this.da,
                            this.Mf = 3,
                            this.sw += this.da);
                            break;
                        case 3:
                            this.Ea -= this.da;
                            this.Ea + this.da <= this.ww && (this.Ea += this.da,
                            this.Fa -= this.da,
                            this.Mf = 2,
                            this.ww -= this.da);
                            break;
                        case 2:
                            this.Fa -= this.da,
                            this.Fa + this.da <= this.Cw && (this.Fa += this.da,
                            this.Ea += this.da,
                            this.Mf = 0,
                            this.Cw -= this.da)
                        }
                    else
                        switch (this.IA) {
                        case 0:
                            switch (this.Mf) {
                            case 0:
                                this.Ea += this.da;
                                this.Ea >= a && (this.Ea -= this.da,
                                this.Fa += this.da,
                                this.Mf = 1);
                                break;
                            case 1:
                                this.Ea -= this.da;
                                0 >= this.Ea + this.da && (this.Ea += this.da,
                                this.Fa += this.da,
                                this.Mf = 0);
                                break;
                            case 2:
                                this.Ea += this.da;
                                this.Ea >= a && (this.Ea -= this.da,
                                this.Fa -= this.da,
                                this.Mf = 3);
                                break;
                            case 3:
                                this.Ea -= this.da,
                                0 >= this.Ea + this.da && (this.Ea += this.da,
                                this.Fa -= this.da,
                                this.Mf = 2)
                            }
                            break;
                        case 1:
                            switch (this.Mf) {
                            case 0:
                                this.Fa += this.da;
                                this.Fa >= b && (this.Fa -= this.da,
                                this.Ea += this.da,
                                this.Mf = 2);
                                break;
                            case 1:
                                this.Fa += this.da;
                                this.Fa >= b && (this.Fa -= this.da,
                                this.Ea -= this.da,
                                this.Mf = 3);
                                break;
                            case 2:
                                this.Fa -= this.da;
                                0 >= this.Fa + this.da && (this.Fa += this.da,
                                this.Ea += this.da,
                                this.Mf = 0);
                                break;
                            case 3:
                                this.Fa -= this.da,
                                0 >= this.Fa + this.da && (this.Fa += this.da,
                                this.Ea -= this.da,
                                this.Mf = 1)
                            }
                        }
        }
        return null
    },
    end: function() {}
});
function Vk() {
    this.Wi = this.oo = this.j = this.l = this.Ub = this.hc = 0
}
Vk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.hc = D(b);
        this.Ub = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height,
        this.Wi = this.oo = 0);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d, e;
            0 == this.hc ? (b = this.j / this.Ub,
            e = Math.floor(this.oo * b) + Math.floor(b),
            c = 0,
            d = this.l * a / this.u,
            d = d * this.Ub / 2,
            d -= this.l * this.oo,
            b = 0 == this.Wi ? 0 : this.l - d,
            this.T(this.C, b, c, b, c, d, e),
            c = this.j - e,
            b = 1 == this.Wi ? 0 : this.l - d,
            this.T(this.C, b, c, b, c, d, e),
            d >= this.l && (this.oo++,
            this.Wi++,
            2 == this.Wi && (this.Wi = 0))) : (b = this.l / this.Ub,
            d = Math.floor(this.oo * b) + Math.floor(b),
            b = 0,
            e = this.j * a / this.u,
            e = e * this.Ub / 2,
            e -= this.j * this.oo,
            c = 0 == this.Wi ? 0 : this.j - e,
            this.T(this.C, b, c, b, c, d, e),
            b = this.l - d,
            c = 1 == this.Wi ? 0 : this.j - e,
            this.T(this.C, b, c, b, c, d, e),
            e >= this.j && (this.oo++,
            this.Wi++,
            2 == this.Wi && (this.Wi = 0)))
        }
        return null
    },
    end: function() {}
});
function Wk() {}
Wk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.start(a, c, d, e)
    },
    md: function(a) {
        var b = this.wa.width
          , c = this.wa.height;
        this.jb && (this.jb = !1);
        if (0 == this.u)
            this.T(this.C);
        else {
            var d;
            d = jk(this);
            0 != (a & Je) ? (a = Math.floor(b - b * d / this.u),
            d = Math.floor(c - c * d / this.u),
            this.T(this.C),
            this.stretch(this.wa, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.u),
            d = Math.floor(c * d / this.u),
            this.T(this.wa),
            this.stretch(this.C, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
        }
        return null
    },
    end: function() {}
});
function Xk() {
    this.j = this.l = this.Ub = 0
}
Xk.prototype = p(new ik, {
    ya: function(a, b, c, d, e) {
        this.Ub = D(b);
        this.start(a, c, d, e)
    },
    md: function() {
        this.jb && (this.jb = !1,
        this.l = this.C.width,
        this.j = this.C.height);
        var a = jk(this);
        if (1 < a / this.u)
            this.T(this.C);
        else {
            var b, c, d;
            0 == this.Ub ? (c = this.l * a / this.u,
            d = this.j * a / this.u,
            a = this.l / 2 - c / 2,
            b = this.j / 2 - d / 2,
            this.stretch(this.C, 0, 0, this.l, this.j, a, b, c, d)) : (c = this.l * a / this.u,
            c = this.l - c,
            d = this.j * a / this.u,
            d = this.j - d,
            a = this.l / 2 - c / 2,
            b = this.j / 2 - d / 2,
            this.stretch(this.wa, 0, 0, this.l, this.j, a, b, c, d))
        }
        return null
    },
    end: function() {}
});
function Ac(a, b) {
    this.files = {};
    this.root = "";
    a && this.load(a, b)
}
var Zk = {
    Ok: !1,
    em: !1,
    dir: !1,
    Li: null,
    Op: null
};
Ac.prototype = function() {
    function a(d) {
        "/" != d.slice(-1) && (d += "/");
        if (!this.files[d]) {
            var e = b(d);
            e && a.call(this, e);
            c.call(this, d, null, {
                dir: !0
            })
        }
        return this.files[d]
    }
    function b(a) {
        "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
        var b = a.lastIndexOf("/");
        return 0 < b ? a.substring(0, b) : ""
    }
    function c(c, e, k) {
        var g = b(c);
        g && a.call(this, g);
        k = k || {};
        !0 === k.Ok && null == k.em && (k.em = !0);
        k = d(k, Zk);
        k.Li = k.Li || new Date;
        null !== k.Op && (k.Op = k.Op.toUpperCase());
        k.dir || null === e || "undefined" === typeof e ? (k.Ok = !1,
        k.em = !1,
        e = null) : $k && e instanceof Uint8Array ? (k.Ok = !1,
        k.em = !0,
        e = al(e)) : bl && e instanceof ArrayBuffer ? (k.Ok = !1,
        k.em = !0,
        e = new Uint8Array(e),
        e = al(e)) : k.em && !k.Ok && (!0 !== k.gH && (e = cl(e)),
        delete k.gH);
        return this.files[c] = new f(c,e,k)
    }
    function d() {
        var a = {}, b, c;
        for (b = 0; b < arguments.length; b++)
            for (c in arguments[b])
                arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
        return a
    }
    function e(a, b) {
        var c = "", d;
        for (d = 0; d < b; d++)
            c += String.fromCharCode(a & 255),
            a >>>= 8;
        return c
    }
    function f(a, b, c) {
        this.name = a;
        this.data = b;
        this.options = c
    }
    f.prototype = {
        MD: function() {
            var a = this.data;
            if (null === a || "undefined" === typeof a)
                return "";
            this.options.Ok && (a = el.decode(a));
            this.options.em || (a = Ac.prototype.kI(a));
            return a
        }
    };
    return {
        load: function() {
            throw Error("Load method is not defined. Is the file jszip-load.js included ?");
        },
        filter: function(a) {
            var b = [], c, e, g;
            for (c in this.files)
                this.files.hasOwnProperty(c) && (e = this.files[c],
                g = new f(e.name,e.data,d(e.options)),
                e = c.slice(this.root.length, c.length),
                c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
            return b
        },
        file: function(a, b, d) {
            if (1 === arguments.length) {
                if (a instanceof RegExp) {
                    var e = a;
                    return this.filter(function(a, b) {
                        return !b.options.dir && e.test(a)
                    })
                }
                return this.filter(function(b, c) {
                    return !c.options.dir && b === a
                })[0] || null
            }
            a = this.root + a;
            c.call(this, a, b, d);
            return this
        },
        mP: function(b) {
            if (!b)
                return this;
            if (b instanceof RegExp)
                return this.filter(function(a, c) {
                    return c.options.dir && b.test(a)
                });
            var c = a.call(this, this.root + b)
              , d = this.clone();
            d.root = c.name;
            return d
        },
        remove: function(a) {
            a = this.root + a;
            var b = this.files[a];
            b || ("/" != a.slice(-1) && (a += "/"),
            b = this.files[a]);
            if (b)
                if (b.options.dir)
                    for (var b = this.filter(function(b, c) {
                        return c.name.slice(0, a.length) === a
                    }), c = 0; c < b.length; c++)
                        delete this.files[b[c].name];
                else
                    delete this.files[a];
            return this
        },
        pP: function(a) {
            var b, c;
            a = d(a || {}, {
                Ok: !0,
                Op: "STORE",
                type: "base64"
            });
            var f = a.Op.toUpperCase();
            if (!fl[f])
                throw f + " is not a valid compression method !";
            var g = [], t = [], w = 0, r;
            for (r in this.files)
                if (this.files.hasOwnProperty(r)) {
                    b = this.files[r];
                    var u = this.kI(b.name), n, z, E;
                    z = b;
                    b = u;
                    var A = f;
                    n = b !== z.name;
                    c = z.MD();
                    var v = z.options;
                    E = v.Li.getHours();
                    E = E << 6 | v.Li.getMinutes();
                    E = E << 5 | v.Li.getSeconds() / 2;
                    z = v.Li.getFullYear() - 1980;
                    z = z << 4 | v.Li.getMonth() + 1;
                    z = z << 5 | v.Li.getDate();
                    var H = null !== c && 0 !== c.length
                      , A = v.Op || A;
                    if (!fl[A])
                        throw A + " is not a valid compression method !";
                    v = fl[A];
                    A = H ? v.CK(c) : "";
                    n = "\n\x00" + (n ? "\x00\b" : "\x00\x00") + (H ? v.Ew : fl.STORE.Ew);
                    n += e(E, 2);
                    n += e(z, 2);
                    n += H ? e(this.Hv(c), 4) : "\x00\x00\x00\x00";
                    n += H ? e(A.length, 4) : "\x00\x00\x00\x00";
                    n += H ? e(c.length, 4) : "\x00\x00\x00\x00";
                    n += e(b.length, 2);
                    b = n += "\x00\x00";
                    c = A;
                    c = "PK\u0003\u0004" + b + u + c;
                    u = "PK\u0001\u0002\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[r].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(w, 4) + u;
                    w += c.length;
                    t.push(c);
                    g.push(u)
                }
            f = t.join("");
            g = g.join("");
            t = f + g + ("PK\u0005\u0006\x00\x00\x00\x00" + e(t.length, 2) + e(t.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
            switch (a.type.toLowerCase()) {
            case "uint8array":
                return gl(t);
            case "arraybuffer":
                return gl(t).buffer;
            case "blob":
                var G;
                a: {
                    if (!hl)
                        throw Error("Blob is not supported by this browser");
                    a = gl(t).buffer;
                    try {
                        G = new Blob([a],{
                            type: "application/zip"
                        });
                        break a
                    } catch (N) {}
                    try {
                        var O = new (window.BlobBuilder || window.WebKitBlobBuilder || window.UI || window.SI);
                        O.append(a);
                        G = O.getBlob("application/zip");
                        break a
                    } catch (N) {}
                    throw Error("Bug : can't construct the Blob.");
                }
                return G;
            case "base64":
                return a.Ok ? el.encode(t) : t;
            default:
                return t
            }
        },
        Hv: function(a, b) {
            if ("" === a || "undefined" === typeof a)
                return 0;
            var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
            "undefined" == typeof b && (b = 0);
            var d;
            b ^= -1;
            for (var e = 0, f = a.length; e < f; e++)
                d = (b ^ a.charCodeAt(e)) & 255,
                d = c[d],
                b = b >>> 8 ^ d;
            return b ^ -1
        },
        clone: function() {
            var a = new Ac, b;
            for (b in this)
                "function" !== typeof this[b] && (a[b] = this[b]);
            return a
        },
        kI: function(a) {
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128)),
                b += String.fromCharCode(d & 63 | 128))
            }
            return b
        },
        jI: function(a) {
            for (var b = "", c = 0, d, e, f; c < a.length; )
                d = a.charCodeAt(c),
                128 > d ? (b += String.fromCharCode(d),
                c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1),
                b += String.fromCharCode((d & 31) << 6 | e & 63),
                c += 2) : (e = a.charCodeAt(c + 1),
                f = a.charCodeAt(c + 2),
                b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63),
                c += 3);
            return b
        }
    }
}();
var fl = {
    STORE: {
        Ew: "\x00\x00",
        CK: function(a) {
            return a
        },
        KC: function(a) {
            return a
        }
    }
}
  , bl = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array
  , $k = "undefined" !== typeof Uint8Array
  , hl = function() {
    if ("undefined" === typeof ArrayBuffer)
        return !1;
    var a = new ArrayBuffer(0);
    try {
        return 0 === (new Blob([a],{
            type: "application/zip"
        })).size
    } catch (c) {}
    try {
        var b = new (window.BlobBuilder || window.WebKitBlobBuilder || window.UI || window.SI);
        b.append(a);
        return 0 === b.getBlob("application/zip").size
    } catch (c) {}
    return !1
}();
function cl(a) {
    for (var b = "", c = 0; c < a.length; c++)
        b += String.fromCharCode(a.charCodeAt(c) & 255);
    return b
}
function gl(a) {
    if (!$k)
        throw Error("Uint8Array is not supported by this browser");
    for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++)
        b[c] = a.charCodeAt(c);
    return b
}
function al(a) {
    if (!$k)
        throw Error("Uint8Array is not supported by this browser");
    for (var b = "", c = 0; c < a.length; c++)
        b += String.fromCharCode(a[c]);
    return b
}
var el = {
    encode: function(a) {
        for (var b = "", c, d, e, f, g, h, k = 0; k < a.length; )
            c = a.charCodeAt(k++),
            d = a.charCodeAt(k++),
            e = a.charCodeAt(k++),
            f = c >> 2,
            c = (c & 3) << 4 | d >> 4,
            g = (d & 15) << 2 | e >> 6,
            h = e & 63,
            isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64),
            b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
        return b
    },
    decode: function(a) {
        var b = "", c, d, e, f, g, h = 0;
        for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < a.length; )
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),
            d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),
            g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)),
            c = c << 2 | d >> 4,
            d = (d & 15) << 4 | f >> 2,
            e = (f & 3) << 6 | g,
            b += String.fromCharCode(c),
            64 != f && (b += String.fromCharCode(d)),
            64 != g && (b += String.fromCharCode(e));
        return b
    }
};
if (!Ac)
    throw "JSZip not defined";
(function() {
    function a() {
        this.list = this.next = null
    }
    function b() {
        this.n = this.Ii = this.e = 0;
        this.t = null
    }
    function c(c, d, e, f, g, h) {
        this.dn = 16;
        this.XI = 288;
        this.status = 0;
        this.root = null;
        this.al = 0;
        var q = Array(this.dn + 1), k, C, B, I, Q, l, m, P = Array(this.dn + 1), n, R, U, ja = new b, Y = Array(this.dn);
        I = Array(this.XI);
        var z, t = Array(this.dn + 1), Ea, r, ia;
        ia = this.root = null;
        for (Q = 0; Q < q.length; Q++)
            q[Q] = 0;
        for (Q = 0; Q < P.length; Q++)
            P[Q] = 0;
        for (Q = 0; Q < Y.length; Q++)
            Y[Q] = null;
        for (Q = 0; Q < I.length; Q++)
            I[Q] = 0;
        for (Q = 0; Q < t.length; Q++)
            t[Q] = 0;
        k = 256 < d ? c[256] : this.dn;
        n = c;
        R = 0;
        Q = d;
        do
            q[n[R]]++,
            R++;
        while (0 < --Q);
        if (q[0] == d)
            this.root = null,
            this.status = this.al = 0;
        else {
            for (l = 1; l <= this.dn && 0 == q[l]; l++)
                ;
            m = l;
            h < l && (h = l);
            for (Q = this.dn; 0 != Q && 0 == q[Q]; Q--)
                ;
            B = Q;
            h > Q && (h = Q);
            for (Ea = 1 << l; l < Q; l++,
            Ea <<= 1)
                if (0 > (Ea -= q[l])) {
                    this.status = 2;
                    this.al = h;
                    return
                }
            if (0 > (Ea -= q[Q]))
                this.status = 2,
                this.al = h;
            else {
                q[Q] += Ea;
                t[1] = l = 0;
                n = q;
                R = 1;
                for (U = 2; 0 < --Q; )
                    t[U++] = l += n[R++];
                n = c;
                Q = R = 0;
                do
                    0 != (l = n[R++]) && (I[t[l]++] = Q);
                while (++Q < d);
                d = t[B];
                t[0] = Q = 0;
                n = I;
                R = 0;
                I = -1;
                z = P[0] = 0;
                U = null;
                for (r = 0; m <= B; m++)
                    for (c = q[m]; 0 < c--; ) {
                        for (; m > z + P[1 + I]; ) {
                            z += P[1 + I];
                            I++;
                            r = (r = B - z) > h ? h : r;
                            if ((C = 1 << (l = m - z)) > c + 1)
                                for (C -= c + 1,
                                U = m; ++l < r && !((C <<= 1) <= q[++U]); )
                                    C -= q[U];
                            z + l > k && z < k && (l = k - z);
                            r = 1 << l;
                            P[1 + I] = l;
                            U = Array(r);
                            for (C = 0; C < r; C++)
                                U[C] = new b;
                            ia = null == ia ? this.root = new a : ia.next = new a;
                            ia.next = null;
                            ia.list = U;
                            Y[I] = U;
                            0 < I && (t[I] = Q,
                            ja.Ii = P[I],
                            ja.e = 16 + l,
                            ja.t = U,
                            l = (Q & (1 << z) - 1) >> z - P[I],
                            Y[I - 1][l].e = ja.e,
                            Y[I - 1][l].Ii = ja.Ii,
                            Y[I - 1][l].n = ja.n,
                            Y[I - 1][l].t = ja.t)
                        }
                        ja.Ii = m - z;
                        R >= d ? ja.e = 99 : n[R] < e ? (ja.e = 256 > n[R] ? 16 : 15,
                        ja.n = n[R++]) : (ja.e = g[n[R] - e],
                        ja.n = f[n[R++] - e]);
                        C = 1 << m - z;
                        for (l = Q >> z; l < r; l += C)
                            U[l].e = ja.e,
                            U[l].Ii = ja.Ii,
                            U[l].n = ja.n,
                            U[l].t = ja.t;
                        for (l = 1 << m - 1; 0 != (Q & l); l >>= 1)
                            Q ^= l;
                        for (Q ^= l; (Q & (1 << z) - 1) != t[I]; )
                            z -= P[I],
                            I--
                    }
                this.al = P[1];
                this.status = 0 != Ea && 1 != B ? 1 : 0
            }
        }
    }
    function d(a) {
        for (; E < a; )
            z |= (L.length == M ? -1 : L.charCodeAt(M++) & 255) << E,
            E += 8
    }
    function e(a) {
        return z & q[a]
    }
    function f(a) {
        z >>= a;
        E -= a
    }
    function g(a, b, c) {
        var g, h, q;
        if (0 == c)
            return 0;
        for (q = 0; ; ) {
            d(J);
            h = O.list[e(J)];
            for (g = h.e; 16 < g; ) {
                if (99 == g)
                    return -1;
                f(h.Ii);
                g -= 16;
                d(g);
                h = h.t[e(g)];
                g = h.e
            }
            f(h.Ii);
            if (16 == g)
                w &= 32767,
                a[b + q++] = t[w++] = h.n;
            else {
                if (15 == g)
                    break;
                d(g);
                H = h.n + e(g);
                f(g);
                d(K);
                h = N.list[e(K)];
                for (g = h.e; 16 < g; ) {
                    if (99 == g)
                        return -1;
                    f(h.Ii);
                    g -= 16;
                    d(g);
                    h = h.t[e(g)];
                    g = h.e
                }
                f(h.Ii);
                d(g);
                G = w - h.n - e(g);
                for (f(g); 0 < H && q < c; )
                    H--,
                    G &= 32767,
                    w &= 32767,
                    a[b + q++] = t[w++] = t[G++]
            }
            if (q == c)
                return c
        }
        A = -1;
        return q
    }
    function h(a, b, h) {
        var q, k, l, m, n, R, z, Y = Array(316);
        for (q = 0; q < Y.length; q++)
            Y[q] = 0;
        d(5);
        R = 257 + e(5);
        f(5);
        d(5);
        z = 1 + e(5);
        f(5);
        d(4);
        q = 4 + e(4);
        f(4);
        if (286 < R || 30 < z)
            return -1;
        for (k = 0; k < q; k++)
            d(3),
            Y[U[k]] = e(3),
            f(3);
        for (; 19 > k; k++)
            Y[U[k]] = 0;
        J = 7;
        k = new c(Y,19,19,null,null,J);
        if (0 != k.status)
            return -1;
        O = k.root;
        J = k.al;
        m = R + z;
        for (q = l = 0; q < m; )
            if (d(J),
            n = O.list[e(J)],
            k = n.Ii,
            f(k),
            k = n.n,
            16 > k)
                Y[q++] = l = k;
            else if (16 == k) {
                d(2);
                k = 3 + e(2);
                f(2);
                if (q + k > m)
                    return -1;
                for (; 0 < k--; )
                    Y[q++] = l
            } else {
                17 == k ? (d(3),
                k = 3 + e(3),
                f(3)) : (d(7),
                k = 11 + e(7),
                f(7));
                if (q + k > m)
                    return -1;
                for (; 0 < k--; )
                    Y[q++] = 0;
                l = 0
            }
        J = 9;
        k = new c(Y,R,257,C,B,J);
        0 == J && (k.status = 1);
        if (0 != k.status)
            return -1;
        O = k.root;
        J = k.al;
        for (q = 0; q < z; q++)
            Y[q] = Y[q + R];
        K = 6;
        k = new c(Y,z,0,I,P,K);
        N = k.root;
        K = k.al;
        return 0 == K && 257 < R || 0 != k.status ? -1 : g(a, b, h)
    }
    function k(a, b) {
        var q, k;
        for (q = 0; q < b && (!v || -1 != A); ) {
            if (0 < H) {
                if (0 != A)
                    for (; 0 < H && q < b; )
                        H--,
                        G &= 32767,
                        w &= 32767,
                        a[0 + q++] = t[w++] = t[G++];
                else {
                    for (; 0 < H && q < b; )
                        H--,
                        w &= 32767,
                        d(8),
                        a[0 + q++] = t[w++] = e(8),
                        f(8);
                    0 == H && (A = -1)
                }
                if (q == b)
                    break
            }
            if (-1 == A) {
                if (v)
                    break;
                d(1);
                0 != e(1) && (v = !0);
                f(1);
                d(2);
                A = e(2);
                f(2);
                O = null;
                H = 0
            }
            switch (A) {
            case 0:
                var Q = a
                  , m = 0 + q
                  , U = b - q;
                k = E & 7;
                f(k);
                d(16);
                k = e(16);
                f(16);
                d(16);
                if (k != (~z & 65535))
                    k = -1;
                else {
                    f(16);
                    H = k;
                    for (k = 0; 0 < H && k < U; )
                        H--,
                        w &= 32767,
                        d(8),
                        Q[m + k++] = t[w++] = e(8),
                        f(8);
                    0 == H && (A = -1)
                }
                break;
            case 1:
                if (null != O)
                    k = g(a, 0 + q, b - q);
                else
                    a: {
                        var R;
                        k = a;
                        Q = 0 + q;
                        m = b - q;
                        if (null == r) {
                            U = Array(288);
                            for (R = 0; 144 > R; R++)
                                U[R] = 8;
                            for (; 256 > R; R++)
                                U[R] = 9;
                            for (; 280 > R; R++)
                                U[R] = 7;
                            for (; 288 > R; R++)
                                U[R] = 8;
                            n = 7;
                            R = new c(U,288,257,C,B,n);
                            if (0 != R.status) {
                                alert("HufBuild error: " + R.status);
                                k = -1;
                                break a
                            }
                            r = R.root;
                            n = R.al;
                            for (R = 0; 30 > R; R++)
                                U[R] = 5;
                            l = 5;
                            R = new c(U,30,0,I,P,l);
                            if (1 < R.status) {
                                r = null;
                                alert("HufBuild error: " + R.status);
                                k = -1;
                                break a
                            }
                            u = R.root;
                            l = R.al
                        }
                        O = r;
                        N = u;
                        J = n;
                        K = l;
                        k = g(k, Q, m)
                    }
                break;
            case 2:
                k = null != O ? g(a, 0 + q, b - q) : h(a, 0 + q, b - q);
                break;
            default:
                k = -1
            }
            if (-1 == k)
                return v ? 0 : -1;
            q += k
        }
        return q
    }
    function m(a) {
        var b, c, d;
        null == t && (t = Array(65536));
        E = z = w = 0;
        A = -1;
        v = !1;
        H = G = 0;
        O = null;
        L = a;
        M = 0;
        b = Array(1024);
        for (a = ""; 0 < (c = k(b, b.length)); )
            for (d = 0; d < c; d++)
                a += String.fromCharCode(b[d]);
        L = null;
        return a
    }
    var l, t, w, r = null, u, n, z, E, A, v, H, G, O, N, J, K, L, M, q = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535], C = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], B = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], I = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    fl.DEFLATE ? fl.DEFLATE.KC = m : fl.DEFLATE = {
        Ew: "\b\x00",
        KC: m
    }
}
)();
(function() {
    function a(a) {
        var b = "", c, d;
        for (d = 0; d < (a || "").length; d++)
            c = a.charCodeAt(d),
            b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase();
        return b
    }
    function b(a) {
        this.stream = "";
        $k && a instanceof Uint8Array ? this.stream = al(a) : bl && a instanceof ArrayBuffer ? (a = new Uint8Array(a),
        this.stream = al(a)) : this.stream = cl(a);
        this.index = 0
    }
    function c(a, b) {
        this.options = a;
        this.CA = b
    }
    function d(a, b) {
        this.files = [];
        this.CA = b;
        a && this.load(a)
    }
    b.prototype = {
        qE: function(a) {
            this.pE(this.index + a)
        },
        pE: function(a) {
            if (this.stream.length < a || 0 > a)
                throw Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + a + "). Corrupted zip ?");
        },
        cr: function(a) {
            this.pE(a);
            this.index = a
        },
        UH: function(a) {
            this.cr(this.index + a)
        },
        yK: function(a) {
            return this.stream.charCodeAt(a)
        },
        ub: function(a) {
            var b = 0, c;
            this.qE(a);
            for (c = this.index + a - 1; c >= this.index; c--)
                b = (b << 8) + this.yK(c);
            this.index += a;
            return b
        },
        li: function(a) {
            this.qE(a);
            var b = this.stream.slice(this.index, this.index + a);
            this.index += a;
            return b
        },
        UM: function() {
            var a = this.ub(4);
            return new Date((a >> 25 & 127) + 1980,(a >> 21 & 15) - 1,a >> 16 & 31,a >> 11 & 31,a >> 5 & 63,(a & 31) << 1)
        }
    };
    c.prototype = {
        xL: function() {
            return 1 === (this.dE & 1)
        },
        PN: function() {
            return 2048 === (this.dE & 2048)
        },
        YM: function(b) {
            var c, d;
            b.UH(22);
            this.aA = b.ub(2);
            d = b.ub(2);
            this.fileName = b.li(this.aA);
            b.UH(d);
            if (-1 == this.Ev || -1 == this.Sx)
                throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
            this.DK = b.li(this.Ev);
            a: {
                b = this.uE;
                for (c in fl)
                    if (fl.hasOwnProperty(c) && fl[c].Ew === b) {
                        c = fl[c];
                        break a
                    }
                c = null
            }
            if (null === c)
                throw Error("Corrupted zip : compression " + a(this.uE) + " unknown (inner file : " + this.fileName + ")");
            this.LC = c.KC(this.DK);
            if (this.LC.length !== this.Sx)
                throw Error("Bug : uncompressed data size mismatch");
            if (this.CA.JO && Ac.prototype.Hv(this.LC) !== this.Hv)
                throw Error("Corrupted zip : CRC32 mismatch");
        },
        TM: function(a) {
            a.li(2);
            a.ub(2);
            this.dE = a.ub(2);
            this.uE = a.li(2);
            this.Li = a.UM();
            this.Hv = a.ub(4);
            this.Ev = a.ub(4);
            this.Sx = a.ub(4);
            this.aA = a.ub(2);
            this.aL = a.ub(2);
            this.cL = a.ub(2);
            this.OE = a.ub(2);
            a.ub(2);
            this.$K = a.ub(4);
            this.EA = a.ub(4);
            if (this.xL())
                throw Error("Encrypted zip are not supported");
            this.fileName = a.li(this.aA);
            this.WM(a);
            this.AM(a);
            this.fF = a.li(this.cL);
            this.dir = this.$K & 16 ? !0 : !1
        },
        AM: function() {
            if (this.Rv[1]) {
                var a = new b(this.Rv[1].value);
                -1 === this.Sx && (this.Sx = a.ub(8));
                -1 === this.Ev && (this.Ev = a.ub(8));
                -1 === this.EA && (this.EA = a.ub(8));
                -1 === this.OE && (this.OE = a.ub(4))
            }
        },
        WM: function(a) {
            var b = a.index, c, d, e;
            for (this.Rv = this.Rv || {}; a.index < b + this.aL; )
                c = a.ub(2),
                d = a.ub(2),
                e = a.li(d),
                this.Rv[c] = {
                    id: c,
                    length: d,
                    value: e
                }
        },
        nL: function() {
            this.PN() && (this.fileName = Ac.prototype.jI(this.fileName),
            this.fF = Ac.prototype.jI(this.fF))
        }
    };
    d.prototype = {
        Cv: function(b) {
            var c = this.Vb.li(4);
            if (c !== b)
                throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
        },
        PM: function() {
            this.NE = this.Vb.ub(2);
            this.PE = this.Vb.ub(2);
            this.nE = this.Vb.ub(2);
            this.mE = this.Vb.ub(2);
            this.oE = this.Vb.ub(4);
            this.Gz = this.Vb.ub(4);
            this.TN = this.Vb.ub(2);
            this.Vb.li(this.TN)
        },
        QM: function() {
            this.RN = this.Vb.ub(8);
            this.Vb.li(2);
            this.Vb.ub(2);
            this.NE = this.Vb.ub(4);
            this.PE = this.Vb.ub(4);
            this.nE = this.Vb.ub(8);
            this.mE = this.Vb.ub(8);
            this.oE = this.Vb.ub(8);
            this.Gz = this.Vb.ub(8);
            this.SN = {};
            for (var a = this.RN - 44, b, c, d; 0 < a; )
                b = this.Vb.ub(2),
                c = this.Vb.ub(4),
                d = this.Vb.li(c),
                this.SN[b] = {
                    id: b,
                    length: c,
                    value: d
                }
        },
        RM: function() {
            this.Vb.ub(4);
            this.aN = this.Vb.ub(8);
            this.SK = this.Vb.ub(4);
            if (1 < this.SK)
                throw Error("Multi-volumes zip are not supported");
        },
        XM: function() {
            var a, b;
            for (a = 0; a < this.files.length; a++)
                b = this.files[a],
                this.Vb.cr(b.EA),
                this.Cv("PK\u0003\u0004"),
                b.YM(this.Vb),
                b.nL()
        },
        SM: function() {
            var a;
            for (this.Vb.cr(this.Gz); "PK\u0001\u0002" === this.Vb.li(4); )
                a = new c({
                    pI: this.pI
                },this.CA),
                a.TM(this.Vb),
                this.files.push(a)
        },
        VM: function() {
            var a = this.Vb.stream.lastIndexOf("PK\u0005\u0006");
            if (-1 === a)
                throw Error("Corrupted zip : can't find end of central directory");
            this.Vb.cr(a);
            this.Cv("PK\u0005\u0006");
            this.PM();
            if (65535 === this.NE || 65535 === this.PE || 65535 === this.nE || 65535 === this.mE || -1 === this.oE || -1 === this.Gz) {
                this.pI = !0;
                a = this.Vb.stream.lastIndexOf("PK\u0006\u0007");
                if (-1 === a)
                    throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                this.Vb.cr(a);
                this.Cv("PK\u0006\u0007");
                this.RM();
                this.Vb.cr(this.aN);
                this.Cv("PK\u0006\u0006");
                this.QM()
            }
        },
        load: function(a) {
            this.Vb = new b(a);
            this.VM();
            this.SM();
            this.XM()
        }
    };
    Ac.prototype.load = function(a, b) {
        var c, e, f;
        b = b || {};
        b.Ok && (a = el.decode(a));
        c = (new d(a,b)).files;
        for (e = 0; e < c.length; e++)
            f = c[e],
            this.file(f.fileName, f.LC, {
                em: !0,
                gH: !0,
                Li: f.Li,
                dir: f.dir
            });
        return this
    }
}
)();
var il = document.getElementsByTagName("script")
  , jl = il[il.length - 1].src;
document.zQ = jl.substring(0, jl.lastIndexOf("/") + 1);
function kl() {
    window.Re.load()
}
function Qe() {
    Yd(window.Re)
}
window.Runtime = function(a, b) {
    var c = new Pa;
    window.Re = new Dc(a,c,b);
    c.getFile(b, kl)
}
;
window.headerLoaded = kl;
window.eI = "updateApplication";
window[window.eI] = Qe;
function Oc() {
    this.y = this.x = 0;
    this.visible = !0;
    this.children = [];
    this.yj = !1
}
Oc.prototype = {
    Oc: function(a, b, c) {
        if (this.visible) {
            this.yj && (a.Jb.save(),
            a.Jb.translate(this.Au, this.Eu),
            0 != this.angle && a.Jb.rotate(.0174532925 * -this.angle),
            a.Jb.scale(Math.max(.001, this.Vd), Math.max(.001, this.Wd)),
            a.Jb.translate(-this.Hb, -this.Eb));
            var d;
            for (d = 0; d < this.children.length; d++)
                this.children[d].Oc(a, b + this.x, c + this.y);
            this.yj && a.Jb.restore()
        }
    },
    removeChild: function(a) {
        var b;
        for (b = 0; b < this.children.length; b++)
            if (this.children[b] == a)
                return this.children.splice(b, 1),
                b;
        return -1
    },
    mf: function(a) {
        var b;
        for (b = 0; b < this.children.length; b++)
            if (this.children[b] == a)
                return b;
        return -1
    },
    nh: function(a, b) {
        var c, d = null;
        for (c = 0; c < this.children.length; c++)
            if (this.children[c] == a) {
                d = this.children[c];
                break
            }
        null != d && (this.children.splice(c, 1),
        b > c && b--,
        0 > b && (b = 0),
        b >= this.children.length ? this.children.push(a) : this.children.splice(b, 0, a))
    }
};
function rj(a, b, c) {
    c >= a.children.length ? a.children.push(b) : (0 > c && (c = 0),
    a.children.splice(c, 0, b))
}
function pe(a, b) {
    a.children.push(b)
}
var Wi = 0
  , ic = 1
  , hg = 0
  , Oh = 1
  , ll = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]
  , ml = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535]
  , Sh = new $a
  , Th = new $a
  , Vh = new $a
  , Uh = new $a;
function Ph() {
    this.ra = null;
    this.lineWidth = this.Eb = this.Hb = this.width = this.height = this.lineWidth = 0
}
Ph.prototype = {
    cn: function(a, b, c, d, e, f, g) {
        var h, k, m;
        a <= e ? (h = this,
        m = Math.floor(c),
        c = Math.floor(g),
        k = Math.floor(a),
        g = Math.floor(b),
        a = Math.floor(e),
        b = Math.floor(f)) : (h = d,
        d = this,
        m = Math.floor(g),
        c = Math.floor(c),
        k = Math.floor(e),
        g = Math.floor(f),
        a = Math.floor(a),
        b = Math.floor(b));
        f = h.height;
        var l = 0;
        0 != m && (f = m,
        g += h.height - m,
        l = h.height - m);
        e = d.height;
        var t = 0;
        0 != c && (e = c,
        b += d.height - c,
        t = d.height - c);
        if (k >= a + d.width || k + h.width <= a || g >= b + e || g + f < b)
            return !1;
        c = a - k;
        m = Math.floor(c / 16);
        c %= 16;
        k = Math.min(k + h.width - a, d.width);
        k = Math.floor((k + 15) / 16);
        g <= b ? (a = b - g + l,
        l = t,
        g = Math.min(g + f, b + e) - b) : (a = l,
        l = g - b + t,
        g = Math.min(g + f, b + e) - g);
        b = a * h.lineWidth;
        e = l * d.lineWidth;
        if (0 != c)
            switch (k) {
            case 1:
                for (a = 0; a < g; a++) {
                    l = h.ra[b + m] << c;
                    if (0 != (l & d.ra[e]) || m + 1 < h.lineWidth && (l = h.ra[b + m + 1] << c,
                    l >>>= 16,
                    0 != (l & d.ra[e])))
                        return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
                break;
            case 2:
                for (a = 0; a < g; a++) {
                    l = h.ra[b + m] << c;
                    if (0 != (l & d.ra[e]))
                        return !0;
                    l = h.ra[b + m + 1] << c;
                    t = l >>> 16;
                    if (0 != (t & d.ra[e]) || 0 != (l & d.ra[e + 1]) || m + 2 < h.lineWidth && (l = h.ra[b + m + 2] << c,
                    l >>>= 16,
                    0 != (l & d.ra[e + 1])))
                        return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
                break;
            default:
                for (a = 0; a < g; a++) {
                    l = h.ra[b + m] << c;
                    if (0 != (l & d.ra[e]))
                        return !0;
                    for (f = 0; f < k - 1; f++)
                        if (l = h.ra[b + m + f + 1] << c,
                        t = l >>> 16,
                        0 != (t & d.ra[e + f]) || 0 != (l & d.ra[e + f + 1]))
                            return !0;
                    if (m + f + 1 < h.lineWidth && (l = h.ra[b + m + f + 1] << c,
                    l >>>= 16,
                    0 != (l & d.ra[e + f])))
                        return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
            }
        else
            for (a = 0; a < g; a++) {
                for (f = 0; f < k; f++)
                    if (l = h.ra[b + m + f],
                    0 != (d.ra[e + f] & l))
                        return !0;
                b += h.lineWidth;
                e += d.lineWidth
            }
        return !1
    }
};
function bj(a, b, c, d, e, f, g, h) {
    b = Math.floor(b);
    c = Math.floor(c);
    e = Math.floor(e);
    f = Math.floor(f);
    var k = 0
      , m = a.height;
    0 < d && (k = a.height - d,
    c += k,
    m = d);
    if (b >= e + g || b + a.width <= e || c >= f + h || c + m < f)
        return !1;
    b <= e ? (d = e - b,
    b = Math.min(a.width - d, g)) : (d = 0,
    b = Math.min(e + g - b, a.width));
    c <= f ? (k = f - c + k,
    c = Math.min(c + m, f + h) - f) : c = Math.min(c + m, f + h) - c;
    f = Math.floor(d / 8);
    h = Math.floor((d + b + 15) / 16) - Math.floor(d / 16);
    var l;
    for (g = 0; g < c; g++)
        switch (e = (g + k) * a.lineWidth,
        h) {
        case 1:
            m = ll[d & 15] & ml[(d + b - 1 & 15) + 1];
            if (0 != (a.ra[e + f] & m))
                return !0;
            break;
        case 2:
            m = ll[d & 15];
            if (0 != (a.ra[e + f] & m))
                return !0;
            m = ml[(d + b - 1 & 15) + 1];
            if (0 != (a.ra[e + f + 1] & m))
                return !0;
            break;
        default:
            m = ll[d & 15];
            if (0 != (a.ra[e + f] & m))
                return !0;
            for (l = 1; l < h - 1; l++)
                if (0 != a.ra[e + f + l])
                    return !0;
            m = ml[(d + b - 1 & 15) + 1];
            if (0 != (a.ra[e + f + l] & m))
                return !0
        }
    return !1
}
function Qh(a, b, c, d) {
    var e, f;
    a.width = c.width;
    a.height = c.height;
    a.Hb = c.Hb;
    a.Eb = c.Eb;
    var g = Math.floor((a.width + 15 & 4294967280) / 16);
    a.lineWidth = g;
    f = g * a.height + 1;
    if ("undefined" != typeof ArrayBuffer)
        a.ra = new Uint16Array(new ArrayBuffer(2 * f));
    else
        for (a.ra = Array(f),
        e = 0; e < f; e++)
            a.ra[e] = 0;
    e = document.createElement("canvas");
    e.width = c.width;
    e.height = c.height;
    e = e.getContext("2d");
    0 == c.rf ? e.drawImage(c.Jf, 0, 0) : e.drawImage(b.xa.Ke[c.rf], c.$i, c.aj, c.width, c.height, 0, 0, c.width, c.height);
    b = e.getImageData(0, 0, a.width, a.height);
    if (0 == (d & Oh))
        for (d = 0; d < a.height; d++) {
            f = d * c.width * 4 + 3;
            var h = d * g
              , k = 32768;
            for (e = 0; e < a.width; e++)
                0 != b.data[f] && (a.ra[h] |= k),
                f += 4,
                k >>>= 1,
                0 == k && (k = 32768,
                h++)
        }
    else
        for (e = 0; e < a.width; e++) {
            for (d = 0; d < a.height && 0 == b.data[4 * (d * c.width + e) + 3]; d++)
                ;
            if (d < a.height)
                for (h = Math.min(a.height, d + 6),
                k = 32768 >> (e & 15); d < h; d++)
                    0 != b.data[4 * (d * c.width + e) + 3] && (f = Math.floor(d * g + (e & 4294967280) / 16),
                    a.ra[f] |= k)
        }
}
function Rh() {
    this.ra = null;
    this.angle = 0;
    this.Wd = this.Vd = 1;
    this.HC = 0
}
var eh = 1
  , pj = 16
  , Jb = 32
  , kg = 64
  , fg = 128
  , Qc = 1
  , gk = 3
  , fk = 9
  , dk = 4095
  , ek = 4096
  , qj = 8192;
function dh() {
    this.a = null;
    this.Ga = this.ue = this.Ne = this.Dx = this.$o = this.Ax = this.vC = 0;
    this.sk = null
}
dh.prototype = {
    qA: function(a) {
        0 != (this.a.mb & Zg) ? this.a.Qy(this.a.B - this.a.c.Ma, this.a.A - this.a.c.Ra, this.a.b.qc, this.$o, 0 == (this.Ga & eh)) : (this.a.Da |= 32,
        this.a.yp(this.a.B - this.a.c.Ma, this.a.A - this.a.c.Ra, this.$o, 0 != (this.a.mb & pi), 0 == (this.Ga & eh), -1));
        this.a.TH(this.Ne, this.ue);
        a && this.a.ma.Cq && (this.a.Da |= 8)
    },
    handle: function() {
        var a = this.a.c, b, c, d, e;
        0 != (this.a.Da & 8) ? (this.sk || this.Qp(!1),
        0 != (this.a.Da & 8) && (He(this.sk) ? (this.a.Da &= -9,
        this.sk = this.a.gp = null) : this.sk.md(Ie))) : 0 != (this.a.Da & Hh) ? 0 != (this.a.Da & Hh) && (He(this.sk) ? (this.gp = this.sk = null,
        Hg(this.a.c, this.a.Pc)) : this.sk.md(Je)) : 0 == (this.Ga & 4) ? (0 != this.vC && (this.Ax -= a.cu,
        0 > this.Ax && (this.Ax = this.vC,
        0 == (this.Ga & Jb) ? (this.Ga |= Jb,
        nl(this)) : (this.Ga &= ~Jb,
        Ib(this)))),
        null != this.a.L && this.a.L.move(),
        0 == this.a.b.zl && (0 != (this.a.mb & Xg) ? 0 == (this.a.mb & 8192) && 0 != (a.m.sb & 67108864) && (b = this.a.B - this.a.Ya,
        c = this.a.A - this.a.Za,
        d = b + this.a.aa,
        e = c + this.a.$,
        (d < a.So || b > a.Ro || e < a.Uo || c > a.To) && Hg(a, this.a.Pc)) : (b = this.a.B - this.a.Ya,
        c = this.a.A - this.a.Za,
        d = b + this.a.aa,
        e = c + this.a.$,
        d >= a.Rq && b <= a.Qq && e >= a.Tq && c <= a.Sq || (d >= a.So && b <= a.Ro && e >= a.Uo && c <= a.To ? (this.Ga |= 4,
        this.Dx = this.a.gm()) : 0 == (this.a.mb & 8192) && Hg(a, this.a.Pc))))) : (b = this.a.B - this.a.Ya,
        c = this.a.A - this.a.Za,
        d = b + this.a.aa,
        e = c + this.a.$,
        d >= a.Rq && b <= a.Qq && e >= a.Tq && c <= a.Sq && (this.Ga &= -5,
        this.qA(!1),
        this.a.nh(this.Dx)))
    },
    Qp: function(a) {
        this.a.Da &= ~(8 | Hh);
        if (0 == a) {
            if (!this.a.ma.Cq)
                return !1;
            this.a.Da |= 8
        } else {
            if (!this.a.ma.Ft)
                return !1;
            this.a.Da |= Hh
        }
        var b;
        var c = Ad(this.a.c.m);
        b = this.a;
        var d = b.ma.Cq;
        a && (d = b.ma.Ft);
        var e = null, f;
        if (0 != (b.mb & Zg)) {
            var g = X(c.app.xa, b.b.qc)
              , e = document.createElement("canvas");
            e.width = g.width;
            e.height = g.height;
            f = e.getContext("2d");
            0 == g.rf ? f.drawImage(g.Jf, 0, 0) : f.drawImage(c.app.xa.Ke[g.rf], g.$i, g.aj, g.width, g.height, 0, 0, g.width, g.height)
        } else
            32 <= b.Bb && (e = document.createElement("canvas"),
            e.width = b.aa,
            e.height = b.$,
            new StandardRendered(e),
            e = null);
        if (null == e)
            b = null;
        else {
            f = e.width;
            var h = e.height
              , g = document.createElement("canvas");
            g.width = f;
            g.height = h;
            var k = document.createElement("canvas");
            k.width = f;
            k.height = h;
            var m = document.createElement("canvas");
            m.width = f;
            m.height = h;
            a ? (f = k.getContext("2d"),
            f.drawImage(e, 0, 0),
            f = g.getContext("2d"),
            f.drawImage(e, 0, 0),
            0 != (d.uu & zd) && Ck(m, e, d.tu)) : (f = m.getContext("2d"),
            f.drawImage(e, 0, 0),
            0 != (d.uu & zd) && Ck(k, e, d.tu));
            a = c.Qp(d, g, k, m);
            null != a && (c = 0,
            0 != (b.Da & Hh) ? (a.xw = !0,
            c |= Je) : (a.xw = !1,
            c |= Ie),
            b.gp = g,
            a.md(c));
            b = a
        }
        this.sk = b;
        return this.sk ? !0 : (this.a.Da &= ~(8 | Hh),
        !1)
    },
    ed: function() {
        this.Dx = this.a.gm()
    }
};
function Fh(a, b) {
    a.Ga = b ? a.Ga | kg : a.Ga & ~kg
}
function nl(a) {
    0 != (a.Ga & eh) && 16 == (a.a.c.J.Lb[a.a.Dg].sb & (Ae | 16)) && (a.Ga &= ~eh,
    a.a.Da &= ~jg,
    a.a.b.la = !0,
    a.a.bp())
}
function Ib(a) {
    0 == (a.Ga & eh) && (a.Ga |= eh,
    a.a.b.la = !0,
    a.a.Yn())
}
;function ij() {
    this.xq = 0;
    this.ge = null
}
ij.prototype = {
    load: function(a) {
        this.xq = S(a);
        this.ge = Array(this.xq);
        var b;
        for (b = 0; b < this.xq; b++)
            this.ge[b] = a.bd()
    }
};
function hj() {
    this.yq = 0;
    this.values = null;
    this.fa = 0
}
hj.prototype = {
    load: function(a, b) {
        this.yq = S(a);
        this.values = Array(this.yq);
        var c;
        for (c = 0; c < this.yq; c++)
            this.values[c] = D(a);
        b && (this.fa = D(a))
    }
};
function hh() {
    this.ju = 0;
    this.og = this.Hc = null
}
hh.prototype = {
    ya: function(a, b) {
        this.ju = 0;
        var c = 26;
        null != b.ol && b.ol.yq > c && (c = b.ol.yq);
        this.Hc = Array(c);
        c = 10;
        null != b.Am && b.Am.xq > c && (c = b.Am.xq);
        this.og = Array(c);
        for (c = 0; c < this.Hc.length; c++)
            this.Hc[c] = 0;
        for (c = 0; c < this.og.length; c++)
            this.og[c] = "";
        if (null != b.ol)
            for (this.ju = b.ol.fa,
            c = 0; c < b.ol.yq; c++)
                this.Hc[c] = b.ol.values[c];
        if (null != b.Am)
            for (c = 0; c < b.Am.xq; c++)
                this.og[c] = b.Am.ge[c]
    },
    ed: function() {
        var a;
        for (a = 0; a < this.Hc.length; a++)
            this.Hc[a] = 0;
        for (a = 0; a < this.og.length; a++)
            this.og[a] = null
    },
    Kx: function(a, b) {
        a >= this.za.Hc.length && Lb(this, a + 10);
        this.Hc[a] = b
    }
};
function Lb(a, b) {
    if (b > a.Hc.length) {
        var c;
        for (c = a.Hc.length; c < b; c++)
            a.Hc[c] = 0
    }
}
function qc(a, b) {
    return b < a.og.length ? a.og[b] : ""
}
function dc(a, b) {
    return b < a.Hc.length ? a.Hc[b] : 0
}
;function Jc(a) {
    this.app = a;
    this.Tn = null;
    this.Jw = 0
}
Jc.prototype = {
    mw: function(a) {
        a -= 32;
        var b = null;
        a < this.Tn.length && null != this.Tn[a] && (b = this.Tn[a].mw());
        return b
    },
    Wn: function(a) {
        a -= 32;
        return a < this.Tn.length ? this.Jw[a] : 0
    }
};
function Lc(a, b) {
    var c = b.mw();
    null != c && (a.Tn[b.handle] = b,
    a.Jw[b.handle] = c.Wn())
}
function Kc() {
    this.handle = 0
}
Kc.prototype = {
    mw: function() {
        switch (this.handle) {
        case 2:
            return new ol;
        case 3:
            return new pl;
        case 4:
            return new ql;
        case 5:
            return new rl
        }
        return null
    }
};
var tj = 2;
function sl() {
    this.o = this.O = null
}
sl.prototype = {
    ya: function(a) {
        this.O = a;
        this.o = a.c
    },
    Wn: function() {
        return 0
    },
    rs: function() {
        return !1
    },
    Ns: function() {
        return tj
    },
    Mv: function() {},
    zE: function() {},
    BM: function() {},
    KK: function() {},
    Hn: function() {
        return !1
    },
    action: function() {},
    Sn: function() {
        return null
    },
    jL: function() {
        return null
    },
    FN: function() {},
    kL: function() {
        return 0
    },
    GN: function() {},
    Zl: function() {},
    Zp: function() {}
};
function Xj() {}
Xj.prototype = {
    evaluate: function(a) {
        var b = oc(a.G, this.Tf);
        if (null == b)
            a.uf[a.cd] = 0;
        else {
            var c = (this.code >> 16) - 80;
            a.Nz = this;
            a.uf[a.cd] = b.Sn(c)
        }
    }
};
function gi() {}
gi.prototype = {
    eg: function(a) {
        var b = Ab(a.G, this);
        if (null != b) {
            var c = (this.Qa >>> 16) - 80;
            a.Nz = this;
            b.action(c, this)
        }
    },
    Cc: function(a, b) {
        var c = a.G
          , d = this.ha[b].Tf;
        c.Nq = !0;
        d = Ui(c, d);
        null != d ? 0 != c.re && (this.Qb |= 1,
        c.No = !0) : this.Qb |= Cg;
        return d
    },
    tF: function(a, b) {
        var c = new Bb;
        Cb(this.ha[b], a, 0, c) && (c.mF = !0);
        return c
    },
    ka: function(a, b) {
        return ob(a, this.ha[b])
    },
    ie: function(a, b) {
        return bg(a, this.ha[b])
    }
};
function Xb() {}
Xb.prototype = {
    Bj: function(a, b) {
        if (null == b)
            return this.Ag(a);
        b.Da |= 2;
        var c = -(this.Qa >> 16) - 80 - 1;
        a.Nz = this;
        return b.Hn(c, this) ? (fc(a.G, b),
        !0) : !1
    },
    Ag: function(a) {
        var b = ac(a.G, this.Nd)
          , c = a.G.Rn
          , d = -(this.Qa >> 16) - 80 - 1;
        for (a.Nz = this; null != b; )
            b.Da &= -3,
            b.Hn(d, this) ? 0 != (this.Sh & Zb) && (c--,
            bc(a.G)) : 0 == (this.Sh & Zb) && (c--,
            bc(a.G)),
            b = cc(a.G);
        return 0 != c ? !0 : !1
    },
    Cc: function(a, b) {
        return this.ha[b]
    },
    tF: function(a, b) {
        var c = new Bb;
        Cb(this.ha[b], a, 0, c) && (c.mF = !0);
        return c
    },
    ka: function(a, b) {
        return ob(a, this.ha[b])
    },
    ie: function(a, b) {
        return bg(a, this.ha[b])
    }
};
function tl() {
    this.element = null;
    this.wE = !1
}
tl.prototype = p(new sl, {
    Zp: function() {
        this.setPosition(this.O.B, this.O.A)
    },
    Zl: function() {
        this.setPosition(this.O.B, this.O.A);
        this.ou(this.O.aa, this.O.$)
    },
    DN: function(a, b) {
        this.element = a;
        a.style.position = "absolute";
        this.ou(this.O.aa, this.O.$);
        this.setPosition(this.O.B, this.O.A);
        this.dA && this.El(this.dA);
        this.wz = this.O.gb = b;
        this.o.m.Ij ? (a.style.visibility = "hidden",
        this.wz = !1) : a.style.visibility = b ? "visible" : "hidden";
        this.o.m.Mz.appendChild(a)
    },
    wF: function() {
        return this.o.m.canvas ? this.o.m.canvas.offsetLeft : 0
    },
    xF: function() {
        return this.o.m.canvas ? this.o.m.canvas.offsetTop : 0
    },
    BC: function(a) {
        this.GE = a;
        this.O.BC(a);
        this.element && (this.element.style.left = this.wF() + this.o.m.pj + (this.O.B - this.O.c.Ma) * this.o.m.Vd + "px")
    },
    CC: function(a) {
        this.HE = a;
        this.O.CC(a);
        this.element && (this.element.style.top = this.xF() + this.o.m.rj + (this.O.A - this.O.c.Ra) * this.o.m.Wd + "px")
    },
    setPosition: function(a, b) {
        this.GE = a;
        this.HE = b;
        this.O.setPosition(a, b);
        this.element && (this.element.style.left = this.wF() + this.o.m.pj + (this.O.B - this.O.c.Ma) * this.o.m.Vd + "px",
        this.element.style.top = this.xF() + this.o.m.rj + (this.O.A - this.O.c.Ra) * this.o.m.Wd + "px")
    },
    Lx: function(a) {
        this.FE = a;
        this.O.Lx(a);
        this.element && (this.element.style.width = this.O.aa * this.o.m.Vd + "px")
    },
    Hx: function(a) {
        this.EE = a;
        this.O.Hx(a);
        this.element && !this.wE && (this.element.style.height = this.O.$ * this.o.m.Wd + "px")
    },
    ou: function(a, b) {
        this.FE = a;
        this.EE = b;
        this.O.ou(a, b);
        this.element && (this.element.style.width = this.O.aa * this.o.m.Vd + "px",
        this.wE || (this.element.style.height = this.O.$ * this.o.m.Wd + "px"))
    },
    El: function(a) {
        this.dA = a;
        this.element && (this.element.style.font = a.Wk())
    },
    Mv: function() {
        this.element && this.o.m.Mz.removeChild(this.element)
    },
    jL: function() {
        return this.dA
    },
    FN: function(a) {
        this.El(a)
    },
    Ns: function() {
        this.o.m.Ij || this.O.gb == this.wz || (this.wz = this.O.gb,
        this.element && (this.element.style.visibility = this.O.gb ? "visible" : "hidden"));
        this.O.B == this.GE && this.O.A == this.HE || this.setPosition(this.O.B, this.O.A);
        this.O.aa == this.FE && this.O.$ == this.EE || this.ou(this.O.aa, this.O.$);
        return 0
    }
});
var fh = 0
  , th = 1
  , qg = 9
  , Jg = 13
  , Uf = 14;
function ul() {
    this.jB = 100;
    this.Iw = this.QG = this.RG = this.uq = 0
}
ul.prototype = {
    setData: function(a, b, c, d, e) {
        this.jB = a;
        this.uq = b;
        this.RG = c;
        this.QG = d;
        this.Iw = e
    }
};
function gj() {
    this.Bt = 0;
    this.sf = null
}
gj.prototype = {
    load: function(a) {
        var b = a.Ba;
        this.Bt = D(a);
        this.sf = Array(this.Bt);
        var c;
        for (c = 0; c < this.Bt; c++) {
            a.seek(b + 4 + 16 * c);
            var d = D(a)
              , e = D(a)
              , f = D(a)
              , g = D(a);
            a.seek(b + f);
            var f = S(a)
              , h = S(a)
              , k = a.na()
              , m = a.na();
            T(a, 2);
            var l = D(a);
            switch (h) {
            case 0:
                this.sf[c] = new vl;
                break;
            case 1:
                this.sf[c] = new wl;
                break;
            case 2:
                this.sf[c] = new xl;
                break;
            case 3:
                this.sf[c] = new yl;
                break;
            case 4:
                this.sf[c] = new zl;
                break;
            case 5:
                this.sf[c] = new Al;
                break;
            case 9:
                this.sf[c] = new Bl;
                break;
            case 14:
                this.sf[c] = new Cl
            }
            this.sf[c].setData(h, f, k, l, m);
            this.sf[c].load(a, g - 12);
            14 == h && (a.seek(b + d),
            d = a.bd(),
            d = d.substring(0, d.length - 4),
            d = d.toLowerCase(),
            this.sf[c].EN(d, e))
        }
    }
};
function zl() {
    this.mG = this.nG = this.kG = this.lG = this.st = 0
}
zl.prototype = p(new ul, {
    load: function(a) {
        this.st = S(a);
        this.lG = S(a);
        this.kG = S(a);
        this.nG = S(a);
        this.mG = S(a)
    }
});
function yl() {
    this.sG = this.rG = this.qG = this.tG = 0
}
yl.prototype = p(new ul, {
    load: function(a) {
        this.tG = S(a);
        this.qG = S(a);
        this.rG = S(a);
        S(a);
        this.sG = D(a)
    }
});
function wl() {
    this.xG = this.vG = this.wG = this.uG = 0
}
wl.prototype = p(new ul, {
    load: function(a) {
        this.uG = F(a);
        this.wG = F(a);
        this.vG = F(a);
        this.xG = F(a);
        S(a)
    }
});
function Al() {
    this.PG = this.NG = this.iB = this.KG = this.LG = this.tq = 0;
    this.cc = null
}
Al.prototype = p(new ul, {
    load: function(a) {
        this.tq = S(a);
        this.LG = S(a);
        this.KG = S(a);
        this.iB = a.na();
        this.NG = a.na();
        this.PG = a.na();
        T(a, 1);
        this.cc = Array(this.tq);
        var b, c, d;
        for (b = 0; b < this.tq; b++)
            d = a.Ba,
            this.cc[b] = new Dl,
            a.na(),
            c = a.na(),
            this.cc[b].load(a),
            a.seek(d + c)
    }
});
function Dl() {
    this.cB = this.oG = this.dB = this.ZA = this.bB = this.aB = this.$A = this.pG = 0;
    this.gh = null
}
Dl.prototype = {
    load: function(a) {
        this.pG = a.na();
        this.$A = a.na();
        this.aB = F(a);
        this.bB = F(a);
        this.ZA = F(a);
        this.dB = F(a);
        this.oG = S(a);
        this.cB = S(a);
        a = a.bd();
        0 < a.length && (this.gh = a)
    }
};
function Bl() {
    this.CG = this.BG = this.DG = this.AG = this.zG = this.EG = 0
}
Bl.prototype = p(new ul, {
    load: function(a) {
        this.EG = S(a);
        this.zG = S(a);
        this.AG = S(a);
        this.DG = S(a);
        this.BG = S(a);
        this.CG = S(a)
    }
});
function xl() {
    this.GG = this.FG = this.HG = this.hB = this.gB = this.IG = 0
}
xl.prototype = p(new ul, {
    load: function(a) {
        this.IG = S(a);
        this.gB = S(a);
        this.hB = S(a);
        this.HG = S(a);
        S(a);
        this.FG = S(a);
        this.GG = S(a)
    }
});
function vl() {}
vl.prototype = p(new ul, {
    load: function() {}
});
function Cl() {
    this.Zj = null;
    this.data = 0;
    this.Ss = !1
}
Cl.prototype = p(new ul, {
    load: function(a) {
        T(a, 14);
        this.data = a.Ba
    },
    EN: function(a) {
        this.Zj = a;
        if (qa(this.Zj, "box2d8directions") || qa(this.Zj, "box2dspring") || qa(this.Zj, "box2dspaceship") || qa(this.Zj, "box2dstatic") || qa(this.Zj, "box2dracecar") || qa(this.Zj, "box2daxial") || qa(this.Zj, "box2dplatform") || qa(this.Zj, "box2dbouncingball") || qa(this.Zj, "box2dbackground"))
            this.Ss = !0
    }
});
var ak = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251]
  , Zj = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49]
  , El = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600]
  , Fl = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1]
  , Gl = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24]
  , Hl = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0];
function Il() {
    this.a = null;
    this.Ym = this.mh = this.qk = this.ld = this.lj = this.eu = this.du = 0
}
Il.prototype = {
    Ix: function(a) {
        2 == this.a.b.pe && (250 < a && (a = 250),
        0 > a && (a = 0),
        this.Ix(a));
        this.a.b.pe == Uf && this.Ze.Ix(a)
    },
    Gx: function(a) {
        this.a.b.pe == qg && (250 < a && (a = 250),
        0 > a && (a = 0),
        this.Gx(a));
        this.a.b.pe == Uf && this.Ze.Gx(a)
    },
    Ed: function() {
        return this.a.b.pe == Uf && this.Ze.Ed ? this.Ze.Ed() : this.a.b.Fb
    },
    ed: function() {},
    start: function() {}
};
function Jl(a, b, c, d, e, f, g) {
    var h = na((b + d) / 2), k = na((c + e) / 2), m, l;
    do
        if (Kl(a, h + a.a.c.Ma, k + a.a.c.Ra, f, !1)) {
            if (d = h,
            e = k,
            m = h,
            l = k,
            h = na((d + b) / 2),
            k = na((e + c) / 2),
            h == m && k == l)
                return d == b && e == c || !Kl(a, b + a.a.c.Ma, c + a.a.c.Ra, f, !1) || (h = b,
                k = c),
                g.x = h,
                g.y = k,
                !0
        } else if (b = h,
        c = k,
        m = h,
        l = k,
        h = na((d + b) / 2),
        k = na((e + c) / 2),
        h == m && k == l) {
            if ((d != b || e != c) && Kl(a, d + a.a.c.Ma, e + a.a.c.Ra, f, !1))
                return g.x = d,
                g.y = e,
                !0;
            g.x = h;
            g.y = k;
            return !1
        }
    while (1)
}
function Ll(a, b, c, d) {
    var e;
    e = -1;
    d && (e = a.a.De);
    d = a.a.$d;
    if (0 != (d.kg & 15)) {
        var f = b - a.a.Ya
          , g = c - a.a.Za;
        if (0 != (eg(a.a.c, f, g, f + a.a.aa, g + a.a.$) & d.kg))
            return !1
    }
    if (0 != (d.kg & 16) && hc(a.a.c, a.a, a.a.b.xc, a.a.b.Kc, a.a.b.Lc, b, c, 0, 1))
        return !1;
    if (-1 == d.Dq)
        return !0;
    b = ig(a.a.c, a.a, a.a.b.qc, a.a.b.xc, a.a.b.Kc, a.a.b.Lc, b, c, d.Fm);
    if (null == b)
        return !0;
    a = a.a.c.G.fo;
    for (c = 0; c < b.size(); c++)
        if (f = b.get(c).De,
        f != e)
            for (g = d.Dq; 0 <= a[g]; g++)
                if (a[g] == f)
                    return !1;
    return !0
}
function Kl(a, b, c, d, e) {
    var f;
    f = -1;
    e && (f = a.a.De);
    e = a.a.$d;
    if (0 != (e.kg & 15)) {
        var g = b - a.a.Ya
          , h = c - a.a.Za;
        if (0 != (eg(a.a.c, g, h, g + a.a.aa, h + a.a.$) & e.kg))
            return !1
    }
    if (0 != (e.kg & 16) && hc(a.a.c, a.a, a.a.b.xc, a.a.b.Kc, a.a.b.Lc, b, c, d, 1))
        return !1;
    if (-1 == e.Dq)
        return !0;
    b = ig(a.a.c, a.a, a.a.b.qc, a.a.b.xc, a.a.b.Kc, a.a.b.Lc, b, c, e.Fm);
    if (null == b)
        return !0;
    a = a.a.c.G.fo;
    for (c = 0; c < b.size(); c++)
        if (d = b.get(c).De,
        d != f)
            for (g = e.Dq; 0 <= a[g]; g++)
                if (a[g] == d)
                    return !1;
    return !0
}
function Ml(a, b) {
    switch (a.a.c.G.zx & 4294901760) {
    case -786432:
        var c = a.a.B - a.a.Ya
          , d = a.a.A - a.a.Za
          , e = eg(a.a.c, c, d, c + a.a.aa, d + a.a.$)
          , c = a.a.B
          , d = a.a.A;
        0 != (e & 1) && (c = a.a.Ya);
        0 != (e & 2) && (c = a.a.c.ee - a.a.aa + a.a.Ya);
        0 != (e & 4) && (d = a.a.Za);
        0 != (e & 8) && (d = a.a.c.fe - a.a.$ + a.a.Za);
        a.a.B = c;
        a.a.A = d;
        break;
    case -851968:
    case -917504:
        c = new $a;
        a: {
            var d = a.a.B, e = a.a.A, f = a.a.b.Om, g = a.a.b.Pm, h = na((d + f) / 2), k = na((e + g) / 2), m, l;
            do
                if (Ll(a, h, k, b)) {
                    if (f = h,
                    g = k,
                    m = h,
                    l = k,
                    h = na((f + d) / 2),
                    k = na((g + e) / 2),
                    h == m && k == l) {
                        f == d && g == e || !Ll(a, d, e, b) || (h = d,
                        k = e);
                        c.x = h;
                        c.y = k;
                        d = !0;
                        break a
                    }
                } else if (d = h,
                e = k,
                m = h,
                l = k,
                h = na((f + d) / 2),
                k = na((g + e) / 2),
                h == m && k == l) {
                    if ((f != d || g != e) && Ll(a, f, g, b)) {
                        c.x = f;
                        c.y = g;
                        d = !0;
                        break a
                    }
                    c.x = h;
                    c.y = k;
                    d = !1;
                    break a
                }
            while (1);
            d = void 0
        }
        if (d)
            a.a.B = c.x,
            a.a.A = c.y;
        else {
            c = 18 * (a.a.c.Ed(a.a) >> 2);
            do {
                if (Ll(a, a.a.B + Hl[c], a.a.A + Hl[c + 1], b)) {
                    a.a.B += Hl[c];
                    a.a.A += Hl[c + 1];
                    return
                }
                c += 2
            } while (0 != Hl[c] || 0 != Hl[c + 1]);
            0 == b && (a.a.B = a.a.b.Om,
            a.a.A = a.a.b.Pm,
            a.a.b.qc = a.a.b.ix,
            a.a.b.xc = a.a.b.hx)
        }
    }
}
function Nl(a, b) {
    if (b)
        Ml(a, !1);
    else
        switch (a.a.c.G.zx & 4294901760) {
        case -786432:
            var c = a.a.B - a.a.Ya
              , d = a.a.A - a.a.Za
              , e = eg(a.a.c, c, d, c + a.a.aa, d + a.a.$)
              , c = a.a.B
              , d = a.a.A;
            0 != (e & 1) && (c = a.a.Ya);
            0 != (e & 2) && (c = a.a.c.ee - a.a.aa + a.a.Ya);
            0 != (e & 4) && (d = a.a.Za);
            0 != (e & 8) && (d = a.a.c.fe - a.a.$ + a.a.Za);
            a.a.B = c;
            a.a.A = d;
            break;
        case -851968:
        case -917504:
            c = 18 * (a.a.c.Ed(a.a) >> 2);
            do {
                if (Ll(a, a.a.B + Hl[c], a.a.A + Hl[c + 1], !1)) {
                    a.a.B += Hl[c];
                    a.a.A += Hl[c + 1];
                    return
                }
                c += 2
            } while (0 != Hl[c] || 0 != Hl[c + 1]);
            a.a.B = a.a.b.Om;
            a.a.A = a.a.b.Pm;
            a.a.b.qc = a.a.b.ix;
            a.a.b.xc = a.a.b.hx
        }
}
function Ol(a) {
    return 100 >= a ? El[a] : a << 8
}
function Pl(a, b) {
    0 == b.RG && a.stop()
}
function Ql(a, b, c) {
    a.a.c.jh++;
    a.lj = a.a.c.jh;
    a.a.L.sa = !1;
    if (0 == b)
        return mg(a.a.c, a.a),
        !1;
    var d, e;
    for (e = 0 != (a.a.c.J.ud & 32768) ? Math.floor(b * a.a.c.de * 32) : b << 5; 2048 < e; ) {
        b = 65536 * a.a.B + (a.a.Ej & 65535);
        d = 65536 * a.a.A + (a.a.Fj & 65535);
        b += 2048 * ak[c];
        d += 2048 * Zj[c];
        a.a.Ej = b & 65535;
        a.a.B = Math.floor(b / 65536);
        a.a.Fj = d & 65535;
        a.a.A = Math.floor(d / 65536);
        if (mg(a.a.c, a.a))
            return !0;
        if (a.a.L.sa)
            break;
        e -= 2048
    }
    if (!a.a.L.sa && (b = 65536 * a.a.B + (a.a.Ej & 65535),
    d = 65536 * a.a.A + (a.a.Fj & 65535),
    b += ak[c] * e,
    d += Zj[c] * e,
    a.a.Ej = b & 65535,
    a.a.B = Math.floor(b / 65536),
    a.a.Fj = d & 65535,
    a.a.A = Math.floor(d / 65536),
    mg(a.a.c, a.a)))
        return !0;
    a.a.b.la = !0;
    a.a.L.sa || (a.a.c.Zo = 0);
    return a.a.L.sa
}
var Rl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  , Sl = [4294967292, 4294967294, 4294967295]
  , Tl = [-4, 4, -2, 2, -1, 1]
  , Ul = [-4, 4, -4, 4, -4, 4];
function Vl() {
    this.oy = this.Su = this.pp = this.hD = this.op = this.Tu = this.Ru = 0;
    this.Pl = !1
}
Vl.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.a.Ej = 0;
        this.a.Fj = 0;
        this.a.b.Ca = b.st;
        this.a.b.rc = b.st;
        this.a.b.yl = b.st;
        this.pp = b.st << 8;
        var c = b.mG;
        0 != c && (c = Ol(c),
        this.a.b.yl = 0);
        this.mh = c;
        this.hD = b.lG;
        this.Ru = b.kG;
        this.Su = Sl[this.Ru];
        this.Pl = !1;
        this.oy = -1;
        this.op = this.Tu = (100 - b.nG) / 8;
        Pl(this, b);
        this.a.b.la = !0
    },
    move: function() {
        this.a.L.Xm = !1;
        this.a.c.Zo = 1;
        this.a.b.ih = 1;
        null != this.a.cb && this.a.cb.Ug();
        if (0 != this.mh) {
            var a = this.pp;
            if (0 < a) {
                var b = this.mh;
                0 != (this.a.c.J.ud & 32768) && (b *= this.a.c.de);
                a -= b;
                0 > a && (a = 0);
                this.pp = a;
                this.a.b.Ca = a >> 8
            }
        }
        Ql(this, this.a.b.Ca, this.a.c.Ed(this.a))
    },
    stop: function() {
        0 == this.ld && (this.ld = this.a.b.Ca | 32768,
        this.pp = this.a.b.Ca = 0,
        this.a.L.sa = !0)
    },
    start: function() {
        var a = this.ld;
        0 != a && (a &= 32767,
        this.a.b.Ca = a,
        this.pp = a << 8,
        this.ld = 0,
        this.a.L.sa = !0)
    },
    zj: function() {
        if (0 == this.ld && this.a.c.se != this.oy) {
            this.oy = this.a.c.se;
            this.lj == this.a.c.jh && Ml(this, this.Pl);
            var a = this.a.B
              , b = this.a.A
              , c = 0
              , a = a - 8
              , b = b - 8;
            0 == Ll(this, a, b, this.Pl) && (c |= 1);
            a += 16;
            0 == Ll(this, a, b, this.Pl) && (c |= 2);
            b += 16;
            0 == Ll(this, a, b, this.Pl) && (c |= 4);
            0 == Ll(this, a - 16, b, this.Pl) && (c |= 8);
            a = Rl[32 * c + this.a.c.Ed(this.a)];
            a &= this.Su;
            if (!this.wt(a)) {
                var c = b = Ul[2 * this.Ru + 1]
                  , d = !1;
                do {
                    a -= b;
                    a &= 31;
                    if (this.wt(a)) {
                        d = !0;
                        break
                    }
                    a += 2 * b;
                    a &= 31;
                    if (this.wt(a)) {
                        d = !0;
                        break
                    }
                    a -= b;
                    a &= 31;
                    b += c
                } while (16 >= b);
                if (0 == d) {
                    this.Pl = !0;
                    this.a.b.Fb = this.a.c.random(32) & this.Su;
                    this.a.L.Xm = !0;
                    this.a.L.sa = !0;
                    return
                }
            }
            this.Pl = !1;
            this.a.b.Fb = a;
            a = this.a.c.random(100);
            if (a < this.hD && (a >>= 2,
            25 > a && (a = a - 12 & 31 & this.Su,
            this.wt(a)))) {
                this.a.b.Fb = a;
                this.a.L.Xm = !0;
                this.a.L.sa = !0;
                return
            }
            a = this.a.c.Ed(this.a) & 7;
            12 != this.op && (0 == a ? (this.op--,
            0 > this.op && (a = this.a.c.Ed(this.a) + Tl[this.a.c.random(2) + 2 * this.Ru],
            a &= 31,
            this.wt(a) && (this.a.b.Fb = a,
            this.op = this.Tu))) : this.op = this.Tu);
            this.a.L.Xm = !0;
            this.a.L.sa = !0
        }
    },
    wt: function(a) {
        var b = 2048 * ak[a] + (65536 * this.a.B + (this.a.Ej & 65535));
        a = 2048 * Zj[a] + (65536 * this.a.A + (this.a.Fj & 65535));
        b = Math.floor(b / 65536);
        a = Math.floor(a / 65536);
        return Ll(this, b, a, !1)
    },
    ri: function() {},
    ti: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.Ca = a;
        this.pp = a << 8;
        this.ld = 0;
        this.a.L.sa = !0
    },
    tk: function(a) {
        this.ti(a)
    },
    reverse: function() {
        0 == this.ld && (this.a.L.sa = !0,
        this.a.b.Fb += 16,
        this.a.b.Fb &= 31)
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    }
});
(function() {
    this.Uu = !1;
    this.qp = null
}
).prototype = p(new Il, {
    ya: function(a) {
        this.a = a;
        this.v = a.c;
        this.v.Nl();
        null != this.a.ca && Fh(this.a.ca, !1);
        null != this.a.ca && (this.a.ca.Ga &= ~Jb,
        Ib(this.a.ca));
        this.Uu = !0;
        this.a.Ej = 0;
        this.a.Fj = 0;
        null != this.a.cb && Ch(this.a.cb);
        this.a.b.Ca = 0;
        this.a.b.Rb = !0;
        this.a.b.la = !0
    },
    qA: function(a) {
        this.a.b.rc = this.a.b.Ca;
        this.a.b.yl = this.a.b.Ca;
        this.qp = a;
        null != a && (a.Da |= Ig)
    },
    ed: function() {
        this.eL(this.a)
    },
    move: function() {
        if (this.Uu) {
            if (null != this.qp.cb && 6 == this.qp.cb.Lq)
                return;
            this.WH()
        }
        null != this.a.cb && this.a.cb.Ug();
        Ql(this, this.a.b.Ca, this.a.c.Ed(this.a));
        if (-64 > this.a.B || this.a.B > this.a.c.ee + 64 || -64 > this.a.A || this.a.A > this.a.c.fe + 64)
            this.a.Zv = !1,
            Hg(this.a.c, this.a.Pc);
        this.a.b.Rb && (this.a.b.Rb = !1,
        mg(this.a.c, this.a))
    },
    WH: function() {
        null != this.a.ca && Fh(this.a.ca, !0);
        null != this.a.ca && (this.a.ca.Ga |= Jb,
        nl(this.a.ca));
        if (null != this.v.Um) {
            var a = this.v.fc(this.qp);
            if (null != a) {
                var b = this.v.Um
                  , c = new uh;
                this.py = c;
                vh(c, this.a, 0);
                c.LA = b.identifier;
                this.Br = b.MM(a.UL, this.a.b.Ca / 250 * 50, c);
                c.R = this.Br;
                null == this.Br && (this.py = null)
            }
        }
        this.Uu = !1;
        this.qp = null
    },
    eL: function() {
        null != this.Br && (pBase = this.a.c.Um,
        pBase.Vt(this.Br),
        this.Br = null);
        null != this.py && (this.py = null)
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ri: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    zj: function() {},
    ti: function() {},
    tk: function() {}
});
function Gh() {}
Gh.prototype = p(new Il, {
    ya: function(a) {
        this.a = a
    },
    move: function() {
        0 == (this.a.Da & Hh) && null != this.a.cb && (this.a.cb.Ug(),
        5 != this.a.cb.ki && Hg(this.a.c, this.a.Pc))
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0)
    },
    ri: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    zj: function() {},
    ti: function() {},
    tk: function() {}
});
function Wl() {
    this.qy = this.tj = this.ry = this.Ck = 0
}
Wl.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.a.Ej = 0;
        this.tj = this.a.Fj = 0;
        this.Ck = this.a.b.Ca = 0;
        this.qy = -1;
        this.a.b.zl = b.uq;
        this.du = b.qG;
        this.qk = Ol(this.du);
        this.eu = b.rG;
        this.mh = Ol(this.eu);
        this.a.b.rc = b.tG;
        this.a.b.yl = 0;
        this.ry = b.sG;
        this.Ym = b.Iw;
        this.a.b.la = !0
    },
    move: function() {
        var a, b, c, d;
        this.a.c.Zo = 1;
        a = this.a.c.Ed(this.a);
        this.a.b.ZB = a;
        if (0 == this.Ck) {
            this.a.L.Xm = !1;
            b = 0;
            c = this.a.c.df[this.a.b.zl - 1] & 15;
            0 != c && (d = Fl[c],
            -1 != d && 0 != (1 << d & this.ry) && (b = 1,
            a = d));
            c = this.tj;
            0 == b ? 0 != c && (b = this.mh,
            0 != (this.a.c.J.ud & 32768) && (b *= this.a.c.de),
            c -= b,
            0 >= c && (c = 0)) : c >> 8 < this.a.b.rc && (b = this.qk,
            0 != (this.a.c.J.ud & 32768) && (b *= this.a.c.de),
            c += b,
            c >> 8 > this.a.b.rc && (c = this.a.b.rc << 8));
            this.tj = c;
            this.a.b.Ca = c >> 8;
            this.a.b.Fb = a;
            this.a.b.ih = 1;
            null != this.a.cb && this.a.cb.Ug();
            if (0 == Ql(this, this.a.b.Ca, this.a.c.Ed(this.a)))
                return;
            if (0 == this.a.b.Ca) {
                c = this.tj;
                if (0 == c || this.a.b.ZB == this.a.c.Ed(this.a))
                    return;
                this.a.b.Ca = c >> 8;
                this.a.b.Fb = this.a.b.ZB;
                if (0 == Ql(this, this.a.b.Ca, this.a.c.Ed(this.a)))
                    return
            }
        }
        for (; 0 != this.Ck && 0 != this.a.c.Zo; )
            if (c = this.tj,
            c -= this.mh,
            0 < c) {
                if (this.tj = c,
                c >>= 8,
                this.a.b.Ca = c,
                d = this.a.c.Ed(this.a),
                0 != this.Ck && (d += 16,
                d &= 31),
                0 == Ql(this, c, d))
                    break
            } else {
                this.tj = 0;
                this.Ck = this.a.b.Ca = 0;
                break
            }
    },
    zj: function() {
        this.lj == this.a.c.jh && Nl(this, 0 != (this.Ym & 1));
        this.a.c.se != this.qy && (this.qy = this.a.c.se,
        this.Ck++,
        12 <= this.Ck ? this.stop() : (this.a.L.Xm = !0,
        this.a.L.sa = !0))
    },
    reverse: function() {},
    ri: function() {},
    stop: function() {
        this.tj = this.Ck = this.a.b.Ca = 0;
        this.a.L.sa = !0;
        this.lj == this.a.c.jh && (Nl(this, 0 != (this.Ym & 1)),
        this.Ck = 0)
    },
    start: function() {
        this.a.L.sa = !0;
        this.ld = 0
    },
    tk: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.rc = a;
        this.a.b.Ca > a && (this.a.b.Ca = a,
        this.tj = a << 8);
        this.a.L.sa = !0
    },
    ti: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.rc && (a = this.a.b.rc);
        this.a.b.Ca = a;
        this.tj = a << 8;
        this.a.L.sa = !0
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    uQ: function(a) {
        this.ry = a
    }
});
function Xl() {
    this.Vu = this.Wu = this.vy = this.uy = this.ty = this.sy = 0
}
Xl.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.a.b.zl = b.uq;
        this.sy = b.uG + this.a.B;
        this.ty = b.vG + this.a.A;
        this.uy = b.wG + this.a.B;
        this.vy = b.xG + this.a.A;
        this.Wu = this.Vu = this.a.b.Ca = 0;
        this.a.b.yl = 0;
        this.a.b.rc = 100;
        this.Ym = b.Iw;
        Pl(this, b);
        this.a.b.la = !0
    },
    move: function() {
        var a = this.a.B, b = this.a.A, c, d, e, f;
        if (0 == this.ld && 0 != this.a.c.ox[this.a.b.zl - 1] && (a = this.a.c.Yt,
        a < this.sy && (a = this.sy),
        a > this.uy && (a = this.uy),
        b = this.a.c.Zt,
        b < this.ty && (b = this.ty),
        b > this.vy && (b = this.vy),
        c = a - this.a.B,
        d = b - this.a.A,
        e = 0,
        0 > c && (c = -c,
        e |= 1),
        0 > d && (d = -d,
        e |= 2),
        f = c + d << 2,
        250 < f && (f = 250),
        this.a.b.Ca = f,
        0 != f)) {
            0 == d && (d = 1);
            c = (c << 8) / d;
            for (d = 0; !(c >= Gl[d]); d += 2)
                ;
            c = Gl[d + 1];
            0 != (e & 2) && (c = -c + 32 & 31);
            0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
            this.a.b.Fb = c
        }
        0 != this.a.b.Ca && (this.Wu = 0,
        this.Vu = this.a.b.Ca);
        this.Wu++;
        10 < this.Wu && (this.Vu = 0);
        this.a.b.Ca = this.Vu;
        null != this.a.cb && this.a.cb.Ug();
        this.a.B = a;
        this.a.A = b;
        this.a.b.la = !0;
        this.a.c.jh++;
        this.lj = this.a.c.jh;
        mg(this.a.c, this.a)
    },
    stop: function() {
        this.lj == this.a.c.jh && Nl(this, 0 != (this.Ym & 1));
        this.a.b.Ca = 0
    },
    start: function() {
        this.ld = 0;
        this.a.L.sa = !0
    },
    zj: function() {
        this.stop()
    },
    reverse: function() {},
    ri: function() {},
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    }
});
function Yl() {
    this.Qg = this.ln = this.kn = this.Hk = this.Gk = this.Yu = this.Cr = this.Dr = this.ye = 0;
    this.Bf = !1;
    this.zb = null;
    this.Fk = this.$u = this.Zu = this.Ek = 0;
    this.up = null;
    this.Xu = !1
}
Yl.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.Zu = this.a.B;
        this.$u = this.a.A;
        this.Bf = !1;
        this.Fk = 0;
        this.a.eq = 0;
        this.zb = b;
        this.a.b.yl = b.LG;
        this.a.b.rc = b.KG;
        this.Ek = 0;
        this.up = null;
        this.zo(0);
        Pl(this, b);
        this.a.b.Ca = this.ye;
        this.a.b.la = !0;
        0 == this.zb.cc.length && this.stop()
    },
    move: function() {
        this.a.eq = 0;
        this.a.b.ih = 1;
        null != this.a.cb && this.a.cb.Ug();
        if (0 == this.ye) {
            var a = this.Fk;
            if (0 == a) {
                this.a.b.Ca = 0;
                mg(this.a.c, this.a);
                return
            }
            a -= this.a.c.cu;
            if (0 < a) {
                this.Fk = a;
                this.a.b.Ca = 0;
                mg(this.a.c, this.a);
                return
            }
            this.Fk = 0;
            this.ye = this.ld & 32767;
            this.ld = 0;
            this.a.b.Ca = this.ye
        }
        a = 0 != (this.a.c.J.ud & 32768) ? 256 * this.a.c.de : 256;
        this.a.c.Cl = a;
        for (var b; ; ) {
            b = !1;
            this.a.c.bu = a;
            a *= this.ye;
            a <<= 5;
            524288 >= a ? this.a.c.qC = a : (a = 16384,
            a /= this.ye,
            this.a.c.bu = a,
            this.a.c.qC = 524288);
            for (; ; ) {
                this.Xu = !1;
                if (1 == this.MG(this.a.c.qC) && 0 == this.Xu) {
                    b = !0;
                    break
                }
                if (this.a.c.Cl == this.a.c.bu) {
                    b = !0;
                    break
                }
                if (this.a.c.Cl > this.a.c.bu) {
                    this.a.c.Cl -= this.a.c.bu;
                    a = this.a.c.Cl;
                    break
                }
                a = this.a.c.Cl * MT_Speed;
                a <<= 5;
                this.MG(a);
                b = !0;
                break
            }
            if (b)
                break
        }
    },
    MG: function(a) {
        a += this.Ek;
        var b = a >>> 16;
        if (b < this.Yu)
            return this.Ek = a,
            a = b * this.Dr / 16384 + this.Hk,
            this.a.B = b * this.Cr / 16384 + this.Gk,
            this.a.A = a,
            this.a.b.la = !0,
            mg(this.a.c, this.a),
            this.a.L.sa;
        b -= this.Yu;
        a = b << 16 | a & 65535;
        0 != this.ye && (a /= this.ye);
        this.a.c.Cl += a >> 5 & 65535;
        this.a.B = this.kn;
        this.a.A = this.ln;
        this.a.b.la = !0;
        mg(this.a.c, this.a);
        if (this.a.L.sa)
            return !0;
        this.a.eq = this.a.c.se;
        this.a.cq = null;
        b = this.Qg;
        this.Ek = 0;
        if (0 == this.Bf) {
            b++;
            if (b < this.zb.tq) {
                this.a.cq = this.zb.cc[b].gh;
                if (null != this.up && null != this.zb.cc[b].gh && qa(this.up, this.zb.cc[b].gh))
                    return this.Qg = b,
                    this.bi(),
                    this.Hw();
                this.zo(b);
                this.bi();
                return this.a.L.sa
            }
            this.a.$v = this.a.c.se;
            this.Qg = b;
            if (this.Bf)
                return this.bi(),
                this.a.L.sa;
            if (0 != this.zb.PG)
                return this.Bf = !0,
                b--,
                this.a.cq = this.zb.cc[b].gh,
                this.sq(b),
                this.bi(),
                this.a.L.sa;
            this.OG();
            if (0 == this.zb.iB)
                return this.Hw(),
                this.bi(),
                this.a.L.sa;
            b = 0
        } else {
            if (null != this.up && null != this.zb.cc[b].gh && qa(this.up, this.zb.cc[b].gh))
                return this.bi(),
                this.Hw();
            this.a.cq = this.zb.cc[b].gh;
            this.Fk = this.zb.cc[b].cB;
            b--;
            if (0 <= b)
                return this.sq(b),
                this.bi(),
                this.a.L.sa;
            this.OG();
            if (0 == this.Bf)
                return this.bi(),
                this.a.L.sa;
            if (0 == this.zb.iB)
                return this.Hw(),
                this.bi(),
                this.a.L.sa;
            b = 0;
            this.Bf = !1
        }
        this.zo(b);
        this.bi();
        return this.a.L.sa
    },
    zo: function(a) {
        a >= this.zb.cc.length ? this.stop() : (this.Bf = !1,
        this.Qg = a,
        this.Fk = this.zb.cc[a].cB,
        this.Cr = this.zb.cc[a].ZA,
        this.Dr = this.zb.cc[a].dB,
        this.Gk = this.a.B,
        this.Hk = this.a.A,
        this.kn = this.a.B + this.zb.cc[a].aB,
        this.ln = this.a.A + this.zb.cc[a].bB,
        this.a.b.Fb = this.zb.cc[a].$A,
        this.JG())
    },
    sq: function(a) {
        a >= this.zb.cc.length ? this.stop() : (this.Bf = !0,
        this.Qg = a,
        this.Cr = -this.zb.cc[a].ZA,
        this.Dr = -this.zb.cc[a].dB,
        this.Gk = this.a.B,
        this.Hk = this.a.A,
        this.kn = this.a.B - this.zb.cc[a].aB,
        this.ln = this.a.A - this.zb.cc[a].bB,
        this.a.b.Fb = this.zb.cc[a].$A + 16 & 31,
        this.JG())
    },
    JG: function() {
        this.Yu = this.zb.cc[this.Qg].oG;
        var a = this.zb.cc[this.Qg].pG
          , b = this.Fk;
        0 != b && (this.Fk = 20 * b,
        this.ld = a |= 32768);
        0 != this.ld && (a = 0);
        if (a != this.ye || 0 != a)
            this.ye = a,
            this.Xu = this.a.L.sa = !0;
        this.a.b.Ca = this.ye
    },
    bi: function() {
        this.a.eq == this.a.c.se && (this.a.c.G.Id = 0,
        pg(this.a.c.G, this.a, -1310720 | this.a.Bb & 65535),
        pg(this.a.c.G, this.a, -2293760 | this.a.Bb & 65535));
        this.a.$v == this.a.c.se && (this.a.c.G.Id = 0,
        pg(this.a.c.G, this.a, -1376256 | this.a.Bb & 65535))
    },
    Hw: function() {
        this.ld = this.ye = 0;
        this.a.L.sa = !0;
        this.Xu = !1;
        return !0
    },
    OG: function() {
        0 != this.zb.NG && (this.a.B = this.Zu,
        this.a.A = this.$u,
        this.a.b.la = !0)
    },
    JP: function(a) {
        var b;
        for (b = 0; b < this.zb.tq; b++)
            if (null != this.zb.cc[b].gh && qa(a, this.zb.cc[b].gh)) {
                0 == this.Bf ? (this.zo(b),
                this.a.eq = this.a.c.se,
                this.a.cq = this.zb.cc[b].gh,
                this.a.$v = 0,
                this.bi()) : 0 < b && (b--,
                this.sq(b),
                this.a.eq = this.a.c.se,
                this.a.cq = this.zb.cc[b].gh,
                this.a.$v = 0,
                this.bi());
                this.a.L.sa = !0;
                break
            }
    },
    KP: function(a) {
        var b;
        for (b = 0; b < this.zb.tq; b++)
            if (null != this.zb.cc[b].gh && qa(a, this.zb.cc[b].gh)) {
                if (b == this.Qg && 0 == this.Ek)
                    break;
                this.up = a;
                if (0 == this.Bf)
                    if (b > this.Qg) {
                        if (0 != this.ye)
                            break;
                        0 != (this.ld & 32768) ? this.start() : this.zo(this.Qg)
                    } else {
                        if (0 != this.ye) {
                            this.reverse();
                            break
                        }
                        0 != (this.ld & 32768) ? (this.start(),
                        this.reverse()) : this.sq(MT_MoveNumber - 1)
                    }
                else if (b <= this.Qg) {
                    if (0 != this.ye)
                        break;
                    0 != (this.ld & 32768) ? this.start() : this.sq(this.Qg - 1)
                } else {
                    if (0 != this.ye) {
                        this.reverse();
                        break
                    }
                    0 != (this.ld & 32768) ? (this.start(),
                    this.reverse()) : this.zo(this.Qg)
                }
                break
            }
    },
    stop: function() {
        0 == this.ld && (this.ld = this.ye | 32768);
        this.ye = 0;
        this.a.L.sa = !0
    },
    start: function() {
        0 != (this.ld & 32768) && (this.ye = this.ld & 32767,
        this.ld = this.Fk = 0,
        this.a.L.sa = !0)
    },
    reverse: function() {
        if (0 == this.ld) {
            this.a.L.sa = !0;
            var a = this.Qg;
            if (0 == this.Ek)
                (this.Bf = !this.Bf) ? 0 == a ? this.Bf = !this.Bf : (a--,
                this.sq(a)) : this.zo(a);
            else {
                this.Bf = !this.Bf;
                this.Cr = -this.Cr;
                this.Dr = -this.Dr;
                var a = this.Gk
                  , b = this.kn;
                this.Gk = b;
                this.kn = a;
                a = this.Hk;
                this.Hk = b = this.ln;
                this.ln = a;
                this.a.b.Fb += 16;
                this.a.b.Fb &= 31;
                a = this.Ek >>> 16;
                a = this.Yu - a;
                this.Ek = a << 16 | this.Ek & 65535
            }
        }
    },
    ef: function(a) {
        var b = this.a.B;
        this.a.B = a;
        b -= this.Gk;
        a -= b;
        this.kn = b = this.kn - this.Gk + a;
        b = this.Gk;
        this.Gk = a;
        this.Zu -= b - a;
        this.a.L.sa = !0;
        this.a.b.la = !0;
        this.a.b.Rb = !0
    },
    ff: function(a) {
        var b = this.a.A;
        this.a.A = a;
        b -= this.Hk;
        a -= b;
        this.ln = b = this.ln - this.Hk + a;
        b = this.Hk;
        this.Hk = a;
        this.$u -= b - a;
        this.a.L.sa = !0;
        this.a.b.la = !0;
        this.a.b.Rb = !0
    },
    ti: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.ye = a;
        this.a.b.Ca = a;
        this.a.L.sa = !0
    },
    tk: function(a) {
        this.ti(a)
    },
    ri: function() {}
});
function Zl() {
    this.rp = this.jD = this.Ql = this.Ei = this.Di = this.Zf = this.iD = this.wy = this.qg = this.Ac = 0;
    this.sp = null;
    this.yy = this.xy = 0;
    this.hn = !1
}
Zl.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.v = this.a.c;
        this.a.Ej = 0;
        this.qg = this.a.Fj = 0;
        this.a.b.Ca = 0;
        this.a.b.zl = b.uq;
        this.du = b.zG;
        this.qk = Ol(this.du);
        this.eu = b.AG;
        this.mh = Ol(this.eu);
        this.a.b.rc = b.EG;
        this.a.b.yl = 0;
        this.wy = b.BG;
        this.iD = b.CG;
        var c = b.DG;
        3 < c && (c = 1);
        this.jD = c;
        this.rp = this.Zf = 0;
        this.sp = null;
        Pl(this, b);
        this.a.b.la = !0;
        this.Ac = 0
    },
    move: function() {
        var a, b;
        this.a.c.Zo = 1;
        a = this.a.c.df[this.a.b.zl - 1];
        this.Cz();
        b = this.qg;
        var c;
        0 == this.rp && (0 >= b && (0 != (a & 4) ? (c = this.qk,
        0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
        b -= c,
        b / 256 < -this.a.b.rc && (b = 256 * -this.a.b.rc)) : 0 > b && (c = this.mh,
        0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
        b += c,
        0 < b && (b = 0)),
        0 != (a & 8) && (b = -b)),
        0 <= b && (0 != (a & 8) ? (c = this.qk,
        0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
        b += c,
        b / 256 > this.a.b.rc && (b = 256 * this.a.b.rc)) : 0 < b && (c = this.mh,
        0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
        b -= c,
        0 > b && (b = 0)),
        0 != (a & 4) && (b = -b)),
        this.qg = b);
        var d = this.Zf;
        for (c = !1; ; ) {
            switch (this.Ac) {
            case 2:
            case 3:
                c = this.wy << 5;
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de);
                d += c;
                64E3 < d && (d = 64E3);
                break;
            case 0:
                if (0 != (a & 1)) {
                    if (2147483647 == Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei - 4))
                        break;
                    this.Ac = 1;
                    c = !0;
                    continue
                }
                if (0 != (a & 2) && 2147483647 != Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei + 4)) {
                    this.Ac = 1;
                    c = !0;
                    continue
                }
                break;
            case 1:
                if (0 == c && (this.rp = 0,
                2147483647 == Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei) && 2147483647 == Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei - 4)))
                    break;
                0 >= d && (0 != (a & 1) ? (c = this.qk,
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
                d -= c,
                c = d / 256,
                c < -this.a.b.rc && (d = 256 * -this.a.b.rc)) : (c = this.mh,
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
                d += c,
                0 < d && (d = 0)),
                0 != (a & 2) && (d = -d));
                0 <= d && (0 != (a & 2) ? (c = this.qk,
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
                d += c,
                c = d / 256,
                c > this.a.b.rc && (d = 256 * this.a.b.rc)) : (c = this.mh,
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
                d -= c,
                0 > d && (d = 0)),
                0 != (a & 1) && (d = -d))
            }
            break
        }
        this.Zf = d;
        var e = 0;
        0 > b && (e = 16);
        c = b;
        var f = d;
        if (0 != f) {
            var g = 0;
            0 > c && (g |= 1,
            c = -c);
            0 > f && (g |= 2,
            f = -f);
            c = (c << 8) / f;
            for (e = 0; !(c >= Gl[e]); e += 2)
                ;
            e = Gl[e + 1];
            0 != (g & 2) && (e = -e + 32 & 31);
            0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
        }
        c = b;
        g = ak[e];
        f = Zj[e];
        0 > g && (g = -g);
        0 > f && (f = -f);
        g < f && (g = f,
        c = d);
        0 > c && (c = -c);
        c /= g;
        250 < c && (c = 250);
        this.a.b.Ca = c;
        switch (this.Ac) {
        case 1:
            0 > d ? this.a.b.Fb = 8 : 0 < d && (this.a.b.Fb = 24);
            break;
        case 3:
            this.a.b.Fb = e;
            break;
        default:
            0 > b ? this.a.b.Fb = 16 : 0 < b && (this.a.b.Fb = 0)
        }
        switch (this.Ac) {
        case 4:
            this.a.b.ih = 10;
            break;
        case 5:
            this.a.b.ih = 11;
            break;
        case 3:
            this.a.b.ih = 8;
            break;
        case 2:
            this.a.b.ih = 7;
            break;
        case 1:
            this.a.b.ih = 9;
            break;
        default:
            this.a.b.ih = 1
        }
        null != this.a.cb && this.a.cb.Ug();
        this.Cz();
        Ql(this, this.a.b.Ca, e);
        0 != this.Ac && 1 != this.Ac || 0 != this.hn || (b = !1,
        d = this.jD,
        0 != d && (d--,
        0 == d ? (5 == (a & 5) && (b = !0),
        9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)),
        b && (this.Zf = -this.iD << 8,
        this.Ac = 2));
        switch (this.Ac) {
        case 2:
            0 <= this.Zf && (this.Ac = 3);
            break;
        case 3:
            2147483647 != Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei) && (this.Zf = 0,
            this.Ac = 1,
            this.a.b.Fb = 8);
            break;
        case 0:
            if (0 != (a & 3) && 0 == (a & 12) && 2147483647 != Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei)) {
                this.Ac = 1;
                this.qg = 0;
                break
            }
            0 != (a & 2) && null != this.a.cb && Dh(this.a.cb, 10) && (this.qg = 0,
            this.Ac = 4);
            if (2147483647 != Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei))
                break;
            0 == Kl(this, this.a.B, this.a.A + 10, this.Ql, !0) ? (a = this.a.B - this.a.c.Ma,
            b = this.a.A - this.a.c.Ra,
            d = new $a,
            Jl(this, a, b + this.Ql - 1, a, b, this.Ql, d),
            this.a.B = d.x + this.a.c.Ma,
            this.a.A = d.y + this.a.c.Ra,
            this.hn = !1) : this.Ac = 3;
            break;
        case 1:
            if (2147483647 == Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei)) {
                if (0 > this.Zf)
                    for (f = 0; 32 > f; f++)
                        if (2147483647 != Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei + f)) {
                            this.a.A += f;
                            break
                        }
                this.Zf = 0
            }
            0 != (a & 12) && (this.Zf = this.Ac = 0);
            break;
        case 4:
            0 == (a & 2) && (null != this.a.cb && Dh(this.a.cb, 11) ? (this.Ac = 5,
            this.a.b.ih = 11,
            this.a.cb.Ug(),
            this.a.cb.Ko = 1) : this.Ac = 0);
            break;
        case 5:
            null != this.a.cb && 0 == this.a.cb.jk && (this.Ac = 0)
        }
        if (0 == this.Ac || 4 == this.Ac || 5 == this.Ac) {
            do {
                a = null;
                null != this.a.$d && (a = this.a.$d.Fm);
                if (null == ig(this.a.c, this.a, this.a.b.qc, this.a.b.xc, this.a.b.Kc, this.a.b.Lc, this.a.B, this.a.A, a) && (a = ig(this.a.c, this.a, this.a.b.qc, this.a.b.xc, this.a.b.Kc, this.a.b.Lc, this.a.B, this.a.A + 1, a),
                null != a && 1 == a.size())) {
                    a = a.get(0);
                    if ((null == this.sp || this.sp != a) && this.a.De != a.De) {
                        this.sp = a;
                        this.xy = a.B;
                        this.yy = a.A;
                        break
                    }
                    b = a.B - this.xy;
                    d = a.A - this.yy;
                    this.xy = a.B;
                    this.yy = a.A;
                    this.a.B += b;
                    this.a.A += d;
                    mg(this.a.c, this.a);
                    this.a.b.la = !0;
                    break
                }
                this.sp = null
            } while (0)
        } else
            this.sp = null
    },
    fB: function() {
        this.Zf = this.qg = this.a.b.Ca = 0
    },
    zj: function() {
        this.stop()
    },
    stop: function() {
        if (this.lj != this.a.c.jh)
            this.fB();
        else {
            this.a.L.sa = !0;
            var a = this.a.B - this.a.c.Ma, b = this.a.A - this.a.c.Ra, c;
            switch (this.a.c.G.zx & 4294901760) {
            case -786432:
                a = this.a.B - this.a.Ya;
                b = this.a.A - this.a.Za;
                c = eg(this.a.c, a, b, a + this.a.aa, b + this.a.$);
                a = this.a.B;
                b = this.a.A;
                0 != (c & 1) && (a = this.a.Ya,
                this.qg = 0,
                this.hn = !0);
                0 != (c & 2) && (a = this.a.c.ee - this.a.aa + this.a.Ya,
                this.qg = 0,
                this.hn = !0);
                0 != (c & 4) && (b = this.a.Za,
                this.Zf = 0,
                this.hn = !1);
                0 != (c & 8) && (b = this.a.c.fe - this.a.$ + this.a.Za,
                this.Zf = 0,
                this.hn = !1);
                this.a.B = a;
                this.a.A = b;
                this.Ac = 2 == this.Ac ? 3 : 0;
                this.rp = 0;
                break;
            case -851968:
            case -917504:
                if (this.hn = !1,
                c = new $a,
                3 == this.Ac)
                    Jl(this, a, b, this.a.b.Om - this.a.c.Ma, this.a.b.Pm - this.a.c.Ra, this.Ql, c),
                    this.a.B = c.x + this.a.c.Ma,
                    this.a.A = c.y + this.a.c.Ra,
                    this.Ac = 0,
                    this.a.b.la = !0,
                    Kl(this, this.a.B, this.a.A + 1, 0, !0) ? this.qg = this.a.b.Ca = 0 : (this.rp = 0,
                    this.a.b.Ca = Math.abs(this.qg / 256),
                    this.Zf = 0);
                else {
                    if (0 == this.Ac) {
                        if (Jl(this, a, b, a, b - this.Ql, 0, c)) {
                            this.a.B = c.x + this.a.c.Ma;
                            this.a.A = c.y + this.a.c.Ra;
                            this.a.b.la = !0;
                            break
                        }
                        if (Jl(this, a, b, this.a.b.Om - this.a.c.Ma, this.a.b.Pm - this.a.c.Ra, 0, c)) {
                            this.a.B = c.x + this.a.c.Ma;
                            this.a.A = c.y + this.a.c.Ra;
                            this.a.b.la = !0;
                            this.fB();
                            break
                        }
                    }
                    if (2 == this.Ac) {
                        if (Jl(this, a, b, a, b - this.Ql, 0, c)) {
                            this.a.B = c.x + this.a.c.Ma;
                            this.a.A = c.y + this.a.c.Ra;
                            this.a.b.la = !0;
                            break
                        }
                        this.rp = 1;
                        this.qg = 0
                    }
                    1 == this.Ac && Jl(this, a, b, this.a.b.Om - this.a.c.Ma, this.a.b.Pm - this.a.c.Ra, 0, c) ? (this.a.B = c.x + this.a.c.Ma,
                    this.a.A = c.y + this.a.c.Ra,
                    this.a.b.la = !0,
                    this.fB()) : (this.a.b.qc = this.a.b.ix,
                    this.a.b.xc = this.a.b.hx,
                    Kl(this, this.a.B, this.a.A, 0, !0) || (this.a.B = this.a.b.Om,
                    this.a.A = this.a.b.Pm,
                    this.a.b.la = !0))
                }
            }
        }
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ti: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.rc && (a = this.a.b.rc);
        this.a.b.Ca = a;
        this.qg = this.a.b.Ca * ak[this.a.c.Ed(this.a)];
        this.Zf = this.a.b.Ca * Zj[this.a.c.Ed(this.a)];
        this.a.L.sa = !0
    },
    tk: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.rc = a;
        a <<= 8;
        this.qg > a && (this.qg = a);
        this.a.L.sa = !0
    },
    Gx: function(a) {
        this.wy = a
    },
    ri: function(a) {
        this.a.b.Fb = a;
        this.qg = this.a.b.Ca * ak[a];
        this.Zf = this.a.b.Ca * Zj[a]
    },
    Cz: function() {
        var a;
        0 < this.a.b.qc ? a = Kh(this.a.c.m.xa, this.a.b.qc, this.a.b.xc, this.a.b.Kc, this.a.b.Lc) : (a = new Mh,
        a.width = this.a.aa,
        a.height = this.a.$,
        a.Hb = this.a.Ya,
        a.Eb = this.a.Za);
        this.Di = 0;
        this.Ei = a.height - a.Eb;
        this.Ql = 2 * a.height + a.height >>> 3
    },
    nM: function() {
        this.Cz();
        2147483647 == Gg(this.v, this.a.Dg, this.a.B + this.Di, this.a.A + this.Ei) && (0 == hc(this.a.c, this.a, this.a.b.xc, this.a.b.Kc, this.a.b.Lc, this.a.B, this.a.A, 0, 0) && (2 == this.Ac && 0 > this.Zf || 0 == hc(this.a.c, this.a, this.a.b.xc, this.a.b.Kc, this.a.b.Lc, this.a.B, this.a.A, this.Ql, 1)) || pg(this.a.c.G, this.a, -851968 | this.a.Bb & 65535))
    }
});
var $l = [4294967288, 4294967292, 4294967294, 4294967295];
function am() {
    this.kD = this.zy = this.lD = this.Ay = this.jn = this.tp = this.By = this.$f = this.Dk = 0
}
am.prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        this.$f = 0;
        this.Dk = this.a.b.Ca = 0;
        this.kD = -1;
        this.a.b.zl = b.uq;
        this.du = b.gB;
        this.qk = Ol(b.gB);
        this.eu = b.hB;
        this.mh = Ol(b.hB);
        this.a.b.rc = b.IG;
        this.a.b.yl = 0;
        this.lD = b.GG;
        this.a.L.Zm = 0;
        this.Ym = b.Iw;
        this.zy = 0;
        this.Ay = $l[b.FG];
        this.By = b.HG;
        this.tp = 0;
        this.jn = this.a.c.Ed(this.a);
        this.a.Ej = 0;
        this.a.Fj = 0;
        Pl(this, b);
        this.a.b.la = !0
    },
    move: function() {
        var a, b, c;
        this.a.c.Zo = 1;
        if (0 == this.Dk) {
            this.a.L.Xm = !1;
            a = this.a.c.df[this.a.b.zl - 1] & 15;
            b = 0;
            0 != (a & 8) && (b = -1);
            0 != (a & 4) && (b = 1);
            if (0 != b) {
                c = this.By;
                0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de);
                for (this.tp += c; 100 < this.tp; )
                    this.tp -= 100,
                    this.jn += b,
                    this.jn &= 31,
                    this.a.b.Fb = this.jn & this.Ay;
                this.a.b.la = !0
            }
            c = 0;
            0 != this.a.L.Zm ? (0 != (a & 1) && (c = 1),
            0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2),
            0 != (a & 2) && (c = 1));
            for (b = this.$f; ; ) {
                if (0 != (c & 1)) {
                    if (0 == this.$f) {
                        if (0 == this.lD)
                            break;
                        if (0 != (this.zy & 3))
                            break;
                        this.a.L.Zm ^= 1;
                        c = this.qk;
                        0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de);
                        b += c;
                        c = b >> 8;
                        c > this.a.b.rc && (this.$f = b = this.a.b.rc << 8);
                        this.$f = b;
                        break
                    }
                    c = this.mh;
                    0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de);
                    b -= c;
                    0 > b && (b = 0);
                    this.$f = b
                } else
                    0 != (c & 2) && (c = this.qk,
                    0 != (this.a.c.J.ud & 32768) && (c *= this.a.c.de),
                    b += c,
                    c = b >> 8,
                    c > this.a.b.rc && (this.$f = b = this.a.b.rc << 8),
                    this.$f = b);
                break
            }
            this.zy = a;
            this.a.b.Ca = this.$f >> 8;
            this.a.b.ih = 1;
            null != this.a.cb && this.a.cb.Ug();
            a = this.a.c.Ed(this.a);
            0 != this.a.L.Zm && (a = a + 16 & 31);
            if (0 == Ql(this, this.a.b.Ca, a))
                return
        }
        do {
            if (0 == this.Dk)
                break;
            if (0 == this.a.c.Zo)
                break;
            b = this.$f;
            b -= this.mh;
            if (0 >= b) {
                this.Dk = this.$f = 0;
                break
            }
            this.$f = b;
            b >>= 8;
            a = this.a.c.Ed(this.a);
            0 != this.Dk && (a += 16,
            a &= 31);
            if (0 == Ql(this, b, a))
                break
        } while (1)
    },
    reverse: function() {},
    stop: function() {
        this.$f = this.Dk = 0;
        this.a.L.Zm = 0;
        this.lj == this.a.c.jh && (Nl(this, 0 != (this.Ym & 1)),
        this.a.L.sa = !0)
    },
    start: function() {
        this.ld = 0;
        this.a.L.sa = !0
    },
    zj: function() {
        this.lj == this.a.c.jh && Nl(this, 0 != (this.Ym & 1));
        this.a.c.se != this.kD && (this.Dk = this.a.L.Zm,
        this.a.L.Zm = 0,
        this.Dk++,
        16 <= this.Dk ? this.stop() : (this.a.L.sa = !0,
        this.a.L.Xm = !0))
    },
    ti: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        a > this.a.b.rc && (a = this.a.b.rc);
        this.$f = a << 8;
        this.a.L.sa = !0
    },
    tk: function(a) {
        0 > a && (a = 0);
        250 < a && (a = 250);
        this.a.b.rc = a;
        a <<= 8;
        this.$f > a && (this.$f = a);
        this.a.L.sa = !0
    },
    Ix: function(a) {
        this.By = a
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0,
        this.a.b.Rb = !0)
    },
    ri: function(a) {
        this.jn = a;
        this.a.b.Fb = a & this.Ay
    }
});
function bm() {}
bm.prototype = p(new Il, {
    ya: function(a) {
        this.a = a;
        this.a.b.Ca = 0;
        this.a.b.Rb = !0;
        this.a.b.la = !0
    },
    move: function() {
        null != this.a.cb && this.a.cb.Ug();
        this.a.b.Rb && (this.a.b.Rb = !1,
        mg(this.a.c, this.a))
    },
    ef: function(a) {
        this.a.B != a && (this.a.B = a,
        this.a.L.sa = !0,
        this.a.b.la = !0);
        this.a.b.Rb = !0
    },
    ff: function(a) {
        this.a.A != a && (this.a.A = a,
        this.a.L.sa = !0,
        this.a.b.la = !0);
        this.a.b.Rb = !0
    },
    ri: function() {},
    reverse: function() {},
    stop: function() {},
    start: function() {},
    zj: function() {},
    ti: function() {},
    tk: function() {}
});
(function(a) {
    this.Ze = a
}
).prototype = p(new Il, {
    ya: function(a, b) {
        this.a = a;
        Wa(a.c.m.file, b.data);
        this.a.b.Rb = !0;
        this.a.b.la = !0
    },
    ed: function() {
        this.Ze.ed()
    },
    move: function() {
        this.Ze.move() && (this.a.b.la = !0)
    },
    stop: function() {
        this.Ze.stop(this.lj == this.a.c.jh)
    },
    start: function() {
        this.Ze.start()
    },
    zj: function() {
        this.Ze.zj(this.lj == this.a.c.jh)
    },
    ti: function(a) {
        this.Ze.ti(a)
    },
    tk: function(a) {
        this.Ze.tk(a)
    },
    reverse: function() {
        this.Ze.reverse()
    },
    ef: function(a) {
        this.Ze.ef(a);
        this.a.b.la = !0;
        this.a.b.Rb = !0
    },
    ff: function(a) {
        this.Ze.ff(a);
        this.a.b.la = !0;
        this.a.b.Rb = !0
    },
    ri: function(a) {
        this.Ze.ri(a);
        this.a.b.la = !0;
        this.a.b.Rb = !0
    },
    lE: function() {
        return 0
    }
});
var og = 1
  , rg = 2;
function bh() {
    this.gu = 0;
    this.Va = null;
    this.tC = 0;
    this.sa = !1;
    this.Zm = 0;
    this.Xm = !1;
    this.fu = 0
}
bh.prototype = {
    ya: function(a, b, c, d, e) {
        null != this.Va && this.Va.ed();
        null != d && (b.b.Fb = d.rE);
        this.tC = b.$d.BB;
        b.b.pe = -1;
        if (null != c.fi && a < c.fi.Bt) {
            c = c.fi.sf[a];
            this.gu = a;
            -1 == e && (e = c.jB);
            b.b.pe = e;
            switch (e) {
            case 0:
                this.Va = new bm;
                break;
            case 1:
                this.Va = new Xl;
                break;
            case 2:
                this.Va = new am;
                break;
            case 3:
                this.Va = new Wl;
                break;
            case 4:
                this.Va = new Vl;
                break;
            case 5:
                this.Va = new Yl;
                break;
            case 9:
                this.Va = new Zl;
                break;
            case 14:
                this.Va = null,
                null == this.Va && (this.Va = new bm)
            }
            b.b.Fb = this.Rz(b, c.QG, b.b.Fb);
            this.Va.ya(b, c)
        }
        -1 == b.b.pe && (b.b.pe = 0,
        this.Va = new bm,
        this.Va.ya(b, null),
        b.b.Fb = 0)
    },
    ed: function() {
        this.Va.ed()
    },
    move: function() {
        this.Va.move()
    },
    Rz: function(a, b, c) {
        if (0 > c || 32 <= c) {
            var d = 0, e = b, f;
            for (c = 0; 32 > c; c++)
                f = e,
                e >>= 1,
                0 != (f & 1) && d++;
            if (0 == d)
                c = 0;
            else
                for (d = a.c.random(d),
                e = b,
                c = 0; !(f = e,
                e >>= 1,
                0 != (f & 1) && (d--,
                0 > d)); c++)
                    ;
        }
        return c
    }
};
var cm = 5666565;
function ol() {
    this.$e = this.rotation = this.If = this.identifier = this.Yl = this.xh = this.cf = this.Ve = this.er = this.speed = this.KD = this.zp = this.di = this.fa = this.type = 0;
    this.mj = this.Ih = this.images = null;
    this.ts = this.ss = 0;
    this.angle = cm;
    this.xg = this.dd = null;
    this.Wa = !1;
    this.er = 0;
    this.FC = !1;
    this.NF = this.Qz = this.scale = this.Sy = this.MF = 0;
    this.Wa = !1;
    this.fm = null
}
ol.prototype = p(new sl, {
    Nl: function() {
        var a = 0, b;
        for (b = 0; b < this.o.Sb; a++,
        b++) {
            for (; null == this.o.U[a]; )
                a++;
            var c = this.o.U[a];
            if (32 <= c.Bb && 1110590791 == c.ma.Le && c.ext.identifier == this.identifier)
                return c.ext
        }
        return null
    },
    Io: function() {
        return null == this.qd ? (this.qd = this.Nl(),
        null != this.qd || cf || (alert("Please drop a Physics - Engine object in the frame."),
        cf = !0),
        null != this.qd) : this.qd.qu
    },
    Wn: function() {
        return 8
    },
    rs: function(a) {
        this.O.aa = D(a);
        this.O.$ = D(a);
        this.type = S(a);
        this.fa = D(a);
        this.ss = D(a);
        this.di = D(a);
        this.zp = D(a);
        this.KD = D(a);
        this.speed = D(a);
        this.er = D(a);
        this.Ve = D(a) / 100;
        this.cf = D(a) / 100;
        this.xh = D(a) / 100;
        this.Yl = D(a);
        this.identifier = D(a);
        this.If = D(a) / 100;
        this.rotation = D(a) / 100 * 20;
        this.Sy = D(a) / 100 * 5;
        this.LD = D(a) / 100 * .1;
        this.ku = D(a) / 400;
        this.Qz = D(a);
        this.$e = S(a);
        var b;
        this.images = [];
        for (b = 0; b < this.$e; b++)
            this.images.push(S(a));
        this.O.lw(this.images);
        this.Ih = new V;
        this.mj = new V;
        return 0
    },
    Mv: function() {
        var a = this.Nl(), b;
        for (b = 0; b < this.Ih.size(); b++)
            this.Ih.get(b).Pz(a);
        return 0
    },
    EI: function(a) {
        for (var b = 0, c = a, d, e = 0; 32 > e; e++)
            d = c,
            c >>= 1,
            d & 1 && b++;
        if (0 == b)
            a = 0;
        else
            for (b = this.o.random(b),
            c = a,
            a = 0; !(d = c,
            c >>= 1,
            d & 1 && (b--,
            0 > b)); a++)
                ;
        return a
    },
    Ns: function() {
        if (!this.Io() || this.qd.dw())
            return 0;
        var a, b;
        this.fa & 1 && (this.ts += this.ss,
        100 <= this.ts && (this.ts -= 100,
        this.AE(this.di)));
        for (a = 0; a < this.mj.size(); a++)
            b = this.mj.get(a),
            this.RK(b),
            Za(this.mj, a),
            a--;
        for (a = 0; a < this.Ih.size(); a++) {
            b = this.Ih.get(a);
            var c = {};
            this.qd.xH(b.R, c);
            c.x < this.o.So || c.x > this.o.Ro || c.y < this.o.Uo || c.y > this.o.To ? (b.xj = !0,
            this.mj.add(b)) : (b.setPosition(c.x, c.y, c.angle),
            b.Ug())
        }
        return 0
    },
    AE: function(a) {
        null == this.qd && (this.qd = this.Nl());
        if (null != this.qd) {
            var b, c;
            for (b = 0; b < a; b++) {
                var d, e;
                0 == this.type ? (d = this.O.B,
                e = this.O.A) : (d = this.O.B + this.o.random(this.O.aa),
                e = this.O.A + this.o.random(this.O.$));
                var f, g;
                f = this.angle == cm ? 11.25 * this.EI(this.KD) : this.angle;
                0 < this.Yl && (g = this.o.random(2 * this.Yl),
                f += g - this.Yl);
                c = new dm(this,d,e);
                vh(c, this.O, 2);
                c.CN(this.images, this.$e, this.zp, this.fa);
                c.Jx(this.ku);
                g = X(this.o.m.xa, this.images[0]);
                c.R = this.qd.ik(Z.i.Nc.Be, d, e, f, this.If, c, 0, 0);
                c.cA = this.qd.VB(c.R, c, d, e, Math.round((g.width + g.height + 1) / 4), this.xh, this.Ve, this.cf);
                d = c.R.ba;
                g = this.o.random(2 * this.er);
                e = this.speed + g - this.er;
                e = Math.max(e, 1);
                e = e / 100 * 20;
                this.qd.LM(c.R, Math.max(1, e * d), f);
                this.qd.KM(c.R, this.rotation);
                this.Ih.add(c)
            }
        }
    },
    RK: function(a) {
        a.Pz(this.qd);
        Ya(this.Ih, a)
    },
    Hn: function(a, b) {
        switch (a) {
        case 0:
            var c = b.ka(this.o, 0);
            return qa(c, this.NF);
        case 1:
            c = b.Cc(this.o, 0);
            if (c.Cm == this.o.G.Id)
                return fc(this.o.G, this.fm),
                !0;
            c = c.Tf;
            if (0 != (c & 32768))
                for (c = this.o.G.oe[c & 32767],
                numOi = 0; numOi < c.bc.length; ) {
                    if (c.bc[numOi] == this.o.G.Id)
                        return fc(this.o.G, this.fm),
                        !0;
                    numOi += 2
                }
            break;
        case 7:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return !0
        }
        return !1
    },
    action: function(a, b) {
        switch (a) {
        case 0:
            var c = b.ka(this.o, 0);
            this.AE(c);
            break;
        case 1:
            this.Wa = !0;
            break;
        case 2:
            this.NF = b.ka(this.o, 0);
            this.FC = !1;
            for (c = 0; c < this.Ih.size() && !this.FC; c++)
                this.dd = this.Ih.get(c),
                this.MF = c,
                this.O.Dd(0, 0);
            break;
        case 12:
            this.FC = !0;
            break;
        case 3:
            this.speed = Math.min(b.ka(this.o, 0), 250);
            this.speed = Math.max(this.speed, 0);
            break;
        case 9:
            this.er = Math.max(b.ka(this.o, 0), 0);
            break;
        case 6:
            this.angle = b.ka(this.o, 0);
            break;
        case 5:
            this.Yl = Math.min(b.ka(this.o, 0), 360);
            this.Yl = Math.max(this.Yl, 0);
            break;
        case 4:
            this.rotation = Math.min(b.ka(this.o, 0), 250);
            this.rotation = Math.max(this.rotation, -250);
            break;
        case 7:
            this.dd && !this.dd.xj && 0 <= this.Ih.indexOf(this.dd) && this.mj.add(this.dd);
            break;
        case 8:
            this.dd && !this.dd.xj && 0 <= this.Ih.indexOf(this.dd) && this.mj.add(this.dd);
            this.xg && !this.xg.xj && 0 <= this.Ih.indexOf(this.xg) && this.mj.add(this.xg);
            break;
        case 10:
            this.ss = Math.min(b.ka(this.o, 0), 100);
            this.ss = Math.max(this.ss, 0);
            break;
        case 11:
            b.ka(this.o, 0) ? this.fa |= 1 : this.fa &= -2;
            break;
        case 13:
            this.Sy = b.ka(this.o, 0) / 100 * 5;
            break;
        case 14:
            this.LD = b.ka(this.o, 0) / 100 * .1;
            break;
        case 15:
            this.zp = b.ka(this.o, 0);
            break;
        case 16:
            this.fa &= -3;
            b.ka(this.o, 0) && (this.fa |= 2);
            break;
        case 17:
            this.ku = b.ka(this.o, 0) / 400;
            break;
        case 18:
            this.Ve = b.ka(this.o, 0) / 100;
            break;
        case 19:
            this.cf = b.ka(this.o, 0) / 100;
            break;
        case 20:
            this.xh = b.ka(this.o, 0) / 100;
            break;
        case 21:
            this.If = b.ka(this.o, 0) / 100;
            break;
        case 22:
            this.Qz = b.ka(this.o, 0);
            break;
        case 23:
            b.ka(this.o, 0) ? this.fa |= 4 : this.fa &= -5
        }
    },
    Sn: function(a) {
        switch (a) {
        case 0:
            return this.Ih.size();
        case 1:
            if (this.dd)
                return this.dd.x;
            break;
        case 2:
            if (this.dd)
                return this.dd.y;
            break;
        case 3:
            if (this.dd)
                return this.dd.angle;
            break;
        case 4:
            return this.speed;
        case 5:
            return this.er;
        case 6:
            return this.angle;
        case 7:
            return this.Yl;
        case 8:
            return this.rotation;
        case 9:
            return this.MF;
        case 10:
            return 100 * this.Sy / 5;
        case 11:
            return 100 * this.LD / .1
        }
        return 0
    }
});
function dm(a, b, c) {
    this.ea = pl.iO;
    this.parent = a;
    this.jl = a.O.ca.$o;
    this.Ta = a.o.J.Lb[this.jl];
    pe(this.Ta.Db, this);
    this.sL = b;
    this.tL = c;
    this.$e = this.angle = this.y = this.x = 0;
    this.images = null;
    this.Ap = this.zp = this.Eg = 0;
    this.xj = !1;
    this.EB = this.GB = this.at = this.$s = this.Zs = 0;
    this.cA = null;
    this.scale = this.ku = 0;
    this.Hd = new sa
}
dm.prototype = p(new uh, {
    Pz: function(a) {
        this.Ta.Db.removeChild(this);
        null != a && a.Vt(this.R)
    },
    CN: function(a, b, c, d) {
        this.images = a;
        this.$e = b;
        this.zp = c;
        this.Ap = 0;
        this.fa = d;
        this.Wa = !1;
        a = X(this.parent.o.m.xa, this.images[0]);
        this.GB = a.width * this.scale;
        this.EB = a.height * this.scale
    },
    Jx: function(a) {
        this.ku = a;
        this.scale = 1
    },
    Ug: function() {
        if (!this.Wa)
            for (this.Ap += this.zp * this.parent.o.de; 100 <= this.Ap; )
                this.Ap -= 100,
                this.Eg++,
                this.Eg >= this.$e && (this.fa & 2 ? this.Eg = 0 : (this.Eg--,
                this.Wa = !0,
                this.fa & 4 && !this.xj && (this.xj = !0,
                this.parent.mj.add(this))));
        var a = this.scale;
        this.scale += this.ku;
        var b = X(this.parent.o.m.xa, this.images[this.Eg]);
        if (b) {
            var c = b.width * this.scale
              , b = b.height * this.scale;
            if (1 > c || 1 > b)
                this.xj || (this.parent.mj.add(this),
                this.xj = !0),
                this.scale = a;
            else if (c != this.GB || b != this.EB)
                this.GB = c,
                this.EB = b,
                this.R.ZC(this.cA),
                this.cA = this.parent.qd.VB(this.R, this, this.x, this.y, Math.round((c + b + 1) / 4), this.parent.xh, this.parent.Ve, this.parent.cf);
            this.parent.qd.JM(this.R, this.$s, this.at);
            this.Zs ? this.Zs = !1 : this.at = this.$s = 0
        }
    },
    TC: function(a, b) {
        this.$s = a;
        this.at = b;
        this.Zs = !0
    },
    RJ: function(a, b) {
        var c = this.R.qh()
          , d = this.R.K.position;
        d.x += a / 2.56;
        d.y += b / 2.56;
        this.parent.qd.wH(this.R, d, c)
    },
    setPosition: function(a, b, c) {
        this.x = a;
        this.y = b;
        this.angle = c;
        a = this.x - this.sL;
        b = this.y - this.tL;
        Math.sqrt(a * a + b * b) > this.parent.Qz && !this.xj && (this.xj = !0,
        this.parent.mj.add(this))
    },
    Oc: function(a, b, c) {
        if (this.parent.O.ca.Ga & Jb) {
            var d = X(this.parent.o.m.xa, this.images[this.Eg]);
            d && (d.Hb = d.width / 2,
            d.Eb = d.height / 2,
            a.tf(d, b + this.x - this.parent.o.Ma + this.Ta.x, c + this.y - this.parent.o.Ra + this.Ta.y, this.angle, this.scale, this.scale, 0, 0))
        }
    }
});
function pl() {
    this.fa = 0;
    this.Wb = null;
    this.cf = this.Ve = this.ji = this.wi = this.Ak = this.zk = this.jv = this.angle = this.va = this.If = 0;
    this.qs = null;
    this.qu = !1;
    this.Gs = new V;
    this.vu = new V;
    this.qt = new V;
    this.uC = new V;
    this.iE = this.kE = this.hE = this.jE = 0;
    this.jd = new V;
    this.Aq = new V;
    this.Ri = new V;
    this.VG = this.UG = 0;
    this.ms = new V;
    this.Yg = this.Dn = !1
}
pl.prototype = p(new sl, {
    KI: function() {
        var a = this.O.c, b = 0, c;
        for (c = 0; c < a.Sb; b++,
        c++) {
            for (; null == a.U[b]; )
                b++;
            var d = a.U[b];
            32 <= d.Bb && (1110591041 == d.ma.Le && d.ext.identifier == this.identifier && this.Gs.add(d.ext),
            1110874198 == d.ma.Le && d.ext.identifier == this.identifier && this.qt.add(d.ext),
            1110594637 == d.ma.Le && d.ext.identifier == this.identifier && this.vu.add(d.ext),
            1110634490 == d.ma.Le && d.ext.identifier == this.identifier && this.uC.add(d.ext))
        }
        return null
    },
    OM: function(a) {
        a.x = a.x * this.va - this.zk;
        a.y = this.Ak - a.y * this.va
    },
    fQ: function(a) {
        a.x = (this.zk + a.x) / this.va;
        a.y = (this.Ak - a.y) / this.va
    },
    hQ: function(a, b, c) {
        b = b * Z.H.oa.qb / 180;
        c = c * Z.H.oa.qb / 180;
        b > c ? a.en(!1) : (a.en(!0),
        a.Gr(b, c))
    },
    iQ: function(a, b, c) {
        b = b / 100 * 20;
        c = c / 100 * 10;
        var d = !0;
        0 == b && 0 == c && (d = !1);
        a.tr(d);
        a.CD(b);
        a.Hr(c)
    },
    kQ: function(a, b, c, d) {
        a.Ib(b, c, d);
        return this.Wb.sc(a)
    },
    gQ: function(a, b, c, d, e, f, g) {
        if (0 == b)
            return null;
        var h = 0, k, m = null, l = 1E7;
        for (k = 0; k < this.o.Sb; h++,
        k++) {
            for (; null == this.o.U[h]; )
                h++;
            var t = this.o.U[h];
            if (qa(t.$d.Co, e) && (t = this.fc(t),
            null != t)) {
                var w = t.Oa.B - a.Oa.B
                  , r = t.Oa.A - a.Oa.A
                  , w = Math.sqrt(w * w + r * r);
                w <= l && (l = w,
                m = t)
            }
        }
        if (null != m && (d = this.sc(d),
        null != d))
            switch (b) {
            case 1:
                b = new Z.i.N.Nk;
                b.lf = !0;
                f > g ? b.Uk = !1 : (b.Uk = !0,
                b.OF = f,
                b.gI = g);
                var u;
                switch (c) {
                case 0:
                    u = a.R.K.position;
                    break;
                case 1:
                    u = this.Mh(a)
                }
                b.Ib(a.R, m.R, u);
                em(d, 2, this.Wb.sc(b));
                return d.Fd;
            case 2:
                b = new Z.i.N.vj;
                b.lf = !0;
                b.Vn = f;
                b.Jn = g;
                var n, z;
                switch (c) {
                case 0:
                    n = a.R.K.position;
                    z = m.R.K.position;
                    break;
                case 1:
                    n = this.Mh(a),
                    z = this.Mh(m)
                }
                b.Ib(a.R, m.R, n, z);
                em(d, 1, this.Wb.sc(b));
                return d.Fd;
            case 3:
                b = new Z.i.N.Mk;
                b.lf = !0;
                f > g ? b.Uk = !1 : (b.Uk = !0,
                b.pw = f / this.va,
                b.Tx = g / this.va);
                switch (c) {
                case 0:
                    n = a.R.K.position;
                    z = m.R.K.position;
                    break;
                case 1:
                    n = this.Mh(a),
                    z = this.Mh(m)
                }
                c = new Z.H.Math.ab(z.x - n.x,z.y - n.y);
                b.Ib(a.R, m.R, n, c);
                em(d, 3, this.Wb.sc(b));
                return d.Fd
            }
        return null
    },
    ik: function(a, b, c, d, e, f, g, h) {
        if (null != f && a != Z.i.Nc.Kd && 9 != f.ea && 8 != f.ea) {
            var k;
            for (k = 0; k < this.Gs.size(); k++)
                this.Gs.get(k).UB(f);
            for (k = 0; k < this.qt.size(); k++)
                this.qt.get(k).UB(f);
            for (k = 0; k < this.vu.size(); k++)
                this.vu.get(k).UB(f)
        }
        k = new Z.i.wn;
        k.type = a;
        k.position.Set((this.zk + b) / this.va, (this.Ak - c) / this.va);
        k.angle = d * Z.H.oa.qb / 180;
        k.AF = e;
        k.Pg = f;
        g & 1 && (k.kF = !0);
        g & 2 && (k.gE = !0);
        g & 4 && (k.JF = h);
        return this.Wb.pr(k)
    },
    Vt: function(a) {
        if (null != a)
            if (this.Dn || this.Wb.Fr(this.qs),
            this.qs.zz)
                this.ms.add(a);
            else {
                var b = a.Ai();
                if (null != b) {
                    if (9 != b.ea && 8 != b.ea) {
                        var c;
                        for (c = 0; c < this.Gs.size(); c++)
                            this.Gs.get(c).ex(b);
                        for (c = 0; c < this.qt.size(); c++)
                            this.qt.get(c).ex(b);
                        for (c = 0; c < this.vu.size(); c++)
                            this.vu.get(c).ex(b);
                        for (c = 0; c < this.uC.size(); c++)
                            this.uC.get(c).ex(b)
                    }
                    a.Gy(null)
                }
                this.QK(a);
                this.Wb.YC(a);
                this.Dn || this.Wb.Fr(null)
            }
    },
    UP: function(a, b) {
        a.ZC(b)
    },
    Mm: function(a, b, c, d, e, f, g, h, k) {
        --e;
        --f;
        null != b && (b.Hd.left = -e / 2,
        b.Hd.right = e / 2,
        b.Hd.top = -f / 2,
        b.Hd.bottom = f / 2);
        b = new Z.F.fb.uh;
        c = new Z.H.Math.ab((this.zk + c) / this.va,(this.Ak - d) / this.va);
        b.vD(e / 2 / this.va, f / 2 / this.va, a.Xf(c));
        e = new Z.i.wj;
        e.shape = b;
        e.xh = g;
        e.Ve = h;
        e.cf = k;
        e.Pg = this;
        return a.qr(e)
    },
    VB: function(a, b, c, d, e, f, g, h) {
        null != b && (b.Hd.left = -e,
        b.Hd.right = e,
        b.Hd.top = -e,
        b.Hd.bottom = e);
        b = new Z.F.fb.$l;
        b.tb = e / this.va;
        c = new Z.H.Math.ab((this.zk + c) / this.va,(this.Ak - d) / this.va);
        c = a.Xf(c);
        b.Ie.Set(c.x, c.y);
        c = new Z.i.wj;
        c.shape = b;
        c.xh = f;
        c.Ve = g;
        c.cf = h;
        c.Pg = this;
        return a.qr(c)
    },
    dQ: function(a, b, c, d, e, f) {
        var g = new Z.H.Math.ab(a.K.position.x,a.K.position.y);
        g.x += e / this.va;
        g.y += f / this.va;
        e = new Z.H.Math.ab(b.K.position.x,b.K.position.y);
        f = new Z.i.N.vj;
        f.lf = !1;
        f.Vn = d;
        f.Jn = c;
        f.Ib(a, b, g, e);
        this.Wb.sc(f)
    },
    QP: function(a, b, c) {
        new Z.H.Math.ab(a.K.position.x,a.K.position.y);
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180),b * Math.sin(c * Z.H.oa.qb / 180));
        a.Ll(b)
    },
    bQ: function(a) {
        a.LJ()
    },
    KM: function(a, b) {
        a.$x(b)
    },
    SP: function(a, b) {
        a.$x(b)
    },
    cQ: function(a) {
        a.MJ()
    },
    YP: function(a, b) {
        a.NJ(b)
    },
    JM: function(a, b, c) {
        var d = a.s;
        d.x += b;
        d.y += c;
        a.Sl(d)
    },
    RP: function(a, b, c) {
        var d = a.s;
        360 < c && (c -= 360);
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180),b * Math.sin(c * Z.H.oa.qb / 180));
        d.x += b.x / a.ba;
        d.y += b.y / a.ba;
        a.Sl(d)
    },
    LM: function(a, b, c) {
        var d = new Z.H.Math.ab(a.K.position.x,a.K.position.y);
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180),b * Math.sin(c * Z.H.oa.qb / 180));
        a.sI(b, d)
    },
    VP: function(a) {
        return 180 * a.qh() / Z.H.oa.qb
    },
    aQ: function(a, b, c) {
        var d = a.qh()
          , e = new Z.H.Math.ab(a.K.position.x,a.K.position.y);
        1448633650 != b && (e.x = (this.zk + b) / this.va);
        1448633650 != c && (e.y = (this.Ak - c) / this.va);
        a.dv(e, d)
    },
    XP: function(a, b) {
        var c = new Z.H.Math.ab(a.K.position.x,a.K.position.y);
        a.dv(c, b * Z.H.oa.qb / 180)
    },
    ZP: function(a, b, c) {
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180),b * Math.sin(c * Z.H.oa.qb / 180));
        a.Sl(b)
    },
    PP: function(a, b, c) {
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180),b * Math.sin(c * Z.H.oa.qb / 180));
        c = a.s;
        c.x += b.x;
        c.y += b.y;
        a.Sl(c)
    },
    $P: function(a, b, c, d, e) {
        b = new Z.H.Math.ab(b * Math.cos(c * Z.H.oa.qb / 180) + d,b * Math.sin(c * Z.H.oa.qb / 180) + e);
        a.Sl(b)
    },
    Wh: function(a, b, c) {
        return 0 != (a.ra[c * a.lineWidth + Math.floor(b / 16)] & 32768 >>> (b & 15))
    },
    nn: function(a, b, c, d, e) {
        var f = e.angle;
        e.angle = 57.2957795 * Math.atan2(b - d, a - c);
        return f == e.angle ? !1 : !0
    },
    Ut: function(a, b, c, d, e, f, g, h, k, m) {
        new Z.F.fb.uh;
        var l = gg(X(this.o.m.xa, e), 0, 0, 1, 1), t = l.width, w = l.height, r, u, n, z;
        e = [];
        var E = [], A, v, H, G = 0;
        null != b && (b.Hd.left = -t / 2 * k,
        b.Hd.right = t / 2 * k,
        b.Hd.top = -w / 2 * m,
        b.Hd.bottom = w / 2 * m);
        var O = !1;
        0 > f && (O = !0,
        f = 0);
        u = w - 1;
        for (A = -1; 0 <= u; u--)
            for (r = t - 1; 0 <= r; r--)
                if (this.Wh(l, r, u)) {
                    r > A && (A = r,
                    v = u);
                    break
                }
        if (0 > A)
            return this.Mm(a, b, c, d, l.width, l.height, f, g, h);
        n = e[G] = A;
        z = E[G] = v;
        G++;
        u = 0;
        for (A = -1; u < w; u++)
            for (r = t - 1; 0 <= r; r--)
                if (this.Wh(l, r, u)) {
                    r > A && (A = r,
                    v = u);
                    break
                }
        H = {
            angle: 1E3
        };
        if (this.nn(A, v, n, z, H)) {
            for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
                ;
            r == G && (n = e[G] = A,
            z = E[G++] = v)
        }
        r = t - 1;
        for (v = 1E4; 0 <= r; r--)
            for (u = 0; u < w; u++)
                if (this.Wh(l, r, u)) {
                    u < v && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        n = e[G] = A,
        z = E[G++] = v);
        r = 0;
        for (v = 1E4; r < t; r++)
            for (u = 0; u < w; u++)
                if (this.Wh(l, r, u)) {
                    u < v && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        n = e[G] = A,
        z = E[G++] = v);
        u = 0;
        for (A = 1E4; u < w; u++)
            for (r = 0; r < t; r++)
                if (this.Wh(l, r, u)) {
                    r < A && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        n = e[G] = A,
        z = E[G++] = v);
        u = w - 1;
        for (A = 1E4; 0 <= u; u--)
            for (r = 0; r < t; r++)
                if (this.Wh(l, r, u)) {
                    r < A && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        n = e[G] = A,
        z = E[G++] = v);
        r = 0;
        for (v = -1; r < t; r++)
            for (u = w - 1; 0 <= u; u--)
                if (this.Wh(l, r, u)) {
                    u > v && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        n = e[G] = A,
        z = E[G++] = v);
        r = t - 1;
        for (v = -1; 0 <= r; r--)
            for (u = w - 1; 0 <= u; u--)
                if (this.Wh(l, r, u)) {
                    u > v && (A = r,
                    v = u);
                    break
                }
        for (r = 0; r < G && (e[r] != A || E[r] != v); r++)
            ;
        r == G && (this.nn(A, v, n, z, H) || G--,
        e[G] = A,
        E[G++] = v);
        if (1 >= G)
            return this.Mm(a, b, c, d, l.width, l.height, f, g, h);
        2 == G && (G = [],
        b = [],
        e[0] != e[1] ? (G[0] = e[0],
        b[0] = E[0] + 1,
        G[1] = e[0],
        b[1] = E[0],
        G[2] = e[1],
        b[2] = E[1],
        G[3] = e[1],
        b[3] = E[1] + 1) : (G[0] = e[0],
        b[0] = E[0],
        G[1] = e[1],
        b[1] = E[1],
        G[2] = e[1] - 1,
        b[2] = E[1],
        G[3] = e[0] - 1,
        b[3] = E[0]),
        e = G,
        E = b,
        G = 4);
        c = b = 0;
        if (O)
            b = t / 2,
            c = w / 2;
        else {
            for (w = 0; w < G; w++)
                b += e[w],
                c += E[w];
            b /= G;
            c /= G
        }
        t = [];
        for (w = 0; w < G; w++)
            t[w] = new Z.H.Math.ab(0,0),
            t[w].Set((e[w] - b) / this.va * k * 1, (c - E[w]) / this.va * m * 1);
        m = new Z.i.wj;
        k = new Z.F.fb.uh;
        k.av(t, G);
        m.shape = k;
        m.xh = f;
        m.Ve = g;
        m.cf = h;
        m.Pg = this;
        return a.qr(m)
    },
    MM: function(a, b, c) {
        if (0 == (this.fa & 2))
            return null;
        var d = c.Oa
          , e = new Z.i.wn;
        e.type = Z.i.Nc.Be;
        e.position.Set((this.zk + d.B) / this.va, (this.Ak - d.A) / this.va);
        e.angle = a * Z.H.oa.qb / 180;
        e.AF = this.jE;
        e.Pg = c;
        pBody = this.Wb.pr(e);
        this.Ut(pBody, c, d.B, d.A, d.b.qc, this.hE, this.iE, this.kE, d.b.Kc, d.b.Lc);
        a = new Z.H.Math.ab(b * Math.cos(a * Z.H.oa.qb / 180),b * Math.sin(a * Z.H.oa.qb / 180));
        pBody.Sl(a);
        return pBody
    },
    WP: function(a) {
        a.Fy()
    },
    wH: function(a, b, c) {
        a.dv(b, c)
    },
    xH: function(a, b) {
        var c = a.K.position
          , c = new Z.H.Math.ab(c.x,c.y);
        this.OM(c);
        b.x = na(c.x);
        b.y = na(c.y);
        b.angle = na(180 * a.qh() / Z.H.oa.qb)
    },
    NM: function(a, b) {
        var c = gg(X(this.o.m.xa, a), 0, 0, 1, 1), d, e;
        b.Cu = 0;
        b.Du = c.height - 1;
        var f;
        e = 0;
        for (f = !1; e < c.height; e++) {
            for (d = 0; d < c.width; d++)
                if (this.Wh(c, d, e)) {
                    b.Cu = e;
                    f = !0;
                    break
                }
            if (f)
                break
        }
        e = c.height - 1;
        for (f = !1; 0 <= e; e--) {
            for (d = 0; d < c.width; d++)
                if (this.Wh(c, d, e)) {
                    b.Du = e;
                    f = !0;
                    break
                }
            if (f)
                break
        }
        b.jr = 0;
        b.kr = c.width - 1;
        d = 0;
        for (f = !1; d < c.width; d++) {
            for (e = 0; e < c.height; e++)
                if (this.Wh(c, d, e)) {
                    b.jr = d;
                    f = !0;
                    break
                }
            if (f)
                break
        }
        d = c.width - 1;
        for (f = !1; 0 <= d; d--) {
            for (e = c.height - 1; 0 <= e; e--)
                if (this.Wh(c, d, e)) {
                    b.kr = d;
                    f = !0;
                    break
                }
            if (f)
                break
        }
    },
    TP: function(a, b, c, d, e, f, g, h, k, m, l, t) {
        d = {};
        this.NM(c, d);
        d.jr *= m;
        d.kr *= m;
        d.Cu *= l;
        d.Du *= l;
        t = Math.max(t, .1);
        gg(X(this.o.m.xa, c), 0, 0, 1, 1);
        c = [];
        for (m = 0; 6 > m; m++)
            c[m] = new Z.H.Math.ab(0,0);
        m = d.kr - d.jr;
        l = (d.jr + d.kr) / 2;
        e = (d.Cu + d.Du) / 2;
        d = 0;
        c[0].Set(-m / 4 * t / this.va, d / this.va);
        c[1].Set(m / 4 * t / this.va, d / this.va);
        c[2].Set(m / 2 * t / this.va, (0 + e / 8) / this.va);
        d = 0 + 2 * e;
        c[3].Set(m / 2 * t / this.va, d / this.va);
        c[4].Set(-m / 2 * t / this.va, d / this.va);
        c[5].Set(-m / 2 * t / this.va, (0 + e / 8) / this.va);
        k.offsetX = m;
        k.offsetY = e;
        b.Hd.left = -l * t;
        b.Hd.right = l * t;
        b.Hd.top = -e;
        b.Hd.bottom = e;
        b = new Z.F.fb.uh;
        b.av(c, 6);
        t = new Z.i.wj;
        t.shape = b;
        t.xh = f;
        t.Ve = g;
        t.cf = h;
        t.Pg = this;
        k.LP = a.qr(t)
    },
    GK: function() {
        for (var a = this.O.c, b = 0, c = new V, d, e = 0; e < a.Sb; e++) {
            for (; null == a.U[b]; )
                b++;
            var f = a.U[b];
            b++;
            if (32 <= f.Bb && 1110593103 == f.ma.Le) {
                var g = f.ext;
                if (g.identifier == this.identifier) {
                    var h;
                    for (h = 0; h < c.size() && c.get(h) != f.ma; h++)
                        ;
                    if (h == c.size()) {
                        c.add(f.ma);
                        d = f.ma;
                        var k = g.tM
                          , m = g.direction
                          , l = b
                          , t = new V;
                        t.add(g);
                        for (var w = e + 1; w < a.Sb; w++) {
                            for (; 0 == a.U[l]; )
                                l++;
                            f = a.U[l];
                            l++;
                            32 <= f.Bb && 1110593103 == f.ma.Le && f.ma == d && (f = f.ext,
                            f.identifier == this.identifier && f.tM == k && f.direction == m && t.add(f))
                        }
                        if (1 < t.size()) {
                            var r;
                            do {
                                r = !1;
                                d = 0;
                                do {
                                    h = t.get(d);
                                    var u = t.get(d + 1)
                                      , f = h.O.B + 8
                                      , l = u.O.B + 8
                                      , w = h.O.A + 8
                                      , n = u.O.A + 8;
                                    switch (m) {
                                    case 0:
                                        l < f && (f = h,
                                        t.set(d, u),
                                        t.set(d + 1, f),
                                        r = !0);
                                        break;
                                    case 1:
                                        l > f && (f = h,
                                        t.set(d, u),
                                        t.set(d + 1, f),
                                        r = !0);
                                        break;
                                    case 2:
                                        n < w && (f = h,
                                        t.set(d, u),
                                        t.set(d + 1, f),
                                        r = !0);
                                        break;
                                    case 3:
                                        n > w && (f = h,
                                        t.set(d, u),
                                        t.set(d + 1, f),
                                        r = !0)
                                    }
                                    d++
                                } while (d < t.size() - 1)
                            } while (r);
                            for (d = 0; d < t.size() - 1; d++) {
                                h = t.get(d);
                                u = t.get(d + 1);
                                f = h.O.B + 8;
                                l = u.O.B + 8;
                                w = h.O.A + 8;
                                n = u.O.A + 8;
                                h = l - f;
                                var z = Math.abs(n - w)
                                  , u = (f + l) / 2;
                                r = (w + n) / 2;
                                m = new uh;
                                vh(m, null, 0 == k ? 8 : 9);
                                m.R = this.ik(Z.i.Nc.Kd, u, r, 0, 0, m, 0);
                                m.Hd.left = -h;
                                m.Hd.right = h;
                                m.Hd.top = -z;
                                m.Hd.bottom = z;
                                z = [];
                                for (h = 0; 4 > h; h++)
                                    z[h] = new Z.H.Math.ab(0,0);
                                z[0].Set((f - u) / this.va, (r - w) / this.va);
                                z[1].Set((f - u) / this.va, (r - w - 8) / this.va);
                                z[2].Set((l - u) / this.va, (r - n - 8) / this.va);
                                z[3].Set((l - u) / this.va, (r - n) / this.va);
                                f = new Z.F.fb.uh;
                                f.av(z, 4);
                                l = new Z.i.wj;
                                l.shape = f;
                                l.xh = 1;
                                l.Ve = g.Ve;
                                l.cf = g.cf;
                                l.Pg = this;
                                m.R.qr(l)
                            }
                        }
                    }
                }
            }
        }
    },
    LK: function() {
        var a = new uh;
        vh(a, null, 7);
        a.R = this.ik(Z.i.Nc.Kd, this.o.ee / 2, this.o.fe + 8, 0, 0, a, 0, 0);
        this.Mm(a.R, a, this.o.ee / 2, this.o.fe + 8, this.o.ee, 16, 0, 1, 0);
        a = new uh;
        vh(a, null, 4);
        a.R = this.ik(Z.i.Nc.Kd, -8, this.o.fe / 2, 0, 0, a, 0, 0);
        this.Mm(a.R, a, -8, this.o.fe / 2, 16, this.o.fe, 0, 1, 0);
        a = new uh;
        vh(a, null, 5);
        a.R = this.ik(Z.i.Nc.Kd, this.o.ee + 8, this.o.fe / 2, 0, 0, a, 0, 0);
        this.Mm(a.R, a, this.o.ee + 8, this.o.fe / 2, 16, this.o.fe, 0, 1, 0);
        a = new uh;
        vh(a, null, 6);
        a.R = this.ik(Z.i.Nc.Kd, this.o.ee / 2, -8, 0, 0, a, 0, 0);
        this.Mm(a.R, a, this.o.ee / 2, -8, this.o.ee, 16, 0, 1, 0)
    },
    fO: function(a, b) {
        for (var c = 0, d = 0; d < b.Sb; d++) {
            for (; null == b.U[c]; )
                c++;
            var e = b.U[c];
            if (a == e.km)
                return e;
            c++
        }
        return null
    },
    FK: function() {
        var a = this.o, b = a.J, a = a.m, c, d, e;
        for (c = 0; c < b.Lb.length; c++) {
            var f = b.Lb[c];
            if (0 != (f.sb & 16)) {
                var g;
                d = f.zt;
                for (g = 0; g < f.xt; d++,
                g++) {
                    e = this.o.J.Af.list[d];
                    var h, k, m = e.Ys, l, t, w;
                    if (!(m >= he) && (h = e.jw,
                    k = e.kw,
                    e = Fd(a.ze, e.Xh),
                    null != e && null != e.Gd && (e = e.Gd,
                    l = e.oB,
                    t = e.pB,
                    w = e.qB,
                    w == ag.vp || w == ag.uj))) {
                        var r = new uh;
                        vh(r, null, w == ag.vp ? 8 : 9);
                        r.R = this.ik(Z.i.Nc.Kd, h + l / 2, k + t / 2, 0, 0, r, 0, 0);
                        m == Yi ? this.Mm(r.R, r, h + l / 2, k + t / 2, l, t, 0, this.Ve, this.cf) : this.Ut(r.R, r, h + l / 2, k + t / 2, e.ak, -1, this.Ve, this.cf, 1, 1)
                    }
                }
            }
        }
    },
    Wn: function() {
        return 0
    },
    wI: function() {
        var a = 0, b;
        for (b = 0; b < this.o.Sb; a++,
        b++) {
            for (; null == this.o.U[a]; )
                a++;
            var c = this.o.U[a];
            if (32 <= c.Bb && 1110590791 == c.ma.Le && c != this.O && c.ext.identifier == this.identifier)
                return !0
        }
        return !1
    },
    dw: function() {
        return this.Yg
    },
    Io: function() {
        0 == this.qu && (this.qu = !0,
        this.KI(),
        this.GK(),
        this.fa & 1 && this.FK(this));
        return !1
    },
    rs: function(a) {
        this.zk = 0;
        this.Ak = this.o.m.ib;
        this.fa = D(a);
        this.wi = D(a);
        this.ji = D(a);
        T(a, 4);
        this.angle = D(a) * Z.H.oa.qb / 16;
        this.va = D(a);
        this.Ve = D(a) / 100;
        this.cf = D(a) / 100;
        this.iE = D(a) / 100;
        this.kE = D(a) / 100;
        this.jE = D(a) / 100;
        this.hE = D(a) / 100;
        this.If = Ua(a);
        this.identifier = D(a);
        this.UG = D(a) / 100;
        this.VG = D(a) / 100;
        a = new Z.H.Math.ab(this.If * Math.cos(this.angle),this.If * Math.sin(this.angle));
        this.Wb = new Z.i.ug(a,!1);
        this.qs = new fm;
        this.Wb.Fr(this.qs);
        this.qu = !1;
        this.Dn = !0;
        this.Yg = !1;
        this.wI() && (this.identifier = 1E3 + this.O.Pc);
        this.LK();
        return 0
    },
    Mv: function() {
        this.Wb = null
    },
    II: function(a) {
        var b = this.o.U[a & 65535];
        return null != b && b.bq == a >> 16 ? b : null
    },
    hA: function(a, b) {
        var c = a.cb;
        if (null != c.Ud.bg[b])
            return b;
        if (0 != (c.Ud.Hi[b] & 64))
            b = c.Ud.Hi[b] & 63;
        else if (0 != (c.Ud.sh[b] & 64))
            b = c.Ud.sh[b] & 63;
        else {
            var d = b;
            0 > c.Jo ? b = c.Ud.sh[b] & 63 : (b -= c.Jo,
            b = 15 < (b & 31) ? c.Ud.sh[d] & 63 : c.Ud.Hi[d] & 63)
        }
        return b
    },
    Ns: function() {
        this.Io(this);
        if (this.Yg)
            return this.Dn && this.Wb.Fr(null),
            this.Dn = !1,
            0;
        this.Dn || this.Wb.Fr(this.qs);
        this.Dn = !0;
        var a;
        for (a = 0; a < this.Aq.size(); a++) {
            var b = this.Aq.get(a)
              , b = this.II(b)
              , c = this.jd.get(a);
            null != b && c.Oa != b && (b = null);
            if (null == b)
                this.Vt(c.R),
                Za(this.Aq, a),
                Za(this.jd, a),
                a--;
            else {
                var d = new Z.H.Math.ab((this.zk + b.B) / this.va,(this.Ak - b.A) / this.va);
                c.R.dv(d, this.hA(b, b.b.Fb) * Z.H.oa.qb / 16)
            }
        }
        null != this.Wb && this.Wb.Tl(1 / this.o.m.gA, this.wi, this.ji);
        if (0 < this.ms.size()) {
            for (a = 0; a < this.ms.size(); a++)
                this.Vt(this.ms.get(a));
            this.ms.clear()
        }
        return 0
    },
    fc: function(a) {
        return null == a || null == a.L || 0 != (a.Da & sf) ? null : a.b.pe == Uf && a.ma.fi.sf[a.L.gu].Ss && (a = a.L.Va.Ze,
        a.LA == this.identifier) ? a : null
    },
    sJ: function(a) {
        var b = a.Cc(this.o, 0)
          , b = this.fc(b);
        null != b && (a = a.ka(this.o, 1),
        b.yD(a))
    },
    uJ: function(a) {
        var b = a.Cc(this.o, 0)
          , b = this.fc(b);
        null != b && (a = a.ka(this.o, 1),
        b.AD(a))
    },
    tJ: function(a) {
        var b = a.Cc(this.o, 0)
          , b = this.fc(b);
        null != b && (a = a.ka(this.o, 1),
        b.DD(a))
    },
    vJ: function(a) {
        var b = a.Cc(this.o, 0)
          , b = this.fc(b);
        null != b && (a = a.ka(this.o, 1),
        b.bv(a))
    },
    eJ: function() {
        this.Yg = !0
    },
    mJ: function() {
        this.Yg = !1
    },
    yJ: function(a) {
        this.wi = a.ka(this.o, 0);
        this.ji = a.ka(this.o, 1)
    },
    xJ: function(a) {
        this.If = Mb(this.o, a.ha[0]);
        a = new Z.H.Math.ab(this.If * Math.cos(this.angle),this.If * Math.sin(this.angle));
        this.Wb.bv(a)
    },
    wJ: function(a) {
        this.jv = a.ka(this.o, 0);
        this.angle = this.jv * Z.H.oa.qb / 180;
        a = new Z.H.Math.ab(this.If * Math.cos(this.angle),this.If * Math.sin(this.angle));
        this.Wb.bv(a)
    },
    sc: function(a) {
        a = new gm(this,a);
        this.Ri.add(a);
        return a
    },
    xe: function(a, b, c) {
        var d, e = 0;
        if (null != a) {
            e = this.Ri.indexOf(a);
            if (0 > e)
                return null;
            e++
        }
        for (a = e; a < this.Ri.size() && (d = this.Ri.get(a),
        !qa(d.dG, b)); a++)
            ;
        return a < this.Ri.size() && (0 == c || c == d.ea) ? d : null
    },
    Mh: function(a) {
        var b = a.Oa
          , c = b.B
          , d = b.A;
        if (-1 != a.YF) {
            var b = b.b.xc
              , e = X(this.o.m.xa, a.YF)
              , b = Z.H.oa.qb / 180 * b;
            a = e.Gl - e.Hb;
            e = e.Il - e.Eb;
            c += a * Math.cos(b) - e * Math.sin(b);
            d += a * Math.sin(b) + e * Math.cos(b)
        }
        return new Z.H.Math.ab((this.zk + c) / this.va,(this.Ak - d) / this.va)
    },
    bJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.vj;
            d.lf = !0;
            var e = new Z.H.Math.ab(c.R.K.position.x,c.R.K.position.y)
              , f = new Z.H.Math.ab(a.R.K.position.x,a.R.K.position.y);
            d.Ib(c.R, a.R, e, f);
            em(b, 1, this.Wb.sc(d))
        }
        return !0
    },
    aJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.vj;
            d.lf = !0;
            d.Vn = 0;
            d.Jn = 0;
            var e = this.Mh(c)
              , f = this.Mh(a);
            d.Ib(c.R, a.R, e, f);
            em(b, 1, this.Wb.sc(d))
        }
    },
    dJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = Mb(this.o, a.ha[1]);
        a = a.ka(this.o, 2) / 100;
        for (var d = this.xe(null, b, 1); null != d; ) {
            var e = d.Fd;
            e.zD(c);
            e.xD(a);
            d = this.xe(d, b, 1)
        }
    },
    wr: function(a, b, c) {
        a = a.R.K.position;
        a.x += b / this.va;
        a.y -= c / this.va;
        return a
    },
    cJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1))
          , d = a.ka(this.o, 2)
          , e = a.ka(this.o, 3)
          , f = this.fc(a.Cc(this.o, 4))
          , g = a.ka(this.o, 5);
        a = a.ka(this.o, 6);
        null != c && null != f && (b = this.sc(b),
        d = this.wr(c, d, e),
        g = this.wr(f, g, a),
        e = new Z.i.N.vj,
        e.lf = !0,
        e.Ib(c.R, f.R, d, g),
        em(b, 1, this.Wb.sc(e)))
    },
    oJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.Nk;
            d.lf = !0;
            d.Ib(c.R, a.R, c.R.K.position);
            em(b, 2, this.Wb.sc(d))
        }
    },
    nJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.Nk;
            d.lf = !0;
            var e = this.Mh(c);
            d.Ib(c.R, a.R, e);
            em(b, 2, this.Wb.sc(d))
        }
    },
    pJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1))
          , d = a.ka(this.o, 2)
          , e = a.ka(this.o, 3);
        a = this.fc(a.Cc(this.o, 4));
        if (null != c && null != a) {
            var b = this.sc(b)
              , f = new Z.i.N.Nk;
            f.lf = !0;
            d = this.wr(c, d, e);
            f.Ib(c.R, a.R, d);
            em(b, 2, this.Wb.sc(f))
        }
    },
    qJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = a.ka(this.o, 1) * Z.H.oa.qb / 180;
        a = a.ka(this.o, 2) * Z.H.oa.qb / 180;
        for (var d = this.xe(null, b, 2); null != d; ) {
            var e = d.Fd;
            c > a ? e.en(!1) : (e.en(!0),
            e.Gr(c, a));
            d = this.xe(d, b, 2)
        }
    },
    rJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = a.ka(this.o, 1) / 100 * 20;
        a = a.ka(this.o, 2) / 100 * 10;
        for (var d = this.xe(null, b, 2); null != d; ) {
            var e = d.Fd
              , f = !0;
            0 == c && 0 == a && (f = !1);
            e.tr(f);
            e.CD(c);
            e.Hr(-a);
            d = this.xe(d, b, 2)
        }
    },
    gJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.Mk;
            d.lf = !0;
            var e = c.R.K.position
              , f = a.R.K.position
              , f = new Z.H.Math.ab(f.x - e.x,f.y - e.y);
            d.Ib(c.R, a.R, e, f);
            em(b, 3, this.Wb.sc(d))
        }
    },
    fJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1));
        a = this.fc(a.Cc(this.o, 2));
        if (null != c && null != a) {
            var b = this.sc(b)
              , d = new Z.i.N.Mk;
            d.lf = !0;
            var e = this.Mh(c)
              , f = this.Mh(a)
              , f = new Z.H.Math.ab(f.x - e.x,f.y - e.y);
            d.Ib(c.R, a.R, e, f);
            em(b, 3, this.Wb.sc(d))
        }
    },
    hJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1))
          , d = a.ka(this.o, 2)
          , e = a.ka(this.o, 3)
          , f = this.fc(a.Cc(this.o, 4))
          , g = a.ka(this.o, 5)
          , h = a.ka(this.o, 6);
        null != c && null != f && (b = this.sc(b),
        a = new Z.i.N.Mk,
        a.lf = !0,
        d = this.wr(c, d, e),
        g = this.wr(c, g, h),
        g = new Z.H.Math.ab(g.x - d.x,g.y - d.y),
        a.Ib(c.R, f.R, d, g),
        em(b, 3, this.Wb.sc(a)))
    },
    iJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = a.ka(this.o, 1) / this.va;
        a = a.ka(this.o, 2) / this.va;
        for (var d = this.xe(null, b, 3); null != d; ) {
            var e = d.Fd
              , f = !0;
            c > a && (f = !1);
            e.en(f);
            e.Gr(c, a);
            d = this.xe(d, b, 3)
        }
    },
    jJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = a.ka(this.o, 1) / 100 * 20;
        a = a.ka(this.o, 2) / 100 * 10;
        for (var d = this.xe(null, b, 3); null != d; ) {
            var e = d.Fd
              , f = !0;
            0 == c && 0 == a && (f = !1);
            e.tr(f);
            e.BD(c);
            e.Hr(a);
            d = this.xe(d, b, 3)
        }
    },
    lJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1))
          , d = this.fc(a.Cc(this.o, 2));
        if (null != c && null != d) {
            var b = this.sc(b)
              , e = new Z.i.N.zn;
            e.lf = !0;
            var f = c.R.K.position
              , g = d.R.K.position
              , h = a.ka(this.o, 3) / this.va
              , k = a.ka(this.o, 4) * Z.H.oa.qb / 180
              , m = a.ka(this.o, 5) / this.va
              , l = a.ka(this.o, 6) * Z.H.oa.qb / 180;
            a = a.ka(this.o, 7) / 100;
            h = new Z.H.Math.ab(f.x + h * Math.cos(k),f.y + h * Math.sin(k));
            m = new Z.H.Math.ab(g.x + m * Math.cos(l),g.y + m * Math.sin(l));
            e.Ib(c.R, d.R, h, m, f, g, a);
            em(b, 4, this.Wb.sc(e))
        }
    },
    kJ: function(a) {
        var b = a.ie(this.o, 0)
          , c = this.fc(a.Cc(this.o, 1))
          , d = this.fc(a.Cc(this.o, 2));
        if (null != c && null != d) {
            var b = this.sc(b)
              , e = new Z.i.N.zn;
            e.lf = !0;
            var f = this.Mh(c)
              , g = this.Mh(d)
              , h = a.ka(this.o, 3) / this.va
              , k = a.ka(this.o, 4) * Z.H.oa.qb / 180
              , m = a.ka(this.o, 5) / this.va
              , l = a.ka(this.o, 6) * Z.H.oa.qb / 180;
            a = a.ka(this.o, 7) / 100;
            h = new Z.H.Math.ab(f.x + h * Math.cos(k),f.y + h * Math.sin(k));
            m = new Z.H.Math.ab(g.x + m * Math.cos(l),g.y + m * Math.sin(l));
            e.Ib(c.R, d.R, h, m, f, g, a);
            em(b, 4, this.Wb.sc(e))
        }
    },
    $I: function(a) {
        var b = a.ie(this.o, 0);
        for (a = 0; a < this.Ri.size(); a++) {
            var c = this.Ri.get(a);
            qa(c.dG, b) && (this.Wb.sr(c.Fd),
            Za(this.Ri, a),
            a--)
        }
    },
    QK: function(a) {
        var b;
        for (b = 0; b < this.Ri.size(); b++) {
            var c = this.Ri.get(b);
            if (c.Fd.Na == a || c.Fd.Aa == a)
                Za(this.Ri, b),
                b--
        }
    },
    eQ: function(a) {
        this.Wb.sr(a)
    },
    IM: function(a) {
        if (this.fa & 4 && 0 > this.jd.indexOf(a) && 2 == a.Bb && null == this.fc(a)) {
            var b = new uh;
            vh(b, a, 3);
            b.R = this.ik(Z.i.Nc.Kd, a.B, a.A, 11.25 * this.hA(a, a.b.Fb), 0, b, 0, 0);
            this.Ut(b.R, b, a.B, a.A, a.b.qc, this.UG, this.VG, 0, a.b.Kc, a.b.Lc);
            this.jd.add(b);
            this.Aq.add(a.bq << 16 | a.Pc & 65535)
        }
    },
    HM: function(a, b, c, d) {
        if (this.fa & 1) {
            var e = X(this.o.m.xa, c)
              , f = new uh;
            vh(f, null, d == ag.vp ? 8 : 9);
            f.R = this.ik(Z.i.Nc.Kd, a + e.width / 2, b + e.height / 2, 0, 0, f, 0, 0);
            this.Ut(f.R, f, a + e.width / 2, b + e.height / 2, c, -1, this.Ve, this.cf, 1, 1);
            return f.R
        }
        return null
    },
    jQ: function(a) {
        this.Wb.YC(a)
    },
    ZI: function(a) {
        var b = a.Cc(this.o, 0);
        if (0 > this.jd.indexOf(b) && null != b.L && null != b.cb && null == this.fc(b)) {
            var c = new uh;
            vh(c, b, 3);
            var d = 11.25 * this.hA(b, b.b.Fb)
              , e = a.ka(this.o, 1) / 100
              , f = a.ka(this.o, 2) / 100;
            a = a.ka(this.o, 3);
            c.R = this.ik(Z.i.Nc.Kd, b.B, b.A, d, 0, c, 0, 0);
            switch (a) {
            case 0:
                this.Mm(c.R, c, b.B, b.A, b.aa, b.$, e, f, 0);
                break;
            case 1:
                this.VB(c.R, c, b.B, b.A, b.aa / 4, e, f, 0);
                break;
            default:
                this.Ut(c.R, c, b.B, b.A, b.b.qc, e, f, 0, b.b.Kc, b.b.Lc)
            }
            this.jd.add(c);
            this.Aq.add(b.bq << 16 | b.Pc & 65535)
        }
    },
    zJ: function(a) {
        a = a.Cc(this.o, 0);
        a = this.jd.indexOf(a);
        if (0 <= a) {
            var b = this.jd.get(a);
            this.Vt(b.R);
            Za(this.jd, a);
            Za(this.Aq, a)
        }
    },
    action: function(a, b) {
        switch (a) {
        case 0:
            this.xJ(b);
            break;
        case 1:
            this.wJ(b);
            break;
        case 8:
            this.bJ(b);
            break;
        case 9:
            this.aJ(b);
            break;
        case 10:
            this.cJ(b);
            break;
        case 11:
            this.oJ(b);
            break;
        case 12:
            this.nJ(b);
            break;
        case 13:
            this.pJ(b);
            break;
        case 14:
            this.gJ(b);
            break;
        case 15:
            this.fJ(b);
            break;
        case 16:
            this.hJ(b);
            break;
        case 23:
            this.ZI(b);
            break;
        case 24:
            this.zJ(b);
            break;
        case 29:
            this.dJ(b);
            break;
        case 30:
            this.qJ(b);
            break;
        case 31:
            this.rJ(b);
            break;
        case 32:
            this.iJ(b);
            break;
        case 33:
            this.jJ(b);
            break;
        case 34:
            this.lJ(b);
            break;
        case 35:
            this.kJ(b);
            break;
        case 38:
            this.$I(b);
            break;
        case 39:
            this.yJ(b);
            break;
        case 25:
            this.sJ(b);
            break;
        case 26:
            this.uJ(b);
            break;
        case 27:
            this.tJ(b);
            break;
        case 28:
            this.vJ(b);
            break;
        case 40:
            this.eJ(b);
            break;
        case 41:
            this.mJ(b)
        }
    },
    pO: function() {
        return this.If
    },
    oO: function() {
        return this.jv
    },
    rO: function() {
        return this.wi
    },
    qO: function() {
        return this.ji
    },
    BJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 1);
        return null != a ? a.Fd.sm : 0
    },
    AJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 1);
        return null != a ? 100 * a.Fd.mq : 0
    },
    CJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 2);
        if (null != a)
            return 180 * a.Fd.Mu() / Z.H.oa.qb
    },
    IJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 2);
        return null != a ? 180 * a.Fd.Nu() / Z.H.oa.qb : 0
    },
    FJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 2);
        return null != a ? 100 * a.Fd.gO() / 20 : 0
    },
    EJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 2);
        return null != a ? 100 * a.Fd.Sj / 10 : 0
    },
    DJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 3);
        return null != a ? a.Fd.Mu() * this.va : 0
    },
    JJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 3);
        return null != a ? a.Fd.Nu() * this.va : 0
    },
    HJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 3);
        return null != a ? 100 * a.Fd.pq / 20 : 0
    },
    GJ: function() {
        var a = this.O.Oi()
          , a = this.xe(null, a, 3);
        return null != a ? 100 * a.Fd.Sj / 10 : 0
    },
    Sn: function(a) {
        switch (a) {
        case 0:
            return this.If;
        case 1:
            return this.jv;
        case 2:
            return this.wi;
        case 3:
            return this.ji;
        case 4:
            return this.BJ();
        case 5:
            return this.AJ();
        case 6:
            return this.CJ();
        case 7:
            return this.IJ();
        case 8:
            return this.FJ();
        case 9:
            return this.EJ();
        case 10:
            return this.DJ();
        case 11:
            return this.JJ();
        case 12:
            return this.HJ();
        case 13:
            return this.GJ()
        }
        return 0
    }
});
function fm() {
    this.zz = !1
}
fm.prototype = {
    rD: function(a) {
        this.zz = !0;
        var b = new Z.F.An;
        a.NI(b);
        var c = a.Qc.R
          , d = a.Yc.R
          , e = a.Qc.Ai().O.c
          , f = c.Ai()
          , g = d.Ai();
        if (null == f || null == g)
            a.eb();
        else if (4 == f.ea || 4 == g.ea)
            switch (b = 4 == f.ea ? g : f,
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                f = b.Oa;
                e.G.Id = 1;
                pg(e.G, f, -786432);
                b.pc || a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                f.Dd(2, 0);
                e.Wa || a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                f.Dd(2, 0),
                e.Wa || a.eb()
            }
        else if (5 == f.ea || 5 == g.ea)
            switch (b = 5 == f.ea ? g : f,
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                f = b.Oa;
                e.G.Id = 2;
                pg(e.G, f, -786432);
                b.pc || a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                f.Dd(3, 0);
                e.Wa || a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                f.Dd(3, 0),
                e.Wa || a.eb()
            }
        else if (6 == f.ea || 6 == g.ea)
            switch (b = 6 == f.ea ? g : f,
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                f = b.Oa;
                e.G.Id = 4;
                pg(e.G, f, -786432);
                b.pc || a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                f.Dd(4, 0);
                e.Wa || a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                f.Dd(4, 0),
                e.Wa || a.eb()
            }
        else if (7 == f.ea || 7 == g.ea)
            switch (b = 7 == f.ea ? g : f,
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                f = b.Oa;
                e.G.Id = 8;
                pg(e.G, f, -786432);
                b.pc || a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                f.Dd(5, 0);
                e.Wa || a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                f.Dd(5, 0),
                e.Wa || a.eb()
            }
        else if (8 == f.ea || 8 == g.ea)
            switch (b = 8 == f.ea ? g : f,
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                f = b.Oa;
                pg(e.G, f, -851968);
                b.pc || a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                f.Dd(7, 0);
                e.Wa || a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                f.Dd(7, 0),
                e.Wa || a.eb()
            }
        else if (9 == f.ea || 9 == g.ea)
            switch (9 == f.ea ? (b = g,
            g = f,
            c = d.s) : (b = f,
            c = c.s),
            f = b.Oa,
            b.ea) {
            case 0:
                b.pc = !1;
                pg(e.G, f, -851968);
                if (b.pc) {
                    e = !1;
                    if (null != b.QF) {
                        d = {};
                        b.QF.xH(g.R, d);
                        var b = d.x + g.Hd.right
                          , h = d.y + g.Hd.bottom;
                        f.B >= d.x + g.Hd.left && f.B <= b && f.A <= h && (e = !0)
                    }
                    e || 0 <= c.y && a.eb()
                } else
                    a.eb();
                break;
            case 3:
                a.eb();
                break;
            case 2:
                c = b;
                e = c.parent;
                e.dd = c;
                e.xg = null;
                e.Wa = !1;
                c = c.R.s;
                f.Dd(7, 0);
                e.Wa ? 0 <= c.y && a.eb() : a.eb();
                break;
            case 1:
                c = b,
                e = c.parent,
                e.Sk = c,
                e.Wa = !1,
                c = c.R.s,
                f.Dd(7, 0),
                e.Wa ? 0 <= c.y && a.eb() : a.eb()
            }
        else
            switch (obstacle = b = f,
            b.ea) {
            case 0:
                switch (g.ea) {
                case 0:
                    b.OL && (f = b,
                    b = g,
                    g = f);
                    b.pc = !1;
                    g.pc = !1;
                    f = b.Oa;
                    c = g.Oa;
                    e.G.nx = c.Pc;
                    pg(e.G, f, -917504);
                    b.pc || g.pc || a.eb();
                    break;
                case 3:
                    b.pc = !1;
                    f = b.Oa;
                    c = g.Oa;
                    e.G.nx = c.Pc;
                    pg(e.G, f, -917504);
                    b.pc || a.eb();
                    break;
                case 2:
                    c = g;
                    e = c.parent;
                    e.dd = c;
                    e.xg = null;
                    e.Wa = !1;
                    e.fm = b.Oa;
                    b.pc = !1;
                    c.Oa.Dd(1, obstacle.Oa.De);
                    e.Wa || a.eb();
                    break;
                case 1:
                    c = g,
                    f = c.parent,
                    f.MK = obstacle,
                    f.Sk = c,
                    f.Wa = !1,
                    f.fm = b.Oa,
                    b.pc = !1,
                    c.Oa.Dd(1, obstacle.Oa.De),
                    b.pc || f.Wa || a.eb()
                }
                break;
            case 3:
                switch (g.ea) {
                case 0:
                    g.pc = !1;
                    e.G.nx = b.Oa.Pc;
                    pg(e.G, g.Oa, -917504);
                    g.pc || a.eb();
                    break;
                case 3:
                    a.eb();
                    break;
                case 2:
                    c = g;
                    e = c.parent;
                    e.dd = c;
                    e.xg = null;
                    e.Wa = !1;
                    e.fm = b.Oa;
                    b.pc = !1;
                    c.Oa.Dd(1, obstacle.Oa.De);
                    e.Wa || a.eb();
                    break;
                case 1:
                    c = g,
                    f = c.parent,
                    f.MK = obstacle,
                    f.Sk = c,
                    f.Wa = !1,
                    f.fm = b.Oa,
                    b.pc = !1,
                    c.Oa.Dd(1, obstacle.Oa.De),
                    f.Wa || a.eb()
                }
                break;
            case 2:
                switch (g.ea) {
                case 0:
                    c = b;
                    e = c.parent;
                    e.dd = c;
                    e.xg = null;
                    e.Wa = !1;
                    e.fm = g.Oa;
                    g.pc = !1;
                    b.Oa.Dd(1, g.Oa.De);
                    e.Wa || a.eb();
                    break;
                case 3:
                    c = b;
                    e = c.parent;
                    e.dd = c;
                    e.xg = null;
                    e.Wa = !1;
                    g.pc = !1;
                    b.Oa.Dd(1, g.Oa.De);
                    e.Wa || a.eb();
                    break;
                case 2:
                    e = b.parent;
                    e.dd = f;
                    e.xg = g;
                    e.Wa = !1;
                    b.Oa.Dd(6, 0);
                    e.Wa || a.eb();
                    break;
                case 1:
                    a.eb()
                }
                break;
            case 1:
                switch (g.ea) {
                case 0:
                    c = b;
                    e = c.parent;
                    e.Sk = c;
                    e.Wa = !1;
                    e.fm = g.Oa;
                    g.pc = !1;
                    f.Oa.Dd(1, g.Oa.De);
                    g.pc || e.Wa || a.eb();
                    break;
                case 3:
                    c = b;
                    e = c.parent;
                    e.Sk = c;
                    e.Wa = !1;
                    g.pc = !1;
                    f.Oa.Dd(1, g.Oa.De);
                    g.pc || e.Wa || a.eb();
                    break;
                case 2:
                    a.eb();
                    break;
                case 1:
                    a.eb()
                }
            }
        this.zz = !1
    }
};
function gm(a, b) {
    this.eM = a;
    this.dG = b;
    this.ea = 0;
    this.Fd = null
}
gm.prototype = {
    sr: function() {
        null != this.Fd && this.eM.Wb.sr(this.Fd)
    }
};
function em(a, b, c) {
    a.ea = b;
    a.Fd = c
}
var Z = {};
(function(a, b) {
    function c() {}
    !(Object.prototype.defineProperty instanceof Function) && Object.prototype.__defineGetter__ instanceof Function && Object.prototype.__defineSetter__ instanceof Function && (Object.defineProperty = function(a, b, c) {
        c.get instanceof Function && a.__defineGetter__(b, c.get);
        c.set instanceof Function && a.__defineSetter__(b, c.set)
    }
    );
    a.lc = function(a, b) {
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    ;
    a.gL = function(a, b) {
        return function() {
            b.apply(a, arguments)
        }
    }
    ;
    a.WI = function(a) {
        a === b && (a = 0);
        for (var c = Array(a || 0), d = 0; d < a; ++d)
            c[d] = 0;
        return c
    }
    ;
    a.is = function(a, c) {
        return null === a ? !1 : c instanceof Function && a instanceof c || a.constructor.Iy != b && a.constructor.Iy[c] ? !0 : !1
    }
    ;
    a.hi = function(a) {
        return Math.abs(parseInt(a))
    }
}
)(Z);
var hm = Array
  , im = Z.WI;
"undefined" === typeof Z && (Z = {});
"undefined" === typeof Z.F && (Z.F = {});
"undefined" === typeof Z.F.fb && (Z.F.fb = {});
"undefined" === typeof Z.H && (Z.H = {});
"undefined" === typeof Z.H.Math && (Z.H.Math = {});
"undefined" === typeof Z.i && (Z.i = {});
"undefined" === typeof Z.i.qa && (Z.i.qa = {});
"undefined" === typeof Z.i.zc && (Z.i.zc = {});
"undefined" === typeof Z.i.N && (Z.i.N = {});
(function() {
    function a() {
        a.kv.apply(this, arguments)
    }
    function b() {
        b.Ty.apply(this, arguments)
    }
    function c() {
        c.Mr.apply(this, arguments);
        this.constructor === c && this.Mr.apply(this, arguments)
    }
    function d() {
        d.Se.apply(this, arguments)
    }
    function e() {
        e.Dp.apply(this, arguments);
        this.constructor === e && this.Dp.apply(this, arguments)
    }
    function f() {
        f.nv.apply(this, arguments)
    }
    function g() {
        g.xn.apply(this, arguments)
    }
    function h() {
        h.ov.apply(this, arguments)
    }
    function k() {
        k.pv.apply(this, arguments)
    }
    function m() {
        m.qv.apply(this, arguments)
    }
    function l() {
        l.Pr.apply(this, arguments);
        this.constructor === l && this.Pr.apply(this, arguments)
    }
    function t() {
        t.rv.apply(this, arguments)
    }
    function w() {
        w.ez.apply(this, arguments)
    }
    function r() {
        r.fz.apply(this, arguments)
    }
    function u() {
        u.Kk.apply(this, arguments);
        this.constructor === u && this.Kk.apply(this, arguments)
    }
    function n() {
        n.Zr.apply(this, arguments);
        this.constructor === n && this.Zr.apply(this, arguments)
    }
    function z() {
        z.lz.apply(this, arguments)
    }
    function E() {
        E.ds.apply(this, arguments);
        this.constructor === E && this.ds.apply(this, arguments)
    }
    function A() {
        A.pz.apply(this, arguments)
    }
    function v() {
        v.qz.apply(this, arguments)
    }
    function H() {
        H.Jp.apply(this, arguments)
    }
    function G() {
        G.es.apply(this, arguments);
        this.constructor === G && this.es.apply(this, arguments)
    }
    function O() {
        O.tv.apply(this, arguments)
    }
    function N() {
        N.rz.apply(this, arguments)
    }
    function J() {
        J.tg.apply(this, arguments)
    }
    function K() {
        K.uv.apply(this, arguments)
    }
    function L() {
        L.An.apply(this, arguments);
        this.constructor === L && this.An.apply(this, arguments)
    }
    function M() {
        M.by.apply(this, arguments)
    }
    function q() {
        q.ey.apply(this, arguments)
    }
    function C() {
        C.$l.apply(this, arguments);
        this.constructor === C && this.$l.apply(this, arguments)
    }
    function B() {
        B.Qr.apply(this, arguments);
        this.constructor === B && this.Qr.apply(this, arguments)
    }
    function I() {
        I.Rr.apply(this, arguments);
        this.constructor === I && this.Rr.apply(this, arguments)
    }
    function P() {
        P.sv.apply(this, arguments)
    }
    function U() {
        U.uh.apply(this, arguments);
        this.constructor === U && this.uh.apply(this, arguments)
    }
    function R() {
        R.Bc.apply(this, arguments);
        this.constructor === R && this.Bc.apply(this, arguments)
    }
    function Y() {
        Y.Bp.apply(this, arguments);
        this.constructor === Y && this.Bp.apply(this, arguments)
    }
    function ia() {
        ia.oa.apply(this, arguments)
    }
    function Ea() {
        Ea.Lk.apply(this, arguments);
        this.constructor === Ea && this.Lk.apply(this, arguments)
    }
    function Q() {
        Q.Gp.apply(this, arguments);
        this.constructor === Q && this.Gp.apply(this, arguments)
    }
    function ja() {
        ja.th.apply(this, arguments)
    }
    function Bj() {
        Bj.fs.apply(this, arguments)
    }
    function ef() {
        ef.bm.apply(this, arguments);
        this.constructor === ef && this.bm.apply(this, arguments)
    }
    function ff() {
        ff.ab.apply(this, arguments);
        this.constructor === ff && this.ab.apply(this, arguments)
    }
    function gf() {
        gf.Kp.apply(this, arguments);
        this.constructor === gf && this.Kp.apply(this, arguments)
    }
    function hf() {
        hf.Nc.apply(this, arguments);
        this.constructor === hf && this.Nc.apply(this, arguments)
    }
    function jf() {
        jf.wn.apply(this, arguments);
        this.constructor === jf && this.wn.apply(this, arguments)
    }
    function Cj() {
        Cj.lv.apply(this, arguments)
    }
    function Dj() {
        Dj.$y.apply(this, arguments)
    }
    function Ej() {
        Ej.mv.apply(this, arguments)
    }
    function kf() {
        kf.Ep.apply(this, arguments);
        this.constructor === kf && this.Ep.apply(this, arguments)
    }
    function lf() {
        lf.Vg.apply(this, arguments);
        this.constructor === lf && this.Vg.apply(this, arguments)
    }
    function Fj() {
        Fj.dz.apply(this, arguments)
    }
    function Gj() {
        Gj.hz.apply(this, arguments)
    }
    function mf() {
        mf.Sr.apply(this, arguments);
        this.constructor === mf && this.Sr.apply(this, arguments)
    }
    function nf() {
        nf.wj.apply(this, arguments);
        this.constructor === nf && this.wj.apply(this, arguments)
    }
    function of() {
        of.Fp.apply(this, arguments);
        this.constructor === of && this.Fp.apply(this, arguments)
    }
    function Hj() {
        Hj.vv.apply(this, arguments)
    }
    function pf() {
        pf.ug.apply(this, arguments);
        this.constructor === pf && this.ug.apply(this, arguments)
    }
    function Ij() {
        Ij.Vy.apply(this, arguments)
    }
    function uf() {
        uf.yb.apply(this, arguments);
        this.constructor === uf && this.yb.apply(this, arguments)
    }
    function vf() {
        vf.Nr.apply(this, arguments);
        this.constructor === vf && this.Nr.apply(this, arguments)
    }
    function kk() {
        kk.Yy.apply(this, arguments)
    }
    function lk() {
        lk.Zy.apply(this, arguments)
    }
    function wf() {
        wf.Cp.apply(this, arguments);
        this.constructor === wf && this.Cp.apply(this, arguments)
    }
    function mk() {
        mk.az.apply(this, arguments)
    }
    function nk() {
        nk.bz.apply(this, arguments)
    }
    function xf() {
        xf.am.apply(this, arguments);
        this.constructor === xf && this.am.apply(this, arguments)
    }
    function ok() {
        ok.gz.apply(this, arguments)
    }
    function yf() {
        yf.bs.apply(this, arguments);
        this.constructor === yf && this.bs.apply(this, arguments)
    }
    function pk() {
        pk.mz.apply(this, arguments)
    }
    function qk() {
        qk.nz.apply(this, arguments)
    }
    function rk() {
        rk.oz.apply(this, arguments)
    }
    function zf() {
        zf.yn.apply(this, arguments);
        this.constructor === zf && this.yn.apply(this, arguments)
    }
    function sk() {
        sk.Uy.apply(this, arguments)
    }
    function tk() {
        tk.Wy.apply(this, arguments)
    }
    function uk() {
        uk.Xy.apply(this, arguments)
    }
    function vk() {
        vk.Jd.apply(this, arguments)
    }
    function wk() {
        wk.cz.apply(this, arguments)
    }
    function xk() {
        xk.iz.apply(this, arguments)
    }
    function yk() {
        yk.sz.apply(this, arguments)
    }
    function Af() {
        Af.Or.apply(this, arguments);
        this.constructor === Af && this.Or.apply(this, arguments)
    }
    function Bf() {
        Bf.vj.apply(this, arguments);
        this.constructor === Bf && this.vj.apply(this, arguments)
    }
    function Cf() {
        Cf.Tr.apply(this, arguments);
        this.constructor === Cf && this.Tr.apply(this, arguments)
    }
    function Df() {
        Df.Ur.apply(this, arguments);
        this.constructor === Df && this.Ur.apply(this, arguments)
    }
    function Ef() {
        Ef.Vr.apply(this, arguments);
        this.constructor === Ef && this.Vr.apply(this, arguments)
    }
    function Ff() {
        Ff.Wr.apply(this, arguments);
        this.constructor === Ff && this.Wr.apply(this, arguments)
    }
    function zk() {
        zk.jz.apply(this, arguments)
    }
    function Gf() {
        Gf.pa.apply(this, arguments);
        this.constructor === Gf && this.pa.apply(this, arguments)
    }
    function Hf() {
        Hf.Ia.apply(this, arguments);
        this.constructor === Hf && this.Ia.apply(this, arguments)
    }
    function Ak() {
        Ak.kz.apply(this, arguments)
    }
    function If() {
        If.Xr.apply(this, arguments);
        this.constructor === If && this.Xr.apply(this, arguments)
    }
    function Jf() {
        Jf.Yr.apply(this, arguments);
        this.constructor === Jf && this.Yr.apply(this, arguments)
    }
    function Kf() {
        Kf.$r.apply(this, arguments);
        this.constructor === Kf && this.$r.apply(this, arguments)
    }
    function Lf() {
        Lf.as.apply(this, arguments);
        this.constructor === Lf && this.as.apply(this, arguments)
    }
    function Mf() {
        Mf.cs.apply(this, arguments);
        this.constructor === Mf && this.cs.apply(this, arguments)
    }
    function Nf() {
        Nf.Mk.apply(this, arguments);
        this.constructor === Nf && this.Mk.apply(this, arguments)
    }
    function Of() {
        Of.Hp.apply(this, arguments);
        this.constructor === Of && this.Hp.apply(this, arguments)
    }
    function Pf() {
        Pf.zn.apply(this, arguments);
        this.constructor === Pf && this.zn.apply(this, arguments)
    }
    function Qf() {
        Qf.Ip.apply(this, arguments);
        this.constructor === Qf && this.Ip.apply(this, arguments)
    }
    function Rf() {
        Rf.Nk.apply(this, arguments);
        this.constructor === Rf && this.Nk.apply(this, arguments)
    }
    function Sf() {
        Sf.gs.apply(this, arguments);
        this.constructor === Sf && this.gs.apply(this, arguments)
    }
    function Tf() {
        Tf.hs.apply(this, arguments);
        this.constructor === Tf && this.hs.apply(this, arguments)
    }
    Z.F.OI = "Box2D.Collision.IBroadPhase";
    Z.F.kv = a;
    Z.F.Ty = b;
    Z.F.Mr = c;
    Z.F.Se = d;
    Z.F.Dp = e;
    Z.F.nv = f;
    Z.F.xn = g;
    Z.F.ov = h;
    Z.F.pv = k;
    Z.F.qv = m;
    Z.F.Pr = l;
    Z.F.rv = t;
    Z.F.ez = w;
    Z.F.fz = r;
    Z.F.Kk = u;
    Z.F.Zr = n;
    Z.F.lz = z;
    Z.F.ds = E;
    Z.F.pz = A;
    Z.F.qz = v;
    Z.F.Jp = H;
    Z.F.es = G;
    Z.F.tv = O;
    Z.F.rz = N;
    Z.F.tg = J;
    Z.F.uv = K;
    Z.F.An = L;
    Z.F.by = M;
    Z.F.ey = q;
    Z.F.fb.$l = C;
    Z.F.fb.Qr = B;
    Z.F.fb.Rr = I;
    Z.F.fb.sv = P;
    Z.F.fb.uh = U;
    Z.F.fb.Bc = R;
    Z.H.EO = "Box2D.Common.b2internal";
    Z.H.Bp = Y;
    Z.H.oa = ia;
    Z.H.Math.Lk = Ea;
    Z.H.Math.Gp = Q;
    Z.H.Math.th = ja;
    Z.H.Math.fs = Bj;
    Z.H.Math.bm = ef;
    Z.H.Math.ab = ff;
    Z.H.Math.Kp = gf;
    Z.i.Nc = hf;
    Z.i.wn = jf;
    Z.i.lv = Cj;
    Z.i.$y = Dj;
    Z.i.mv = Ej;
    Z.i.Ep = kf;
    Z.i.Vg = lf;
    Z.i.dz = Fj;
    Z.i.hz = Gj;
    Z.i.Sr = mf;
    Z.i.wj = nf;
    Z.i.Fp = of;
    Z.i.vv = Hj;
    Z.i.ug = pf;
    Z.i.qa.Vy = Ij;
    Z.i.qa.yb = uf;
    Z.i.qa.Nr = vf;
    Z.i.qa.Yy = kk;
    Z.i.qa.Zy = lk;
    Z.i.qa.Cp = wf;
    Z.i.qa.az = mk;
    Z.i.qa.bz = nk;
    Z.i.qa.am = xf;
    Z.i.qa.gz = ok;
    Z.i.qa.bs = yf;
    Z.i.qa.mz = pk;
    Z.i.qa.nz = qk;
    Z.i.qa.oz = rk;
    Z.i.qa.yn = zf;
    Z.i.zc.Uy = sk;
    Z.i.zc.Wy = tk;
    Z.i.zc.Xy = uk;
    Z.i.zc.Jd = vk;
    Z.i.zc.cz = wk;
    Z.i.zc.iz = xk;
    Z.i.zc.sz = yk;
    Z.i.N.Or = Af;
    Z.i.N.vj = Bf;
    Z.i.N.Tr = Cf;
    Z.i.N.Ur = Df;
    Z.i.N.Vr = Ef;
    Z.i.N.Wr = Ff;
    Z.i.N.jz = zk;
    Z.i.N.pa = Gf;
    Z.i.N.Ia = Hf;
    Z.i.N.kz = Ak;
    Z.i.N.Xr = If;
    Z.i.N.Yr = Jf;
    Z.i.N.$r = Kf;
    Z.i.N.as = Lf;
    Z.i.N.cs = Mf;
    Z.i.N.Mk = Nf;
    Z.i.N.Hp = Of;
    Z.i.N.zn = Pf;
    Z.i.N.Ip = Qf;
    Z.i.N.Nk = Rf;
    Z.i.N.gs = Sf;
    Z.i.N.hs = Tf
}
)();
Z.Bd = [];
(function() {
    var a = Z.F.fb.$l
      , b = Z.F.fb.uh
      , c = Z.F.fb.Bc
      , d = Z.H.oa
      , e = Z.H.Math.th
      , f = Z.H.Math.fs
      , g = Z.H.Math.bm
      , h = Z.H.Math.ab
      , k = Z.F.kv
      , m = Z.F.Ty
      , l = Z.F.Mr
      , t = Z.F.Se
      , w = Z.F.Dp
      , r = Z.F.nv
      , u = Z.F.xn
      , n = Z.F.ov
      , z = Z.F.pv
      , E = Z.F.qv
      , A = Z.F.Pr
      , v = Z.F.rv
      , H = Z.F.ez
      , G = Z.F.fz
      , O = Z.F.Kk
      , N = Z.F.Zr
      , J = Z.F.lz
      , K = Z.F.ds
      , L = Z.F.pz
      , M = Z.F.qz
      , q = Z.F.Jp
      , C = Z.F.es
      , B = Z.F.tv
      , I = Z.F.rz
      , P = Z.F.tg
      , U = Z.F.uv
      , R = Z.F.An
      , Y = Z.F.by
      , ia = Z.F.ey
      , Ea = Z.F.OI;
    k.kv = function() {
        this.lowerBound = new h;
        this.upperBound = new h
    }
    ;
    k.prototype.np = function() {
        var a = this.upperBound.y - this.lowerBound.y;
        return a = (a = 0 <= this.upperBound.x - this.lowerBound.x && 0 <= a) && this.lowerBound.np() && this.upperBound.np()
    }
    ;
    k.prototype.HI = function() {
        return new h((this.lowerBound.x + this.upperBound.x) / 2,(this.lowerBound.y + this.upperBound.y) / 2)
    }
    ;
    k.prototype.cy = function(a) {
        var b;
        return b = (b = (b = (b = this.lowerBound.x <= a.lowerBound.x) && this.lowerBound.y <= a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y
    }
    ;
    k.prototype.Ul = function(a) {
        var b = a.lowerBound.y - this.upperBound.y
          , c = this.lowerBound.y - a.upperBound.y;
        return 0 < a.lowerBound.x - this.upperBound.x || 0 < b || 0 < this.lowerBound.x - a.upperBound.x || 0 < c ? !1 : !0
    }
    ;
    k.ip = function(a, b) {
        var c = new k;
        c.ip(a, b);
        return c
    }
    ;
    k.prototype.ip = function(a, b) {
        this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
        this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
        this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
        this.upperBound.y = Math.max(a.upperBound.y, b.upperBound.y)
    }
    ;
    m.Ty = function() {}
    ;
    m.prototype.UJ = function(a) {
        var b = this.value
          , c = this.QB
          , d = this.EC;
        this.value = a.value;
        this.QB = a.QB;
        this.EC = a.EC;
        a.value = b;
        a.QB = c;
        a.EC = d
    }
    ;
    l.Mr = function() {}
    ;
    l.prototype.Mr = function() {
        this.PF = new im;
        this.PF[0] = 0;
        this.PF[1] = 0;
        this.hI = new im;
        this.hI[0] = 0;
        this.hI[1] = 0
    }
    ;
    t.Se = function() {}
    ;
    t.WC = function(a, b, c, d) {
        void 0 === d && (d = 0);
        var e, f = 0;
        e = b[0];
        var g = e.Lh;
        e = b[1];
        var h = e.Lh
          , q = c.x * g.x + c.y * g.y - d;
        e = c.x * h.x + c.y * h.y - d;
        0 >= q && a[f++].Set(b[0]);
        0 >= e && a[f++].Set(b[1]);
        0 > q * e && (c = q / (q - e),
        e = a[f],
        e = e.Lh,
        e.x = g.x + c * (h.x - g.x),
        e.y = g.y + c * (h.y - g.y),
        e = a[f],
        e.id = (0 < q ? b[0] : b[1]).id,
        ++f);
        return f
    }
    ;
    t.Iu = function(a, b, c, d, e) {
        void 0 === c && (c = 0);
        var f = a.ja
          , g = a.hd;
        a = parseInt(d.Ec);
        d = d.ja;
        var h, q;
        h = b.I;
        q = g[c];
        var g = h.g.x * q.x + h.h.x * q.y
          , k = h.g.y * q.x + h.h.y * q.y;
        h = e.I;
        var C = h.g.x * g + h.g.y * k;
        h = h.h.x * g + h.h.y * k;
        for (var B = 0, I = Number.MAX_VALUE, l = 0; l < a; ++l)
            q = d[l],
            q = q.x * C + q.y * h,
            q < I && (I = q,
            B = l);
        q = f[c];
        h = b.I;
        c = b.position.x + (h.g.x * q.x + h.h.x * q.y);
        b = b.position.y + (h.g.y * q.x + h.h.y * q.y);
        q = d[B];
        h = e.I;
        return (e.position.x + (h.g.x * q.x + h.h.x * q.y) - c) * g + (e.position.y + (h.g.y * q.x + h.h.y * q.y) - b) * k
    }
    ;
    t.$C = function(a, b, c, d, e) {
        var f = parseInt(b.Ec), g = b.hd, h, q;
        q = e.I;
        h = d.cl;
        var k = e.position.x + (q.g.x * h.x + q.h.x * h.y)
          , C = e.position.y + (q.g.y * h.x + q.h.y * h.y);
        q = c.I;
        h = b.cl;
        k -= c.position.x + (q.g.x * h.x + q.h.x * h.y);
        C -= c.position.y + (q.g.y * h.x + q.h.y * h.y);
        q = k * c.I.g.x + C * c.I.g.y;
        for (var C = k * c.I.h.x + C * c.I.h.y, k = 0, B = -Number.MAX_VALUE, I = 0; I < f; ++I)
            h = g[I],
            h = h.x * q + h.y * C,
            h > B && (B = h,
            k = I);
        g = t.Iu(b, c, k, d, e);
        B = parseInt(0 <= k - 1 ? k - 1 : f - 1);
        q = t.Iu(b, c, B, d, e);
        I = parseInt(k + 1 < f ? k + 1 : 0);
        C = t.Iu(b, c, I, d, e);
        if (q > g && q > C)
            h = -1;
        else if (C > g)
            h = 1,
            B = I,
            q = C;
        else
            return a[0] = k,
            g;
        for (; ; )
            if (k = -1 == h ? 0 <= B - 1 ? B - 1 : f - 1 : B + 1 < f ? B + 1 : 0,
            g = t.Iu(b, c, k, d, e),
            g > q)
                B = k,
                q = g;
            else
                break;
        a[0] = B;
        return q
    }
    ;
    t.GI = function(a, b, c, d, e, f) {
        void 0 === d && (d = 0);
        var g = b.hd
          , h = parseInt(e.Ec);
        b = e.ja;
        e = e.hd;
        var q;
        q = c.I;
        c = g[d];
        var g = q.g.x * c.x + q.h.x * c.y
          , k = q.g.y * c.x + q.h.y * c.y;
        q = f.I;
        c = q.g.x * g + q.g.y * k;
        k = q.h.x * g + q.h.y * k;
        g = c;
        q = 0;
        for (var C = Number.MAX_VALUE, B = 0; B < h; ++B)
            c = e[B],
            c = g * c.x + k * c.y,
            c < C && (C = c,
            q = B);
        e = parseInt(q);
        g = parseInt(e + 1 < h ? e + 1 : 0);
        h = a[0];
        c = b[e];
        q = f.I;
        h.Lh.x = f.position.x + (q.g.x * c.x + q.h.x * c.y);
        h.Lh.y = f.position.y + (q.g.y * c.x + q.h.y * c.y);
        h.id.Th.$M = d;
        h.id.Th.pL = e;
        h.id.Th.qL = 0;
        h = a[1];
        c = b[g];
        q = f.I;
        h.Lh.x = f.position.x + (q.g.x * c.x + q.h.x * c.y);
        h.Lh.y = f.position.y + (q.g.y * c.x + q.h.y * c.y);
        h.id.Th.$M = d;
        h.id.Th.pL = g;
        h.id.Th.qL = 1
    }
    ;
    t.Cy = function() {
        var a = new hm(2);
        a[0] = new Y;
        a[1] = new Y;
        return a
    }
    ;
    t.AI = function(a, b, c, e, f) {
        a.Rd = 0;
        var g = b.tb + e.tb, h;
        t.xC[0] = 0;
        var q = t.$C(t.xC, b, c, e, f);
        h = t.xC[0];
        if (!(q > g)) {
            var k;
            t.yC[0] = 0;
            var C = t.$C(t.yC, e, f, b, c);
            k = t.yC[0];
            if (!(C > g)) {
                C > .98 * q + .001 ? (q = e,
                e = b,
                b = f,
                a.ea = O.On,
                h = 1) : (q = b,
                b = c,
                c = f,
                k = h,
                a.ea = O.Mi,
                h = 0);
                f = t.fN;
                t.GI(f, q, b, k, e, c);
                C = q.ja;
                e = C[k];
                var B;
                B = k + 1 < parseInt(q.Ec) ? C[parseInt(k + 1)] : C[0];
                q = t.hN;
                q.Set(B.x - e.x, B.y - e.y);
                q.rg();
                C = t.gN;
                C.x = q.y;
                C.y = -q.x;
                var I = t.jN;
                I.Set(.5 * (e.x + B.x), .5 * (e.y + B.y));
                var l = t.pN;
                k = b.I;
                l.x = k.g.x * q.x + k.h.x * q.y;
                l.y = k.g.y * q.x + k.h.y * q.y;
                var Q = t.qN;
                Q.x = -l.x;
                Q.y = -l.y;
                q = t.iN;
                q.x = l.y;
                q.y = -l.x;
                var m = t.tN
                  , P = t.uN;
                m.x = b.position.x + (k.g.x * e.x + k.h.x * e.y);
                m.y = b.position.y + (k.g.y * e.x + k.h.y * e.y);
                P.x = b.position.x + (k.g.x * B.x + k.h.x * B.y);
                P.y = b.position.y + (k.g.y * B.x + k.h.y * B.y);
                b = q.x * m.x + q.y * m.y;
                k = l.x * P.x + l.y * P.y + g;
                B = t.dN;
                e = t.eN;
                f = t.WC(B, f, Q, -l.x * m.x - l.y * m.y + g);
                if (!(2 > f || (f = t.WC(e, B, l, k),
                2 > f))) {
                    a.Ye.S(C);
                    a.xb.S(I);
                    for (I = C = 0; I < d.Xg; ++I)
                        f = e[I],
                        q.x * f.Lh.x + q.y * f.Lh.y - b <= g && (l = a.Cb[C],
                        k = c.I,
                        Q = f.Lh.x - c.position.x,
                        m = f.Lh.y - c.position.y,
                        l.xb.x = Q * k.g.x + m * k.g.y,
                        l.xb.y = Q * k.h.x + m * k.h.y,
                        l.fl.Set(f.id),
                        l.fl.Th.lP = h,
                        ++C);
                    a.Rd = C
                }
            }
        }
    }
    ;
    t.yI = function(a, b, c, d, e) {
        a.Rd = 0;
        var f, g;
        f = c.I;
        g = b.Ie;
        var h = c.position.x + (f.g.x * g.x + f.h.x * g.y);
        c = c.position.y + (f.g.y * g.x + f.h.y * g.y);
        f = e.I;
        g = d.Ie;
        h = e.position.x + (f.g.x * g.x + f.h.x * g.y) - h;
        e = e.position.y + (f.g.y * g.x + f.h.y * g.y) - c;
        f = b.tb + d.tb;
        h * h + e * e > f * f || (a.ea = O.Vz,
        a.xb.S(b.Ie),
        a.Ye.hb(),
        a.Rd = 1,
        a.Cb[0].xb.S(d.Ie),
        a.Cb[0].fl.key = 0)
    }
    ;
    t.zI = function(a, b, c, d, e) {
        a.Rd = 0;
        var f, g, h, q;
        q = e.I;
        h = d.Ie;
        var k = e.position.y + (q.g.y * h.x + q.h.y * h.y);
        f = e.position.x + (q.g.x * h.x + q.h.x * h.y) - c.position.x;
        g = k - c.position.y;
        q = c.I;
        c = f * q.g.x + g * q.g.y;
        q = f * q.h.x + g * q.h.y;
        var C = 0;
        e = -Number.MAX_VALUE;
        var k = b.tb + d.tb
          , B = parseInt(b.Ec)
          , I = b.ja;
        b = b.hd;
        for (var l = 0; l < B; ++l) {
            h = I[l];
            f = c - h.x;
            g = q - h.y;
            h = b[l];
            h = h.x * f + h.y * g;
            if (h > k)
                return;
            h > e && (e = h,
            C = l)
        }
        h = parseInt(C);
        f = I[h];
        B = I[parseInt(h + 1 < B ? h + 1 : 0)];
        if (e < Number.MIN_VALUE)
            a.Rd = 1,
            a.ea = O.Mi,
            a.Ye.S(b[C]),
            a.xb.x = .5 * (f.x + B.x),
            a.xb.y = .5 * (f.y + B.y);
        else if (e = (c - B.x) * (f.x - B.x) + (q - B.y) * (f.y - B.y),
        0 >= (c - f.x) * (B.x - f.x) + (q - f.y) * (B.y - f.y)) {
            if ((c - f.x) * (c - f.x) + (q - f.y) * (q - f.y) > k * k)
                return;
            a.Rd = 1;
            a.ea = O.Mi;
            a.Ye.x = c - f.x;
            a.Ye.y = q - f.y;
            a.Ye.rg();
            a.xb.S(f)
        } else if (0 >= e) {
            if ((c - B.x) * (c - B.x) + (q - B.y) * (q - B.y) > k * k)
                return;
            a.Rd = 1;
            a.ea = O.Mi;
            a.Ye.x = c - B.x;
            a.Ye.y = q - B.y;
            a.Ye.rg();
            a.xb.S(B)
        } else {
            C = .5 * (f.x + B.x);
            f = .5 * (f.y + B.y);
            e = (c - C) * b[h].x + (q - f) * b[h].y;
            if (e > k)
                return;
            a.Rd = 1;
            a.ea = O.Mi;
            a.Ye.x = b[h].x;
            a.Ye.y = b[h].y;
            a.Ye.rg();
            a.xb.Set(C, f)
        }
        a.Cb[0].xb.S(d.Ie);
        a.Cb[0].fl.key = 0
    }
    ;
    t.Ul = function(a, b) {
        var c = b.lowerBound
          , d = a.upperBound
          , e = c.x - d.x
          , f = c.y - d.y
          , c = a.lowerBound
          , d = b.upperBound
          , g = c.y - d.y;
        return 0 < e || 0 < f || 0 < c.x - d.x || 0 < g ? !1 : !0
    }
    ;
    Z.Bd.push(function() {
        Z.F.Se.fN = t.Cy();
        Z.F.Se.dN = t.Cy();
        Z.F.Se.eN = t.Cy();
        Z.F.Se.xC = new im(1);
        Z.F.Se.yC = new im(1);
        Z.F.Se.hN = new h;
        Z.F.Se.gN = new h;
        Z.F.Se.jN = new h;
        Z.F.Se.iN = new h;
        Z.F.Se.pN = new h;
        Z.F.Se.qN = new h;
        Z.F.Se.tN = new h;
        Z.F.Se.uN = new h;
        Z.F.Se.yO = new h;
        Z.F.Se.CO = 255
    });
    w.Dp = function() {
        this.Th = new ia
    }
    ;
    w.prototype.Dp = function() {
        this.Th.Vl = this
    }
    ;
    w.prototype.Set = function(a) {
        this.key = a.Tg
    }
    ;
    w.prototype.hf = function() {
        var a = new w;
        a.key = this.key;
        return a
    }
    ;
    Object.defineProperty(w.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.Tg
        }
    });
    Object.defineProperty(w.prototype, "key", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.Tg = a;
            this.Th.My = this.Tg & 255;
            this.Th.Ky = (this.Tg & 65280) >> 8 & 255;
            this.Th.Ly = (this.Tg & 16711680) >> 16 & 255;
            this.Th.Jy = (this.Tg & 4278190080) >> 24 & 255
        }
    });
    r.nv = function() {
        this.position = new h;
        this.mI = new h;
        this.Fh = new h;
        this.id = new w
    }
    ;
    u.xn = function() {}
    ;
    u.dy = function(a, b, c) {
        ++u.AO;
        var d = c.ek
          , f = c.fk
          , g = c.cI
          , q = c.dI
          , k = u.nN;
        k.KJ(b, d, g, f, q);
        var B = k.ja, C = u.lN, I = u.mN, l;
        k.cD();
        for (var m, P = 0; 20 > P; ) {
            l = k.Dc;
            for (m = 0; m < l; m++)
                C[m] = B[m].Ge,
                I[m] = B[m].He;
            switch (k.Dc) {
            case 2:
                k.SJ();
                break;
            case 3:
                k.TJ()
            }
            if (3 == k.Dc)
                break;
            k.cD();
            m = k.LI();
            if (m.ny() < Number.MIN_VALUE * Number.MIN_VALUE)
                break;
            var Q = B[k.Dc];
            Q.Ge = d.jy(e.Rl(g.I, m.Ol()));
            Q.zf = e.he(g, d.kf(Q.Ge));
            Q.He = f.jy(e.Rl(q.I, m));
            Q.xi = e.he(q, f.kf(Q.He));
            Q.Vc = e.od(Q.xi, Q.zf);
            ++P;
            ++u.BO;
            var R = !1;
            for (m = 0; m < l; m++)
                if (Q.Ge == C[m] && Q.He == I[m]) {
                    R = !0;
                    break
                }
            if (R)
                break;
            ++k.Dc
        }
        u.nK = e.Cf(u.nK, P);
        k.MI(a.fj, a.gj);
        a.Ln = e.od(a.fj, a.gj).Bk();
        a.EP = P;
        k.ZJ(b);
        c.iI && (b = d.tb,
        f = f.tb,
        a.Ln > b + f && a.Ln > Number.MIN_VALUE ? (a.Ln -= b + f,
        c = e.od(a.gj, a.fj),
        c.rg(),
        a.fj.x += b * c.x,
        a.fj.y += b * c.y,
        a.gj.x -= f * c.x,
        a.gj.y -= f * c.y) : (f = new h,
        f.x = .5 * (a.fj.x + a.gj.x),
        f.y = .5 * (a.fj.y + a.gj.y),
        a.fj.x = a.gj.x = f.x,
        a.fj.y = a.gj.y = f.y,
        a.Ln = 0))
    }
    ;
    Z.Bd.push(function() {
        Z.F.xn.nN = new C;
        Z.F.xn.lN = new im(3);
        Z.F.xn.mN = new im(3)
    });
    n.ov = function() {}
    ;
    z.pv = function() {
        this.fj = new h;
        this.gj = new h
    }
    ;
    E.qv = function() {}
    ;
    E.prototype.Set = function(d) {
        switch (d.Mc()) {
        case c.Up:
            d = d instanceof a ? d : null;
            this.ja = new hm(1,!0);
            this.ja[0] = d.Ie;
            this.Dc = 1;
            this.tb = d.tb;
            break;
        case c.Vp:
            d = d instanceof b ? d : null,
            this.ja = d.ja,
            this.Dc = d.Ec,
            this.tb = d.tb
        }
    }
    ;
    E.prototype.jy = function(a) {
        for (var b = 0, c = this.ja[0].x * a.x + this.ja[0].y * a.y, d = 1; d < this.Dc; ++d) {
            var e = this.ja[d].x * a.x + this.ja[d].y * a.y;
            e > c && (b = d,
            c = e)
        }
        return b
    }
    ;
    E.prototype.yr = function(a) {
        for (var b = 0, c = this.ja[0].x * a.x + this.ja[0].y * a.y, d = 1; d < this.Dc; ++d) {
            var e = this.ja[d].x * a.x + this.ja[d].y * a.y;
            e > c && (b = d,
            c = e)
        }
        return this.ja[b]
    }
    ;
    E.prototype.kf = function(a) {
        void 0 === a && (a = 0);
        return this.ja[a]
    }
    ;
    A.Pr = function() {}
    ;
    A.prototype.Pr = function() {
        this.ht = this.Vj = null
    }
    ;
    A.prototype.rr = function(a, b) {
        var c = this.UC()
          , e = d.wv
          , f = d.wv;
        c.Xb.lowerBound.x = a.lowerBound.x - e;
        c.Xb.lowerBound.y = a.lowerBound.y - f;
        c.Xb.upperBound.x = a.upperBound.x + e;
        c.Xb.upperBound.y = a.upperBound.y + f;
        c.Pg = b;
        this.gD(c);
        return c
    }
    ;
    A.prototype.lp = function(a) {
        this.tD(a);
        this.gy(a)
    }
    ;
    A.prototype.Dy = function(a, b, c) {
        if (a.Xb.cy(b))
            return !1;
        this.tD(a);
        var e = d.wv + d.ND * (0 < c.x ? c.x : -c.x);
        c = d.wv + d.ND * (0 < c.y ? c.y : -c.y);
        a.Xb.lowerBound.x = b.lowerBound.x - e;
        a.Xb.lowerBound.y = b.lowerBound.y - c;
        a.Xb.upperBound.x = b.upperBound.x + e;
        a.Xb.upperBound.y = b.upperBound.y + c;
        this.gD(a);
        return !0
    }
    ;
    A.prototype.vr = function(a) {
        return a.Xb
    }
    ;
    A.prototype.Ai = function(a) {
        return a.Pg
    }
    ;
    A.prototype.Ey = function(a, b) {
        if (null != this.Vj) {
            var c = new hm
              , d = 0;
            for (c[d++] = this.Vj; 0 < d; ) {
                var e = c[--d];
                if (e.Xb.Ul(b))
                    if (e.ly()) {
                        if (!a(e))
                            break
                    } else
                        c[d++] = e.vh,
                        c[d++] = e.Rk
            }
        }
    }
    ;
    A.prototype.UC = function() {
        if (this.ht) {
            var a = this.ht;
            this.ht = a.parent;
            a.parent = null;
            a.vh = null;
            a.Rk = null;
            return a
        }
        return new H
    }
    ;
    A.prototype.gy = function(a) {
        a.parent = this.ht;
        this.ht = a
    }
    ;
    A.prototype.gD = function(a) {
        if (null == this.Vj)
            this.Vj = a,
            this.Vj.parent = null;
        else {
            var b = a.Xb.HI()
              , c = this.Vj;
            if (0 == c.ly()) {
                do
                    var d = c.vh
                      , c = c.Rk
                      , c = Math.abs((d.Xb.lowerBound.x + d.Xb.upperBound.x) / 2 - b.x) + Math.abs((d.Xb.lowerBound.y + d.Xb.upperBound.y) / 2 - b.y) < Math.abs((c.Xb.lowerBound.x + c.Xb.upperBound.x) / 2 - b.x) + Math.abs((c.Xb.lowerBound.y + c.Xb.upperBound.y) / 2 - b.y) ? d : c;
                while (0 == c.ly())
            }
            b = c.parent;
            d = this.UC();
            d.parent = b;
            d.Pg = null;
            d.Xb.ip(a.Xb, c.Xb);
            if (b) {
                c.parent.vh == c ? b.vh = d : b.Rk = d;
                d.vh = c;
                d.Rk = a;
                c.parent = d;
                a.parent = d;
                do {
                    if (b.Xb.cy(d.Xb))
                        break;
                    b.Xb.ip(b.vh.Xb, b.Rk.Xb);
                    d = b;
                    b = b.parent
                } while (b)
            } else
                d.vh = c,
                d.Rk = a,
                c.parent = d,
                this.Vj = a.parent = d
        }
    }
    ;
    A.prototype.tD = function(a) {
        if (a == this.Vj)
            this.Vj = null;
        else {
            var b = a.parent
              , c = b.parent;
            a = b.vh == a ? b.Rk : b.vh;
            if (c)
                for (c.vh == b ? c.vh = a : c.Rk = a,
                a.parent = c,
                this.gy(b); c; ) {
                    b = c.Xb;
                    c.Xb = k.ip(c.vh.Xb, c.Rk.Xb);
                    if (b.cy(c.Xb))
                        break;
                    c = c.parent
                }
            else
                this.Vj = a,
                a.parent = null,
                this.gy(b)
        }
    }
    ;
    v.rv = function() {
        this.ai = new A;
        this.po = new hm;
        this.lt = new hm;
        this.so = 0
    }
    ;
    v.prototype.rr = function(a, b) {
        var c = this.ai.rr(a, b);
        this.VC(c);
        return c
    }
    ;
    v.prototype.lp = function(a) {
        this.XJ(a);
        this.ai.lp(a)
    }
    ;
    v.prototype.Dy = function(a, b, c) {
        this.ai.Dy(a, b, c) && this.VC(a)
    }
    ;
    v.prototype.Ul = function(a, b) {
        return this.ai.vr(a).Ul(this.ai.vr(b))
    }
    ;
    v.prototype.Ai = function(a) {
        return this.ai.Ai(a)
    }
    ;
    v.prototype.vr = function(a) {
        return this.ai.vr(a)
    }
    ;
    v.prototype.YJ = function(a) {
        for (var b = this, c = b.so = 0, d, c = 0; c < b.po.length; ++c)
            d = b.po[c],
            b.ai.Ey(function(a) {
                if (a == d)
                    return !0;
                b.so == b.lt.length && (b.lt[b.so] = new G);
                var c = b.lt[b.so];
                c.ek = a < d ? a : d;
                c.fk = a >= d ? a : d;
                ++b.so;
                return !0
            }, b.ai.vr(d));
        for (c = b.po.length = 0; c < b.so; ) {
            var e = b.lt[c];
            a(b.ai.Ai(e.ek), b.ai.Ai(e.fk));
            for (++c; c < b.so; ) {
                var f = b.lt[c];
                if (f.ek != e.ek || f.fk != e.fk)
                    break;
                ++c
            }
        }
    }
    ;
    v.prototype.Ey = function(a, b) {
        this.ai.Ey(a, b)
    }
    ;
    v.prototype.VC = function(a) {
        this.po[this.po.length] = a
    }
    ;
    v.prototype.XJ = function(a) {
        this.po.splice(parseInt(this.po.indexOf(a)), 1)
    }
    ;
    v.Iy = {};
    v.Iy[Ea] = !0;
    H.ez = function() {
        this.Xb = new k
    }
    ;
    H.prototype.ly = function() {
        return null == this.vh
    }
    ;
    G.fz = function() {}
    ;
    O.Kk = function() {
        this.Rd = 0
    }
    ;
    O.prototype.Kk = function() {
        this.Cb = new hm(d.Xg);
        for (var a = 0; a < d.Xg; a++)
            this.Cb[a] = new N;
        this.Ye = new h;
        this.xb = new h
    }
    ;
    O.prototype.Df = function() {
        for (var a = 0; a < d.Xg; a++)
            (this.Cb[a]instanceof N ? this.Cb[a] : null).Df();
        this.Ye.hb();
        this.xb.hb();
        this.Rd = this.ea = 0
    }
    ;
    O.prototype.Set = function(a) {
        this.Rd = a.Rd;
        for (var b = 0; b < d.Xg; b++)
            (this.Cb[b]instanceof N ? this.Cb[b] : null).Set(a.Cb[b]);
        this.Ye.S(a.Ye);
        this.xb.S(a.xb);
        this.ea = a.ea
    }
    ;
    O.prototype.hf = function() {
        var a = new O;
        a.Set(this);
        return a
    }
    ;
    Z.Bd.push(function() {
        Z.F.Kk.Vz = 1;
        Z.F.Kk.Mi = 2;
        Z.F.Kk.On = 4
    });
    N.Zr = function() {
        this.xb = new h;
        this.fl = new w
    }
    ;
    N.prototype.Zr = function() {
        this.Df()
    }
    ;
    N.prototype.Df = function() {
        this.xb.hb();
        this.xo = this.ro = 0;
        this.fl.key = 0
    }
    ;
    N.prototype.Set = function(a) {
        this.xb.S(a.xb);
        this.ro = a.ro;
        this.xo = a.xo;
        this.fl.Set(a.fl)
    }
    ;
    J.lz = function() {
        this.p = new h
    }
    ;
    K.ds = function() {
        this.hH = new h;
        this.iH = new h
    }
    ;
    K.prototype.ds = function(a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        a && this.hH.S(a);
        b && this.iH.S(b)
    }
    ;
    L.pz = function() {
        this.Fh = new h
    }
    ;
    M.qz = function() {
        this.hH = new h;
        this.iH = new h
    }
    ;
    q.Jp = function() {
        this.xb = new h;
        this.ga = new h
    }
    ;
    q.prototype.Ib = function(a, b, c, d, f) {
        this.tm = b;
        this.um = d;
        var g, k, B, C, I;
        if (1 == parseInt(a.count))
            this.ea = q.ZE,
            g = this.tm.kf(a.Ge[0]),
            k = this.um.kf(a.He[0]),
            C = g,
            B = c.I,
            g = c.position.x + (B.g.x * C.x + B.h.x * C.y),
            c = c.position.y + (B.g.y * C.x + B.h.y * C.y),
            C = k,
            B = f.I,
            k = f.position.x + (B.g.x * C.x + B.h.x * C.y),
            f = f.position.y + (B.g.y * C.x + B.h.y * C.y),
            this.ga.x = k - g,
            this.ga.y = f - c,
            this.ga.rg();
        else {
            if (a.He[0] == a.He[1])
                this.ea = q.Mi,
                b = this.tm.kf(a.Ge[0]),
                d = this.tm.kf(a.Ge[1]),
                k = this.um.kf(a.He[0]),
                this.xb.x = .5 * (b.x + d.x),
                this.xb.y = .5 * (b.y + d.y),
                this.ga = e.Ml(e.od(d, b), 1),
                this.ga.rg(),
                C = this.ga,
                B = c.I,
                b = B.g.x * C.x + B.h.x * C.y,
                d = B.g.y * C.x + B.h.y * C.y,
                C = this.xb,
                B = c.I,
                g = c.position.x + (B.g.x * C.x + B.h.x * C.y),
                c = c.position.y + (B.g.y * C.x + B.h.y * C.y),
                C = k,
                B = f.I,
                k = f.position.x + (B.g.x * C.x + B.h.x * C.y),
                f = f.position.y + (B.g.y * C.x + B.h.y * C.y),
                I = (k - g) * b + (f - c) * d;
            else if (a.Ge[0] == a.Ge[0])
                this.ea = q.On,
                B = this.um.kf(a.He[0]),
                C = this.um.kf(a.He[1]),
                g = this.tm.kf(a.Ge[0]),
                this.xb.x = .5 * (B.x + C.x),
                this.xb.y = .5 * (B.y + C.y),
                this.ga = e.Ml(e.od(C, B), 1),
                this.ga.rg(),
                C = this.ga,
                B = f.I,
                b = B.g.x * C.x + B.h.x * C.y,
                d = B.g.y * C.x + B.h.y * C.y,
                C = this.xb,
                B = f.I,
                k = f.position.x + (B.g.x * C.x + B.h.x * C.y),
                f = f.position.y + (B.g.y * C.x + B.h.y * C.y),
                C = g,
                B = c.I,
                g = c.position.x + (B.g.x * C.x + B.h.x * C.y),
                c = c.position.y + (B.g.y * C.x + B.h.y * C.y),
                I = (g - k) * b + (c - f) * d;
            else {
                b = this.tm.kf(a.Ge[0]);
                d = this.tm.kf(a.Ge[1]);
                B = this.um.kf(a.He[0]);
                C = this.um.kf(a.He[1]);
                e.he(c, g);
                I = e.Qe(c.I, e.od(d, b));
                e.he(f, k);
                var l = e.Qe(f.I, e.od(C, B));
                k = I.x * I.x + I.y * I.y;
                g = l.x * l.x + l.y * l.y;
                var m = e.od(l, I);
                a = I.x * m.x + I.y * m.y;
                var m = l.x * m.x + l.y * m.y
                  , l = I.x * l.x + I.y * l.y
                  , P = k * g - l * l;
                I = 0;
                0 != P && (I = e.ec((l * m - a * g) / P, 0, 1));
                0 > (l * I + m) / g && (I = e.ec((l - a) / k, 0, 1));
                g = new h;
                g.x = b.x + I * (d.x - b.x);
                g.y = b.y + I * (d.y - b.y);
                k = new h;
                k.x = B.x + I * (C.x - B.x);
                k.y = B.y + I * (C.y - B.y);
                0 == I || 1 == I ? (this.ea = q.On,
                this.ga = e.Ml(e.od(C, B), 1),
                this.ga.rg(),
                this.xb = k) : (this.ea = q.Mi,
                this.ga = e.Ml(e.od(d, b), 1),
                this.xb = g)
            }
            0 > I && this.ga.pD()
        }
    }
    ;
    q.prototype.zi = function(a, b) {
        var c, d, f;
        switch (this.ea) {
        case q.ZE:
            return c = e.Rl(a.I, this.ga),
            d = e.Rl(b.I, this.ga.Ol()),
            c = this.tm.yr(c),
            d = this.um.yr(d),
            c = e.he(a, c),
            d = e.he(b, d),
            f = (d.x - c.x) * this.ga.x + (d.y - c.y) * this.ga.y;
        case q.Mi:
            return f = e.Qe(a.I, this.ga),
            c = e.he(a, this.xb),
            d = e.Rl(b.I, f.Ol()),
            d = this.um.yr(d),
            d = e.he(b, d),
            f = (d.x - c.x) * f.x + (d.y - c.y) * f.y;
        case q.On:
            return f = e.Qe(b.I, this.ga),
            d = e.he(b, this.xb),
            c = e.Rl(a.I, f.Ol()),
            c = this.tm.yr(c),
            c = e.he(a, c),
            f = (c.x - d.x) * f.x + (c.y - d.y) * f.y;
        default:
            return 0
        }
    }
    ;
    Z.Bd.push(function() {
        Z.F.Jp.ZE = 1;
        Z.F.Jp.Mi = 2;
        Z.F.Jp.On = 4
    });
    C.es = function() {
        this.Pa = new I;
        this.ob = new I;
        this.fh = new I;
        this.ja = new hm(3)
    }
    ;
    C.prototype.es = function() {
        this.ja[0] = this.Pa;
        this.ja[1] = this.ob;
        this.ja[2] = this.fh
    }
    ;
    C.prototype.KJ = function(a, b, c, d, f) {
        var g, h;
        this.Dc = a.count;
        for (var q = this.ja, k = 0; k < this.Dc; k++) {
            var B = q[k];
            B.Ge = a.Ge[k];
            B.He = a.He[k];
            g = b.kf(B.Ge);
            h = d.kf(B.He);
            B.zf = e.he(c, g);
            B.xi = e.he(f, h);
            B.Vc = e.od(B.xi, B.zf);
            B.V = 0
        }
        1 < this.Dc && (a = a.mM,
        g = this.fD(),
        g < .5 * a || 2 * a < g || g < Number.MIN_VALUE) && (this.Dc = 0);
        0 == this.Dc && (B = q[0],
        B.Ge = 0,
        B.He = 0,
        g = b.kf(0),
        h = d.kf(0),
        B.zf = e.he(c, g),
        B.xi = e.he(f, h),
        B.Vc = e.od(B.xi, B.zf),
        this.Dc = 1)
    }
    ;
    C.prototype.ZJ = function(a) {
        a.mM = this.fD();
        a.count = Z.hi(this.Dc);
        for (var b = this.ja, c = 0; c < this.Dc; c++)
            a.Ge[c] = Z.hi(b[c].Ge),
            a.He[c] = Z.hi(b[c].He)
    }
    ;
    C.prototype.LI = function() {
        switch (this.Dc) {
        case 1:
            return this.Pa.Vc.Ol();
        case 2:
            var a = e.od(this.ob.Vc, this.Pa.Vc);
            return 0 < e.kp(a, this.Pa.Vc.Ol()) ? e.XC(1, a) : e.Ml(a, 1);
        default:
            return new h
        }
    }
    ;
    C.prototype.cD = function() {
        switch (this.Dc) {
        case 0:
            new h;
            break;
        case 1:
            break;
        case 2:
            new h(this.Pa.V * this.Pa.Vc.x + this.ob.V * this.ob.Vc.x,this.Pa.V * this.Pa.Vc.y + this.ob.V * this.ob.Vc.y);
            break;
        default:
            new h
        }
    }
    ;
    C.prototype.MI = function(a, b) {
        switch (this.Dc) {
        case 1:
            a.S(this.Pa.zf);
            b.S(this.Pa.xi);
            break;
        case 2:
            a.x = this.Pa.V * this.Pa.zf.x + this.ob.V * this.ob.zf.x;
            a.y = this.Pa.V * this.Pa.zf.y + this.ob.V * this.ob.zf.y;
            b.x = this.Pa.V * this.Pa.xi.x + this.ob.V * this.ob.xi.x;
            b.y = this.Pa.V * this.Pa.xi.y + this.ob.V * this.ob.xi.y;
            break;
        case 3:
            b.x = a.x = this.Pa.V * this.Pa.zf.x + this.ob.V * this.ob.zf.x + this.fh.V * this.fh.zf.x,
            b.y = a.y = this.Pa.V * this.Pa.zf.y + this.ob.V * this.ob.zf.y + this.fh.V * this.fh.zf.y
        }
    }
    ;
    C.prototype.fD = function() {
        switch (this.Dc) {
        case 0:
            return 0;
        case 1:
            return 0;
        case 2:
            return e.od(this.Pa.Vc, this.ob.Vc).Bk();
        case 3:
            return e.kp(e.od(this.ob.Vc, this.Pa.Vc), e.od(this.fh.Vc, this.Pa.Vc));
        default:
            return 0
        }
    }
    ;
    C.prototype.SJ = function() {
        var a = this.Pa.Vc
          , b = this.ob.Vc
          , c = e.od(b, a)
          , a = -(a.x * c.x + a.y * c.y);
        0 >= a ? this.Dc = this.Pa.V = 1 : (b = b.x * c.x + b.y * c.y,
        0 >= b ? (this.Dc = this.ob.V = 1,
        this.Pa.Set(this.ob)) : (c = 1 / (b + a),
        this.Pa.V = b * c,
        this.ob.V = a * c,
        this.Dc = 2))
    }
    ;
    C.prototype.TJ = function() {
        var a = this.Pa.Vc
          , b = this.ob.Vc
          , c = this.fh.Vc
          , d = e.od(b, a)
          , f = e.jf(b, d)
          , g = -e.jf(a, d)
          , h = e.od(c, a)
          , q = e.jf(c, h)
          , k = -e.jf(a, h)
          , B = e.od(c, b)
          , C = e.jf(c, B)
          , B = -e.jf(b, B)
          , h = e.kp(d, h)
          , d = h * e.kp(b, c)
          , c = h * e.kp(c, a)
          , a = h * e.kp(a, b);
        0 >= g && 0 >= k ? this.Dc = this.Pa.V = 1 : 0 < f && 0 < g && 0 >= a ? (q = 1 / (f + g),
        this.Pa.V = f * q,
        this.ob.V = g * q,
        this.Dc = 2) : 0 < q && 0 < k && 0 >= c ? (f = 1 / (q + k),
        this.Pa.V = q * f,
        this.fh.V = k * f,
        this.Dc = 2,
        this.ob.Set(this.fh)) : 0 >= f && 0 >= B ? (this.Dc = this.ob.V = 1,
        this.Pa.Set(this.ob)) : 0 >= q && 0 >= C ? (this.Dc = this.fh.V = 1,
        this.Pa.Set(this.fh)) : 0 < C && 0 < B && 0 >= d ? (f = 1 / (C + B),
        this.ob.V = C * f,
        this.fh.V = B * f,
        this.Dc = 2,
        this.Pa.Set(this.fh)) : (f = 1 / (d + c + a),
        this.Pa.V = d * f,
        this.ob.V = c * f,
        this.fh.V = a * f,
        this.Dc = 3)
    }
    ;
    B.tv = function() {
        this.Ge = new im(3);
        this.He = new im(3)
    }
    ;
    I.rz = function() {}
    ;
    I.prototype.Set = function(a) {
        this.zf.S(a.zf);
        this.xi.S(a.xi);
        this.Vc.S(a.Vc);
        this.V = a.V;
        this.Ge = a.Ge;
        this.He = a.He
    }
    ;
    P.tg = function() {}
    ;
    P.WJ = function(a) {
        ++P.sK;
        var b = a.ek
          , c = a.fk
          , d = a.YH
          , f = a.ZH
          , g = b.tb + c.tb;
        a = a.LN;
        var h = 0
          , q = 0
          , k = 0;
        P.wC.count = 0;
        for (P.ar.iI = !1; ; ) {
            d.Yf(P.$m, h);
            f.Yf(P.an, h);
            P.ar.ek = b;
            P.ar.fk = c;
            P.ar.cI = P.$m;
            P.ar.dI = P.an;
            u.dy(P.QH, P.wC, P.ar);
            if (0 >= P.QH.Ln) {
                h = 1;
                break
            }
            P.Ex.Ib(P.wC, b, P.$m, c, P.an);
            var B = P.Ex.zi(P.$m, P.an);
            if (0 >= B) {
                h = 1;
                break
            }
            0 == q && (k = B > g ? e.Cf(g - a, .75 * g) : e.Cf(B - a, .02 * g));
            if (B - k < .5 * a) {
                if (0 == q) {
                    h = 1;
                    break
                }
                break
            }
            var C = h
              , I = h
              , l = 1;
            d.Yf(P.$m, l);
            f.Yf(P.an, l);
            var m = P.Ex.zi(P.$m, P.an);
            if (m >= k) {
                h = 1;
                break
            }
            for (var R = 0; ; ) {
                var n;
                n = R & 1 ? I + (k - B) * (l - I) / (m - B) : .5 * (I + l);
                d.Yf(P.$m, n);
                f.Yf(P.an, n);
                var U = P.Ex.zi(P.$m, P.an);
                if (e.we(U - k) < .025 * a) {
                    C = n;
                    break
                }
                U > k ? (I = n,
                B = U) : (l = n,
                m = U);
                ++R;
                ++P.uK;
                if (50 == R)
                    break
            }
            P.TD = e.Cf(P.TD, R);
            if (C < (1 + 100 * Number.MIN_VALUE) * h)
                break;
            h = C;
            q++;
            ++P.tK;
            if (1E3 == q)
                break
        }
        P.SD = e.Cf(P.SD, q);
        return h
    }
    ;
    Z.Bd.push(function() {
        Z.F.tg.sK = 0;
        Z.F.tg.tK = 0;
        Z.F.tg.SD = 0;
        Z.F.tg.uK = 0;
        Z.F.tg.TD = 0;
        Z.F.tg.wC = new B;
        Z.F.tg.ar = new n;
        Z.F.tg.$m = new g;
        Z.F.tg.an = new g;
        Z.F.tg.Ex = new q;
        Z.F.tg.QH = new z
    });
    U.uv = function() {
        this.ek = new E;
        this.fk = new E;
        this.YH = new f;
        this.ZH = new f
    }
    ;
    R.An = function() {
        this.nb = new h
    }
    ;
    R.prototype.An = function() {
        this.Cb = new hm(d.Xg);
        for (var a = 0; a < d.Xg; a++)
            this.Cb[a] = new h
    }
    ;
    R.prototype.Ib = function(a, b, c, d, e) {
        void 0 === c && (c = 0);
        void 0 === e && (e = 0);
        if (0 != a.Rd) {
            var f, g, h, q, k, B, C, I;
            switch (a.ea) {
            case O.Vz:
                h = b.I;
                g = a.xb;
                f = b.position.x + h.g.x * g.x + h.h.x * g.y;
                b = b.position.y + h.g.y * g.x + h.h.y * g.y;
                h = d.I;
                g = a.Cb[0].xb;
                a = d.position.x + h.g.x * g.x + h.h.x * g.y;
                d = d.position.y + h.g.y * g.x + h.h.y * g.y;
                g = a - f;
                h = d - b;
                q = g * g + h * h;
                q > Number.MIN_VALUE * Number.MIN_VALUE ? (q = Math.sqrt(q),
                this.nb.x = g / q,
                this.nb.y = h / q) : (this.nb.x = 1,
                this.nb.y = 0);
                g = b + c * this.nb.y;
                d -= e * this.nb.y;
                this.Cb[0].x = .5 * (f + c * this.nb.x + (a - e * this.nb.x));
                this.Cb[0].y = .5 * (g + d);
                break;
            case O.Mi:
                h = b.I;
                g = a.Ye;
                q = h.g.x * g.x + h.h.x * g.y;
                k = h.g.y * g.x + h.h.y * g.y;
                h = b.I;
                g = a.xb;
                B = b.position.x + h.g.x * g.x + h.h.x * g.y;
                C = b.position.y + h.g.y * g.x + h.h.y * g.y;
                this.nb.x = q;
                this.nb.y = k;
                for (f = 0; f < a.Rd; f++)
                    h = d.I,
                    g = a.Cb[f].xb,
                    I = d.position.x + h.g.x * g.x + h.h.x * g.y,
                    g = d.position.y + h.g.y * g.x + h.h.y * g.y,
                    this.Cb[f].x = I + .5 * (c - (I - B) * q - (g - C) * k - e) * q,
                    this.Cb[f].y = g + .5 * (c - (I - B) * q - (g - C) * k - e) * k;
                break;
            case O.On:
                for (h = d.I,
                g = a.Ye,
                q = h.g.x * g.x + h.h.x * g.y,
                k = h.g.y * g.x + h.h.y * g.y,
                h = d.I,
                g = a.xb,
                B = d.position.x + h.g.x * g.x + h.h.x * g.y,
                C = d.position.y + h.g.y * g.x + h.h.y * g.y,
                this.nb.x = -q,
                this.nb.y = -k,
                f = 0; f < a.Rd; f++)
                    h = b.I,
                    g = a.Cb[f].xb,
                    I = b.position.x + h.g.x * g.x + h.h.x * g.y,
                    g = b.position.y + h.g.y * g.x + h.h.y * g.y,
                    this.Cb[f].x = I + .5 * (e - (I - B) * q - (g - C) * k - c) * q,
                    this.Cb[f].y = g + .5 * (e - (I - B) * q - (g - C) * k - c) * k
            }
        }
    }
    ;
    Y.by = function() {
        this.Lh = new h;
        this.id = new w
    }
    ;
    Y.prototype.Set = function(a) {
        this.Lh.S(a.Lh);
        this.id.Set(a.id)
    }
    ;
    ia.ey = function() {}
    ;
    Object.defineProperty(ia.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.My
        }
    });
    Object.defineProperty(ia.prototype, "referenceEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.My = a;
            this.Vl.Tg = this.Vl.Tg & 4294967040 | this.My & 255
        }
    });
    Object.defineProperty(ia.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.Ky
        }
    });
    Object.defineProperty(ia.prototype, "incidentEdge", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.Ky = a;
            this.Vl.Tg = this.Vl.Tg & 4294902015 | this.Ky << 8 & 65280
        }
    });
    Object.defineProperty(ia.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.Ly
        }
    });
    Object.defineProperty(ia.prototype, "incidentVertex", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.Ly = a;
            this.Vl.Tg = this.Vl.Tg & 4278255615 | this.Ly << 16 & 16711680
        }
    });
    Object.defineProperty(ia.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.Jy
        }
    });
    Object.defineProperty(ia.prototype, "flip", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.Jy = a;
            this.Vl.Tg = this.Vl.Tg & 16777215 | this.Jy << 24 & 4278190080
        }
    })
}
)();
(function() {
    var a = Z.H.oa
      , b = Z.F.fb.$l
      , c = Z.F.fb.Qr
      , d = Z.F.fb.Rr
      , e = Z.F.fb.sv
      , f = Z.F.fb.uh
      , g = Z.F.fb.Bc
      , h = Z.H.Math.Lk
      , k = Z.H.Math.th
      , m = Z.H.Math.bm
      , l = Z.H.Math.ab
      , t = Z.F.xn
      , w = Z.F.ov
      , r = Z.F.pv
      , u = Z.F.qv
      , n = Z.F.tv;
    Z.lc(b, Z.F.fb.Bc);
    b.prototype.ua = Z.F.fb.Bc.prototype;
    b.$l = function() {
        Z.F.fb.Bc.Bc.apply(this, arguments);
        this.Ie = new l
    }
    ;
    b.prototype.hf = function() {
        var a = new b;
        a.Set(this);
        return a
    }
    ;
    b.prototype.Set = function(a) {
        this.ua.Set.call(this, a);
        Z.is(a, b) && this.Ie.S((a instanceof b ? a : null).Ie)
    }
    ;
    b.prototype.jp = function(a, b) {
        var c = b.I
          , d = b.position.x + (c.g.x * this.Ie.x + c.h.x * this.Ie.y)
          , c = b.position.y + (c.g.y * this.Ie.x + c.h.y * this.Ie.y);
        a.lowerBound.Set(d - this.tb, c - this.tb);
        a.upperBound.Set(d + this.tb, c + this.tb)
    }
    ;
    b.prototype.or = function(b, c) {
        void 0 === c && (c = 0);
        b.Wj = c * a.qb * this.tb * this.tb;
        b.Ki.S(this.Ie);
        b.mp = b.Wj * (.5 * this.tb * this.tb + (this.Ie.x * this.Ie.x + this.Ie.y * this.Ie.y))
    }
    ;
    b.prototype.Hu = function(a, b, c, d) {
        void 0 === b && (b = 0);
        c = k.he(c, this.Ie);
        var e = -(k.jf(a, c) - b);
        if (e < -this.tb + Number.MIN_VALUE)
            return 0;
        if (e > this.tb)
            return d.S(c),
            Math.PI * this.tb * this.tb;
        b = this.tb * this.tb;
        var f = e * e
          , e = b * (Math.asin(e / this.tb) + Math.PI / 2) + e * Math.sqrt(b - f);
        b = -2 / 3 * Math.pow(b - f, 1.5) / e;
        d.x = c.x + a.x * b;
        d.y = c.y + a.y * b;
        return e
    }
    ;
    b.prototype.$l = function(a) {
        void 0 === a && (a = 0);
        this.ua.Bc.call(this);
        this.ea = g.Up;
        this.tb = a
    }
    ;
    c.Qr = function() {}
    ;
    c.prototype.Qr = function() {}
    ;
    Z.lc(d, Z.F.fb.Bc);
    d.prototype.ua = Z.F.fb.Bc.prototype;
    d.Rr = function() {
        Z.F.fb.Bc.Bc.apply(this, arguments);
        new l;
        this.Pa = new l;
        this.ob = new l;
        this.RL = new l;
        this.SL = new l;
        this.nb = new l;
        this.Nf = new l;
        new l;
        this.TL = new l
    }
    ;
    d.prototype.jp = function(a, b) {
        var c = b.I
          , d = b.position.x + (c.g.x * this.Pa.x + c.h.x * this.Pa.y)
          , e = b.position.y + (c.g.y * this.Pa.x + c.h.y * this.Pa.y)
          , f = b.position.x + (c.g.x * this.ob.x + c.h.x * this.ob.y)
          , c = b.position.y + (c.g.y * this.ob.x + c.h.y * this.ob.y);
        d < f ? (a.lowerBound.x = d,
        a.upperBound.x = f) : (a.lowerBound.x = f,
        a.upperBound.x = d);
        e < c ? (a.lowerBound.y = e,
        a.upperBound.y = c) : (a.lowerBound.y = c,
        a.upperBound.y = e)
    }
    ;
    d.prototype.or = function(a) {
        a.Wj = 0;
        a.Ki.S(this.Pa);
        a.mp = 0
    }
    ;
    d.prototype.Hu = function(a, b, c, d) {
        void 0 === b && (b = 0);
        var e = new l(a.x * b,a.y * b)
          , f = k.he(c, this.Pa);
        c = k.he(c, this.ob);
        var g = k.jf(a, f) - b;
        a = k.jf(a, c) - b;
        if (0 < g) {
            if (0 < a)
                return 0;
            f.x = -a / (g - a) * f.x + g / (g - a) * c.x;
            f.y = -a / (g - a) * f.y + g / (g - a) * c.y
        } else
            0 < a && (c.x = -a / (g - a) * f.x + g / (g - a) * c.x,
            c.y = -a / (g - a) * f.y + g / (g - a) * c.y);
        d.x = (e.x + f.x + c.x) / 3;
        d.y = (e.y + f.y + c.y) / 3;
        return .5 * ((f.x - e.x) * (c.y - e.y) - (f.y - e.y) * (c.x - e.x))
    }
    ;
    d.prototype.Rr = function(b, c) {
        this.ua.Bc.call(this);
        this.ea = g.Wz;
        this.Pa = b;
        this.ob = c;
        this.Nf.Set(this.ob.x - this.Pa.x, this.ob.y - this.Pa.y);
        this.MA = this.Nf.rg();
        this.nb.Set(this.Nf.y, -this.Nf.x);
        this.RL.Set(-a.zv * (this.nb.x - this.Nf.x) + this.Pa.x, -a.zv * (this.nb.y - this.Nf.y) + this.Pa.y);
        this.SL.Set(-a.zv * (this.nb.x + this.Nf.x) + this.ob.x, -a.zv * (this.nb.y + this.Nf.y) + this.ob.y);
        this.TL.Set(-this.nb.x, -this.nb.y)
    }
    ;
    e.sv = function() {
        this.Wj = 0;
        this.Ki = new l(0,0);
        this.mp = 0
    }
    ;
    Z.lc(f, Z.F.fb.Bc);
    f.prototype.ua = Z.F.fb.Bc.prototype;
    f.uh = function() {
        Z.F.fb.Bc.Bc.apply(this, arguments)
    }
    ;
    f.prototype.hf = function() {
        var a = new f;
        a.Set(this);
        return a
    }
    ;
    f.prototype.Set = function(a) {
        this.ua.Set.call(this, a);
        if (Z.is(a, f)) {
            a = a instanceof f ? a : null;
            this.cl.S(a.cl);
            this.Ec = a.Ec;
            this.Er(this.Ec);
            for (var b = 0; b < this.Ec; b++)
                this.ja[b].S(a.ja[b]),
                this.hd[b].S(a.hd[b])
        }
    }
    ;
    f.prototype.av = function(a, b) {
        void 0 === b && (b = 0);
        var c = new hm, d, e;
        for (d = 0; d < a.length; ++d)
            e = a[d],
            c.push(e);
        this.wD(c, b)
    }
    ;
    f.YN = function(a, b) {
        void 0 === b && (b = 0);
        var c = new f;
        c.av(a, b);
        return c
    }
    ;
    f.prototype.wD = function(a, b) {
        void 0 === b && (b = 0);
        0 == b && (b = a.length);
        this.Ec = b;
        this.Er(b);
        var c;
        for (c = 0; c < this.Ec; c++)
            this.ja[c].S(a[c]);
        for (c = 0; c < this.Ec; ++c) {
            var d = k.od(this.ja[parseInt(c + 1 < this.Ec ? c + 1 : 0)], this.ja[parseInt(c)]);
            this.hd[c].S(k.Ml(d, 1));
            this.hd[c].rg()
        }
        this.cl = f.CI(this.ja, this.Ec)
    }
    ;
    f.bO = function(a, b) {
        void 0 === b && (b = 0);
        var c = new f;
        c.wD(a, b);
        return c
    }
    ;
    f.prototype.vD = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.Ec = 4;
        this.Er(4);
        this.ja[0].Set(-a, -b);
        this.ja[1].Set(a, -b);
        this.ja[2].Set(a, b);
        this.ja[3].Set(-a, b);
        this.hd[0].Set(0, -1);
        this.hd[1].Set(1, 0);
        this.hd[2].Set(0, 1);
        this.hd[3].Set(-1, 0);
        this.cl.hb()
    }
    ;
    f.ZN = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        var c = new f;
        c.vD(a, b);
        return c
    }
    ;
    f.prototype.PJ = function(a, b, c, d) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = null);
        void 0 === d && (d = 0);
        this.Ec = 4;
        this.Er(4);
        this.ja[0].Set(-a, -b);
        this.ja[1].Set(a, -b);
        this.ja[2].Set(a, b);
        this.ja[3].Set(-a, b);
        this.hd[0].Set(0, -1);
        this.hd[1].Set(1, 0);
        this.hd[2].Set(0, 1);
        this.hd[3].Set(-1, 0);
        this.cl = c;
        a = new m;
        a.position = c;
        a.I.Set(d);
        for (c = 0; c < this.Ec; ++c)
            this.ja[c] = k.he(a, this.ja[c]),
            this.hd[c] = k.Qe(a.I, this.hd[c])
    }
    ;
    f.aO = function(a, b, c, d) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = null);
        void 0 === d && (d = 0);
        var e = new f;
        e.PJ(a, b, c, d);
        return e
    }
    ;
    f.prototype.OJ = function(a, b) {
        this.Ec = 2;
        this.Er(2);
        this.ja[0].S(a);
        this.ja[1].S(b);
        this.cl.x = .5 * (a.x + b.x);
        this.cl.y = .5 * (a.y + b.y);
        this.hd[0] = k.Ml(k.od(b, a), 1);
        this.hd[0].rg();
        this.hd[1].x = -this.hd[0].x;
        this.hd[1].y = -this.hd[0].y
    }
    ;
    f.$N = function(a, b) {
        var c = new f;
        c.OJ(a, b);
        return c
    }
    ;
    f.prototype.jp = function(a, b) {
        for (var c = b.I, d = this.ja[0], e = b.position.x + (c.g.x * d.x + c.h.x * d.y), f = b.position.y + (c.g.y * d.x + c.h.y * d.y), g = e, h = f, k = 1; k < this.Ec; ++k)
            var d = this.ja[k]
              , l = b.position.x + (c.g.x * d.x + c.h.x * d.y)
              , d = b.position.y + (c.g.y * d.x + c.h.y * d.y)
              , e = e < l ? e : l
              , f = f < d ? f : d
              , g = g > l ? g : l
              , h = h > d ? h : d;
        a.lowerBound.x = e - this.tb;
        a.lowerBound.y = f - this.tb;
        a.upperBound.x = g + this.tb;
        a.upperBound.y = h + this.tb
    }
    ;
    f.prototype.or = function(a, b) {
        void 0 === b && (b = 0);
        if (2 == this.Ec)
            a.Ki.x = .5 * (this.ja[0].x + this.ja[1].x),
            a.Ki.y = .5 * (this.ja[0].y + this.ja[1].y),
            a.Wj = 0,
            a.mp = 0;
        else {
            for (var c = 0, d = 0, e = 0, f = 0, g = 1 / 3, h = 0; h < this.Ec; ++h)
                var k = this.ja[h]
                  , l = h + 1 < this.Ec ? this.ja[parseInt(h + 1)] : this.ja[0]
                  , m = k.x - 0
                  , n = k.y - 0
                  , q = l.x - 0
                  , C = l.y - 0
                  , B = m * C - n * q
                  , I = .5 * B
                  , e = e + I
                  , c = c + I * g * (0 + k.x + l.x)
                  , d = d + I * g * (0 + k.y + l.y)
                  , k = m
                  , f = f + B * (g * (.25 * (k * k + q * k + q * q) + (0 * k + 0 * q)) + 0 + (g * (.25 * (n * n + C * n + C * C) + (0 * n + 0 * C)) + 0));
            a.Wj = b * e;
            a.Ki.Set(1 / e * c, 1 / e * d);
            a.mp = b * f
        }
    }
    ;
    f.prototype.Hu = function(a, b, c, d) {
        void 0 === b && (b = 0);
        var f = k.Rl(c.I, a)
          , g = b - k.jf(a, c.position)
          , h = new im
          , m = 0
          , n = -1;
        b = -1;
        var t = !1;
        for (a = 0; a < this.Ec; ++a) {
            h[a] = k.jf(f, this.ja[a]) - g;
            var r = h[a] < -Number.MIN_VALUE;
            0 < a && (r ? t || (n = a - 1,
            m++) : t && (b = a - 1,
            m++));
            t = r
        }
        switch (m) {
        case 0:
            return t ? (a = new e,
            this.or(a, 1),
            d.S(k.he(c, a.Ki)),
            a.Wj) : 0;
        case 1:
            -1 == n ? n = this.Ec - 1 : b = this.Ec - 1
        }
        a = parseInt((n + 1) % this.Ec);
        f = parseInt((b + 1) % this.Ec);
        g = (0 - h[n]) / (h[a] - h[n]);
        h = (0 - h[b]) / (h[f] - h[b]);
        n = new l(this.ja[n].x * (1 - g) + this.ja[a].x * g,this.ja[n].y * (1 - g) + this.ja[a].y * g);
        b = new l(this.ja[b].x * (1 - h) + this.ja[f].x * h,this.ja[b].y * (1 - h) + this.ja[f].y * h);
        h = 0;
        g = new l;
        for (m = this.ja[a]; a != f; )
            a = (a + 1) % this.Ec,
            t = a == f ? b : this.ja[a],
            r = .5 * ((m.x - n.x) * (t.y - n.y) - (m.y - n.y) * (t.x - n.x)),
            h += r,
            g.x += r * (n.x + m.x + t.x) / 3,
            g.y += r * (n.y + m.y + t.y) / 3,
            m = t;
        g.ag(1 / h);
        d.S(k.he(c, g));
        return h
    }
    ;
    f.prototype.jy = function(a) {
        for (var b = 0, c = this.ja[0].x * a.x + this.ja[0].y * a.y, d = 1; d < this.Ec; ++d) {
            var e = this.ja[d].x * a.x + this.ja[d].y * a.y;
            e > c && (b = d,
            c = e)
        }
        return b
    }
    ;
    f.prototype.yr = function(a) {
        for (var b = 0, c = this.ja[0].x * a.x + this.ja[0].y * a.y, d = 1; d < this.Ec; ++d) {
            var e = this.ja[d].x * a.x + this.ja[d].y * a.y;
            e > c && (b = d,
            c = e)
        }
        return this.ja[b]
    }
    ;
    f.prototype.uh = function() {
        this.ua.Bc.call(this);
        this.ea = g.Vp;
        this.cl = new l;
        this.ja = new hm;
        this.hd = new hm
    }
    ;
    f.prototype.Er = function(a) {
        void 0 === a && (a = 0);
        for (var b = parseInt(this.ja.length); b < a; b++)
            this.ja[b] = new l,
            this.hd[b] = new l
    }
    ;
    f.CI = function(a, b) {
        void 0 === b && (b = 0);
        for (var c = new l, d = 0, e = 1 / 3, f = 0; f < b; ++f) {
            var g = a[f]
              , h = f + 1 < b ? a[parseInt(f + 1)] : a[0]
              , k = .5 * ((g.x - 0) * (h.y - 0) - (g.y - 0) * (h.x - 0))
              , d = d + k;
            c.x += k * e * (0 + g.x + h.x);
            c.y += k * e * (0 + g.y + h.y)
        }
        c.x *= 1 / d;
        c.y *= 1 / d;
        return c
    }
    ;
    f.dO = function(a, b, c) {
        void 0 === c && (c = 0);
        var d, e = new hm(c + 1);
        for (d = 0; d < c; ++d)
            e[d] = b[d];
        e[c] = e[0];
        b = Number.MAX_VALUE;
        for (d = 1; d <= c; ++d) {
            for (var f = e[parseInt(d - 1)], g = e[d].x - f.x, h = e[d].y - f.y, k = Math.sqrt(g * g + h * h), g = g / k, h = h / k, l = -h, m = g, n = k = Number.MAX_VALUE, q = -Number.MAX_VALUE, C = -Number.MAX_VALUE, B = 0; B < c; ++B) {
                var I = e[B].x - f.x
                  , P = e[B].y - f.y
                  , U = g * I + h * P
                  , I = l * I + m * P;
                U < k && (k = U);
                I < n && (n = I);
                U > q && (q = U);
                I > C && (C = I)
            }
            B = (q - k) * (C - n);
            B < .95 * b && (b = B,
            a.I.g.x = g,
            a.I.g.y = h,
            a.I.h.x = l,
            a.I.h.y = m,
            g = .5 * (k + q),
            h = .5 * (n + C),
            l = a.I,
            a.Ki.x = f.x + (l.g.x * g + l.h.x * h),
            a.Ki.y = f.y + (l.g.y * g + l.h.y * h),
            a.ZK.x = .5 * (q - k),
            a.ZK.y = .5 * (C - n))
        }
    }
    ;
    Z.Bd.push(function() {
        Z.F.fb.uh.sQ = new h
    });
    g.Bc = function() {}
    ;
    g.prototype.hf = function() {
        return null
    }
    ;
    g.prototype.Set = function(a) {
        this.tb = a.tb
    }
    ;
    g.prototype.Mc = function() {
        return this.ea
    }
    ;
    g.prototype.jp = function() {}
    ;
    g.prototype.or = function() {}
    ;
    g.prototype.Hu = function() {
        return 0
    }
    ;
    g.Ul = function(a, b, c, d) {
        var e = new w;
        e.ek = new u;
        e.ek.Set(a);
        e.fk = new u;
        e.fk.Set(c);
        e.cI = b;
        e.dI = d;
        e.iI = !0;
        a = new n;
        a.count = 0;
        b = new r;
        t.dy(b, a, e);
        return b.Ln < 10 * Number.MIN_VALUE
    }
    ;
    g.prototype.Bc = function() {
        this.ea = g.UK;
        this.tb = a.Yb
    }
    ;
    Z.Bd.push(function() {
        Z.F.fb.Bc.UK = -1;
        Z.F.fb.Bc.Up = 0;
        Z.F.fb.Bc.Vp = 1;
        Z.F.fb.Bc.Wz = 2;
        Z.F.fb.Bc.Pv = 3;
        Z.F.fb.Bc.dP = 1;
        Z.F.fb.Bc.fP = 0;
        Z.F.fb.Bc.iP = -1
    })
}
)();
(function() {
    var a = Z.H.Bp
      , b = Z.H.oa
      , c = Z.H.Math.th;
    a.Bp = function() {
        this.ev = this.fv = this.gv = 0
    }
    ;
    a.prototype.Bp = function(a, b, f) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === f && (f = 0);
        this.gv = Z.hi(255 * c.ec(a, 0, 1));
        this.fv = Z.hi(255 * c.ec(b, 0, 1));
        this.ev = Z.hi(255 * c.ec(f, 0, 1))
    }
    ;
    a.prototype.Set = function(a, b, f) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === f && (f = 0);
        this.gv = Z.hi(255 * c.ec(a, 0, 1));
        this.fv = Z.hi(255 * c.ec(b, 0, 1));
        this.ev = Z.hi(255 * c.ec(f, 0, 1))
    }
    ;
    Object.defineProperty(a.prototype, "r", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.gv = Z.hi(255 * c.ec(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "g", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.fv = Z.hi(255 * c.ec(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "b", {
        enumerable: !1,
        configurable: !0,
        set: function(a) {
            void 0 === a && (a = 0);
            this.ev = Z.hi(255 * c.ec(a, 0, 1))
        }
    });
    Object.defineProperty(a.prototype, "color", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.gv << 16 | this.fv << 8 | this.ev
        }
    });
    b.oa = function() {}
    ;
    b.iK = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return Math.sqrt(a * b)
    }
    ;
    b.jK = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return a > b ? a : b
    }
    ;
    b.xO = function() {}
    ;
    Z.Bd.push(function() {
        Z.H.oa.VERSION = "2.1alpha";
        Z.H.oa.uO = 65535;
        Z.H.oa.qb = Math.PI;
        Z.H.oa.Xg = 2;
        Z.H.oa.wv = .1;
        Z.H.oa.ND = 2;
        Z.H.oa.DO = 2 * b.Yb;
        Z.H.oa.Yb = .005;
        Z.H.oa.Bn = 2 / 180 * b.qb;
        Z.H.oa.zv = 8 * b.Yb;
        Z.H.oa.pK = 32;
        Z.H.oa.qK = 32;
        Z.H.oa.vK = 1;
        Z.H.oa.Wg = .2;
        Z.H.oa.xv = 8 / 180 * b.qb;
        Z.H.oa.Mp = 2;
        Z.H.oa.RD = b.Mp * b.Mp;
        Z.H.oa.Lp = .5 * b.qb;
        Z.H.oa.QD = b.Lp * b.Lp;
        Z.H.oa.tz = .2;
        Z.H.oa.rK = .5;
        Z.H.oa.PD = .01;
        Z.H.oa.OD = 2 / 180 * b.qb
    })
}
)();
(function() {
    var a = Z.H.Math.Lk
      , b = Z.H.Math.Gp
      , c = Z.H.Math.th
      , d = Z.H.Math.fs
      , e = Z.H.Math.bm
      , f = Z.H.Math.ab
      , g = Z.H.Math.Kp;
    a.Lk = function() {
        this.g = new f;
        this.h = new f
    }
    ;
    a.prototype.Lk = function() {
        this.cv()
    }
    ;
    a.Ku = function(b) {
        void 0 === b && (b = 0);
        var c = new a;
        c.Set(b);
        return c
    }
    ;
    a.ur = function(b, c) {
        var d = new a;
        d.QJ(b, c);
        return d
    }
    ;
    a.prototype.Set = function(a) {
        void 0 === a && (a = 0);
        var b = Math.cos(a);
        a = Math.sin(a);
        this.g.x = b;
        this.h.x = -a;
        this.g.y = a;
        this.h.y = b
    }
    ;
    a.prototype.QJ = function(a, b) {
        this.g.S(a);
        this.h.S(b)
    }
    ;
    a.prototype.hf = function() {
        var b = new a;
        b.on(this);
        return b
    }
    ;
    a.prototype.on = function(a) {
        this.g.S(a.g);
        this.h.S(a.h)
    }
    ;
    a.prototype.Gu = function(a) {
        this.g.x += a.g.x;
        this.g.y += a.g.y;
        this.h.x += a.h.x;
        this.h.y += a.h.y
    }
    ;
    a.prototype.cv = function() {
        this.g.x = 1;
        this.h.x = 0;
        this.g.y = 0;
        this.h.y = 1
    }
    ;
    a.prototype.hb = function() {
        this.g.x = 0;
        this.h.x = 0;
        this.g.y = 0;
        this.h.y = 0
    }
    ;
    a.prototype.qh = function() {
        return Math.atan2(this.g.y, this.g.x)
    }
    ;
    a.prototype.hy = function(a) {
        var b = this.g.x
          , c = this.h.x
          , d = this.g.y
          , e = this.h.y
          , f = b * e - c * d;
        0 != f && (f = 1 / f);
        a.g.x = f * e;
        a.h.x = -f * c;
        a.g.y = -f * d;
        a.h.y = f * b
    }
    ;
    a.prototype.pn = function(a, b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        var d = this.g.x
          , e = this.h.x
          , f = this.g.y
          , g = this.h.y
          , h = d * g - e * f;
        0 != h && (h = 1 / h);
        a.x = h * (g * b - e * c);
        a.y = h * (d * c - f * b);
        return a
    }
    ;
    a.prototype.we = function() {
        this.g.we();
        this.h.we()
    }
    ;
    b.Gp = function() {
        this.g = new g;
        this.h = new g;
        this.Xa = new g
    }
    ;
    b.prototype.Gp = function(a, b, c) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        void 0 === c && (c = null);
        a || b || c ? (this.g.S(a),
        this.h.S(b),
        this.Xa.S(c)) : (this.g.hb(),
        this.h.hb(),
        this.Xa.hb())
    }
    ;
    b.prototype.hf = function() {
        return new b(this.g,this.h,this.Xa)
    }
    ;
    b.prototype.on = function(a) {
        this.g.S(a.g);
        this.h.S(a.h);
        this.Xa.S(a.Xa)
    }
    ;
    b.prototype.Gu = function(a) {
        this.g.x += a.g.x;
        this.g.y += a.g.y;
        this.g.z += a.g.z;
        this.h.x += a.h.x;
        this.h.y += a.h.y;
        this.h.z += a.h.z;
        this.Xa.x += a.Xa.x;
        this.Xa.y += a.Xa.y;
        this.Xa.z += a.Xa.z
    }
    ;
    b.prototype.cv = function() {
        this.g.x = 1;
        this.h.x = 0;
        this.Xa.x = 0;
        this.g.y = 0;
        this.h.y = 1;
        this.Xa.y = 0;
        this.g.z = 0;
        this.h.z = 0;
        this.Xa.z = 1
    }
    ;
    b.prototype.hb = function() {
        this.g.x = 0;
        this.h.x = 0;
        this.Xa.x = 0;
        this.g.y = 0;
        this.h.y = 0;
        this.Xa.y = 0;
        this.g.z = 0;
        this.h.z = 0;
        this.Xa.z = 0
    }
    ;
    b.prototype.wp = function(a, b, c) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        var d = this.g.x
          , e = this.h.x
          , f = this.g.y
          , g = this.h.y
          , h = d * g - e * f;
        0 != h && (h = 1 / h);
        a.x = h * (g * b - e * c);
        a.y = h * (d * c - f * b);
        return a
    }
    ;
    b.prototype.Jr = function(a, b, c, d) {
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        var e = this.g.x
          , f = this.g.y
          , g = this.g.z
          , h = this.h.x
          , k = this.h.y
          , l = this.h.z
          , m = this.Xa.x
          , A = this.Xa.y
          , v = this.Xa.z
          , H = e * (k * v - l * A) + f * (l * m - h * v) + g * (h * A - k * m);
        0 != H && (H = 1 / H);
        a.x = H * (b * (k * v - l * A) + c * (l * m - h * v) + d * (h * A - k * m));
        a.y = H * (e * (c * v - d * A) + f * (d * m - b * v) + g * (b * A - c * m));
        a.z = H * (e * (k * d - l * c) + f * (l * b - h * d) + g * (h * c - k * b));
        return a
    }
    ;
    c.th = function() {}
    ;
    c.np = function(a) {
        void 0 === a && (a = 0);
        return isFinite(a)
    }
    ;
    c.jf = function(a, b) {
        return a.x * b.x + a.y * b.y
    }
    ;
    c.kp = function(a, b) {
        return a.x * b.y - a.y * b.x
    }
    ;
    c.Ml = function(a, b) {
        void 0 === b && (b = 0);
        return new f(b * a.y,-b * a.x)
    }
    ;
    c.XC = function(a, b) {
        void 0 === a && (a = 0);
        return new f(-a * b.y,a * b.x)
    }
    ;
    c.Qe = function(a, b) {
        return new f(a.g.x * b.x + a.h.x * b.y,a.g.y * b.x + a.h.y * b.y)
    }
    ;
    c.Rl = function(a, b) {
        return new f(c.jf(b, a.g),c.jf(b, a.h))
    }
    ;
    c.he = function(a, b) {
        var d = c.Qe(a.I, b);
        d.x += a.position.x;
        d.y += a.position.y;
        return d
    }
    ;
    c.VI = function(a, b) {
        var d = c.od(b, a.position)
          , e = d.x * a.I.g.x + d.y * a.I.g.y;
        d.y = d.x * a.I.h.x + d.y * a.I.h.y;
        d.x = e;
        return d
    }
    ;
    c.SC = function(a, b) {
        return new f(a.x + b.x,a.y + b.y)
    }
    ;
    c.od = function(a, b) {
        return new f(a.x - b.x,a.y - b.y)
    }
    ;
    c.dy = function(a, b) {
        var c = a.x - b.x
          , d = a.y - b.y;
        return Math.sqrt(c * c + d * d)
    }
    ;
    c.eO = function(a, b) {
        var c = a.x - b.x
          , d = a.y - b.y;
        return c * c + d * d
    }
    ;
    c.jO = function(a, b) {
        void 0 === a && (a = 0);
        return new f(a * b.x,a * b.y)
    }
    ;
    c.XN = function(b, d) {
        return a.ur(c.SC(b.g, d.g), c.SC(b.h, d.h))
    }
    ;
    c.kO = function(b, d) {
        return a.ur(c.Qe(b, d.g), c.Qe(b, d.h))
    }
    ;
    c.lO = function(b, d) {
        var e = new f(c.jf(b.g, d.g),c.jf(b.h, d.g))
          , g = new f(c.jf(b.g, d.h),c.jf(b.h, d.h));
        return a.ur(e, g)
    }
    ;
    c.we = function(a) {
        void 0 === a && (a = 0);
        return 0 < a ? a : -a
    }
    ;
    c.PC = function(a) {
        return new f(c.we(a.x),c.we(a.y))
    }
    ;
    c.WN = function(b) {
        return a.ur(c.PC(b.g), c.PC(b.h))
    }
    ;
    c.mn = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return a < b ? a : b
    }
    ;
    c.nD = function(a, b) {
        return new f(c.mn(a.x, b.x),c.mn(a.y, b.y))
    }
    ;
    c.Cf = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return a > b ? a : b
    }
    ;
    c.mD = function(a, b) {
        return new f(c.Cf(a.x, b.x),c.Cf(a.y, b.y))
    }
    ;
    c.ec = function(a, b, c) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        return a < b ? b : a > c ? c : a
    }
    ;
    c.cO = function(a, b, d) {
        return c.mD(b, c.nD(a, d))
    }
    ;
    c.UJ = function(a, b) {
        var c = a[0];
        a[0] = b[0];
        b[0] = c
    }
    ;
    c.sO = function() {
        return 2 * Math.random() - 1
    }
    ;
    c.tO = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return (b - a) * Math.random() + a
    }
    ;
    c.mO = function(a) {
        void 0 === a && (a = 0);
        a |= a >> 1 & 2147483647;
        a |= a >> 2 & 1073741823;
        a |= a >> 4 & 268435455;
        a |= a >> 8 & 16777215;
        return (a | a >> 16 & 65535) + 1
    }
    ;
    c.hO = function(a) {
        void 0 === a && (a = 0);
        return 0 < a && 0 == (a & a - 1)
    }
    ;
    Z.Bd.push(function() {
        Z.H.Math.th.kK = new f(0,0);
        Z.H.Math.th.hK = a.ur(new f(1,0), new f(0,1));
        Z.H.Math.th.zO = new e(c.kK,c.hK)
    });
    d.fs = function() {
        this.Z = new f;
        this.Te = new f;
        this.D = new f
    }
    ;
    d.prototype.Set = function(a) {
        this.Z.S(a.Z);
        this.Te.S(a.Te);
        this.D.S(a.D);
        this.Nh = a.Nh;
        this.V = a.V;
        this.Wf = a.Wf
    }
    ;
    d.prototype.hf = function() {
        var a = new d;
        a.Z.S(this.Z);
        a.Te.S(this.Te);
        a.D.S(this.D);
        a.Nh = this.Nh;
        a.V = this.V;
        a.Wf = this.Wf;
        return a
    }
    ;
    d.prototype.Yf = function(a, b) {
        void 0 === b && (b = 0);
        a.position.x = (1 - b) * this.Te.x + b * this.D.x;
        a.position.y = (1 - b) * this.Te.y + b * this.D.y;
        a.I.Set((1 - b) * this.Nh + b * this.V);
        var c = a.I;
        a.position.x -= c.g.x * this.Z.x + c.h.x * this.Z.y;
        a.position.y -= c.g.y * this.Z.x + c.h.y * this.Z.y
    }
    ;
    d.prototype.Kl = function(a) {
        void 0 === a && (a = 0);
        if (this.Wf < a && 1 - this.Wf > Number.MIN_VALUE) {
            var b = (a - this.Wf) / (1 - this.Wf);
            this.Te.x = (1 - b) * this.Te.x + b * this.D.x;
            this.Te.y = (1 - b) * this.Te.y + b * this.D.y;
            this.Nh = (1 - b) * this.Nh + b * this.V;
            this.Wf = a
        }
    }
    ;
    e.bm = function() {
        this.position = new f;
        this.I = new a
    }
    ;
    e.prototype.bm = function(a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        a && (this.position.S(a),
        this.I.on(b))
    }
    ;
    e.prototype.Ib = function(a, b) {
        this.position.S(a);
        this.I.on(b)
    }
    ;
    e.prototype.cv = function() {
        this.position.hb();
        this.I.cv()
    }
    ;
    e.prototype.Set = function(a) {
        this.position.S(a.position);
        this.I.on(a.I)
    }
    ;
    e.prototype.qh = function() {
        return Math.atan2(this.I.g.y, this.I.g.x)
    }
    ;
    f.ab = function() {}
    ;
    f.prototype.ab = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.x = a;
        this.y = b
    }
    ;
    f.prototype.hb = function() {
        this.y = this.x = 0
    }
    ;
    f.prototype.Set = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.x = a;
        this.y = b
    }
    ;
    f.prototype.S = function(a) {
        this.x = a.x;
        this.y = a.y
    }
    ;
    f.prototype.Ol = function() {
        return new f(-this.x,-this.y)
    }
    ;
    f.prototype.pD = function() {
        this.x = -this.x;
        this.y = -this.y
    }
    ;
    f.TI = function() {
        var a = 0
          , b = 0;
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        return new f(a,b)
    }
    ;
    f.prototype.hf = function() {
        return new f(this.x,this.y)
    }
    ;
    f.prototype.hp = function(a) {
        this.x += a.x;
        this.y += a.y
    }
    ;
    f.prototype.ED = function(a) {
        this.x -= a.x;
        this.y -= a.y
    }
    ;
    f.prototype.ag = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a
    }
    ;
    f.prototype.Ml = function(a) {
        void 0 === a && (a = 0);
        var b = this.x;
        this.x = a * this.y;
        this.y = -a * b
    }
    ;
    f.prototype.XC = function(a) {
        void 0 === a && (a = 0);
        var b = this.x;
        this.x = -a * this.y;
        this.y = a * b
    }
    ;
    f.prototype.nD = function(a) {
        this.x = this.x < a.x ? this.x : a.x;
        this.y = this.y < a.y ? this.y : a.y
    }
    ;
    f.prototype.mD = function(a) {
        this.x = this.x > a.x ? this.x : a.x;
        this.y = this.y > a.y ? this.y : a.y
    }
    ;
    f.prototype.we = function() {
        0 > this.x && (this.x = -this.x);
        0 > this.y && (this.y = -this.y)
    }
    ;
    f.prototype.Bk = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    ;
    f.prototype.ny = function() {
        return this.x * this.x + this.y * this.y
    }
    ;
    f.prototype.rg = function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y);
        if (a < Number.MIN_VALUE)
            return 0;
        var b = 1 / a;
        this.x *= b;
        this.y *= b;
        return a
    }
    ;
    f.prototype.np = function() {
        return c.np(this.x) && c.np(this.y)
    }
    ;
    g.Kp = function() {}
    ;
    g.prototype.Kp = function(a, b, c) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = b;
        this.z = c
    }
    ;
    g.prototype.hb = function() {
        this.x = this.y = this.z = 0
    }
    ;
    g.prototype.Set = function(a, b, c) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.x = a;
        this.y = b;
        this.z = c
    }
    ;
    g.prototype.S = function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    }
    ;
    g.prototype.Ol = function() {
        return new g(-this.x,-this.y,-this.z)
    }
    ;
    g.prototype.pD = function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    }
    ;
    g.prototype.hf = function() {
        return new g(this.x,this.y,this.z)
    }
    ;
    g.prototype.hp = function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    }
    ;
    g.prototype.ED = function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    }
    ;
    g.prototype.ag = function(a) {
        void 0 === a && (a = 0);
        this.x *= a;
        this.y *= a;
        this.z *= a
    }
}
)();
(function() {
    var a = Z.H.Math.th
      , b = Z.H.Math.fs
      , c = Z.H.Math.bm
      , d = Z.H.Math.ab
      , e = Z.H.Bp
      , f = Z.H.oa
      , g = Z.F.kv
      , h = Z.F.nv
      , k = Z.F.rv
      , m = Z.F.fb.sv
      , l = Z.i.Nc
      , t = Z.i.wn
      , w = Z.i.lv
      , r = Z.i.$y
      , u = Z.i.mv
      , n = Z.i.Ep
      , z = Z.i.Vg
      , E = Z.i.dz
      , A = Z.i.hz
      , v = Z.i.Sr
      , H = Z.i.wj
      , G = Z.i.Fp
      , O = Z.i.vv
      , N = Z.i.ug
      , J = Z.i.qa.yb
      , K = Z.i.qa.Cp
      , L = Z.i.qa.am
      , M = Z.i.N.pa;
    l.Nc = function() {
        this.K = new c;
        this.f = new b;
        this.s = new d;
        this.Nj = new d
    }
    ;
    l.prototype.qr = function(a) {
        if (1 == this.Sd.zr())
            return null;
        var b = new v;
        b.pg(this, this.K, a);
        this.W & l.ys && b.rr(this.Sd.Lf.io, this.K);
        b.La = this.Mj;
        this.Mj = b;
        ++this.JA;
        b.R = this;
        0 < b.ft && this.Fy();
        this.Sd.W |= N.Yz;
        return b
    }
    ;
    l.prototype.ZC = function(a) {
        if (1 != this.Sd.zr()) {
            for (var b = this.Mj, c = null; null != b; ) {
                if (b == a) {
                    c ? c.La = a.La : this.Mj = a.La;
                    break
                }
                c = b;
                b = b.La
            }
            for (b = this.mc; b; ) {
                var c = b.rd
                  , b = b.next
                  , d = c.Yc;
                a != c.Qc && a != d || this.Sd.Lf.Xd(c)
            }
            this.W & l.ys && a.lp(this.Sd.Lf.io);
            a.Xd();
            a.R = null;
            a.La = null;
            --this.JA;
            this.Fy()
        }
    }
    ;
    l.prototype.dv = function(a, b) {
        void 0 === b && (b = 0);
        var c;
        if (1 != this.Sd.zr()) {
            this.K.I.Set(b);
            this.K.position.S(a);
            c = this.K.I;
            var d = this.f.Z;
            this.f.D.x = c.g.x * d.x + c.h.x * d.y;
            this.f.D.y = c.g.y * d.x + c.h.y * d.y;
            this.f.D.x += this.K.position.x;
            this.f.D.y += this.K.position.y;
            this.f.Te.S(this.f.D);
            this.f.Nh = this.f.V = b;
            d = this.Sd.Lf.io;
            for (c = this.Mj; c; c = c.La)
                c.FD(d, this.K, this.K);
            this.Sd.Lf.Ju()
        }
    }
    ;
    l.prototype.Yf = function() {
        return this.K
    }
    ;
    l.prototype.qh = function() {
        return this.f.V
    }
    ;
    l.prototype.Sl = function(a) {
        this.ea != l.Kd && this.s.S(a)
    }
    ;
    l.prototype.NJ = function(a) {
        void 0 === a && (a = 0);
        this.ea != l.Kd && (this.P = a)
    }
    ;
    l.prototype.Ll = function(a) {
        this.ea == l.Be && (0 == this.Yd() && this.Ab(!0),
        this.Nj.x += a.x,
        this.Nj.y += a.y)
    }
    ;
    l.prototype.LJ = function() {
        this.ea == l.Be && (0 == this.Yd() && this.Ab(!0),
        this.Nj.x = 0,
        this.Nj.y = 0)
    }
    ;
    l.prototype.$x = function(a) {
        void 0 === a && (a = 0);
        this.ea == l.Be && (0 == this.Yd() && this.Ab(!0),
        this.ot += a)
    }
    ;
    l.prototype.MJ = function() {
        this.ea == l.Be && (0 == this.Yd() && this.Ab(!0),
        this.ot = 0)
    }
    ;
    l.prototype.sI = function(a, b) {
        this.ea == l.Be && (0 == this.Yd() && this.Ab(!0),
        this.s.x += this.X * a.x,
        this.s.y += this.X * a.y,
        this.P += this.ia * ((b.x - this.f.D.x) * a.y - (b.y - this.f.D.y) * a.x))
    }
    ;
    l.prototype.eD = function(a) {
        a.Wj = this.ba;
        a.mp = this.Yh;
        a.Ki.S(this.f.Z)
    }
    ;
    l.prototype.Fy = function() {
        this.ia = this.Yh = this.X = this.ba = 0;
        this.f.Z.hb();
        if (this.ea != l.Kd && this.ea != l.oK) {
            for (var b = d.TI(), c = this.Mj; c; c = c.La)
                if (0 != c.ft) {
                    var e = c.eD();
                    this.ba += e.Wj;
                    b.x += e.Ki.x * e.Wj;
                    b.y += e.Ki.y * e.Wj;
                    this.Yh += e.mp
                }
            0 < this.ba ? (this.X = 1 / this.ba,
            b.x *= this.X,
            b.y *= this.X) : this.X = this.ba = 1;
            0 < this.Yh && 0 == (this.W & l.TE) ? (this.Yh -= this.ba * (b.x * b.x + b.y * b.y),
            this.Yh *= this.YL,
            this.ia = 1 / this.Yh) : this.ia = this.Yh = 0;
            c = this.f.D.hf();
            this.f.Z.S(b);
            this.f.Te.S(a.he(this.K, this.f.Z));
            this.f.D.S(this.f.Te);
            this.s.x += this.P * -(this.f.D.y - c.y);
            this.s.y += this.P * +(this.f.D.x - c.x)
        }
    }
    ;
    l.prototype.Ou = function(a) {
        var b = this.K.I;
        a = new d(b.g.x * a.x + b.h.x * a.y,b.g.y * a.x + b.h.y * a.y);
        a.x += this.K.position.x;
        a.y += this.K.position.y;
        return a
    }
    ;
    l.prototype.ky = function(b) {
        return a.Qe(this.K.I, b)
    }
    ;
    l.prototype.Xf = function(b) {
        return a.VI(this.K, b)
    }
    ;
    l.prototype.iy = function(b) {
        return a.Rl(this.K.I, b)
    }
    ;
    l.prototype.JI = function(a) {
        return new d(this.s.x - this.P * (a.y - this.f.D.y),this.s.y + this.P * (a.x - this.f.D.x))
    }
    ;
    l.prototype.Mc = function() {
        return this.ea
    }
    ;
    l.prototype.Pu = function() {
        return (this.W & l.Uz) == l.Uz
    }
    ;
    l.prototype.Ab = function(a) {
        a ? (this.W |= l.zs,
        this.wo = 0) : (this.W &= ~l.zs,
        this.wo = 0,
        this.s.hb(),
        this.P = 0,
        this.Nj.hb(),
        this.ot = 0)
    }
    ;
    l.prototype.Yd = function() {
        return (this.W & l.zs) == l.zs
    }
    ;
    l.prototype.fn = function() {
        return (this.W & l.ys) == l.ys
    }
    ;
    l.prototype.Ai = function() {
        return this.hl
    }
    ;
    l.prototype.Gy = function(a) {
        this.hl = a
    }
    ;
    l.prototype.Nc = function(a, b) {
        this.W = 0;
        a.gE && (this.W |= l.Uz);
        a.kF && (this.W |= l.TE);
        a.cK && (this.W |= l.Tz);
        a.gK && (this.W |= l.zs);
        a.active && (this.W |= l.ys);
        this.Sd = b;
        this.K.position.S(a.position);
        this.K.I.Set(a.angle);
        this.f.Z.hb();
        this.f.Wf = 1;
        this.f.Nh = this.f.V = a.angle;
        var c = this.K.I
          , d = this.f.Z;
        this.f.D.x = c.g.x * d.x + c.h.x * d.y;
        this.f.D.y = c.g.y * d.x + c.h.y * d.y;
        this.f.D.x += this.K.position.x;
        this.f.D.y += this.K.position.y;
        this.f.Te.S(this.f.D);
        this.mc = this.rm = this.yd = null;
        this.HA = 0;
        this.La = this.Je = null;
        this.s.S(a.KF);
        this.P = a.fK;
        this.aM = a.JF;
        this.NL = a.dK;
        this.XF = a.AF;
        this.Nj.Set(0, 0);
        this.wo = this.ot = 0;
        this.ea = a.type;
        this.X = this.ea == l.Be ? this.ba = 1 : this.ba = 0;
        this.ia = this.Yh = 0;
        this.YL = a.rL;
        this.hl = a.Pg;
        this.Mj = null;
        this.JA = 0
    }
    ;
    l.prototype.GD = function() {
        var a = l.vN;
        a.I.Set(this.f.Nh);
        var b = a.I
          , c = this.f.Z;
        a.position.x = this.f.Te.x - (b.g.x * c.x + b.h.x * c.y);
        a.position.y = this.f.Te.y - (b.g.y * c.x + b.h.y * c.y);
        c = this.Sd.Lf.io;
        for (b = this.Mj; b; b = b.La)
            b.FD(c, a, this.K)
    }
    ;
    l.prototype.pd = function() {
        this.K.I.Set(this.f.V);
        var a = this.K.I
          , b = this.f.Z;
        this.K.position.x = this.f.D.x - (a.g.x * b.x + a.h.x * b.y);
        this.K.position.y = this.f.D.y - (a.g.y * b.x + a.h.y * b.y)
    }
    ;
    l.prototype.Ir = function(a) {
        if (this.ea != l.Be && a.ea != l.Be)
            return !1;
        for (var b = this.yd; b; b = b.next)
            if (b.Hh == a && 0 == b.Zk.SF)
                return !1;
        return !0
    }
    ;
    l.prototype.Kl = function(a) {
        void 0 === a && (a = 0);
        this.f.Kl(a);
        this.f.D.S(this.f.Te);
        this.f.V = this.f.Nh;
        this.pd()
    }
    ;
    Z.Bd.push(function() {
        Z.i.Nc.vN = new c;
        Z.i.Nc.Ld = 1;
        Z.i.Nc.zs = 2;
        Z.i.Nc.Tz = 4;
        Z.i.Nc.Uz = 8;
        Z.i.Nc.TE = 16;
        Z.i.Nc.ys = 32;
        Z.i.Nc.Kd = 0;
        Z.i.Nc.oK = 1;
        Z.i.Nc.Be = 2
    });
    t.wn = function() {
        this.position = new d;
        this.KF = new d
    }
    ;
    t.prototype.wn = function() {
        this.Pg = null;
        this.position.Set(0, 0);
        this.angle = 0;
        this.KF.Set(0, 0);
        this.dK = this.JF = this.fK = 0;
        this.gK = this.cK = !0;
        this.gE = this.kF = !1;
        this.type = l.Kd;
        this.active = !0;
        this.rL = 1
    }
    ;
    w.lv = function() {}
    ;
    w.prototype.Ir = function(a, b) {
        var c = a.dD()
          , d = b.dD();
        return c.Xn == d.Xn && 0 != c.Xn ? 0 < c.Xn : 0 != (c.rt & d.ns) && 0 != (c.ns & d.rt)
    }
    ;
    Z.Bd.push(function() {
        Z.i.lv.lK = new w
    });
    r.$y = function() {
        this.rM = new im(f.Xg);
        this.JN = new im(f.Xg)
    }
    ;
    u.mv = function() {}
    ;
    u.prototype.rD = function() {}
    ;
    Z.Bd.push(function() {
        Z.i.mv.mK = new u
    });
    n.Ep = function() {}
    ;
    n.prototype.Ep = function() {
        this.Sd = null;
        this.Zh = 0;
        this.UF = w.lK;
        this.dt = u.mK;
        this.TF = new K(this.qm);
        this.io = new k
    }
    ;
    n.prototype.rI = function(a, b) {
        var c = a instanceof v ? a : null
          , d = b instanceof v ? b : null
          , e = c.R
          , f = d.R;
        if (e != f) {
            for (var g = f.mc; g; ) {
                if (g.Hh == e) {
                    var q = g.rd.Qc
                      , h = g.rd.Yc;
                    if (q == c && h == d || q == d && h == c)
                        return
                }
                g = g.next
            }
            0 != f.Ir(e) && 0 != this.UF.Ir(c, d) && (g = this.TF.pg(c, d),
            c = g.Qc,
            d = g.Yc,
            e = c.R,
            f = d.R,
            g.Je = null,
            g.La = this.Sd.mc,
            null != this.Sd.mc && (this.Sd.mc.Je = g),
            this.Sd.mc = g,
            g.pf.rd = g,
            g.pf.Hh = f,
            g.pf.ad = null,
            g.pf.next = e.mc,
            null != e.mc && (e.mc.ad = g.pf),
            e.mc = g.pf,
            g.qf.rd = g,
            g.qf.Hh = e,
            g.qf.ad = null,
            g.qf.next = f.mc,
            null != f.mc && (f.mc.ad = g.qf),
            f.mc = g.qf,
            ++this.Sd.Zh)
        }
    }
    ;
    n.prototype.Ju = function() {
        this.io.YJ(Z.gL(this, this.rI))
    }
    ;
    n.prototype.Xd = function(a) {
        var b = a.Qc.R
          , c = a.Yc.R;
        a.Je && (a.Je.La = a.La);
        a.La && (a.La.Je = a.Je);
        a == this.Sd.mc && (this.Sd.mc = a.La);
        a.pf.ad && (a.pf.ad.next = a.pf.next);
        a.pf.next && (a.pf.next.ad = a.pf.ad);
        a.pf == b.mc && (b.mc = a.pf.next);
        a.qf.ad && (a.qf.ad.next = a.qf.next);
        a.qf.next && (a.qf.next.ad = a.qf.ad);
        a.qf == c.mc && (c.mc = a.qf.next);
        this.TF.Xd(a);
        --this.Zh
    }
    ;
    n.prototype.xI = function() {
        for (var a = this.Sd.mc; a; ) {
            var b = a.Qc
              , c = a.Yc
              , d = b.R
              , e = c.R;
            if (0 == d.Yd() && 0 == e.Yd())
                a = a.La;
            else {
                if (a.W & J.Xz) {
                    if (0 == e.Ir(d)) {
                        b = a;
                        a = b.La;
                        this.Xd(b);
                        continue
                    }
                    if (0 == this.UF.Ir(b, c)) {
                        b = a;
                        a = b.La;
                        this.Xd(b);
                        continue
                    }
                    a.W &= ~J.Xz
                }
                0 == this.io.Ul(b.to, c.to) ? (b = a,
                a = b.La,
                this.Xd(b)) : (a.HD(this.dt),
                a = a.La)
            }
        }
    }
    ;
    Z.Bd.push(function() {
        Z.i.Ep.qQ = new h
    });
    z.Vg = function() {}
    ;
    z.prototype.Vg = function() {}
    ;
    Z.Bd.push(function() {
        Z.i.Vg.hP = 1;
        Z.i.Vg.eP = 2;
        Z.i.Vg.aP = 4;
        Z.i.Vg.gP = 8;
        Z.i.Vg.bP = 16;
        Z.i.Vg.cP = 32
    });
    E.dz = function() {}
    ;
    A.hz = function() {
        this.ns = 1;
        this.rt = 65535;
        this.Xn = 0
    }
    ;
    A.prototype.hf = function() {
        var a = new A;
        a.ns = this.ns;
        a.rt = this.rt;
        a.Xn = this.Xn;
        return a
    }
    ;
    v.Sr = function() {
        this.WF = new A
    }
    ;
    v.prototype.Mc = function() {
        return this.Sc.Mc()
    }
    ;
    v.prototype.gn = function() {
        return this.ZL
    }
    ;
    v.prototype.dD = function() {
        return this.WF.hf()
    }
    ;
    v.prototype.Ai = function() {
        return this.hl
    }
    ;
    v.prototype.Gy = function(a) {
        this.hl = a
    }
    ;
    v.prototype.eD = function(a) {
        void 0 === a && (a = null);
        null == a && (a = new m);
        this.Sc.or(a, this.ft);
        return a
    }
    ;
    v.prototype.yD = function(a) {
        void 0 === a && (a = 0);
        this.ft = a
    }
    ;
    v.prototype.AD = function(a) {
        void 0 === a && (a = 0);
        this.uw = a
    }
    ;
    v.prototype.DD = function(a) {
        void 0 === a && (a = 0);
        this.zw = a
    }
    ;
    v.prototype.Sr = function() {
        this.iq = new g;
        this.Sc = this.La = this.R = this.hl = null;
        this.zw = this.uw = this.ft = 0
    }
    ;
    v.prototype.pg = function(a, b, c) {
        this.hl = c.Pg;
        this.uw = c.Ve;
        this.zw = c.cf;
        this.R = a;
        this.La = null;
        this.WF = c.filter.hf();
        this.ZL = c.BL;
        this.Sc = c.shape.hf();
        this.ft = c.xh
    }
    ;
    v.prototype.Xd = function() {
        this.Sc = null
    }
    ;
    v.prototype.rr = function(a, b) {
        this.Sc.jp(this.iq, b);
        this.to = a.rr(this.iq, this)
    }
    ;
    v.prototype.lp = function(a) {
        null != this.to && (a.lp(this.to),
        this.to = null)
    }
    ;
    v.prototype.FD = function(b, c, d) {
        if (this.to) {
            var e = new g
              , f = new g;
            this.Sc.jp(e, c);
            this.Sc.jp(f, d);
            this.iq.ip(e, f);
            c = a.od(d.position, c.position);
            b.Dy(this.to, this.iq, c)
        }
    }
    ;
    H.wj = function() {
        this.filter = new A
    }
    ;
    H.prototype.wj = function() {
        this.Pg = this.shape = null;
        this.Ve = .2;
        this.xh = this.cf = 0;
        this.filter.ns = 1;
        this.filter.rt = 65535;
        this.filter.Xn = 0;
        this.BL = !1
    }
    ;
    G.Fp = function() {}
    ;
    G.prototype.Fp = function() {
        this.Kj = new hm;
        this.lq = new hm;
        this.Yi = new hm
    }
    ;
    G.prototype.Ib = function(a, b, c, d, e, f) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.PL = b;
        this.$L = c;
        this.Gg = this.Zh = this.Kf = 0;
        this.qm = d;
        this.bM = e;
        this.jo = f;
        for (d = this.Kj.length; d < a; d++)
            this.Kj[d] = null;
        for (d = this.lq.length; d < b; d++)
            this.lq[d] = null;
        for (d = this.Yi.length; d < c; d++)
            this.Yi[d] = null
    }
    ;
    G.prototype.ay = function() {
        this.Gg = this.Zh = this.Kf = 0
    }
    ;
    G.prototype.pn = function(b, c, d) {
        var e, g, h;
        for (e = 0; e < this.Kf; ++e)
            g = this.Kj[e],
            g.Mc() == l.Be && (g.s.x += b.rb * (c.x * g.XF + g.X * g.Nj.x),
            g.s.y += b.rb * (c.y * g.XF + g.X * g.Nj.y),
            g.P += b.rb * g.ia * g.ot,
            g.s.ag(a.ec(1 - b.rb * g.aM, 0, 1)),
            g.P *= a.ec(1 - b.rb * g.NL, 0, 1));
        this.jo.Ib(b, this.lq, this.Zh, this.qm);
        c = this.jo;
        c.rh(b);
        for (e = 0; e < this.Gg; ++e)
            h = this.Yi[e],
            h.rh(b);
        for (e = 0; e < b.wi; ++e) {
            for (g = 0; g < this.Gg; ++g)
                h = this.Yi[g],
                h.Sg(b);
            c.Sg()
        }
        for (e = 0; e < this.Gg; ++e)
            h = this.Yi[e],
            h.fy();
        c.fy();
        for (e = 0; e < this.Kf; ++e)
            if (g = this.Kj[e],
            g.Mc() != l.Kd) {
                var q = b.rb * g.s.x
                  , k = b.rb * g.s.y;
                q * q + k * k > f.RD && (g.s.rg(),
                g.s.x = g.s.x * f.Mp * b.Vh,
                g.s.y = g.s.y * f.Mp * b.Vh);
                q = b.rb * g.P;
                q * q > f.QD && (g.P = 0 > g.P ? -f.Lp * b.Vh : f.Lp * b.Vh);
                g.f.Te.S(g.f.D);
                g.f.Nh = g.f.V;
                g.f.D.x += b.rb * g.s.x;
                g.f.D.y += b.rb * g.s.y;
                g.f.V += b.rb * g.P;
                g.pd()
            }
        for (e = 0; e < b.ji; ++e) {
            q = c.Rg(f.tz);
            k = !0;
            for (g = 0; g < this.Gg; ++g)
                h = this.Yi[g],
                h = h.Rg(f.tz),
                k = k && h;
            if (q && k)
                break
        }
        this.uD(c.Lj);
        if (d) {
            d = Number.MAX_VALUE;
            c = f.PD * f.PD;
            q = f.OD * f.OD;
            for (e = 0; e < this.Kf; ++e)
                g = this.Kj[e],
                g.Mc() != l.Kd && (0 == (g.W & l.Tz) && (d = g.wo = 0),
                0 == (g.W & l.Tz) || g.P * g.P > q || a.jf(g.s, g.s) > c ? d = g.wo = 0 : (g.wo += b.rb,
                d = a.mn(d, g.wo)));
            if (d >= f.rK)
                for (e = 0; e < this.Kf; ++e)
                    g = this.Kj[e],
                    g.Ab(!1)
        }
    }
    ;
    G.prototype.Hy = function(a) {
        var b, c;
        this.jo.Ib(a, this.lq, this.Zh, this.qm);
        var d = this.jo;
        for (b = 0; b < this.Gg; ++b)
            this.Yi[b].rh(a);
        for (b = 0; b < a.wi; ++b)
            for (d.Sg(),
            c = 0; c < this.Gg; ++c)
                this.Yi[c].Sg(a);
        for (b = 0; b < this.Kf; ++b)
            if (c = this.Kj[b],
            c.Mc() != l.Kd) {
                var e = a.rb * c.s.x
                  , g = a.rb * c.s.y;
                e * e + g * g > f.RD && (c.s.rg(),
                c.s.x = c.s.x * f.Mp * a.Vh,
                c.s.y = c.s.y * f.Mp * a.Vh);
                e = a.rb * c.P;
                e * e > f.QD && (c.P = 0 > c.P ? -f.Lp * a.Vh : f.Lp * a.Vh);
                c.f.Te.S(c.f.D);
                c.f.Nh = c.f.V;
                c.f.D.x += a.rb * c.s.x;
                c.f.D.y += a.rb * c.s.y;
                c.f.V += a.rb * c.P;
                c.pd()
            }
        for (b = 0; b < a.ji; ++b) {
            e = d.Rg(.75);
            g = !0;
            for (c = 0; c < this.Gg; ++c)
                var h = this.Yi[c].Rg(f.tz)
                  , g = g && h;
            if (e && g)
                break
        }
        this.uD(d.Lj)
    }
    ;
    G.prototype.uD = function(a) {
        if (null != this.bM)
            for (var b = 0; b < this.Zh; ++b)
                for (var c = a[b], d = 0; d < c.ii; ++d)
                    G.RH.rM[d] = c.Uf[d].ne,
                    G.RH.JN[d] = c.Uf[d].vk
    }
    ;
    G.prototype.Zx = function(a) {
        a.GP = this.Kf;
        this.Kj[this.Kf++] = a
    }
    ;
    G.prototype.QC = function(a) {
        this.lq[this.Zh++] = a
    }
    ;
    G.prototype.RC = function(a) {
        this.Yi[this.Gg++] = a
    }
    ;
    Z.Bd.push(function() {
        Z.i.Fp.RH = new r
    });
    O.vv = function() {}
    ;
    O.prototype.Set = function(a) {
        this.rb = a.rb;
        this.Vh = a.Vh;
        this.ji = a.ji;
        this.wi = a.wi;
        this.yi = a.yi
    }
    ;
    N.ug = function() {
        this.oN = new hm;
        this.Lf = new n;
        this.jo = new L;
        this.$F = new G
    }
    ;
    N.prototype.ug = function(a, b) {
        this.rm = this.yd = this.mc = this.vd = null;
        this.HA = this.Gg = this.Zh = this.Kf = 0;
        N.iM = !0;
        N.QL = !0;
        this.ML = b;
        this.KA = a;
        this.ZF = 0;
        this.Lf.Sd = this;
        var c = new t;
        this.XL = this.pr(c)
    }
    ;
    N.prototype.Fr = function(a) {
        this.Lf.dt = a
    }
    ;
    N.prototype.pr = function(a) {
        if (1 == this.zr())
            return null;
        a = new l(a,this);
        a.Je = null;
        if (a.La = this.vd)
            this.vd.Je = a;
        this.vd = a;
        ++this.Kf;
        return a
    }
    ;
    N.prototype.YC = function(a) {
        if (1 != this.zr()) {
            for (var b = a.yd; b; ) {
                var c = b
                  , b = b.next;
                this.sr(c.Zk)
            }
            for (b = a.rm; b; )
                c = b,
                b = b.ml,
                c.controller.sD(a);
            for (b = a.mc; b; )
                c = b,
                b = b.next,
                this.Lf.Xd(c.rd);
            a.mc = null;
            for (b = a.Mj; b; )
                c = b,
                b = b.La,
                c.lp(this.Lf.io),
                c.Xd();
            a.Mj = null;
            a.JA = 0;
            a.Je && (a.Je.La = a.La);
            a.La && (a.La.Je = a.Je);
            a == this.vd && (this.vd = a.La);
            --this.Kf
        }
    }
    ;
    N.prototype.sc = function(a) {
        var b = M.pg(a, null);
        b.Je = null;
        if (b.La = this.yd)
            this.yd.Je = b;
        this.yd = b;
        ++this.Gg;
        b.gg.Zk = b;
        b.gg.Hh = b.Aa;
        b.gg.ad = null;
        if (b.gg.next = b.Na.yd)
            b.Na.yd.ad = b.gg;
        b.Na.yd = b.gg;
        b.hg.Zk = b;
        b.hg.Hh = b.Na;
        b.hg.ad = null;
        if (b.hg.next = b.Aa.yd)
            b.Aa.yd.ad = b.hg;
        b.Aa.yd = b.hg;
        var c = a.Pb
          , d = a.Zb;
        if (0 == a.lf)
            for (a = d.mc; a; )
                a.Hh == c && a.rd.aD(),
                a = a.next;
        return b
    }
    ;
    N.prototype.sr = function(a) {
        var b = a.SF;
        a.Je && (a.Je.La = a.La);
        a.La && (a.La.Je = a.Je);
        a == this.yd && (this.yd = a.La);
        var c = a.Na
          , d = a.Aa;
        c.Ab(!0);
        d.Ab(!0);
        a.gg.ad && (a.gg.ad.next = a.gg.next);
        a.gg.next && (a.gg.next.ad = a.gg.ad);
        a.gg == c.yd && (c.yd = a.gg.next);
        a.gg.ad = null;
        a.gg.next = null;
        a.hg.ad && (a.hg.ad.next = a.hg.next);
        a.hg.next && (a.hg.next.ad = a.hg.ad);
        a.hg == d.yd && (d.yd = a.hg.next);
        a.hg.ad = null;
        a.hg.next = null;
        M.Xd(a, null);
        --this.Gg;
        if (0 == b)
            for (a = d.mc; a; )
                a.Hh == c && a.rd.aD(),
                a = a.next
    }
    ;
    N.prototype.bv = function(a) {
        this.KA = a
    }
    ;
    N.prototype.Tl = function(a, b, c) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        void 0 === c && (c = 0);
        this.W & N.Yz && (this.Lf.Ju(),
        this.W &= ~N.Yz);
        var d = N.sN;
        d.rb = a;
        d.wi = b;
        d.ji = c;
        d.Vh = 0 < a ? 1 / a : 0;
        d.Cd = this.ZF * a;
        d.yi = N.iM;
        this.Lf.xI();
        0 < d.rb && this.pn(d);
        N.QL && 0 < d.rb && this.Hy(d);
        0 < d.rb && (this.ZF = d.Vh);
        this.W &= ~N.XE
    }
    ;
    N.prototype.zr = function() {
        return 0 < (this.W & N.XE)
    }
    ;
    N.prototype.pn = function(a) {
        for (var b, c = this.rm; c; c = c.La)
            c.Tl(a);
        c = this.$F;
        c.Ib(this.Kf, this.Zh, this.Gg, null, this.Lf.dt, this.jo);
        for (b = this.vd; b; b = b.La)
            b.W &= ~l.Ld;
        for (var d = this.mc; d; d = d.La)
            d.W &= ~J.Ld;
        for (d = this.yd; d; d = d.La)
            d.mo = !1;
        for (var d = this.oN, e = this.vd; e; e = e.La)
            if (!(e.W & l.Ld) && 0 != e.Yd() && 0 != e.fn() && e.Mc() != l.Kd) {
                c.ay();
                var f = 0;
                d[f++] = e;
                for (e.W |= l.Ld; 0 < f; )
                    if (b = d[--f],
                    c.Zx(b),
                    0 == b.Yd() && b.Ab(!0),
                    b.Mc() != l.Kd) {
                        for (var g, h = b.mc; h; h = h.next)
                            h.rd.W & J.Ld || 1 == h.rd.gn() || 0 == h.rd.Qu() || 0 == h.rd.my() || (c.QC(h.rd),
                            h.rd.W |= J.Ld,
                            g = h.Hh,
                            g.W & l.Ld || (d[f++] = g,
                            g.W |= l.Ld));
                        for (b = b.yd; b; b = b.next)
                            1 != b.Zk.mo && (g = b.Hh,
                            0 != g.fn() && (c.RC(b.Zk),
                            b.Zk.mo = !0,
                            g.W & l.Ld || (d[f++] = g,
                            g.W |= l.Ld)))
                    }
                c.pn(a, this.KA, this.ML);
                for (f = 0; f < c.Kf; ++f)
                    b = c.Kj[f],
                    b.Mc() == l.Kd && (b.W &= ~l.Ld)
            }
        for (f = 0; f < d.length && d[f]; ++f)
            d[f] = null;
        for (b = this.vd; b; b = b.La)
            0 != b.Yd() && 0 != b.fn() && b.Mc() != l.Kd && b.GD();
        this.Lf.Ju()
    }
    ;
    N.prototype.Hy = function(a) {
        var b, c, d, e = this.$F;
        e.Ib(this.Kf, f.pK, f.qK, null, this.Lf.dt, this.jo);
        var g = N.kN;
        for (b = this.vd; b; b = b.La)
            b.W &= ~l.Ld,
            b.f.Wf = 0;
        for (d = this.mc; d; d = d.La)
            d.W &= ~(J.Wp | J.Ld);
        for (d = this.yd; d; d = d.La)
            d.mo = !1;
        for (; ; ) {
            var h = null
              , k = 1;
            for (d = this.mc; d; d = d.La)
                if (1 != d.gn() && 0 != d.Qu() && 0 != d.RI()) {
                    if (d.W & J.Wp)
                        b = d.hM;
                    else {
                        b = d.Qc;
                        c = d.Yc;
                        b = b.R;
                        c = c.R;
                        if (!(b.Mc() == l.Be && 0 != b.Yd() || c.Mc() == l.Be && 0 != c.Yd()))
                            continue;
                        var q = b.f.Wf;
                        b.f.Wf < c.f.Wf ? (q = c.f.Wf,
                        b.f.Kl(q)) : c.f.Wf < b.f.Wf && (q = b.f.Wf,
                        c.f.Kl(q));
                        b = d.DI(b.f, c.f);
                        0 < b && 1 > b && (b = (1 - b) * q + b,
                        1 < b && (b = 1));
                        d.hM = b;
                        d.W |= J.Wp
                    }
                    Number.MIN_VALUE < b && b < k && (h = d,
                    k = b)
                }
            if (null == h || 1 - 100 * Number.MIN_VALUE < k)
                break;
            b = h.Qc;
            c = h.Yc;
            b = b.R;
            c = c.R;
            N.OH.Set(b.f);
            N.PH.Set(c.f);
            b.Kl(k);
            c.Kl(k);
            h.HD(this.Lf.dt);
            h.W &= ~J.Wp;
            if (1 == h.gn() || 0 == h.Qu())
                b.f.Set(N.OH),
                c.f.Set(N.PH),
                b.pd(),
                c.pd();
            else if (0 != h.my()) {
                b.Mc() != l.Be && (b = c);
                e.ay();
                h = d = 0;
                g[d + h++] = b;
                for (b.W |= l.Ld; 0 < h; )
                    if (b = g[d++],
                    --h,
                    e.Zx(b),
                    0 == b.Yd() && b.Ab(!0),
                    b.Mc() == l.Be) {
                        for (c = b.mc; c && e.Zh != e.PL; c = c.next)
                            c.rd.W & J.Ld || 1 == c.rd.gn() || 0 == c.rd.Qu() || 0 == c.rd.my() || (e.QC(c.rd),
                            c.rd.W |= J.Ld,
                            q = c.Hh,
                            q.W & l.Ld || (q.Mc() != l.Kd && (q.Kl(k),
                            q.Ab(!0)),
                            g[d + h] = q,
                            ++h,
                            q.W |= l.Ld));
                        for (b = b.yd; b; b = b.next)
                            e.Gg != e.$L && 1 != b.Zk.mo && (q = b.Hh,
                            0 != q.fn() && (e.RC(b.Zk),
                            b.Zk.mo = !0,
                            q.W & l.Ld || (q.Mc() != l.Kd && (q.Kl(k),
                            q.Ab(!0)),
                            g[d + h] = q,
                            ++h,
                            q.W |= l.Ld)))
                    }
                d = N.rN;
                d.yi = !1;
                d.rb = (1 - k) * a.rb;
                d.Vh = 1 / d.rb;
                d.Cd = 0;
                d.wi = a.wi;
                d.ji = a.ji;
                e.Hy(d);
                for (k = 0; k < e.Kf; ++k)
                    if (b = e.Kj[k],
                    b.W &= ~l.Ld,
                    0 != b.Yd() && b.Mc() == l.Be)
                        for (b.GD(),
                        c = b.mc; c; c = c.next)
                            c.rd.W &= ~J.Wp;
                for (k = 0; k < e.Zh; ++k)
                    d = e.lq[k],
                    d.W &= ~(J.Wp | J.Ld);
                for (k = 0; k < e.Gg; ++k)
                    d = e.Yi[k],
                    d.mo = !1;
                this.Lf.Ju()
            }
        }
    }
    ;
    Z.Bd.push(function() {
        Z.i.ug.sN = new O;
        Z.i.ug.tQ = new c;
        Z.i.ug.OH = new b;
        Z.i.ug.PH = new b;
        Z.i.ug.rN = new O;
        Z.i.ug.kN = new hm;
        Z.i.ug.rQ = new e(.5,.8,.8);
        Z.i.ug.Yz = 1;
        Z.i.ug.XE = 2
    })
}
)();
(function() {
    var a = Z.F.fb.$l
      , b = Z.F.fb.uh
      , c = Z.F.fb.Bc
      , d = Z.i.qa.Vy
      , e = Z.i.qa.yb
      , f = Z.i.qa.Nr
      , g = Z.i.qa.Yy
      , h = Z.i.qa.Zy
      , k = Z.i.qa.Cp
      , m = Z.i.qa.az
      , l = Z.i.qa.bz
      , t = Z.i.qa.am
      , w = Z.i.qa.gz
      , r = Z.i.qa.bs
      , u = Z.i.qa.mz
      , n = Z.i.qa.nz
      , z = Z.i.qa.oz
      , E = Z.i.qa.yn
      , A = Z.i.Nc
      , v = Z.i.vv
      , H = Z.H.oa
      , G = Z.H.Math.Lk
      , O = Z.H.Math.th
      , N = Z.H.Math.ab
      , J = Z.F.Se
      , K = Z.F.Dp
      , L = Z.F.Kk
      , M = Z.F.tg
      , q = Z.F.uv
      , C = Z.F.An;
    Z.lc(d, Z.i.qa.yb);
    d.prototype.ua = Z.i.qa.yb.prototype;
    d.Vy = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    d.pg = function() {
        return new d
    }
    ;
    d.Xd = function() {}
    ;
    d.prototype.Df = function(a, b) {
        this.ua.Df.call(this, a, b)
    }
    ;
    d.prototype.zi = function() {
        J.yI(this.eh, this.Qc.Sc instanceof a ? this.Qc.Sc : null, this.Qc.R.K, this.Yc.Sc instanceof a ? this.Yc.Sc : null, this.Yc.R.K)
    }
    ;
    e.yb = function() {
        this.pf = new h;
        this.qf = new h;
        this.eh = new L;
        this.kt = new L
    }
    ;
    e.prototype.NI = function(a) {
        var b = this.Yc.R
          , c = this.Qc.Sc
          , d = this.Yc.Sc;
        a.Ib(this.eh, this.Qc.R.Yf(), c.tb, b.Yf(), d.tb)
    }
    ;
    e.prototype.my = function() {
        return (this.W & e.Xp) == e.Xp
    }
    ;
    e.prototype.RI = function() {
        return (this.W & e.As) == e.As
    }
    ;
    e.prototype.gn = function() {
        return (this.W & e.Cs) == e.Cs
    }
    ;
    e.prototype.eb = function() {
        this.W &= ~e.Bs
    }
    ;
    e.prototype.Qu = function() {
        return (this.W & e.Bs) == e.Bs
    }
    ;
    e.prototype.aD = function() {
        this.W |= e.Xz
    }
    ;
    e.prototype.yb = function() {}
    ;
    e.prototype.Df = function(a, b) {
        void 0 === a && (a = null);
        void 0 === b && (b = null);
        this.W = e.Bs;
        if (a && b) {
            if (a.gn() || b.gn())
                this.W |= e.Cs;
            var c = a.R
              , d = b.R;
            if (c.Mc() != A.Be || c.Pu() || d.Mc() != A.Be || d.Pu())
                this.W |= e.As;
            this.Qc = a;
            this.Yc = b;
            this.eh.Rd = 0;
            this.La = this.Je = null;
            this.pf.rd = null;
            this.pf.ad = null;
            this.pf.next = null;
            this.pf.Hh = null;
            this.qf.rd = null;
            this.qf.ad = null;
            this.qf.next = null;
            this.qf.Hh = null
        } else
            this.Yc = this.Qc = null
    }
    ;
    e.prototype.HD = function(a) {
        var b = this.kt;
        this.kt = this.eh;
        this.eh = b;
        this.W |= e.Bs;
        var d = !1
          , f = (this.W & e.Xp) == e.Xp
          , g = this.Qc.R
          , b = this.Yc.R
          , h = this.Qc.iq.Ul(this.Yc.iq);
        if (this.W & e.Cs)
            h && (d = this.Qc.Sc,
            f = this.Yc.Sc,
            g = g.Yf(),
            b = b.Yf(),
            d = c.Ul(d, g, f, b)),
            this.eh.Rd = 0;
        else {
            this.W = g.Mc() != A.Be || g.Pu() || b.Mc() != A.Be || b.Pu() ? this.W | e.As : this.W & ~e.As;
            if (h)
                for (this.zi(),
                d = 0 < this.eh.Rd,
                h = 0; h < this.eh.Rd; ++h) {
                    var k = this.eh.Cb[h];
                    k.ro = 0;
                    k.xo = 0;
                    for (var q = k.fl, B = 0; B < this.kt.Rd; ++B) {
                        var l = this.kt.Cb[B];
                        if (l.fl.key == q.key) {
                            k.ro = l.ro;
                            k.xo = l.xo;
                            break
                        }
                    }
                }
            else
                this.eh.Rd = 0;
            d != f && (g.Ab(!0),
            b.Ab(!0))
        }
        this.W = d ? this.W | e.Xp : this.W & ~e.Xp;
        0 == (this.W & e.Cs) && a.rD(this, this.kt)
    }
    ;
    e.prototype.zi = function() {}
    ;
    e.prototype.DI = function(a, b) {
        e.br.ek.Set(this.Qc.Sc);
        e.br.fk.Set(this.Yc.Sc);
        e.br.YH = a;
        e.br.ZH = b;
        e.br.LN = H.Yb;
        return M.WJ(e.br)
    }
    ;
    Z.Bd.push(function() {
        Z.i.qa.yb.Cs = 1;
        Z.i.qa.yb.As = 2;
        Z.i.qa.yb.Ld = 4;
        Z.i.qa.yb.Wp = 8;
        Z.i.qa.yb.Xp = 16;
        Z.i.qa.yb.Bs = 32;
        Z.i.qa.yb.Xz = 64;
        Z.i.qa.yb.br = new q
    });
    f.Nr = function() {
        this.ow = new N;
        this.Jj = new N;
        this.Fh = new N;
        this.zq = new G;
        this.Pe = new G
    }
    ;
    f.prototype.Nr = function() {
        this.Uf = new hm(H.Xg);
        for (var a = 0; a < H.Xg; a++)
            this.Uf[a] = new g
    }
    ;
    g.Yy = function() {
        this.Jj = new N;
        this.Nb = new N;
        this.Ob = new N
    }
    ;
    h.Zy = function() {}
    ;
    k.Cp = function() {}
    ;
    k.prototype.Cp = function(a) {
        this.qm = a;
        this.QI()
    }
    ;
    k.prototype.nr = function(a, b, c, d) {
        void 0 === c && (c = 0);
        void 0 === d && (d = 0);
        this.Uj[c][d].yE = a;
        this.Uj[c][d].ME = b;
        this.Uj[c][d].uH = !0;
        c != d && (this.Uj[d][c].yE = a,
        this.Uj[d][c].ME = b,
        this.Uj[d][c].uH = !1)
    }
    ;
    k.prototype.QI = function() {
        this.Uj = new hm(c.Pv);
        for (var a = 0; a < c.Pv; a++) {
            this.Uj[a] = new hm(c.Pv);
            for (var b = 0; b < c.Pv; b++)
                this.Uj[a][b] = new m
        }
        this.nr(d.pg, d.Xd, c.Up, c.Up);
        this.nr(u.pg, u.Xd, c.Vp, c.Up);
        this.nr(z.pg, z.Xd, c.Vp, c.Vp);
        this.nr(w.pg, w.Xd, c.Wz, c.Up);
        this.nr(n.pg, n.Xd, c.Vp, c.Wz)
    }
    ;
    k.prototype.pg = function(a, b) {
        var c = this.Uj[parseInt(a.Mc())][parseInt(b.Mc())], d;
        if (c.Sw)
            return d = c.Sw,
            c.Sw = d.La,
            c.EM--,
            d.Df(a, b),
            d;
        d = c.yE;
        return null != d ? (c.uH ? (d = d(this.qm),
        d.Df(a, b)) : (d = d(this.qm),
        d.Df(b, a)),
        d) : null
    }
    ;
    k.prototype.Xd = function(a) {
        0 < a.eh.Rd && (a.Qc.R.Ab(!0),
        a.Yc.R.Ab(!0));
        var b = this.Uj[parseInt(a.Qc.Mc())][parseInt(a.Yc.Mc())];
        b.EM++;
        a.La = b.Sw;
        b.Sw = a;
        b = b.ME;
        b(a, this.qm)
    }
    ;
    m.az = function() {}
    ;
    l.bz = function() {
        this.position = new N;
        this.Fh = new N;
        this.id = new K
    }
    ;
    t.am = function() {
        this.gM = new v;
        this.Lj = new hm
    }
    ;
    t.prototype.am = function() {}
    ;
    t.prototype.Ib = function(a, b, c, d) {
        void 0 === c && (c = 0);
        var e;
        this.gM.Set(a);
        this.qm = d;
        for (this.ct = c; this.Lj.length < this.ct; )
            this.Lj[this.Lj.length] = new f;
        for (a = 0; a < c; ++a) {
            e = b[a];
            d = e.Qc;
            var g = e.Yc
              , h = d.Sc.tb
              , k = g.Sc.tb
              , q = d.R
              , B = g.R
              , l = e.eh
              , C = H.iK(d.uw, g.uw)
              , I = H.jK(d.zw, g.zw)
              , m = q.s.x
              , n = q.s.y
              , P = B.s.x
              , U = B.s.y
              , r = q.P
              , u = B.P;
            t.ap.Ib(l, q.K, h, B.K, k);
            g = t.ap.nb.x;
            e = t.ap.nb.y;
            d = this.Lj[a];
            d.Pb = q;
            d.Zb = B;
            d.jM = l;
            d.Fh.x = g;
            d.Fh.y = e;
            d.ii = l.Rd;
            d.Ve = C;
            d.cf = I;
            d.ow.x = l.Ye.x;
            d.ow.y = l.Ye.y;
            d.Jj.x = l.xb.x;
            d.Jj.y = l.xb.y;
            d.mg = h + k;
            d.type = l.ea;
            for (h = 0; h < d.ii; ++h) {
                C = l.Cb[h];
                k = d.Uf[h];
                k.ne = C.ro;
                k.vk = C.xo;
                k.Jj.S(C.xb);
                var C = k.Nb.x = t.ap.Cb[h].x - q.f.D.x
                  , I = k.Nb.y = t.ap.Cb[h].y - q.f.D.y
                  , w = k.Ob.x = t.ap.Cb[h].x - B.f.D.x
                  , A = k.Ob.y = t.ap.Cb[h].y - B.f.D.y
                  , z = C * e - I * g
                  , v = w * e - A * g
                  , z = z * z
                  , v = v * v;
                k.zq = 1 / (q.X + B.X + q.ia * z + B.ia * v);
                var E = q.ba * q.X + B.ba * B.X
                  , E = E + (q.ba * q.ia * z + B.ba * B.ia * v);
                k.VK = 1 / E;
                v = e;
                E = -g;
                z = C * E - I * v;
                v = w * E - A * v;
                z *= z;
                v *= v;
                k.KN = 1 / (q.X + B.X + q.ia * z + B.ia * v);
                k.xu = 0;
                C = d.Fh.x * (P + -u * A - m - -r * I) + d.Fh.y * (U + u * w - n - r * C);
                C < -H.vK && (k.xu += -d.cf * C)
            }
            2 == d.ii && (U = d.Uf[0],
            P = d.Uf[1],
            l = q.X,
            q = q.ia,
            m = B.X,
            B = B.ia,
            n = U.Nb.x * e - U.Nb.y * g,
            U = U.Ob.x * e - U.Ob.y * g,
            r = P.Nb.x * e - P.Nb.y * g,
            P = P.Ob.x * e - P.Ob.y * g,
            g = l + m + q * n * n + B * U * U,
            e = l + m + q * r * r + B * P * P,
            B = l + m + q * n * r + B * U * P,
            g * g < 100 * (g * e - B * B) ? (d.Pe.g.Set(g, B),
            d.Pe.h.Set(B, e),
            d.Pe.hy(d.zq)) : d.ii = 1)
        }
    }
    ;
    t.prototype.rh = function(a) {
        for (var b = 0; b < this.ct; ++b) {
            var c = this.Lj[b], d = c.Pb, e = c.Zb, f = d.X, g = d.ia, h = e.X, k = e.ia, q = c.Fh.x, B = c.Fh.y, l = B, C = -q, m, n;
            if (a.yi)
                for (n = c.ii,
                m = 0; m < n; ++m) {
                    var t = c.Uf[m];
                    t.ne *= a.Cd;
                    t.vk *= a.Cd;
                    var r = t.ne * q + t.vk * l
                      , u = t.ne * B + t.vk * C;
                    d.P -= g * (t.Nb.x * u - t.Nb.y * r);
                    d.s.x -= f * r;
                    d.s.y -= f * u;
                    e.P += k * (t.Ob.x * u - t.Ob.y * r);
                    e.s.x += h * r;
                    e.s.y += h * u
                }
            else
                for (n = c.ii,
                m = 0; m < n; ++m)
                    d = c.Uf[m],
                    d.ne = 0,
                    d.vk = 0
        }
    }
    ;
    t.prototype.Sg = function() {
        for (var a, b, c, d, e, f, g, h, k, q, l = 0; l < this.ct; ++l) {
            e = this.Lj[l];
            var C = e.Pb
              , m = e.Zb
              , n = C.P
              , t = m.P
              , r = C.s
              , u = m.s
              , w = C.X
              , A = C.ia
              , v = m.X
              , z = m.ia;
            h = e.Fh.x;
            var E = k = e.Fh.y;
            q = -h;
            g = e.Ve;
            for (a = 0; a < e.ii; a++)
                b = e.Uf[a],
                c = u.x - t * b.Ob.y - r.x + n * b.Nb.y,
                d = u.y + t * b.Ob.x - r.y - n * b.Nb.x,
                c = c * E + d * q,
                c = b.KN * -c,
                d = g * b.ne,
                d = O.ec(b.vk + c, -d, d),
                c = d - b.vk,
                f = c * E,
                c *= q,
                r.x -= w * f,
                r.y -= w * c,
                n -= A * (b.Nb.x * c - b.Nb.y * f),
                u.x += v * f,
                u.y += v * c,
                t += z * (b.Ob.x * c - b.Ob.y * f),
                b.vk = d;
            if (1 == e.ii)
                b = e.Uf[0],
                c = u.x + -t * b.Ob.y - r.x - -n * b.Nb.y,
                d = u.y + t * b.Ob.x - r.y - n * b.Nb.x,
                e = c * h + d * k,
                c = -b.zq * (e - b.xu),
                d = b.ne + c,
                d = 0 < d ? d : 0,
                c = d - b.ne,
                f = c * h,
                c *= k,
                r.x -= w * f,
                r.y -= w * c,
                n -= A * (b.Nb.x * c - b.Nb.y * f),
                u.x += v * f,
                u.y += v * c,
                t += z * (b.Ob.x * c - b.Ob.y * f),
                b.ne = d;
            else {
                b = e.Uf[0];
                a = e.Uf[1];
                c = b.ne;
                g = a.ne;
                var G = (u.x - t * b.Ob.y - r.x + n * b.Nb.y) * h + (u.y + t * b.Ob.x - r.y - n * b.Nb.x) * k
                  , H = (u.x - t * a.Ob.y - r.x + n * a.Nb.y) * h + (u.y + t * a.Ob.x - r.y - n * a.Nb.x) * k;
                d = G - b.xu;
                f = H - a.xu;
                q = e.Pe;
                d -= q.g.x * c + q.h.x * g;
                for (f -= q.g.y * c + q.h.y * g; ; ) {
                    q = e.zq;
                    E = -(q.g.x * d + q.h.x * f);
                    q = -(q.g.y * d + q.h.y * f);
                    if (0 <= E && 0 <= q) {
                        c = E - c;
                        g = q - g;
                        e = c * h;
                        c *= k;
                        h *= g;
                        k *= g;
                        r.x -= w * (e + h);
                        r.y -= w * (c + k);
                        n -= A * (b.Nb.x * c - b.Nb.y * e + a.Nb.x * k - a.Nb.y * h);
                        u.x += v * (e + h);
                        u.y += v * (c + k);
                        t += z * (b.Ob.x * c - b.Ob.y * e + a.Ob.x * k - a.Ob.y * h);
                        b.ne = E;
                        a.ne = q;
                        break
                    }
                    E = -b.zq * d;
                    q = 0;
                    H = e.Pe.g.y * E + f;
                    if (0 <= E && 0 <= H) {
                        c = E - c;
                        g = q - g;
                        e = c * h;
                        c *= k;
                        h *= g;
                        k *= g;
                        r.x -= w * (e + h);
                        r.y -= w * (c + k);
                        n -= A * (b.Nb.x * c - b.Nb.y * e + a.Nb.x * k - a.Nb.y * h);
                        u.x += v * (e + h);
                        u.y += v * (c + k);
                        t += z * (b.Ob.x * c - b.Ob.y * e + a.Ob.x * k - a.Ob.y * h);
                        b.ne = E;
                        a.ne = q;
                        break
                    }
                    E = 0;
                    q = -a.zq * f;
                    G = e.Pe.h.x * q + d;
                    if (0 <= q && 0 <= G) {
                        c = E - c;
                        g = q - g;
                        e = c * h;
                        c *= k;
                        h *= g;
                        k *= g;
                        r.x -= w * (e + h);
                        r.y -= w * (c + k);
                        n -= A * (b.Nb.x * c - b.Nb.y * e + a.Nb.x * k - a.Nb.y * h);
                        u.x += v * (e + h);
                        u.y += v * (c + k);
                        t += z * (b.Ob.x * c - b.Ob.y * e + a.Ob.x * k - a.Ob.y * h);
                        b.ne = E;
                        a.ne = q;
                        break
                    }
                    q = E = 0;
                    G = d;
                    H = f;
                    if (0 <= G && 0 <= H) {
                        c = E - c;
                        g = q - g;
                        e = c * h;
                        c *= k;
                        h *= g;
                        k *= g;
                        r.x -= w * (e + h);
                        r.y -= w * (c + k);
                        n -= A * (b.Nb.x * c - b.Nb.y * e + a.Nb.x * k - a.Nb.y * h);
                        u.x += v * (e + h);
                        u.y += v * (c + k);
                        t += z * (b.Ob.x * c - b.Ob.y * e + a.Ob.x * k - a.Ob.y * h);
                        b.ne = E;
                        a.ne = q;
                        break
                    }
                    break
                }
            }
            C.P = n;
            m.P = t
        }
    }
    ;
    t.prototype.fy = function() {
        for (var a = 0; a < this.ct; ++a)
            for (var b = this.Lj[a], c = b.jM, d = 0; d < b.ii; ++d) {
                var e = c.Cb[d]
                  , f = b.Uf[d];
                e.ro = f.ne;
                e.xo = f.vk
            }
    }
    ;
    t.prototype.Rg = function(a) {
        void 0 === a && (a = 0);
        for (var b = 0, c = 0; c < this.ct; c++) {
            var d = this.Lj[c]
              , e = d.Pb
              , f = d.Zb
              , g = e.ba * e.X
              , h = e.ba * e.ia
              , k = f.ba * f.X
              , q = f.ba * f.ia;
            t.Fx.Ib(d);
            for (var B = t.Fx.nb, l = 0; l < d.ii; l++) {
                var C = d.Uf[l]
                  , m = t.Fx.Cb[l]
                  , n = t.Fx.Bw[l]
                  , r = m.x - e.f.D.x
                  , u = m.y - e.f.D.y
                  , w = m.x - f.f.D.x
                  , m = m.y - f.f.D.y
                  , b = b < n ? b : n
                  , n = -C.VK * O.ec(a * (n + H.Yb), -H.Wg, 0)
                  , C = n * B.x
                  , n = n * B.y;
                e.f.D.x -= g * C;
                e.f.D.y -= g * n;
                e.f.V -= h * (r * n - u * C);
                e.pd();
                f.f.D.x += k * C;
                f.f.D.y += k * n;
                f.f.V += q * (w * n - m * C);
                f.pd()
            }
        }
        return b > -1.5 * H.Yb
    }
    ;
    Z.Bd.push(function() {
        Z.i.qa.am.ap = new C;
        Z.i.qa.am.Fx = new E
    });
    Z.lc(w, Z.i.qa.yb);
    w.prototype.ua = Z.i.qa.yb.prototype;
    w.gz = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    w.pg = function() {
        return new w
    }
    ;
    w.Xd = function() {}
    ;
    w.prototype.Df = function(a, b) {
        this.ua.Df.call(this, a, b)
    }
    ;
    w.prototype.zi = function() {}
    ;
    Z.lc(r, Z.i.qa.yb);
    r.prototype.ua = Z.i.qa.yb.prototype;
    r.bs = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    r.prototype.bs = function() {
        this.ua.yb.call(this)
    }
    ;
    r.prototype.zi = function() {}
    ;
    Z.lc(u, Z.i.qa.yb);
    u.prototype.ua = Z.i.qa.yb.prototype;
    u.mz = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    u.pg = function() {
        return new u
    }
    ;
    u.Xd = function() {}
    ;
    u.prototype.Df = function(a, b) {
        this.ua.Df.call(this, a, b)
    }
    ;
    u.prototype.zi = function() {
        J.zI(this.eh, this.Qc.Sc instanceof b ? this.Qc.Sc : null, this.Qc.R.K, this.Yc.Sc instanceof a ? this.Yc.Sc : null, this.Yc.R.K)
    }
    ;
    Z.lc(n, Z.i.qa.yb);
    n.prototype.ua = Z.i.qa.yb.prototype;
    n.nz = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    n.pg = function() {
        return new n
    }
    ;
    n.Xd = function() {}
    ;
    n.prototype.Df = function(a, b) {
        this.ua.Df.call(this, a, b)
    }
    ;
    n.prototype.zi = function() {}
    ;
    Z.lc(z, Z.i.qa.yb);
    z.prototype.ua = Z.i.qa.yb.prototype;
    z.oz = function() {
        Z.i.qa.yb.yb.apply(this, arguments)
    }
    ;
    z.pg = function() {
        return new z
    }
    ;
    z.Xd = function() {}
    ;
    z.prototype.Df = function(a, b) {
        this.ua.Df.call(this, a, b)
    }
    ;
    z.prototype.zi = function() {
        J.AI(this.eh, this.Qc.Sc instanceof b ? this.Qc.Sc : null, this.Qc.R.K, this.Yc.Sc instanceof b ? this.Yc.Sc : null, this.Yc.R.K)
    }
    ;
    E.yn = function() {}
    ;
    E.prototype.yn = function() {
        this.nb = new N;
        this.Bw = new im(H.Xg);
        this.Cb = new hm(H.Xg);
        for (var a = 0; a < H.Xg; a++)
            this.Cb[a] = new N
    }
    ;
    E.prototype.Ib = function(a) {
        var b, c, d, e, f, g;
        switch (a.type) {
        case L.Vz:
            e = a.Pb.K.I;
            d = a.Jj;
            b = a.Pb.K.position.x + (e.g.x * d.x + e.h.x * d.y);
            c = a.Pb.K.position.y + (e.g.y * d.x + e.h.y * d.y);
            e = a.Zb.K.I;
            d = a.Uf[0].Jj;
            f = a.Zb.K.position.x + (e.g.x * d.x + e.h.x * d.y);
            e = a.Zb.K.position.y + (e.g.y * d.x + e.h.y * d.y);
            d = f - b;
            g = e - c;
            var h = d * d + g * g;
            h > Number.MIN_VALUE * Number.MIN_VALUE ? (h = Math.sqrt(h),
            this.nb.x = d / h,
            this.nb.y = g / h) : (this.nb.x = 1,
            this.nb.y = 0);
            this.Cb[0].x = .5 * (b + f);
            this.Cb[0].y = .5 * (c + e);
            this.Bw[0] = d * this.nb.x + g * this.nb.y - a.mg;
            break;
        case L.Mi:
            e = a.Pb.K.I;
            d = a.ow;
            this.nb.x = e.g.x * d.x + e.h.x * d.y;
            this.nb.y = e.g.y * d.x + e.h.y * d.y;
            e = a.Pb.K.I;
            d = a.Jj;
            f = a.Pb.K.position.x + (e.g.x * d.x + e.h.x * d.y);
            g = a.Pb.K.position.y + (e.g.y * d.x + e.h.y * d.y);
            e = a.Zb.K.I;
            for (b = 0; b < a.ii; ++b)
                d = a.Uf[b].Jj,
                c = a.Zb.K.position.x + (e.g.x * d.x + e.h.x * d.y),
                d = a.Zb.K.position.y + (e.g.y * d.x + e.h.y * d.y),
                this.Bw[b] = (c - f) * this.nb.x + (d - g) * this.nb.y - a.mg,
                this.Cb[b].x = c,
                this.Cb[b].y = d;
            break;
        case L.On:
            e = a.Zb.K.I;
            d = a.ow;
            this.nb.x = e.g.x * d.x + e.h.x * d.y;
            this.nb.y = e.g.y * d.x + e.h.y * d.y;
            e = a.Zb.K.I;
            d = a.Jj;
            f = a.Zb.K.position.x + (e.g.x * d.x + e.h.x * d.y);
            g = a.Zb.K.position.y + (e.g.y * d.x + e.h.y * d.y);
            e = a.Pb.K.I;
            for (b = 0; b < a.ii; ++b)
                d = a.Uf[b].Jj,
                c = a.Pb.K.position.x + (e.g.x * d.x + e.h.x * d.y),
                d = a.Pb.K.position.y + (e.g.y * d.x + e.h.y * d.y),
                this.Bw[b] = (c - f) * this.nb.x + (d - g) * this.nb.y - a.mg,
                this.Cb[b].Set(c, d);
            this.nb.x *= -1;
            this.nb.y *= -1
        }
    }
    ;
    Z.Bd.push(function() {
        Z.i.qa.yn.LO = new N;
        Z.i.qa.yn.MO = new N
    })
}
)();
(function() {
    var a = Z.H.Math.Lk
      , b = Z.H.Math.th
      , c = Z.H.Math.ab
      , d = Z.i.zc.Uy
      , e = Z.i.zc.Wy
      , f = Z.i.zc.Xy
      , g = Z.i.zc.Jd
      , h = Z.i.zc.cz
      , k = Z.i.zc.iz
      , m = Z.i.zc.sz;
    Z.lc(d, Z.i.zc.Jd);
    d.prototype.ua = Z.i.zc.Jd.prototype;
    d.Uy = function() {
        Z.i.zc.Jd.Jd.apply(this, arguments);
        this.Fh = new c(0,-1);
        this.xh = this.offset = 0;
        this.mI = new c(0,0);
        this.KL = 2;
        this.eK = 1;
        this.QN = !0;
        this.If = null
    }
    ;
    d.prototype.Tl = function() {
        if (this.vd) {
            this.QN && (this.If = this.Sd.KA.hf());
            for (var a = this.vd; a; a = a.Lg) {
                var b = a.body;
                if (0 != b.Yd()) {
                    for (var d = new c, e = new c, f = 0, g = 0, h = b.Mj; h; h = h.La) {
                        var k = new c
                          , m = h.Sc.Hu(this.Fh, this.offset, b.Yf(), k)
                          , f = f + m;
                        d.x += m * k.x;
                        d.y += m * k.y;
                        g += 1 * m;
                        e.x += m * k.x * 1;
                        e.y += m * k.y * 1
                    }
                    d.x /= f;
                    d.y /= f;
                    e.x /= g;
                    e.y /= g;
                    f < Number.MIN_VALUE || (e = this.If.Ol(),
                    e.ag(this.xh * f),
                    b.Ll(e),
                    d = b.JI(d),
                    d.ED(this.mI),
                    d.ag(-this.KL * f),
                    b.Ll(d),
                    b.$x(-b.Yh / b.ba * f * b.P * this.eK))
                }
            }
        }
    }
    ;
    Z.lc(e, Z.i.zc.Jd);
    e.prototype.ua = Z.i.zc.Jd.prototype;
    e.Wy = function() {
        Z.i.zc.Jd.Jd.apply(this, arguments);
        this.OC = new c(0,0)
    }
    ;
    e.prototype.Tl = function(a) {
        a = new c(this.OC.x * a.rb,this.OC.y * a.rb);
        for (var b = this.vd; b; b = b.Lg) {
            var d = b.body;
            d.Yd() && d.Sl(new c(d.s.x + a.x,d.s.y + a.y))
        }
    }
    ;
    Z.lc(f, Z.i.zc.Jd);
    f.prototype.ua = Z.i.zc.Jd.prototype;
    f.Xy = function() {
        Z.i.zc.Jd.Jd.apply(this, arguments);
        this.FI = new c(0,0)
    }
    ;
    f.prototype.Tl = function() {
        for (var a = this.vd; a; a = a.Lg) {
            var b = a.body;
            b.Yd() && b.Ll(this.FI)
        }
    }
    ;
    g.Jd = function() {}
    ;
    g.prototype.Tl = function() {}
    ;
    g.prototype.Zx = function(a) {
        var b = new h;
        b.controller = this;
        b.body = a;
        b.Lg = this.vd;
        b.Ot = null;
        this.vd = b;
        b.Lg && (b.Lg.Ot = b);
        this.Kf++;
        b.ml = a.rm;
        b.Pt = null;
        a.rm = b;
        b.ml && (b.ml.Pt = b);
        a.HA++
    }
    ;
    g.prototype.sD = function(a) {
        for (var b = a.rm; b && b.controller != this; )
            b = b.ml;
        b.Ot && (b.Ot.Lg = b.Lg);
        b.Lg && (b.Lg.Ot = b.Ot);
        b.ml && (b.ml.Pt = b.Pt);
        b.Pt && (b.Pt.ml = b.ml);
        this.vd == b && (this.vd = b.Lg);
        a.rm == b && (a.rm = b.ml);
        a.HA--;
        this.Kf--
    }
    ;
    g.prototype.ay = function() {
        for (; this.vd; )
            this.sD(this.vd.body)
    }
    ;
    h.cz = function() {}
    ;
    Z.lc(k, Z.i.zc.Jd);
    k.prototype.ua = Z.i.zc.Jd.prototype;
    k.iz = function() {
        Z.i.zc.Jd.Jd.apply(this, arguments);
        this.bD = 1;
        this.uL = !0
    }
    ;
    k.prototype.Tl = function() {
        var a, b, d, e, f, g, h, k, m;
        if (this.uL)
            for (a = this.vd; a; a = a.Lg)
                for (b = a.body,
                d = b.f.D,
                e = b.ba,
                f = this.vd; f != a; f = f.Lg)
                    g = f.body,
                    h = g.f.D,
                    k = h.x - d.x,
                    m = h.y - d.y,
                    h = k * k + m * m,
                    h < Number.MIN_VALUE || (k = new c(k,m),
                    k.ag(this.bD / h / Math.sqrt(h) * e * g.ba),
                    b.Yd() && b.Ll(k),
                    k.ag(-1),
                    g.Yd() && g.Ll(k));
        else
            for (a = this.vd; a; a = a.Lg)
                for (b = a.body,
                d = b.f.D,
                e = b.ba,
                f = this.vd; f != a; f = f.Lg)
                    g = f.body,
                    h = g.f.D,
                    k = h.x - d.x,
                    m = h.y - d.y,
                    h = k * k + m * m,
                    h < Number.MIN_VALUE || (k = new c(k,m),
                    k.ag(this.bD / h * e * g.ba),
                    b.Yd() && b.Ll(k),
                    k.ag(-1),
                    g.Yd() && g.Ll(k))
    }
    ;
    Z.lc(m, Z.i.zc.Jd);
    m.prototype.ua = Z.i.zc.Jd.prototype;
    m.sz = function() {
        Z.i.zc.Jd.Jd.apply(this, arguments);
        this.VJ = new a;
        this.XA = 0
    }
    ;
    m.prototype.Tl = function(a) {
        a = a.rb;
        if (!(a <= Number.MIN_VALUE)) {
            a > this.XA && 0 < this.XA && (a = this.XA);
            for (var d = this.vd; d; d = d.Lg) {
                var e = d.body;
                if (e.Yd()) {
                    var f = e.ky(b.Qe(this.VJ, e.iy(e.s)));
                    e.Sl(new c(e.s.x + f.x * a,e.s.y + f.y * a))
                }
            }
        }
    }
}
)();
(function() {
    var a = Z.H.oa
      , b = Z.H.Math.Lk
      , c = Z.H.Math.Gp
      , d = Z.H.Math.th
      , e = Z.H.Math.ab
      , f = Z.H.Math.Kp
      , g = Z.i.N.Or
      , h = Z.i.N.vj
      , k = Z.i.N.Tr
      , m = Z.i.N.Ur
      , l = Z.i.N.Vr
      , t = Z.i.N.Wr
      , w = Z.i.N.jz
      , r = Z.i.N.pa
      , u = Z.i.N.Ia
      , n = Z.i.N.kz
      , z = Z.i.N.Xr
      , E = Z.i.N.Yr
      , A = Z.i.N.$r
      , v = Z.i.N.as
      , H = Z.i.N.cs
      , G = Z.i.N.Mk
      , O = Z.i.N.Hp
      , N = Z.i.N.zn
      , J = Z.i.N.Ip
      , K = Z.i.N.Nk
      , L = Z.i.N.gs
      , M = Z.i.N.hs;
    Z.lc(g, Z.i.N.pa);
    g.prototype.ua = Z.i.N.pa.prototype;
    g.Or = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Ja = new e;
        this.Ka = new e;
        this.ke = new e
    }
    ;
    g.prototype.zD = function(a) {
        void 0 === a && (a = 0);
        this.sm = a
    }
    ;
    g.prototype.xD = function(a) {
        void 0 === a && (a = 0);
        this.mq = a
    }
    ;
    g.prototype.Or = function(a) {
        this.ua.pa.call(this, a);
        this.Ja.S(a.ae);
        this.Ka.S(a.be);
        this.MA = a.length;
        this.sm = a.Vn;
        this.mq = a.Jn;
        this.RF = this.Of = this.w = 0
    }
    ;
    g.prototype.rh = function(b) {
        var c, d, e = this.Na, f = this.Aa;
        c = e.K.I;
        var g = this.Ja.x - e.f.Z.x
          , h = this.Ja.y - e.f.Z.y;
        d = c.g.x * g + c.h.x * h;
        h = c.g.y * g + c.h.y * h;
        g = d;
        c = f.K.I;
        var k = this.Ka.x - f.f.Z.x
          , q = this.Ka.y - f.f.Z.y;
        d = c.g.x * k + c.h.x * q;
        q = c.g.y * k + c.h.y * q;
        k = d;
        this.ke.x = f.f.D.x + k - e.f.D.x - g;
        this.ke.y = f.f.D.y + q - e.f.D.y - h;
        d = Math.sqrt(this.ke.x * this.ke.x + this.ke.y * this.ke.y);
        d > a.Yb ? this.ke.ag(1 / d) : this.ke.hb();
        c = g * this.ke.y - h * this.ke.x;
        var l = k * this.ke.y - q * this.ke.x;
        c = e.X + e.ia * c * c + f.X + f.ia * l * l;
        this.ba = 0 != c ? 1 / c : 0;
        if (0 < this.sm) {
            d -= this.MA;
            var l = 2 * Math.PI * this.sm
              , m = this.ba * l * l;
            this.Of = b.rb * (2 * this.ba * this.mq * l + b.rb * m);
            this.Of = 0 != this.Of ? 1 / this.Of : 0;
            this.RF = d * b.rb * m * this.Of;
            this.ba = c + this.Of;
            this.ba = 0 != this.ba ? 1 / this.ba : 0
        }
        b.yi ? (this.w *= b.Cd,
        b = this.w * this.ke.x,
        c = this.w * this.ke.y,
        e.s.x -= e.X * b,
        e.s.y -= e.X * c,
        e.P -= e.ia * (g * c - h * b),
        f.s.x += f.X * b,
        f.s.y += f.X * c,
        f.P += f.ia * (k * c - q * b)) : this.w = 0
    }
    ;
    g.prototype.Sg = function() {
        var a, b = this.Na, c = this.Aa;
        a = b.K.I;
        var d = this.Ja.x - b.f.Z.x
          , e = this.Ja.y - b.f.Z.y
          , f = a.g.x * d + a.h.x * e
          , e = a.g.y * d + a.h.y * e
          , d = f;
        a = c.K.I;
        var g = this.Ka.x - c.f.Z.x
          , h = this.Ka.y - c.f.Z.y
          , f = a.g.x * g + a.h.x * h
          , h = a.g.y * g + a.h.y * h
          , g = f
          , f = -this.ba * (this.ke.x * (c.s.x + -c.P * h - (b.s.x + -b.P * e)) + this.ke.y * (c.s.y + c.P * g - (b.s.y + b.P * d)) + this.RF + this.Of * this.w);
        this.w += f;
        a = f * this.ke.x;
        f *= this.ke.y;
        b.s.x -= b.X * a;
        b.s.y -= b.X * f;
        b.P -= b.ia * (d * f - e * a);
        c.s.x += c.X * a;
        c.s.y += c.X * f;
        c.P += c.ia * (g * f - h * a)
    }
    ;
    g.prototype.Rg = function() {
        var b;
        if (0 < this.sm)
            return !0;
        var c = this.Na
          , e = this.Aa;
        b = c.K.I;
        var f = this.Ja.x - c.f.Z.x
          , g = this.Ja.y - c.f.Z.y
          , h = b.g.x * f + b.h.x * g
          , g = b.g.y * f + b.h.y * g
          , f = h;
        b = e.K.I;
        var k = this.Ka.x - e.f.Z.x
          , l = this.Ka.y - e.f.Z.y
          , h = b.g.x * k + b.h.x * l
          , l = b.g.y * k + b.h.y * l
          , k = h
          , m = e.f.D.x + k - c.f.D.x - f
          , n = e.f.D.y + l - c.f.D.y - g
          , r = Math.sqrt(m * m + n * n);
        b = r - this.MA;
        b = d.ec(b, -a.Wg, a.Wg);
        h = -this.ba * b;
        this.ke.Set(m / r, n / r);
        m = h * this.ke.x;
        h *= this.ke.y;
        c.f.D.x -= c.X * m;
        c.f.D.y -= c.X * h;
        c.f.V -= c.ia * (f * h - g * m);
        e.f.D.x += e.X * m;
        e.f.D.y += e.X * h;
        e.f.V += e.ia * (k * h - l * m);
        c.pd();
        e.pd();
        return d.we(b) < a.Yb
    }
    ;
    Z.lc(h, Z.i.N.Ia);
    h.prototype.ua = Z.i.N.Ia.prototype;
    h.vj = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e
    }
    ;
    h.prototype.vj = function() {
        this.ua.Ia.call(this);
        this.type = r.SE;
        this.length = 1;
        this.Jn = this.Vn = 0
    }
    ;
    h.prototype.Ib = function(a, b, c, d) {
        this.Pb = a;
        this.Zb = b;
        this.ae.S(this.Pb.Xf(c));
        this.be.S(this.Zb.Xf(d));
        a = d.x - c.x;
        c = d.y - c.y;
        this.length = Math.sqrt(a * a + c * c);
        this.Jn = this.Vn = 0
    }
    ;
    Z.lc(k, Z.i.N.pa);
    k.prototype.ua = Z.i.N.pa.prototype;
    k.Tr = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Ch = new e;
        this.Dh = new e;
        this.PA = new b;
        this.Bh = new e
    }
    ;
    k.prototype.Tr = function(a) {
        this.ua.pa.call(this, a);
        this.Ch.S(a.ae);
        this.Dh.S(a.be);
        this.PA.hb();
        this.bt = 0;
        this.Bh.hb();
        this.bl = 0;
        this.QA = a.VA;
        this.cM = a.lM
    }
    ;
    k.prototype.rh = function(a) {
        var c, d, e = this.Na, f = this.Aa;
        c = e.K.I;
        var g = this.Ch.x - e.f.Z.x
          , h = this.Ch.y - e.f.Z.y;
        d = c.g.x * g + c.h.x * h;
        h = c.g.y * g + c.h.y * h;
        g = d;
        c = f.K.I;
        var k = this.Dh.x - f.f.Z.x
          , q = this.Dh.y - f.f.Z.y;
        d = c.g.x * k + c.h.x * q;
        q = c.g.y * k + c.h.y * q;
        k = d;
        c = e.X;
        d = f.X;
        var l = e.ia
          , m = f.ia
          , n = new b;
        n.g.x = c + d;
        n.h.x = 0;
        n.g.y = 0;
        n.h.y = c + d;
        n.g.x += l * h * h;
        n.h.x += -l * g * h;
        n.g.y += -l * g * h;
        n.h.y += l * g * g;
        n.g.x += m * q * q;
        n.h.x += -m * k * q;
        n.g.y += -m * k * q;
        n.h.y += m * k * k;
        n.hy(this.PA);
        this.bt = l + m;
        0 < this.bt && (this.bt = 1 / this.bt);
        a.yi ? (this.Bh.x *= a.Cd,
        this.Bh.y *= a.Cd,
        this.bl *= a.Cd,
        a = this.Bh,
        e.s.x -= c * a.x,
        e.s.y -= c * a.y,
        e.P -= l * (g * a.y - h * a.x + this.bl),
        f.s.x += d * a.x,
        f.s.y += d * a.y,
        f.P += m * (k * a.y - q * a.x + this.bl)) : (this.Bh.hb(),
        this.bl = 0)
    }
    ;
    k.prototype.Sg = function(a) {
        var b, c, f = this.Na, g = this.Aa, h = f.s, k = f.P, q = g.s, l = g.P, m = f.X, n = g.X, r = f.ia, t = g.ia;
        b = f.K.I;
        var u = this.Ch.x - f.f.Z.x
          , w = this.Ch.y - f.f.Z.y;
        c = b.g.x * u + b.h.x * w;
        w = b.g.y * u + b.h.y * w;
        u = c;
        b = g.K.I;
        var v = this.Dh.x - g.f.Z.x
          , A = this.Dh.y - g.f.Z.y;
        c = b.g.x * v + b.h.x * A;
        A = b.g.y * v + b.h.y * A;
        v = c;
        c = -this.bt * (l - k);
        var z = this.bl;
        b = a.rb * this.cM;
        this.bl = d.ec(this.bl + c, -b, b);
        c = this.bl - z;
        k -= r * c;
        l += t * c;
        b = d.Qe(this.PA, new e(-(q.x - l * A - h.x + k * w),-(q.y + l * v - h.y - k * u)));
        c = this.Bh.hf();
        this.Bh.hp(b);
        b = a.rb * this.QA;
        this.Bh.ny() > b * b && (this.Bh.rg(),
        this.Bh.ag(b));
        b = d.od(this.Bh, c);
        h.x -= m * b.x;
        h.y -= m * b.y;
        k -= r * (u * b.y - w * b.x);
        q.x += n * b.x;
        q.y += n * b.y;
        l += t * (v * b.y - A * b.x);
        f.P = k;
        g.P = l
    }
    ;
    k.prototype.Rg = function() {
        return !0
    }
    ;
    Z.lc(m, Z.i.N.Ia);
    m.prototype.ua = Z.i.N.Ia.prototype;
    m.Ur = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e
    }
    ;
    m.prototype.Ur = function() {
        this.ua.Ia.call(this);
        this.type = r.UE;
        this.lM = this.VA = 0
    }
    ;
    m.prototype.Ib = function(a, b, c) {
        this.Pb = a;
        this.Zb = b;
        this.ae.S(this.Pb.Xf(c));
        this.be.S(this.Zb.Xf(c))
    }
    ;
    Z.lc(l, Z.i.N.pa);
    l.prototype.ua = Z.i.N.pa.prototype;
    l.Vr = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.dl = new e;
        this.el = new e;
        this.Ja = new e;
        this.Ka = new e;
        this.gd = new w
    }
    ;
    l.prototype.Vr = function(a) {
        this.ua.pa.call(this, a);
        var b = parseInt(a.ao.ea)
          , c = parseInt(a.bo.ea);
        this.rq = this.vo = this.qq = this.uo = null;
        this.VL = a.ao.Na;
        this.Na = a.ao.Aa;
        b == r.Ov ? (this.uo = a.ao instanceof J ? a.ao : null,
        this.dl.S(this.uo.Ja),
        this.Ja.S(this.uo.Ka),
        b = this.uo.Lu()) : (this.qq = a.ao instanceof H ? a.ao : null,
        this.dl.S(this.qq.Ja),
        this.Ja.S(this.qq.Ka),
        b = this.qq.xr());
        this.WL = a.bo.Na;
        this.Aa = a.bo.Aa;
        c == r.Ov ? (this.vo = a.bo instanceof J ? a.bo : null,
        this.el.S(this.vo.Ja),
        this.Ka.S(this.vo.Ka),
        c = this.vo.Lu()) : (this.rq = a.bo instanceof H ? a.bo : null,
        this.el.S(this.rq.Ja),
        this.Ka.S(this.rq.Ka),
        c = this.rq.xr());
        this.zd = a.ratio;
        this.kq = b + this.zd * c;
        this.w = 0
    }
    ;
    l.prototype.rh = function(a) {
        var b = this.VL, c = this.WL, d = this.Na, e = this.Aa, f, g, h, k, q, l = 0;
        this.gd.hb();
        this.uo ? (this.gd.tn = -1,
        l += d.ia) : (k = b.K.I,
        f = this.qq.Hg,
        b = k.g.x * f.x + k.h.x * f.y,
        f = k.g.y * f.x + k.h.y * f.y,
        k = d.K.I,
        g = this.Ja.x - d.f.Z.x,
        h = this.Ja.y - d.f.Z.y,
        q = k.g.x * g + k.h.x * h,
        h = k.g.y * g + k.h.y * h,
        k = q * f - h * b,
        this.gd.Ui.Set(-b, -f),
        this.gd.tn = -k,
        l += d.X + d.ia * k * k);
        this.vo ? (this.gd.un = -this.zd,
        l += this.zd * this.zd * e.ia) : (k = c.K.I,
        f = this.rq.Hg,
        b = k.g.x * f.x + k.h.x * f.y,
        f = k.g.y * f.x + k.h.y * f.y,
        k = e.K.I,
        g = this.Ka.x - e.f.Z.x,
        h = this.Ka.y - e.f.Z.y,
        q = k.g.x * g + k.h.x * h,
        h = k.g.y * g + k.h.y * h,
        k = q * f - h * b,
        this.gd.Vi.Set(-this.zd * b, -this.zd * f),
        this.gd.un = -this.zd * k,
        l += this.zd * this.zd * (e.X + e.ia * k * k));
        this.ba = 0 < l ? 1 / l : 0;
        a.yi ? (d.s.x += d.X * this.w * this.gd.Ui.x,
        d.s.y += d.X * this.w * this.gd.Ui.y,
        d.P += d.ia * this.w * this.gd.tn,
        e.s.x += e.X * this.w * this.gd.Vi.x,
        e.s.y += e.X * this.w * this.gd.Vi.y,
        e.P += e.ia * this.w * this.gd.un) : this.w = 0
    }
    ;
    l.prototype.Sg = function() {
        var a = this.Na
          , b = this.Aa
          , c = -this.ba * this.gd.BI(a.s, a.P, b.s, b.P);
        this.w += c;
        a.s.x += a.X * c * this.gd.Ui.x;
        a.s.y += a.X * c * this.gd.Ui.y;
        a.P += a.ia * c * this.gd.tn;
        b.s.x += b.X * c * this.gd.Vi.x;
        b.s.y += b.X * c * this.gd.Vi.y;
        b.P += b.ia * c * this.gd.un
    }
    ;
    l.prototype.Rg = function() {
        var b = this.Na, c = this.Aa, d, e;
        d = this.uo ? this.uo.Lu() : this.qq.xr();
        e = this.vo ? this.vo.Lu() : this.rq.xr();
        d = -this.ba * (this.kq - (d + this.zd * e));
        b.f.D.x += b.X * d * this.gd.Ui.x;
        b.f.D.y += b.X * d * this.gd.Ui.y;
        b.f.V += b.ia * d * this.gd.tn;
        c.f.D.x += c.X * d * this.gd.Vi.x;
        c.f.D.y += c.X * d * this.gd.Vi.y;
        c.f.V += c.ia * d * this.gd.un;
        b.pd();
        c.pd();
        return 0 < a.Yb
    }
    ;
    Z.lc(t, Z.i.N.Ia);
    t.prototype.ua = Z.i.N.Ia.prototype;
    t.Wr = function() {
        Z.i.N.Ia.Ia.apply(this, arguments)
    }
    ;
    t.prototype.Wr = function() {
        this.ua.Ia.call(this);
        this.type = r.VE;
        this.bo = this.ao = null;
        this.ratio = 1
    }
    ;
    w.jz = function() {
        this.Ui = new e;
        this.Vi = new e
    }
    ;
    w.prototype.hb = function() {
        this.Ui.hb();
        this.tn = 0;
        this.Vi.hb();
        this.un = 0
    }
    ;
    w.prototype.Set = function(a, b, c, d) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        this.Ui.S(a);
        this.tn = b;
        this.Vi.S(c);
        this.un = d
    }
    ;
    w.prototype.BI = function(a, b, c, d) {
        void 0 === b && (b = 0);
        void 0 === d && (d = 0);
        return this.Ui.x * a.x + this.Ui.y * a.y + this.tn * b + (this.Vi.x * c.x + this.Vi.y * c.y) + this.un * d
    }
    ;
    r.pa = function() {
        this.gg = new n;
        this.hg = new n;
        this.Qj = new e;
        this.Rj = new e
    }
    ;
    r.prototype.Mc = function() {
        return this.ea
    }
    ;
    r.prototype.Ai = function() {
        return this.hl
    }
    ;
    r.prototype.Gy = function(a) {
        this.hl = a
    }
    ;
    r.prototype.fn = function() {
        return this.Na.fn() && this.Aa.fn()
    }
    ;
    r.pg = function(a) {
        var b = null;
        switch (a.type) {
        case r.SE:
            b = new g(a instanceof h ? a : null);
            break;
        case r.YE:
            b = new A(a instanceof v ? a : null);
            break;
        case r.$E:
            b = new H(a instanceof G ? a : null);
            break;
        case r.Ov:
            b = new J(a instanceof K ? a : null);
            break;
        case r.aF:
            b = new O(a instanceof N ? a : null);
            break;
        case r.VE:
            b = new l(a instanceof t ? a : null);
            break;
        case r.WE:
            b = new z(a instanceof E ? a : null);
            break;
        case r.bF:
            b = new L(a instanceof M ? a : null);
            break;
        case r.UE:
            b = new k(a instanceof m ? a : null)
        }
        return b
    }
    ;
    r.Xd = function() {}
    ;
    r.prototype.pa = function(a) {
        this.ea = a.type;
        this.La = this.Je = null;
        this.Na = a.Pb;
        this.Aa = a.Zb;
        this.SF = a.lf;
        this.mo = !1;
        this.hl = a.Pg
    }
    ;
    r.prototype.rh = function() {}
    ;
    r.prototype.Sg = function() {}
    ;
    r.prototype.fy = function() {}
    ;
    r.prototype.Rg = function() {
        return !1
    }
    ;
    Z.Bd.push(function() {
        Z.i.N.pa.TK = 0;
        Z.i.N.pa.Ov = 1;
        Z.i.N.pa.$E = 2;
        Z.i.N.pa.SE = 3;
        Z.i.N.pa.aF = 4;
        Z.i.N.pa.YE = 5;
        Z.i.N.pa.VE = 6;
        Z.i.N.pa.WE = 7;
        Z.i.N.pa.bF = 8;
        Z.i.N.pa.UE = 9;
        Z.i.N.pa.dg = 0;
        Z.i.N.pa.Aj = 1;
        Z.i.N.pa.Ue = 2;
        Z.i.N.pa.jm = 3
    });
    u.Ia = function() {}
    ;
    u.prototype.Ia = function() {
        this.type = r.TK;
        this.Zb = this.Pb = this.Pg = null;
        this.lf = !1
    }
    ;
    n.kz = function() {}
    ;
    Z.lc(z, Z.i.N.pa);
    z.prototype.ua = Z.i.N.pa.prototype;
    z.Xr = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Ja = new e;
        this.Ka = new e;
        this.Hg = new e;
        this.gl = new e;
        this.ga = new e;
        this.Sa = new e;
        this.Ha = new b;
        this.w = new e
    }
    ;
    z.prototype.xr = function() {
        var a = this.Na
          , b = this.Aa
          , c = a.Ou(this.Ja)
          , d = b.Ou(this.Ka)
          , b = d.x - c.x
          , c = d.y - c.y
          , a = a.ky(this.Hg);
        return a.x * b + a.y * c
    }
    ;
    z.prototype.en = function(a) {
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.dh = a
    }
    ;
    z.prototype.Mu = function() {
        return this.Rf
    }
    ;
    z.prototype.Nu = function() {
        return this.Sf
    }
    ;
    z.prototype.Gr = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Rf = a;
        this.Sf = b
    }
    ;
    z.prototype.tr = function(a) {
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Xi = a
    }
    ;
    z.prototype.Hr = function(a) {
        void 0 === a && (a = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Sj = a
    }
    ;
    z.prototype.BD = function(a) {
        void 0 === a && (a = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.pq = a
    }
    ;
    z.prototype.Xr = function(a) {
        this.ua.pa.call(this, a);
        this.Ja.S(a.ae);
        this.Ka.S(a.be);
        this.Hg.S(a.ho);
        this.gl.x = -this.Hg.y;
        this.gl.y = this.Hg.x;
        this.w.hb();
        this.Mb = this.ig = 0;
        this.Rf = a.pw;
        this.Sf = a.Tx;
        this.pq = a.WA;
        this.Sj = a.ut;
        this.dh = a.Uk;
        this.Xi = a.Ds;
        this.wb = r.dg;
        this.ga.hb();
        this.Sa.hb()
    }
    ;
    z.prototype.rh = function(b) {
        var c = this.Na, e = this.Aa, f, g;
        this.Qj.S(c.f.Z);
        this.Rj.S(e.f.Z);
        var h = c.Yf();
        e.Yf();
        f = c.K.I;
        var k = this.Ja.x - this.Qj.x
          , q = this.Ja.y - this.Qj.y;
        g = f.g.x * k + f.h.x * q;
        q = f.g.y * k + f.h.y * q;
        k = g;
        f = e.K.I;
        var l = this.Ka.x - this.Rj.x
          , m = this.Ka.y - this.Rj.y;
        g = f.g.x * l + f.h.x * m;
        m = f.g.y * l + f.h.y * m;
        l = g;
        f = e.f.D.x + l - c.f.D.x - k;
        g = e.f.D.y + m - c.f.D.y - q;
        this.wd = c.X;
        this.xd = e.X;
        this.Pf = c.ia;
        this.Qf = e.ia;
        this.ga.S(d.Qe(h.I, this.Hg));
        this.$b = (f + k) * this.ga.y - (g + q) * this.ga.x;
        this.ac = l * this.ga.y - m * this.ga.x;
        this.ig = this.wd + this.xd + this.Pf * this.$b * this.$b + this.Qf * this.ac * this.ac;
        this.ig = this.ig > Number.MIN_VALUE ? 1 / this.ig : 0;
        this.Sa.S(d.Qe(h.I, this.gl));
        this.nc = (f + k) * this.Sa.y - (g + q) * this.Sa.x;
        this.oc = l * this.Sa.y - m * this.Sa.x;
        h = this.wd;
        k = this.xd;
        q = this.Pf;
        l = this.Qf;
        this.Ha.g.x = h + k + q * this.nc * this.nc + l * this.oc * this.oc;
        this.Ha.g.y = q * this.nc * this.$b + l * this.oc * this.ac;
        this.Ha.h.x = this.Ha.g.y;
        this.Ha.h.y = h + k + q * this.$b * this.$b + l * this.ac * this.ac;
        this.dh ? (f = this.ga.x * f + this.ga.y * g,
        d.we(this.Sf - this.Rf) < 2 * a.Yb ? this.wb = r.jm : f <= this.Rf ? this.wb != r.Aj && (this.wb = r.Aj,
        this.w.y = 0) : f >= this.Sf ? this.wb != r.Ue && (this.wb = r.Ue,
        this.w.y = 0) : (this.wb = r.dg,
        this.w.y = 0)) : this.wb = r.dg;
        0 == this.Xi && (this.Mb = 0);
        b.yi ? (this.w.x *= b.Cd,
        this.w.y *= b.Cd,
        this.Mb *= b.Cd,
        b = this.w.x * this.Sa.x + (this.Mb + this.w.y) * this.ga.x,
        f = this.w.x * this.Sa.y + (this.Mb + this.w.y) * this.ga.y,
        g = this.w.x * this.nc + (this.Mb + this.w.y) * this.$b,
        h = this.w.x * this.oc + (this.Mb + this.w.y) * this.ac,
        c.s.x -= this.wd * b,
        c.s.y -= this.wd * f,
        c.P -= this.Pf * g,
        e.s.x += this.xd * b,
        e.s.y += this.xd * f,
        e.P += this.Qf * h) : (this.w.hb(),
        this.Mb = 0)
    }
    ;
    z.prototype.Sg = function(a) {
        var b = this.Na, c = this.Aa, f = b.s, g = b.P, h = c.s, k = c.P, q, l, m;
        this.Xi && this.wb != r.jm && (m = this.ig * (this.Sj - (this.ga.x * (h.x - f.x) + this.ga.y * (h.y - f.y) + this.ac * k - this.$b * g)),
        q = this.Mb,
        a = a.rb * this.pq,
        this.Mb = d.ec(this.Mb + m, -a, a),
        m = this.Mb - q,
        q = m * this.ga.x,
        a = m * this.ga.y,
        l = m * this.$b,
        m *= this.ac,
        f.x -= this.wd * q,
        f.y -= this.wd * a,
        g -= this.Pf * l,
        h.x += this.xd * q,
        h.y += this.xd * a,
        k += this.Qf * m);
        a = this.Sa.x * (h.x - f.x) + this.Sa.y * (h.y - f.y) + this.oc * k - this.nc * g;
        this.dh && this.wb != r.dg ? (l = this.ga.x * (h.x - f.x) + this.ga.y * (h.y - f.y) + this.ac * k - this.$b * g,
        q = this.w.hf(),
        m = this.Ha.pn(new e, -a, -l),
        this.w.hp(m),
        this.wb == r.Aj ? this.w.y = d.Cf(this.w.y, 0) : this.wb == r.Ue && (this.w.y = d.mn(this.w.y, 0)),
        a = -a - (this.w.y - q.y) * this.Ha.h.x,
        this.w.x = 0 != this.Ha.g.x ? a / this.Ha.g.x + q.x : q.x,
        m.x = this.w.x - q.x,
        m.y = this.w.y - q.y,
        q = m.x * this.Sa.x + m.y * this.ga.x,
        a = m.x * this.Sa.y + m.y * this.ga.y,
        l = m.x * this.nc + m.y * this.$b,
        m = m.x * this.oc + m.y * this.ac) : (m = 0 != this.Ha.g.x ? -a / this.Ha.g.x : 0,
        this.w.x += m,
        q = m * this.Sa.x,
        a = m * this.Sa.y,
        l = m * this.nc,
        m *= this.oc);
        f.x -= this.wd * q;
        f.y -= this.wd * a;
        g -= this.Pf * l;
        h.x += this.xd * q;
        h.y += this.xd * a;
        k += this.Qf * m;
        b.s.S(f);
        b.P = g;
        c.s.S(h);
        c.P = k
    }
    ;
    z.prototype.Rg = function() {
        var c = this.Na, f = this.Aa, g = c.f.D, h = c.f.V, k = f.f.D, l = f.f.V, m, n, r, t, u, w, v = 0;
        r = !1;
        var A = 0
          , z = b.Ku(h);
        u = b.Ku(l);
        m = z;
        var E = this.Ja.x - this.Qj.x;
        t = this.Ja.y - this.Qj.y;
        n = m.g.x * E + m.h.x * t;
        t = m.g.y * E + m.h.y * t;
        E = n;
        m = u;
        u = this.Ka.x - this.Rj.x;
        w = this.Ka.y - this.Rj.y;
        n = m.g.x * u + m.h.x * w;
        w = m.g.y * u + m.h.y * w;
        u = n;
        m = k.x + u - g.x - E;
        n = k.y + w - g.y - t;
        if (this.dh) {
            this.ga = d.Qe(z, this.Hg);
            this.$b = (m + E) * this.ga.y - (n + t) * this.ga.x;
            this.ac = u * this.ga.y - w * this.ga.x;
            var G = this.ga.x * m + this.ga.y * n;
            d.we(this.Sf - this.Rf) < 2 * a.Yb ? (A = d.ec(G, -a.Wg, a.Wg),
            v = d.we(G),
            r = !0) : G <= this.Rf ? (A = d.ec(G - this.Rf + a.Yb, -a.Wg, 0),
            v = this.Rf - G,
            r = !0) : G >= this.Sf && (A = d.ec(G - this.Sf + a.Yb, 0, a.Wg),
            v = G - this.Sf,
            r = !0)
        }
        this.Sa = d.Qe(z, this.gl);
        this.nc = (m + E) * this.Sa.y - (n + t) * this.Sa.x;
        this.oc = u * this.Sa.y - w * this.Sa.x;
        z = new e;
        E = this.Sa.x * m + this.Sa.y * n;
        v = d.Cf(v, d.we(E));
        r ? (r = this.wd,
        t = this.xd,
        u = this.Pf,
        w = this.Qf,
        this.Ha.g.x = r + t + u * this.nc * this.nc + w * this.oc * this.oc,
        this.Ha.g.y = u * this.nc * this.$b + w * this.oc * this.ac,
        this.Ha.h.x = this.Ha.g.y,
        this.Ha.h.y = r + t + u * this.$b * this.$b + w * this.ac * this.ac,
        this.Ha.pn(z, -E, -A)) : (r = this.wd,
        t = this.xd,
        u = this.Pf,
        w = this.Qf,
        A = r + t + u * this.nc * this.nc + w * this.oc * this.oc,
        z.x = 0 != A ? -E / A : 0,
        z.y = 0);
        A = z.x * this.Sa.x + z.y * this.ga.x;
        r = z.x * this.Sa.y + z.y * this.ga.y;
        E = z.x * this.nc + z.y * this.$b;
        z = z.x * this.oc + z.y * this.ac;
        g.x -= this.wd * A;
        g.y -= this.wd * r;
        h -= this.Pf * E;
        k.x += this.xd * A;
        k.y += this.xd * r;
        l += this.Qf * z;
        c.f.V = h;
        f.f.V = l;
        c.pd();
        f.pd();
        return v <= a.Yb && 0 <= a.Bn
    }
    ;
    Z.lc(E, Z.i.N.Ia);
    E.prototype.ua = Z.i.N.Ia.prototype;
    E.Yr = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e;
        this.ho = new e
    }
    ;
    E.prototype.Yr = function() {
        this.ua.Ia.call(this);
        this.type = r.WE;
        this.ho.Set(1, 0);
        this.Uk = !1;
        this.Tx = this.pw = 0;
        this.Ds = !1;
        this.ut = this.WA = 0
    }
    ;
    E.prototype.Ib = function(a, b, c, d) {
        this.Pb = a;
        this.Zb = b;
        this.ae = this.Pb.Xf(c);
        this.be = this.Zb.Xf(c);
        this.ho = this.Pb.iy(d)
    }
    ;
    Z.lc(A, Z.i.N.pa);
    A.prototype.ua = Z.i.N.pa.prototype;
    A.$r = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Pe = new b;
        this.Bi = new b;
        this.Ci = new b;
        this.nq = new e;
        this.nt = new e;
        this.w = new e;
        this.ba = new b;
        this.qw = new e
    }
    ;
    A.prototype.zD = function(a) {
        void 0 === a && (a = 0);
        this.sm = a
    }
    ;
    A.prototype.xD = function(a) {
        void 0 === a && (a = 0);
        this.mq = a
    }
    ;
    A.prototype.$r = function(a) {
        this.ua.pa.call(this, a);
        this.nt.S(a.target);
        var b = this.nt.x - this.Aa.K.position.x
          , c = this.nt.y - this.Aa.K.position.y
          , d = this.Aa.K.I;
        this.nq.x = b * d.g.x + c * d.g.y;
        this.nq.y = b * d.h.x + c * d.h.y;
        this.QA = a.VA;
        this.w.hb();
        this.sm = a.Vn;
        this.mq = a.Jn;
        this.Of = this.GA = 0
    }
    ;
    A.prototype.rh = function(a) {
        var b = this.Aa
          , c = b.ba
          , d = 2 * Math.PI * this.sm
          , e = c * d * d;
        this.Of = a.rb * (2 * c * this.mq * d + a.rb * e);
        this.Of = 0 != this.Of ? 1 / this.Of : 0;
        this.GA = a.rb * e * this.Of;
        var e = b.K.I
          , c = this.nq.x - b.f.Z.x
          , d = this.nq.y - b.f.Z.y
          , f = e.g.x * c + e.h.x * d
          , d = e.g.y * c + e.h.y * d
          , c = f
          , e = b.X
          , f = b.ia;
        this.Bi.g.x = e;
        this.Bi.h.x = 0;
        this.Bi.g.y = 0;
        this.Bi.h.y = e;
        this.Ci.g.x = f * d * d;
        this.Ci.h.x = -f * c * d;
        this.Ci.g.y = -f * c * d;
        this.Ci.h.y = f * c * c;
        this.Pe.on(this.Bi);
        this.Pe.Gu(this.Ci);
        this.Pe.g.x += this.Of;
        this.Pe.h.y += this.Of;
        this.Pe.hy(this.ba);
        this.qw.x = b.f.D.x + c - this.nt.x;
        this.qw.y = b.f.D.y + d - this.nt.y;
        b.P *= .98;
        this.w.x *= a.Cd;
        this.w.y *= a.Cd;
        b.s.x += e * this.w.x;
        b.s.y += e * this.w.y;
        b.P += f * (c * this.w.y - d * this.w.x)
    }
    ;
    A.prototype.Sg = function(a) {
        var b = this.Aa, c, d, e;
        c = b.K.I;
        var f = this.nq.x - b.f.Z.x
          , g = this.nq.y - b.f.Z.y;
        d = c.g.x * f + c.h.x * g;
        g = c.g.y * f + c.h.y * g;
        f = d;
        d = b.s.x + -b.P * g;
        var h = b.s.y + b.P * f;
        c = this.ba;
        d = d + this.GA * this.qw.x + this.Of * this.w.x;
        e = h + this.GA * this.qw.y + this.Of * this.w.y;
        h = -(c.g.x * d + c.h.x * e);
        e = -(c.g.y * d + c.h.y * e);
        c = this.w.x;
        d = this.w.y;
        this.w.x += h;
        this.w.y += e;
        a = a.rb * this.QA;
        this.w.ny() > a * a && this.w.ag(a / this.w.Bk());
        h = this.w.x - c;
        e = this.w.y - d;
        b.s.x += b.X * h;
        b.s.y += b.X * e;
        b.P += b.ia * (f * e - g * h)
    }
    ;
    A.prototype.Rg = function() {
        return !0
    }
    ;
    Z.lc(v, Z.i.N.Ia);
    v.prototype.ua = Z.i.N.Ia.prototype;
    v.as = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.target = new e
    }
    ;
    v.prototype.as = function() {
        this.ua.Ia.call(this);
        this.type = r.YE;
        this.VA = 0;
        this.Vn = 5;
        this.Jn = .7
    }
    ;
    Z.lc(H, Z.i.N.pa);
    H.prototype.ua = Z.i.N.pa.prototype;
    H.cs = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Ja = new e;
        this.Ka = new e;
        this.Hg = new e;
        this.gl = new e;
        this.ga = new e;
        this.Sa = new e;
        this.Ha = new c;
        this.w = new f
    }
    ;
    H.prototype.xr = function() {
        var a = this.Na
          , b = this.Aa
          , c = a.Ou(this.Ja)
          , d = b.Ou(this.Ka)
          , b = d.x - c.x
          , c = d.y - c.y
          , a = a.ky(this.Hg);
        return a.x * b + a.y * c
    }
    ;
    H.prototype.en = function(a) {
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.dh = a
    }
    ;
    H.prototype.Mu = function() {
        return this.Rf
    }
    ;
    H.prototype.Nu = function() {
        return this.Sf
    }
    ;
    H.prototype.Gr = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Rf = a;
        this.Sf = b
    }
    ;
    H.prototype.tr = function(a) {
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Xi = a
    }
    ;
    H.prototype.Hr = function(a) {
        void 0 === a && (a = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Sj = a
    }
    ;
    H.prototype.BD = function(a) {
        void 0 === a && (a = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.pq = a
    }
    ;
    H.prototype.cs = function(a) {
        this.ua.pa.call(this, a);
        this.Ja.S(a.ae);
        this.Ka.S(a.be);
        this.Hg.S(a.ho);
        this.gl.x = -this.Hg.y;
        this.gl.y = this.Hg.x;
        this.fM = a.Qm;
        this.w.hb();
        this.Mb = this.ig = 0;
        this.Rf = a.pw;
        this.Sf = a.Tx;
        this.pq = a.WA;
        this.Sj = a.ut;
        this.dh = a.Uk;
        this.Xi = a.Ds;
        this.wb = r.dg;
        this.ga.hb();
        this.Sa.hb()
    }
    ;
    H.prototype.rh = function(b) {
        var c = this.Na, e = this.Aa, f, g;
        this.Qj.S(c.f.Z);
        this.Rj.S(e.f.Z);
        var h = c.Yf();
        e.Yf();
        f = c.K.I;
        var k = this.Ja.x - this.Qj.x
          , l = this.Ja.y - this.Qj.y;
        g = f.g.x * k + f.h.x * l;
        l = f.g.y * k + f.h.y * l;
        k = g;
        f = e.K.I;
        var m = this.Ka.x - this.Rj.x
          , q = this.Ka.y - this.Rj.y;
        g = f.g.x * m + f.h.x * q;
        q = f.g.y * m + f.h.y * q;
        m = g;
        f = e.f.D.x + m - c.f.D.x - k;
        g = e.f.D.y + q - c.f.D.y - l;
        this.wd = c.X;
        this.xd = e.X;
        this.Pf = c.ia;
        this.Qf = e.ia;
        this.ga.S(d.Qe(h.I, this.Hg));
        this.$b = (f + k) * this.ga.y - (g + l) * this.ga.x;
        this.ac = m * this.ga.y - q * this.ga.x;
        this.ig = this.wd + this.xd + this.Pf * this.$b * this.$b + this.Qf * this.ac * this.ac;
        this.ig > Number.MIN_VALUE && (this.ig = 1 / this.ig);
        this.Sa.S(d.Qe(h.I, this.gl));
        this.nc = (f + k) * this.Sa.y - (g + l) * this.Sa.x;
        this.oc = m * this.Sa.y - q * this.Sa.x;
        h = this.wd;
        k = this.xd;
        l = this.Pf;
        m = this.Qf;
        this.Ha.g.x = h + k + l * this.nc * this.nc + m * this.oc * this.oc;
        this.Ha.g.y = l * this.nc + m * this.oc;
        this.Ha.g.z = l * this.nc * this.$b + m * this.oc * this.ac;
        this.Ha.h.x = this.Ha.g.y;
        this.Ha.h.y = l + m;
        this.Ha.h.z = l * this.$b + m * this.ac;
        this.Ha.Xa.x = this.Ha.g.z;
        this.Ha.Xa.y = this.Ha.h.z;
        this.Ha.Xa.z = h + k + l * this.$b * this.$b + m * this.ac * this.ac;
        this.dh ? (f = this.ga.x * f + this.ga.y * g,
        d.we(this.Sf - this.Rf) < 2 * a.Yb ? this.wb = r.jm : f <= this.Rf ? this.wb != r.Aj && (this.wb = r.Aj,
        this.w.z = 0) : f >= this.Sf ? this.wb != r.Ue && (this.wb = r.Ue,
        this.w.z = 0) : (this.wb = r.dg,
        this.w.z = 0)) : this.wb = r.dg;
        0 == this.Xi && (this.Mb = 0);
        b.yi ? (this.w.x *= b.Cd,
        this.w.y *= b.Cd,
        this.Mb *= b.Cd,
        b = this.w.x * this.Sa.x + (this.Mb + this.w.z) * this.ga.x,
        f = this.w.x * this.Sa.y + (this.Mb + this.w.z) * this.ga.y,
        g = this.w.x * this.nc + this.w.y + (this.Mb + this.w.z) * this.$b,
        h = this.w.x * this.oc + this.w.y + (this.Mb + this.w.z) * this.ac,
        c.s.x -= this.wd * b,
        c.s.y -= this.wd * f,
        c.P -= this.Pf * g,
        e.s.x += this.xd * b,
        e.s.y += this.xd * f,
        e.P += this.Qf * h) : (this.w.hb(),
        this.Mb = 0)
    }
    ;
    H.prototype.Sg = function(a) {
        var b = this.Na, c = this.Aa, g = b.s, h = b.P, k = c.s, l = c.P, m, q, n;
        this.Xi && this.wb != r.jm && (n = this.ig * (this.Sj - (this.ga.x * (k.x - g.x) + this.ga.y * (k.y - g.y) + this.ac * l - this.$b * h)),
        m = this.Mb,
        a = a.rb * this.pq,
        this.Mb = d.ec(this.Mb + n, -a, a),
        n = this.Mb - m,
        m = n * this.ga.x,
        a = n * this.ga.y,
        q = n * this.$b,
        n *= this.ac,
        g.x -= this.wd * m,
        g.y -= this.wd * a,
        h -= this.Pf * q,
        k.x += this.xd * m,
        k.y += this.xd * a,
        l += this.Qf * n);
        q = this.Sa.x * (k.x - g.x) + this.Sa.y * (k.y - g.y) + this.oc * l - this.nc * h;
        a = l - h;
        this.dh && this.wb != r.dg ? (n = this.ga.x * (k.x - g.x) + this.ga.y * (k.y - g.y) + this.ac * l - this.$b * h,
        m = this.w.hf(),
        n = this.Ha.Jr(new f, -q, -a, -n),
        this.w.hp(n),
        this.wb == r.Aj ? this.w.z = d.Cf(this.w.z, 0) : this.wb == r.Ue && (this.w.z = d.mn(this.w.z, 0)),
        q = -q - (this.w.z - m.z) * this.Ha.Xa.x,
        a = -a - (this.w.z - m.z) * this.Ha.Xa.y,
        a = this.Ha.wp(new e, q, a),
        a.x += m.x,
        a.y += m.y,
        this.w.x = a.x,
        this.w.y = a.y,
        n.x = this.w.x - m.x,
        n.y = this.w.y - m.y,
        n.z = this.w.z - m.z,
        m = n.x * this.Sa.x + n.z * this.ga.x,
        a = n.x * this.Sa.y + n.z * this.ga.y,
        q = n.x * this.nc + n.y + n.z * this.$b,
        n = n.x * this.oc + n.y + n.z * this.ac) : (n = this.Ha.wp(new e, -q, -a),
        this.w.x += n.x,
        this.w.y += n.y,
        m = n.x * this.Sa.x,
        a = n.x * this.Sa.y,
        q = n.x * this.nc + n.y,
        n = n.x * this.oc + n.y);
        g.x -= this.wd * m;
        g.y -= this.wd * a;
        h -= this.Pf * q;
        k.x += this.xd * m;
        k.y += this.xd * a;
        l += this.Qf * n;
        b.s.S(g);
        b.P = h;
        c.s.S(k);
        c.P = l
    }
    ;
    H.prototype.Rg = function() {
        var c = this.Na, g = this.Aa, h = c.f.D, k = c.f.V, l = g.f.D, m = g.f.V, n, r, t, u, w = 0, v;
        t = !1;
        var A = 0
          , z = b.Ku(k)
          , E = b.Ku(m);
        n = z;
        v = this.Ja.x - this.Qj.x;
        var G = this.Ja.y - this.Qj.y;
        r = n.g.x * v + n.h.x * G;
        G = n.g.y * v + n.h.y * G;
        v = r;
        n = E;
        E = this.Ka.x - this.Rj.x;
        u = this.Ka.y - this.Rj.y;
        r = n.g.x * E + n.h.x * u;
        u = n.g.y * E + n.h.y * u;
        E = r;
        n = l.x + E - h.x - v;
        r = l.y + u - h.y - G;
        if (this.dh) {
            this.ga = d.Qe(z, this.Hg);
            this.$b = (n + v) * this.ga.y - (r + G) * this.ga.x;
            this.ac = E * this.ga.y - u * this.ga.x;
            var H = this.ga.x * n + this.ga.y * r;
            d.we(this.Sf - this.Rf) < 2 * a.Yb ? (A = d.ec(H, -a.Wg, a.Wg),
            w = d.we(H),
            t = !0) : H <= this.Rf ? (A = d.ec(H - this.Rf + a.Yb, -a.Wg, 0),
            w = this.Rf - H,
            t = !0) : H >= this.Sf && (A = d.ec(H - this.Sf + a.Yb, 0, a.Wg),
            w = H - this.Sf,
            t = !0)
        }
        this.Sa = d.Qe(z, this.gl);
        this.nc = (n + v) * this.Sa.y - (r + G) * this.Sa.x;
        this.oc = E * this.Sa.y - u * this.Sa.x;
        z = new f;
        G = this.Sa.x * n + this.Sa.y * r;
        E = m - k - this.fM;
        w = d.Cf(w, d.we(G));
        v = d.we(E);
        t ? (t = this.wd,
        u = this.xd,
        n = this.Pf,
        r = this.Qf,
        this.Ha.g.x = t + u + n * this.nc * this.nc + r * this.oc * this.oc,
        this.Ha.g.y = n * this.nc + r * this.oc,
        this.Ha.g.z = n * this.nc * this.$b + r * this.oc * this.ac,
        this.Ha.h.x = this.Ha.g.y,
        this.Ha.h.y = n + r,
        this.Ha.h.z = n * this.$b + r * this.ac,
        this.Ha.Xa.x = this.Ha.g.z,
        this.Ha.Xa.y = this.Ha.h.z,
        this.Ha.Xa.z = t + u + n * this.$b * this.$b + r * this.ac * this.ac,
        this.Ha.Jr(z, -G, -E, -A)) : (t = this.wd,
        u = this.xd,
        n = this.Pf,
        r = this.Qf,
        A = n * this.nc + r * this.oc,
        H = n + r,
        this.Ha.g.Set(t + u + n * this.nc * this.nc + r * this.oc * this.oc, A, 0),
        this.Ha.h.Set(A, H, 0),
        A = this.Ha.wp(new e, -G, -E),
        z.x = A.x,
        z.y = A.y,
        z.z = 0);
        A = z.x * this.Sa.x + z.z * this.ga.x;
        t = z.x * this.Sa.y + z.z * this.ga.y;
        G = z.x * this.nc + z.y + z.z * this.$b;
        z = z.x * this.oc + z.y + z.z * this.ac;
        h.x -= this.wd * A;
        h.y -= this.wd * t;
        k -= this.Pf * G;
        l.x += this.xd * A;
        l.y += this.xd * t;
        m += this.Qf * z;
        c.f.V = k;
        g.f.V = m;
        c.pd();
        g.pd();
        return w <= a.Yb && v <= a.Bn
    }
    ;
    Z.lc(G, Z.i.N.Ia);
    G.prototype.ua = Z.i.N.Ia.prototype;
    G.Mk = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e;
        this.ho = new e
    }
    ;
    G.prototype.Mk = function() {
        this.ua.Ia.call(this);
        this.type = r.$E;
        this.ho.Set(1, 0);
        this.Qm = 0;
        this.Uk = !1;
        this.Tx = this.pw = 0;
        this.Ds = !1;
        this.ut = this.WA = 0
    }
    ;
    G.prototype.Ib = function(a, b, c, d) {
        this.Pb = a;
        this.Zb = b;
        this.ae = this.Pb.Xf(c);
        this.be = this.Zb.Xf(c);
        this.ho = this.Pb.iy(d);
        this.Qm = this.Zb.qh() - this.Pb.qh()
    }
    ;
    Z.lc(O, Z.i.N.pa);
    O.prototype.ua = Z.i.N.pa.prototype;
    O.Hp = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.dl = new e;
        this.el = new e;
        this.Ja = new e;
        this.Ka = new e;
        this.uc = new e;
        this.vc = new e
    }
    ;
    O.prototype.Hp = function(a) {
        this.ua.pa.call(this, a);
        this.$h = this.Na.Sd.XL;
        this.dl.x = a.Uv.x - this.$h.K.position.x;
        this.dl.y = a.Uv.y - this.$h.K.position.y;
        this.el.x = a.Vv.x - this.$h.K.position.x;
        this.el.y = a.Vv.y - this.$h.K.position.y;
        this.Ja.S(a.ae);
        this.Ka.S(a.be);
        this.zd = a.ratio;
        this.kq = a.xA + this.zd * a.yA;
        this.aG = d.mn(a.iG, this.kq - this.zd * O.yv);
        this.bG = d.mn(a.jG, (this.kq - O.yv) / this.zd);
        this.Pj = this.Oj = this.w = 0
    }
    ;
    O.prototype.rh = function(b) {
        var c = this.Na, d = this.Aa, e;
        e = c.K.I;
        var f = this.Ja.x - c.f.Z.x
          , g = this.Ja.y - c.f.Z.y
          , h = e.g.x * f + e.h.x * g
          , g = e.g.y * f + e.h.y * g
          , f = h;
        e = d.K.I;
        var k = this.Ka.x - d.f.Z.x
          , l = this.Ka.y - d.f.Z.y
          , h = e.g.x * k + e.h.x * l
          , l = e.g.y * k + e.h.y * l
          , k = h;
        e = d.f.D.x + k;
        var h = d.f.D.y + l
          , m = this.$h.K.position.x + this.el.x
          , n = this.$h.K.position.y + this.el.y;
        this.uc.Set(c.f.D.x + f - (this.$h.K.position.x + this.dl.x), c.f.D.y + g - (this.$h.K.position.y + this.dl.y));
        this.vc.Set(e - m, h - n);
        e = this.uc.Bk();
        h = this.vc.Bk();
        e > a.Yb ? this.uc.ag(1 / e) : this.uc.hb();
        h > a.Yb ? this.vc.ag(1 / h) : this.vc.hb();
        0 < this.kq - e - this.zd * h ? (this.TA = r.dg,
        this.w = 0) : this.TA = r.Ue;
        e < this.aG ? (this.NA = r.dg,
        this.Oj = 0) : this.NA = r.Ue;
        h < this.bG ? (this.OA = r.dg,
        this.Pj = 0) : this.OA = r.Ue;
        e = f * this.uc.y - g * this.uc.x;
        h = k * this.vc.y - l * this.vc.x;
        this.it = c.X + c.ia * e * e;
        this.jt = d.X + d.ia * h * h;
        this.yw = this.it + this.zd * this.zd * this.jt;
        this.it = 1 / this.it;
        this.jt = 1 / this.jt;
        this.yw = 1 / this.yw;
        b.yi ? (this.w *= b.Cd,
        this.Oj *= b.Cd,
        this.Pj *= b.Cd,
        b = (-this.w - this.Oj) * this.uc.x,
        e = (-this.w - this.Oj) * this.uc.y,
        h = (-this.zd * this.w - this.Pj) * this.vc.x,
        m = (-this.zd * this.w - this.Pj) * this.vc.y,
        c.s.x += c.X * b,
        c.s.y += c.X * e,
        c.P += c.ia * (f * e - g * b),
        d.s.x += d.X * h,
        d.s.y += d.X * m,
        d.P += d.ia * (k * m - l * h)) : this.Pj = this.Oj = this.w = 0
    }
    ;
    O.prototype.Sg = function() {
        var a = this.Na, b = this.Aa, c;
        c = a.K.I;
        var e = this.Ja.x - a.f.Z.x
          , f = this.Ja.y - a.f.Z.y
          , g = c.g.x * e + c.h.x * f
          , f = c.g.y * e + c.h.y * f
          , e = g;
        c = b.K.I;
        var h = this.Ka.x - b.f.Z.x, k = this.Ka.y - b.f.Z.y, g = c.g.x * h + c.h.x * k, k = c.g.y * h + c.h.y * k, h = g, l, m;
        this.TA == r.Ue && (c = a.s.x + -a.P * f,
        g = a.s.y + a.P * e,
        l = b.s.x + -b.P * k,
        m = b.s.y + b.P * h,
        c = -(this.uc.x * c + this.uc.y * g) - this.zd * (this.vc.x * l + this.vc.y * m),
        m = this.yw * -c,
        c = this.w,
        this.w = d.Cf(0, this.w + m),
        m = this.w - c,
        c = -m * this.uc.x,
        g = -m * this.uc.y,
        l = -this.zd * m * this.vc.x,
        m = -this.zd * m * this.vc.y,
        a.s.x += a.X * c,
        a.s.y += a.X * g,
        a.P += a.ia * (e * g - f * c),
        b.s.x += b.X * l,
        b.s.y += b.X * m,
        b.P += b.ia * (h * m - k * l));
        this.NA == r.Ue && (c = a.s.x + -a.P * f,
        g = a.s.y + a.P * e,
        c = -(this.uc.x * c + this.uc.y * g),
        m = -this.it * c,
        c = this.Oj,
        this.Oj = d.Cf(0, this.Oj + m),
        m = this.Oj - c,
        c = -m * this.uc.x,
        g = -m * this.uc.y,
        a.s.x += a.X * c,
        a.s.y += a.X * g,
        a.P += a.ia * (e * g - f * c));
        this.OA == r.Ue && (l = b.s.x + -b.P * k,
        m = b.s.y + b.P * h,
        c = -(this.vc.x * l + this.vc.y * m),
        m = -this.jt * c,
        c = this.Pj,
        this.Pj = d.Cf(0, this.Pj + m),
        m = this.Pj - c,
        l = -m * this.vc.x,
        m = -m * this.vc.y,
        b.s.x += b.X * l,
        b.s.y += b.X * m,
        b.P += b.ia * (h * m - k * l))
    }
    ;
    O.prototype.Rg = function() {
        var b = this.Na, c = this.Aa, e, f = this.$h.K.position.x + this.dl.x, g = this.$h.K.position.y + this.dl.y, h = this.$h.K.position.x + this.el.x, k = this.$h.K.position.y + this.el.y, l, m, n, t, u, w, v, z = 0;
        this.TA == r.Ue && (e = b.K.I,
        l = this.Ja.x - b.f.Z.x,
        m = this.Ja.y - b.f.Z.y,
        u = e.g.x * l + e.h.x * m,
        m = e.g.y * l + e.h.y * m,
        l = u,
        e = c.K.I,
        n = this.Ka.x - c.f.Z.x,
        t = this.Ka.y - c.f.Z.y,
        u = e.g.x * n + e.h.x * t,
        t = e.g.y * n + e.h.y * t,
        n = u,
        e = b.f.D.x + l,
        u = b.f.D.y + m,
        w = c.f.D.x + n,
        v = c.f.D.y + t,
        this.uc.Set(e - f, u - g),
        this.vc.Set(w - h, v - k),
        e = this.uc.Bk(),
        u = this.vc.Bk(),
        e > a.Yb ? this.uc.ag(1 / e) : this.uc.hb(),
        u > a.Yb ? this.vc.ag(1 / u) : this.vc.hb(),
        e = this.kq - e - this.zd * u,
        z = d.Cf(z, -e),
        e = d.ec(e + a.Yb, -a.Wg, 0),
        v = -this.yw * e,
        e = -v * this.uc.x,
        u = -v * this.uc.y,
        w = -this.zd * v * this.vc.x,
        v = -this.zd * v * this.vc.y,
        b.f.D.x += b.X * e,
        b.f.D.y += b.X * u,
        b.f.V += b.ia * (l * u - m * e),
        c.f.D.x += c.X * w,
        c.f.D.y += c.X * v,
        c.f.V += c.ia * (n * v - t * w),
        b.pd(),
        c.pd());
        this.NA == r.Ue && (e = b.K.I,
        l = this.Ja.x - b.f.Z.x,
        m = this.Ja.y - b.f.Z.y,
        u = e.g.x * l + e.h.x * m,
        m = e.g.y * l + e.h.y * m,
        l = u,
        e = b.f.D.x + l,
        u = b.f.D.y + m,
        this.uc.Set(e - f, u - g),
        e = this.uc.Bk(),
        e > a.Yb ? (this.uc.x *= 1 / e,
        this.uc.y *= 1 / e) : this.uc.hb(),
        e = this.aG - e,
        z = d.Cf(z, -e),
        e = d.ec(e + a.Yb, -a.Wg, 0),
        v = -this.it * e,
        e = -v * this.uc.x,
        u = -v * this.uc.y,
        b.f.D.x += b.X * e,
        b.f.D.y += b.X * u,
        b.f.V += b.ia * (l * u - m * e),
        b.pd());
        this.OA == r.Ue && (e = c.K.I,
        n = this.Ka.x - c.f.Z.x,
        t = this.Ka.y - c.f.Z.y,
        u = e.g.x * n + e.h.x * t,
        t = e.g.y * n + e.h.y * t,
        n = u,
        w = c.f.D.x + n,
        v = c.f.D.y + t,
        this.vc.Set(w - h, v - k),
        u = this.vc.Bk(),
        u > a.Yb ? (this.vc.x *= 1 / u,
        this.vc.y *= 1 / u) : this.vc.hb(),
        e = this.bG - u,
        z = d.Cf(z, -e),
        e = d.ec(e + a.Yb, -a.Wg, 0),
        v = -this.jt * e,
        w = -v * this.vc.x,
        v = -v * this.vc.y,
        c.f.D.x += c.X * w,
        c.f.D.y += c.X * v,
        c.f.V += c.ia * (n * v - t * w),
        c.pd());
        return z < a.Yb
    }
    ;
    Z.Bd.push(function() {
        Z.i.N.Hp.yv = 2
    });
    Z.lc(N, Z.i.N.Ia);
    N.prototype.ua = Z.i.N.Ia.prototype;
    N.zn = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.Uv = new e;
        this.Vv = new e;
        this.ae = new e;
        this.be = new e
    }
    ;
    N.prototype.zn = function() {
        this.ua.Ia.call(this);
        this.type = r.aF;
        this.Uv.Set(-1, 1);
        this.Vv.Set(1, 1);
        this.ae.Set(-1, 0);
        this.be.Set(1, 0);
        this.jG = this.yA = this.iG = this.xA = 0;
        this.ratio = 1;
        this.lf = !0
    }
    ;
    N.prototype.Ib = function(a, b, c, d, e, f, g) {
        void 0 === g && (g = 0);
        this.Pb = a;
        this.Zb = b;
        this.Uv.S(c);
        this.Vv.S(d);
        this.ae = this.Pb.Xf(e);
        this.be = this.Zb.Xf(f);
        a = e.x - c.x;
        c = e.y - c.y;
        this.xA = Math.sqrt(a * a + c * c);
        c = f.x - d.x;
        d = f.y - d.y;
        this.yA = Math.sqrt(c * c + d * d);
        this.ratio = g;
        g = this.xA + this.ratio * this.yA;
        this.iG = g - this.ratio * O.yv;
        this.jG = (g - O.yv) / this.ratio
    }
    ;
    Z.lc(J, Z.i.N.pa);
    J.prototype.ua = Z.i.N.pa.prototype;
    J.Ip = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Pe = new b;
        this.Bi = new b;
        this.Ci = new b;
        this.Ar = new b;
        this.Fe = new f;
        this.Qi = new e;
        this.kk = new e;
        this.Ja = new e;
        this.Ka = new e;
        this.w = new f;
        this.ba = new c
    }
    ;
    J.prototype.Lu = function() {
        return this.Aa.f.V - this.Na.f.V - this.mt
    }
    ;
    J.prototype.en = function(a) {
        this.dh = a
    }
    ;
    J.prototype.Mu = function() {
        return this.oq
    }
    ;
    J.prototype.Nu = function() {
        return this.pt
    }
    ;
    J.prototype.Gr = function(a, b) {
        void 0 === a && (a = 0);
        void 0 === b && (b = 0);
        this.oq = a;
        this.pt = b
    }
    ;
    J.prototype.tr = function(a) {
        this.Xi = a
    }
    ;
    J.prototype.Hr = function(a) {
        void 0 === a && (a = 0);
        this.Na.Ab(!0);
        this.Aa.Ab(!0);
        this.Sj = a
    }
    ;
    J.prototype.CD = function(a) {
        void 0 === a && (a = 0);
        this.cG = a
    }
    ;
    J.prototype.Ip = function(a) {
        this.ua.pa.call(this, a);
        this.Ja.S(a.ae);
        this.Ka.S(a.be);
        this.mt = a.Qm;
        this.w.hb();
        this.Mb = 0;
        this.oq = a.OF;
        this.pt = a.gI;
        this.cG = a.kM;
        this.Sj = a.ut;
        this.dh = a.Uk;
        this.Xi = a.Ds;
        this.wb = r.dg
    }
    ;
    J.prototype.rh = function(b) {
        var c = this.Na, e = this.Aa, f, g;
        f = c.K.I;
        var h = this.Ja.x - c.f.Z.x
          , k = this.Ja.y - c.f.Z.y;
        g = f.g.x * h + f.h.x * k;
        k = f.g.y * h + f.h.y * k;
        h = g;
        f = e.K.I;
        var l = this.Ka.x - e.f.Z.x
          , m = this.Ka.y - e.f.Z.y;
        g = f.g.x * l + f.h.x * m;
        m = f.g.y * l + f.h.y * m;
        l = g;
        f = c.X;
        g = e.X;
        var n = c.ia
          , q = e.ia;
        this.ba.g.x = f + g + k * k * n + m * m * q;
        this.ba.h.x = -k * h * n - m * l * q;
        this.ba.Xa.x = -k * n - m * q;
        this.ba.g.y = this.ba.h.x;
        this.ba.h.y = f + g + h * h * n + l * l * q;
        this.ba.Xa.y = h * n + l * q;
        this.ba.g.z = this.ba.Xa.x;
        this.ba.h.z = this.ba.Xa.y;
        this.ba.Xa.z = n + q;
        this.ig = 1 / (n + q);
        0 == this.Xi && (this.Mb = 0);
        if (this.dh) {
            var t = e.f.V - c.f.V - this.mt;
            d.we(this.pt - this.oq) < 2 * a.Bn ? this.wb = r.jm : t <= this.oq ? (this.wb != r.Aj && (this.w.z = 0),
            this.wb = r.Aj) : t >= this.pt ? (this.wb != r.Ue && (this.w.z = 0),
            this.wb = r.Ue) : (this.wb = r.dg,
            this.w.z = 0)
        } else
            this.wb = r.dg;
        b.yi ? (this.w.x *= b.Cd,
        this.w.y *= b.Cd,
        this.Mb *= b.Cd,
        b = this.w.x,
        t = this.w.y,
        c.s.x -= f * b,
        c.s.y -= f * t,
        c.P -= n * (h * t - k * b + this.Mb + this.w.z),
        e.s.x += g * b,
        e.s.y += g * t,
        e.P += q * (l * t - m * b + this.Mb + this.w.z)) : (this.w.hb(),
        this.Mb = 0)
    }
    ;
    J.prototype.Sg = function(a) {
        var b = this.Na, c = this.Aa, e, f, g, h, k, l = b.s, m = b.P, n = c.s, q = c.P, t = b.X, u = c.X, w = b.ia, v = c.ia;
        this.Xi && this.wb != r.jm && (g = this.ig * -(q - m - this.Sj),
        h = this.Mb,
        a = a.rb * this.cG,
        this.Mb = d.ec(this.Mb + g, -a, a),
        g = this.Mb - h,
        m -= w * g,
        q += v * g);
        if (this.dh && this.wb != r.dg) {
            e = b.K.I;
            g = this.Ja.x - b.f.Z.x;
            h = this.Ja.y - b.f.Z.y;
            f = e.g.x * g + e.h.x * h;
            h = e.g.y * g + e.h.y * h;
            g = f;
            e = c.K.I;
            a = this.Ka.x - c.f.Z.x;
            k = this.Ka.y - c.f.Z.y;
            f = e.g.x * a + e.h.x * k;
            k = e.g.y * a + e.h.y * k;
            a = f;
            f = n.x + -q * k - l.x - -m * h;
            var z = n.y + q * a - l.y - m * g;
            this.ba.Jr(this.Fe, -f, -z, -(q - m));
            this.wb == r.jm ? this.w.hp(this.Fe) : this.wb == r.Aj ? (e = this.w.z + this.Fe.z,
            0 > e && (this.ba.wp(this.kk, -f, -z),
            this.Fe.x = this.kk.x,
            this.Fe.y = this.kk.y,
            this.Fe.z = -this.w.z,
            this.w.x += this.kk.x,
            this.w.y += this.kk.y,
            this.w.z = 0)) : this.wb == r.Ue && (e = this.w.z + this.Fe.z,
            0 < e && (this.ba.wp(this.kk, -f, -z),
            this.Fe.x = this.kk.x,
            this.Fe.y = this.kk.y,
            this.Fe.z = -this.w.z,
            this.w.x += this.kk.x,
            this.w.y += this.kk.y,
            this.w.z = 0));
            l.x -= t * this.Fe.x;
            l.y -= t * this.Fe.y;
            m -= w * (g * this.Fe.y - h * this.Fe.x + this.Fe.z);
            n.x += u * this.Fe.x;
            n.y += u * this.Fe.y;
            q += v * (a * this.Fe.y - k * this.Fe.x + this.Fe.z)
        } else
            e = b.K.I,
            g = this.Ja.x - b.f.Z.x,
            h = this.Ja.y - b.f.Z.y,
            f = e.g.x * g + e.h.x * h,
            h = e.g.y * g + e.h.y * h,
            g = f,
            e = c.K.I,
            a = this.Ka.x - c.f.Z.x,
            k = this.Ka.y - c.f.Z.y,
            f = e.g.x * a + e.h.x * k,
            k = e.g.y * a + e.h.y * k,
            a = f,
            this.ba.wp(this.Qi, -(n.x + -q * k - l.x - -m * h), -(n.y + q * a - l.y - m * g)),
            this.w.x += this.Qi.x,
            this.w.y += this.Qi.y,
            l.x -= t * this.Qi.x,
            l.y -= t * this.Qi.y,
            m -= w * (g * this.Qi.y - h * this.Qi.x),
            n.x += u * this.Qi.x,
            n.y += u * this.Qi.y,
            q += v * (a * this.Qi.y - k * this.Qi.x);
        b.s.S(l);
        b.P = m;
        c.s.S(n);
        c.P = q
    }
    ;
    J.prototype.Rg = function() {
        var b, c, e = this.Na, f = this.Aa, g = 0, h, k, l;
        if (this.dh && this.wb != r.dg) {
            b = f.f.V - e.f.V - this.mt;
            var m = 0;
            this.wb == r.jm ? (b = d.ec(b - this.oq, -a.xv, a.xv),
            m = -this.ig * b,
            g = d.we(b)) : this.wb == r.Aj ? (b -= this.oq,
            g = -b,
            b = d.ec(b + a.Bn, -a.xv, 0),
            m = -this.ig * b) : this.wb == r.Ue && (g = b -= this.pt,
            b = d.ec(b - a.Bn, 0, a.xv),
            m = -this.ig * b);
            e.f.V -= e.ia * m;
            f.f.V += f.ia * m;
            e.pd();
            f.pd()
        }
        c = e.K.I;
        m = this.Ja.x - e.f.Z.x;
        b = this.Ja.y - e.f.Z.y;
        h = c.g.x * m + c.h.x * b;
        b = c.g.y * m + c.h.y * b;
        m = h;
        c = f.K.I;
        var n = this.Ka.x - f.f.Z.x
          , t = this.Ka.y - f.f.Z.y;
        h = c.g.x * n + c.h.x * t;
        t = c.g.y * n + c.h.y * t;
        n = h;
        k = f.f.D.x + n - e.f.D.x - m;
        l = f.f.D.y + t - e.f.D.y - b;
        var u = k * k + l * l;
        c = Math.sqrt(u);
        h = e.X;
        var w = f.X
          , v = e.ia
          , z = f.ia
          , A = 10 * a.Yb;
        u > A * A && (u = 1 / (h + w),
        k = u * -k,
        l = u * -l,
        e.f.D.x -= .5 * h * k,
        e.f.D.y -= .5 * h * l,
        f.f.D.x += .5 * w * k,
        f.f.D.y += .5 * w * l,
        k = f.f.D.x + n - e.f.D.x - m,
        l = f.f.D.y + t - e.f.D.y - b);
        this.Bi.g.x = h + w;
        this.Bi.h.x = 0;
        this.Bi.g.y = 0;
        this.Bi.h.y = h + w;
        this.Ci.g.x = v * b * b;
        this.Ci.h.x = -v * m * b;
        this.Ci.g.y = -v * m * b;
        this.Ci.h.y = v * m * m;
        this.Ar.g.x = z * t * t;
        this.Ar.h.x = -z * n * t;
        this.Ar.g.y = -z * n * t;
        this.Ar.h.y = z * n * n;
        this.Pe.on(this.Bi);
        this.Pe.Gu(this.Ci);
        this.Pe.Gu(this.Ar);
        this.Pe.pn(J.GC, -k, -l);
        k = J.GC.x;
        l = J.GC.y;
        e.f.D.x -= e.X * k;
        e.f.D.y -= e.X * l;
        e.f.V -= e.ia * (m * l - b * k);
        f.f.D.x += f.X * k;
        f.f.D.y += f.X * l;
        f.f.V += f.ia * (n * l - t * k);
        e.pd();
        f.pd();
        return c <= a.Yb && g <= a.Bn
    }
    ;
    Z.Bd.push(function() {
        Z.i.N.Ip.GC = new e
    });
    Z.lc(K, Z.i.N.Ia);
    K.prototype.ua = Z.i.N.Ia.prototype;
    K.Nk = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e
    }
    ;
    K.prototype.Nk = function() {
        this.ua.Ia.call(this);
        this.type = r.Ov;
        this.ae.Set(0, 0);
        this.be.Set(0, 0);
        this.ut = this.kM = this.gI = this.OF = this.Qm = 0;
        this.Ds = this.Uk = !1
    }
    ;
    K.prototype.Ib = function(a, b, c) {
        this.Pb = a;
        this.Zb = b;
        this.ae = this.Pb.Xf(c);
        this.be = this.Zb.Xf(c);
        this.Qm = this.Zb.qh() - this.Pb.qh()
    }
    ;
    Z.lc(L, Z.i.N.pa);
    L.prototype.ua = Z.i.N.pa.prototype;
    L.gs = function() {
        Z.i.N.pa.pa.apply(this, arguments);
        this.Ch = new e;
        this.Dh = new e;
        this.w = new f;
        this.ba = new c
    }
    ;
    L.prototype.gs = function(a) {
        this.ua.pa.call(this, a);
        this.Ch.S(a.ae);
        this.Dh.S(a.be);
        this.mt = a.Qm;
        this.w.hb();
        this.ba = new c
    }
    ;
    L.prototype.rh = function(a) {
        var b, c, d = this.Na, e = this.Aa;
        b = d.K.I;
        var f = this.Ch.x - d.f.Z.x
          , g = this.Ch.y - d.f.Z.y;
        c = b.g.x * f + b.h.x * g;
        g = b.g.y * f + b.h.y * g;
        f = c;
        b = e.K.I;
        var h = this.Dh.x - e.f.Z.x
          , k = this.Dh.y - e.f.Z.y;
        c = b.g.x * h + b.h.x * k;
        k = b.g.y * h + b.h.y * k;
        h = c;
        b = d.X;
        c = e.X;
        var l = d.ia
          , m = e.ia;
        this.ba.g.x = b + c + g * g * l + k * k * m;
        this.ba.h.x = -g * f * l - k * h * m;
        this.ba.Xa.x = -g * l - k * m;
        this.ba.g.y = this.ba.h.x;
        this.ba.h.y = b + c + f * f * l + h * h * m;
        this.ba.Xa.y = f * l + h * m;
        this.ba.g.z = this.ba.Xa.x;
        this.ba.h.z = this.ba.Xa.y;
        this.ba.Xa.z = l + m;
        a.yi ? (this.w.x *= a.Cd,
        this.w.y *= a.Cd,
        this.w.z *= a.Cd,
        d.s.x -= b * this.w.x,
        d.s.y -= b * this.w.y,
        d.P -= l * (f * this.w.y - g * this.w.x + this.w.z),
        e.s.x += c * this.w.x,
        e.s.y += c * this.w.y,
        e.P += m * (h * this.w.y - k * this.w.x + this.w.z)) : this.w.hb()
    }
    ;
    L.prototype.Sg = function() {
        var a, b, c = this.Na, d = this.Aa, e = c.s, g = c.P, h = d.s, k = d.P, l = c.X, m = d.X, n = c.ia, r = d.ia;
        a = c.K.I;
        var t = this.Ch.x - c.f.Z.x
          , u = this.Ch.y - c.f.Z.y;
        b = a.g.x * t + a.h.x * u;
        u = a.g.y * t + a.h.y * u;
        t = b;
        a = d.K.I;
        var w = this.Dh.x - d.f.Z.x
          , v = this.Dh.y - d.f.Z.y;
        b = a.g.x * w + a.h.x * v;
        v = a.g.y * w + a.h.y * v;
        w = b;
        a = h.x - k * v - e.x + g * u;
        b = h.y + k * w - e.y - g * t;
        var z = k - g
          , A = new f;
        this.ba.Jr(A, -a, -b, -z);
        this.w.hp(A);
        e.x -= l * A.x;
        e.y -= l * A.y;
        g -= n * (t * A.y - u * A.x + A.z);
        h.x += m * A.x;
        h.y += m * A.y;
        k += r * (w * A.y - v * A.x + A.z);
        c.P = g;
        d.P = k
    }
    ;
    L.prototype.Rg = function() {
        var b, c, e = this.Na, g = this.Aa;
        b = e.K.I;
        var h = this.Ch.x - e.f.Z.x
          , k = this.Ch.y - e.f.Z.y;
        c = b.g.x * h + b.h.x * k;
        k = b.g.y * h + b.h.y * k;
        h = c;
        b = g.K.I;
        var l = this.Dh.x - g.f.Z.x
          , m = this.Dh.y - g.f.Z.y;
        c = b.g.x * l + b.h.x * m;
        m = b.g.y * l + b.h.y * m;
        l = c;
        b = e.X;
        c = g.X;
        var n = e.ia
          , r = g.ia
          , t = g.f.D.x + l - e.f.D.x - h
          , u = g.f.D.y + m - e.f.D.y - k
          , w = g.f.V - e.f.V - this.mt
          , v = 10 * a.Yb
          , z = Math.sqrt(t * t + u * u)
          , A = d.we(w);
        z > v && (n *= 1,
        r *= 1);
        this.ba.g.x = b + c + k * k * n + m * m * r;
        this.ba.h.x = -k * h * n - m * l * r;
        this.ba.Xa.x = -k * n - m * r;
        this.ba.g.y = this.ba.h.x;
        this.ba.h.y = b + c + h * h * n + l * l * r;
        this.ba.Xa.y = h * n + l * r;
        this.ba.g.z = this.ba.Xa.x;
        this.ba.h.z = this.ba.Xa.y;
        this.ba.Xa.z = n + r;
        v = new f;
        this.ba.Jr(v, -t, -u, -w);
        e.f.D.x -= b * v.x;
        e.f.D.y -= b * v.y;
        e.f.V -= n * (h * v.y - k * v.x + v.z);
        g.f.D.x += c * v.x;
        g.f.D.y += c * v.y;
        g.f.V += r * (l * v.y - m * v.x + v.z);
        e.pd();
        g.pd();
        return z <= a.Yb && A <= a.Bn
    }
    ;
    Z.lc(M, Z.i.N.Ia);
    M.prototype.ua = Z.i.N.Ia.prototype;
    M.hs = function() {
        Z.i.N.Ia.Ia.apply(this, arguments);
        this.ae = new e;
        this.be = new e
    }
    ;
    M.prototype.hs = function() {
        this.ua.Ia.call(this);
        this.type = r.bF;
        this.Qm = 0
    }
    ;
    M.prototype.Ib = function(a, b, c) {
        this.Pb = a;
        this.Zb = b;
        this.ae.S(this.Pb.Xf(c));
        this.be.S(this.Zb.Xf(c));
        this.Qm = this.Zb.qh() - this.Pb.qh()
    }
}
)();
(function() {
    var a = Z.i.Vg;
    a.Vg = function() {}
    ;
    a.prototype.Vg = function() {}
}
)();
var sj;
for (sj = 0; sj < Z.Bd.length; ++sj)
    Z.Bd[sj]();
delete Z.Bd;
function ql() {
    this.qd = null;
    this.jd = new V;
    this.identifier = this.check = this.angle = this.ru = this.Nx = this.fa = 0
}
ql.prototype = p(new sl, {
    UB: function(a) {
        a.LA == this.identifier && this.jd.add(a)
    },
    ex: function(a) {
        Ya(this.jd, a)
    },
    Nl: function() {
        var a = 0, b;
        for (b = 0; b < this.o.Sb; a++,
        b++) {
            for (; null == this.o.U[a]; )
                a++;
            var c = this.o.U[a];
            if (32 <= c.Bb && 1110590791 == c.ma.Le && c.ext.identifier == this.identifier)
                return c.ext
        }
        return null
    },
    Io: function() {
        return null == this.qd ? (this.qd = this.Nl(),
        null != this.qd || cf || (alert("Please drop a Physics - Engine object in the frame."),
        cf = !0),
        null != this.qd) : this.qd.qu
    },
    Wn: function() {
        return 1
    },
    rs: function(a) {
        this.fa = D(a);
        this.angle = D(a) * Z.H.oa.qb / 16;
        this.ru = D(a);
        this.O.aa = D(a);
        this.O.$ = D(a);
        this.identifier = D(a);
        this.Nx = this.ru / 100 / 5;
        this.qd = null;
        this.check = !0;
        return 0
    },
    Ns: function() {
        if (!this.Io() || this.qd.dw())
            return 0;
        if (this.fa & 2) {
            var a;
            for (a = 0; a < this.jd.size(); a++) {
                var b = this.jd.get(a), c = b.Oa, d, e;
                2 == b.ea || 1 == b.ea ? (d = b.x,
                e = b.y) : 0 == b.ea && (d = c.B,
                e = c.A);
                d >= this.O.B && d < this.O.B + this.O.aa && e >= this.O.A && e < this.O.A + this.O.$ && b.TC(this.Nx * Math.cos(this.angle), this.Nx * Math.sin(this.angle))
            }
        }
        return 0
    },
    Hn: function(a) {
        return 0 == a ? 0 != (this.fa & 2) : !1
    },
    action: function(a, b) {
        switch (a) {
        case 0:
            this.ru = b.ka(this.o, 0);
            this.Nx = this.ru / 100 / 5;
            break;
        case 1:
            this.angle = b.ka(this.o, 0) * Z.H.oa.qb / 180;
            break;
        case 2:
            var c = b.ka(this.o, 0);
            0 < c && (this.O.aa = c);
            break;
        case 3:
            c = b.ka(this.o, 0);
            0 < c && (this.O.$ = c);
            break;
        case 4:
            b.ka(this.o, 0) ? this.fa |= 2 : this.fa &= -3
        }
    },
    Sn: function(a) {
        switch (a) {
        case 0:
            return this.ru;
        case 1:
            return Math.floor(180 * this.angle / Z.H.oa.qb);
        case 2:
            return this.O.aa;
        case 3:
            return this.O.$
        }
        return null
    }
});
function rl() {
    this.button = {
        Iz: -1,
        background: null,
        Sv: null,
        fa: 0
    }
}
rl.prototype = p(new tl, {
    update: function(a) {
        void 0 === a && (a = this.element);
        switch (this.button.type) {
        case 1:
            a = this.button.os;
        case 0:
            for (; a.firstChild; )
                a.removeChild(a.firstChild);
            a.appendChild(document.createTextNode(this.button.ge[0]));
            break;
        case 2:
            var b = 0
              , c = this;
            this.Qh(function() {
                for (; this.firstChild; )
                    this.removeChild(this.firstChild);
                this.appendChild(document.createTextNode(c.button.ge[b++]))
            }, a, "label");
            break;
        case 4:
        case 3:
            var d = !1;
            this.Qh(function() {
                this.disabled && (d = !0)
            }, a);
            var e = X(this.o.m.xa, this.button.images[d ? 2 : this.button.eE ? 1 : 0]);
            for (null == e && (e = X(this.o.m.xa, this.button.images[0])); a.firstChild; )
                a.removeChild(a.firstChild);
            e = e.createElement();
            e.style.display = "inline-block";
            if (4 == this.button.type)
                switch (a.appendChild(document.createTextNode(this.button.ge[0])),
                this.button.bK) {
                case 0:
                    a.insertBefore(e, a.firstChild);
                    break;
                case 3:
                    a.appendChild(e);
                    break;
                case 1:
                    a.insertBefore(document.createElement("br"), a.firstChild);
                    a.insertBefore(e, a.firstChild);
                    break;
                case 2:
                    a.appendChild(document.createElement("br")),
                    a.appendChild(e)
                }
            else
                a.appendChild(e)
        }
    },
    fI: function(a) {
        if (!(this.button.fa & 16) && 3 != this.button.type) {
            void 0 === a && (a = this.element);
            a.style.backgroundColor = this.button.fa & 8 ? "transparent" : ma(this.button.background);
            var b = this;
            this.Qh(function() {
                this.style.color = ma(b.button.Sv)
            }, a, "label")
        }
    },
    Qh: function(a, b, c) {
        void 0 === b && (b = this.element);
        void 0 === c && (c = "input");
        switch (this.button.type) {
        case 0:
        case 3:
        case 4:
            a.call(b);
            break;
        case 1:
            a.call("label" == c ? this.button.os : this.button.Qk);
            break;
        case 2:
            for (var d = 0, e; ; ) {
                for (; (e = b.childNodes[d]).tagName.toLowerCase() != c && !(++d >= b.childNodes.length); )
                    ;
                if (!1 === a.call(e))
                    break;
                if (++d >= b.childNodes.length)
                    break
            }
        }
    },
    Wn: function() {
        return 6
    },
    rs: function(a) {
        this.O.aa = S(a);
        this.O.$ = S(a);
        var b = this.button;
        b.type = S(a);
        b.YB = S(a);
        b.fa = D(a);
        var c = a.dC();
        b.Sv = Va(a);
        b.background = Va(a);
        b.images = Array(3);
        for (var d = 0; 3 > d; ++d)
            b.images[d] = S(a);
        3 != b.type && 4 != b.type || this.O.lw(b.images);
        if (3 == b.type)
            for (this.O.aa = 1,
            this.O.$ = 1,
            d = 0; 3 > d; ++d) {
                var e = X(this.O.c.m.xa, b.images[d]);
                e && (this.O.aa = Math.max(this.O.aa, e.width),
                this.O.$ = Math.max(this.O.$, e.height))
            }
        S(a);
        D(a);
        b.bK = S(a);
        if (2 == b.type) {
            b.su = "";
            var e = document.createElement("div")
              , f = "mmf-radio-group-" + this.O.km;
            b.ge = Array(b.YB);
            for (d = 0; d < b.YB; ++d) {
                b.ge[d] = a.bd();
                var g = document.createElement("input")
                  , h = document.createElement("label");
                g.setAttribute("name", f);
                g.type = "radio";
                g.id = "mmf-radio-" + this.O.km + "-" + d;
                h.setAttribute("for", g.id);
                h.style.position = "relative";
                h.style.top = "-2px";
                h.style.display = "inline-block";
                h.style.height = (1 / b.YB * 100).toString() + "%";
                0 < d && e.appendChild(document.createElement("br"));
                e.appendChild(g);
                e.appendChild(h)
            }
        } else
            switch (b.ge = [a.bd()],
            b.su = a.bd(),
            b.type) {
            case 1:
                e = document.createElement("div");
                b.Qk = document.createElement("input");
                b.Qk.type = "checkbox";
                b.Qk.id = "mmf-checkbox-" + this.O.km;
                b.os = document.createElement("label");
                b.os.setAttribute("for", b.Qk.id);
                b.fa & 4 ? (e.appendChild(b.os),
                e.appendChild(b.Qk)) : (e.appendChild(b.Qk),
                e.appendChild(b.os));
                break;
            case 3:
                e = document.createElement("div");
                break;
            default:
                e = document.createElement("button")
            }
        e.title = b.su;
        b.fa & 2 && this.Qh(function() {
            this.disabled = !0
        }, e);
        this.update(e);
        this.fI(e);
        this.El(c, e);
        this.DN(e, 0 == (b.fa & 1));
        var k = this;
        3 == b.type || 4 == b.type ? (e.onmousedown = function() {
            od(k.o.m, !0);
            k.button.eE = !0;
            k.update()
        }
        ,
        e.onmouseup = function() {
            od(k.o.m, !1);
            k.button.eE = !1;
            k.update();
            k.button.Iz = k.O.c.Uq;
            k.O.Dd(1, 0)
        }
        ) : (e.onclick = function() {
            gd(k.o.m);
            k.button.Iz = k.O.c.Uq;
            k.O.Dd(1, 0)
        }
        ,
        e.onmousedown = function() {
            od(k.o.m, !0)
        }
        ,
        e.onmouseup = function() {
            od(k.o.m, !1)
        }
        )
    },
    Hn: function(a, b) {
        switch (a) {
        case 0:
            return 1 == this.button.type && this.button.Qk.checked;
        case 1:
            return 0 != (this.O.Da & 2) || this.O.c.Uq == this.button.Iz;
        case 2:
            return 1 == this.button.type && !this.button.Qk.checked;
        case 3:
            return this.button.visible;
        case 4:
            return this.button.enabled;
        case 5:
            if (2 != this.button.type || 0 > c || c >= this.button.ge.length)
                return !1;
            var c = b.ka(this.o, 0), d = 0, e;
            this.Qh(function() {
                if (d == c)
                    return e = this,
                    !1;
                ++d
            });
            return !e.disabled
        }
    },
    action: function(a, b) {
        switch (a) {
        case 0:
            this.button.ge[0] = b.ie(this.o, 0);
            this.update();
            break;
        case 1:
            this.O.gb = !0;
            this.element.style.visibility = "visible";
            break;
        case 2:
            this.O.gb = !1;
            this.element.style.visibility = "hidden";
            break;
        case 3:
            this.Qh(function() {
                this.disabled = !1
            });
            3 != this.button.type && 4 != this.button.type || this.update();
            break;
        case 4:
            this.Qh(function() {
                this.disabled = !0
            });
            3 != this.button.type && 4 != this.button.type || this.update();
            break;
        case 5:
            var c = b.tF(this.o, 0);
            c.mF && this.setPosition(c.x, c.y);
            break;
        case 6:
            this.Lx(b.ka(this.o, 0));
            break;
        case 7:
            this.Hx(b.ka(this.o, 0));
            break;
        case 8:
            if (2 != this.button.type)
                break;
            var d = b.ka(this.o, 0)
              , c = b.ie(this.o, 1);
            if (0 > d && d >= this.button.ge.length)
                break;
            this.button.ge[d] = c;
            this.update();
            break;
        case 9:
        case 10:
            if (2 != this.button.type)
                break;
            d = b.ka(this.o, 0);
            if (0 > d && d >= this.button.ge.length)
                break;
            this.Qh(function() {
                if (e == d)
                    return this.disabled = 10 == a,
                    !1;
                ++e
            });
            break;
        case 11:
            if (2 != this.button.type)
                break;
            var d = b.ka(this.o, 0)
              , e = 0;
            this.Qh(function() {
                if (e == d)
                    return this.checked = !0,
                    !1;
                0 > d && (this.checked = !1);
                ++e
            });
            break;
        case 12:
            this.BC(b.ka(this.o, 0));
            break;
        case 13:
            this.CC(b.ka(this.o, 0));
            break;
        case 14:
            1 == this.button.type && (this.button.Qk.checked = !0);
            break;
        case 15:
            this.Qh(function() {
                this.checked = !1
            });
            break;
        case 17:
            this.button.su = b.ie(this.o, 0),
            this.element && (this.element.title = this.button.su)
        }
    },
    Sn: function(a) {
        switch (a) {
        case 0:
            return this.O.aa;
        case 1:
            return this.O.$;
        case 2:
            return this.O.B;
        case 3:
            return this.O.A;
        case 4:
            if (2 != this.button.type)
                return 0;
            var b = 0
              , c = !1;
            this.Qh(function() {
                if (this.checked)
                    return c = !0,
                    !1;
                ++b
            });
            return c ? b : -1;
        case 5:
            return b = this.O.Oi(),
            0 > b || b >= this.button.ge.length ? "" : this.button.ge[b];
        case 6:
            return this.button.su
        }
    },
    kL: function() {
        return this.button.Sv
    },
    GN: function(a) {
        this.button.Sv = a;
        this.fI()
    },
    El: function(a, b) {
        void 0 === b && (b = this.element);
        tl.prototype.El.call(this, a);
        this.Qh(function() {
            this.style.font = b.style.font
        }, b, "label")
    }
});
