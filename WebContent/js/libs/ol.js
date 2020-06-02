// OpenLayers. See https://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/openlayers/master/LICENSE.md
// Version: v4.4.2
;(function(root, factory) {
  if (typeof exports === "object") {
      module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
      define([], factory);
  } else {
      root.ol = factory();
  }
}(this, function() {
  var OPENLAYERS = {};
  var k, aa = this;
  function t(a, b) {
      var c = OPENLAYERS;
      a = a.split(".");
      c = c || aa;
      a[0]in c || !c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
          a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
  }
  ;var ba, da;
  function ea(a, b) {
      return a > b ? 1 : a < b ? -1 : 0
  }
  function ha(a, b) {
      return 0 <= a.indexOf(b)
  }
  function ia(a, b, c) {
      var d = a.length;
      if (a[0] <= b)
          return 0;
      if (!(b <= a[d - 1]))
          if (0 < c)
              for (c = 1; c < d; ++c) {
                  if (a[c] < b)
                      return c - 1
              }
          else if (0 > c)
              for (c = 1; c < d; ++c) {
                  if (a[c] <= b)
                      return c
              }
          else
              for (c = 1; c < d; ++c) {
                  if (a[c] == b)
                      return c;
                  if (a[c] < b)
                      return a[c - 1] - b < b - a[c] ? c - 1 : c
              }
      return d - 1
  }
  function ja(a, b) {
      var c = Array.isArray(b) ? b : [b]
        , d = c.length;
      for (b = 0; b < d; b++)
          a[a.length] = c[b]
  }
  function ka(a, b) {
      for (var c = a.length >>> 0, d, e = 0; e < c; e++)
          if (d = a[e],
          b(d, e, a))
              return d;
      return null
  }
  function ma(a, b) {
      var c = a.length;
      if (c !== b.length)
          return !1;
      for (var d = 0; d < c; d++)
          if (a[d] !== b[d])
              return !1;
      return !0
  }
  function na(a) {
      var b = oa, c = a.length, d = Array(a.length), e;
      for (e = 0; e < c; e++)
          d[e] = {
              index: e,
              value: a[e]
          };
      d.sort(function(a, c) {
          return b(a.value, c.value) || a.index - c.index
      });
      for (e = 0; e < a.length; e++)
          a[e] = d[e].value
  }
  function pa(a, b) {
      var c;
      return a.every(function(d, e) {
          c = e;
          return !b(d, e, a)
      }) ? -1 : c
  }
  function qa(a, b) {
      var c = b || ea;
      return a.every(function(b, e) {
          if (0 === e)
              return !0;
          b = c(a[e - 1], b);
          return !(0 < b || 0 === b)
      })
  }
  ;function v(a, b) {
      a.prototype = Object.create(b.prototype);
      a.prototype.constructor = a
  }
  function sa() {}
  function w(a) {
      return a.cp || (a.cp = ++ta)
  }
  var ta = 0;
  function ua(a) {
      this.message = "Assertion failed. See https://openlayers.org/en/v4.4.2/doc/errors/#" + a + " for details.";
      this.code = a;
      this.name = "AssertionError"
  }
  v(ua, Error);
  function wa(a, b) {
      if (!a)
          throw new ua(b);
  }
  ;function xa(a, b, c, d) {
      this.ba = a;
      this.da = b;
      this.ea = c;
      this.ga = d
  }
  function ya(a, b, c, d, e) {
      return void 0 !== e ? (e.ba = a,
      e.da = b,
      e.ea = c,
      e.ga = d,
      e) : new xa(a,b,c,d)
  }
  function za(a, b, c) {
      return a.ba <= b && b <= a.da && a.ea <= c && c <= a.ga
  }
  function Aa(a, b) {
      return a.ba == b.ba && a.ea == b.ea && a.da == b.da && a.ga == b.ga
  }
  function Ba(a, b) {
      return a.ba <= b.da && a.da >= b.ba && a.ea <= b.ga && a.ga >= b.ea
  }
  ;function Da(a, b, c) {
      return Math.min(Math.max(a, b), c)
  }
  var Ea = function() {
      var a;
      "cosh"in Math ? a = Math.cosh : a = function(a) {
          a = Math.exp(a);
          return (a + 1 / a) / 2
      }
      ;
      return a
  }();
  function Fa(a) {
      wa(0 < a, 29);
      return Math.pow(2, Math.ceil(Math.log(a) / Math.LN2))
  }
  function Ga(a, b, c, d, e, f) {
      var g = e - c
        , h = f - d;
      if (0 !== g || 0 !== h) {
          var l = ((a - c) * g + (b - d) * h) / (g * g + h * h);
          1 < l ? (c = e,
          d = f) : 0 < l && (c += g * l,
          d += h * l)
      }
      return Ha(a, b, c, d)
  }
  function Ha(a, b, c, d) {
      a = c - a;
      b = d - b;
      return a * a + b * b
  }
  function Ia(a) {
      return a * Math.PI / 180
  }
  function Ja(a, b) {
      a %= b;
      return 0 > a * b ? a + b : a
  }
  function Ka(a, b, c) {
      return a + c * (b - a)
  }
  ;function La(a, b, c) {
      void 0 === c && (c = [0, 0]);
      c[0] = a[0] + 2 * b;
      c[1] = a[1] + 2 * b;
      return c
  }
  function Ma(a, b, c) {
      void 0 === c && (c = [0, 0]);
      c[0] = a[0] * b + .5 | 0;
      c[1] = a[1] * b + .5 | 0;
      return c
  }
  function Na(a, b) {
      if (Array.isArray(a))
          return a;
      void 0 === b ? b = [a, a] : b[0] = b[1] = a;
      return b
  }
  ;function Oa(a) {
      for (var b = Pa(), c = 0, d = a.length; c < d; ++c)
          Qa(b, a[c]);
      return b
  }
  function Ra(a, b, c) {
      return c ? (c[0] = a[0] - b,
      c[1] = a[1] - b,
      c[2] = a[2] + b,
      c[3] = a[3] + b,
      c) : [a[0] - b, a[1] - b, a[2] + b, a[3] + b]
  }
  function Sa(a, b) {
      return b ? (b[0] = a[0],
      b[1] = a[1],
      b[2] = a[2],
      b[3] = a[3],
      b) : a.slice()
  }
  function Ta(a, b, c) {
      b = b < a[0] ? a[0] - b : a[2] < b ? b - a[2] : 0;
      a = c < a[1] ? a[1] - c : a[3] < c ? c - a[3] : 0;
      return b * b + a * a
  }
  function Ua(a, b) {
      return Va(a, b[0], b[1])
  }
  function Wa(a, b) {
      return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
  }
  function Va(a, b, c) {
      return a[0] <= b && b <= a[2] && a[1] <= c && c <= a[3]
  }
  function Xa(a, b) {
      var c = a[1]
        , d = a[2]
        , e = a[3]
        , f = b[0];
      b = b[1];
      var g = 0;
      f < a[0] ? g |= 16 : f > d && (g |= 4);
      b < c ? g |= 8 : b > e && (g |= 2);
      0 === g && (g = 1);
      return g
  }
  function Pa() {
      return [Infinity, Infinity, -Infinity, -Infinity]
  }
  function Ya(a, b, c, d, e) {
      return e ? (e[0] = a,
      e[1] = b,
      e[2] = c,
      e[3] = d,
      e) : [a, b, c, d]
  }
  function Za(a) {
      return Ya(Infinity, Infinity, -Infinity, -Infinity, a)
  }
  function $a(a, b) {
      var c = a[0];
      a = a[1];
      return Ya(c, a, c, a, b)
  }
  function ab(a, b, c, d, e) {
      e = Za(e);
      return bb(e, a, b, c, d)
  }
  function cb(a, b) {
      return a[0] == b[0] && a[2] == b[2] && a[1] == b[1] && a[3] == b[3]
  }
  function db(a, b) {
      b[0] < a[0] && (a[0] = b[0]);
      b[2] > a[2] && (a[2] = b[2]);
      b[1] < a[1] && (a[1] = b[1]);
      b[3] > a[3] && (a[3] = b[3]);
      return a
  }
  function Qa(a, b) {
      b[0] < a[0] && (a[0] = b[0]);
      b[0] > a[2] && (a[2] = b[0]);
      b[1] < a[1] && (a[1] = b[1]);
      b[1] > a[3] && (a[3] = b[1])
  }
  function bb(a, b, c, d, e) {
      for (; c < d; c += e) {
          var f = a
            , g = b[c]
            , h = b[c + 1];
          f[0] = Math.min(f[0], g);
          f[1] = Math.min(f[1], h);
          f[2] = Math.max(f[2], g);
          f[3] = Math.max(f[3], h)
      }
      return a
  }
  function eb(a, b, c) {
      var d;
      return (d = b.call(c, fb(a))) || (d = b.call(c, gb(a))) || (d = b.call(c, hb(a))) ? d : (d = b.call(c, ib(a))) ? d : !1
  }
  function jb(a) {
      var b = 0;
      kb(a) || (b = lb(a) * mb(a));
      return b
  }
  function fb(a) {
      return [a[0], a[1]]
  }
  function gb(a) {
      return [a[2], a[1]]
  }
  function nb(a) {
      return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
  }
  function ob(a, b, c, d, e) {
      var f = b * d[0] / 2;
      d = b * d[1] / 2;
      b = Math.cos(c);
      var g = Math.sin(c);
      c = f * b;
      f *= g;
      b *= d;
      var h = d * g
        , l = a[0]
        , m = a[1];
      a = l - c + h;
      d = l - c - h;
      g = l + c - h;
      c = l + c + h;
      h = m - f - b;
      l = m - f + b;
      var n = m + f + b;
      f = m + f - b;
      return Ya(Math.min(a, d, g, c), Math.min(h, l, n, f), Math.max(a, d, g, c), Math.max(h, l, n, f), e)
  }
  function mb(a) {
      return a[3] - a[1]
  }
  function pb(a, b, c) {
      c = c ? c : Pa();
      qb(a, b) && (c[0] = a[0] > b[0] ? a[0] : b[0],
      c[1] = a[1] > b[1] ? a[1] : b[1],
      c[2] = a[2] < b[2] ? a[2] : b[2],
      c[3] = a[3] < b[3] ? a[3] : b[3]);
      return c
  }
  function ib(a) {
      return [a[0], a[3]]
  }
  function hb(a) {
      return [a[2], a[3]]
  }
  function lb(a) {
      return a[2] - a[0]
  }
  function qb(a, b) {
      return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
  }
  function kb(a) {
      return a[2] < a[0] || a[3] < a[1]
  }
  function rb(a, b) {
      var c = (a[2] - a[0]) / 2 * (b - 1);
      b = (a[3] - a[1]) / 2 * (b - 1);
      a[0] -= c;
      a[2] += c;
      a[1] -= b;
      a[3] += b
  }
  function sb(a, b, c) {
      a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
      b(a, a, 2);
      var d = [a[0], a[2], a[4], a[6]]
        , e = [a[1], a[3], a[5], a[7]];
      b = Math.min.apply(null, d);
      a = Math.min.apply(null, e);
      d = Math.max.apply(null, d);
      e = Math.max.apply(null, e);
      return Ya(b, a, d, e, c)
  }
  ;var tb = "function" === typeof Object.assign ? Object.assign : function(a, b) {
      if (!a || null === a)
          throw new TypeError("Cannot convert undefined or null to object");
      for (var c = Object(a), d = 1, e = arguments.length; d < e; ++d) {
          var f = arguments[d];
          if (void 0 !== f && null !== f)
              for (var g in f)
                  f.hasOwnProperty(g) && (c[g] = f[g])
      }
      return c
  }
  ;
  function ub(a) {
      for (var b in a)
          delete a[b]
  }
  function vb(a) {
      var b = [], c;
      for (c in a)
          b.push(a[c]);
      return b
  }
  function wb(a) {
      for (var b in a)
          return !1;
      return !b
  }
  ;/*

Latitude/longitude spherical geodesy formulae taken from
http://www.movable-type.co.uk/scripts/latlong.html
Licensed under CC-BY-3.0.
*/
  function xb(a) {
      this.radius = a
  }
  xb.prototype.a = function(a) {
      return yb(a, this.radius)
  }
  ;
  xb.prototype.b = function(a, b) {
      return zb(a, b, this.radius)
  }
  ;
  xb.prototype.offset = function(a, b, c) {
      var d = Ia(a[1]);
      b /= this.radius;
      var e = Math.asin(Math.sin(d) * Math.cos(b) + Math.cos(d) * Math.sin(b) * Math.cos(c));
      return [180 * (Ia(a[0]) + Math.atan2(Math.sin(c) * Math.sin(b) * Math.cos(d), Math.cos(b) - Math.sin(d) * Math.sin(e))) / Math.PI, 180 * e / Math.PI]
  }
  ;
  function Ab(a, b) {
      var c = b || {}
        , d = c.radius || 6371008.8;
      c = c.projection || "EPSG:3857";
      a = a.clone().hb(c, "EPSG:4326");
      var e = a.S();
      c = 0;
      var f;
      switch (e) {
      case "Point":
      case "MultiPoint":
          break;
      case "LineString":
      case "LinearRing":
          b = a.V();
          c = Bb(b, d);
          break;
      case "MultiLineString":
      case "Polygon":
          b = a.V();
          a = 0;
          for (e = b.length; a < e; ++a)
              c += Bb(b[a], d);
          break;
      case "MultiPolygon":
          b = a.V();
          a = 0;
          for (e = b.length; a < e; ++a) {
              var g = b[a];
              var h = 0;
              for (f = g.length; h < f; ++h)
                  c += Bb(g[h], d)
          }
          break;
      case "GeometryCollection":
          d = a.pd();
          a = 0;
          for (e = d.length; a < e; ++a)
              c += Ab(d[a], b);
          break;
      default:
          throw Error("Unsupported geometry type: " + e);
      }
      return c
  }
  function Bb(a, b) {
      for (var c = 0, d = 0, e = a.length; d < e - 1; ++d)
          c += zb(a[d], a[d + 1], b);
      return c
  }
  function zb(a, b, c) {
      var d = Ia(a[1])
        , e = Ia(b[1])
        , f = (e - d) / 2;
      a = Ia(b[0] - a[0]) / 2;
      d = Math.sin(f) * Math.sin(f) + Math.sin(a) * Math.sin(a) * Math.cos(d) * Math.cos(e);
      return 2 * c * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
  }
  function Db(a, b) {
      var c = b || {}
        , d = c.radius || 6371008.8;
      c = c.projection || "EPSG:3857";
      a = a.clone().hb(c, "EPSG:4326");
      var e = a.S();
      c = 0;
      var f;
      switch (e) {
      case "Point":
      case "MultiPoint":
      case "LineString":
      case "MultiLineString":
      case "LinearRing":
          break;
      case "Polygon":
          b = a.V();
          c = Math.abs(yb(b[0], d));
          a = 1;
          for (e = b.length; a < e; ++a)
              c -= Math.abs(yb(b[a], d));
          break;
      case "MultiPolygon":
          b = a.V();
          a = 0;
          for (e = b.length; a < e; ++a) {
              var g = b[a];
              c += Math.abs(yb(g[0], d));
              var h = 1;
              for (f = g.length; h < f; ++h)
                  c -= Math.abs(yb(g[h], d))
          }
          break;
      case "GeometryCollection":
          d = a.pd();
          a = 0;
          for (e = d.length; a < e; ++a)
              c += Db(d[a], b);
          break;
      default:
          throw Error("Unsupported geometry type: " + e);
      }
      return c
  }
  function yb(a, b) {
      for (var c = 0, d = a.length, e = a[d - 1][0], f = a[d - 1][1], g = 0; g < d; g++) {
          var h = a[g][0]
            , l = a[g][1];
          c += Ia(h - e) * (2 + Math.sin(Ia(f)) + Math.sin(Ia(l)));
          e = h;
          f = l
      }
      return c * b * b / 2
  }
  ;var Eb = {};
  Eb.degrees = 12741994 * Math.PI / 360;
  Eb.ft = .3048;
  Eb.m = 1;
  Eb["us-ft"] = 1200 / 3937;
  var Fb = null;
  function Gb(a) {
      this.sb = a.code;
      this.a = a.units;
      this.i = void 0 !== a.extent ? a.extent : null;
      this.re = void 0 !== a.worldExtent ? a.worldExtent : null;
      this.b = void 0 !== a.axisOrientation ? a.axisOrientation : "enu";
      this.c = void 0 !== a.global ? a.global : !1;
      this.f = !(!this.c || !this.i);
      this.j = a.getPointResolution;
      this.g = null;
      this.l = a.metersPerUnit;
      var b = a.code
        , c = Fb || window.proj4;
      "function" == typeof c && (b = c.defs(b),
      void 0 !== b && (void 0 !== b.axis && void 0 === a.axisOrientation && (this.b = b.axis),
      void 0 === a.metersPerUnit && (this.l = b.to_meter),
      void 0 === a.units && (this.a = b.units)))
  }
  k = Gb.prototype;
  k.Tk = function() {
      return this.sb
  }
  ;
  k.G = function() {
      return this.i
  }
  ;
  k.eo = function() {
      return this.a
  }
  ;
  k.Rc = function() {
      return this.l || Eb[this.a]
  }
  ;
  k.Bl = function() {
      return this.re
  }
  ;
  k.mm = function() {
      return this.c
  }
  ;
  k.cq = function(a) {
      this.c = a;
      this.f = !(!a || !this.i)
  }
  ;
  k.Pi = function(a) {
      this.i = a;
      this.f = !(!this.c || !a)
  }
  ;
  k.Kj = function(a) {
      this.re = a
  }
  ;
  k.bq = function(a) {
      this.j = a
  }
  ;
  function Hb(a) {
      Gb.call(this, {
          code: a,
          units: "m",
          extent: Ib,
          global: !0,
          worldExtent: Jb,
          getPointResolution: function(a, c) {
              return a / Ea(c[1] / 6378137)
          }
      })
  }
  v(Hb, Gb);
  var Kb = 6378137 * Math.PI
    , Ib = [-Kb, -Kb, Kb, Kb]
    , Jb = [-180, -85, 180, 85]
    , Lb = [new Hb("EPSG:3857"), new Hb("EPSG:102100"), new Hb("EPSG:102113"), new Hb("EPSG:900913"), new Hb("urn:ogc:def:crs:EPSG:6.18:3:3857"), new Hb("urn:ogc:def:crs:EPSG::3857"), new Hb("http://www.opengis.net/gml/srs/epsg.xml#3857")];
  function Mb(a, b, c) {
      var d = a.length;
      c = 1 < c ? c : 2;
      void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
      for (var e = 0; e < d; e += c) {
          b[e] = Kb * a[e] / 180;
          var f = 6378137 * Math.log(Math.tan(Math.PI * (a[e + 1] + 90) / 360));
          f > Kb ? f = Kb : f < -Kb && (f = -Kb);
          b[e + 1] = f
      }
      return b
  }
  function Nb(a, b, c) {
      var d = a.length;
      c = 1 < c ? c : 2;
      void 0 === b && (2 < c ? b = a.slice() : b = Array(d));
      for (var e = 0; e < d; e += c)
          b[e] = 180 * a[e] / Kb,
          b[e + 1] = 360 * Math.atan(Math.exp(a[e + 1] / 6378137)) / Math.PI - 90;
      return b
  }
  ;function Ob(a, b) {
      Gb.call(this, {
          code: a,
          units: "degrees",
          extent: Pb,
          axisOrientation: b,
          global: !0,
          metersPerUnit: Qb,
          worldExtent: Pb
      })
  }
  v(Ob, Gb);
  var Pb = [-180, -90, 180, 90]
    , Qb = 6378137 * Math.PI / 180
    , Rb = [new Ob("CRS:84"), new Ob("EPSG:4326","neu"), new Ob("urn:ogc:def:crs:EPSG::4326","neu"), new Ob("urn:ogc:def:crs:EPSG:6.6:4326","neu"), new Ob("urn:ogc:def:crs:OGC:1.3:CRS84"), new Ob("urn:ogc:def:crs:OGC:2:84"), new Ob("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"), new Ob("urn:x-ogc:def:crs:EPSG:4326","neu")];
  var Sb = {};
  var Tb = {};
  function Ub(a, b, c) {
      a = a.sb;
      b = b.sb;
      a in Tb || (Tb[a] = {});
      Tb[a][b] = c
  }
  function Vb(a, b) {
      var c;
      a in Tb && b in Tb[a] && (c = Tb[a][b]);
      return c
  }
  ;var Wb = new xb(6371008.8);
  function Yb(a, b, c, d) {
      a = Zb(a);
      var e = a.j;
      e ? b = e(b, c) : "degrees" == a.a && !d || "degrees" == d || (e = $b(a, Zb("EPSG:4326")),
      b = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2],
      b = e(b, b, 2),
      b = (Wb.b(b.slice(0, 2), b.slice(2, 4)) + Wb.b(b.slice(4, 6), b.slice(6, 8))) / 2,
      a = d ? Eb[d] : a.Rc(),
      void 0 !== a && (b /= a));
      return b
  }
  function ac(a) {
      a.forEach(bc);
      a.forEach(function(b) {
          a.forEach(function(a) {
              b !== a && Ub(b, a, cc)
          })
      })
  }
  function dc() {
      Rb.forEach(function(a) {
          Lb.forEach(function(b) {
              Ub(a, b, Mb);
              Ub(b, a, Nb)
          })
      })
  }
  function bc(a) {
      Sb[a.sb] = a;
      Ub(a, a, cc)
  }
  function ec(a) {
      return a ? "string" === typeof a ? Zb(a) : a : Zb("EPSG:3857")
  }
  function fc(a, b, c, d) {
      a = Zb(a);
      b = Zb(b);
      Ub(a, b, gc(c));
      Ub(b, a, gc(d))
  }
  function gc(a) {
      return function(b, c, d) {
          var e = b.length;
          d = void 0 !== d ? d : 2;
          c = void 0 !== c ? c : Array(e);
          var f;
          for (f = 0; f < e; f += d) {
              var g = a([b[f], b[f + 1]]);
              c[f] = g[0];
              c[f + 1] = g[1];
              for (g = d - 1; 2 <= g; --g)
                  c[f + g] = b[f + g]
          }
          return c
      }
  }
  function Zb(a) {
      var b = null;
      if (a instanceof Gb)
          b = a;
      else if ("string" === typeof a && (b = Sb[a] || null,
      !b)) {
          var c = Fb || window.proj4;
          "function" == typeof c && void 0 !== c.defs(a) && (b = new Gb({
              code: a
          }),
          bc(b))
      }
      return b
  }
  function hc(a, b) {
      if (a === b)
          return !0;
      var c = a.a === b.a;
      return a.sb === b.sb ? c : $b(a, b) === cc && c
  }
  function ic(a, b) {
      a = Zb(a);
      b = Zb(b);
      return $b(a, b)
  }
  function $b(a, b) {
      var c = a.sb
        , d = b.sb
        , e = Vb(c, d);
      if (!e) {
          var f = Fb || window.proj4;
          if ("function" == typeof f) {
              var g = f.defs(c)
                , h = f.defs(d);
              void 0 !== g && void 0 !== h && (g === h ? ac([b, a]) : (e = f(d, c),
              fc(b, a, e.forward, e.inverse)),
              e = Vb(c, d))
          }
      }
      e || (e = jc);
      return e
  }
  function jc(a, b) {
      if (void 0 !== b && a !== b) {
          for (var c = 0, d = a.length; c < d; ++c)
              b[c] = a[c];
          a = b
      }
      return a
  }
  function cc(a, b) {
      if (void 0 !== b) {
          for (var c = 0, d = a.length; c < d; ++c)
              b[c] = a[c];
          a = b
      } else
          a = a.slice();
      return a
  }
  function kc(a, b, c) {
      return ic(b, c)(a, void 0, a.length)
  }
  function lc(a, b, c) {
      b = ic(b, c);
      return sb(a, b)
  }
  function mc() {
      ac(Lb);
      ac(Rb);
      dc()
  }
  mc();
  function oc(a, b, c, d) {
      return void 0 !== d ? (d[0] = a,
      d[1] = b,
      d[2] = c,
      d) : [a, b, c]
  }
  function pc(a) {
      var b = a[0], c = Array(b), d = 1 << b - 1, e;
      for (e = 0; e < b; ++e) {
          var f = 48;
          a[1] & d && (f += 1);
          a[2] & d && (f += 2);
          c[e] = String.fromCharCode(f);
          d >>= 1
      }
      return c.join("")
  }
  ;function qc(a) {
      this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;
      this.b = a.resolutions;
      wa(qa(this.b, function(a, b) {
          return b - a
      }), 17);
      if (!a.origins)
          for (var b = 0, c = this.b.length - 1; b < c; ++b)
              if (!d)
                  var d = this.b[b] / this.b[b + 1];
              else if (this.b[b] / this.b[b + 1] !== d) {
                  d = void 0;
                  break
              }
      this.l = d;
      this.maxZoom = this.b.length - 1;
      this.f = void 0 !== a.origin ? a.origin : null;
      this.c = null;
      void 0 !== a.origins && (this.c = a.origins,
      wa(this.c.length == this.b.length, 20));
      d = a.extent;
      void 0 === d || this.f || this.c || (this.f = ib(d));
      wa(!this.f && this.c || this.f && !this.c, 18);
      this.i = null;
      void 0 !== a.tileSizes && (this.i = a.tileSizes,
      wa(this.i.length == this.b.length, 19));
      this.j = void 0 !== a.tileSize ? a.tileSize : this.i ? null : 256;
      wa(!this.j && this.i || this.j && !this.i, 22);
      this.s = void 0 !== d ? d : null;
      this.a = null;
      this.g = [0, 0];
      void 0 !== a.sizes ? this.a = a.sizes.map(function(a) {
          return new xa(Math.min(0, a[0]),Math.max(a[0] - 1, -1),Math.min(0, a[1]),Math.max(a[1] - 1, -1))
      }, this) : d && rc(this, d)
  }
  var sc = [0, 0, 0];
  k = qc.prototype;
  k.Vf = function(a, b, c) {
      a = tc(this, a, b);
      for (var d = a.ba, e = a.da; d <= e; ++d)
          for (var f = a.ea, g = a.ga; f <= g; ++f)
              c([b, d, f])
  }
  ;
  function uc(a, b, c, d, e) {
      var f = null
        , g = b[0] - 1;
      if (2 === a.l) {
          var h = b[1];
          var l = b[2]
      } else
          f = a.Ja(b, e);
      for (; g >= a.minZoom; ) {
          2 === a.l ? (h = Math.floor(h / 2),
          l = Math.floor(l / 2),
          b = ya(h, h, l, l, d)) : b = tc(a, f, g, d);
          if (c.call(null, g, b))
              return !0;
          --g
      }
      return !1
  }
  k.G = function() {
      return this.s
  }
  ;
  k.gj = function() {
      return this.maxZoom
  }
  ;
  k.hj = function() {
      return this.minZoom
  }
  ;
  k.Cc = function(a) {
      return this.f ? this.f : this.c[a]
  }
  ;
  k.Qa = function(a) {
      return this.b[a]
  }
  ;
  k.ij = function() {
      return this.b
  }
  ;
  function vc(a, b, c, d) {
      if (b[0] < a.maxZoom) {
          if (2 === a.l)
              return a = 2 * b[1],
              b = 2 * b[2],
              ya(a, a + 1, b, b + 1, c);
          d = a.Ja(b, d);
          return tc(a, d, b[0] + 1, c)
      }
      return null
  }
  function wc(a, b, c) {
      var d = a.Cc(b)
        , e = a.Qa(b);
      a = Na(a.eb(b), a.g);
      return Ya(d[0] + c.ba * a[0] * e, d[1] + c.ea * a[1] * e, d[0] + (c.da + 1) * a[0] * e, d[1] + (c.ga + 1) * a[1] * e, void 0)
  }
  function tc(a, b, c, d) {
      xc(a, b[0], b[1], c, !1, sc);
      var e = sc[1]
        , f = sc[2];
      xc(a, b[2], b[3], c, !0, sc);
      return ya(e, sc[1], f, sc[2], d)
  }
  function yc(a, b) {
      var c = a.Cc(b[0])
        , d = a.Qa(b[0]);
      a = Na(a.eb(b[0]), a.g);
      return [c[0] + (b[1] + .5) * a[0] * d, c[1] + (b[2] + .5) * a[1] * d]
  }
  k.Ja = function(a, b) {
      var c = this.Cc(a[0])
        , d = this.Qa(a[0])
        , e = Na(this.eb(a[0]), this.g)
        , f = c[0] + a[1] * e[0] * d;
      a = c[1] + a[2] * e[1] * d;
      return Ya(f, a, f + e[0] * d, a + e[1] * d, b)
  }
  ;
  k.Me = function(a, b, c) {
      var d = a[0]
        , e = a[1];
      a = this.xc(b);
      var f = b / this.Qa(a)
        , g = this.Cc(a)
        , h = Na(this.eb(a), this.g);
      d = f * Math.floor((d - g[0]) / b + 0) / h[0];
      b = f * Math.floor((e - g[1]) / b + .5) / h[1];
      d = Math.floor(d);
      b = Math.floor(b);
      return oc(a, d, b, c)
  }
  ;
  function xc(a, b, c, d, e, f) {
      var g = a.Cc(d)
        , h = a.Qa(d);
      a = Na(a.eb(d), a.g);
      b = Math.floor((b - g[0]) / h + (e ? .5 : 0)) / a[0];
      c = Math.floor((c - g[1]) / h + (e ? 0 : .5)) / a[1];
      e ? (b = Math.ceil(b) - 1,
      c = Math.ceil(c) - 1) : (b = Math.floor(b),
      c = Math.floor(c));
      return oc(d, b, c, f)
  }
  k.kg = function(a, b, c) {
      return xc(this, a[0], a[1], b, !1, c)
  }
  ;
  k.eb = function(a) {
      return this.j ? this.j : this.i[a]
  }
  ;
  k.xc = function(a, b) {
      return Da(ia(this.b, a, b || 0), this.minZoom, this.maxZoom)
  }
  ;
  function rc(a, b) {
      for (var c = a.b.length, d = Array(c), e = a.minZoom; e < c; ++e)
          d[e] = tc(a, b, e);
      a.a = d
  }
  ;function zc(a) {
      var b = a.g;
      b || (b = Ac(a),
      a.g = b);
      return b
  }
  function Bc(a) {
      var b = {};
      tb(b, a ? a : {});
      void 0 === b.extent && (b.extent = Zb("EPSG:3857").G());
      b.resolutions = Cc(b.extent, b.maxZoom, b.tileSize);
      delete b.maxZoom;
      return new qc(b)
  }
  function Cc(a, b, c) {
      b = void 0 !== b ? b : 42;
      var d = mb(a);
      a = lb(a);
      c = Na(void 0 !== c ? c : 256);
      c = Math.max(a / c[0], d / c[1]);
      b += 1;
      d = Array(b);
      for (a = 0; a < b; ++a)
          d[a] = c / Math.pow(2, a);
      return d
  }
  function Ac(a, b, c) {
      a = Dc(a);
      b = Cc(a, b, c);
      return new qc({
          extent: a,
          origin: ib(a),
          resolutions: b,
          tileSize: c
      })
  }
  function Dc(a) {
      a = Zb(a);
      var b = a.G();
      b || (a = 180 * Eb.degrees / a.Rc(),
      b = Ya(-a, -a, a, a));
      return b
  }
  ;function Fc(a) {
      this.b = a.html;
      this.a = a.tileRanges ? a.tileRanges : null
  }
  Fc.prototype.f = function() {
      return this.b
  }
  ;
  function Gc(a) {
      function b(b) {
          var c = a.listener
            , e = a.zh || a.target;
          a.Bh && Hc(a);
          return c.call(e, b)
      }
      return a.Ah = b
  }
  function Ic(a, b, c, d) {
      for (var e, f = 0, g = a.length; f < g; ++f)
          if (e = a[f],
          e.listener === b && e.zh === c)
              return d && (e.deleteIndex = f),
              e
  }
  function Jc(a, b) {
      return (a = a.kb) ? a[b] : void 0
  }
  function Kc(a) {
      var b = a.kb;
      b || (b = a.kb = {});
      return b
  }
  function Lc(a, b) {
      var c = Jc(a, b);
      if (c) {
          for (var d = 0, e = c.length; d < e; ++d)
              a.removeEventListener(b, c[d].Ah),
              ub(c[d]);
          c.length = 0;
          if (c = a.kb)
              delete c[b],
              0 === Object.keys(c).length && delete a.kb
      }
  }
  function z(a, b, c, d, e) {
      var f = Kc(a)
        , g = f[b];
      g || (g = f[b] = []);
      (f = Ic(g, c, d, !1)) ? e || (f.Bh = !1) : (f = {
          zh: d,
          Bh: !!e,
          listener: c,
          target: a,
          type: b
      },
      a.addEventListener(b, Gc(f)),
      g.push(f));
      return f
  }
  function Mc(a, b, c, d) {
      return z(a, b, c, d, !0)
  }
  function Nc(a, b, c, d) {
      (a = Jc(a, b)) && (c = Ic(a, c, d, !0)) && Hc(c)
  }
  function Hc(a) {
      if (a && a.target) {
          a.target.removeEventListener(a.type, a.Ah);
          var b = Jc(a.target, a.type);
          if (b) {
              var c = "deleteIndex"in a ? a.deleteIndex : b.indexOf(a);
              -1 !== c && b.splice(c, 1);
              0 === b.length && Lc(a.target, a.type)
          }
          ub(a)
      }
  }
  function Oc(a) {
      var b = Kc(a), c;
      for (c in b)
          Lc(a, c)
  }
  ;function Pc() {}
  Pc.prototype.oc = !1;
  function Qc(a) {
      a.oc || (a.oc = !0,
      a.ka())
  }
  Pc.prototype.ka = sa;
  function Rc(a) {
      this.type = a;
      this.target = null
  }
  Rc.prototype.preventDefault = Rc.prototype.stopPropagation = function() {
      this.yp = !0
  }
  ;
  function Sc(a) {
      a.stopPropagation()
  }
  ;function Tc() {
      this.Ua = {};
      this.sa = {};
      this.ra = {}
  }
  v(Tc, Pc);
  Tc.prototype.addEventListener = function(a, b) {
      var c = this.ra[a];
      c || (c = this.ra[a] = []);
      -1 === c.indexOf(b) && c.push(b)
  }
  ;
  Tc.prototype.b = function(a) {
      var b = "string" === typeof a ? new Rc(a) : a;
      a = b.type;
      b.target = this;
      var c = this.ra[a];
      if (c) {
          a in this.sa || (this.sa[a] = 0,
          this.Ua[a] = 0);
          ++this.sa[a];
          for (var d = 0, e = c.length; d < e; ++d)
              if (!1 === c[d].call(this, b) || b.yp) {
                  var f = !1;
                  break
              }
          --this.sa[a];
          if (0 === this.sa[a]) {
              b = this.Ua[a];
              for (delete this.Ua[a]; b--; )
                  this.removeEventListener(a, sa);
              delete this.sa[a]
          }
          return f
      }
  }
  ;
  Tc.prototype.ka = function() {
      Oc(this)
  }
  ;
  function Uc(a, b) {
      return b ? b in a.ra : 0 < Object.keys(a.ra).length
  }
  Tc.prototype.removeEventListener = function(a, b) {
      var c = this.ra[a];
      c && (b = c.indexOf(b),
      a in this.Ua ? (c[b] = sa,
      ++this.Ua[a]) : (c.splice(b, 1),
      0 === c.length && delete this.ra[a]))
  }
  ;
  function Vc() {
      Tc.call(this);
      this.f = 0
  }
  v(Vc, Tc);
  k = Vc.prototype;
  k.u = function() {
      ++this.f;
      this.b("change")
  }
  ;
  k.L = function() {
      return this.f
  }
  ;
  k.J = function(a, b, c) {
      if (Array.isArray(a)) {
          for (var d = a.length, e = Array(d), f = 0; f < d; ++f)
              e[f] = z(this, a[f], b, c);
          return e
      }
      return z(this, a, b, c)
  }
  ;
  k.once = function(a, b, c) {
      if (Array.isArray(a)) {
          for (var d = a.length, e = Array(d), f = 0; f < d; ++f)
              e[f] = Mc(this, a[f], b, c);
          return e
      }
      return Mc(this, a, b, c)
  }
  ;
  k.K = function(a, b, c) {
      if (Array.isArray(a))
          for (var d = 0, e = a.length; d < e; ++d)
              Nc(this, a[d], b, c);
      else
          Nc(this, a, b, c)
  }
  ;
  function Wc(a) {
      Vc.call(this);
      w(this);
      this.O = {};
      void 0 !== a && this.H(a)
  }
  v(Wc, Vc);
  var Xc = {};
  function Yc(a) {
      return Xc.hasOwnProperty(a) ? Xc[a] : Xc[a] = "change:" + a
  }
  k = Wc.prototype;
  k.get = function(a) {
      var b;
      this.O.hasOwnProperty(a) && (b = this.O[a]);
      return b
  }
  ;
  k.P = function() {
      return Object.keys(this.O)
  }
  ;
  k.M = function() {
      return tb({}, this.O)
  }
  ;
  function Zc(a, b, c) {
      var d = Yc(b);
      a.b(new $c(d,b,c));
      a.b(new $c("propertychange",b,c))
  }
  k.set = function(a, b, c) {
      c ? this.O[a] = b : (c = this.O[a],
      this.O[a] = b,
      c !== b && Zc(this, a, c))
  }
  ;
  k.H = function(a, b) {
      for (var c in a)
          this.set(c, a[c], b)
  }
  ;
  k.R = function(a, b) {
      if (a in this.O) {
          var c = this.O[a];
          delete this.O[a];
          b || Zc(this, a, c)
      }
  }
  ;
  function $c(a, b, c) {
      Rc.call(this, a);
      this.key = b;
      this.oldValue = c
  }
  v($c, Rc);
  function C(a, b) {
      Wc.call(this);
      this.c = !!(b || {}).unique;
      this.a = a ? a : [];
      if (this.c)
          for (a = 0,
          b = this.a.length; a < b; ++a)
              ad(this, this.a[a], a);
      bd(this)
  }
  v(C, Wc);
  k = C.prototype;
  k.clear = function() {
      for (; 0 < this.gc(); )
          this.pop()
  }
  ;
  k.pg = function(a) {
      var b;
      var c = 0;
      for (b = a.length; c < b; ++c)
          this.push(a[c]);
      return this
  }
  ;
  k.forEach = function(a, b) {
      a = b ? a.bind(b) : a;
      b = this.a;
      for (var c = 0, d = b.length; c < d; ++c)
          a(b[c], c, b)
  }
  ;
  k.Dm = function() {
      return this.a
  }
  ;
  k.item = function(a) {
      return this.a[a]
  }
  ;
  k.gc = function() {
      return this.get(cd)
  }
  ;
  k.Se = function(a, b) {
      this.c && ad(this, b);
      this.a.splice(a, 0, b);
      bd(this);
      this.b(new dd("add",b))
  }
  ;
  k.pop = function() {
      return this.Ug(this.gc() - 1)
  }
  ;
  k.push = function(a) {
      this.c && ad(this, a);
      var b = this.gc();
      this.Se(b, a);
      return this.gc()
  }
  ;
  k.remove = function(a) {
      var b = this.a, c;
      var d = 0;
      for (c = b.length; d < c; ++d)
          if (b[d] === a)
              return this.Ug(d)
  }
  ;
  k.Ug = function(a) {
      var b = this.a[a];
      this.a.splice(a, 1);
      bd(this);
      this.b(new dd("remove",b));
      return b
  }
  ;
  k.Yp = function(a, b) {
      var c = this.gc();
      if (a < c)
          this.c && ad(this, b, a),
          c = this.a[a],
          this.a[a] = b,
          this.b(new dd("remove",c)),
          this.b(new dd("add",b));
      else {
          for (; c < a; ++c)
              this.Se(c, void 0);
          this.Se(a, b)
      }
  }
  ;
  function bd(a) {
      a.set(cd, a.a.length)
  }
  function ad(a, b, c) {
      for (var d = 0, e = a.a.length; d < e; ++d)
          if (a.a[d] === b && d !== c)
              throw new ua(58);
  }
  var cd = "length";
  function dd(a, b) {
      Rc.call(this, a);
      this.element = b
  }
  v(dd, Rc);
  function ed(a, b, c) {
      Rc.call(this, a);
      this.map = b;
      this.frameState = void 0 !== c ? c : null
  }
  v(ed, Rc);
  function fd(a, b, c, d, e) {
      ed.call(this, a, b, e);
      this.originalEvent = c;
      this.pixel = b.od(c);
      this.coordinate = b.Na(this.pixel);
      this.dragging = void 0 !== d ? d : !1
  }
  v(fd, ed);
  fd.prototype.preventDefault = function() {
      ed.prototype.preventDefault.call(this);
      this.originalEvent.preventDefault()
  }
  ;
  fd.prototype.stopPropagation = function() {
      ed.prototype.stopPropagation.call(this);
      this.originalEvent.stopPropagation()
  }
  ;
  var gd = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];
  function hd(a, b) {
      var c, d, e = gd.length;
      for (d = 0; d < e; ++d)
          try {
              if (c = a.getContext(gd[d], b))
                  return c
          } catch (f) {}
      return null
  }
  ;var id, jd = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "", kd = -1 !== jd.indexOf("firefox"), ld = -1 !== jd.indexOf("safari") && -1 == jd.indexOf("chrom"), nd = -1 !== jd.indexOf("webkit") && -1 == jd.indexOf("edge"), od = -1 !== jd.indexOf("macintosh"), pd = window.devicePixelRatio || 1, qd = !1, rd = function() {
      if (!("HTMLCanvasElement"in window))
          return !1;
      try {
          var a = document.createElement("CANVAS").getContext("2d");
          return a ? (void 0 !== a.setLineDash && (qd = !0),
          !0) : !1
      } catch (b) {
          return !1
      }
  }(), sd = "DeviceOrientationEvent"in window, td = "geolocation"in navigator, ud = "ontouchstart"in window, vd = "PointerEvent"in window, wd = !!navigator.msPointerEnabled, yd = !1, zd, Ad = [];
  if ("WebGLRenderingContext"in window)
      try {
          var Bd = hd(document.createElement("CANVAS"), {
              failIfMajorPerformanceCaveat: !0
          });
          Bd && (yd = !0,
          zd = Bd.getParameter(Bd.MAX_TEXTURE_SIZE),
          Ad = Bd.getSupportedExtensions())
      } catch (a) {}
  id = yd;
  da = Ad;
  ba = zd;
  var Cd = {
      Lq: "singleclick",
      Aq: "click",
      Bq: "dblclick",
      Eq: "pointerdrag",
      Hq: "pointermove",
      Dq: "pointerdown",
      Kq: "pointerup",
      Jq: "pointerover",
      Iq: "pointerout",
      Fq: "pointerenter",
      Gq: "pointerleave",
      Cq: "pointercancel"
  };
  function Dd(a, b, c, d, e) {
      fd.call(this, a, b, c.b, d, e);
      this.b = c
  }
  v(Dd, fd);
  function Ed(a, b) {
      this.b = a;
      this.i = b
  }
  ;function Fd(a) {
      Ed.call(this, a, {
          mousedown: this.pm,
          mousemove: this.qm,
          mouseup: this.tm,
          mouseover: this.sm,
          mouseout: this.rm
      });
      this.a = a.f;
      this.f = []
  }
  v(Fd, Ed);
  function Gd(a, b) {
      a = a.f;
      var c = b.clientX;
      b = b.clientY;
      for (var d = 0, e = a.length, f; d < e && (f = a[d]); d++) {
          var g = Math.abs(b - f[1]);
          if (25 >= Math.abs(c - f[0]) && 25 >= g)
              return !0
      }
      return !1
  }
  function Hd(a) {
      var b = Id(a, a)
        , c = b.preventDefault;
      b.preventDefault = function() {
          a.preventDefault();
          c()
      }
      ;
      b.pointerId = 1;
      b.isPrimary = !0;
      b.pointerType = "mouse";
      return b
  }
  k = Fd.prototype;
  k.pm = function(a) {
      if (!Gd(this, a)) {
          (1).toString()in this.a && this.cancel(a);
          var b = Hd(a);
          this.a[(1).toString()] = a;
          Jd(this.b, "pointerdown", b, a)
      }
  }
  ;
  k.qm = function(a) {
      if (!Gd(this, a)) {
          var b = Hd(a);
          Jd(this.b, "pointermove", b, a)
      }
  }
  ;
  k.tm = function(a) {
      if (!Gd(this, a)) {
          var b = this.a[(1).toString()];
          b && b.button === a.button && (b = Hd(a),
          Jd(this.b, "pointerup", b, a),
          delete this.a[(1).toString()])
      }
  }
  ;
  k.sm = function(a) {
      if (!Gd(this, a)) {
          var b = Hd(a);
          Kd(this.b, b, a)
      }
  }
  ;
  k.rm = function(a) {
      if (!Gd(this, a)) {
          var b = Hd(a);
          Ld(this.b, b, a)
      }
  }
  ;
  k.cancel = function(a) {
      var b = Hd(a);
      this.b.cancel(b, a);
      delete this.a[(1).toString()]
  }
  ;
  function Md(a) {
      Ed.call(this, a, {
          MSPointerDown: this.ym,
          MSPointerMove: this.zm,
          MSPointerUp: this.Cm,
          MSPointerOut: this.Am,
          MSPointerOver: this.Bm,
          MSPointerCancel: this.xm,
          MSGotPointerCapture: this.vm,
          MSLostPointerCapture: this.wm
      });
      this.a = a.f;
      this.f = ["", "unavailable", "touch", "pen", "mouse"]
  }
  v(Md, Ed);
  function Nd(a, b) {
      var c = b;
      "number" === typeof b.pointerType && (c = Id(b, b),
      c.pointerType = a.f[b.pointerType]);
      return c
  }
  k = Md.prototype;
  k.ym = function(a) {
      this.a[a.pointerId.toString()] = a;
      var b = Nd(this, a);
      Jd(this.b, "pointerdown", b, a)
  }
  ;
  k.zm = function(a) {
      var b = Nd(this, a);
      Jd(this.b, "pointermove", b, a)
  }
  ;
  k.Cm = function(a) {
      var b = Nd(this, a);
      Jd(this.b, "pointerup", b, a);
      delete this.a[a.pointerId.toString()]
  }
  ;
  k.Am = function(a) {
      var b = Nd(this, a);
      Ld(this.b, b, a)
  }
  ;
  k.Bm = function(a) {
      var b = Nd(this, a);
      Kd(this.b, b, a)
  }
  ;
  k.xm = function(a) {
      var b = Nd(this, a);
      this.b.cancel(b, a);
      delete this.a[a.pointerId.toString()]
  }
  ;
  k.wm = function(a) {
      this.b.b(new Od("lostpointercapture",a,a))
  }
  ;
  k.vm = function(a) {
      this.b.b(new Od("gotpointercapture",a,a))
  }
  ;
  function Pd(a) {
      Ed.call(this, a, {
          pointerdown: this.qp,
          pointermove: this.rp,
          pointerup: this.up,
          pointerout: this.sp,
          pointerover: this.tp,
          pointercancel: this.pp,
          gotpointercapture: this.Cl,
          lostpointercapture: this.nm
      })
  }
  v(Pd, Ed);
  k = Pd.prototype;
  k.qp = function(a) {
      Qd(this.b, a)
  }
  ;
  k.rp = function(a) {
      Qd(this.b, a)
  }
  ;
  k.up = function(a) {
      Qd(this.b, a)
  }
  ;
  k.sp = function(a) {
      Qd(this.b, a)
  }
  ;
  k.tp = function(a) {
      Qd(this.b, a)
  }
  ;
  k.pp = function(a) {
      Qd(this.b, a)
  }
  ;
  k.nm = function(a) {
      Qd(this.b, a)
  }
  ;
  k.Cl = function(a) {
      Qd(this.b, a)
  }
  ;
  function Od(a, b, c) {
      Rc.call(this, a);
      this.b = b;
      a = c ? c : {};
      this.buttons = Rd(a);
      this.pressure = Sd(a, this.buttons);
      this.bubbles = "bubbles"in a ? a.bubbles : !1;
      this.cancelable = "cancelable"in a ? a.cancelable : !1;
      this.view = "view"in a ? a.view : null;
      this.detail = "detail"in a ? a.detail : null;
      this.screenX = "screenX"in a ? a.screenX : 0;
      this.screenY = "screenY"in a ? a.screenY : 0;
      this.clientX = "clientX"in a ? a.clientX : 0;
      this.clientY = "clientY"in a ? a.clientY : 0;
      this.ctrlKey = "ctrlKey"in a ? a.ctrlKey : !1;
      this.altKey = "altKey"in a ? a.altKey : !1;
      this.shiftKey = "shiftKey"in a ? a.shiftKey : !1;
      this.metaKey = "metaKey"in a ? a.metaKey : !1;
      this.button = "button"in a ? a.button : 0;
      this.relatedTarget = "relatedTarget"in a ? a.relatedTarget : null;
      this.pointerId = "pointerId"in a ? a.pointerId : 0;
      this.width = "width"in a ? a.width : 0;
      this.height = "height"in a ? a.height : 0;
      this.tiltX = "tiltX"in a ? a.tiltX : 0;
      this.tiltY = "tiltY"in a ? a.tiltY : 0;
      this.pointerType = "pointerType"in a ? a.pointerType : "";
      this.isPrimary = "isPrimary"in a ? a.isPrimary : !1;
      b.preventDefault && (this.preventDefault = function() {
          b.preventDefault()
      }
      )
  }
  v(Od, Rc);
  function Rd(a) {
      if (a.buttons || Td)
          a = a.buttons;
      else
          switch (a.which) {
          case 1:
              a = 1;
              break;
          case 2:
              a = 4;
              break;
          case 3:
              a = 2;
              break;
          default:
              a = 0
          }
      return a
  }
  function Sd(a, b) {
      var c = 0;
      a.pressure ? c = a.pressure : c = b ? .5 : 0;
      return c
  }
  var Td = !1;
  try {
      Td = 1 === (new MouseEvent("click",{
          buttons: 1
      })).buttons
  } catch (a) {}
  ;function Ud(a, b) {
      Ed.call(this, a, {
          touchstart: this.uq,
          touchmove: this.tq,
          touchend: this.sq,
          touchcancel: this.rq
      });
      this.a = a.f;
      this.j = b;
      this.f = void 0;
      this.g = 0;
      this.c = void 0
  }
  v(Ud, Ed);
  k = Ud.prototype;
  k.wj = function() {
      this.g = 0;
      this.c = void 0
  }
  ;
  function Vd(a, b, c) {
      b = Id(b, c);
      b.pointerId = c.identifier + 2;
      b.bubbles = !0;
      b.cancelable = !0;
      b.detail = a.g;
      b.button = 0;
      b.buttons = 1;
      b.width = c.webkitRadiusX || c.radiusX || 0;
      b.height = c.webkitRadiusY || c.radiusY || 0;
      b.pressure = c.webkitForce || c.force || .5;
      b.isPrimary = a.f === c.identifier;
      b.pointerType = "touch";
      b.clientX = c.clientX;
      b.clientY = c.clientY;
      b.screenX = c.screenX;
      b.screenY = c.screenY;
      return b
  }
  function Wd(a, b, c) {
      function d() {
          b.preventDefault()
      }
      var e = Array.prototype.slice.call(b.changedTouches), f = e.length, g;
      for (g = 0; g < f; ++g) {
          var h = Vd(a, b, e[g]);
          h.preventDefault = d;
          c.call(a, b, h)
      }
  }
  k.uq = function(a) {
      var b = a.touches
        , c = Object.keys(this.a)
        , d = c.length;
      if (d >= b.length) {
          var e = [], f;
          for (f = 0; f < d; ++f) {
              var g = c[f];
              var h = this.a[g];
              var l;
              if (!(l = 1 == g))
                  a: {
                      for (var m = b.length, n = 0; n < m; n++)
                          if (l = b[n],
                          l.identifier === g - 2) {
                              l = !0;
                              break a
                          }
                      l = !1
                  }
              l || e.push(h.out)
          }
          for (f = 0; f < e.length; ++f)
              this.Of(a, e[f])
      }
      b = a.changedTouches[0];
      c = Object.keys(this.a).length;
      if (0 === c || 1 === c && (1).toString()in this.a)
          this.f = b.identifier,
          void 0 !== this.c && clearTimeout(this.c);
      Xd(this, a);
      this.g++;
      Wd(this, a, this.lp)
  }
  ;
  k.lp = function(a, b) {
      this.a[b.pointerId] = {
          target: b.target,
          out: b,
          jj: b.target
      };
      var c = this.b;
      b.bubbles = !0;
      Jd(c, "pointerover", b, a);
      c = this.b;
      b.bubbles = !1;
      Jd(c, "pointerenter", b, a);
      Jd(this.b, "pointerdown", b, a)
  }
  ;
  k.tq = function(a) {
      a.preventDefault();
      Wd(this, a, this.um)
  }
  ;
  k.um = function(a, b) {
      var c = this.a[b.pointerId];
      if (c) {
          var d = c.out
            , e = c.jj;
          Jd(this.b, "pointermove", b, a);
          d && e !== b.target && (d.relatedTarget = b.target,
          b.relatedTarget = e,
          d.target = e,
          b.target ? (Ld(this.b, d, a),
          Kd(this.b, b, a)) : (b.target = e,
          b.relatedTarget = null,
          this.Of(a, b)));
          c.out = b;
          c.jj = b.target
      }
  }
  ;
  k.sq = function(a) {
      Xd(this, a);
      Wd(this, a, this.vq)
  }
  ;
  k.vq = function(a, b) {
      Jd(this.b, "pointerup", b, a);
      this.b.out(b, a);
      Yd(this.b, b, a);
      delete this.a[b.pointerId];
      b.isPrimary && (this.f = void 0,
      this.c = setTimeout(this.wj.bind(this), 200))
  }
  ;
  k.rq = function(a) {
      Wd(this, a, this.Of)
  }
  ;
  k.Of = function(a, b) {
      this.b.cancel(b, a);
      this.b.out(b, a);
      Yd(this.b, b, a);
      delete this.a[b.pointerId];
      b.isPrimary && (this.f = void 0,
      this.c = setTimeout(this.wj.bind(this), 200))
  }
  ;
  function Xd(a, b) {
      var c = a.j.f;
      b = b.changedTouches[0];
      if (a.f === b.identifier) {
          var d = [b.clientX, b.clientY];
          c.push(d);
          setTimeout(function() {
              var a = c.indexOf(d);
              -1 < a && c.splice(a, 1)
          }, 2500)
      }
  }
  ;function Zd(a) {
      Tc.call(this);
      this.g = a;
      this.f = {};
      this.i = {};
      this.a = [];
      vd ? $d(this, new Pd(this)) : wd ? $d(this, new Md(this)) : (a = new Fd(this),
      $d(this, a),
      ud && $d(this, new Ud(this,a)));
      a = this.a.length;
      for (var b, c = 0; c < a; c++)
          b = this.a[c],
          ae(this, Object.keys(b.i))
  }
  v(Zd, Tc);
  function $d(a, b) {
      var c = Object.keys(b.i);
      c && (c.forEach(function(a) {
          var c = b.i[a];
          c && (this.i[a] = c.bind(b))
      }, a),
      a.a.push(b))
  }
  Zd.prototype.c = function(a) {
      var b = this.i[a.type];
      b && b(a)
  }
  ;
  function ae(a, b) {
      b.forEach(function(a) {
          z(this.g, a, this.c, this)
      }, a)
  }
  function be(a, b) {
      b.forEach(function(a) {
          Nc(this.g, a, this.c, this)
      }, a)
  }
  function Id(a, b) {
      for (var c = {}, d, e = 0, f = ce.length; e < f; e++)
          d = ce[e][0],
          c[d] = a[d] || b[d] || ce[e][1];
      return c
  }
  function Yd(a, b, c) {
      b.bubbles = !1;
      Jd(a, "pointerleave", b, c)
  }
  Zd.prototype.out = function(a, b) {
      a.bubbles = !0;
      Jd(this, "pointerout", a, b)
  }
  ;
  Zd.prototype.cancel = function(a, b) {
      Jd(this, "pointercancel", a, b)
  }
  ;
  function Ld(a, b, c) {
      a.out(b, c);
      var d = b.target
        , e = b.relatedTarget;
      d && e && d.contains(e) || Yd(a, b, c)
  }
  function Kd(a, b, c) {
      b.bubbles = !0;
      Jd(a, "pointerover", b, c);
      var d = b.target
        , e = b.relatedTarget;
      d && e && d.contains(e) || (b.bubbles = !1,
      Jd(a, "pointerenter", b, c))
  }
  function Jd(a, b, c, d) {
      a.b(new Od(b,d,c))
  }
  function Qd(a, b) {
      a.b(new Od(b.type,b,b))
  }
  Zd.prototype.ka = function() {
      for (var a = this.a.length, b, c = 0; c < a; c++)
          b = this.a[c],
          be(this, Object.keys(b.i));
      Tc.prototype.ka.call(this)
  }
  ;
  var ce = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];
  function de(a, b) {
      Tc.call(this);
      this.f = a;
      this.j = 0;
      this.l = !1;
      this.i = [];
      this.C = b ? b * pd : pd;
      this.c = null;
      a = this.f.a;
      this.O = 0;
      this.s = {};
      this.g = new Zd(a);
      this.a = null;
      this.o = z(this.g, "pointerdown", this.Wl, this);
      this.v = z(this.g, "pointermove", this.Tp, this)
  }
  v(de, Tc);
  function ee(a, b) {
      var c = new Dd("click",a.f,b);
      a.b(c);
      0 !== a.j ? (clearTimeout(a.j),
      a.j = 0,
      c = new Dd("dblclick",a.f,b),
      a.b(c)) : a.j = setTimeout(function() {
          this.j = 0;
          var a = new Dd("singleclick",this.f,b);
          this.b(a)
      }
      .bind(a), 250)
  }
  function fe(a, b) {
      "pointerup" == b.type || "pointercancel" == b.type ? delete a.s[b.pointerId] : "pointerdown" == b.type && (a.s[b.pointerId] = !0);
      a.O = Object.keys(a.s).length
  }
  k = de.prototype;
  k.$h = function(a) {
      fe(this, a);
      var b = new Dd("pointerup",this.f,a);
      this.b(b);
      !this.l && 0 === a.button && ee(this, this.c);
      0 === this.O && (this.i.forEach(Hc),
      this.i.length = 0,
      this.l = !1,
      this.c = null,
      Qc(this.a),
      this.a = null)
  }
  ;
  k.Wl = function(a) {
      fe(this, a);
      var b = new Dd("pointerdown",this.f,a);
      this.b(b);
      this.c = a;
      0 === this.i.length && (this.a = new Zd(document),
      this.i.push(z(this.a, "pointermove", this.Sm, this), z(this.a, "pointerup", this.$h, this), z(this.g, "pointercancel", this.$h, this)))
  }
  ;
  k.Sm = function(a) {
      if (ge(this, a)) {
          this.l = !0;
          var b = new Dd("pointerdrag",this.f,a,this.l);
          this.b(b)
      }
      a.preventDefault()
  }
  ;
  k.Tp = function(a) {
      this.b(new Dd(a.type,this.f,a,!(!this.c || !ge(this, a))))
  }
  ;
  function ge(a, b) {
      return Math.abs(b.clientX - a.c.clientX) > a.C || Math.abs(b.clientY - a.c.clientY) > a.C
  }
  k.ka = function() {
      this.v && (Hc(this.v),
      this.v = null);
      this.o && (Hc(this.o),
      this.o = null);
      this.i.forEach(Hc);
      this.i.length = 0;
      this.a && (Qc(this.a),
      this.a = null);
      this.g && (Qc(this.g),
      this.g = null);
      Tc.prototype.ka.call(this)
  }
  ;
  function he(a, b) {
      this.o = a;
      this.c = b;
      this.b = [];
      this.f = [];
      this.a = {}
  }
  he.prototype.clear = function() {
      this.b.length = 0;
      this.f.length = 0;
      ub(this.a)
  }
  ;
  function ie(a) {
      var b = a.b
        , c = a.f
        , d = b[0];
      1 == b.length ? (b.length = 0,
      c.length = 0) : (b[0] = b.pop(),
      c[0] = c.pop(),
      je(a, 0));
      b = a.c(d);
      delete a.a[b];
      return d
  }
  he.prototype.i = function(a) {
      wa(!(this.c(a)in this.a), 31);
      var b = this.o(a);
      return Infinity != b ? (this.b.push(a),
      this.f.push(b),
      this.a[this.c(a)] = !0,
      ke(this, 0, this.b.length - 1),
      !0) : !1
  }
  ;
  function je(a, b) {
      for (var c = a.b, d = a.f, e = c.length, f = c[b], g = d[b], h = b; b < e >> 1; ) {
          var l = 2 * b + 1
            , m = 2 * b + 2;
          l = m < e && d[m] < d[l] ? m : l;
          c[b] = c[l];
          d[b] = d[l];
          b = l
      }
      c[b] = f;
      d[b] = g;
      ke(a, h, b)
  }
  function ke(a, b, c) {
      var d = a.b;
      a = a.f;
      for (var e = d[c], f = a[c]; c > b; ) {
          var g = c - 1 >> 1;
          if (a[g] > f)
              d[c] = d[g],
              a[c] = a[g],
              c = g;
          else
              break
      }
      d[c] = e;
      a[c] = f
  }
  function le(a) {
      var b = a.o, c = a.b, d = a.f, e = 0, f = c.length, g;
      for (g = 0; g < f; ++g) {
          var h = c[g];
          var l = b(h);
          Infinity == l ? delete a.a[a.c(h)] : (d[e] = l,
          c[e++] = h)
      }
      c.length = e;
      d.length = e;
      for (b = (a.b.length >> 1) - 1; 0 <= b; b--)
          je(a, b)
  }
  ;function me(a, b) {
      he.call(this, function(b) {
          return a.apply(null, b)
      }, function(a) {
          return a[0].gb()
      });
      this.v = b;
      this.j = 0;
      this.g = {}
  }
  v(me, he);
  me.prototype.i = function(a) {
      var b = he.prototype.i.call(this, a);
      b && z(a[0], "change", this.l, this);
      return b
  }
  ;
  me.prototype.l = function(a) {
      a = a.target;
      var b = a.getState();
      if (2 === b || 3 === b || 4 === b || 5 === b)
          Nc(a, "change", this.l, this),
          a = a.gb(),
          a in this.g && (delete this.g[a],
          --this.j),
          this.v()
  }
  ;
  function ne(a, b, c) {
      for (var d = 0, e = !1, f, g, h; a.j < b && d < c && 0 < a.b.length; )
          g = ie(a)[0],
          h = g.gb(),
          f = g.getState(),
          5 === f ? e = !0 : 0 !== f || h in a.g || (a.g[h] = !0,
          ++a.j,
          ++d,
          g.load());
      0 === d && e && a.v()
  }
  ;function oe(a) {
      return function(b) {
          if (b)
              return [Da(b[0], a[0], a[2]), Da(b[1], a[1], a[3])]
      }
  }
  function pe(a) {
      return a
  }
  ;function qe(a) {
      return function(b, c, d) {
          if (void 0 !== b)
              return b = ia(a, b, d),
              b = Da(b + c, 0, a.length - 1),
              c = Math.floor(b),
              b != c && c < a.length - 1 ? a[c] / Math.pow(a[c] / a[c + 1], b - c) : a[c]
      }
  }
  function re(a, b, c) {
      return function(d, e, f) {
          if (void 0 !== d)
              return d = Math.max(Math.floor(Math.log(b / d) / Math.log(a) + (-f / 2 + .5)) + e, 0),
              void 0 !== c && (d = Math.min(d, c)),
              b / Math.pow(a, d)
      }
  }
  ;function se(a) {
      if (void 0 !== a)
          return 0
  }
  function te(a, b) {
      if (void 0 !== a)
          return a + b
  }
  function ue(a) {
      var b = 2 * Math.PI / a;
      return function(a, d) {
          if (void 0 !== a)
              return a = Math.floor((a + d) / b + .5) * b
      }
  }
  function ve() {
      var a = Ia(5);
      return function(b, c) {
          if (void 0 !== b)
              return Math.abs(b + c) <= a ? 0 : b + c
      }
  }
  ;function we(a, b) {
      a = void 0 !== b ? a.toFixed(b) : "" + a;
      b = a.indexOf(".");
      b = -1 === b ? a.length : b;
      return 2 < b ? a : Array(3 - b).join("0") + a
  }
  function xe(a) {
      a = ("" + a).split(".");
      for (var b = ["1", "3"], c = 0; c < Math.max(a.length, b.length); c++) {
          var d = parseInt(a[c] || "0", 10)
            , e = parseInt(b[c] || "0", 10);
          if (d > e)
              return 1;
          if (e > d)
              return -1
      }
      return 0
  }
  ;function ye(a, b) {
      a[0] += b[0];
      a[1] += b[1];
      return a
  }
  function ze(a, b) {
      var c = b.xd()
        , d = b.xa();
      b = d[0];
      d = d[1];
      var e = a[0] - b;
      a = a[1] - d;
      0 === e && 0 === a && (e = 1);
      var f = Math.sqrt(e * e + a * a);
      return [b + c * e / f, d + c * a / f]
  }
  function Ae(a, b) {
      var c = a[0];
      a = a[1];
      var d = b[0]
        , e = b[1];
      b = d[0];
      d = d[1];
      var f = e[0];
      e = e[1];
      var g = f - b
        , h = e - d;
      c = 0 === g && 0 === h ? 0 : (g * (c - b) + h * (a - d)) / (g * g + h * h || 0);
      0 >= c ? (a = b,
      c = d) : 1 <= c ? (a = f,
      c = e) : (a = b + c * g,
      c = d + c * h);
      return [a, c]
  }
  function Be(a, b, c) {
      b = Ja(b + 180, 360) - 180;
      var d = Math.abs(3600 * b);
      c = c || 0;
      var e = Math.pow(10, c)
        , f = Math.floor(d / 3600)
        , g = Math.floor((d - 3600 * f) / 60);
      d = Math.ceil((d - 3600 * f - 60 * g) * e) / e;
      60 <= d && (d = 0,
      g += 1);
      60 <= g && (g = 0,
      f += 1);
      return f + "\u00b0 " + we(g) + "\u2032 " + we(d, c) + "\u2033" + (0 == b ? "" : " " + a.charAt(0 > b ? 1 : 0))
  }
  function Ce(a, b, c) {
      return a ? b.replace("{x}", a[0].toFixed(c)).replace("{y}", a[1].toFixed(c)) : ""
  }
  function De(a, b) {
      for (var c = !0, d = a.length - 1; 0 <= d; --d)
          if (a[d] != b[d]) {
              c = !1;
              break
          }
      return c
  }
  function Ee(a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      var d = a[1] * c + a[0] * b;
      a[0] = a[0] * c - a[1] * b;
      a[1] = d;
      return a
  }
  function Fe(a, b) {
      a[0] *= b;
      a[1] *= b
  }
  function Ge(a, b) {
      var c = a[0] - b[0];
      a = a[1] - b[1];
      return c * c + a * a
  }
  function He(a, b) {
      return Math.sqrt(Ge(a, b))
  }
  function Ie(a, b) {
      return Ge(a, Ae(a, b))
  }
  function Ke(a, b) {
      return Ce(a, "{x}, {y}", b)
  }
  ;function Le(a) {
      return Math.pow(a, 3)
  }
  function Me(a) {
      return 1 - Le(1 - a)
  }
  function Ne(a) {
      return 3 * a * a - 2 * a * a * a
  }
  function Oe(a) {
      return a
  }
  ;function Pe() {
      return !0
  }
  function Qe() {
      return !1
  }
  ;function Re(a, b, c, d, e, f) {
      for (var g = f ? f : [], h = 0; b < c; b += d) {
          var l = a[b]
            , m = a[b + 1];
          g[h++] = e[0] * l + e[2] * m + e[4];
          g[h++] = e[1] * l + e[3] * m + e[5]
      }
      f && g.length != h && (g.length = h);
      return g
  }
  function Se(a, b, c, d, e, f, g) {
      for (var h = g ? g : [], l = 0, m; b < c; b += d)
          for (h[l++] = a[b] + e,
          h[l++] = a[b + 1] + f,
          m = b + 2; m < b + d; ++m)
              h[l++] = a[m];
      g && h.length != l && (h.length = l);
      return h
  }
  ;var Te = Array(6);
  function Ue() {
      return [1, 0, 0, 1, 0, 0]
  }
  function Ve(a) {
      return We(a, 1, 0, 0, 1, 0, 0)
  }
  function Xe(a, b) {
      var c = a[0]
        , d = a[1]
        , e = a[2]
        , f = a[3]
        , g = a[4]
        , h = a[5]
        , l = b[0]
        , m = b[1]
        , n = b[2]
        , p = b[3]
        , q = b[4];
      b = b[5];
      a[0] = c * l + e * m;
      a[1] = d * l + f * m;
      a[2] = c * n + e * p;
      a[3] = d * n + f * p;
      a[4] = c * q + e * b + g;
      a[5] = d * q + f * b + h;
      return a
  }
  function We(a, b, c, d, e, f, g) {
      a[0] = b;
      a[1] = c;
      a[2] = d;
      a[3] = e;
      a[4] = f;
      a[5] = g;
      return a
  }
  function Ye(a, b) {
      a[0] = b[0];
      a[1] = b[1];
      a[2] = b[2];
      a[3] = b[3];
      a[4] = b[4];
      a[5] = b[5];
      return a
  }
  function Ze(a, b) {
      var c = b[0]
        , d = b[1];
      b[0] = a[0] * c + a[2] * d + a[4];
      b[1] = a[1] * c + a[3] * d + a[5];
      return b
  }
  function $e(a, b) {
      var c = Math.cos(b);
      b = Math.sin(b);
      Xe(a, We(Te, c, b, -b, c, 0, 0))
  }
  function af(a, b, c) {
      return Xe(a, We(Te, b, 0, 0, c, 0, 0))
  }
  function bf(a, b, c) {
      Xe(a, We(Te, 1, 0, 0, 1, b, c))
  }
  function cf(a, b, c, d, e, f, g, h) {
      var l = Math.sin(f);
      f = Math.cos(f);
      a[0] = d * f;
      a[1] = e * l;
      a[2] = -d * l;
      a[3] = e * f;
      a[4] = g * d * f - h * d * l + b;
      a[5] = g * e * l + h * e * f + c;
      return a
  }
  function df(a) {
      var b = a[0] * a[3] - a[1] * a[2];
      wa(0 !== b, 32);
      var c = a[0]
        , d = a[1]
        , e = a[2]
        , f = a[3]
        , g = a[4]
        , h = a[5];
      a[0] = f / b;
      a[1] = -d / b;
      a[2] = -e / b;
      a[3] = c / b;
      a[4] = (e * h - f * g) / b;
      a[5] = -(c * h - d * g) / b;
      return a
  }
  ;function ef() {
      Wc.call(this);
      this.o = Pa();
      this.v = -1;
      this.i = {};
      this.l = this.g = 0;
      this.T = Ue()
  }
  v(ef, Wc);
  k = ef.prototype;
  k.Gb = function(a, b) {
      b = b ? b : [NaN, NaN];
      this.Mb(a[0], a[1], b, Infinity);
      return b
  }
  ;
  k.yb = function(a) {
      return this.Tc(a[0], a[1])
  }
  ;
  k.Tc = Qe;
  k.G = function(a) {
      this.v != this.f && (this.o = this.De(this.o),
      this.v = this.f);
      var b = this.o;
      a ? (a[0] = b[0],
      a[1] = b[1],
      a[2] = b[2],
      a[3] = b[3]) : a = b;
      return a
  }
  ;
  k.Rb = function(a) {
      return this.Zd(a * a)
  }
  ;
  k.hb = function(a, b) {
      var c = this.T;
      a = Zb(a);
      var d = "tile-pixels" == a.a ? function(d, f, g) {
          var e = a.G()
            , l = a.re;
          e = mb(l) / mb(e);
          cf(c, l[0], l[3], e, -e, 0, 0, 0);
          Re(d, 0, d.length, g, c, f);
          return ic(a, b)(d, f, g)
      }
      : ic(a, b);
      this.Jc(d);
      return this
  }
  ;
  function ff() {
      ef.call(this);
      this.ja = "XY";
      this.a = 2;
      this.A = null
  }
  v(ff, ef);
  function gf(a) {
      var b;
      "XY" == a ? b = 2 : "XYZ" == a || "XYM" == a ? b = 3 : "XYZM" == a && (b = 4);
      return b
  }
  k = ff.prototype;
  k.Tc = Qe;
  k.De = function(a) {
      return ab(this.A, 0, this.A.length, this.a, a)
  }
  ;
  k.bc = function() {
      return this.A.slice(0, this.a)
  }
  ;
  k.ca = function() {
      return this.A
  }
  ;
  k.cc = function() {
      return this.A.slice(this.A.length - this.a)
  }
  ;
  k.ec = function() {
      return this.ja
  }
  ;
  k.Zd = function(a) {
      this.l != this.f && (ub(this.i),
      this.g = 0,
      this.l = this.f);
      if (0 > a || 0 !== this.g && a <= this.g)
          return this;
      var b = a.toString();
      if (this.i.hasOwnProperty(b))
          return this.i[b];
      var c = this.rd(a);
      if (c.ca().length < this.A.length)
          return this.i[b] = c;
      this.g = a;
      return this
  }
  ;
  k.rd = function() {
      return this
  }
  ;
  k.pa = function() {
      return this.a
  }
  ;
  function hf(a, b, c) {
      a.a = gf(b);
      a.ja = b;
      a.A = c
  }
  function jf(a, b, c, d) {
      if (b)
          c = gf(b);
      else {
          for (b = 0; b < d; ++b) {
              if (0 === c.length) {
                  a.ja = "XY";
                  a.a = 2;
                  return
              }
              c = c[0]
          }
          c = c.length;
          var e;
          2 == c ? e = "XY" : 3 == c ? e = "XYZ" : 4 == c && (e = "XYZM");
          b = e
      }
      a.ja = b;
      a.a = c
  }
  k.Jc = function(a) {
      this.A && (a(this.A, this.A, this.a),
      this.u())
  }
  ;
  k.rotate = function(a, b) {
      var c = this.ca();
      if (c) {
          var d = c.length
            , e = this.pa()
            , f = c ? c : []
            , g = Math.cos(a);
          a = Math.sin(a);
          var h = b[0];
          b = b[1];
          for (var l = 0, m = 0; m < d; m += e) {
              var n = c[m] - h
                , p = c[m + 1] - b;
              f[l++] = h + n * g - p * a;
              f[l++] = b + n * a + p * g;
              for (n = m + 2; n < m + e; ++n)
                  f[l++] = c[n]
          }
          c && f.length != l && (f.length = l);
          this.u()
      }
  }
  ;
  k.scale = function(a, b, c) {
      var d = b;
      void 0 === d && (d = a);
      var e = c;
      e || (e = nb(this.G()));
      if (c = this.ca()) {
          b = c.length;
          var f = this.pa()
            , g = c ? c : []
            , h = e[0];
          e = e[1];
          for (var l = 0, m = 0; m < b; m += f) {
              var n = c[m] - h
                , p = c[m + 1] - e;
              g[l++] = h + a * n;
              g[l++] = e + d * p;
              for (n = m + 2; n < m + f; ++n)
                  g[l++] = c[n]
          }
          c && g.length != l && (g.length = l);
          this.u()
      }
  }
  ;
  k.translate = function(a, b) {
      var c = this.ca();
      c && (Se(c, 0, c.length, this.pa(), a, b, c),
      this.u())
  }
  ;
  function mf(a, b, c, d) {
      for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
          var h = a[b]
            , l = a[b + 1];
          e += g * h - f * l;
          f = h;
          g = l
      }
      return e / 2
  }
  function nf(a, b, c, d) {
      var e = 0, f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = c[g];
          e += mf(a, b, h, d);
          b = h
      }
      return e
  }
  ;function of(a, b, c, d, e, f, g) {
      var h = a[b]
        , l = a[b + 1]
        , m = a[c] - h
        , n = a[c + 1] - l;
      if (0 !== m || 0 !== n)
          if (f = ((e - h) * m + (f - l) * n) / (m * m + n * n),
          1 < f)
              b = c;
          else if (0 < f) {
              for (e = 0; e < d; ++e)
                  g[e] = Ka(a[b + e], a[c + e], f);
              g.length = d;
              return
          }
      for (e = 0; e < d; ++e)
          g[e] = a[b + e];
      g.length = d
  }
  function pf(a, b, c, d, e) {
      var f = a[b]
        , g = a[b + 1];
      for (b += d; b < c; b += d) {
          var h = a[b]
            , l = a[b + 1];
          f = Ha(f, g, h, l);
          f > e && (e = f);
          f = h;
          g = l
      }
      return e
  }
  function qf(a, b, c, d, e) {
      var f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = c[g];
          e = pf(a, b, h, d, e);
          b = h
      }
      return e
  }
  function rf(a, b, c, d, e, f, g, h, l, m, n) {
      if (b == c)
          return m;
      if (0 === e) {
          var p = Ha(g, h, a[b], a[b + 1]);
          if (p < m) {
              for (n = 0; n < d; ++n)
                  l[n] = a[b + n];
              l.length = d;
              return p
          }
          return m
      }
      for (var q = n ? n : [NaN, NaN], r = b + d; r < c; )
          if (of(a, r - d, r, d, g, h, q),
          p = Ha(g, h, q[0], q[1]),
          p < m) {
              m = p;
              for (n = 0; n < d; ++n)
                  l[n] = q[n];
              l.length = d;
              r += d
          } else
              r += d * Math.max((Math.sqrt(p) - Math.sqrt(m)) / e | 0, 1);
      if (f && (of(a, c - d, b, d, g, h, q),
      p = Ha(g, h, q[0], q[1]),
      p < m)) {
          m = p;
          for (n = 0; n < d; ++n)
              l[n] = q[n];
          l.length = d
      }
      return m
  }
  function sf(a, b, c, d, e, f, g, h, l, m, n) {
      n = n ? n : [NaN, NaN];
      var p;
      var q = 0;
      for (p = c.length; q < p; ++q) {
          var r = c[q];
          m = rf(a, b, r, d, e, f, g, h, l, m, n);
          b = r
      }
      return m
  }
  ;function tf(a, b) {
      var c = 0, d;
      var e = 0;
      for (d = b.length; e < d; ++e)
          a[c++] = b[e];
      return c
  }
  function uf(a, b, c, d) {
      var e;
      var f = 0;
      for (e = c.length; f < e; ++f) {
          var g = c[f], h;
          for (h = 0; h < d; ++h)
              a[b++] = g[h]
      }
      return b
  }
  function vf(a, b, c, d, e) {
      e = e ? e : [];
      var f = 0, g;
      var h = 0;
      for (g = c.length; h < g; ++h)
          b = uf(a, b, c[h], d),
          e[f++] = b;
      e.length = f;
      return e
  }
  ;function wf(a, b, c, d, e) {
      e = void 0 !== e ? e : [];
      for (var f = 0; b < c; b += d)
          e[f++] = a.slice(b, b + d);
      e.length = f;
      return e
  }
  function xf(a, b, c, d, e) {
      e = void 0 !== e ? e : [];
      var f = 0, g;
      var h = 0;
      for (g = c.length; h < g; ++h) {
          var l = c[h];
          e[f++] = wf(a, b, l, d, e[f]);
          b = l
      }
      e.length = f;
      return e
  }
  function yf(a, b, c, d, e) {
      e = void 0 !== e ? e : [];
      var f = 0, g;
      var h = 0;
      for (g = c.length; h < g; ++h) {
          var l = c[h];
          e[f++] = xf(a, b, l, d, e[f]);
          b = l[l.length - 1]
      }
      e.length = f;
      return e
  }
  ;function zf(a, b, c, d, e, f, g) {
      var h = (c - b) / d;
      if (3 > h) {
          for (; b < c; b += d)
              f[g++] = a[b],
              f[g++] = a[b + 1];
          return g
      }
      var l = Array(h);
      l[0] = 1;
      l[h - 1] = 1;
      c = [b, c - d];
      for (var m = 0, n; 0 < c.length; ) {
          var p = c.pop()
            , q = c.pop()
            , r = 0
            , u = a[q]
            , x = a[q + 1]
            , B = a[p]
            , A = a[p + 1];
          for (n = q + d; n < p; n += d) {
              var y = Ga(a[n], a[n + 1], u, x, B, A);
              y > r && (m = n,
              r = y)
          }
          r > e && (l[(m - b) / d] = 1,
          q + d < m && c.push(q, m),
          m + d < p && c.push(m, p))
      }
      for (n = 0; n < h; ++n)
          l[n] && (f[g++] = a[b + n * d],
          f[g++] = a[b + n * d + 1]);
      return g
  }
  function Af(a, b, c, d, e, f, g, h) {
      var l;
      var m = 0;
      for (l = c.length; m < l; ++m) {
          var n = c[m];
          a: {
              var p = a
                , q = n
                , r = d
                , u = e
                , x = f
                , B = g;
              if (b != q) {
                  var A = u * Math.round(p[b] / u)
                    , y = u * Math.round(p[b + 1] / u);
                  b += r;
                  x[B++] = A;
                  x[B++] = y;
                  do {
                      var N = u * Math.round(p[b] / u);
                      g = u * Math.round(p[b + 1] / u);
                      b += r;
                      if (b == q) {
                          x[B++] = N;
                          x[B++] = g;
                          g = B;
                          break a
                      }
                  } while (N == A && g == y);for (; b < q; ) {
                      var ca = u * Math.round(p[b] / u);
                      var la = u * Math.round(p[b + 1] / u);
                      b += r;
                      if (ca != N || la != g) {
                          var fa = N - A
                            , va = g - y
                            , ra = ca - A
                            , T = la - y;
                          fa * T == va * ra && (0 > fa && ra < fa || fa == ra || 0 < fa && ra > fa) && (0 > va && T < va || va == T || 0 < va && T > va) || (x[B++] = N,
                          x[B++] = g,
                          A = N,
                          y = g);
                          N = ca;
                          g = la
                      }
                  }
                  x[B++] = N;
                  x[B++] = g
              }
              g = B
          }
          h.push(g);
          b = n
      }
      return g
  }
  ;function Bf(a, b) {
      ff.call(this);
      this.c = this.j = -1;
      this.na(a, b)
  }
  v(Bf, ff);
  k = Bf.prototype;
  k.clone = function() {
      var a = new Bf(null);
      Cf(a, this.ja, this.A.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      this.c != this.f && (this.j = Math.sqrt(pf(this.A, 0, this.A.length, this.a, 0)),
      this.c = this.f);
      return rf(this.A, 0, this.A.length, this.a, this.j, !0, a, b, c, d)
  }
  ;
  k.Bn = function() {
      return mf(this.A, 0, this.A.length, this.a)
  }
  ;
  k.V = function() {
      return wf(this.A, 0, this.A.length, this.a)
  }
  ;
  k.rd = function(a) {
      var b = [];
      b.length = zf(this.A, 0, this.A.length, this.a, a, b, 0);
      a = new Bf(null);
      Cf(a, "XY", b);
      return a
  }
  ;
  k.S = function() {
      return "LinearRing"
  }
  ;
  k.Ya = function() {}
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 1),
      this.A || (this.A = []),
      this.A.length = uf(this.A, 0, a, this.a),
      this.u()) : Cf(this, "XY", null)
  }
  ;
  function Cf(a, b, c) {
      hf(a, b, c);
      a.u()
  }
  ;function D(a, b) {
      ff.call(this);
      this.na(a, b)
  }
  v(D, ff);
  k = D.prototype;
  k.clone = function() {
      var a = new D(null);
      a.aa(this.ja, this.A.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      var e = this.A;
      a = Ha(a, b, e[0], e[1]);
      if (a < d) {
          d = this.a;
          for (b = 0; b < d; ++b)
              c[b] = e[b];
          c.length = d;
          return a
      }
      return d
  }
  ;
  k.V = function() {
      return this.A ? this.A.slice() : []
  }
  ;
  k.De = function(a) {
      return $a(this.A, a)
  }
  ;
  k.S = function() {
      return "Point"
  }
  ;
  k.Ya = function(a) {
      return Va(a, this.A[0], this.A[1])
  }
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 0),
      this.A || (this.A = []),
      this.A.length = tf(this.A, a),
      this.u()) : this.aa("XY", null)
  }
  ;
  k.aa = function(a, b) {
      hf(this, a, b);
      this.u()
  }
  ;
  function Df(a, b, c, d, e) {
      return !eb(e, function(e) {
          return !Ef(a, b, c, d, e[0], e[1])
      })
  }
  function Ef(a, b, c, d, e, f) {
      for (var g = 0, h = a[c - d], l = a[c - d + 1]; b < c; b += d) {
          var m = a[b]
            , n = a[b + 1];
          l <= f ? n > f && 0 < (m - h) * (f - l) - (e - h) * (n - l) && g++ : n <= f && 0 > (m - h) * (f - l) - (e - h) * (n - l) && g--;
          h = m;
          l = n
      }
      return 0 !== g
  }
  function Ff(a, b, c, d, e, f) {
      if (0 === c.length || !Ef(a, b, c[0], d, e, f))
          return !1;
      var g;
      b = 1;
      for (g = c.length; b < g; ++b)
          if (Ef(a, c[b - 1], c[b], d, e, f))
              return !1;
      return !0
  }
  ;function Gf(a, b, c, d, e, f, g) {
      var h, l = e[f + 1], m = [], n = c[0];
      var p = a[n - d];
      var q = a[n - d + 1];
      for (h = b; h < n; h += d) {
          var r = a[h];
          var u = a[h + 1];
          if (l <= q && u <= l || q <= l && l <= u)
              p = (l - q) / (u - q) * (r - p) + p,
              m.push(p);
          p = r;
          q = u
      }
      n = NaN;
      q = -Infinity;
      m.sort(ea);
      p = m[0];
      h = 1;
      for (u = m.length; h < u; ++h) {
          r = m[h];
          var x = Math.abs(r - p);
          x > q && (p = (p + r) / 2,
          Ff(a, b, c, d, p, l) && (n = p,
          q = x));
          p = r
      }
      isNaN(n) && (n = e[f]);
      return g ? (g.push(n, l, q),
      g) : [n, l, q]
  }
  ;function Hf(a, b, c, d, e, f) {
      for (var g = [a[b], a[b + 1]], h = [], l; b + d < c; b += d) {
          h[0] = a[b + d];
          h[1] = a[b + d + 1];
          if (l = e.call(f, g, h))
              return l;
          g[0] = h[0];
          g[1] = h[1]
      }
      return !1
  }
  ;function If(a, b, c, d, e) {
      var f = bb(Pa(), a, b, c, d);
      return qb(e, f) ? Wa(e, f) || f[0] >= e[0] && f[2] <= e[2] || f[1] >= e[1] && f[3] <= e[3] ? !0 : Hf(a, b, c, d, function(a, b) {
          var c = !1
            , d = Xa(e, a)
            , f = Xa(e, b);
          if (1 === d || 1 === f)
              c = !0;
          else {
              var g = e[0]
                , h = e[1]
                , r = e[2]
                , u = e[3]
                , x = b[0];
              b = b[1];
              a = (b - a[1]) / (x - a[0]);
              f & 2 && !(d & 2) && (c = x - (b - u) / a,
              c = c >= g && c <= r);
              c || !(f & 4) || d & 4 || (c = b - (x - r) * a,
              c = c >= h && c <= u);
              c || !(f & 8) || d & 8 || (c = x - (b - h) / a,
              c = c >= g && c <= r);
              c || !(f & 16) || d & 16 || (c = b - (x - g) * a,
              c = c >= h && c <= u)
          }
          return c
      }) : !1
  }
  function Jf(a, b, c, d, e) {
      var f = c[0];
      if (!(If(a, b, f, d, e) || Ef(a, b, f, d, e[0], e[1]) || Ef(a, b, f, d, e[0], e[3]) || Ef(a, b, f, d, e[2], e[1]) || Ef(a, b, f, d, e[2], e[3])))
          return !1;
      if (1 === c.length)
          return !0;
      b = 1;
      for (f = c.length; b < f; ++b)
          if (Df(a, c[b - 1], c[b], d, e))
              return !1;
      return !0
  }
  ;function Kf(a, b, c, d) {
      for (var e = 0, f = a[c - d], g = a[c - d + 1]; b < c; b += d) {
          var h = a[b]
            , l = a[b + 1];
          e += (h - f) * (l + g);
          f = h;
          g = l
      }
      return 0 < e
  }
  function Lf(a, b, c, d) {
      var e = 0;
      d = void 0 !== d ? d : !1;
      var f;
      var g = 0;
      for (f = b.length; g < f; ++g) {
          var h = b[g];
          e = Kf(a, e, h, c);
          if (0 === g) {
              if (d && e || !d && !e)
                  return !1
          } else if (d && !e || !d && e)
              return !1;
          e = h
      }
      return !0
  }
  function Mf(a, b, c, d, e) {
      e = void 0 !== e ? e : !1;
      var f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = c[g]
            , l = Kf(a, b, h, d);
          if (0 === g ? e && l || !e && !l : e && !l || !e && l) {
              l = a;
              for (var m = h, n = d; b < m - n; ) {
                  var p;
                  for (p = 0; p < n; ++p) {
                      var q = l[b + p];
                      l[b + p] = l[m - n + p];
                      l[m - n + p] = q
                  }
                  b += n;
                  m -= n
              }
          }
          b = h
      }
      return b
  }
  function Of(a, b, c, d) {
      var e = 0, f;
      var g = 0;
      for (f = b.length; g < f; ++g)
          e = Mf(a, e, b[g], c, d);
      return e
  }
  ;function E(a, b) {
      ff.call(this);
      this.c = [];
      this.s = -1;
      this.C = null;
      this.I = this.D = this.B = -1;
      this.j = null;
      this.na(a, b)
  }
  v(E, ff);
  k = E.prototype;
  k.zk = function(a) {
      this.A ? ja(this.A, a.ca()) : this.A = a.ca().slice();
      this.c.push(this.A.length);
      this.u()
  }
  ;
  k.clone = function() {
      var a = new E(null);
      a.aa(this.ja, this.A.slice(), this.c.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      this.D != this.f && (this.B = Math.sqrt(qf(this.A, 0, this.c, this.a, 0)),
      this.D = this.f);
      return sf(this.A, 0, this.c, this.a, this.B, !0, a, b, c, d)
  }
  ;
  k.Tc = function(a, b) {
      return Ff(this.Ub(), 0, this.c, this.a, a, b)
  }
  ;
  k.En = function() {
      return nf(this.Ub(), 0, this.c, this.a)
  }
  ;
  k.V = function(a) {
      if (void 0 !== a) {
          var b = this.Ub().slice();
          Mf(b, 0, this.c, this.a, a)
      } else
          b = this.A;
      return xf(b, 0, this.c, this.a)
  }
  ;
  k.lb = function() {
      return this.c
  }
  ;
  function Pf(a) {
      if (a.s != a.f) {
          var b = nb(a.G());
          a.C = Gf(a.Ub(), 0, a.c, a.a, b, 0);
          a.s = a.f
      }
      return a.C
  }
  k.bl = function() {
      return new D(Pf(this),"XYM")
  }
  ;
  k.hl = function() {
      return this.c.length
  }
  ;
  k.Sh = function(a) {
      if (0 > a || this.c.length <= a)
          return null;
      var b = new Bf(null);
      Cf(b, this.ja, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
      return b
  }
  ;
  k.Xd = function() {
      var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = c[g]
            , l = new Bf(null);
          Cf(l, a, b.slice(e, h));
          d.push(l);
          e = h
      }
      return d
  }
  ;
  k.Ub = function() {
      if (this.I != this.f) {
          var a = this.A;
          Lf(a, this.c, this.a) ? this.j = a : (this.j = a.slice(),
          this.j.length = Mf(this.j, 0, this.c, this.a));
          this.I = this.f
      }
      return this.j
  }
  ;
  k.rd = function(a) {
      var b = []
        , c = [];
      b.length = Af(this.A, 0, this.c, this.a, Math.sqrt(a), b, 0, c);
      a = new E(null);
      a.aa("XY", b, c);
      return a
  }
  ;
  k.S = function() {
      return "Polygon"
  }
  ;
  k.Ya = function(a) {
      return Jf(this.Ub(), 0, this.c, this.a, a)
  }
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 2),
      this.A || (this.A = []),
      a = vf(this.A, 0, a, this.a, this.c),
      this.A.length = 0 === a.length ? 0 : a[a.length - 1],
      this.u()) : this.aa("XY", null, this.c)
  }
  ;
  k.aa = function(a, b, c) {
      hf(this, a, b);
      this.c = c;
      this.u()
  }
  ;
  function Qf(a, b, c, d) {
      var e = d ? d : 32;
      d = [];
      var f;
      for (f = 0; f < e; ++f)
          ja(d, a.offset(b, c, 2 * Math.PI * f / e));
      d.push(d[0], d[1]);
      a = new E(null);
      a.aa("XY", d, [d.length]);
      return a
  }
  function Rf(a) {
      var b = a[0]
        , c = a[1]
        , d = a[2];
      a = a[3];
      b = [b, c, b, a, d, a, d, c, b, c];
      c = new E(null);
      c.aa("XY", b, [b.length]);
      return c
  }
  function Sf(a, b, c) {
      var d = b ? b : 32
        , e = a.pa();
      b = a.ja;
      var f = new E(null,b);
      d = e * (d + 1);
      e = Array(d);
      for (var g = 0; g < d; g++)
          e[g] = 0;
      f.aa(b, e, [e.length]);
      Tf(f, a.xa(), a.xd(), c);
      return f
  }
  function Tf(a, b, c, d) {
      var e = a.ca()
        , f = a.ja
        , g = a.pa()
        , h = a.lb()
        , l = e.length / g - 1;
      d = d ? d : 0;
      for (var m, n, p = 0; p <= l; ++p)
          n = p * g,
          m = d + 2 * Ja(p, l) * Math.PI / l,
          e[n] = b[0] + c * Math.cos(m),
          e[n + 1] = b[1] + c * Math.sin(m);
      a.aa(f, e, h)
  }
  ;function F(a) {
      Wc.call(this);
      a = tb({}, a);
      this.l = [0, 0];
      this.c = [];
      this.Ff = this.Ff.bind(this);
      this.v = ec(a.projection);
      Uf(this, a)
  }
  v(F, Wc);
  function Uf(a, b) {
      var c = {};
      c.center = void 0 !== b.center ? b.center : null;
      var d = void 0 !== b.minZoom ? b.minZoom : 0;
      var e = void 0 !== b.maxZoom ? b.maxZoom : 28;
      var f = void 0 !== b.zoomFactor ? b.zoomFactor : 2;
      if (void 0 !== b.resolutions) {
          e = b.resolutions;
          var g = e[0];
          var h = e[e.length - 1];
          e = qe(e)
      } else {
          g = ec(b.projection);
          h = g.G();
          var l = (h ? Math.max(lb(h), mb(h)) : 360 * Eb.degrees / g.Rc()) / 256 / Math.pow(2, 0)
            , m = l / Math.pow(2, 28);
          g = b.maxResolution;
          void 0 !== g ? d = 0 : g = l / Math.pow(f, d);
          h = b.minResolution;
          void 0 === h && (h = void 0 !== b.maxZoom ? void 0 !== b.maxResolution ? g / Math.pow(f, e) : l / Math.pow(f, e) : m);
          e = d + Math.floor(Math.log(g / h) / Math.log(f));
          h = g / Math.pow(f, e - d);
          e = re(f, g, e - d)
      }
      a.a = g;
      a.i = h;
      a.C = f;
      a.j = b.resolutions;
      a.o = d;
      (void 0 !== b.enableRotation ? b.enableRotation : 1) ? (d = b.constrainRotation,
      d = void 0 === d || !0 === d ? ve() : !1 === d ? te : "number" === typeof d ? ue(d) : te) : d = se;
      a.g = {
          center: void 0 !== b.extent ? oe(b.extent) : pe,
          resolution: e,
          rotation: d
      };
      void 0 !== b.resolution ? c.resolution = b.resolution : void 0 !== b.zoom && (c.resolution = a.constrainResolution(a.a, b.zoom - a.o));
      c.rotation = void 0 !== b.rotation ? b.rotation : 0;
      a.H(c);
      a.D = b
  }
  function Vf(a, b) {
      var c = tb({}, a.D);
      void 0 !== c.resolution ? c.resolution = a.Oa() : c.zoom = a.Yh();
      c.center = a.xa();
      c.rotation = a.Pa();
      return tb({}, c, b)
  }
  k = F.prototype;
  k.animate = function(a) {
      var b = arguments.length;
      if (1 < b && "function" === typeof arguments[b - 1]) {
          var c = arguments[b - 1];
          --b
      }
      if (Wf(this)) {
          for (var d = Date.now(), e = this.xa().slice(), f = this.Oa(), g = this.Pa(), h = [], l = 0; l < b; ++l) {
              var m = arguments[l]
                , n = {
                  start: d,
                  complete: !1,
                  anchor: m.anchor,
                  duration: void 0 !== m.duration ? m.duration : 1E3,
                  easing: m.easing || Ne
              };
              m.center && (n.le = e,
              n.pe = m.center,
              e = n.pe);
              void 0 !== m.zoom ? (n.ne = f,
              n.dd = this.constrainResolution(this.a, m.zoom - this.o, 0),
              f = n.dd) : m.resolution && (n.ne = f,
              n.dd = m.resolution,
              f = n.dd);
              void 0 !== m.rotation && (n.Df = g,
              n.qe = g + (Ja(m.rotation - g + Math.PI, 2 * Math.PI) - Math.PI),
              g = n.qe);
              n.callback = c;
              n.le && n.pe && !De(n.le, n.pe) || n.ne !== n.dd || n.Df !== n.qe ? d += n.duration : n.complete = !0;
              h.push(n)
          }
          this.c.push(h);
          Xf(this, 0, 1);
          this.Ff()
      } else
          b = arguments[b - 1],
          b.center && this.rb(b.center),
          void 0 !== b.zoom && this.Lj(b.zoom),
          void 0 !== b.rotation && this.de(b.rotation),
          c && c(!0)
  }
  ;
  k.Pc = function() {
      return 0 < Yf(this)[0]
  }
  ;
  k.al = function() {
      return 0 < Yf(this)[1]
  }
  ;
  k.kd = function() {
      Xf(this, 0, -Yf(this)[0]);
      for (var a = 0, b = this.c.length; a < b; ++a) {
          var c = this.c[a];
          c[0].callback && c[0].callback(!1)
      }
      this.c.length = 0
  }
  ;
  k.Ff = function() {
      void 0 !== this.s && (cancelAnimationFrame(this.s),
      this.s = void 0);
      if (this.Pc()) {
          for (var a = Date.now(), b = !1, c = this.c.length - 1; 0 <= c; --c) {
              for (var d = this.c[c], e = !0, f = 0, g = d.length; f < g; ++f) {
                  var h = d[f];
                  if (!h.complete) {
                      b = a - h.start;
                      b = 0 < h.duration ? b / h.duration : 1;
                      1 <= b ? (h.complete = !0,
                      b = 1) : e = !1;
                      b = h.easing(b);
                      if (h.le) {
                          var l = h.le[0]
                            , m = h.le[1];
                          this.set("center", [l + b * (h.pe[0] - l), m + b * (h.pe[1] - m)])
                      }
                      h.ne && h.dd && (l = 1 === b ? h.dd : h.ne + b * (h.dd - h.ne),
                      h.anchor && this.set("center", Zf(this, l, h.anchor)),
                      this.set("resolution", l));
                      void 0 !== h.Df && void 0 !== h.qe && (b = 1 === b ? Ja(h.qe + Math.PI, 2 * Math.PI) - Math.PI : h.Df + b * (h.qe - h.Df),
                      h.anchor && this.set("center", $f(this, b, h.anchor)),
                      this.set("rotation", b));
                      b = !0;
                      if (!h.complete)
                          break
                  }
              }
              e && (this.c[c] = null,
              Xf(this, 0, -1),
              (d = d[0].callback) && d(!0))
          }
          this.c = this.c.filter(Boolean);
          b && void 0 === this.s && (this.s = requestAnimationFrame(this.Ff))
      }
  }
  ;
  function $f(a, b, c) {
      var d = a.xa();
      if (void 0 !== d) {
          var e = [d[0] - c[0], d[1] - c[1]];
          Ee(e, b - a.Pa());
          ye(e, c)
      }
      return e
  }
  function Zf(a, b, c) {
      var d, e = a.xa();
      a = a.Oa();
      void 0 !== e && void 0 !== a && (d = [c[0] - b * (c[0] - e[0]) / a, c[1] - b * (c[1] - e[1]) / a]);
      return d
  }
  function ag(a) {
      var b = [100, 100];
      a = '.ol-viewport[data-view="' + w(a) + '"]';
      if (a = document.querySelector(a))
          a = getComputedStyle(a),
          b[0] = parseInt(a.width, 10),
          b[1] = parseInt(a.height, 10);
      return b
  }
  k.Kc = function(a) {
      return this.g.center(a)
  }
  ;
  k.constrainResolution = function(a, b, c) {
      return this.g.resolution(a, b || 0, c || 0)
  }
  ;
  k.constrainRotation = function(a, b) {
      return this.g.rotation(a, b || 0)
  }
  ;
  k.xa = function() {
      return this.get("center")
  }
  ;
  function Yf(a, b) {
      return void 0 !== b ? (b[0] = a.l[0],
      b[1] = a.l[1],
      b) : a.l.slice()
  }
  k.jd = function(a) {
      a = a || ag(this);
      var b = this.xa();
      wa(b, 1);
      var c = this.Oa();
      wa(void 0 !== c, 2);
      var d = this.Pa();
      wa(void 0 !== d, 3);
      return ob(b, c, d, a)
  }
  ;
  k.Xm = function() {
      return this.a
  }
  ;
  k.Zm = function() {
      return this.i
  }
  ;
  k.Ym = function() {
      return this.Ne(this.i)
  }
  ;
  k.iq = function(a) {
      Uf(this, Vf(this, {
          maxZoom: a
      }))
  }
  ;
  k.$m = function() {
      return this.Ne(this.a)
  }
  ;
  k.jq = function(a) {
      Uf(this, Vf(this, {
          minZoom: a
      }))
  }
  ;
  k.an = function() {
      return this.v
  }
  ;
  k.Oa = function() {
      return this.get("resolution")
  }
  ;
  k.bn = function() {
      return this.j
  }
  ;
  k.Ke = function(a, b) {
      b = b || ag(this);
      return Math.max(lb(a) / b[0], mb(a) / b[1])
  }
  ;
  function bg(a) {
      var b = a.a
        , c = Math.log(b / a.i) / Math.log(2);
      return function(a) {
          return b / Math.pow(2, a * c)
      }
  }
  k.Pa = function() {
      return this.get("rotation")
  }
  ;
  function cg(a) {
      var b = a.a
        , c = Math.log(b / a.i) / Math.log(2);
      return function(a) {
          return Math.log(b / a) / Math.log(2) / c
      }
  }
  k.getState = function() {
      var a = this.xa()
        , b = this.v
        , c = this.Oa()
        , d = this.Pa();
      return {
          center: a.slice(),
          projection: void 0 !== b ? b : null,
          resolution: c,
          rotation: d
      }
  }
  ;
  k.Yh = function() {
      var a, b = this.Oa();
      void 0 !== b && (a = this.Ne(b));
      return a
  }
  ;
  k.Ne = function(a) {
      if (a >= this.i && a <= this.a) {
          var b = this.o || 0;
          if (this.j) {
              var c = ia(this.j, a, 1);
              b += c;
              if (c == this.j.length - 1)
                  return b;
              var d = this.j[c];
              c = d / this.j[c + 1]
          } else
              d = this.a,
              c = this.C;
          b += Math.log(d / a) / Math.log(c)
      }
      return b
  }
  ;
  k.Wh = function(a) {
      return this.constrainResolution(this.a, a - this.o, 0)
  }
  ;
  k.Uf = function(a, b) {
      b = b || {};
      var c = b.size;
      c || (c = ag(this));
      if (a instanceof ff)
          if ("Circle" === a.S()) {
              a = a.G();
              var d = Rf(a);
              d.rotate(this.Pa(), nb(a))
          } else
              d = a;
      else
          wa(Array.isArray(a), 24),
          wa(!kb(a), 25),
          d = Rf(a);
      var e = b.padding ? b.padding : [0, 0, 0, 0], f = void 0 !== b.constrainResolution ? b.constrainResolution : !0, g = void 0 !== b.nearest ? b.nearest : !1, h;
      void 0 !== b.minResolution ? h = b.minResolution : void 0 !== b.maxZoom ? h = this.constrainResolution(this.a, b.maxZoom - this.o, 0) : h = 0;
      var l = d.ca()
        , m = this.Pa();
      a = Math.cos(-m);
      m = Math.sin(-m);
      var n = Infinity
        , p = Infinity
        , q = -Infinity
        , r = -Infinity;
      d = d.pa();
      for (var u = 0, x = l.length; u < x; u += d) {
          var B = l[u] * a - l[u + 1] * m
            , A = l[u] * m + l[u + 1] * a;
          n = Math.min(n, B);
          p = Math.min(p, A);
          q = Math.max(q, B);
          r = Math.max(r, A)
      }
      c = this.Ke([n, p, q, r], [c[0] - e[1] - e[3], c[1] - e[0] - e[2]]);
      c = isNaN(c) ? h : Math.max(c, h);
      f && (h = this.constrainResolution(c, 0, 0),
      !g && h < c && (h = this.constrainResolution(h, -1, 0)),
      c = h);
      m = -m;
      h = (n + q) / 2 + (e[1] - e[3]) / 2 * c;
      e = (p + r) / 2 + (e[0] - e[2]) / 2 * c;
      a = [h * a - e * m, e * a + h * m];
      e = b.callback ? b.callback : sa;
      void 0 !== b.duration ? this.animate({
          resolution: c,
          center: a,
          duration: b.duration,
          easing: b.easing
      }, e) : (this.ad(c),
      this.rb(a),
      setTimeout(e.bind(void 0, !0), 0))
  }
  ;
  k.Fk = function(a, b, c) {
      var d = this.Pa()
        , e = Math.cos(-d);
      d = Math.sin(-d);
      var f = a[0] * e - a[1] * d;
      a = a[1] * e + a[0] * d;
      var g = this.Oa();
      f += (b[0] / 2 - c[0]) * g;
      a += (c[1] - b[1] / 2) * g;
      d = -d;
      this.rb([f * e - a * d, a * e + f * d])
  }
  ;
  function Wf(a) {
      return !!a.xa() && void 0 !== a.Oa()
  }
  k.rotate = function(a, b) {
      void 0 !== b && (b = $f(this, a, b),
      this.rb(b));
      this.de(a)
  }
  ;
  k.rb = function(a) {
      this.set("center", a);
      this.Pc() && this.kd()
  }
  ;
  function Xf(a, b, c) {
      a.l[b] += c;
      a.u()
  }
  k.ad = function(a) {
      this.set("resolution", a);
      this.Pc() && this.kd()
  }
  ;
  k.de = function(a) {
      this.set("rotation", a);
      this.Pc() && this.kd()
  }
  ;
  k.Lj = function(a) {
      this.ad(this.Wh(a))
  }
  ;
  function dg(a, b) {
      var c = document.createElement("CANVAS");
      a && (c.width = a);
      b && (c.height = b);
      return c.getContext("2d")
  }
  function eg(a, b) {
      var c = b.parentNode;
      c && c.replaceChild(a, b)
  }
  function fg(a) {
      a && a.parentNode && a.parentNode.removeChild(a)
  }
  ;function gg(a) {
      Wc.call(this);
      var b = tb({}, a);
      b.opacity = void 0 !== a.opacity ? a.opacity : 1;
      b.visible = void 0 !== a.visible ? a.visible : !0;
      b.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;
      b.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;
      b.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;
      this.H(b);
      this.a = {
          layer: this,
          Ue: !0
      }
  }
  v(gg, Wc);
  k = gg.prototype;
  k.S = function() {
      return this.type
  }
  ;
  function hg(a) {
      a.a.opacity = Da(a.jc(), 0, 1);
      a.a.Nj = a.ig();
      a.a.visible = a.Tb();
      a.a.extent = a.G();
      a.a.zIndex = a.za();
      a.a.maxResolution = a.hc();
      a.a.minResolution = Math.max(a.ic(), 0);
      return a.a
  }
  k.G = function() {
      return this.get("extent")
  }
  ;
  k.hc = function() {
      return this.get("maxResolution")
  }
  ;
  k.ic = function() {
      return this.get("minResolution")
  }
  ;
  k.jc = function() {
      return this.get("opacity")
  }
  ;
  k.Tb = function() {
      return this.get("visible")
  }
  ;
  k.za = function() {
      return this.get("zIndex")
  }
  ;
  k.zc = function(a) {
      this.set("extent", a)
  }
  ;
  k.Ec = function(a) {
      this.set("maxResolution", a)
  }
  ;
  k.Fc = function(a) {
      this.set("minResolution", a)
  }
  ;
  k.Ac = function(a) {
      this.set("opacity", a)
  }
  ;
  k.Bc = function(a) {
      this.set("visible", a)
  }
  ;
  k.Xb = function(a) {
      this.set("zIndex", a)
  }
  ;
  function ig(a) {
      var b = a || {};
      a = tb({}, b);
      delete a.layers;
      b = b.layers;
      gg.call(this, a);
      this.i = [];
      this.c = {};
      z(this, Yc(jg), this.Pl, this);
      b ? Array.isArray(b) ? b = new C(b.slice(),{
          unique: !0
      }) : wa(b instanceof C, 43) : b = new C(void 0,{
          unique: !0
      });
      this.Ni(b)
  }
  v(ig, gg);
  k = ig.prototype;
  k.Qe = function() {
      this.u()
  }
  ;
  k.Pl = function() {
      this.i.forEach(Hc);
      this.i.length = 0;
      var a = this.yd();
      this.i.push(z(a, "add", this.Ol, this), z(a, "remove", this.Ql, this));
      for (var b in this.c)
          this.c[b].forEach(Hc);
      ub(this.c);
      a = a.a;
      var c;
      b = 0;
      for (c = a.length; b < c; b++) {
          var d = a[b];
          this.c[w(d).toString()] = [z(d, "propertychange", this.Qe, this), z(d, "change", this.Qe, this)]
      }
      this.u()
  }
  ;
  k.Ol = function(a) {
      a = a.element;
      var b = w(a).toString();
      this.c[b] = [z(a, "propertychange", this.Qe, this), z(a, "change", this.Qe, this)];
      this.u()
  }
  ;
  k.Ql = function(a) {
      a = w(a.element).toString();
      this.c[a].forEach(Hc);
      delete this.c[a];
      this.u()
  }
  ;
  k.yd = function() {
      return this.get(jg)
  }
  ;
  k.Ni = function(a) {
      this.set(jg, a)
  }
  ;
  k.eg = function(a) {
      var b = void 0 !== a ? a : []
        , c = b.length;
      this.yd().forEach(function(a) {
          a.eg(b)
      });
      a = hg(this);
      var d;
      for (d = b.length; c < d; c++) {
          var e = b[c];
          e.opacity *= a.opacity;
          e.visible = e.visible && a.visible;
          e.maxResolution = Math.min(e.maxResolution, a.maxResolution);
          e.minResolution = Math.max(e.minResolution, a.minResolution);
          void 0 !== a.extent && (e.extent = void 0 !== e.extent ? pb(e.extent, a.extent) : a.extent)
      }
      return b
  }
  ;
  k.ig = function() {
      return "ready"
  }
  ;
  var jg = "layers";
  var kg = []
    , lg = [];
  function mg(a, b) {
      switch (a) {
      case "MAP_RENDERER":
          a = kg;
          a.push(b);
          break;
      case "LAYER_RENDERER":
          a = lg;
          a.push(b);
          break;
      default:
          throw Error("Unsupported plugin type: " + a);
      }
  }
  function ng(a) {
      for (var b = 0, c = a.length; b < c; ++b)
          mg("LAYER_RENDERER", a[b])
  }
  ;function G(a) {
      Wc.call(this);
      var b = og(a);
      this.ub = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;
      this.Lb = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;
      this.Jd = void 0 !== a.pixelRatio ? a.pixelRatio : pd;
      this.gd = b.logos;
      this.U = function() {
          this.j = void 0;
          this.Wp.call(this, Date.now())
      }
      .bind(this);
      this.Va = Ue();
      this.If = Ue();
      this.ab = 0;
      this.C = this.D = this.B = this.g = this.c = null;
      this.a = document.createElement("DIV");
      this.a.className = "ol-viewport" + (ud ? " ol-touch" : "");
      this.a.style.position = "relative";
      this.a.style.overflow = "hidden";
      this.a.style.width = "100%";
      this.a.style.height = "100%";
      this.a.style.msTouchAction = "none";
      this.a.style.touchAction = "none";
      this.s = document.createElement("DIV");
      this.s.className = "ol-overlaycontainer";
      this.a.appendChild(this.s);
      this.v = document.createElement("DIV");
      this.v.className = "ol-overlaycontainer-stopevent";
      for (var c = "click dblclick mousedown touchstart MSPointerDown pointerdown mousewheel wheel".split(" "), d = 0, e = c.length; d < e; ++d)
          z(this.v, c[d], Sc);
      this.a.appendChild(this.v);
      this.fa = new de(this,a.moveTolerance);
      for (var f in Cd)
          z(this.fa, Cd[f], this.Zh, this);
      this.ta = b.keyboardEventTarget;
      this.o = null;
      z(this.a, "wheel", this.sd, this);
      z(this.a, "mousewheel", this.sd, this);
      this.controls = b.controls || new C;
      this.interactions = b.interactions || new C;
      this.l = b.overlays;
      this.Dg = {};
      this.lc = b.om.create(this.a, this);
      this.I = null;
      this.oa = [];
      this.ma = new me(this.zl.bind(this),this.fm.bind(this));
      this.T = {};
      z(this, Yc("layergroup"), this.Ml, this);
      z(this, Yc("view"), this.gm, this);
      z(this, Yc("size"), this.am, this);
      z(this, Yc("target"), this.em, this);
      this.H(b.values);
      this.controls.forEach(function(a) {
          a.setMap(this)
      }, this);
      z(this.controls, "add", function(a) {
          a.element.setMap(this)
      }, this);
      z(this.controls, "remove", function(a) {
          a.element.setMap(null)
      }, this);
      this.interactions.forEach(function(a) {
          a.setMap(this)
      }, this);
      z(this.interactions, "add", function(a) {
          a.element.setMap(this)
      }, this);
      z(this.interactions, "remove", function(a) {
          a.element.setMap(null)
      }, this);
      this.l.forEach(this.xh, this);
      z(this.l, "add", function(a) {
          this.xh(a.element)
      }, this);
      z(this.l, "remove", function(a) {
          var b = a.element.g;
          void 0 !== b && delete this.Dg[b.toString()];
          a.element.setMap(null)
      }, this)
  }
  v(G, Wc);
  k = G.prototype;
  k.Mf = function(a) {
      this.controls.push(a)
  }
  ;
  k.Nf = function(a) {
      this.interactions.push(a)
  }
  ;
  k.Ae = function(a) {
      this.dc().yd().push(a)
  }
  ;
  k.Be = function(a) {
      this.l.push(a)
  }
  ;
  k.xh = function(a) {
      var b = a.g;
      void 0 !== b && (this.Dg[b.toString()] = a);
      a.setMap(this)
  }
  ;
  k.ka = function() {
      Qc(this.fa);
      Qc(this.lc);
      Nc(this.a, "wheel", this.sd, this);
      Nc(this.a, "mousewheel", this.sd, this);
      this.i && (window.removeEventListener("resize", this.i, !1),
      this.i = void 0);
      this.j && (cancelAnimationFrame(this.j),
      this.j = void 0);
      this.vd(null);
      Wc.prototype.ka.call(this)
  }
  ;
  k.Mc = function(a, b, c) {
      if (this.c)
          return a = this.Na(a),
          c = c ? c : {},
          this.lc.Fa(a, this.c, void 0 !== c.hitTolerance ? c.hitTolerance * this.c.pixelRatio : 0, b, null, c.layerFilter ? c.layerFilter : Pe, null)
  }
  ;
  k.Yf = function(a, b) {
      var c = null;
      this.Mc(a, function(a) {
          c || (c = []);
          c.push(a)
      }, b);
      return c
  }
  ;
  k.sg = function(a, b, c, d, e) {
      if (this.c)
          return this.lc.Qi(a, this.c, b, void 0 !== c ? c : null, d ? d : Pe, void 0 !== e ? e : null)
  }
  ;
  k.ng = function(a, b) {
      if (!this.c)
          return !1;
      a = this.Na(a);
      b = b ? b : {};
      return this.lc.Ri(a, this.c, void 0 !== b.hitTolerance ? b.hitTolerance * this.c.pixelRatio : 0, b.layerFilter ? b.layerFilter : Pe, null)
  }
  ;
  k.Wd = function(a) {
      return this.Na(this.od(a))
  }
  ;
  k.od = function(a) {
      var b = this.a.getBoundingClientRect();
      a = a.changedTouches ? a.changedTouches[0] : a;
      return [a.clientX - b.left, a.clientY - b.top]
  }
  ;
  k.$d = function() {
      return this.get("target")
  }
  ;
  k.wc = function() {
      var a = this.$d();
      return void 0 !== a ? "string" === typeof a ? document.getElementById(a) : a : null
  }
  ;
  k.Na = function(a) {
      var b = this.c;
      return b ? Ze(b.pixelToCoordinateTransform, a.slice()) : null
  }
  ;
  k.Xf = function() {
      return this.controls
  }
  ;
  k.hg = function() {
      return this.l
  }
  ;
  k.gg = function(a) {
      a = this.Dg[a.toString()];
      return void 0 !== a ? a : null
  }
  ;
  k.cg = function() {
      return this.interactions
  }
  ;
  k.dc = function() {
      return this.get("layergroup")
  }
  ;
  k.Ye = function() {
      return this.dc().yd()
  }
  ;
  k.Ha = function(a) {
      var b = this.c;
      return b ? Ze(b.coordinateToPixelTransform, a.slice(0, 2)) : null
  }
  ;
  k.Je = function() {
      return this.lc
  }
  ;
  k.zb = function() {
      return this.get("size")
  }
  ;
  k.$ = function() {
      return this.get("view")
  }
  ;
  k.lg = function() {
      return this.a
  }
  ;
  k.zl = function(a, b, c, d) {
      var e = this.c;
      if (!(e && b in e.wantedTiles && e.wantedTiles[b][a.gb()]))
          return Infinity;
      a = c[0] - e.focus[0];
      c = c[1] - e.focus[1];
      return 65536 * Math.log(d) + Math.sqrt(a * a + c * c) / d
  }
  ;
  k.sd = function(a, b) {
      a = new fd(b || a.type,this,a);
      this.Zh(a)
  }
  ;
  k.Zh = function(a) {
      if (this.c) {
          this.I = a.coordinate;
          a.frameState = this.c;
          var b = this.interactions.a, c;
          if (!1 !== this.b(a))
              for (c = b.length - 1; 0 <= c; c--) {
                  var d = b[c];
                  if (d.c() && !d.handleEvent(a))
                      break
              }
      }
  }
  ;
  k.Zl = function() {
      var a = this.c
        , b = this.ma;
      if (0 !== b.b.length) {
          var c = 16
            , d = c;
          if (a) {
              var e = a.viewHints;
              e[0] && (c = this.ub ? 8 : 0,
              d = 2);
              e[1] && (c = this.Lb ? 8 : 0,
              d = 2)
          }
          b.j < c && (le(b),
          ne(b, c, d))
      }
      b = this.oa;
      c = 0;
      for (d = b.length; c < d; ++c)
          b[c](this, a);
      b.length = 0
  }
  ;
  k.am = function() {
      this.render()
  }
  ;
  k.em = function() {
      var a;
      this.$d() && (a = this.wc());
      if (this.o) {
          for (var b = 0, c = this.o.length; b < c; ++b)
              Hc(this.o[b]);
          this.o = null
      }
      a ? (a.appendChild(this.a),
      a = this.ta ? this.ta : a,
      this.o = [z(a, "keydown", this.sd, this), z(a, "keypress", this.sd, this)],
      this.i || (this.i = this.Gc.bind(this),
      window.addEventListener("resize", this.i, !1))) : (fg(this.a),
      this.i && (window.removeEventListener("resize", this.i, !1),
      this.i = void 0));
      this.Gc()
  }
  ;
  k.fm = function() {
      this.render()
  }
  ;
  k.bi = function() {
      this.render()
  }
  ;
  k.gm = function() {
      this.B && (Hc(this.B),
      this.B = null);
      this.D && (Hc(this.D),
      this.D = null);
      var a = this.$();
      a && (this.a.setAttribute("data-view", w(a)),
      this.B = z(a, "propertychange", this.bi, this),
      this.D = z(a, "change", this.bi, this));
      this.render()
  }
  ;
  k.Ml = function() {
      this.C && (this.C.forEach(Hc),
      this.C = null);
      var a = this.dc();
      a && (this.C = [z(a, "propertychange", this.render, this), z(a, "change", this.render, this)]);
      this.render()
  }
  ;
  k.ah = function() {
      this.j && cancelAnimationFrame(this.j);
      this.U()
  }
  ;
  k.render = function() {
      void 0 === this.j && (this.j = requestAnimationFrame(this.U))
  }
  ;
  k.Vg = function(a) {
      return this.controls.remove(a)
  }
  ;
  k.Xg = function(a) {
      return this.interactions.remove(a)
  }
  ;
  k.Yg = function(a) {
      return this.dc().yd().remove(a)
  }
  ;
  k.Zg = function(a) {
      return this.l.remove(a)
  }
  ;
  k.Wp = function(a) {
      var b, c = this.zb(), d = this.$(), e = Pa(), f = this.c, g = null;
      if (void 0 !== c && 0 < c[0] && 0 < c[1] && d && Wf(d)) {
          g = Yf(d, this.c ? this.c.viewHints : void 0);
          var h = this.dc().eg()
            , l = {};
          var m = 0;
          for (b = h.length; m < b; ++m)
              l[w(h[m].layer)] = h[m];
          m = d.getState();
          g = {
              animate: !1,
              attributions: {},
              coordinateToPixelTransform: this.Va,
              extent: e,
              focus: this.I ? this.I : m.center,
              index: this.ab++,
              layerStates: l,
              layerStatesArray: h,
              logos: tb({}, this.gd),
              pixelRatio: this.Jd,
              pixelToCoordinateTransform: this.If,
              postRenderFunctions: [],
              size: c,
              skippedFeatureUids: this.T,
              tileQueue: this.ma,
              time: a,
              usedTiles: {},
              viewState: m,
              viewHints: g,
              wantedTiles: {}
          }
      }
      g && (g.extent = ob(m.center, m.resolution, m.rotation, g.size, e));
      this.c = g;
      this.lc.$g(g);
      g && (g.animate && this.render(),
      Array.prototype.push.apply(this.oa, g.postRenderFunctions),
      !f || this.g && (kb(this.g) || cb(g.extent, this.g)) || (this.b(new ed("movestart",this,f)),
      this.g = Za(this.g)),
      !this.g || g.viewHints[0] || g.viewHints[1] || cb(g.extent, this.g) || (this.b(new ed("moveend",this,g)),
      Sa(g.extent, this.g)));
      this.b(new ed("postrender",this,g));
      setTimeout(this.Zl.bind(this), 0)
  }
  ;
  k.zf = function(a) {
      this.set("layergroup", a)
  }
  ;
  k.ke = function(a) {
      this.set("size", a)
  }
  ;
  k.vd = function(a) {
      this.set("target", a)
  }
  ;
  k.hh = function(a) {
      this.set("view", a)
  }
  ;
  k.Mj = function(a) {
      a = w(a).toString();
      this.T[a] = !0;
      this.render()
  }
  ;
  k.Gc = function() {
      var a = this.wc();
      if (a) {
          var b = getComputedStyle(a);
          this.ke([a.offsetWidth - parseFloat(b.borderLeftWidth) - parseFloat(b.paddingLeft) - parseFloat(b.paddingRight) - parseFloat(b.borderRightWidth), a.offsetHeight - parseFloat(b.borderTopWidth) - parseFloat(b.paddingTop) - parseFloat(b.paddingBottom) - parseFloat(b.borderBottomWidth)])
      } else
          this.ke(void 0)
  }
  ;
  k.Rj = function(a) {
      a = w(a).toString();
      delete this.T[a];
      this.render()
  }
  ;
  var pg = ["canvas", "webgl"];
  function og(a) {
      var b = null;
      void 0 !== a.keyboardEventTarget && (b = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);
      var c = {}
        , d = {};
      if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo)
          d["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "https://openlayers.org/";
      else {
          var e = a.logo;
          "string" === typeof e ? d[e] = "" : e instanceof HTMLElement ? d[w(e).toString()] = e : e && (wa("string" == typeof e.href, 44),
          wa("string" == typeof e.src, 45),
          d[e.src] = e.href)
      }
      e = a.layers instanceof ig ? a.layers : new ig({
          layers: a.layers
      });
      c.layergroup = e;
      c.target = a.target;
      c.view = void 0 !== a.view ? a.view : new F;
      var f;
      void 0 !== a.renderer ? (Array.isArray(a.renderer) ? f = a.renderer : "string" === typeof a.renderer ? f = [a.renderer] : wa(!1, 46),
      0 <= f.indexOf("dom") && (f = f.concat(pg))) : f = pg;
      e = 0;
      var g = f.length;
      a: for (; e < g; ++e)
          for (var h = f[e], l = 0, m = kg.length; l < m; ++l) {
              var n = kg[l];
              if (n.handles(h)) {
                  var p = n;
                  break a
              }
          }
      if (!p)
          throw Error("Unable to create a map renderer for types: " + f.join(", "));
      if (void 0 !== a.controls)
          if (Array.isArray(a.controls))
              var q = new C(a.controls.slice());
          else
              wa(a.controls instanceof C, 47),
              q = a.controls;
      if (void 0 !== a.interactions)
          if (Array.isArray(a.interactions))
              var r = new C(a.interactions.slice());
          else
              wa(a.interactions instanceof C, 48),
              r = a.interactions;
      void 0 !== a.overlays ? Array.isArray(a.overlays) ? a = new C(a.overlays.slice()) : (wa(a.overlays instanceof C, 49),
      a = a.overlays) : a = new C;
      return {
          controls: q,
          interactions: r,
          keyboardEventTarget: b,
          logos: d,
          overlays: a,
          om: p,
          values: c
      }
  }
  ;function qg(a) {
      Wc.call(this);
      this.element = a.element ? a.element : null;
      this.a = this.T = null;
      this.v = [];
      this.render = a.render ? a.render : sa;
      a.target && this.i(a.target)
  }
  v(qg, Wc);
  qg.prototype.ka = function() {
      fg(this.element);
      Wc.prototype.ka.call(this)
  }
  ;
  qg.prototype.g = function() {
      return this.a
  }
  ;
  qg.prototype.setMap = function(a) {
      this.a && fg(this.element);
      for (var b = 0, c = this.v.length; b < c; ++b)
          Hc(this.v[b]);
      this.v.length = 0;
      if (this.a = a)
          (this.T ? this.T : a.v).appendChild(this.element),
          this.render !== sa && this.v.push(z(a, "postrender", this.render, this)),
          a.render()
  }
  ;
  qg.prototype.i = function(a) {
      this.T = "string" === typeof a ? document.getElementById(a) : a
  }
  ;
  function rg(a) {
      a = a ? a : {};
      this.I = document.createElement("UL");
      this.s = document.createElement("LI");
      this.I.appendChild(this.s);
      this.s.style.display = "none";
      this.c = void 0 !== a.collapsed ? a.collapsed : !0;
      this.l = void 0 !== a.collapsible ? a.collapsible : !0;
      this.l || (this.c = !1);
      var b = void 0 !== a.className ? a.className : "ol-attribution"
        , c = void 0 !== a.tipLabel ? a.tipLabel : "Attributions"
        , d = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00bb";
      "string" === typeof d ? (this.C = document.createElement("span"),
      this.C.textContent = d) : this.C = d;
      d = void 0 !== a.label ? a.label : "i";
      "string" === typeof d ? (this.D = document.createElement("span"),
      this.D.textContent = d) : this.D = d;
      var e = this.l && !this.c ? this.C : this.D;
      d = document.createElement("button");
      d.setAttribute("type", "button");
      d.title = c;
      d.appendChild(e);
      z(d, "click", this.en, this);
      c = document.createElement("div");
      c.className = b + " ol-unselectable ol-control" + (this.c && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
      c.appendChild(this.I);
      c.appendChild(d);
      qg.call(this, {
          element: c,
          render: a.render ? a.render : sg,
          target: a.target
      });
      this.B = !0;
      this.o = {};
      this.j = {};
      this.U = {}
  }
  v(rg, qg);
  function sg(a) {
      if (a = a.frameState) {
          var b, c, d, e, f, g = a.layerStatesArray, h = tb({}, a.attributions), l = {}, m = {}, n = a.viewState.projection;
          var p = 0;
          for (b = g.length; p < b; p++)
              if (e = g[p].layer.ia()) {
                  var q = w(e).toString();
                  if (f = e.j) {
                      var r = 0;
                      for (c = f.length; r < c; r++) {
                          var u = f[r];
                          var x = w(u).toString();
                          if (!(x in h)) {
                              if (d = a.usedTiles[q]) {
                                  var B = e.Xa(n);
                                  a: {
                                      var A = void 0;
                                      var y, N = u, ca = B, la = n;
                                      if (N.a) {
                                          for (A in d)
                                              if (A in N.a) {
                                                  B = d[A];
                                                  var fa = 0;
                                                  for (y = N.a[A].length; fa < y; ++fa) {
                                                      var va = N.a[A][fa];
                                                      if (Ba(va, B)) {
                                                          A = !0;
                                                          break a
                                                      }
                                                      var ra = tc(ca, Dc(la), parseInt(A, 10))
                                                        , T = ra.da - ra.ba + 1;
                                                      if (B.ba < ra.ba || B.da > ra.da)
                                                          if (Ba(va, new xa(Ja(B.ba, T),Ja(B.da, T),B.ea,B.ga)) || B.da - B.ba + 1 > T && Ba(va, ra)) {
                                                              A = !0;
                                                              break a
                                                          }
                                                  }
                                              }
                                          A = !1
                                      } else
                                          A = !0
                                  }
                              } else
                                  A = !1;
                              A ? (x in l && delete l[x],
                              A = u.b,
                              A in m || (m[A] = !0,
                              h[x] = u)) : l[x] = u
                          }
                      }
                  }
              }
          b = [h, l];
          p = b[0];
          b = b[1];
          for (var U in this.o)
              U in p ? (this.j[U] || (this.o[U].style.display = "",
              this.j[U] = !0),
              delete p[U]) : U in b ? (this.j[U] && (this.o[U].style.display = "none",
              delete this.j[U]),
              delete b[U]) : (fg(this.o[U]),
              delete this.o[U],
              delete this.j[U]);
          for (U in p)
              r = document.createElement("LI"),
              r.innerHTML = p[U].b,
              this.I.appendChild(r),
              this.o[U] = r,
              this.j[U] = !0;
          for (U in b)
              r = document.createElement("LI"),
              r.innerHTML = b[U].b,
              r.style.display = "none",
              this.I.appendChild(r),
              this.o[U] = r;
          U = !wb(this.j) || !wb(a.logos);
          this.B != U && (this.element.style.display = U ? "" : "none",
          this.B = U);
          U && wb(this.j) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");
          a = a.logos;
          U = this.U;
          for (Ca in U)
              Ca in a || (fg(U[Ca]),
              delete U[Ca]);
          for (var Xb in a)
              if (b = a[Xb],
              b instanceof HTMLElement && (this.s.appendChild(b),
              U[Xb] = b),
              !(Xb in U)) {
                  var Ca = new Image;
                  Ca.src = Xb;
                  "" === b ? p = Ca : (p = document.createElement("a"),
                  p.href = b,
                  p.appendChild(Ca));
                  this.s.appendChild(p);
                  U[Xb] = p
              }
          this.s.style.display = wb(a) ? "none" : ""
      } else
          this.B && (this.element.style.display = "none",
          this.B = !1)
  }
  k = rg.prototype;
  k.en = function(a) {
      a.preventDefault();
      tg(this)
  }
  ;
  function tg(a) {
      a.element.classList.toggle("ol-collapsed");
      a.c ? eg(a.C, a.D) : eg(a.D, a.C);
      a.c = !a.c
  }
  k.dn = function() {
      return this.l
  }
  ;
  k.gn = function(a) {
      this.l !== a && (this.l = a,
      this.element.classList.toggle("ol-uncollapsible"),
      !a && this.c && tg(this))
  }
  ;
  k.fn = function(a) {
      this.l && this.c !== a && tg(this)
  }
  ;
  k.cn = function() {
      return this.c
  }
  ;
  function ug(a) {
      a = a ? a : {};
      var b = void 0 !== a.className ? a.className : "ol-rotate"
        , c = void 0 !== a.label ? a.label : "\u21e7";
      this.c = null;
      "string" === typeof c ? (this.c = document.createElement("span"),
      this.c.className = "ol-compass",
      this.c.textContent = c) : (this.c = c,
      this.c.classList.add("ol-compass"));
      var d = a.tipLabel ? a.tipLabel : "Reset rotation";
      c = document.createElement("button");
      c.className = b + "-reset";
      c.setAttribute("type", "button");
      c.title = d;
      c.appendChild(this.c);
      z(c, "click", ug.prototype.C, this);
      d = document.createElement("div");
      d.className = b + " ol-unselectable ol-control";
      d.appendChild(c);
      b = a.render ? a.render : vg;
      this.l = a.resetNorth ? a.resetNorth : void 0;
      qg.call(this, {
          element: d,
          render: b,
          target: a.target
      });
      this.o = void 0 !== a.duration ? a.duration : 250;
      this.j = void 0 !== a.autoHide ? a.autoHide : !0;
      this.s = void 0;
      this.j && this.element.classList.add("ol-hidden")
  }
  v(ug, qg);
  ug.prototype.C = function(a) {
      a.preventDefault();
      this.l ? this.l() : (a = this.a.$()) && void 0 !== a.Pa() && (0 < this.o ? a.animate({
          rotation: 0,
          duration: this.o,
          easing: Me
      }) : a.de(0))
  }
  ;
  function vg(a) {
      if (a = a.frameState) {
          a = a.viewState.rotation;
          if (a != this.s) {
              var b = "rotate(" + a + "rad)";
              if (this.j) {
                  var c = this.element.classList.contains("ol-hidden");
                  c || 0 !== a ? c && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden")
              }
              this.c.style.msTransform = b;
              this.c.style.webkitTransform = b;
              this.c.style.transform = b
          }
          this.s = a
      }
  }
  ;function wg(a) {
      a = a ? a : {};
      var b = void 0 !== a.className ? a.className : "ol-zoom"
        , c = void 0 !== a.delta ? a.delta : 1
        , d = void 0 !== a.zoomInLabel ? a.zoomInLabel : "+"
        , e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212"
        , f = void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in"
        , g = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out"
        , h = document.createElement("button");
      h.className = b + "-in";
      h.setAttribute("type", "button");
      h.title = f;
      h.appendChild("string" === typeof d ? document.createTextNode(d) : d);
      z(h, "click", wg.prototype.j.bind(this, c));
      d = document.createElement("button");
      d.className = b + "-out";
      d.setAttribute("type", "button");
      d.title = g;
      d.appendChild("string" === typeof e ? document.createTextNode(e) : e);
      z(d, "click", wg.prototype.j.bind(this, -c));
      c = document.createElement("div");
      c.className = b + " ol-unselectable ol-control";
      c.appendChild(h);
      c.appendChild(d);
      qg.call(this, {
          element: c,
          target: a.target
      });
      this.c = void 0 !== a.duration ? a.duration : 250
  }
  v(wg, qg);
  wg.prototype.j = function(a, b) {
      b.preventDefault();
      if (b = this.a.$()) {
          var c = b.Oa();
          c && (a = b.constrainResolution(c, a),
          0 < this.c ? (b.Pc() && b.kd(),
          b.animate({
              resolution: a,
              duration: this.c,
              easing: Me
          })) : b.ad(a))
      }
  }
  ;
  function xg(a) {
      a = a ? a : {};
      var b = new C;
      (void 0 !== a.zoom ? a.zoom : 1) && b.push(new wg(a.zoomOptions));
      (void 0 !== a.rotate ? a.rotate : 1) && b.push(new ug(a.rotateOptions));
      (void 0 !== a.attribution ? a.attribution : 1) && b.push(new rg(a.attributionOptions));
      return b
  }
  ;function yg(a, b, c) {
      this.i = a;
      this.c = b;
      this.g = c;
      this.b = [];
      this.a = this.f = 0
  }
  function zg(a) {
      a.b.length = 0;
      a.f = 0;
      a.a = 0
  }
  function Ag(a) {
      if (6 > a.b.length)
          return !1;
      var b = Date.now() - a.g
        , c = a.b.length - 3;
      if (a.b[c + 2] < b)
          return !1;
      for (var d = c - 3; 0 < d && a.b[d + 2] > b; )
          d -= 3;
      b = a.b[c + 2] - a.b[d + 2];
      if (b < 1E3 / 60)
          return !1;
      var e = a.b[c] - a.b[d];
      c = a.b[c + 1] - a.b[d + 1];
      a.f = Math.atan2(c, e);
      a.a = Math.sqrt(e * e + c * c) / b;
      return a.a > a.c
  }
  ;function Bg(a) {
      Wc.call(this);
      this.v = null;
      this.Ga(!0);
      this.handleEvent = a.handleEvent
  }
  v(Bg, Wc);
  Bg.prototype.c = function() {
      return this.get("active")
  }
  ;
  Bg.prototype.i = function() {
      return this.v
  }
  ;
  Bg.prototype.Ga = function(a) {
      this.set("active", a)
  }
  ;
  Bg.prototype.setMap = function(a) {
      this.v = a
  }
  ;
  function Eg(a, b, c, d) {
      if (void 0 !== b) {
          var e = a.Pa()
            , f = a.xa();
          void 0 !== e && f && 0 < d ? a.animate({
              rotation: b,
              anchor: c,
              duration: d,
              easing: Me
          }) : a.rotate(b, c)
      }
  }
  function Fg(a, b, c, d) {
      var e = a.Oa();
      b = a.constrainResolution(e, b, 0);
      if (c && void 0 !== b && b !== e) {
          var f = a.xa();
          c = Zf(a, b, c);
          c = a.Kc(c);
          c = [(b * f[0] - e * c[0]) / (b - e), (b * f[1] - e * c[1]) / (b - e)]
      }
      Gg(a, b, c, d)
  }
  function Gg(a, b, c, d) {
      if (b) {
          var e = a.Oa()
            , f = a.xa();
          void 0 !== e && f && b !== e && d ? a.animate({
              resolution: b,
              anchor: c,
              duration: d,
              easing: Me
          }) : (c && (c = Zf(a, b, c),
          a.rb(c)),
          a.ad(b))
      }
  }
  ;function Hg(a) {
      a = a ? a : {};
      this.a = a.delta ? a.delta : 1;
      Bg.call(this, {
          handleEvent: Ig
      });
      this.g = void 0 !== a.duration ? a.duration : 250
  }
  v(Hg, Bg);
  function Ig(a) {
      var b = !1
        , c = a.originalEvent;
      if ("dblclick" == a.type) {
          b = a.coordinate;
          c = c.shiftKey ? -this.a : this.a;
          var d = a.map.$();
          Fg(d, c, b, this.g);
          a.preventDefault();
          b = !0
      }
      return !b
  }
  ;function Jg(a) {
      a = a.originalEvent;
      return a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
  }
  function Kg(a) {
      a = a.originalEvent;
      return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
  }
  function Lg(a) {
      a = a.originalEvent;
      return 0 == a.button && !(nd && od && a.ctrlKey)
  }
  function Mg(a) {
      return "pointermove" == a.type
  }
  function Ng(a) {
      return "singleclick" == a.type
  }
  function Og(a) {
      a = a.originalEvent;
      return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey
  }
  function Pg(a) {
      a = a.originalEvent;
      return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey
  }
  function Qg(a) {
      a = a.originalEvent.target.tagName;
      return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a
  }
  function Rg(a) {
      wa(a.b, 56);
      return "mouse" == a.b.pointerType
  }
  function Sg(a) {
      a = a.b;
      return a.isPrimary && 0 === a.button
  }
  ;function Tg(a) {
      a = a ? a : {};
      Bg.call(this, {
          handleEvent: a.handleEvent ? a.handleEvent : Ug
      });
      this.Vj = a.handleDownEvent ? a.handleDownEvent : Qe;
      this.wk = a.handleDragEvent ? a.handleDragEvent : sa;
      this.Ck = a.handleMoveEvent ? a.handleMoveEvent : sa;
      this.Dk = a.handleUpEvent ? a.handleUpEvent : Qe;
      this.C = !1;
      this.ta = {};
      this.l = []
  }
  v(Tg, Bg);
  function Vg(a) {
      for (var b = a.length, c = 0, d = 0, e = 0; e < b; e++)
          c += a[e].clientX,
          d += a[e].clientY;
      return [c / b, d / b]
  }
  function Ug(a) {
      if (!(a instanceof Dd))
          return !0;
      var b = !1
        , c = a.type;
      if ("pointerdown" === c || "pointerdrag" === c || "pointerup" === c) {
          c = a.b;
          var d = c.pointerId.toString();
          "pointerup" == a.type ? delete this.ta[d] : "pointerdown" == a.type ? this.ta[d] = c : d in this.ta && (this.ta[d] = c);
          this.l = vb(this.ta)
      }
      this.C ? "pointerdrag" == a.type ? this.wk(a) : "pointerup" == a.type && (this.C = this.Dk(a) && 0 < this.l.length) : "pointerdown" == a.type ? (this.C = a = this.Vj(a),
      b = this.cd(a)) : "pointermove" == a.type && this.Ck(a);
      return !b
  }
  Tg.prototype.cd = function(a) {
      return a
  }
  ;
  function Wg(a) {
      Tg.call(this, {
          handleDownEvent: Xg,
          handleDragEvent: Yg,
          handleUpEvent: Zg
      });
      a = a ? a : {};
      this.a = a.kinetic;
      this.g = null;
      this.s = a.condition ? a.condition : Og;
      this.j = !1
  }
  v(Wg, Tg);
  function Yg(a) {
      var b = this.l
        , c = Vg(b);
      if (b.length == this.o) {
          if (this.a && this.a.b.push(c[0], c[1], Date.now()),
          this.g) {
              var d = this.g[0] - c[0]
                , e = c[1] - this.g[1];
              a = a.map.$();
              var f = a.getState();
              d = [d, e];
              Fe(d, f.resolution);
              Ee(d, f.rotation);
              ye(d, f.center);
              d = a.Kc(d);
              a.rb(d)
          }
      } else
          this.a && zg(this.a);
      this.g = c;
      this.o = b.length
  }
  function Zg(a) {
      var b = a.map;
      a = b.$();
      if (0 === this.l.length) {
          if (!this.j && this.a && Ag(this.a)) {
              var c = this.a;
              c = (c.c - c.a) / c.i;
              var d = this.a.f
                , e = a.xa();
              e = b.Ha(e);
              b = b.Na([e[0] - c * Math.cos(d), e[1] - c * Math.sin(d)]);
              a.animate({
                  center: a.Kc(b),
                  duration: 500,
                  easing: Me
              })
          }
          Xf(a, 1, -1);
          return !1
      }
      this.a && zg(this.a);
      this.g = null;
      return !0
  }
  function Xg(a) {
      if (0 < this.l.length && this.s(a)) {
          var b = a.map.$();
          this.g = null;
          this.C || Xf(b, 1, 1);
          Yf(b)[0] && b.rb(a.frameState.viewState.center);
          this.a && zg(this.a);
          this.j = 1 < this.l.length;
          return !0
      }
      return !1
  }
  Wg.prototype.cd = Qe;
  function $g(a) {
      a = a ? a : {};
      Tg.call(this, {
          handleDownEvent: ah,
          handleDragEvent: bh,
          handleUpEvent: ch
      });
      this.g = a.condition ? a.condition : Kg;
      this.a = void 0;
      this.j = void 0 !== a.duration ? a.duration : 250
  }
  v($g, Tg);
  function bh(a) {
      if (Rg(a)) {
          var b = a.map
            , c = b.$();
          if (c.g.rotation !== se) {
              b = b.zb();
              a = a.pixel;
              a = Math.atan2(b[1] / 2 - a[1], a[0] - b[0] / 2);
              if (void 0 !== this.a) {
                  b = a - this.a;
                  var d = c.Pa();
                  Eg(c, d - b)
              }
              this.a = a
          }
      }
  }
  function ch(a) {
      if (!Rg(a))
          return !0;
      a = a.map.$();
      Xf(a, 1, -1);
      var b = a.Pa()
        , c = this.j;
      b = a.constrainRotation(b, 0);
      Eg(a, b, void 0, c);
      return !1
  }
  function ah(a) {
      return Rg(a) && Lg(a) && this.g(a) ? (Xf(a.map.$(), 1, 1),
      this.a = void 0,
      !0) : !1
  }
  $g.prototype.cd = Qe;
  function dh(a) {
      this.Nc = null;
      this.a = document.createElement("div");
      this.a.style.position = "absolute";
      this.a.className = "ol-box " + a;
      this.f = this.c = this.b = null
  }
  v(dh, Pc);
  dh.prototype.ka = function() {
      this.setMap(null)
  }
  ;
  function eh(a) {
      var b = a.c
        , c = a.f;
      a = a.a.style;
      a.left = Math.min(b[0], c[0]) + "px";
      a.top = Math.min(b[1], c[1]) + "px";
      a.width = Math.abs(c[0] - b[0]) + "px";
      a.height = Math.abs(c[1] - b[1]) + "px"
  }
  dh.prototype.setMap = function(a) {
      if (this.b) {
          this.b.s.removeChild(this.a);
          var b = this.a.style;
          b.left = b.top = b.width = b.height = "inherit"
      }
      (this.b = a) && this.b.s.appendChild(this.a)
  }
  ;
  function fh(a) {
      var b = a.c
        , c = a.f;
      b = [b, [b[0], c[1]], c, [c[0], b[1]]].map(a.b.Na, a.b);
      b[4] = b[0].slice();
      a.Nc ? a.Nc.na([b]) : a.Nc = new E([b])
  }
  dh.prototype.W = function() {
      return this.Nc
  }
  ;
  function gh(a) {
      Tg.call(this, {
          handleDownEvent: hh,
          handleDragEvent: ih,
          handleUpEvent: jh
      });
      a = a ? a : {};
      this.a = new dh(a.className || "ol-dragbox");
      this.s = void 0 !== a.minArea ? a.minArea : 64;
      this.g = null;
      this.D = a.condition ? a.condition : Pe;
      this.o = a.boxEndCondition ? a.boxEndCondition : kh
  }
  v(gh, Tg);
  function kh(a, b, c) {
      a = c[0] - b[0];
      b = c[1] - b[1];
      return a * a + b * b >= this.s
  }
  function ih(a) {
      if (Rg(a)) {
          var b = this.a
            , c = a.pixel;
          b.c = this.g;
          b.f = c;
          fh(b);
          eh(b);
          this.b(new lh(mh,a.coordinate,a))
      }
  }
  gh.prototype.W = function() {
      return this.a.W()
  }
  ;
  gh.prototype.j = sa;
  function jh(a) {
      if (!Rg(a))
          return !0;
      this.a.setMap(null);
      this.o(a, this.g, a.pixel) && (this.j(a),
      this.b(new lh(nh,a.coordinate,a)));
      return !1
  }
  function hh(a) {
      if (Rg(a) && Lg(a) && this.D(a)) {
          this.g = a.pixel;
          this.a.setMap(a.map);
          var b = this.a
            , c = this.g;
          b.c = this.g;
          b.f = c;
          fh(b);
          eh(b);
          this.b(new lh(oh,a.coordinate,a));
          return !0
      }
      return !1
  }
  var oh = "boxstart"
    , mh = "boxdrag"
    , nh = "boxend";
  function lh(a, b, c) {
      Rc.call(this, a);
      this.coordinate = b;
      this.mapBrowserEvent = c
  }
  v(lh, Rc);
  function ph(a) {
      a = a ? a : {};
      var b = a.condition ? a.condition : Pg;
      this.B = void 0 !== a.duration ? a.duration : 200;
      this.I = void 0 !== a.out ? a.out : !1;
      gh.call(this, {
          condition: b,
          className: a.className || "ol-dragzoom"
      })
  }
  v(ph, gh);
  ph.prototype.j = function() {
      var a = this.v
        , b = a.$()
        , c = a.zb()
        , d = this.W().G();
      if (this.I) {
          var e = b.jd(c);
          d = [a.Ha(fb(d)), a.Ha(hb(d))];
          a = Za(void 0);
          var f;
          var g = 0;
          for (f = d.length; g < f; ++g)
              Qa(a, d[g]);
          d = b.Ke(a, c);
          rb(e, 1 / d);
          d = e
      }
      c = b.constrainResolution(b.Ke(d, c));
      e = nb(d);
      e = b.Kc(e);
      b.animate({
          resolution: c,
          center: e,
          duration: this.B,
          easing: Me
      })
  }
  ;
  function qh(a) {
      Bg.call(this, {
          handleEvent: rh
      });
      a = a || {};
      this.a = function(a) {
          return Og(a) && Qg(a)
      }
      ;
      this.g = a.condition ? a.condition : this.a;
      this.j = void 0 !== a.duration ? a.duration : 100;
      this.l = void 0 !== a.pixelDelta ? a.pixelDelta : 128
  }
  v(qh, Bg);
  function rh(a) {
      var b = !1;
      if ("keydown" == a.type) {
          var c = a.originalEvent.keyCode;
          if (this.g(a) && (40 == c || 37 == c || 39 == c || 38 == c)) {
              b = a.map.$();
              var d = b.Oa() * this.l
                , e = 0
                , f = 0;
              40 == c ? f = -d : 37 == c ? e = -d : 39 == c ? e = d : f = d;
              d = [e, f];
              Ee(d, b.Pa());
              c = this.j;
              if (e = b.xa())
                  d = b.Kc([e[0] + d[0], e[1] + d[1]]),
                  c ? b.animate({
                      duration: c,
                      easing: Oe,
                      center: d
                  }) : b.rb(d);
              a.preventDefault();
              b = !0
          }
      }
      return !b
  }
  ;function th(a) {
      Bg.call(this, {
          handleEvent: uh
      });
      a = a ? a : {};
      this.g = a.condition ? a.condition : Qg;
      this.a = a.delta ? a.delta : 1;
      this.j = void 0 !== a.duration ? a.duration : 100
  }
  v(th, Bg);
  function uh(a) {
      var b = !1;
      if ("keydown" == a.type || "keypress" == a.type) {
          var c = a.originalEvent.charCode;
          !this.g(a) || 43 != c && 45 != c || (b = 43 == c ? this.a : -this.a,
          c = a.map.$(),
          Fg(c, b, void 0, this.j),
          a.preventDefault(),
          b = !0)
      }
      return !b
  }
  ;function vh(a) {
      Bg.call(this, {
          handleEvent: wh
      });
      a = a || {};
      this.j = 0;
      this.C = void 0 !== a.duration ? a.duration : 250;
      this.ta = void 0 !== a.timeout ? a.timeout : 80;
      this.D = void 0 !== a.useAnchor ? a.useAnchor : !0;
      this.T = a.constrainResolution || !1;
      this.a = null;
      this.o = this.l = this.s = this.g = void 0
  }
  v(vh, Bg);
  function wh(a) {
      var b = a.type;
      if ("wheel" !== b && "mousewheel" !== b)
          return !0;
      a.preventDefault();
      b = a.map;
      var c = a.originalEvent;
      this.D && (this.a = a.coordinate);
      if ("wheel" == a.type) {
          var d = c.deltaY;
          kd && c.deltaMode === WheelEvent.DOM_DELTA_PIXEL && (d /= pd);
          c.deltaMode === WheelEvent.DOM_DELTA_LINE && (d *= 40)
      } else
          "mousewheel" == a.type && (d = -c.wheelDeltaY,
          ld && (d /= 3));
      if (0 === d)
          return !1;
      a = Date.now();
      void 0 === this.g && (this.g = a);
      if (!this.l || 400 < a - this.g)
          this.l = 4 > Math.abs(d) ? xh : yh;
      if (this.l === xh) {
          b = b.$();
          this.o ? clearTimeout(this.o) : Xf(b, 1, 1);
          this.o = setTimeout(this.B.bind(this), 400);
          c = b.Oa() * Math.pow(2, d / 300);
          var e = b.i
            , f = b.a
            , g = 0;
          c < e ? (c = Math.max(c, e / 1.5),
          g = 1) : c > f && (c = Math.min(c, 1.5 * f),
          g = -1);
          if (this.a) {
              var h = Zf(b, c, this.a);
              b.rb(b.Kc(h))
          }
          b.ad(c);
          0 === g && this.T && b.animate({
              resolution: b.constrainResolution(c, 0 < d ? -1 : 1),
              easing: Me,
              anchor: this.a,
              duration: this.C
          });
          0 < g ? b.animate({
              resolution: e,
              easing: Me,
              anchor: this.a,
              duration: 500
          }) : 0 > g && b.animate({
              resolution: f,
              easing: Me,
              anchor: this.a,
              duration: 500
          });
          this.g = a;
          return !1
      }
      this.j += d;
      d = Math.max(this.ta - (a - this.g), 0);
      clearTimeout(this.s);
      this.s = setTimeout(this.I.bind(this, b), d);
      return !1
  }
  vh.prototype.B = function() {
      this.o = void 0;
      Xf(this.v.$(), 1, -1)
  }
  ;
  vh.prototype.I = function(a) {
      a = a.$();
      a.Pc() && a.kd();
      Fg(a, -Da(this.j, -1, 1), this.a, this.C);
      this.l = void 0;
      this.j = 0;
      this.a = null;
      this.s = this.g = void 0
  }
  ;
  vh.prototype.U = function(a) {
      this.D = a;
      a || (this.a = null)
  }
  ;
  var xh = "trackpad"
    , yh = "wheel";
  function zh(a) {
      Tg.call(this, {
          handleDownEvent: Ah,
          handleDragEvent: Bh,
          handleUpEvent: Ch
      });
      a = a || {};
      this.g = null;
      this.j = void 0;
      this.a = !1;
      this.o = 0;
      this.D = void 0 !== a.threshold ? a.threshold : .3;
      this.s = void 0 !== a.duration ? a.duration : 250
  }
  v(zh, Tg);
  function Bh(a) {
      var b = 0
        , c = this.l[0]
        , d = this.l[1];
      c = Math.atan2(d.clientY - c.clientY, d.clientX - c.clientX);
      void 0 !== this.j && (b = c - this.j,
      this.o += b,
      !this.a && Math.abs(this.o) > this.D && (this.a = !0));
      this.j = c;
      a = a.map;
      c = a.$();
      if (c.g.rotation !== se) {
          d = a.a.getBoundingClientRect();
          var e = Vg(this.l);
          e[0] -= d.left;
          e[1] -= d.top;
          this.g = a.Na(e);
          this.a && (d = c.Pa(),
          a.render(),
          Eg(c, d + b, this.g))
      }
  }
  function Ch(a) {
      if (2 > this.l.length) {
          a = a.map.$();
          Xf(a, 1, -1);
          if (this.a) {
              var b = a.Pa()
                , c = this.g
                , d = this.s;
              b = a.constrainRotation(b, 0);
              Eg(a, b, c, d)
          }
          return !1
      }
      return !0
  }
  function Ah(a) {
      return 2 <= this.l.length ? (a = a.map,
      this.g = null,
      this.j = void 0,
      this.a = !1,
      this.o = 0,
      this.C || Xf(a.$(), 1, 1),
      !0) : !1
  }
  zh.prototype.cd = Qe;
  function Dh(a) {
      Tg.call(this, {
          handleDownEvent: Eh,
          handleDragEvent: Fh,
          handleUpEvent: Gh
      });
      a = a ? a : {};
      this.o = a.constrainResolution || !1;
      this.g = null;
      this.s = void 0 !== a.duration ? a.duration : 400;
      this.a = void 0;
      this.j = 1
  }
  v(Dh, Tg);
  function Fh(a) {
      var b = 1
        , c = this.l[0]
        , d = this.l[1]
        , e = c.clientX - d.clientX;
      c = c.clientY - d.clientY;
      e = Math.sqrt(e * e + c * c);
      void 0 !== this.a && (b = this.a / e);
      this.a = e;
      a = a.map;
      e = a.$();
      d = e.Oa();
      var f = e.a
        , g = e.i;
      c = d * b;
      c > f ? (b = f / d,
      c = f) : c < g && (b = g / d,
      c = g);
      1 != b && (this.j = b);
      b = a.a.getBoundingClientRect();
      d = Vg(this.l);
      d[0] -= b.left;
      d[1] -= b.top;
      this.g = a.Na(d);
      a.render();
      Gg(e, c, this.g)
  }
  function Gh(a) {
      if (2 > this.l.length) {
          a = a.map.$();
          Xf(a, 1, -1);
          var b = a.Oa();
          if (this.o || b < a.i || b > a.a) {
              var c = this.g
                , d = this.s;
              b = a.constrainResolution(b, 0, this.j - 1);
              Gg(a, b, c, d)
          }
          return !1
      }
      return !0
  }
  function Eh(a) {
      return 2 <= this.l.length ? (a = a.map,
      this.g = null,
      this.a = void 0,
      this.j = 1,
      this.C || Xf(a.$(), 1, 1),
      !0) : !1
  }
  Dh.prototype.cd = Qe;
  function Hh(a) {
      a = a ? a : {};
      var b = new C
        , c = new yg(-.005,.05,100);
      (void 0 !== a.altShiftDragRotate ? a.altShiftDragRotate : 1) && b.push(new $g);
      (void 0 !== a.doubleClickZoom ? a.doubleClickZoom : 1) && b.push(new Hg({
          delta: a.zoomDelta,
          duration: a.zoomDuration
      }));
      (void 0 !== a.dragPan ? a.dragPan : 1) && b.push(new Wg({
          kinetic: c
      }));
      (void 0 !== a.pinchRotate ? a.pinchRotate : 1) && b.push(new zh);
      (void 0 !== a.pinchZoom ? a.pinchZoom : 1) && b.push(new Dh({
          constrainResolution: a.constrainResolution,
          duration: a.zoomDuration
      }));
      if (void 0 !== a.keyboard ? a.keyboard : 1)
          b.push(new qh),
          b.push(new th({
              delta: a.zoomDelta,
              duration: a.zoomDuration
          }));
      (void 0 !== a.mouseWheelZoom ? a.mouseWheelZoom : 1) && b.push(new vh({
          constrainResolution: a.constrainResolution,
          duration: a.zoomDuration
      }));
      (void 0 !== a.shiftDragZoom ? a.shiftDragZoom : 1) && b.push(new ph({
          duration: a.zoomDuration
      }));
      return b
  }
  ;function Ih(a, b, c, d, e) {
      Rc.call(this, a);
      this.vectorContext = b;
      this.frameState = c;
      this.context = d;
      this.glContext = e
  }
  v(Ih, Rc);
  var Jh = [0, 0, 0, 1]
    , Kh = []
    , Lh = [0, 0, 0, 1];
  function Mh(a, b, c, d) {
      0 !== b && (a.translate(c, d),
      a.rotate(b),
      a.translate(-c, -d))
  }
  ;var Nh = /^#(?:[0-9a-f]{3}){1,2}$/i
    , Oh = /^([a-z]*)$/i;
  function Ph(a) {
      return Array.isArray(a) ? a : Qh(a)
  }
  function Rh(a) {
      if ("string" !== typeof a) {
          var b = a[0];
          b != (b | 0) && (b = b + .5 | 0);
          var c = a[1];
          c != (c | 0) && (c = c + .5 | 0);
          var d = a[2];
          d != (d | 0) && (d = d + .5 | 0);
          a = "rgba(" + b + "," + c + "," + d + "," + (void 0 === a[3] ? 1 : a[3]) + ")"
      }
      return a
  }
  var Qh = function() {
      var a = {}
        , b = 0;
      return function(c) {
          if (a.hasOwnProperty(c))
              var d = a[c];
          else {
              if (1024 <= b) {
                  d = 0;
                  for (var e in a)
                      0 === (d++ & 3) && (delete a[e],
                      --b)
              }
              d = c;
              Oh.exec(d) && (e = document.createElement("div"),
              e.style.color = d,
              document.body.appendChild(e),
              d = getComputedStyle(e).color,
              document.body.removeChild(e));
              if (Nh.exec(d)) {
                  var f = d.length - 1;
                  wa(3 == f || 6 == f, 54);
                  var g = 3 == f ? 1 : 2;
                  f = parseInt(d.substr(1 + 0 * g, g), 16);
                  e = parseInt(d.substr(1 + 1 * g, g), 16);
                  d = parseInt(d.substr(1 + 2 * g, g), 16);
                  1 == g && (f = (f << 4) + f,
                  e = (e << 4) + e,
                  d = (d << 4) + d);
                  f = [f, e, d, 1]
              } else
                  0 == d.indexOf("rgba(") ? (d = d.slice(5, -1).split(",").map(Number),
                  f = Sh(d)) : 0 == d.indexOf("rgb(") ? (d = d.slice(4, -1).split(",").map(Number),
                  d.push(1),
                  f = Sh(d)) : wa(!1, 14);
              d = f;
              a[c] = d;
              ++b
          }
          return d
      }
  }();
  function Sh(a) {
      var b = [];
      b[0] = Da(a[0] + .5 | 0, 0, 255);
      b[1] = Da(a[1] + .5 | 0, 0, 255);
      b[2] = Da(a[2] + .5 | 0, 0, 255);
      b[3] = Da(a[3], 0, 1);
      return b
  }
  ;function Th(a) {
      return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : Rh(a)
  }
  ;function Uh() {}
  k = Uh.prototype;
  k.Eh = function() {}
  ;
  k.Fb = function() {}
  ;
  k.zd = function() {}
  ;
  k.$b = function() {}
  ;
  k.Fe = function() {}
  ;
  k.Ge = function() {}
  ;
  k.qc = function() {}
  ;
  k.rc = function() {}
  ;
  k.sc = function() {}
  ;
  k.tc = function() {}
  ;
  k.uc = function() {}
  ;
  k.vc = function() {}
  ;
  k.Sb = function() {}
  ;
  k.La = function() {}
  ;
  k.Wb = function() {}
  ;
  k.ib = function() {}
  ;
  function Vh(a, b, c, d, e) {
      this.f = a;
      this.g = b;
      this.c = c;
      this.O = d;
      this.Lb = e;
      this.N = this.b = this.a = this.Ua = this.T = this.I = null;
      this.ta = this.U = this.v = this.B = this.D = this.C = 0;
      this.fa = !1;
      this.i = this.kb = 0;
      this.ma = !1;
      this.ra = 0;
      this.qa = "";
      this.oc = this.oa = 0;
      this.Va = !1;
      this.l = this.ab = 0;
      this.sa = this.o = this.j = null;
      this.s = [];
      this.ub = Ue()
  }
  v(Vh, Uh);
  function Wh(a, b, c) {
      if (a.N) {
          b = Re(b, 0, c, 2, a.O, a.s);
          c = a.f;
          var d = a.ub
            , e = c.globalAlpha;
          1 != a.v && (c.globalAlpha = e * a.v);
          var f = a.kb;
          a.fa && (f += a.Lb);
          var g;
          var h = 0;
          for (g = b.length; h < g; h += 2) {
              var l = b[h] - a.C
                , m = b[h + 1] - a.D;
              a.ma && (l = Math.round(l),
              m = Math.round(m));
              if (0 !== f || 1 != a.i) {
                  var n = l + a.C
                    , p = m + a.D;
                  cf(d, n, p, a.i, a.i, f, -n, -p);
                  c.setTransform.apply(c, d)
              }
              c.drawImage(a.N, a.U, a.ta, a.ra, a.B, l, m, a.ra, a.B)
          }
          0 === f && 1 == a.i || c.setTransform(1, 0, 0, 1, 0, 0);
          1 != a.v && (c.globalAlpha = e)
      }
  }
  function Xh(a, b, c, d) {
      var e = 0;
      if (a.sa && "" !== a.qa) {
          a.j && Yh(a, a.j);
          a.o && Zh(a, a.o);
          var f = a.sa
            , g = a.f
            , h = a.Ua
            , l = f.textAlign ? f.textAlign : "center";
          h ? (h.font != f.font && (h.font = g.font = f.font),
          h.textAlign != l && (h.textAlign = l),
          h.textBaseline != f.textBaseline && (h.textBaseline = g.textBaseline = f.textBaseline)) : (g.font = f.font,
          g.textAlign = l,
          g.textBaseline = f.textBaseline,
          a.Ua = {
              font: f.font,
              textAlign: l,
              textBaseline: f.textBaseline
          });
          b = Re(b, e, c, d, a.O, a.s);
          f = a.f;
          g = a.ab;
          for (a.Va && (g += a.Lb); e < c; e += d) {
              h = b[e] + a.oa;
              l = b[e + 1] + a.oc;
              if (0 !== g || 1 != a.l) {
                  var m = cf(a.ub, h, l, a.l, a.l, g, -h, -l);
                  f.setTransform.apply(f, m)
              }
              a.o && f.strokeText(a.qa, h, l);
              a.j && f.fillText(a.qa, h, l)
          }
          0 === g && 1 == a.l || f.setTransform(1, 0, 0, 1, 0, 0)
      }
  }
  function $h(a, b, c, d, e, f) {
      var g = a.f;
      a = Re(b, c, d, e, a.O, a.s);
      g.moveTo(a[0], a[1]);
      b = a.length;
      f && (b -= 2);
      for (c = 2; c < b; c += 2)
          g.lineTo(a[c], a[c + 1]);
      f && g.closePath();
      return d
  }
  function ai(a, b, c, d, e) {
      var f;
      var g = 0;
      for (f = d.length; g < f; ++g)
          c = $h(a, b, c, d[g], e, !0);
      return c
  }
  k = Vh.prototype;
  k.$b = function(a) {
      if (qb(this.c, a.G())) {
          if (this.a || this.b) {
              this.a && Yh(this, this.a);
              this.b && Zh(this, this.b);
              var b = this.O;
              var c = this.s
                , d = a.ca();
              b = d ? Re(d, 0, d.length, a.pa(), b, c) : null;
              c = b[2] - b[0];
              d = b[3] - b[1];
              c = Math.sqrt(c * c + d * d);
              d = this.f;
              d.beginPath();
              d.arc(b[0], b[1], c, 0, 2 * Math.PI);
              this.a && d.fill();
              this.b && d.stroke()
          }
          "" !== this.qa && Xh(this, a.xa(), 2, 2)
      }
  }
  ;
  k.zd = function(a) {
      this.La(a.Ca(), a.Da());
      this.Wb(a.Y());
      this.ib(a.Ia())
  }
  ;
  k.Fb = function(a) {
      switch (a.S()) {
      case "Point":
          this.uc(a);
          break;
      case "LineString":
          this.qc(a);
          break;
      case "Polygon":
          this.vc(a);
          break;
      case "MultiPoint":
          this.sc(a);
          break;
      case "MultiLineString":
          this.rc(a);
          break;
      case "MultiPolygon":
          this.tc(a);
          break;
      case "GeometryCollection":
          this.Ge(a);
          break;
      case "Circle":
          this.$b(a)
      }
  }
  ;
  k.Fe = function(a, b) {
      (a = (0,
      b.Za)(a)) && qb(this.c, a.G()) && (this.zd(b),
      this.Fb(a))
  }
  ;
  k.Ge = function(a) {
      a = a.a;
      var b;
      var c = 0;
      for (b = a.length; c < b; ++c)
          this.Fb(a[c])
  }
  ;
  k.uc = function(a) {
      var b = a.ca();
      a = a.pa();
      this.N && Wh(this, b, b.length);
      "" !== this.qa && Xh(this, b, b.length, a)
  }
  ;
  k.sc = function(a) {
      var b = a.ca();
      a = a.pa();
      this.N && Wh(this, b, b.length);
      "" !== this.qa && Xh(this, b, b.length, a)
  }
  ;
  k.qc = function(a) {
      if (qb(this.c, a.G())) {
          if (this.b) {
              Zh(this, this.b);
              var b = this.f
                , c = a.ca();
              b.beginPath();
              $h(this, c, 0, c.length, a.pa(), !1);
              b.stroke()
          }
          "" !== this.qa && (a = bi(a),
          Xh(this, a, 2, 2))
      }
  }
  ;
  k.rc = function(a) {
      var b = a.G();
      if (qb(this.c, b)) {
          if (this.b) {
              Zh(this, this.b);
              b = this.f;
              var c = a.ca()
                , d = 0
                , e = a.lb()
                , f = a.pa();
              b.beginPath();
              var g;
              var h = 0;
              for (g = e.length; h < g; ++h)
                  d = $h(this, c, d, e[h], f, !1);
              b.stroke()
          }
          "" !== this.qa && (a = ci(a),
          Xh(this, a, a.length, 2))
      }
  }
  ;
  k.vc = function(a) {
      if (qb(this.c, a.G())) {
          if (this.b || this.a) {
              this.a && Yh(this, this.a);
              this.b && Zh(this, this.b);
              var b = this.f;
              b.beginPath();
              ai(this, a.Ub(), 0, a.lb(), a.pa());
              this.a && b.fill();
              this.b && b.stroke()
          }
          "" !== this.qa && (a = Pf(a),
          Xh(this, a, 2, 2))
      }
  }
  ;
  k.tc = function(a) {
      if (qb(this.c, a.G())) {
          if (this.b || this.a) {
              this.a && Yh(this, this.a);
              this.b && Zh(this, this.b);
              var b = this.f, c = di(a), d = 0, e = a.md(), f = a.pa(), g;
              b.beginPath();
              var h = 0;
              for (g = e.length; h < g; ++h)
                  d = ai(this, c, d, e[h], f);
              this.a && b.fill();
              this.b && b.stroke()
          }
          "" !== this.qa && (a = ei(a),
          Xh(this, a, a.length, 2))
      }
  }
  ;
  function Yh(a, b) {
      var c = a.f
        , d = a.I;
      d ? d.fillStyle != b.fillStyle && (d.fillStyle = c.fillStyle = b.fillStyle) : (c.fillStyle = b.fillStyle,
      a.I = {
          fillStyle: b.fillStyle
      })
  }
  function Zh(a, b) {
      var c = a.f
        , d = a.T;
      d ? (d.lineCap != b.lineCap && (d.lineCap = c.lineCap = b.lineCap),
      qd && (ma(d.lineDash, b.lineDash) || c.setLineDash(d.lineDash = b.lineDash),
      d.lineDashOffset != b.lineDashOffset && (d.lineDashOffset = c.lineDashOffset = b.lineDashOffset)),
      d.lineJoin != b.lineJoin && (d.lineJoin = c.lineJoin = b.lineJoin),
      d.lineWidth != b.lineWidth && (d.lineWidth = c.lineWidth = b.lineWidth),
      d.miterLimit != b.miterLimit && (d.miterLimit = c.miterLimit = b.miterLimit),
      d.strokeStyle != b.strokeStyle && (d.strokeStyle = c.strokeStyle = b.strokeStyle)) : (c.lineCap = b.lineCap,
      qd && (c.setLineDash(b.lineDash),
      c.lineDashOffset = b.lineDashOffset),
      c.lineJoin = b.lineJoin,
      c.lineWidth = b.lineWidth,
      c.miterLimit = b.miterLimit,
      c.strokeStyle = b.strokeStyle,
      a.T = {
          lineCap: b.lineCap,
          lineDash: b.lineDash,
          lineDashOffset: b.lineDashOffset,
          lineJoin: b.lineJoin,
          lineWidth: b.lineWidth,
          miterLimit: b.miterLimit,
          strokeStyle: b.strokeStyle
      })
  }
  k.La = function(a, b) {
      a ? (a = a.b,
      this.a = {
          fillStyle: Th(a ? a : Jh)
      }) : this.a = null;
      if (b) {
          a = b.b;
          var c = b.g
            , d = b.f
            , e = b.i
            , f = b.j
            , g = b.c;
          b = b.l;
          this.b = {
              lineCap: void 0 !== c ? c : "round",
              lineDash: d ? d : Kh,
              lineDashOffset: e ? e : 0,
              lineJoin: void 0 !== f ? f : "round",
              lineWidth: this.g * (void 0 !== g ? g : 1),
              miterLimit: void 0 !== b ? b : 10,
              strokeStyle: Th(a ? a : Lh)
          }
      } else
          this.b = null
  }
  ;
  k.Wb = function(a) {
      if (a) {
          var b = a.Oc()
            , c = a.Y(1)
            , d = a.Vc()
            , e = a.kc();
          this.C = b[0];
          this.D = b[1];
          this.B = e[1];
          this.N = c;
          this.v = a.i;
          this.U = d[0];
          this.ta = d[1];
          this.fa = a.o;
          this.kb = a.g;
          this.i = a.a * this.g;
          this.ma = a.v;
          this.ra = e[0]
      } else
          this.N = null
  }
  ;
  k.ib = function(a) {
      if (a) {
          var b = a.Ca();
          b ? (b = b.b,
          this.j = {
              fillStyle: Th(b ? b : Jh)
          }) : this.j = null;
          var c = a.Da();
          if (c) {
              b = c.b;
              var d = c.g
                , e = c.f
                , f = c.i
                , g = c.j
                , h = c.c;
              c = c.l;
              this.o = {
                  lineCap: void 0 !== d ? d : "round",
                  lineDash: e ? e : Kh,
                  lineDashOffset: f ? f : 0,
                  lineJoin: void 0 !== g ? g : "round",
                  lineWidth: void 0 !== h ? h : 1,
                  miterLimit: void 0 !== c ? c : 10,
                  strokeStyle: Th(b ? b : Lh)
              }
          } else
              this.o = null;
          b = a.a;
          d = a.f;
          e = a.c;
          f = a.l;
          g = a.i;
          h = a.b;
          c = a.Ia();
          var l = a.g;
          a = a.j;
          this.sa = {
              font: void 0 !== b ? b : "10px sans-serif",
              textAlign: void 0 !== l ? l : "center",
              textBaseline: void 0 !== a ? a : "middle"
          };
          this.qa = void 0 !== c ? c : "";
          this.oa = void 0 !== d ? this.g * d : 0;
          this.oc = void 0 !== e ? this.g * e : 0;
          this.Va = void 0 !== f ? f : !1;
          this.ab = void 0 !== g ? g : 0;
          this.l = this.g * (void 0 !== h ? h : 1)
      } else
          this.qa = ""
  }
  ;
  function fi(a) {
      Vc.call(this);
      this.a = a
  }
  v(fi, Vc);
  fi.prototype.Fa = sa;
  fi.prototype.df = Qe;
  fi.prototype.Rf = function(a, b, c) {
      return function(d, e) {
          return gi(a, b, d, e, function(a) {
              c[d] || (c[d] = {});
              c[d][a.wa.toString()] = a
          })
      }
  }
  ;
  fi.prototype.ta = function(a) {
      2 === a.target.getState() && hi(this)
  }
  ;
  function ii(a, b) {
      var c = b.getState();
      2 != c && 3 != c && z(b, "change", a.ta, a);
      0 == c && (b.load(),
      c = b.getState());
      return 2 == c
  }
  function hi(a) {
      var b = a.a;
      b.Tb() && "ready" == b.ig() && a.u()
  }
  function ji(a, b) {
      b.Xi() && a.postRenderFunctions.push(function(a, b, e) {
          b = w(a).toString();
          b in e.usedTiles && a.ld(e.viewState.projection, e.usedTiles[b])
      }
      .bind(null, b))
  }
  function ki(a, b) {
      if (b) {
          var c;
          var d = 0;
          for (c = b.length; d < c; ++d) {
              var e = b[d];
              a[w(e).toString()] = e
          }
      }
  }
  function li(a, b) {
      b = b.D;
      void 0 !== b && ("string" === typeof b ? a.logos[b] = "" : b && (wa("string" == typeof b.href, 44),
      wa("string" == typeof b.src, 45),
      a.logos[b.src] = b.href))
  }
  function mi(a, b, c, d) {
      b = w(b).toString();
      c = c.toString();
      b in a ? c in a[b] ? (a = a[b][c],
      d.ba < a.ba && (a.ba = d.ba),
      d.da > a.da && (a.da = d.da),
      d.ea < a.ea && (a.ea = d.ea),
      d.ga > a.ga && (a.ga = d.ga)) : a[b][c] = d : (a[b] = {},
      a[b][c] = d)
  }
  function ni(a, b, c, d, e, f, g, h, l, m) {
      var n = w(b).toString();
      n in a.wantedTiles || (a.wantedTiles[n] = {});
      var p = a.wantedTiles[n];
      a = a.tileQueue;
      var q, r, u;
      for (u = c.minZoom; u <= g; ++u) {
          var x = tc(c, f, u, x);
          var B = c.Qa(u);
          for (q = x.ba; q <= x.da; ++q)
              for (r = x.ea; r <= x.ga; ++r)
                  if (g - u <= h) {
                      var A = b.Uc(u, q, r, d, e);
                      0 == A.getState() && (p[A.gb()] = !0,
                      A.gb()in a.a || a.i([A, n, yc(c, A.wa), B]));
                      l && l.call(m, A)
                  } else
                      b.ih(u, q, r, e)
      }
  }
  ;function oi(a) {
      fi.call(this, a);
      this.T = Ue()
  }
  v(oi, fi);
  function pi(a, b, c) {
      var d = b.pixelRatio
        , e = b.size[0] * d
        , f = b.size[1] * d
        , g = b.viewState.rotation
        , h = ib(c)
        , l = hb(c)
        , m = gb(c);
      c = fb(c);
      Ze(b.coordinateToPixelTransform, h);
      Ze(b.coordinateToPixelTransform, l);
      Ze(b.coordinateToPixelTransform, m);
      Ze(b.coordinateToPixelTransform, c);
      a.save();
      Mh(a, -g, e / 2, f / 2);
      a.beginPath();
      a.moveTo(h[0] * d, h[1] * d);
      a.lineTo(l[0] * d, l[1] * d);
      a.lineTo(m[0] * d, m[1] * d);
      a.lineTo(c[0] * d, c[1] * d);
      a.clip();
      Mh(a, g, e / 2, f / 2)
  }
  function qi(a, b, c, d, e) {
      var f = a.a;
      if (Uc(f, b)) {
          var g = d.size[0] * d.pixelRatio
            , h = d.size[1] * d.pixelRatio
            , l = d.viewState.rotation;
          Mh(c, -l, g / 2, h / 2);
          a = e ? e : ri(a, d, 0);
          f.b(new Ih(b,new Vh(c,d.pixelRatio,d.extent,a,d.viewState.rotation),d,c,null));
          Mh(c, l, g / 2, h / 2)
      }
  }
  oi.prototype.o = function(a, b, c, d) {
      if (this.Fa(a, b, 0, Pe, this))
          return c.call(d, this.a, null)
  }
  ;
  oi.prototype.pf = function(a, b, c, d) {
      qi(this, "postcompose", a, b, d)
  }
  ;
  function ri(a, b, c) {
      var d = b.viewState
        , e = b.pixelRatio
        , f = e / d.resolution;
      return cf(a.T, e * b.size[0] / 2, e * b.size[1] / 2, f, -f, -d.rotation, -d.center[0] + c, -d.center[1])
  }
  ;function si(a) {
      oi.call(this, a);
      this.l = Ue();
      this.j = null
  }
  v(si, oi);
  si.prototype.v = function(a, b, c) {
      qi(this, "precompose", c, a, void 0);
      var d = this.Y();
      if (d) {
          var e = b.extent
            , f = void 0 !== e && !Wa(e, a.extent) && qb(e, a.extent);
          f && pi(c, a, e);
          e = this.s();
          var g = c.globalAlpha;
          c.globalAlpha = b.opacity;
          c.drawImage(d, 0, 0, +d.width, +d.height, Math.round(e[4]), Math.round(e[5]), Math.round(d.width * e[0]), Math.round(d.height * e[3]));
          c.globalAlpha = g;
          f && c.restore()
      }
      this.pf(c, a, b)
  }
  ;
  si.prototype.Fa = function(a, b, c, d, e) {
      var f = this.a;
      return f.ia().Fa(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
          return d.call(e, a, f)
      })
  }
  ;
  si.prototype.o = function(a, b, c, d) {
      if (this.Y()) {
          if (this.a.ia().Fa !== sa)
              return oi.prototype.o.apply(this, arguments);
          var e = Ze(this.l, a.slice());
          Fe(e, b.viewState.resolution / this.i);
          this.j || (this.j = dg(1, 1));
          this.j.clearRect(0, 0, 1, 1);
          this.j.drawImage(this.Y(), e[0], e[1], 1, 1, 0, 0, 1, 1);
          e = this.j.getImageData(0, 0, 1, 1).data;
          if (0 < e[3])
              return c.call(d, this.a, e)
      }
  }
  ;
  function vi(a) {
      si.call(this, a);
      this.N = null;
      this.c = Ue()
  }
  v(vi, si);
  vi.handles = function(a, b) {
      return "canvas" === a && "IMAGE" === b.S()
  }
  ;
  vi.create = function(a, b) {
      return new vi(b)
  }
  ;
  vi.prototype.Y = function() {
      return this.N ? this.N.Y() : null
  }
  ;
  vi.prototype.s = function() {
      return this.c
  }
  ;
  vi.prototype.Ad = function(a, b) {
      var c = a.pixelRatio
        , d = a.size
        , e = a.viewState
        , f = e.center
        , g = e.resolution
        , h = this.a.ia()
        , l = a.viewHints
        , m = a.extent;
      void 0 !== b.extent && (m = pb(m, b.extent));
      l[0] || l[1] || kb(m) || (b = h.Y(m, g, c, e.projection)) && ii(this, b) && (this.N = b);
      if (this.N) {
          b = this.N;
          m = b.G();
          e = b.resolution;
          l = b.a;
          var n = c * e / (g * l);
          m = cf(this.c, c * d[0] / 2, c * d[1] / 2, n, n, 0, l * (m[0] - f[0]) / e, l * (f[1] - m[3]) / e);
          cf(this.l, c * d[0] / 2 - m[4], c * d[1] / 2 - m[5], c / g, -c / g, 0, -f[0], -f[1]);
          ki(a.attributions, b.c);
          li(a, h);
          this.i = e * c / l
      }
      return !!this.N
  }
  ;
  function wi(a) {
      var b = tb({}, a);
      delete b.source;
      gg.call(this, b);
      this.s = this.o = this.l = null;
      a.map && this.setMap(a.map);
      z(this, Yc("source"), this.cm, this);
      this.bd(a.source ? a.source : null)
  }
  v(wi, gg);
  function xi(a, b) {
      return a.visible && b >= a.minResolution && b < a.maxResolution
  }
  k = wi.prototype;
  k.eg = function(a) {
      a = a ? a : [];
      a.push(hg(this));
      return a
  }
  ;
  k.ia = function() {
      return this.get("source") || null
  }
  ;
  k.ig = function() {
      var a = this.ia();
      return a ? a.getState() : "undefined"
  }
  ;
  k.co = function() {
      this.u()
  }
  ;
  k.cm = function() {
      this.s && (Hc(this.s),
      this.s = null);
      var a = this.ia();
      a && (this.s = z(a, "change", this.co, this));
      this.u()
  }
  ;
  k.setMap = function(a) {
      this.l && (Hc(this.l),
      this.l = null);
      a || this.u();
      this.o && (Hc(this.o),
      this.o = null);
      a && (this.l = z(a, "precompose", function(a) {
          var b = hg(this);
          b.Ue = !1;
          b.zIndex = Infinity;
          a.frameState.layerStatesArray.push(b);
          a.frameState.layerStates[w(this)] = b
      }, this),
      this.o = z(this, "change", a.render, a),
      this.u())
  }
  ;
  k.bd = function(a) {
      this.set("source", a)
  }
  ;
  function yi() {
      this.b = {};
      this.a = 0
  }
  yi.prototype.clear = function() {
      this.b = {};
      this.a = 0
  }
  ;
  yi.prototype.get = function(a, b, c) {
      a = b + ":" + a + ":" + (c ? Rh(c) : "null");
      return a in this.b ? this.b[a] : null
  }
  ;
  yi.prototype.set = function(a, b, c, d) {
      this.b[b + ":" + a + ":" + (c ? Rh(c) : "null")] = d;
      ++this.a
  }
  ;
  var zi = new yi;
  function Ai(a, b) {
      this.j = b;
      this.c = {};
      this.o = {}
  }
  v(Ai, Pc);
  function Bi(a) {
      var b = a.viewState
        , c = a.coordinateToPixelTransform
        , d = a.pixelToCoordinateTransform;
      cf(c, a.size[0] / 2, a.size[1] / 2, 1 / b.resolution, -1 / b.resolution, -b.rotation, -b.center[0], -b.center[1]);
      df(Ye(d, c))
  }
  k = Ai.prototype;
  k.ka = function() {
      for (var a in this.c)
          Qc(this.c[a])
  }
  ;
  function Ci() {
      if (32 < zi.a) {
          var a = 0, b;
          for (b in zi.b) {
              var c = zi.b[b];
              0 !== (a++ & 3) || Uc(c) || (delete zi.b[b],
              --zi.a)
          }
      }
  }
  k.Fa = function(a, b, c, d, e, f, g) {
      function h(a, c) {
          var f = w(a).toString()
            , g = b.layerStates[w(c)].Ue;
          if (!(f in b.skippedFeatureUids) || g)
              return d.call(e, a, g ? c : null)
      }
      var l, m = b.viewState, n = m.resolution, p = m.projection;
      m = a;
      if (p.f) {
          p = p.G();
          var q = lb(p)
            , r = a[0];
          if (r < p[0] || r > p[2])
              m = [r + q * Math.ceil((p[0] - r) / q), a[1]]
      }
      p = b.layerStatesArray;
      for (q = p.length - 1; 0 <= q; --q) {
          var u = p[q];
          r = u.layer;
          if (xi(u, n) && f.call(g, r) && (u = Di(this, r),
          r.ia() && (l = u.Fa(r.ia().C ? m : a, b, c, h, e)),
          l))
              return l
      }
  }
  ;
  k.Ri = function(a, b, c, d, e) {
      return void 0 !== this.Fa(a, b, c, Pe, this, d, e)
  }
  ;
  function Di(a, b) {
      var c = w(b).toString();
      if (c in a.c)
          return a.c[c];
      for (var d, e = a.S(), f = 0, g = lg.length; f < g; ++f) {
          var h = lg[f];
          if (h.handles(e, b)) {
              d = h.create(a, b);
              break
          }
      }
      if (d)
          a.c[c] = d,
          a.o[c] = z(d, "change", a.Nl, a);
      else
          throw Error("Unable to create renderer for layer: " + b.S());
      return d
  }
  k.Nl = function() {
      this.j.render()
  }
  ;
  k.$g = sa;
  k.Vp = function(a, b) {
      for (var c in this.c)
          if (!(b && c in b.layerStates)) {
              a = c;
              var d = this.c[a];
              delete this.c[a];
              Hc(this.o[a]);
              delete this.o[a];
              Qc(d)
          }
  }
  ;
  function Ei(a, b) {
      for (var c in a.c)
          if (!(c in b.layerStates)) {
              b.postRenderFunctions.push(a.Vp.bind(a));
              break
          }
  }
  function oa(a, b) {
      return a.zIndex - b.zIndex
  }
  ;function Fi(a, b) {
      Ai.call(this, 0, b);
      this.f = dg();
      this.b = this.f.canvas;
      this.b.style.width = "100%";
      this.b.style.height = "100%";
      this.b.style.display = "block";
      this.b.className = "ol-unselectable";
      a.insertBefore(this.b, a.childNodes[0] || null);
      this.a = !0;
      this.i = Ue()
  }
  v(Fi, Ai);
  Fi.handles = function(a) {
      return "canvas" === a
  }
  ;
  Fi.create = function(a, b) {
      return new Fi(a,b)
  }
  ;
  function Gi(a, b, c) {
      var d = a.j
        , e = a.f;
      if (Uc(d, b)) {
          var f = c.extent
            , g = c.pixelRatio
            , h = c.viewState.rotation
            , l = c.viewState
            , m = c.pixelRatio / l.resolution;
          a = cf(a.i, a.b.width / 2, a.b.height / 2, m, -m, -l.rotation, -l.center[0], -l.center[1]);
          d.b(new Ih(b,new Vh(e,g,f,a,h),c,e,null))
      }
  }
  Fi.prototype.S = function() {
      return "canvas"
  }
  ;
  Fi.prototype.$g = function(a) {
      if (a) {
          var b = this.f
            , c = a.pixelRatio
            , d = Math.round(a.size[0] * c)
            , e = Math.round(a.size[1] * c);
          this.b.width != d || this.b.height != e ? (this.b.width = d,
          this.b.height = e) : b.clearRect(0, 0, d, e);
          c = a.viewState.rotation;
          Bi(a);
          Gi(this, "precompose", a);
          var f = a.layerStatesArray;
          na(f);
          c && (b.save(),
          Mh(b, c, d / 2, e / 2));
          d = a.viewState.resolution;
          var g;
          e = 0;
          for (g = f.length; e < g; ++e) {
              var h = f[e];
              var l = h.layer;
              l = Di(this, l);
              xi(h, d) && "ready" == h.Nj && l.Ad(a, h) && l.v(a, h, b)
          }
          c && b.restore();
          Gi(this, "postcompose", a);
          this.a || (this.b.style.display = "",
          this.a = !0);
          Ei(this, a);
          a.postRenderFunctions.push(Ci)
      } else
          this.a && (this.b.style.display = "none",
          this.a = !1)
  }
  ;
  Fi.prototype.Qi = function(a, b, c, d, e, f) {
      var g = b.viewState.resolution
        , h = b.layerStatesArray
        , l = h.length;
      a = Ze(b.pixelToCoordinateTransform, a.slice());
      for (--l; 0 <= l; --l) {
          var m = h[l];
          var n = m.layer;
          if (xi(m, g) && e.call(f, n) && (m = Di(this, n).o(a, b, c, d)))
              return m
      }
  }
  ;
  function Hi(a) {
      si.call(this, a);
      this.context = null === this.context ? null : dg();
      this.c = null;
      this.g = [];
      this.B = Pa();
      this.ma = new xa(0,0,0,0);
      this.O = Ue();
      this.I = 0
  }
  v(Hi, si);
  Hi.handles = function(a, b) {
      return "canvas" === a && "TILE" === b.S()
  }
  ;
  Hi.create = function(a, b) {
      return new Hi(b)
  }
  ;
  function Ii(a, b) {
      b = b.getState();
      a = a.a.i();
      return 2 == b || 4 == b || 3 == b && !a
  }
  Hi.prototype.Ad = function(a, b) {
      var c = a.pixelRatio
        , d = a.size
        , e = a.viewState
        , f = e.projection
        , g = e.resolution;
      e = e.center;
      var h = this.a
        , l = h.ia()
        , m = l.f
        , n = l.Xa(f)
        , p = n.xc(g, this.I)
        , q = n.Qa(p)
        , r = Math.round(g / q) || 1
        , u = a.extent;
      void 0 !== b.extent && (u = pb(u, b.extent));
      if (kb(u))
          return !1;
      var x = tc(n, u, p)
        , B = wc(n, p, x)
        , A = l.Sc(c)
        , y = {};
      y[p] = {};
      var N = this.Rf(l, f, y), ca = this.B, la = this.ma, fa = !1, va, ra;
      for (va = x.ba; va <= x.da; ++va)
          for (ra = x.ea; ra <= x.ga; ++ra) {
              var T = l.Uc(p, va, ra, c, f);
              3 == T.getState() && (h.i() ? 0 < h.c() && (fa = !0) : Ji(T, 2));
              Ii(this, T) || (T = Ki(T));
              if (Ii(this, T)) {
                  var U = w(this);
                  if (2 == T.getState()) {
                      y[p][T.wa.toString()] = T;
                      var Xb = T.j ? -1 !== T.o[U] : !1;
                      fa || !Xb && -1 !== this.g.indexOf(T) || (fa = !0)
                  }
                  if (1 === Li(T, U, a.time))
                      continue
              }
              U = vc(n, T.wa, la, ca);
              Xb = !1;
              U && (Xb = N(p + 1, U));
              Xb || uc(n, T.wa, N, la, ca)
          }
      T = a.viewHints;
      T = T[0] || T[1];
      if (!(this.i && 16 < Date.now() - a.time && T || !fa && this.c && Wa(this.c, u) && this.wf == m && r == this.D && (T || q * c / A * r == this.i))) {
          if (T = this.context)
              ra = l.be(p, c, f),
              va = Math.round((x.da - x.ba + 1) * ra[0] / r),
              ra = Math.round((x.ga - x.ea + 1) * ra[1] / r),
              fa = T.canvas,
              fa.width != va || fa.height != ra ? (this.D = r,
              fa.width = va,
              fa.height = ra) : (this.c && !cb(B, this.c) && T.clearRect(0, 0, va, ra),
              r = this.D);
          this.g.length = 0;
          fa = Object.keys(y).map(Number);
          fa.sort(function(a, b) {
              return a === p ? 1 : b === p ? -1 : a > b ? 1 : a < b ? -1 : 0
          });
          U = 0;
          for (Xb = fa.length; U < Xb; ++U) {
              la = fa[U];
              N = l.be(la, c, f);
              T = n.Qa(la);
              var Ca = T / q;
              var Cb = A * l.$f(f);
              var nc = y[la];
              for (var xd in nc) {
                  T = nc[xd];
                  ra = n.Ja(T.wa, ca);
                  va = (ra[0] - B[0]) / q * A / r;
                  ra = (B[3] - ra[3]) / q * A / r;
                  var Ec = N[0] * Ca / r;
                  var md = N[1] * Ca / r;
                  this.Sf(T, a, b, va, ra, Ec, md, Cb, p === la);
                  this.g.push(T)
              }
          }
          this.wf = m;
          this.i = q * c / A * r;
          this.c = B
      }
      b = this.i / g;
      b = cf(this.O, c * d[0] / 2, c * d[1] / 2, b, b, 0, (this.c[0] - e[0]) / this.i * c, (e[1] - this.c[3]) / this.i * c);
      cf(this.l, c * d[0] / 2 - b[4], c * d[1] / 2 - b[5], c / g, -c / g, 0, -e[0], -e[1]);
      mi(a.usedTiles, l, p, x);
      ni(a, l, n, c, f, u, p, h.c());
      ji(a, l);
      li(a, l);
      return 0 < this.g.length
  }
  ;
  Hi.prototype.Sf = function(a, b, c, d, e, f, g, h, l) {
      if (c = a.Y(this.a)) {
          var m = w(this)
            , n = l ? Li(a, m, b.time) : 1;
          1 !== n || this.a.ia().fg(b.viewState.projection) || this.context.clearRect(d, e, f, g);
          var p = n !== this.context.globalAlpha;
          p && (this.context.save(),
          this.context.globalAlpha = n);
          this.context.drawImage(c, h, h, c.width - 2 * h, c.height - 2 * h, d, e, f, g);
          p && this.context.restore();
          1 !== n ? b.animate = !0 : l && a.j && (a.o[m] = -1)
      }
  }
  ;
  Hi.prototype.Y = function() {
      var a = this.context;
      return a ? a.canvas : null
  }
  ;
  Hi.prototype.s = function() {
      return this.O
  }
  ;
  function Mi() {}
  ;function Ni(a, b, c, d) {
      var e = a[b]
        , f = a[b + 1]
        , g = 0;
      for (b += d; b < c; b += d) {
          var h = a[b]
            , l = a[b + 1];
          g += Math.sqrt((h - e) * (h - e) + (l - f) * (l - f));
          e = h;
          f = l
      }
      return g
  }
  ;function Oi(a, b, c, d, e) {
      this.oa = a;
      this.Ua = b;
      this.overlaps = e;
      this.pixelRatio = d;
      this.c = 0;
      this.resolution = c;
      this.sa = this.ra = null;
      this.a = [];
      this.coordinates = [];
      this.kb = {};
      this.U = Ue();
      this.b = [];
      this.B = null;
      this.ma = Ue();
      this.ta = Ue();
      this.fa = []
  }
  v(Oi, Uh);
  function Pi(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) {
      var x = a.ma;
      f *= q;
      g *= q;
      c -= f;
      d -= g;
      r && (c = Math.round(c),
      d = Math.round(d));
      0 !== p && (f = c + f,
      g = d + g,
      cf(x, f, g, 1, 1, p, -f, -g),
      b.setTransform.apply(b, x));
      x = b.globalAlpha;
      1 != l && (b.globalAlpha = x * l);
      u = u + m > e.width ? e.width - m : u;
      h = h + n > e.height ? e.height - n : h;
      b.drawImage(e, m, n, u, h, c, d, u * q, h * q);
      1 != l && (b.globalAlpha = x);
      0 !== p && b.setTransform.apply(b, a.ta)
  }
  function Qi(a, b) {
      var c = a.pixelRatio;
      return 1 == c ? b : b.map(function(a) {
          return a * c
      })
  }
  function Ri(a, b, c, d, e, f, g) {
      var h = a.coordinates.length
        , l = a.Wf();
      g && (c += e);
      g = [b[c], b[c + 1]];
      var m = [NaN, NaN], n = !0, p;
      for (p = c + e; p < d; p += e) {
          m[0] = b[p];
          m[1] = b[p + 1];
          var q = Xa(l, m);
          q !== r ? (n && (a.coordinates[h++] = g[0],
          a.coordinates[h++] = g[1]),
          a.coordinates[h++] = m[0],
          a.coordinates[h++] = m[1],
          n = !1) : 1 === q ? (a.coordinates[h++] = m[0],
          a.coordinates[h++] = m[1],
          n = !1) : n = !0;
          g[0] = m[0];
          g[1] = m[1];
          var r = q
      }
      if (f && n || p === c + e)
          a.coordinates[h++] = g[0],
          a.coordinates[h++] = g[1];
      return h
  }
  function Si(a, b, c, d, e, f) {
      for (var g = 0, h = d.length; g < h; ++g) {
          var l = d[g];
          c = Ri(a, b, c, l, e, !1, !1);
          f.push(c);
          c = l
      }
      return c
  }
  k = Oi.prototype;
  k.Eh = function(a, b, c) {
      Ti(this, b);
      var d = a.S(), e = a.pa(), f = this.coordinates.length, g;
      if ("MultiPolygon" == d) {
          d = di(a);
          var h = [];
          for (var l = a.md(), m = g = 0, n = l.length; m < n; ++m) {
              var p = [];
              g = Si(this, d, g, l[m], e, p);
              h.push(p)
          }
          this.a.push([4, f, h, a, c, yf])
      } else
          "Polygon" == d || "MultiLineString" == d ? (h = [],
          d = "Polygon" == d ? a.Ub() : a.ca(),
          Si(this, d, 0, a.lb(), e, h),
          this.a.push([4, f, h, a, c, xf])) : "LineString" == d || "MultiPoint" == d ? (d = a.ca(),
          e = Ri(this, d, 0, d.length, e, !1, !1),
          this.a.push([4, f, e, a, c, wf])) : "Point" == d && (d = a.ca(),
          this.coordinates.push(d[0], d[1]),
          e = this.coordinates.length,
          this.a.push([4, f, e, a, c]));
      Ui(this, b)
  }
  ;
  function Ti(a, b) {
      a.ra = [0, b, 0];
      a.a.push(a.ra);
      a.sa = [0, b, 0];
      a.b.push(a.sa)
  }
  k.Wa = function(a, b) {
      if (this.T) {
          var c = Ze(this.U, this.T.slice());
          a.translate(c[0], c[1]);
          a.rotate(b)
      }
      a.fill();
      this.T && a.setTransform.apply(a, this.ta)
  }
  ;
  function Vi(a, b, c, d, e, f, g, h) {
      if (a.B && ma(c, a.U))
          var l = a.B;
      else
          a.B || (a.B = []),
          l = Re(a.coordinates, 0, a.coordinates.length, 2, c, a.B),
          Ye(a.U, c);
      c = !wb(e);
      for (var m = 0, n = f.length, p, q, r, u, x, B, A, y, N = 0, ca = 0, la = a.kb, fa = {
          context: b,
          pixelRatio: a.pixelRatio,
          resolution: a.resolution,
          rotation: d
      }, va = a.a != f || a.overlaps ? 0 : 200; m < n; )
          switch (y = f[m],
          y[0]) {
          case 0:
              var ra = y[1];
              c && e[w(ra).toString()] || !ra.W() ? m = y[2] : void 0 === h || qb(h, ra.W().G()) ? ++m : m = y[2] + 1;
              break;
          case 1:
              N > va && (a.Wa(b, d),
              N = 0);
              ca > va && (b.stroke(),
              ca = 0);
              N || ca || (b.beginPath(),
              x = B = NaN);
              ++m;
              break;
          case 2:
              p = y[1];
              q = l[p];
              A = l[p + 1];
              y = l[p + 2] - q;
              p = l[p + 3] - A;
              p = Math.sqrt(y * y + p * p);
              b.moveTo(q + p, A);
              b.arc(q, A, p, 0, 2 * Math.PI, !0);
              ++m;
              break;
          case 3:
              b.closePath();
              ++m;
              break;
          case 4:
              p = y[1];
              q = y[2];
              A = y[4];
              r = 6 == y.length ? y[5] : void 0;
              fa.geometry = y[3];
              fa.feature = ra;
              m in la || (la[m] = []);
              y = la[m];
              r ? r(l, p, q, 2, y) : (y[0] = l[p],
              y[1] = l[p + 1],
              y.length = 2);
              A(y, fa);
              ++m;
              break;
          case 6:
              p = y[1];
              q = y[2];
              A = y[3];
              r = y[4];
              u = y[5];
              var T = y[6]
                , U = y[7]
                , Xb = y[8]
                , Ca = y[9]
                , Cb = y[11]
                , nc = y[12]
                , xd = y[13]
                , Ec = y[14];
              for (y[10] && (Cb += d); p < q; p += 2)
                  Pi(a, b, l[p], l[p + 1], A, r, u, T, U, Xb, Ca, Cb, nc, xd, Ec);
              ++m;
              break;
          case 5:
              U = y[1];
              Xb = y[2];
              p = y[3];
              q = y[4];
              u = y[5];
              xd = y[6];
              Cb = y[7];
              A = y[8];
              r = y[9];
              nc = y[10];
              y = y[11];
              Ec = Ni(l, U, Xb, 2);
              var md = Cb(r);
              if (u || md <= Ec) {
                  a: {
                      T = void 0;
                      u = l;
                      Ca = r;
                      nc = (Ec - md) * nc;
                      md = (Ec = a.fa) ? Ec : [];
                      var sh = u[U] > u[Xb - 2]
                        , kf = Ca.length
                        , Je = u[U]
                        , Nf = u[U + 1];
                      U += 2;
                      for (var Cg = u[U], Dg = u[U + 1], pk = 0, ti = Math.sqrt(Math.pow(Cg - Je, 2) + Math.pow(Dg - Nf, 2)), ui = 0; ui < kf; ++ui) {
                          Ec = sh ? kf - ui - 1 : ui;
                          for (var Go = Cb(Ca[Ec]), lf = nc + Go / 2; U < Xb - 2 && pk + ti < lf; )
                              Je = Cg,
                              Nf = Dg,
                              U += 2,
                              Cg = u[U],
                              Dg = u[U + 1],
                              pk += ti,
                              ti = Math.sqrt(Math.pow(Cg - Je, 2) + Math.pow(Dg - Nf, 2));
                          var qk = lf - pk;
                          lf = Math.atan2(Dg - Nf, Cg - Je);
                          sh && (lf += 0 < lf ? -Math.PI : Math.PI);
                          if (void 0 !== T && (T = lf - T,
                          T += T > Math.PI ? -2 * Math.PI : T < -Math.PI ? 2 * Math.PI : 0,
                          Math.abs(T) > xd)) {
                              T = null;
                              break a
                          }
                          T = lf;
                          qk /= ti;
                          md[Ec] = [Ka(Je, Cg, qk), Ka(Nf, Dg, qk), lf];
                          nc += Go
                      }
                      T = md
                  }
                  U = r.length;
                  if (T)
                      for (Xb = p[p.length - 1].height,
                      Ca = 0,
                      Cb = p.length; Ca < Cb; ++Ca)
                          nc = T[Ca % U],
                          xd = p[Ca],
                          r = xd.width / 2,
                          u = q * xd.height + (.5 - q) * (xd.height - Xb) - A,
                          Pi(a, b, nc[0], nc[1], xd, r, u, xd.height, 1, 0, 0, nc[2], y, !1, xd.width)
              }
              ++m;
              break;
          case 7:
              if (g && (ra = y[1],
              p = g(ra)))
                  return p;
              ++m;
              break;
          case 8:
              va ? N++ : a.Wa(b, d);
              ++m;
              break;
          case 9:
              p = y[1];
              q = y[2];
              r = l[p];
              u = l[p + 1];
              A = r + .5 | 0;
              y = u + .5 | 0;
              if (A !== x || y !== B)
                  b.moveTo(r, u),
                  x = A,
                  B = y;
              for (p += 2; p < q; p += 2)
                  if (r = l[p],
                  u = l[p + 1],
                  A = r + .5 | 0,
                  y = u + .5 | 0,
                  p == q - 2 || A !== x || y !== B)
                      b.lineTo(r, u),
                      x = A,
                      B = y;
              ++m;
              break;
          case 10:
              a.T = y[2];
              N && (a.Wa(b, d),
              N = 0,
              ca && (b.stroke(),
              ca = 0));
              b.fillStyle = y[1];
              ++m;
              break;
          case 11:
              ca && (b.stroke(),
              ca = 0);
              b.strokeStyle = y[1];
              b.lineWidth = y[2];
              b.lineCap = y[3];
              b.lineJoin = y[4];
              b.miterLimit = y[5];
              qd && (b.lineDashOffset = y[7],
              b.setLineDash(y[6]));
              ++m;
              break;
          case 12:
              va ? ca++ : b.stroke();
              ++m;
              break;
          default:
              ++m
          }
      N && a.Wa(b, d);
      ca && b.stroke()
  }
  k.Ka = function(a, b, c, d) {
      Vi(this, a, b, c, d, this.a, void 0, void 0)
  }
  ;
  function Wi(a) {
      var b = a.b;
      b.reverse();
      var c, d = b.length, e = -1;
      for (c = 0; c < d; ++c) {
          var f = b[c];
          var g = f[0];
          if (7 == g)
              e = c;
          else if (0 == g) {
              f[2] = c;
              f = a.b;
              for (g = c; e < g; ) {
                  var h = f[e];
                  f[e] = f[g];
                  f[g] = h;
                  ++e;
                  --g
              }
              e = -1
          }
      }
  }
  function Ui(a, b) {
      a.ra[2] = a.a.length;
      a.ra = null;
      a.sa[2] = a.b.length;
      a.sa = null;
      b = [7, b];
      a.a.push(b);
      a.b.push(b)
  }
  k.cf = sa;
  k.Wf = function() {
      return this.Ua
  }
  ;
  function Xi(a, b, c, d, e) {
      Oi.call(this, a, b, c, d, e);
      this.N = this.I = null;
      this.O = this.s = this.v = this.o = this.l = this.D = this.C = this.j = this.g = this.i = this.f = void 0
  }
  v(Xi, Oi);
  Xi.prototype.uc = function(a, b) {
      if (this.N) {
          Ti(this, b);
          var c = a.ca()
            , d = this.coordinates.length;
          a = Ri(this, c, 0, c.length, a.pa(), !1, !1);
          this.a.push([6, d, a, this.N, this.f, this.i, this.g, this.j, this.C, this.D, this.l, this.o, this.v * this.pixelRatio, this.s, this.O]);
          this.b.push([6, d, a, this.I, this.f, this.i, this.g, this.j, this.C, this.D, this.l, this.o, this.v, this.s, this.O]);
          Ui(this, b)
      }
  }
  ;
  Xi.prototype.sc = function(a, b) {
      if (this.N) {
          Ti(this, b);
          var c = a.ca()
            , d = this.coordinates.length;
          a = Ri(this, c, 0, c.length, a.pa(), !1, !1);
          this.a.push([6, d, a, this.N, this.f, this.i, this.g, this.j, this.C, this.D, this.l, this.o, this.v * this.pixelRatio, this.s, this.O]);
          this.b.push([6, d, a, this.I, this.f, this.i, this.g, this.j, this.C, this.D, this.l, this.o, this.v, this.s, this.O]);
          Ui(this, b)
      }
  }
  ;
  Xi.prototype.cf = function() {
      Wi(this);
      this.i = this.f = void 0;
      this.N = this.I = null;
      this.O = this.s = this.o = this.l = this.D = this.C = this.j = this.v = this.g = void 0
  }
  ;
  Xi.prototype.Wb = function(a) {
      var b = a.Oc()
        , c = a.kc()
        , d = a.Cg(1)
        , e = a.Y(1)
        , f = a.Vc();
      this.f = b[0];
      this.i = b[1];
      this.I = d;
      this.N = e;
      this.g = c[1];
      this.j = a.i;
      this.C = f[0];
      this.D = f[1];
      this.l = a.o;
      this.o = a.g;
      this.v = a.a;
      this.s = a.v;
      this.O = c[0]
  }
  ;
  function Yi(a, b, c, d, e) {
      Oi.call(this, a, b, c, d, e);
      this.i = null;
      this.f = {
          Rd: void 0,
          Ld: void 0,
          Md: null,
          Nd: void 0,
          Od: void 0,
          Pd: void 0,
          Qd: void 0,
          td: void 0,
          strokeStyle: void 0,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: void 0,
          miterLimit: void 0
      }
  }
  v(Yi, Oi);
  function Zi(a, b, c, d, e) {
      var f = a.coordinates.length;
      b = Ri(a, b, c, d, e, !1, !1);
      f = [9, f, b];
      a.a.push(f);
      a.b.push(f);
      return d
  }
  k = Yi.prototype;
  k.Wf = function() {
      this.i || (this.i = Sa(this.Ua),
      0 < this.c && Ra(this.i, this.resolution * (this.c + 1) / 2, this.i));
      return this.i
  }
  ;
  function $i(a) {
      var b = a.f
        , c = b.strokeStyle
        , d = b.lineCap
        , e = b.lineDash
        , f = b.lineDashOffset
        , g = b.lineJoin
        , h = b.lineWidth
        , l = b.miterLimit;
      b.Rd == c && b.Ld == d && ma(b.Md, e) && b.Nd == f && b.Od == g && b.Pd == h && b.Qd == l || (void 0 != b.td && b.td != a.coordinates.length && (a.a.push([12]),
      b.td = a.coordinates.length),
      b.td = 0,
      a.a.push([11, c, h * a.pixelRatio, d, g, l, Qi(a, e), f * a.pixelRatio], [1]),
      b.Rd = c,
      b.Ld = d,
      b.Md = e,
      b.Nd = f,
      b.Od = g,
      b.Pd = h,
      b.Qd = l)
  }
  k.qc = function(a, b) {
      var c = this.f
        , d = c.lineWidth;
      void 0 !== c.strokeStyle && void 0 !== d && ($i(this),
      Ti(this, b),
      this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]),
      c = a.ca(),
      Zi(this, c, 0, c.length, a.pa()),
      this.b.push([12]),
      Ui(this, b))
  }
  ;
  k.rc = function(a, b) {
      var c = this.f
        , d = c.lineWidth;
      if (void 0 !== c.strokeStyle && void 0 !== d) {
          $i(this);
          Ti(this, b);
          this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset], [1]);
          c = a.lb();
          d = a.ca();
          a = a.pa();
          var e = 0, f;
          var g = 0;
          for (f = c.length; g < f; ++g)
              e = Zi(this, d, e, c[g], a);
          this.b.push([12]);
          Ui(this, b)
      }
  }
  ;
  k.cf = function() {
      var a = this.f;
      void 0 != a.td && a.td != this.coordinates.length && this.a.push([12]);
      Wi(this);
      this.f = null
  }
  ;
  k.La = function(a, b) {
      a = b.b;
      this.f.strokeStyle = Th(a ? a : Lh);
      a = b.g;
      this.f.lineCap = void 0 !== a ? a : "round";
      a = b.f;
      this.f.lineDash = a ? a : Kh;
      a = b.i;
      this.f.lineDashOffset = a ? a : 0;
      a = b.j;
      this.f.lineJoin = void 0 !== a ? a : "round";
      a = b.c;
      this.f.lineWidth = void 0 !== a ? a : 1;
      b = b.l;
      this.f.miterLimit = void 0 !== b ? b : 10;
      this.f.lineWidth > this.c && (this.c = this.f.lineWidth,
      this.i = null)
  }
  ;
  function aj(a, b, c, d, e) {
      Oi.call(this, a, b, c, d, e);
      this.i = null;
      this.f = {
          Ch: void 0,
          Rd: void 0,
          Ld: void 0,
          Md: null,
          Nd: void 0,
          Od: void 0,
          Pd: void 0,
          Qd: void 0,
          fillStyle: void 0,
          strokeStyle: void 0,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: void 0,
          miterLimit: void 0
      }
  }
  v(aj, Oi);
  function bj(a, b, c, d, e) {
      var f = a.f
        , g = void 0 !== f.fillStyle;
      f = void 0 != f.strokeStyle;
      var h = d.length
        , l = [1];
      a.a.push(l);
      a.b.push(l);
      for (l = 0; l < h; ++l) {
          var m = d[l]
            , n = a.coordinates.length;
          c = Ri(a, b, c, m, e, !0, !f);
          c = [9, n, c];
          a.a.push(c);
          a.b.push(c);
          f && (c = [3],
          a.a.push(c),
          a.b.push(c));
          c = m
      }
      b = [8];
      a.b.push(b);
      g && a.a.push(b);
      f && (g = [12],
      a.a.push(g),
      a.b.push(g));
      return c
  }
  k = aj.prototype;
  k.$b = function(a, b) {
      var c = this.f
        , d = c.strokeStyle;
      if (void 0 !== c.fillStyle || void 0 !== d) {
          cj(this, a);
          Ti(this, b);
          this.b.push([10, Rh(Jh)]);
          void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
          var e = a.ca();
          d = this.coordinates.length;
          Ri(this, e, 0, e.length, a.pa(), !1, !1);
          a = [1];
          d = [2, d];
          this.a.push(a, d);
          this.b.push(a, d);
          a = [8];
          this.b.push(a);
          void 0 !== c.fillStyle && this.a.push(a);
          void 0 !== c.strokeStyle && (c = [12],
          this.a.push(c),
          this.b.push(c));
          Ui(this, b)
      }
  }
  ;
  k.vc = function(a, b) {
      var c = this.f;
      cj(this, a);
      Ti(this, b);
      this.b.push([10, Rh(Jh)]);
      void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
      c = a.lb();
      var d = a.Ub();
      bj(this, d, 0, c, a.pa());
      Ui(this, b)
  }
  ;
  k.tc = function(a, b) {
      var c = this.f
        , d = c.strokeStyle;
      if (void 0 !== c.fillStyle || void 0 !== d) {
          cj(this, a);
          Ti(this, b);
          this.b.push([10, Rh(Jh)]);
          void 0 !== c.strokeStyle && this.b.push([11, c.strokeStyle, c.lineWidth, c.lineCap, c.lineJoin, c.miterLimit, c.lineDash, c.lineDashOffset]);
          c = a.md();
          d = di(a);
          a = a.pa();
          var e = 0, f;
          var g = 0;
          for (f = c.length; g < f; ++g)
              e = bj(this, d, e, c[g], a);
          Ui(this, b)
      }
  }
  ;
  k.cf = function() {
      Wi(this);
      this.f = null;
      var a = this.oa;
      if (0 !== a) {
          var b = this.coordinates, c;
          var d = 0;
          for (c = b.length; d < c; ++d)
              b[d] = a * Math.round(b[d] / a)
      }
  }
  ;
  k.Wf = function() {
      this.i || (this.i = Sa(this.Ua),
      0 < this.c && Ra(this.i, this.resolution * (this.c + 1) / 2, this.i));
      return this.i
  }
  ;
  k.La = function(a, b) {
      var c = this.f;
      a ? (a = a.b,
      c.fillStyle = Th(a ? a : Jh)) : c.fillStyle = void 0;
      b ? (a = b.b,
      c.strokeStyle = Th(a ? a : Lh),
      a = b.g,
      c.lineCap = void 0 !== a ? a : "round",
      a = b.f,
      c.lineDash = a ? a.slice() : Kh,
      a = b.i,
      c.lineDashOffset = a ? a : 0,
      a = b.j,
      c.lineJoin = void 0 !== a ? a : "round",
      a = b.c,
      c.lineWidth = void 0 !== a ? a : 1,
      b = b.l,
      c.miterLimit = void 0 !== b ? b : 10,
      c.lineWidth > this.c && (this.c = c.lineWidth,
      this.i = null)) : (c.strokeStyle = void 0,
      c.lineCap = void 0,
      c.lineDash = null,
      c.lineDashOffset = void 0,
      c.lineJoin = void 0,
      c.lineWidth = void 0,
      c.miterLimit = void 0)
  }
  ;
  function cj(a, b) {
      var c = a.f
        , d = c.fillStyle
        , e = c.strokeStyle
        , f = c.lineCap
        , g = c.lineDash
        , h = c.lineDashOffset
        , l = c.lineJoin
        , m = c.lineWidth
        , n = c.miterLimit;
      if (void 0 !== d && ("string" !== typeof d || c.Ch != d)) {
          var p = [10, d];
          "string" !== typeof d && (b = b.G(),
          p.push([b[0], b[3]]));
          a.a.push(p);
          c.Ch = c.fillStyle
      }
      void 0 === e || c.Rd == e && c.Ld == f && ma(c.Md, g) && c.Nd == h && c.Od == l && c.Pd == m && c.Qd == n || (a.a.push([11, e, m * a.pixelRatio, f, l, n, Qi(a, g), h * a.pixelRatio]),
      c.Rd = e,
      c.Ld = f,
      c.Md = g,
      c.Nd = h,
      c.Od = l,
      c.Pd = m,
      c.Qd = n)
  }
  ;var dj = "Polygon Circle LineString Image Text Default".split(" ")
    , ej = {
      left: 0,
      end: 0,
      center: .5,
      right: 1,
      start: 1,
      top: 0,
      middle: .5,
      hanging: .2,
      alphabetic: .8,
      ideographic: .8,
      bottom: 1
  };
  function fj(a) {
      this.highWaterMark = void 0 !== a ? a : 2048;
      this.c = 0;
      this.b = {};
      this.f = this.a = null
  }
  function gj(a) {
      return a.c > a.highWaterMark
  }
  k = fj.prototype;
  k.clear = function() {
      this.c = 0;
      this.b = {};
      this.f = this.a = null
  }
  ;
  k.forEach = function(a, b) {
      for (var c = this.a; c; )
          a.call(b, c.Hc, c.fc, this),
          c = c.fb
  }
  ;
  k.get = function(a) {
      a = this.b[a];
      wa(!!a, 15);
      if (a === this.f)
          return a.Hc;
      a === this.a ? (this.a = this.a.fb,
      this.a.Ob = null) : (a.fb.Ob = a.Ob,
      a.Ob.fb = a.fb);
      a.fb = null;
      a.Ob = this.f;
      this.f = this.f.fb = a;
      return a.Hc
  }
  ;
  k.remove = function(a) {
      var b = this.b[a];
      wa(!!b, 15);
      if (b === this.f) {
          if (this.f = b.Ob)
              this.f.fb = null
      } else if (b === this.a) {
          if (this.a = b.fb)
              this.a.Ob = null
      } else
          b.fb.Ob = b.Ob,
          b.Ob.fb = b.fb;
      delete this.b[a];
      --this.c;
      return b.Hc
  }
  ;
  k.pop = function() {
      var a = this.a;
      delete this.b[a.fc];
      a.fb && (a.fb.Ob = null);
      this.a = a.fb;
      this.a || (this.f = null);
      --this.c;
      return a.Hc
  }
  ;
  k.replace = function(a, b) {
      this.get(a);
      this.b[a].Hc = b
  }
  ;
  k.set = function(a, b) {
      wa(!(a in this.b), 16);
      b = {
          fc: a,
          fb: null,
          Ob: this.f,
          Hc: b
      };
      this.f ? this.f.fb = b : this.a = b;
      this.f = b;
      this.b[a] = b;
      ++this.c
  }
  ;
  function hj(a, b, c, d, e) {
      Oi.call(this, a, b, c, d, e);
      this.qa = "";
      this.l = this.o = 0;
      this.v = void 0;
      this.j = this.s = 0;
      this.g = this.f = this.i = null;
      for (this.C = this.O = this.D = ""; gj(ij); )
          ij.pop()
  }
  v(hj, Oi);
  var ij = new fj
    , jj = function() {
      var a;
      return function(b) {
          a || (a = document.createElement("span"),
          a.textContent = "M",
          a.style.visibility = "hidden",
          a.style.whiteSpace = "nowrap");
          a.style.font = b;
          document.body.appendChild(a);
          b = a.offsetHeight;
          document.body.removeChild(a);
          return b
      }
  }();
  function kj(a, b, c) {
      var d = this[c];
      d || (this[c] = d = a.measureText(c).width);
      return d * b
  }
  var lj = function() {
      var a;
      return function(b, c, d) {
          a || (a = dg(1, 1));
          a.font = b;
          b = c.length;
          var e = 0, f;
          for (f = 0; f < b; ++f) {
              var g = a.measureText(c[f]).width;
              e = Math.max(e, g);
              d.push(g)
          }
          return e
      }
  }();
  hj.prototype.Sb = function(a, b) {
      var c = this.i
        , d = this.f
        , e = this.g;
      if ("" !== this.qa && e && (c || d)) {
          var f = this.coordinates.length
            , g = a.S();
          c = null;
          var h = 2;
          d = 2;
          if ("line" === this.g.placement) {
              c = a.ca();
              d = a.pa();
              if ("LineString" == g)
                  var l = [c.length];
              else if ("MultiLineString" == g)
                  l = a.lb();
              else if ("Polygon" == g)
                  l = a.lb().slice(0, 1);
              else if ("MultiPolygon" == g) {
                  var m = a.md();
                  l = [];
                  a = 0;
                  for (g = m.length; a < g; ++a)
                      l.push(m[a][0])
              }
              Ti(this, b);
              a = e.textAlign;
              var n = 0;
              m = 0;
              for (g = l.length; m < g; ++m) {
                  if (void 0 == a) {
                      for (var p, q, r = void 0, u = void 0, x = h = q = p = void 0, B = n, A = n, y = 0, N = 0, ca = n; n < l[m]; n += d) {
                          var la = c[n]
                            , fa = c[n + 1];
                          void 0 !== q && (q = la - q,
                          p = fa - p,
                          h = Math.sqrt(q * q + p * p),
                          void 0 !== u && (N += x,
                          r = Math.acos((u * q + r * p) / (x * h)),
                          r > e.maxAngle && (N > y && (y = N,
                          B = ca,
                          A = n),
                          N = 0,
                          ca = n - d)),
                          x = h,
                          u = q,
                          r = p);
                          q = la;
                          p = fa
                      }
                      h = N + h > y ? [ca, n] : [B, A];
                      n = h[0];
                      h = h[1]
                  } else
                      h = l[m];
                  h = Ri(this, c, n, h, d, !1, !1);
                  n = l[m];
                  B = h;
                  A = this.pixelRatio;
                  u = !!this.i;
                  x = !!this.f;
                  y = this.g;
                  N = ej[y.textBaseline];
                  ca = [];
                  la = this.qa;
                  fa = this.qa.length;
                  if (x)
                      for (r = 0; r < fa; ++r)
                          ca.push(mj(this, la.charAt(r), !1, x));
                  if (u)
                      for (r = 0; r < fa; ++r)
                          ca.push(mj(this, la.charAt(r), u, !1));
                  r = ca[0].getContext("2d");
                  u = this.l * A;
                  x = ej[y.textAlign || "center"];
                  la = {};
                  this.a.push([5, f, B, ca, N, y.exceedLength, y.maxAngle, kj.bind(la, r, A * this.j), u, this.qa, x, 1]);
                  this.b.push([5, f, B, ca, N, y.exceedLength, y.maxAngle, kj.bind(la, r, this.j), u, this.qa, x, 1 / A]);
                  f = h
              }
          } else {
              l = mj(this, this.qa, !!this.i, !!this.f);
              m = l.width / this.pixelRatio;
              switch (g) {
              case "Point":
              case "MultiPoint":
                  c = a.ca();
                  h = c.length;
                  break;
              case "LineString":
                  c = bi(a);
                  break;
              case "Circle":
                  c = a.xa();
                  break;
              case "MultiLineString":
                  c = ci(a);
                  h = c.length;
                  break;
              case "Polygon":
                  c = Pf(a);
                  if (!e.exceedLength && c[2] / this.resolution < m)
                      return;
                  d = 3;
                  break;
              case "MultiPolygon":
                  n = ei(a);
                  c = [];
                  a = 0;
                  for (g = n.length; a < g; a += 3)
                      (e.exceedLength || n[a + 2] / this.resolution >= m) && c.push(n[a], n[a + 1]);
                  h = c.length;
                  if (0 == h)
                      return
              }
              h = Ri(this, c, 0, h, d, !1, !1);
              Ti(this, b);
              e = f;
              c = h;
              m = this.g;
              g = this.f;
              d = this.pixelRatio;
              a = ej[m.textAlign || "center"];
              m = ej[m.textBaseline];
              g = g && g.lineWidth ? g.lineWidth : 0;
              a = a * l.width / d + 2 * (.5 - a) * g;
              m = m * l.height / d + 2 * (.5 - m) * g;
              this.a.push([6, e, c, l, (a - this.o) * d, (m - this.l) * d, l.height, 1, 0, 0, this.v, this.s, 1, !0, l.width]);
              this.b.push([6, e, c, l, (a - this.o) * d, (m - this.l) * d, l.height, 1, 0, 0, this.v, this.s, 1 / d, !0, l.width])
          }
          Ui(this, b)
      }
  }
  ;
  function mj(a, b, c, d) {
      var e = (d ? a.C : "") + a.D + b + (c ? a.O : "");
      b = b.split("\n");
      var f = b.length;
      if (!ij.b.hasOwnProperty(e)) {
          var g = a.f
            , h = a.i
            , l = a.g
            , m = a.j * a.pixelRatio
            , n = ej[l.textAlign || "center"];
          a = d && g.lineWidth ? g.lineWidth : 0;
          var p = []
            , q = lj(l.font, b, p)
            , r = jj(l.font);
          q = dg(Math.ceil((q + a) * m), Math.ceil((r * f + a) * m));
          var u = q.canvas;
          ij.set(e, u);
          q.scale(m, m);
          q.font = l.font;
          d && (q.strokeStyle = g.strokeStyle,
          q.lineWidth = a * (ld ? m : 1),
          q.lineCap = g.lineCap,
          q.lineJoin = g.lineJoin,
          q.miterLimit = g.miterLimit,
          qd && (q.setLineDash(g.lineDash),
          q.lineDashOffset = g.lineDashOffset));
          c && (q.fillStyle = h.fillStyle);
          q.textBaseline = "top";
          q.textAlign = "center";
          g = .5 - n;
          h = n * u.width / m + g * a;
          if (d)
              for (d = 0; d < f; ++d)
                  q.strokeText(b[d], h + g * p[d], .5 * a + d * r);
          if (c)
              for (d = 0; d < f; ++d)
                  q.fillText(b[d], h + g * p[d], .5 * a + d * r)
      }
      return ij.get(e)
  }
  hj.prototype.ib = function(a) {
      var b;
      if (a) {
          if (b = a.Ca()) {
              b = b.b;
              var c = Th(b ? b : Jh);
              b = this.i;
              b || (b = this.i = {});
              b.fillStyle = c
          } else
              b = this.i = null;
          var d = a.Da();
          if (d) {
              c = d.b;
              var e = d.g;
              var f = d.f
                , g = d.i
                , h = d.j
                , l = d.c;
              d = d.l;
              f = f ? f.slice() : Kh;
              var m = Th(c ? c : Lh);
              c = this.f;
              c || (c = this.f = {});
              c.lineCap = void 0 !== e ? e : "round";
              c.lineDash = f;
              c.lineDashOffset = void 0 !== g ? g : 0;
              c.lineJoin = void 0 !== h ? h : "round";
              c.lineWidth = void 0 !== l ? l : 1;
              c.miterLimit = void 0 !== d ? d : 10;
              c.strokeStyle = m
          } else
              c = this.f = null;
          g = a.a;
          h = a.f;
          l = a.c;
          d = a.l;
          f = a.i;
          m = a.b;
          var n = a.Ia()
            , p = a.g
            , q = a.j;
          e = this.g;
          e || (e = this.g = {});
          e.exceedLength = a.o;
          e.font = void 0 !== g ? g : "10px sans-serif";
          e.maxAngle = a.v;
          e.placement = a.s;
          e.textAlign = p;
          e.textBaseline = void 0 !== q ? q : "middle";
          this.qa = void 0 !== n ? n : "";
          this.o = void 0 !== h ? h : 0;
          this.l = void 0 !== l ? l : 0;
          this.v = void 0 !== d ? d : !1;
          this.s = void 0 !== f ? f : 0;
          this.j = void 0 !== m ? m : 1;
          this.C = c ? ("string" == typeof c.strokeStyle ? c.strokeStyle : w(c.strokeStyle)) + c.lineCap + c.lineDashOffset + "|" + c.lineWidth + c.lineJoin + c.miterLimit + "[" + c.lineDash.join() + "]" : "";
          this.D = e.font + (e.textAlign || "?") + this.j;
          this.O = b ? "string" == typeof b.fillStyle ? b.fillStyle : "|" + w(b.fillStyle) : ""
      } else
          this.qa = ""
  }
  ;
  function nj(a, b, c, d, e, f) {
      this.s = a;
      this.f = b;
      this.l = e;
      this.o = d;
      this.v = c;
      this.i = f;
      this.a = {};
      this.g = dg(1, 1);
      this.j = Ue()
  }
  v(nj, Mi);
  var oj = {
      0: [[!0]]
  };
  function pj(a, b, c) {
      var d, e = Math.floor(a.length / 2);
      if (b >= e)
          for (d = e; d < b; d++)
              a[d][c] = !0;
      else if (b < e)
          for (d = b + 1; d < e; d++)
              a[d][c] = !0
  }
  function qj(a) {
      if (void 0 !== oj[a])
          return oj[a];
      for (var b = 2 * a + 1, c = Array(b), d = 0; d < b; d++)
          c[d] = Array(b);
      b = a;
      for (var e = d = 0; b >= d; )
          pj(c, a + b, a + d),
          pj(c, a + d, a + b),
          pj(c, a - d, a + b),
          pj(c, a - b, a + d),
          pj(c, a - b, a - d),
          pj(c, a - d, a - b),
          pj(c, a + d, a - b),
          pj(c, a + b, a - d),
          d++,
          e += 1 + 2 * d,
          0 < 2 * (e - b) + 1 && (--b,
          e += 1 - 2 * b);
      return oj[a] = c
  }
  function rj(a) {
      for (var b in a.a) {
          var c = a.a[b], d;
          for (d in c)
              c[d].cf()
      }
  }
  nj.prototype.Fa = function(a, b, c, d, e, f) {
      d = Math.round(d);
      var g = 2 * d + 1
        , h = cf(this.j, d + .5, d + .5, 1 / b, -1 / b, -c, -a[0], -a[1])
        , l = this.g;
      l.canvas.width !== g || l.canvas.height !== g ? (l.canvas.width = g,
      l.canvas.height = g) : l.clearRect(0, 0, g, g);
      if (void 0 !== this.i) {
          var m = Pa();
          Qa(m, a);
          Ra(m, b * (this.i + d), m)
      }
      var n = qj(d);
      return sj(this, l, h, c, e, function(a) {
          for (var b = l.getImageData(0, 0, g, g).data, c = 0; c < g; c++)
              for (var d = 0; d < g; d++)
                  if (n[c][d] && 0 < b[4 * (d * g + c) + 3]) {
                      if (a = f(a))
                          return a;
                      l.clearRect(0, 0, g, g);
                      return
                  }
      }, m)
  }
  ;
  function tj(a, b) {
      var c = a.f;
      a = c[0];
      var d = c[1]
        , e = c[2];
      c = c[3];
      a = [a, d, a, c, e, c, e, d];
      Re(a, 0, 8, 2, b, a);
      return a
  }
  nj.prototype.b = function(a, b) {
      var c = void 0 !== a ? a.toString() : "0";
      a = this.a[c];
      void 0 === a && (a = {},
      this.a[c] = a);
      c = a[b];
      void 0 === c && (c = new uj[b](this.s,this.f,this.v,this.o,this.l),
      a[b] = c);
      return c
  }
  ;
  nj.prototype.c = function() {
      return wb(this.a)
  }
  ;
  nj.prototype.Ka = function(a, b, c, d, e) {
      var f = Object.keys(this.a).map(Number);
      f.sort(ea);
      var g = tj(this, b);
      a.save();
      a.beginPath();
      a.moveTo(g[0], g[1]);
      a.lineTo(g[2], g[3]);
      a.lineTo(g[4], g[5]);
      a.lineTo(g[6], g[7]);
      a.clip();
      e = e ? e : dj;
      var h, l;
      g = 0;
      for (h = f.length; g < h; ++g) {
          var m = this.a[f[g].toString()];
          var n = 0;
          for (l = e.length; n < l; ++n) {
              var p = m[e[n]];
              void 0 !== p && p.Ka(a, b, c, d)
          }
      }
      a.restore()
  }
  ;
  function sj(a, b, c, d, e, f, g) {
      var h = Object.keys(a.a).map(Number);
      h.sort(function(a, b) {
          return b - a
      });
      var l, m;
      var n = 0;
      for (l = h.length; n < l; ++n) {
          var p = a.a[h[n].toString()];
          for (m = dj.length - 1; 0 <= m; --m) {
              var q = p[dj[m]];
              if (void 0 !== q && (q = Vi(q, b, c, d, e, q.b, f, g)))
                  return q
          }
      }
  }
  var uj = {
      Circle: aj,
      Default: Oi,
      Image: Xi,
      LineString: Yi,
      Polygon: aj,
      Text: hj
  };
  function vj(a, b) {
      return w(a) - w(b)
  }
  function wj(a, b) {
      a = .5 * a / b;
      return a * a
  }
  function xj(a, b, c, d, e, f) {
      var g = !1, h;
      if (h = c.Y()) {
          var l = h.gf();
          2 == l || 3 == l ? h.Qj(e, f) : (0 == l && h.load(),
          h.di(e, f),
          g = !0)
      }
      if (e = (0,
      c.Za)(b))
          if (d = e.Zd(d),
          c.Je())
              yj(a, d, c, b);
          else
              (0,
              zj[d.S()])(a, d, c, b);
      return g
  }
  function yj(a, b, c, d) {
      if ("GeometryCollection" == b.S()) {
          b = b.pd();
          for (var e = 0, f = b.length; e < f; ++e)
              yj(a, b[e], c, d)
      } else
          a.b(c.za(), "Default").Eh(b, d, c.Je())
  }
  var zj = {
      Point: function(a, b, c, d) {
          var e = c.Y();
          if (e) {
              if (2 != e.gf())
                  return;
              var f = a.b(c.za(), "Image");
              f.Wb(e);
              f.uc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      LineString: function(a, b, c, d) {
          var e = c.Da();
          if (e) {
              var f = a.b(c.za(), "LineString");
              f.La(null, e);
              f.qc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      Polygon: function(a, b, c, d) {
          var e = c.Ca()
            , f = c.Da();
          if (e || f) {
              var g = a.b(c.za(), "Polygon");
              g.La(e, f);
              g.vc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      MultiPoint: function(a, b, c, d) {
          var e = c.Y();
          if (e) {
              if (2 != e.gf())
                  return;
              var f = a.b(c.za(), "Image");
              f.Wb(e);
              f.sc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      MultiLineString: function(a, b, c, d) {
          var e = c.Da();
          if (e) {
              var f = a.b(c.za(), "LineString");
              f.La(null, e);
              f.rc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      MultiPolygon: function(a, b, c, d) {
          var e = c.Ca()
            , f = c.Da();
          if (f || e) {
              var g = a.b(c.za(), "Polygon");
              g.La(e, f);
              g.tc(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      },
      GeometryCollection: function(a, b, c, d) {
          b = b.a;
          var e;
          var f = 0;
          for (e = b.length; f < e; ++f)
              (0,
              zj[b[f].S()])(a, b[f], c, d)
      },
      Circle: function(a, b, c, d) {
          var e = c.Ca()
            , f = c.Da();
          if (e || f) {
              var g = a.b(c.za(), "Circle");
              g.La(e, f);
              g.$b(b, d)
          }
          if (e = c.Ia())
              a = a.b(c.za(), "Text"),
              a.ib(e),
              a.Sb(b, d)
      }
  };
  function Aj(a) {
      oi.call(this, a);
      this.c = !1;
      this.O = -1;
      this.s = NaN;
      this.j = Pa();
      this.i = this.l = null;
      this.g = dg()
  }
  v(Aj, oi);
  Aj.handles = function(a, b) {
      return "canvas" === a && "VECTOR" === b.S()
  }
  ;
  Aj.create = function(a, b) {
      return new Aj(b)
  }
  ;
  Aj.prototype.v = function(a, b, c) {
      var d = a.extent
        , e = a.pixelRatio
        , f = b.Ue ? a.skippedFeatureUids : {}
        , g = a.viewState
        , h = g.projection
        , l = g.rotation
        , m = h.G()
        , n = this.a.ia()
        , p = ri(this, a, 0);
      qi(this, "precompose", c, a, p);
      var q = b.extent;
      (g = void 0 !== q) && pi(c, a, q);
      var r = this.i;
      if (r && !r.c()) {
          var u = q = 0
            , x = 1 !== b.opacity
            , B = Uc(this.a, "render");
          if (x || B) {
              var A = c.canvas.width;
              var y = c.canvas.height;
              if (l) {
                  var N = Math.round(Math.sqrt(A * A + y * y));
                  q = (N - A) / 2;
                  u = (N - y) / 2;
                  A = y = N
              }
              this.g.canvas.width = A;
              this.g.canvas.height = y;
              A = this.g
          } else
              A = c;
          y = A.globalAlpha;
          x || (A.globalAlpha = b.opacity);
          A != c && A.translate(q, u);
          N = a.size[0] * e;
          e *= a.size[1];
          Mh(A, -l, N / 2, e / 2);
          r.Ka(A, p, l, f);
          if (n.C && h.f && !Wa(m, d)) {
              h = d[0];
              n = lb(m);
              for (var ca = 0; h < m[0]; )
                  --ca,
                  p = n * ca,
                  p = ri(this, a, p),
                  r.Ka(A, p, l, f),
                  h += n;
              ca = 0;
              for (h = d[2]; h > m[2]; )
                  ++ca,
                  p = n * ca,
                  p = ri(this, a, p),
                  r.Ka(A, p, l, f),
                  h -= n;
              p = ri(this, a, 0)
          }
          Mh(A, l, N / 2, e / 2);
          A != c && (B && qi(this, "render", A, a, p),
          x ? (d = c.globalAlpha,
          c.globalAlpha = b.opacity,
          c.drawImage(A.canvas, -q, -u),
          c.globalAlpha = d) : c.drawImage(A.canvas, -q, -u),
          A.translate(-q, -u));
          x || (A.globalAlpha = y)
      }
      g && c.restore();
      this.pf(c, a, b, p)
  }
  ;
  Aj.prototype.Fa = function(a, b, c, d, e) {
      if (this.i) {
          var f = this.a
            , g = {};
          return this.i.Fa(a, b.viewState.resolution, b.viewState.rotation, c, {}, function(a) {
              var b = w(a).toString();
              if (!(b in g))
                  return g[b] = !0,
                  d.call(e, a, f)
          })
      }
  }
  ;
  Aj.prototype.C = function() {
      hi(this)
  }
  ;
  Aj.prototype.Ad = function(a) {
      var b = this.a
        , c = b.ia();
      ki(a.attributions, c.j);
      li(a, c);
      var d = a.viewHints[0]
        , e = a.viewHints[1]
        , f = b.U
        , g = b.ta;
      if (!this.c && !f && d || !g && e)
          return !0;
      f = a.extent;
      var h = a.viewState;
      g = h.projection;
      var l = h.resolution
        , m = a.pixelRatio;
      d = b.f;
      var n = b.g;
      e = b.get(Bj);
      void 0 === e && (e = vj);
      f = Ra(f, n * l);
      n = h.projection.G();
      c.C && h.projection.f && !Wa(n, a.extent) && (a = Math.max(lb(f) / 2, lb(n)),
      f[0] = n[0] - a,
      f[2] = n[2] + a);
      if (!this.c && this.s == l && this.O == d && this.l == e && Wa(this.j, f))
          return !0;
      this.i = null;
      this.c = !1;
      var p = new nj(.5 * l / m,f,l,m,c.U,b.g);
      c.ce(f, l, g);
      a = function(a) {
          var c = a.bb();
          if (c)
              var d = c.call(a, l);
          else
              (c = b.bb()) && (d = c(a, l));
          if (d) {
              if (d) {
                  c = !1;
                  if (Array.isArray(d))
                      for (var e = 0, f = d.length; e < f; ++e)
                          c = xj(p, a, d[e], wj(l, m), this.C, this) || c;
                  else
                      c = xj(p, a, d, wj(l, m), this.C, this) || c;
                  a = c
              } else
                  a = !1;
              this.c = this.c || a
          }
      }
      .bind(this);
      if (e) {
          var q = [];
          c.ac(f, function(a) {
              q.push(a)
          }, this);
          q.sort(e);
          c = 0;
          for (g = q.length; c < g; ++c)
              a(q[c])
      } else
          c.ac(f, a, this);
      rj(p);
      this.s = l;
      this.O = d;
      this.l = e;
      this.j = f;
      this.i = p;
      return !0
  }
  ;
  function Cj(a) {
      this.context = null;
      Hi.call(this, a);
      this.C = !1;
      this.U = Ue();
      this.I = "vector" == a.v ? 1 : 0
  }
  v(Cj, Hi);
  Cj.handles = function(a, b) {
      return "canvas" === a && "VECTOR_TILE" === b.S()
  }
  ;
  Cj.create = function(a, b) {
      return new Cj(b)
  }
  ;
  var Dj = {
      image: ["Polygon", "Circle", "LineString", "Image", "Text"],
      hybrid: ["Polygon", "LineString"]
  }
    , Ej = {
      image: ["Default"],
      hybrid: ["Image", "Text", "Default"],
      vector: dj
  };
  k = Cj.prototype;
  k.Ad = function(a, b) {
      var c = this.a
        , d = c.f;
      this.fa != d && (this.g.length = 0,
      c = c.v,
      this.context || "vector" == c || (this.context = dg()),
      this.context && "vector" == c && (this.context = null));
      this.fa = d;
      return Hi.prototype.Ad.apply(this, arguments)
  }
  ;
  k.Sf = function(a, b, c, d, e, f, g, h, l) {
      var m = a
        , n = this.a
        , p = b.pixelRatio
        , q = b.viewState.projection
        , r = n.f
        , u = n.get(Bj) || null
        , x = Fj(m, n);
      if (x.Ee || x.wf != r || x.bh != u) {
          var B = n.ia()
            , A = B.tileGrid
            , y = B.Xa(q)
            , N = y.Qa(m.wa[0]);
          y = y.Ja(m.O);
          for (var ca = 0, la = m.a.length; ca < la; ++ca) {
              var fa = m.c[m.a[ca]];
              if (3 != fa.getState()) {
                  var va = A.Ja(fa.wa)
                    , ra = pb(y, va)
                    , T = fa.s
                    , U = !1;
                  hc(q, T) || (U = !0,
                  fa.ug(q));
                  x.Ee = !1;
                  ra = new nj(0,ra,N,p,B.v,n.g);
                  var Xb = wj(N, p)
                    , Ca = fa.a;
                  u && u !== x.bh && Ca.sort(u);
                  for (var Cb, nc = 0, xd = Ca.length; nc < xd; ++nc) {
                      Cb = Ca[nc];
                      U && ("tile-pixels" == T.a && (T.Kj(va),
                      T.Pi(fa.G())),
                      Cb.W().hb(T, q));
                      var Ec = void 0
                        , md = Cb.bb();
                      md ? Ec = md.call(Cb, N) : (md = n.bb()) && (Ec = md(Cb, N));
                      if (Ec) {
                          md = Xb;
                          var sh = ra;
                          if (Ec) {
                              var kf = !1;
                              if (Array.isArray(Ec))
                                  for (var Je = 0, Nf = Ec.length; Je < Nf; ++Je)
                                      kf = xj(sh, Cb, Ec[Je], md, this.Si, this) || kf;
                              else
                                  kf = xj(sh, Cb, Ec, md, this.Si, this) || kf;
                              Cb = kf
                          } else
                              Cb = !1;
                          this.C = this.C || Cb;
                          x.Ee = x.Ee || Cb
                      }
                  }
                  rj(ra);
                  va = m.wa.toString();
                  T = ra;
                  fa.g[w(n) + "," + va] = T
              }
          }
          x.wf = r;
          x.bh = u
      }
      if (this.context) {
          x = b;
          n = this.a;
          q = Fj(m, n);
          r = n.f;
          if ((p = Dj[n.v]) && q.dh !== r)
              for (q.dh = r,
              B = m.O,
              N = B[0],
              q = x.pixelRatio,
              y = n.ia(),
              A = y.Xa(x.viewState.projection),
              r = A.Qa(N),
              u = m.getContext(n),
              x = y.be(N, q, x.viewState.projection),
              u.canvas.width = x[0],
              u.canvas.height = x[1],
              x = A.Ja(B),
              B = 0,
              A = m.a.length; B < A; ++B)
                  N = m.c[m.a[B]],
                  3 != N.getState() && (y = q / r,
                  ca = Ve(this.U),
                  af(ca, y, -y),
                  bf(ca, -x[0], -x[3]),
                  Gj(N, n, m.wa.toString()).Ka(u, ca, 0, {}, p, !0));
          Hi.prototype.Sf.apply(this, arguments)
      }
  }
  ;
  k.Fa = function(a, b, c, d, e) {
      var f = b.viewState.resolution
        , g = b.viewState.rotation;
      c = void 0 == c ? 0 : c;
      var h = this.a
        , l = {}
        , m = this.g;
      b = h.ia().Xa(b.viewState.projection);
      var n;
      var p = 0;
      for (n = m.length; p < n; ++p) {
          var q = m[p];
          var r = q.wa;
          r = b.Ja(r, this.B);
          var u = Ra(r, c * f, u);
          if (Ua(u, a)) {
              r = 0;
              for (var x = q.a.length; r < x; ++r) {
                  var B = q.c[q.a[r]];
                  if (3 != B.getState()) {
                      B = Gj(B, h, q.wa.toString());
                      var A = A || B.Fa(a, f, g, c, {}, function(a) {
                          var b = w(a).toString();
                          if (!(b in l))
                              return l[b] = !0,
                              d.call(e, a, h)
                      })
                  }
              }
          }
      }
      return A
  }
  ;
  k.Si = function() {
      hi(this)
  }
  ;
  k.pf = function(a, b, c) {
      var d = this.a
        , e = d.ia()
        , f = d.v
        , g = Ej[f]
        , h = b.pixelRatio
        , l = b.viewState.rotation
        , m = b.size
        , n = Math.round(h * m[0] / 2);
      h = Math.round(h * m[1] / 2);
      m = this.g;
      e = e.Xa(b.viewState.projection);
      for (var p = [], q = [], r = m.length - 1; 0 <= r; --r) {
          var u = m[r];
          if (5 != u.getState())
              for (var x = u.wa, B = e.Ja(x)[0] - e.Ja(u.O)[0], A = 0, y = u.a.length; A < y; ++A) {
                  var N = u.c[u.a[A]];
                  if (3 != N.getState()) {
                      var ca = Gj(N, d, x.toString()), la;
                      if (!(la = "vector" == f))
                          a: {
                              la = void 0;
                              for (la in ca.a)
                                  for (var fa = ca.a[la], va = 0, ra = g.length; va < ra; ++va)
                                      if (g[va]in fa) {
                                          la = !0;
                                          break a
                                      }
                              la = !1
                          }
                      if (la) {
                          N = N.wa[0];
                          la = ri(this, b, B);
                          fa = tj(ca, la);
                          a.save();
                          a.globalAlpha = c.opacity;
                          Mh(a, -l, n, h);
                          va = 0;
                          for (ra = p.length; va < ra; ++va) {
                              var T = p[va];
                              N < q[va] && (a.beginPath(),
                              a.moveTo(fa[0], fa[1]),
                              a.lineTo(fa[2], fa[3]),
                              a.lineTo(fa[4], fa[5]),
                              a.lineTo(fa[6], fa[7]),
                              a.moveTo(T[6], T[7]),
                              a.lineTo(T[4], T[5]),
                              a.lineTo(T[2], T[3]),
                              a.lineTo(T[0], T[1]),
                              a.clip())
                          }
                          ca.Ka(a, la, l, {}, g);
                          a.restore();
                          p.push(fa);
                          q.push(N)
                      }
                  }
              }
      }
      Hi.prototype.pf.apply(this, arguments)
  }
  ;
  mg("MAP_RENDERER", Fi);
  ng([vi, Hi, Aj, Cj]);
  function H(a) {
      a = tb({}, a);
      delete a.renderer;
      a.controls || (a.controls = xg());
      a.interactions || (a.interactions = Hh());
      G.call(this, a)
  }
  v(H, G);
  function Hj(a) {
      a = a ? a : {};
      this.c = void 0 !== a.className ? a.className : "ol-full-screen";
      var b = void 0 !== a.label ? a.label : "\u2922";
      this.l = "string" === typeof b ? document.createTextNode(b) : b;
      b = void 0 !== a.labelActive ? a.labelActive : "\u00d7";
      this.o = "string" === typeof b ? document.createTextNode(b) : b;
      var c = a.tipLabel ? a.tipLabel : "Toggle full-screen";
      b = document.createElement("button");
      b.className = this.c + "-" + Ij();
      b.setAttribute("type", "button");
      b.title = c;
      b.appendChild(this.l);
      z(b, "click", this.D, this);
      c = document.createElement("div");
      c.className = this.c + " ol-unselectable ol-control " + (Jj() ? "" : "ol-unsupported");
      c.appendChild(b);
      qg.call(this, {
          element: c,
          target: a.target
      });
      this.C = void 0 !== a.keys ? a.keys : !1;
      this.j = a.source
  }
  v(Hj, qg);
  Hj.prototype.D = function(a) {
      a.preventDefault();
      Jj() && (a = this.a) && (Ij() ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : (a = this.j ? "string" === typeof this.j ? document.getElementById(this.j) : this.j : a.wc(),
      this.C ? a.mozRequestFullScreenWithKeys ? a.mozRequestFullScreenWithKeys() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : Kj(a) : Kj(a)))
  }
  ;
  Hj.prototype.s = function() {
      var a = this.element.firstElementChild
        , b = this.a;
      Ij() ? (a.className = this.c + "-true",
      eg(this.o, this.l)) : (a.className = this.c + "-false",
      eg(this.l, this.o));
      b && b.Gc()
  }
  ;
  Hj.prototype.setMap = function(a) {
      qg.prototype.setMap.call(this, a);
      a && this.v.push(z(document, Lj(), this.s, this))
  }
  ;
  function Jj() {
      var a = document.body;
      return !!(a.webkitRequestFullscreen || a.mozRequestFullScreen && document.mozFullScreenEnabled || a.msRequestFullscreen && document.msFullscreenEnabled || a.requestFullscreen && document.fullscreenEnabled)
  }
  function Ij() {
      return !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
  }
  function Kj(a) {
      a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
  }
  var Lj = function() {
      var a;
      return function() {
          if (!a) {
              var b = document.body;
              b.webkitRequestFullscreen ? a = "webkitfullscreenchange" : b.mozRequestFullScreen ? a = "mozfullscreenchange" : b.msRequestFullscreen ? a = "MSFullscreenChange" : b.requestFullscreen && (a = "fullscreenchange")
          }
          return a
      }
  }();
  function Mj(a) {
      a = a ? a : {};
      var b = document.createElement("DIV");
      b.className = void 0 !== a.className ? a.className : "ol-mouse-position";
      qg.call(this, {
          element: b,
          render: a.render ? a.render : Nj,
          target: a.target
      });
      z(this, Yc(Oj), this.hn, this);
      a.coordinateFormat && this.yj(a.coordinateFormat);
      a.projection && this.pi(a.projection);
      this.s = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";
      this.o = b.innerHTML;
      this.l = this.j = this.c = null
  }
  v(Mj, qg);
  function Nj(a) {
      a = a.frameState;
      a ? this.c != a.viewState.projection && (this.c = a.viewState.projection,
      this.j = null) : this.c = null;
      Pj(this, this.l)
  }
  k = Mj.prototype;
  k.hn = function() {
      this.j = null
  }
  ;
  k.Nh = function() {
      return this.get(Qj)
  }
  ;
  k.oi = function() {
      return this.get(Oj)
  }
  ;
  k.Tl = function(a) {
      this.l = this.a.od(a);
      Pj(this, this.l)
  }
  ;
  k.Ul = function() {
      Pj(this, null);
      this.l = null
  }
  ;
  k.setMap = function(a) {
      qg.prototype.setMap.call(this, a);
      a && (a = a.a,
      this.v.push(z(a, "mousemove", this.Tl, this), z(a, "mouseout", this.Ul, this)))
  }
  ;
  k.yj = function(a) {
      this.set(Qj, a)
  }
  ;
  k.pi = function(a) {
      this.set(Oj, Zb(a))
  }
  ;
  function Pj(a, b) {
      var c = a.s;
      if (b && a.c) {
          if (!a.j) {
              var d = a.oi();
              a.j = d ? $b(a.c, d) : jc
          }
          if (b = a.a.Na(b))
              a.j(b, b),
              c = (c = a.Nh()) ? c(b) : b.toString()
      }
      a.o && c == a.o || (a.element.innerHTML = c,
      a.o = c)
  }
  var Oj = "projection"
    , Qj = "coordinateFormat";
  function Rj(a) {
      Wc.call(this);
      this.g = a.id;
      this.o = void 0 !== a.insertFirst ? a.insertFirst : !0;
      this.v = void 0 !== a.stopEvent ? a.stopEvent : !0;
      this.c = document.createElement("DIV");
      this.c.className = "ol-overlay-container ol-selectable";
      this.c.style.position = "absolute";
      this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;
      this.j = a.autoPanAnimation || {};
      this.l = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;
      this.a = {
          Ce: "",
          Te: "",
          xf: "",
          Ef: "",
          visible: !0
      };
      this.i = null;
      z(this, Yc(Sj), this.Hl, this);
      z(this, Yc(Tj), this.Rl, this);
      z(this, Yc(Uj), this.Vl, this);
      z(this, Yc(Vj), this.Xl, this);
      z(this, Yc(Wj), this.Yl, this);
      void 0 !== a.element && this.zj(a.element);
      this.Ej(void 0 !== a.offset ? a.offset : [0, 0]);
      this.Hj(void 0 !== a.positioning ? a.positioning : "top-left");
      void 0 !== a.position && this.Xe(a.position)
  }
  v(Rj, Wc);
  k = Rj.prototype;
  k.Vd = function() {
      return this.get(Sj)
  }
  ;
  k.Tm = function() {
      return this.g
  }
  ;
  k.We = function() {
      return this.get(Tj)
  }
  ;
  k.Th = function() {
      return this.get(Uj)
  }
  ;
  k.mi = function() {
      return this.get(Vj)
  }
  ;
  k.Uh = function() {
      return this.get(Wj)
  }
  ;
  k.Hl = function() {
      for (var a = this.c; a.lastChild; )
          a.removeChild(a.lastChild);
      (a = this.Vd()) && this.c.appendChild(a)
  }
  ;
  k.Rl = function() {
      this.i && (fg(this.c),
      Hc(this.i),
      this.i = null);
      var a = this.We();
      a && (this.i = z(a, "postrender", this.render, this),
      Xj(this),
      a = this.v ? a.v : a.s,
      this.o ? a.insertBefore(this.c, a.childNodes[0] || null) : a.appendChild(this.c))
  }
  ;
  k.render = function() {
      Xj(this)
  }
  ;
  k.Vl = function() {
      Xj(this)
  }
  ;
  k.Xl = function() {
      Xj(this);
      if (this.get(Vj) && this.autoPan) {
          var a = this.We();
          if (a && a.wc()) {
              var b = Yj(a.wc(), a.zb())
                , c = this.Vd()
                , d = c.offsetWidth
                , e = getComputedStyle(c);
              d += parseInt(e.marginLeft, 10) + parseInt(e.marginRight, 10);
              e = c.offsetHeight;
              var f = getComputedStyle(c);
              e += parseInt(f.marginTop, 10) + parseInt(f.marginBottom, 10);
              var g = Yj(c, [d, e]);
              c = this.l;
              Wa(b, g) || (d = g[0] - b[0],
              e = b[2] - g[2],
              f = g[1] - b[1],
              g = b[3] - g[3],
              b = [0, 0],
              0 > d ? b[0] = d - c : 0 > e && (b[0] = Math.abs(e) + c),
              0 > f ? b[1] = f - c : 0 > g && (b[1] = Math.abs(g) + c),
              0 === b[0] && 0 === b[1]) || (c = a.$().xa(),
              c = a.Ha(c),
              b = [c[0] + b[0], c[1] + b[1]],
              a.$().animate({
                  center: a.Na(b),
                  duration: this.j.duration,
                  easing: this.j.easing
              }))
          }
      }
  }
  ;
  k.Yl = function() {
      Xj(this)
  }
  ;
  k.zj = function(a) {
      this.set(Sj, a)
  }
  ;
  k.setMap = function(a) {
      this.set(Tj, a)
  }
  ;
  k.Ej = function(a) {
      this.set(Uj, a)
  }
  ;
  k.Xe = function(a) {
      this.set(Vj, a)
  }
  ;
  function Yj(a, b) {
      var c = a.getBoundingClientRect();
      a = c.left + window.pageXOffset;
      c = c.top + window.pageYOffset;
      return [a, c, a + b[0], c + b[1]]
  }
  k.Hj = function(a) {
      this.set(Wj, a)
  }
  ;
  function Zj(a, b) {
      a.a.visible !== b && (a.c.style.display = b ? "" : "none",
      a.a.visible = b)
  }
  function Xj(a) {
      var b = a.We()
        , c = a.mi();
      if (b && b.c && c) {
          c = b.Ha(c);
          var d = b.zb();
          b = a.c.style;
          var e = a.Th()
            , f = a.Uh();
          Zj(a, !0);
          var g = e[0];
          e = e[1];
          if ("bottom-right" == f || "center-right" == f || "top-right" == f)
              "" !== a.a.Te && (a.a.Te = b.left = ""),
              g = Math.round(d[0] - c[0] - g) + "px",
              a.a.xf != g && (a.a.xf = b.right = g);
          else {
              "" !== a.a.xf && (a.a.xf = b.right = "");
              if ("bottom-center" == f || "center-center" == f || "top-center" == f)
                  g -= a.c.offsetWidth / 2;
              g = Math.round(c[0] + g) + "px";
              a.a.Te != g && (a.a.Te = b.left = g)
          }
          if ("bottom-left" == f || "bottom-center" == f || "bottom-right" == f)
              "" !== a.a.Ef && (a.a.Ef = b.top = ""),
              c = Math.round(d[1] - c[1] - e) + "px",
              a.a.Ce != c && (a.a.Ce = b.bottom = c);
          else {
              "" !== a.a.Ce && (a.a.Ce = b.bottom = "");
              if ("center-left" == f || "center-center" == f || "center-right" == f)
                  e -= a.c.offsetHeight / 2;
              c = Math.round(c[1] + e) + "px";
              a.a.Ef != c && (a.a.Ef = b.top = c)
          }
      } else
          Zj(a, !1)
  }
  var Sj = "element"
    , Tj = "map"
    , Uj = "offset"
    , Vj = "position"
    , Wj = "positioning";
  function ak(a) {
      function b(a) {
          a = h.Wd(a);
          l.a.$().rb(a);
          window.removeEventListener("mousemove", c);
          window.removeEventListener("mouseup", b)
      }
      function c(a) {
          a = h.Wd({
              clientX: a.clientX - n.offsetWidth / 2,
              clientY: a.clientY + n.offsetHeight / 2
          });
          m.Xe(a)
      }
      a = a ? a : {};
      this.j = void 0 !== a.collapsed ? a.collapsed : !0;
      this.l = void 0 !== a.collapsible ? a.collapsible : !0;
      this.l || (this.j = !1);
      var d = void 0 !== a.className ? a.className : "ol-overviewmap"
        , e = void 0 !== a.tipLabel ? a.tipLabel : "Overview map"
        , f = void 0 !== a.collapseLabel ? a.collapseLabel : "\u00ab";
      "string" === typeof f ? (this.s = document.createElement("span"),
      this.s.textContent = f) : this.s = f;
      f = void 0 !== a.label ? a.label : "\u00bb";
      "string" === typeof f ? (this.C = document.createElement("span"),
      this.C.textContent = f) : this.C = f;
      var g = this.l && !this.j ? this.s : this.C;
      f = document.createElement("button");
      f.setAttribute("type", "button");
      f.title = e;
      f.appendChild(g);
      z(f, "click", this.ln, this);
      this.D = document.createElement("DIV");
      this.D.className = "ol-overviewmap-map";
      var h = this.c = new G({
          controls: new C,
          interactions: new C,
          view: a.view
      });
      a.layers && a.layers.forEach(function(a) {
          h.Ae(a)
      }, this);
      e = document.createElement("DIV");
      e.className = "ol-overviewmap-box";
      e.style.boxSizing = "border-box";
      this.o = new Rj({
          position: [0, 0],
          positioning: "bottom-left",
          element: e
      });
      this.c.Be(this.o);
      e = document.createElement("div");
      e.className = d + " ol-unselectable ol-control" + (this.j && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible");
      e.appendChild(this.D);
      e.appendChild(f);
      qg.call(this, {
          element: e,
          render: a.render ? a.render : bk,
          target: a.target
      });
      var l = this
        , m = this.o
        , n = this.o.Vd();
      n.addEventListener("mousedown", function() {
          window.addEventListener("mousemove", c);
          window.addEventListener("mouseup", b)
      })
  }
  v(ak, qg);
  k = ak.prototype;
  k.setMap = function(a) {
      var b = this.a;
      a !== b && (b && ((b = b.$()) && Nc(b, Yc("rotation"), this.Re, this),
      this.c.vd(null)),
      qg.prototype.setMap.call(this, a),
      a && (this.c.vd(this.D),
      this.v.push(z(a, "propertychange", this.Sl, this)),
      0 === this.c.Ye().gc() && this.c.zf(a.dc()),
      a = a.$())) && (z(a, Yc("rotation"), this.Re, this),
      Wf(a) && (this.c.Gc(),
      ck(this)))
  }
  ;
  k.Sl = function(a) {
      "view" === a.key && ((a = a.oldValue) && Nc(a, Yc("rotation"), this.Re, this),
      a = this.a.$(),
      z(a, Yc("rotation"), this.Re, this))
  }
  ;
  k.Re = function() {
      this.c.$().de(this.a.$().Pa())
  }
  ;
  function bk() {
      var a = this.a
        , b = this.c;
      if (a.c && b.c) {
          var c = a.zb();
          a = a.$().jd(c);
          var d = b.zb();
          c = b.$().jd(d);
          var e = b.Ha(ib(a))
            , f = b.Ha(gb(a));
          b = Math.abs(e[0] - f[0]);
          e = Math.abs(e[1] - f[1]);
          f = d[0];
          d = d[1];
          b < .1 * f || e < .1 * d || b > .75 * f || e > .75 * d ? ck(this) : Wa(c, a) || (a = this.c,
          c = this.a.$(),
          a.$().rb(c.xa()))
      }
      dk(this)
  }
  function ck(a) {
      var b = a.a;
      a = a.c;
      var c = b.zb();
      b = b.$().jd(c);
      a = a.$();
      rb(b, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));
      a.Uf(b)
  }
  function dk(a) {
      var b = a.a
        , c = a.c;
      if (b.c && c.c) {
          var d = b.zb()
            , e = b.$()
            , f = c.$();
          c = e.Pa();
          b = a.o;
          var g = a.o.Vd()
            , h = e.jd(d);
          d = f.Oa();
          e = fb(h);
          f = hb(h);
          if (a = a.a.$().xa()) {
              var l = [e[0] - a[0], e[1] - a[1]];
              Ee(l, c);
              ye(l, a)
          }
          b.Xe(l);
          g && (g.style.width = Math.abs((e[0] - f[0]) / d) + "px",
          g.style.height = Math.abs((f[1] - e[1]) / d) + "px")
      }
  }
  k.ln = function(a) {
      a.preventDefault();
      ek(this)
  }
  ;
  function ek(a) {
      a.element.classList.toggle("ol-collapsed");
      a.j ? eg(a.s, a.C) : eg(a.C, a.s);
      a.j = !a.j;
      var b = a.c;
      a.j || b.c || (b.Gc(),
      ck(a),
      Mc(b, "postrender", function() {
          dk(this)
      }, a))
  }
  k.kn = function() {
      return this.l
  }
  ;
  k.nn = function(a) {
      this.l !== a && (this.l = a,
      this.element.classList.toggle("ol-uncollapsible"),
      !a && this.j && ek(this))
  }
  ;
  k.mn = function(a) {
      this.l && this.j !== a && ek(this)
  }
  ;
  k.jn = function() {
      return this.j
  }
  ;
  k.ol = function() {
      return this.c
  }
  ;
  function fk(a) {
      a = a ? a : {};
      var b = void 0 !== a.className ? a.className : "ol-scale-line";
      this.l = document.createElement("DIV");
      this.l.className = b + "-inner";
      this.c = document.createElement("DIV");
      this.c.className = b + " ol-unselectable";
      this.c.appendChild(this.l);
      this.s = null;
      this.o = void 0 !== a.minWidth ? a.minWidth : 64;
      this.j = !1;
      this.B = void 0;
      this.C = "";
      qg.call(this, {
          element: this.c,
          render: a.render ? a.render : gk,
          target: a.target
      });
      z(this, Yc(hk), this.U, this);
      this.I(a.units || "metric")
  }
  v(fk, qg);
  var ik = [1, 2, 5];
  fk.prototype.D = function() {
      return this.get(hk)
  }
  ;
  function gk(a) {
      (a = a.frameState) ? this.s = a.viewState : this.s = null;
      jk(this)
  }
  fk.prototype.U = function() {
      jk(this)
  }
  ;
  fk.prototype.I = function(a) {
      this.set(hk, a)
  }
  ;
  function jk(a) {
      var b = a.s;
      if (b) {
          var c = b.center
            , d = b.projection
            , e = a.D();
          b = Yb(d, b.resolution, c, "degrees" == e ? "degrees" : "m");
          var f = a.o * b;
          c = "";
          "degrees" == e ? (c = Eb.degrees,
          "degrees" == d.a ? f *= c : b /= c,
          f < c / 60 ? (c = "\u2033",
          b *= 3600) : f < c ? (c = "\u2032",
          b *= 60) : c = "\u00b0") : "imperial" == e ? .9144 > f ? (c = "in",
          b /= .0254) : 1609.344 > f ? (c = "ft",
          b /= .3048) : (c = "mi",
          b /= 1609.344) : "nautical" == e ? (b /= 1852,
          c = "nm") : "metric" == e ? .001 > f ? (c = "\u03bcm",
          b *= 1E6) : 1 > f ? (c = "mm",
          b *= 1E3) : 1E3 > f ? c = "m" : (c = "km",
          b /= 1E3) : "us" == e ? .9144 > f ? (c = "in",
          b *= 39.37) : 1609.344 > f ? (c = "ft",
          b /= .30480061) : (c = "mi",
          b /= 1609.3472) : wa(!1, 33);
          for (e = 3 * Math.floor(Math.log(a.o * b) / Math.log(10)); ; ) {
              f = ik[(e % 3 + 3) % 3] * Math.pow(10, Math.floor(e / 3));
              d = Math.round(f / b);
              if (isNaN(d)) {
                  a.c.style.display = "none";
                  a.j = !1;
                  return
              }
              if (d >= a.o)
                  break;
              ++e
          }
          b = f + " " + c;
          a.C != b && (a.l.innerHTML = b,
          a.C = b);
          a.B != d && (a.l.style.width = d + "px",
          a.B = d);
          a.j || (a.c.style.display = "",
          a.j = !0)
      } else
          a.j && (a.c.style.display = "none",
          a.j = !1)
  }
  var hk = "units";
  function kk(a) {
      a = a ? a : {};
      this.c = void 0;
      this.j = lk;
      this.C = this.o = 0;
      this.I = null;
      this.ta = !1;
      this.U = void 0 !== a.duration ? a.duration : 200;
      var b = void 0 !== a.className ? a.className : "ol-zoomslider"
        , c = document.createElement("button");
      c.setAttribute("type", "button");
      c.className = b + "-thumb ol-unselectable";
      var d = document.createElement("div");
      d.className = b + " ol-unselectable ol-control";
      d.appendChild(c);
      this.l = new Zd(d);
      z(this.l, "pointerdown", this.Gl, this);
      z(this.l, "pointermove", this.El, this);
      z(this.l, "pointerup", this.Fl, this);
      z(d, "click", this.Dl, this);
      z(c, "click", Sc);
      qg.call(this, {
          element: d,
          render: a.render ? a.render : mk
      })
  }
  v(kk, qg);
  kk.prototype.ka = function() {
      Qc(this.l);
      qg.prototype.ka.call(this)
  }
  ;
  var lk = 0;
  k = kk.prototype;
  k.setMap = function(a) {
      qg.prototype.setMap.call(this, a);
      a && a.render()
  }
  ;
  function mk(a) {
      if (a.frameState) {
          if (!this.ta) {
              var b = this.element
                , c = b.offsetWidth
                , d = b.offsetHeight
                , e = b.firstElementChild
                , f = getComputedStyle(e);
              b = e.offsetWidth + parseFloat(f.marginRight) + parseFloat(f.marginLeft);
              e = e.offsetHeight + parseFloat(f.marginTop) + parseFloat(f.marginBottom);
              this.I = [b, e];
              c > d ? (this.j = 1,
              this.C = c - b) : (this.j = lk,
              this.o = d - e);
              this.ta = !0
          }
          a = a.frameState.viewState.resolution;
          a !== this.c && (this.c = a,
          nk(this, a))
      }
  }
  k.Dl = function(a) {
      var b = this.a.$();
      a = ok(this, Da(1 === this.j ? (a.offsetX - this.I[0] / 2) / this.C : (a.offsetY - this.I[1] / 2) / this.o, 0, 1));
      b.animate({
          resolution: b.constrainResolution(a),
          duration: this.U,
          easing: Me
      })
  }
  ;
  k.Gl = function(a) {
      this.s || a.b.target !== this.element.firstElementChild || (Xf(this.a.$(), 1, 1),
      this.D = a.clientX,
      this.B = a.clientY,
      this.s = !0)
  }
  ;
  k.El = function(a) {
      if (this.s) {
          var b = this.element.firstElementChild;
          this.c = ok(this, Da(1 === this.j ? (a.clientX - this.D + parseInt(b.style.left, 10)) / this.C : (a.clientY - this.B + parseInt(b.style.top, 10)) / this.o, 0, 1));
          this.a.$().ad(this.c);
          nk(this, this.c);
          this.D = a.clientX;
          this.B = a.clientY
      }
  }
  ;
  k.Fl = function() {
      if (this.s) {
          var a = this.a.$();
          Xf(a, 1, -1);
          a.animate({
              resolution: a.constrainResolution(this.c),
              duration: this.U,
              easing: Me
          });
          this.s = !1;
          this.B = this.D = void 0
      }
  }
  ;
  function nk(a, b) {
      b = 1 - cg(a.a.$())(b);
      var c = a.element.firstElementChild;
      1 == a.j ? c.style.left = a.C * b + "px" : c.style.top = a.o * b + "px"
  }
  function ok(a, b) {
      return bg(a.a.$())(1 - b)
  }
  ;function rk(a) {
      a = a ? a : {};
      this.c = a.extent ? a.extent : null;
      var b = void 0 !== a.className ? a.className : "ol-zoom-extent"
        , c = void 0 !== a.label ? a.label : "E"
        , d = void 0 !== a.tipLabel ? a.tipLabel : "Fit to extent"
        , e = document.createElement("button");
      e.setAttribute("type", "button");
      e.title = d;
      e.appendChild("string" === typeof c ? document.createTextNode(c) : c);
      z(e, "click", this.j, this);
      c = document.createElement("div");
      c.className = b + " ol-unselectable ol-control";
      c.appendChild(e);
      qg.call(this, {
          element: c,
          target: a.target
      })
  }
  v(rk, qg);
  rk.prototype.j = function(a) {
      a.preventDefault();
      a = this.a.$();
      var b = this.c ? this.c : a.v.G();
      a.Uf(b)
  }
  ;
  function sk(a) {
      Wc.call(this);
      a = a ? a : {};
      this.a = null;
      z(this, Yc(tk), this.Gm, this);
      this.qg(void 0 !== a.tracking ? a.tracking : !1)
  }
  v(sk, Wc);
  k = sk.prototype;
  k.ka = function() {
      this.qg(!1);
      Wc.prototype.ka.call(this)
  }
  ;
  k.jp = function(a) {
      if (null !== a.alpha) {
          var b = Ia(a.alpha);
          this.set(uk, b);
          "boolean" === typeof a.absolute && a.absolute ? this.set(vk, b) : "number" === typeof a.webkitCompassHeading && -1 != a.webkitCompassAccuracy && this.set(vk, Ia(a.webkitCompassHeading))
      }
      null !== a.beta && this.set(wk, Ia(a.beta));
      null !== a.gamma && this.set(xk, Ia(a.gamma));
      this.u()
  }
  ;
  k.Em = function() {
      return this.get(uk)
  }
  ;
  k.Sk = function() {
      return this.get(wk)
  }
  ;
  k.Yk = function() {
      return this.get(xk)
  }
  ;
  k.Fm = function() {
      return this.get(vk)
  }
  ;
  k.ii = function() {
      return this.get(tk)
  }
  ;
  k.Gm = function() {
      if (sd) {
          var a = this.ii();
          a && !this.a ? this.a = z(window, "deviceorientation", this.jp, this) : a || null === this.a || (Hc(this.a),
          this.a = null)
      }
  }
  ;
  k.qg = function(a) {
      this.set(tk, a)
  }
  ;
  var uk = "alpha"
    , wk = "beta"
    , xk = "gamma"
    , vk = "heading"
    , tk = "tracking";
  function yk(a) {
      this.i = a.opacity;
      this.o = a.rotateWithView;
      this.g = a.rotation;
      this.a = a.scale;
      this.v = a.snapToPixel
  }
  k = yk.prototype;
  k.hf = function() {
      return this.i
  }
  ;
  k.jf = function() {
      return this.o
  }
  ;
  k.kf = function() {
      return this.g
  }
  ;
  k.lf = function() {
      return this.a
  }
  ;
  k.Le = function() {
      return this.v
  }
  ;
  k.Bd = function(a) {
      this.i = a
  }
  ;
  k.mf = function(a) {
      this.g = a
  }
  ;
  k.Cd = function(a) {
      this.a = a
  }
  ;
  function zk(a) {
      this.C = this.s = this.c = null;
      this.Wa = void 0 !== a.fill ? a.fill : null;
      this.ra = [0, 0];
      this.l = a.points;
      this.b = void 0 !== a.radius ? a.radius : a.radius1;
      this.f = a.radius2;
      this.j = void 0 !== a.angle ? a.angle : 0;
      this.Ta = void 0 !== a.stroke ? a.stroke : null;
      this.B = this.sa = this.D = null;
      this.O = a.atlasManager;
      Ak(this, this.O);
      yk.call(this, {
          opacity: 1,
          rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1,
          rotation: void 0 !== a.rotation ? a.rotation : 0,
          scale: 1,
          snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0
      })
  }
  v(zk, yk);
  k = zk.prototype;
  k.clone = function() {
      var a = new zk({
          fill: this.Ca() ? this.Ca().clone() : void 0,
          points: this.l,
          radius: this.b,
          radius2: this.f,
          angle: this.j,
          snapToPixel: this.v,
          stroke: this.Da() ? this.Da().clone() : void 0,
          rotation: this.g,
          rotateWithView: this.o,
          atlasManager: this.O
      });
      a.Bd(this.i);
      a.Cd(this.a);
      return a
  }
  ;
  k.Oc = function() {
      return this.D
  }
  ;
  k.cj = function() {
      return this.j
  }
  ;
  k.Ca = function() {
      return this.Wa
  }
  ;
  k.Cg = function() {
      return this.C
  }
  ;
  k.Y = function() {
      return this.s
  }
  ;
  k.Ie = function() {
      return this.B
  }
  ;
  k.gf = function() {
      return 2
  }
  ;
  k.Vc = function() {
      return this.ra
  }
  ;
  k.dj = function() {
      return this.l
  }
  ;
  k.ej = function() {
      return this.b
  }
  ;
  k.Vh = function() {
      return this.f
  }
  ;
  k.kc = function() {
      return this.sa
  }
  ;
  k.Da = function() {
      return this.Ta
  }
  ;
  k.di = function() {}
  ;
  k.load = function() {}
  ;
  k.Qj = function() {}
  ;
  function Ak(a, b) {
      var c = ""
        , d = ""
        , e = 0
        , f = null
        , g = 0
        , h = 0;
      if (a.Ta) {
          var l = a.Ta.b;
          null === l && (l = Lh);
          l = Th(l);
          h = a.Ta.c;
          void 0 === h && (h = 1);
          f = a.Ta.f;
          g = a.Ta.i;
          qd || (f = null,
          g = 0);
          d = a.Ta.j;
          void 0 === d && (d = "round");
          c = a.Ta.g;
          void 0 === c && (c = "round");
          e = a.Ta.l;
          void 0 === e && (e = 10)
      }
      var m = 2 * (a.b + h) + 1;
      c = {
          strokeStyle: l,
          Oj: h,
          size: m,
          lineCap: c,
          lineDash: f,
          lineDashOffset: g,
          lineJoin: d,
          miterLimit: e
      };
      if (void 0 === b) {
          var n = dg(m, m);
          a.s = n.canvas;
          b = m = a.s.width;
          a.Gh(c, n, 0, 0);
          a.Wa ? a.C = a.s : (n = dg(c.size, c.size),
          a.C = n.canvas,
          a.Fh(c, n, 0, 0))
      } else
          m = Math.round(m),
          (d = !a.Wa) && (n = a.Fh.bind(a, c)),
          a.Ta ? (e = a.Ta,
          void 0 === e.a && (e.a = "s",
          e.a = e.b ? "string" === typeof e.b ? e.a + e.b : e.a + w(e.b).toString() : e.a + "-",
          e.a += "," + (void 0 !== e.g ? e.g.toString() : "-") + "," + (e.f ? e.f.toString() : "-") + "," + (void 0 !== e.i ? e.i : "-") + "," + (void 0 !== e.j ? e.j : "-") + "," + (void 0 !== e.l ? e.l.toString() : "-") + "," + (void 0 !== e.c ? e.c.toString() : "-")),
          e = e.a) : e = "-",
          a.Wa ? (f = a.Wa,
          void 0 === f.a && (f.a = f.b instanceof CanvasPattern || f.b instanceof CanvasGradient ? w(f.b).toString() : "f" + (f.b ? Rh(f.b) : "-")),
          f = f.a) : f = "-",
          a.c && e == a.c[1] && f == a.c[2] && a.b == a.c[3] && a.f == a.c[4] && a.j == a.c[5] && a.l == a.c[6] || (a.c = ["r" + e + f + (void 0 !== a.b ? a.b.toString() : "-") + (void 0 !== a.f ? a.f.toString() : "-") + (void 0 !== a.j ? a.j.toString() : "-") + (void 0 !== a.l ? a.l.toString() : "-"), e, f, a.b, a.f, a.j, a.l]),
          n = b.add(a.c[0], m, m, a.Gh.bind(a, c), n),
          a.s = n.image,
          a.ra = [n.offsetX, n.offsetY],
          b = n.image.width,
          a.C = d ? n.hm : a.s;
      a.D = [m / 2, m / 2];
      a.sa = [m, m];
      a.B = [b, b]
  }
  k.Gh = function(a, b, c, d) {
      b.setTransform(1, 0, 0, 1, 0, 0);
      b.translate(c, d);
      b.beginPath();
      var e = this.l;
      if (Infinity === e)
          b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
      else {
          var f = void 0 !== this.f ? this.f : this.b;
          f !== this.b && (e *= 2);
          for (c = 0; c <= e; c++) {
              d = 2 * c * Math.PI / e - Math.PI / 2 + this.j;
              var g = 0 === c % 2 ? this.b : f;
              b.lineTo(a.size / 2 + g * Math.cos(d), a.size / 2 + g * Math.sin(d))
          }
      }
      this.Wa && (c = this.Wa.b,
      null === c && (c = Jh),
      b.fillStyle = Th(c),
      b.fill());
      this.Ta && (b.strokeStyle = a.strokeStyle,
      b.lineWidth = a.Oj,
      a.lineDash && (b.setLineDash(a.lineDash),
      b.lineDashOffset = a.lineDashOffset),
      b.lineCap = a.lineCap,
      b.lineJoin = a.lineJoin,
      b.miterLimit = a.miterLimit,
      b.stroke());
      b.closePath()
  }
  ;
  k.Fh = function(a, b, c, d) {
      b.setTransform(1, 0, 0, 1, 0, 0);
      b.translate(c, d);
      b.beginPath();
      c = this.l;
      if (Infinity === c)
          b.arc(a.size / 2, a.size / 2, this.b, 0, 2 * Math.PI, !0);
      else {
          d = void 0 !== this.f ? this.f : this.b;
          d !== this.b && (c *= 2);
          var e;
          for (e = 0; e <= c; e++) {
              var f = 2 * e * Math.PI / c - Math.PI / 2 + this.j;
              var g = 0 === e % 2 ? this.b : d;
              b.lineTo(a.size / 2 + g * Math.cos(f), a.size / 2 + g * Math.sin(f))
          }
      }
      b.fillStyle = Jh;
      b.fill();
      this.Ta && (b.strokeStyle = a.strokeStyle,
      b.lineWidth = a.Oj,
      a.lineDash && (b.setLineDash(a.lineDash),
      b.lineDashOffset = a.lineDashOffset),
      b.stroke());
      b.closePath()
  }
  ;
  function Bk(a) {
      a = a || {};
      zk.call(this, {
          points: Infinity,
          fill: a.fill,
          radius: a.radius,
          snapToPixel: a.snapToPixel,
          stroke: a.stroke,
          atlasManager: a.atlasManager
      })
  }
  v(Bk, zk);
  Bk.prototype.clone = function() {
      var a = new Bk({
          fill: this.Ca() ? this.Ca().clone() : void 0,
          stroke: this.Da() ? this.Da().clone() : void 0,
          radius: this.b,
          snapToPixel: this.v,
          atlasManager: this.O
      });
      a.Bd(this.i);
      a.Cd(this.a);
      return a
  }
  ;
  Bk.prototype.$c = function(a) {
      this.b = a;
      Ak(this, this.O)
  }
  ;
  function Ck(a) {
      a = a || {};
      this.b = void 0 !== a.color ? a.color : null;
      this.a = void 0
  }
  Ck.prototype.clone = function() {
      var a = this.b;
      return new Ck({
          color: a && a.slice ? a.slice() : a || void 0
      })
  }
  ;
  Ck.prototype.f = function() {
      return this.b
  }
  ;
  Ck.prototype.c = function(a) {
      this.b = a;
      this.a = void 0
  }
  ;
  function Dk(a) {
      a = a || {};
      this.b = void 0 !== a.color ? a.color : null;
      this.g = a.lineCap;
      this.f = void 0 !== a.lineDash ? a.lineDash : null;
      this.i = a.lineDashOffset;
      this.j = a.lineJoin;
      this.l = a.miterLimit;
      this.c = a.width;
      this.a = void 0
  }
  k = Dk.prototype;
  k.clone = function() {
      var a = this.b;
      return new Dk({
          color: a && a.slice ? a.slice() : a || void 0,
          lineCap: this.g,
          lineDash: this.f ? this.f.slice() : void 0,
          lineDashOffset: this.i,
          lineJoin: this.j,
          miterLimit: this.l,
          width: this.c
      })
  }
  ;
  k.Vo = function() {
      return this.b
  }
  ;
  k.dl = function() {
      return this.g
  }
  ;
  k.Wo = function() {
      return this.f
  }
  ;
  k.el = function() {
      return this.i
  }
  ;
  k.fl = function() {
      return this.j
  }
  ;
  k.ll = function() {
      return this.l
  }
  ;
  k.Xo = function() {
      return this.c
  }
  ;
  k.Yo = function(a) {
      this.b = a;
      this.a = void 0
  }
  ;
  k.eq = function(a) {
      this.g = a;
      this.a = void 0
  }
  ;
  k.setLineDash = function(a) {
      this.f = a;
      this.a = void 0
  }
  ;
  k.fq = function(a) {
      this.i = a;
      this.a = void 0
  }
  ;
  k.gq = function(a) {
      this.j = a;
      this.a = void 0
  }
  ;
  k.kq = function(a) {
      this.l = a;
      this.a = void 0
  }
  ;
  k.oq = function(a) {
      this.c = a;
      this.a = void 0
  }
  ;
  function Ek(a) {
      a = a || {};
      this.Nc = null;
      this.Za = Fk;
      void 0 !== a.geometry && this.Sa(a.geometry);
      this.Wa = void 0 !== a.fill ? a.fill : null;
      this.N = void 0 !== a.image ? a.image : null;
      this.lc = a.renderer ? a.renderer : null;
      this.Ta = void 0 !== a.stroke ? a.stroke : null;
      this.qa = void 0 !== a.text ? a.text : null;
      this.Uj = a.zIndex
  }
  k = Ek.prototype;
  k.clone = function() {
      var a = this.W();
      a && a.clone && (a = a.clone());
      return new Ek({
          geometry: a,
          fill: this.Ca() ? this.Ca().clone() : void 0,
          image: this.Y() ? this.Y().clone() : void 0,
          stroke: this.Da() ? this.Da().clone() : void 0,
          text: this.Ia() ? this.Ia().clone() : void 0,
          zIndex: this.za()
      })
  }
  ;
  k.Je = function() {
      return this.lc
  }
  ;
  k.mq = function(a) {
      this.lc = a
  }
  ;
  k.W = function() {
      return this.Nc
  }
  ;
  k.Zk = function() {
      return this.Za
  }
  ;
  k.Ca = function() {
      return this.Wa
  }
  ;
  k.yf = function(a) {
      this.Wa = a
  }
  ;
  k.Y = function() {
      return this.N
  }
  ;
  k.gh = function(a) {
      this.N = a
  }
  ;
  k.Da = function() {
      return this.Ta
  }
  ;
  k.Af = function(a) {
      this.Ta = a
  }
  ;
  k.Ia = function() {
      return this.qa
  }
  ;
  k.Ed = function(a) {
      this.qa = a
  }
  ;
  k.za = function() {
      return this.Uj
  }
  ;
  k.Sa = function(a) {
      "function" === typeof a ? this.Za = a : "string" === typeof a ? this.Za = function(b) {
          return b.get(a)
      }
      : a ? a && (this.Za = function() {
          return a
      }
      ) : this.Za = Fk;
      this.Nc = a
  }
  ;
  k.Xb = function(a) {
      this.Uj = a
  }
  ;
  function Gk(a) {
      if ("function" !== typeof a) {
          if (Array.isArray(a))
              var b = a;
          else
              wa(a instanceof Ek, 41),
              b = [a];
          a = function() {
              return b
          }
      }
      return a
  }
  var Hk = null;
  function Ik() {
      if (!Hk) {
          var a = new Ck({
              color: "rgba(255,255,255,0.4)"
          })
            , b = new Dk({
              color: "#3399CC",
              width: 1.25
          });
          Hk = [new Ek({
              image: new Bk({
                  fill: a,
                  stroke: b,
                  radius: 5
              }),
              fill: a,
              stroke: b
          })]
      }
      return Hk
  }
  function Jk() {
      var a = {}
        , b = [255, 255, 255, 1]
        , c = [0, 153, 255, 1];
      a.Polygon = [new Ek({
          fill: new Ck({
              color: [255, 255, 255, .5]
          })
      })];
      a.MultiPolygon = a.Polygon;
      a.LineString = [new Ek({
          stroke: new Dk({
              color: b,
              width: 5
          })
      }), new Ek({
          stroke: new Dk({
              color: c,
              width: 3
          })
      })];
      a.MultiLineString = a.LineString;
      a.Circle = a.Polygon.concat(a.LineString);
      a.Point = [new Ek({
          image: new Bk({
              radius: 6,
              fill: new Ck({
                  color: c
              }),
              stroke: new Dk({
                  color: b,
                  width: 1.5
              })
          }),
          zIndex: Infinity
      })];
      a.MultiPoint = a.Point;
      a.GeometryCollection = a.Polygon.concat(a.LineString, a.Point);
      return a
  }
  function Fk(a) {
      return a.W()
  }
  ;function Kk(a) {
      Wc.call(this);
      this.c = void 0;
      this.a = "geometry";
      this.g = null;
      this.j = void 0;
      this.i = null;
      z(this, Yc(this.a), this.Pe, this);
      void 0 !== a && (a instanceof ef || !a ? this.Sa(a) : this.H(a))
  }
  v(Kk, Wc);
  k = Kk.prototype;
  k.clone = function() {
      var a = new Kk(this.M());
      a.Zc(this.a);
      var b = this.W();
      b && a.Sa(b.clone());
      (b = this.g) && a.rg(b);
      return a
  }
  ;
  k.W = function() {
      return this.get(this.a)
  }
  ;
  k.Hm = function() {
      return this.c
  }
  ;
  k.$k = function() {
      return this.a
  }
  ;
  k.Im = function() {
      return this.g
  }
  ;
  k.bb = function() {
      return this.j
  }
  ;
  k.Il = function() {
      this.u()
  }
  ;
  k.Pe = function() {
      this.i && (Hc(this.i),
      this.i = null);
      var a = this.W();
      a && (this.i = z(a, "change", this.Il, this));
      this.u()
  }
  ;
  k.Sa = function(a) {
      this.set(this.a, a)
  }
  ;
  k.rg = function(a) {
      this.j = (this.g = a) ? Lk(a) : void 0;
      this.u()
  }
  ;
  k.mc = function(a) {
      this.c = a;
      this.u()
  }
  ;
  k.Zc = function(a) {
      Nc(this, Yc(this.a), this.Pe, this);
      this.a = a;
      z(this, Yc(this.a), this.Pe, this);
      this.Pe()
  }
  ;
  function Lk(a) {
      var b;
      if ("function" === typeof a)
          2 == a.length ? b = function(b) {
              return a(this, b)
          }
          : b = a;
      else {
          if (Array.isArray(a))
              var c = a;
          else
              wa(a instanceof Ek, 41),
              c = [a];
          b = function() {
              return c
          }
      }
      return b
  }
  ;var Mk = document.implementation.createDocument("", "", null);
  function Nk(a, b) {
      return Mk.createElementNS(a, b)
  }
  function Ok(a, b) {
      return Pk(a, b, []).join("")
  }
  function Pk(a, b, c) {
      if (a.nodeType == Node.CDATA_SECTION_NODE || a.nodeType == Node.TEXT_NODE)
          b ? c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : c.push(a.nodeValue);
      else
          for (a = a.firstChild; a; a = a.nextSibling)
              Pk(a, b, c);
      return c
  }
  function Qk(a) {
      return a instanceof Document
  }
  function Rk(a) {
      return a instanceof Node
  }
  function Sk(a) {
      return (new DOMParser).parseFromString(a, "application/xml")
  }
  function Tk(a, b) {
      return function(c, d) {
          c = a.call(b, c, d);
          void 0 !== c && ja(d[d.length - 1], c)
      }
  }
  function Uk(a, b) {
      return function(c, d) {
          c = a.call(void 0 !== b ? b : this, c, d);
          void 0 !== c && d[d.length - 1].push(c)
      }
  }
  function Vk(a, b) {
      return function(c, d) {
          c = a.call(void 0 !== b ? b : this, c, d);
          void 0 !== c && (d[d.length - 1] = c)
      }
  }
  function Wk(a) {
      return function(b, c) {
          var d = a.call(this, b, c);
          if (void 0 !== d) {
              c = c[c.length - 1];
              b = b.localName;
              var e;
              b in c ? e = c[b] : e = c[b] = [];
              e.push(d)
          }
      }
  }
  function I(a, b) {
      return function(c, d) {
          var e = a.call(this, c, d);
          void 0 !== e && (d[d.length - 1][void 0 !== b ? b : c.localName] = e)
      }
  }
  function J(a, b) {
      return function(c, d, e) {
          a.call(void 0 !== b ? b : this, c, d, e);
          e[e.length - 1].node.appendChild(c)
      }
  }
  function Xk(a) {
      var b, c;
      return function(d, e, f) {
          if (!b) {
              b = {};
              var g = {};
              g[d.localName] = a;
              b[d.namespaceURI] = g;
              c = Yk(d.localName)
          }
          Zk(b, c, e, f)
      }
  }
  function Yk(a, b) {
      return function(c, d, e) {
          c = d[d.length - 1].node;
          d = a;
          void 0 === d && (d = e);
          e = b;
          void 0 === b && (e = c.namespaceURI);
          return Nk(e, d)
      }
  }
  var $k = Yk();
  function al(a, b) {
      for (var c = b.length, d = Array(c), e = 0; e < c; ++e)
          d[e] = a[b[e]];
      return d
  }
  function K(a, b, c) {
      c = void 0 !== c ? c : {};
      var d;
      var e = 0;
      for (d = a.length; e < d; ++e)
          c[a[e]] = b;
      return c
  }
  function bl(a, b, c, d) {
      for (b = b.firstElementChild; b; b = b.nextElementSibling) {
          var e = a[b.namespaceURI];
          void 0 !== e && (e = e[b.localName]) && e.call(d, b, c)
      }
  }
  function L(a, b, c, d, e) {
      d.push(a);
      bl(b, c, d, e);
      return d.pop()
  }
  function Zk(a, b, c, d, e, f) {
      for (var g = (void 0 !== e ? e : c).length, h, l, m = 0; m < g; ++m)
          h = c[m],
          void 0 !== h && (l = b.call(f, h, d, void 0 !== e ? e[m] : void 0),
          void 0 !== l && a[l.namespaceURI][l.localName].call(f, l, h, d))
  }
  function cl(a, b, c, d, e, f, g) {
      e.push(a);
      Zk(b, c, d, e, f, g);
      e.pop()
  }
  ;function dl(a, b, c, d) {
      return function(e, f, g) {
          var h = new XMLHttpRequest;
          h.open("GET", "function" === typeof a ? a(e, f, g) : a, !0);
          "arraybuffer" == b.S() && (h.responseType = "arraybuffer");
          h.onload = function() {
              if (!h.status || 200 <= h.status && 300 > h.status) {
                  var a = b.S();
                  if ("json" == a || "text" == a)
                      var e = h.responseText;
                  else
                      "xml" == a ? (e = h.responseXML) || (e = Sk(h.responseText)) : "arraybuffer" == a && (e = h.response);
                  e ? c.call(this, b.Ma(e, {
                      featureProjection: g
                  }), b.pb(e), b.dg()) : d.call(this)
              } else
                  d.call(this)
          }
          .bind(this);
          h.onerror = function() {
              d.call(this)
          }
          .bind(this);
          h.send()
      }
  }
  function el(a, b) {
      return dl(a, b, function(a) {
          this.Ic(a)
      }, sa)
  }
  ;function fl() {
      this.i = this.defaultDataProjection = null
  }
  function gl(a, b, c) {
      var d;
      c && (d = {
          dataProjection: c.dataProjection ? c.dataProjection : a.pb(b),
          featureProjection: c.featureProjection
      });
      return hl(a, d)
  }
  function hl(a, b) {
      return tb({
          dataProjection: a.defaultDataProjection,
          featureProjection: a.i
      }, b)
  }
  fl.prototype.dg = function() {
      return null
  }
  ;
  function il(a, b, c) {
      var d = c ? Zb(c.featureProjection) : null, e = c ? Zb(c.dataProjection) : null, f;
      d && e && !hc(d, e) ? a instanceof ef ? f = (b ? a.clone() : a).hb(b ? d : e, b ? e : d) : f = lc(a, e, d) : f = a;
      if (b && c && void 0 !== c.decimals) {
          var g = Math.pow(10, c.decimals);
          f === a && (f = f.clone());
          f.Jc(function(a) {
              for (var b = 0, c = a.length; b < c; ++b)
                  a[b] = Math.round(a[b] * g) / g;
              return a
          })
      }
      return f
  }
  ;function jl() {
      fl.call(this)
  }
  v(jl, fl);
  function kl(a) {
      return "string" === typeof a ? (a = JSON.parse(a)) ? a : null : null !== a ? a : null
  }
  k = jl.prototype;
  k.S = function() {
      return "json"
  }
  ;
  k.Vb = function(a, b) {
      return this.Xc(kl(a), gl(this, a, b))
  }
  ;
  k.Ma = function(a, b) {
      return this.Kg(kl(a), gl(this, a, b))
  }
  ;
  k.Yc = function(a, b) {
      return this.Og(kl(a), gl(this, a, b))
  }
  ;
  k.pb = function(a) {
      return this.Rg(kl(a))
  }
  ;
  k.Gd = function(a, b) {
      return JSON.stringify(this.ed(a, b))
  }
  ;
  k.Yb = function(a, b) {
      return JSON.stringify(this.te(a, b))
  }
  ;
  k.fd = function(a, b) {
      return JSON.stringify(this.ve(a, b))
  }
  ;
  function ll(a, b, c, d, e, f) {
      var g = NaN
        , h = NaN
        , l = (c - b) / d;
      if (1 === l)
          g = a[b],
          h = a[b + 1];
      else if (2 == l)
          g = (1 - e) * a[b] + e * a[b + d],
          h = (1 - e) * a[b + 1] + e * a[b + d + 1];
      else if (0 !== l) {
          h = a[b];
          l = a[b + 1];
          var m = 0;
          g = [0];
          var n;
          for (n = b + d; n < c; n += d) {
              var p = a[n]
                , q = a[n + 1];
              m += Math.sqrt((p - h) * (p - h) + (q - l) * (q - l));
              g.push(m);
              h = p;
              l = q
          }
          c = e * m;
          l = 0;
          m = g.length;
          for (n = !1; l < m; )
              e = l + (m - l >> 1),
              h = +ea(g[e], c),
              0 > h ? l = e + 1 : (m = e,
              n = !h);
          e = n ? l : ~l;
          0 > e ? (c = (c - g[-e - 2]) / (g[-e - 1] - g[-e - 2]),
          b += (-e - 2) * d,
          g = Ka(a[b], a[b + d], c),
          h = Ka(a[b + 1], a[b + d + 1], c)) : (g = a[b + e * d],
          h = a[b + e * d + 1])
      }
      return f ? (f[0] = g,
      f[1] = h,
      f) : [g, h]
  }
  function ml(a, b, c, d, e, f) {
      if (c == b)
          return null;
      if (e < a[b + d - 1])
          return f ? (c = a.slice(b, b + d),
          c[d - 1] = e,
          c) : null;
      if (a[c - 1] < e)
          return f ? (c = a.slice(c - d, c),
          c[d - 1] = e,
          c) : null;
      if (e == a[b + d - 1])
          return a.slice(b, b + d);
      b /= d;
      for (c /= d; b < c; )
          f = b + c >> 1,
          e < a[(f + 1) * d - 1] ? c = f : b = f + 1;
      c = a[b * d - 1];
      if (e == c)
          return a.slice((b - 1) * d, (b - 1) * d + d);
      f = (e - c) / (a[(b + 1) * d - 1] - c);
      c = [];
      var g;
      for (g = 0; g < d - 1; ++g)
          c.push(Ka(a[(b - 1) * d + g], a[b * d + g], f));
      c.push(e);
      return c
  }
  function nl(a, b, c, d, e, f) {
      var g = 0;
      if (f)
          return ml(a, g, b[b.length - 1], c, d, e);
      if (d < a[c - 1])
          return e ? (a = a.slice(0, c),
          a[c - 1] = d,
          a) : null;
      if (a[a.length - 1] < d)
          return e ? (a = a.slice(a.length - c),
          a[c - 1] = d,
          a) : null;
      e = 0;
      for (f = b.length; e < f; ++e) {
          var h = b[e];
          if (g != h) {
              if (d < a[g + c - 1])
                  break;
              else if (d <= a[h - 1])
                  return ml(a, g, h, c, d, !1);
              g = h
          }
      }
      return null
  }
  ;function M(a, b) {
      ff.call(this);
      this.c = null;
      this.s = this.C = this.j = -1;
      this.na(a, b)
  }
  v(M, ff);
  k = M.prototype;
  k.xk = function(a) {
      this.A ? ja(this.A, a) : this.A = a.slice();
      this.u()
  }
  ;
  k.clone = function() {
      var a = new M(null);
      a.aa(this.ja, this.A.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      this.s != this.f && (this.C = Math.sqrt(pf(this.A, 0, this.A.length, this.a, 0)),
      this.s = this.f);
      return rf(this.A, 0, this.A.length, this.a, this.C, !1, a, b, c, d)
  }
  ;
  k.Nk = function(a, b) {
      return Hf(this.A, 0, this.A.length, this.a, a, b)
  }
  ;
  k.zn = function(a, b) {
      return "XYM" != this.ja && "XYZM" != this.ja ? null : ml(this.A, 0, this.A.length, this.a, a, void 0 !== b ? b : !1)
  }
  ;
  k.V = function() {
      return wf(this.A, 0, this.A.length, this.a)
  }
  ;
  k.Mh = function(a, b) {
      return ll(this.A, 0, this.A.length, this.a, a, b)
  }
  ;
  k.An = function() {
      return Ni(this.A, 0, this.A.length, this.a)
  }
  ;
  function bi(a) {
      a.j != a.f && (a.c = a.Mh(.5, a.c),
      a.j = a.f);
      return a.c
  }
  k.rd = function(a) {
      var b = [];
      b.length = zf(this.A, 0, this.A.length, this.a, a, b, 0);
      a = new M(null);
      a.aa("XY", b);
      return a
  }
  ;
  k.S = function() {
      return "LineString"
  }
  ;
  k.Ya = function(a) {
      return If(this.A, 0, this.A.length, this.a, a)
  }
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 1),
      this.A || (this.A = []),
      this.A.length = uf(this.A, 0, a, this.a),
      this.u()) : this.aa("XY", null)
  }
  ;
  k.aa = function(a, b) {
      hf(this, a, b);
      this.u()
  }
  ;
  function O(a, b) {
      ff.call(this);
      this.c = [];
      this.j = this.s = -1;
      this.na(a, b)
  }
  v(O, ff);
  k = O.prototype;
  k.yk = function(a) {
      this.A ? ja(this.A, a.ca().slice()) : this.A = a.ca().slice();
      this.c.push(this.A.length);
      this.u()
  }
  ;
  k.clone = function() {
      var a = new O(null);
      a.aa(this.ja, this.A.slice(), this.c.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      this.j != this.f && (this.s = Math.sqrt(qf(this.A, 0, this.c, this.a, 0)),
      this.j = this.f);
      return sf(this.A, 0, this.c, this.a, this.s, !1, a, b, c, d)
  }
  ;
  k.Cn = function(a, b, c) {
      return "XYM" != this.ja && "XYZM" != this.ja || 0 === this.A.length ? null : nl(this.A, this.c, this.a, a, void 0 !== b ? b : !1, void 0 !== c ? c : !1)
  }
  ;
  k.V = function() {
      return xf(this.A, 0, this.c, this.a)
  }
  ;
  k.lb = function() {
      return this.c
  }
  ;
  k.gl = function(a) {
      if (0 > a || this.c.length <= a)
          return null;
      var b = new M(null);
      b.aa(this.ja, this.A.slice(0 === a ? 0 : this.c[a - 1], this.c[a]));
      return b
  }
  ;
  k.qd = function() {
      var a = this.A, b = this.c, c = this.ja, d = [], e = 0, f;
      var g = 0;
      for (f = b.length; g < f; ++g) {
          var h = b[g]
            , l = new M(null);
          l.aa(c, a.slice(e, h));
          d.push(l);
          e = h
      }
      return d
  }
  ;
  function ci(a) {
      var b = []
        , c = a.A
        , d = 0
        , e = a.c;
      a = a.a;
      var f;
      var g = 0;
      for (f = e.length; g < f; ++g) {
          var h = e[g];
          d = ll(c, d, h, a, .5);
          ja(b, d);
          d = h
      }
      return b
  }
  k.rd = function(a) {
      var b = [], c = [], d = this.A, e = this.c, f = this.a, g = 0, h = 0, l;
      var m = 0;
      for (l = e.length; m < l; ++m) {
          var n = e[m];
          h = zf(d, g, n, f, a, b, h);
          c.push(h);
          g = n
      }
      b.length = h;
      a = new O(null);
      a.aa("XY", b, c);
      return a
  }
  ;
  k.S = function() {
      return "MultiLineString"
  }
  ;
  k.Ya = function(a) {
      a: {
          var b = this.A, c = this.c, d = this.a, e = 0, f;
          var g = 0;
          for (f = c.length; g < f; ++g) {
              if (If(b, e, c[g], d, a)) {
                  a = !0;
                  break a
              }
              e = c[g]
          }
          a = !1
      }
      return a
  }
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 2),
      this.A || (this.A = []),
      a = vf(this.A, 0, a, this.a, this.c),
      this.A.length = 0 === a.length ? 0 : a[a.length - 1],
      this.u()) : this.aa("XY", null, this.c)
  }
  ;
  k.aa = function(a, b, c) {
      hf(this, a, b);
      this.c = c;
      this.u()
  }
  ;
  function pl(a, b) {
      var c = a.ja, d = [], e = [], f;
      var g = 0;
      for (f = b.length; g < f; ++g) {
          var h = b[g];
          0 === g && (c = h.ja);
          ja(d, h.ca());
          e.push(d.length)
      }
      a.aa(c, d, e)
  }
  ;function ql(a, b) {
      ff.call(this);
      this.na(a, b)
  }
  v(ql, ff);
  k = ql.prototype;
  k.Ak = function(a) {
      this.A ? ja(this.A, a.ca()) : this.A = a.ca().slice();
      this.u()
  }
  ;
  k.clone = function() {
      var a = new ql(null);
      a.aa(this.ja, this.A.slice());
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      var e = this.A, f = this.a, g;
      var h = 0;
      for (g = e.length; h < g; h += f) {
          var l = Ha(a, b, e[h], e[h + 1]);
          if (l < d) {
              d = l;
              for (l = 0; l < f; ++l)
                  c[l] = e[h + l];
              c.length = f
          }
      }
      return d
  }
  ;
  k.V = function() {
      return wf(this.A, 0, this.A.length, this.a)
  }
  ;
  k.rl = function(a) {
      var b = this.A ? this.A.length / this.a : 0;
      if (0 > a || b <= a)
          return null;
      b = new D(null);
      b.aa(this.ja, this.A.slice(a * this.a, (a + 1) * this.a));
      return b
  }
  ;
  k.ee = function() {
      var a = this.A, b = this.ja, c = this.a, d = [], e;
      var f = 0;
      for (e = a.length; f < e; f += c) {
          var g = new D(null);
          g.aa(b, a.slice(f, f + c));
          d.push(g)
      }
      return d
  }
  ;
  k.S = function() {
      return "MultiPoint"
  }
  ;
  k.Ya = function(a) {
      var b = this.A, c = this.a, d;
      var e = 0;
      for (d = b.length; e < d; e += c) {
          var f = b[e];
          var g = b[e + 1];
          if (Va(a, f, g))
              return !0
      }
      return !1
  }
  ;
  k.na = function(a, b) {
      a ? (jf(this, b, a, 1),
      this.A || (this.A = []),
      this.A.length = uf(this.A, 0, a, this.a),
      this.u()) : this.aa("XY", null)
  }
  ;
  k.aa = function(a, b) {
      hf(this, a, b);
      this.u()
  }
  ;
  function P(a, b) {
      ff.call(this);
      this.c = [];
      this.s = -1;
      this.C = null;
      this.I = this.D = this.B = -1;
      this.j = null;
      this.na(a, b)
  }
  v(P, ff);
  k = P.prototype;
  k.Bk = function(a) {
      if (this.A) {
          var b = this.A.length;
          ja(this.A, a.ca());
          a = a.lb().slice();
          var c;
          var d = 0;
          for (c = a.length; d < c; ++d)
              a[d] += b
      } else
          this.A = a.ca().slice(),
          a = a.lb().slice(),
          this.c.push();
      this.c.push(a);
      this.u()
  }
  ;
  k.clone = function() {
      for (var a = new P(null), b = this.c.length, c = Array(b), d = 0; d < b; ++d)
          c[d] = this.c[d].slice();
      a.aa(this.ja, this.A.slice(), c);
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      if (this.D != this.f) {
          var e = this.c, f = 0, g = 0, h;
          var l = 0;
          for (h = e.length; l < h; ++l) {
              var m = e[l];
              g = qf(this.A, f, m, this.a, g);
              f = m[m.length - 1]
          }
          this.B = Math.sqrt(g);
          this.D = this.f
      }
      e = di(this);
      f = this.c;
      g = this.a;
      l = this.B;
      h = 0;
      m = [NaN, NaN];
      var n;
      var p = 0;
      for (n = f.length; p < n; ++p) {
          var q = f[p];
          d = sf(e, h, q, g, l, !0, a, b, c, d, m);
          h = q[q.length - 1]
      }
      return d
  }
  ;
  k.Tc = function(a, b) {
      a: {
          var c = di(this)
            , d = this.c
            , e = 0;
          if (0 !== d.length) {
              var f;
              var g = 0;
              for (f = d.length; g < f; ++g) {
                  var h = d[g];
                  if (Ff(c, e, h, this.a, a, b)) {
                      a = !0;
                      break a
                  }
                  e = h[h.length - 1]
              }
          }
          a = !1
      }
      return a
  }
  ;
  k.Dn = function() {
      var a = di(this), b = this.c, c = 0, d = 0, e;
      var f = 0;
      for (e = b.length; f < e; ++f) {
          var g = b[f];
          d += nf(a, c, g, this.a);
          c = g[g.length - 1]
      }
      return d
  }
  ;
  k.V = function(a) {
      if (void 0 !== a) {
          var b = di(this).slice();
          Of(b, this.c, this.a, a)
      } else
          b = this.A;
      return yf(b, 0, this.c, this.a)
  }
  ;
  k.md = function() {
      return this.c
  }
  ;
  function ei(a) {
      if (a.s != a.f) {
          var b = a.A, c = a.c, d = a.a, e = 0, f = [], g;
          var h = 0;
          for (g = c.length; h < g; ++h) {
              var l = c[h];
              e = ab(b, e, l[0], d);
              f.push((e[0] + e[2]) / 2, (e[1] + e[3]) / 2);
              e = l[l.length - 1]
          }
          b = di(a);
          c = a.c;
          d = a.a;
          h = 0;
          g = [];
          l = 0;
          for (e = c.length; l < e; ++l) {
              var m = c[l];
              g = Gf(b, h, m, d, f, 2 * l, g);
              h = m[m.length - 1]
          }
          a.C = g;
          a.s = a.f
      }
      return a.C
  }
  k.cl = function() {
      var a = new ql(null);
      a.aa("XYM", ei(this).slice());
      return a
  }
  ;
  function di(a) {
      if (a.I != a.f) {
          var b = a.A;
          a: {
              var c = a.c;
              var d;
              var e = 0;
              for (d = c.length; e < d; ++e)
                  if (!Lf(b, c[e], a.a, void 0)) {
                      c = !1;
                      break a
                  }
              c = !0
          }
          c ? a.j = b : (a.j = b.slice(),
          a.j.length = Of(a.j, a.c, a.a));
          a.I = a.f
      }
      return a.j
  }
  k.rd = function(a) {
      var b = []
        , c = []
        , d = this.A
        , e = this.c
        , f = this.a;
      a = Math.sqrt(a);
      var g = 0, h = 0, l;
      var m = 0;
      for (l = e.length; m < l; ++m) {
          var n = e[m]
            , p = [];
          h = Af(d, g, n, f, a, b, h, p);
          c.push(p);
          g = n[n.length - 1]
      }
      b.length = h;
      d = new P(null);
      d.aa("XY", b, c);
      return d
  }
  ;
  k.sl = function(a) {
      if (0 > a || this.c.length <= a)
          return null;
      if (0 === a)
          var b = 0;
      else
          b = this.c[a - 1],
          b = b[b.length - 1];
      a = this.c[a].slice();
      var c = a[a.length - 1];
      if (0 !== b) {
          var d;
          var e = 0;
          for (d = a.length; e < d; ++e)
              a[e] -= b
      }
      e = new E(null);
      e.aa(this.ja, this.A.slice(b, c), a);
      return e
  }
  ;
  k.Yd = function() {
      var a = this.ja, b = this.A, c = this.c, d = [], e = 0, f, g;
      var h = 0;
      for (f = c.length; h < f; ++h) {
          var l = c[h].slice()
            , m = l[l.length - 1];
          if (0 !== e) {
              var n = 0;
              for (g = l.length; n < g; ++n)
                  l[n] -= e
          }
          n = new E(null);
          n.aa(a, b.slice(e, m), l);
          d.push(n);
          e = m
      }
      return d
  }
  ;
  k.S = function() {
      return "MultiPolygon"
  }
  ;
  k.Ya = function(a) {
      a: {
          var b = di(this), c = this.c, d = this.a, e = 0, f;
          var g = 0;
          for (f = c.length; g < f; ++g) {
              var h = c[g];
              if (Jf(b, e, h, d, a)) {
                  a = !0;
                  break a
              }
              e = h[h.length - 1]
          }
          a = !1
      }
      return a
  }
  ;
  k.na = function(a, b) {
      if (a) {
          jf(this, b, a, 3);
          this.A || (this.A = []);
          b = this.A;
          var c = this.a
            , d = this.c
            , e = 0;
          d = d ? d : [];
          var f = 0, g;
          var h = 0;
          for (g = a.length; h < g; ++h)
              e = vf(b, e, a[h], c, d[f]),
              d[f++] = e,
              e = e[e.length - 1];
          d.length = f;
          0 === d.length ? this.A.length = 0 : (a = d[d.length - 1],
          this.A.length = 0 === a.length ? 0 : a[a.length - 1]);
          this.u()
      } else
          this.aa("XY", null, this.c)
  }
  ;
  k.aa = function(a, b, c) {
      hf(this, a, b);
      this.c = c;
      this.u()
  }
  ;
  function rl(a, b) {
      var c = a.ja, d = [], e = [], f;
      var g = 0;
      for (f = b.length; g < f; ++g) {
          var h = b[g];
          0 === g && (c = h.ja);
          var l = d.length;
          var m = h.lb();
          var n;
          var p = 0;
          for (n = m.length; p < n; ++p)
              m[p] += l;
          ja(d, h.ca());
          e.push(m)
      }
      a.aa(c, d, e)
  }
  ;function sl(a) {
      a = a ? a : {};
      fl.call(this);
      this.b = a.geometryName
  }
  v(sl, jl);
  function tl(a, b) {
      if (!a)
          return null;
      if ("number" === typeof a.x && "number" === typeof a.y)
          var c = "Point";
      else if (a.points)
          c = "MultiPoint";
      else if (a.paths)
          c = 1 === a.paths.length ? "LineString" : "MultiLineString";
      else if (a.rings) {
          var d = a.rings
            , e = ul(a)
            , f = []
            , g = [];
          c = [];
          var h;
          var l = 0;
          for (h = d.length; l < h; ++l)
              f.length = 0,
              uf(f, 0, d[l], e.length),
              Kf(f, 0, f.length, e.length) ? g.push([d[l]]) : c.push(d[l]);
          for (; c.length; ) {
              d = c.shift();
              e = !1;
              for (l = g.length - 1; 0 <= l; l--)
                  if (Wa((new Bf(g[l][0])).G(), (new Bf(d)).G())) {
                      g[l].push(d);
                      e = !0;
                      break
                  }
              e || g.push([d.reverse()])
          }
          a = tb({}, a);
          1 === g.length ? (c = "Polygon",
          a.rings = g[0]) : (c = "MultiPolygon",
          a.rings = g)
      }
      return il((0,
      vl[c])(a), !1, b)
  }
  function ul(a) {
      var b = "XY";
      !0 === a.hasZ && !0 === a.hasM ? b = "XYZM" : !0 === a.hasZ ? b = "XYZ" : !0 === a.hasM && (b = "XYM");
      return b
  }
  function wl(a) {
      a = a.ja;
      return {
          hasZ: "XYZ" === a || "XYZM" === a,
          hasM: "XYM" === a || "XYZM" === a
      }
  }
  var vl = {
      Point: function(a) {
          return void 0 !== a.m && void 0 !== a.z ? new D([a.x, a.y, a.z, a.m],"XYZM") : void 0 !== a.z ? new D([a.x, a.y, a.z],"XYZ") : void 0 !== a.m ? new D([a.x, a.y, a.m],"XYM") : new D([a.x, a.y])
      },
      LineString: function(a) {
          return new M(a.paths[0],ul(a))
      },
      Polygon: function(a) {
          return new E(a.rings,ul(a))
      },
      MultiPoint: function(a) {
          return new ql(a.points,ul(a))
      },
      MultiLineString: function(a) {
          return new O(a.paths,ul(a))
      },
      MultiPolygon: function(a) {
          return new P(a.rings,ul(a))
      }
  }
    , xl = {
      Point: function(a) {
          var b = a.V(), c;
          a = a.ja;
          "XYZ" === a ? c = {
              x: b[0],
              y: b[1],
              z: b[2]
          } : "XYM" === a ? c = {
              x: b[0],
              y: b[1],
              m: b[2]
          } : "XYZM" === a ? c = {
              x: b[0],
              y: b[1],
              z: b[2],
              m: b[3]
          } : "XY" === a ? c = {
              x: b[0],
              y: b[1]
          } : wa(!1, 34);
          return c
      },
      LineString: function(a) {
          var b = wl(a);
          return {
              hasZ: b.hasZ,
              hasM: b.hasM,
              paths: [a.V()]
          }
      },
      Polygon: function(a) {
          var b = wl(a);
          return {
              hasZ: b.hasZ,
              hasM: b.hasM,
              rings: a.V(!1)
          }
      },
      MultiPoint: function(a) {
          var b = wl(a);
          return {
              hasZ: b.hasZ,
              hasM: b.hasM,
              points: a.V()
          }
      },
      MultiLineString: function(a) {
          var b = wl(a);
          return {
              hasZ: b.hasZ,
              hasM: b.hasM,
              paths: a.V()
          }
      },
      MultiPolygon: function(a) {
          var b = wl(a);
          a = a.V(!1);
          for (var c = [], d = 0; d < a.length; d++)
              for (var e = a[d].length - 1; 0 <= e; e--)
                  c.push(a[d][e]);
          return {
              hasZ: b.hasZ,
              hasM: b.hasM,
              rings: c
          }
      }
  };
  k = sl.prototype;
  k.Xc = function(a, b) {
      var c = tl(a.geometry, b)
        , d = new Kk;
      this.b && d.Zc(this.b);
      d.Sa(c);
      b && b.og && a.attributes[b.og] && d.mc(a.attributes[b.og]);
      a.attributes && d.H(a.attributes);
      return d
  }
  ;
  k.Kg = function(a, b) {
      b = b ? b : {};
      if (a.features) {
          var c = [], d = a.features, e;
          b.og = a.objectIdFieldName;
          a = 0;
          for (e = d.length; a < e; ++a)
              c.push(this.Xc(d[a], b));
          return c
      }
      return [this.Xc(a, b)]
  }
  ;
  k.Og = function(a, b) {
      return tl(a, b)
  }
  ;
  k.Rg = function(a) {
      return a.spatialReference && a.spatialReference.wkid ? Zb("EPSG:" + a.spatialReference.wkid) : null
  }
  ;
  function yl(a, b) {
      return (0,
      xl[a.S()])(il(a, !0, b), b)
  }
  k.ve = function(a, b) {
      return yl(a, hl(this, b))
  }
  ;
  k.ed = function(a, b) {
      b = hl(this, b);
      var c = {}
        , d = a.W();
      d && (c.geometry = yl(d, b),
      b && b.featureProjection && (c.geometry.spatialReference = {
          wkid: Zb(b.featureProjection).sb.split(":").pop()
      }));
      b = a.M();
      delete b[a.a];
      c.attributes = wb(b) ? {} : b;
      return c
  }
  ;
  k.te = function(a, b) {
      b = hl(this, b);
      var c = [], d;
      var e = 0;
      for (d = a.length; e < d; ++e)
          c.push(this.ed(a[e], b));
      return {
          features: c
      }
  }
  ;
  function zl(a) {
      this.nc = a
  }
  ;function Al(a, b) {
      this.nc = a;
      this.b = Array.prototype.slice.call(arguments, 1);
      wa(2 <= this.b.length, 57)
  }
  v(Al, zl);
  function Bl(a) {
      var b = ["And"].concat(Array.prototype.slice.call(arguments));
      Al.apply(this, b)
  }
  v(Bl, Al);
  function Cl(a, b, c) {
      this.nc = "BBOX";
      this.geometryName = a;
      this.extent = b;
      this.srsName = c
  }
  v(Cl, zl);
  function Dl(a, b) {
      this.nc = a;
      this.b = b
  }
  v(Dl, zl);
  function El(a, b, c) {
      Dl.call(this, "During", a);
      this.a = b;
      this.f = c
  }
  v(El, Dl);
  function Fl(a, b, c, d) {
      Dl.call(this, a, b);
      this.f = c;
      this.a = d
  }
  v(Fl, Dl);
  function Gl(a, b, c) {
      Fl.call(this, "PropertyIsEqualTo", a, b, c)
  }
  v(Gl, Fl);
  function Hl(a, b) {
      Fl.call(this, "PropertyIsGreaterThan", a, b)
  }
  v(Hl, Fl);
  function Il(a, b) {
      Fl.call(this, "PropertyIsGreaterThanOrEqualTo", a, b)
  }
  v(Il, Fl);
  function Jl(a, b, c, d) {
      this.nc = a;
      this.geometryName = b || "the_geom";
      this.geometry = c;
      this.srsName = d
  }
  v(Jl, zl);
  function Kl(a, b, c) {
      Jl.call(this, "Intersects", a, b, c)
  }
  v(Kl, Jl);
  function Ll(a, b, c) {
      Dl.call(this, "PropertyIsBetween", a);
      this.a = b;
      this.f = c
  }
  v(Ll, Dl);
  function Ml(a, b, c, d, e, f) {
      Dl.call(this, "PropertyIsLike", a);
      this.c = b;
      this.g = void 0 !== c ? c : "*";
      this.i = void 0 !== d ? d : ".";
      this.f = void 0 !== e ? e : "!";
      this.a = f
  }
  v(Ml, Dl);
  function Nl(a) {
      Dl.call(this, "PropertyIsNull", a)
  }
  v(Nl, Dl);
  function Ol(a, b) {
      Fl.call(this, "PropertyIsLessThan", a, b)
  }
  v(Ol, Fl);
  function Pl(a, b) {
      Fl.call(this, "PropertyIsLessThanOrEqualTo", a, b)
  }
  v(Pl, Fl);
  function Ql(a) {
      this.nc = "Not";
      this.condition = a
  }
  v(Ql, zl);
  function Rl(a, b, c) {
      Fl.call(this, "PropertyIsNotEqualTo", a, b, c)
  }
  v(Rl, Fl);
  function Sl(a) {
      var b = ["Or"].concat(Array.prototype.slice.call(arguments));
      Al.apply(this, b)
  }
  v(Sl, Al);
  function Tl(a, b, c) {
      Jl.call(this, "Within", a, b, c)
  }
  v(Tl, Jl);
  function Ul(a) {
      var b = [null].concat(Array.prototype.slice.call(arguments));
      return new (Function.prototype.bind.apply(Bl, b))
  }
  function Vl(a, b, c) {
      return new Cl(a,b,c)
  }
  ;function Wl(a) {
      ef.call(this);
      this.a = a ? a : null;
      Xl(this)
  }
  v(Wl, ef);
  function Yl(a) {
      var b = [], c;
      var d = 0;
      for (c = a.length; d < c; ++d)
          b.push(a[d].clone());
      return b
  }
  function Zl(a) {
      var b;
      if (a.a) {
          var c = 0;
          for (b = a.a.length; c < b; ++c)
              Nc(a.a[c], "change", a.u, a)
      }
  }
  function Xl(a) {
      var b;
      if (a.a) {
          var c = 0;
          for (b = a.a.length; c < b; ++c)
              z(a.a[c], "change", a.u, a)
      }
  }
  k = Wl.prototype;
  k.clone = function() {
      var a = new Wl(null);
      a.Cj(this.a);
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      if (d < Ta(this.G(), a, b))
          return d;
      var e = this.a, f;
      var g = 0;
      for (f = e.length; g < f; ++g)
          d = e[g].Mb(a, b, c, d);
      return d
  }
  ;
  k.Tc = function(a, b) {
      var c = this.a, d;
      var e = 0;
      for (d = c.length; e < d; ++e)
          if (c[e].Tc(a, b))
              return !0;
      return !1
  }
  ;
  k.De = function(a) {
      Za(a);
      for (var b = this.a, c = 0, d = b.length; c < d; ++c)
          db(a, b[c].G());
      return a
  }
  ;
  k.pd = function() {
      return Yl(this.a)
  }
  ;
  k.Zd = function(a) {
      this.l != this.f && (ub(this.i),
      this.g = 0,
      this.l = this.f);
      if (0 > a || 0 !== this.g && a < this.g)
          return this;
      var b = a.toString();
      if (this.i.hasOwnProperty(b))
          return this.i[b];
      var c = [], d = this.a, e = !1, f;
      var g = 0;
      for (f = d.length; g < f; ++g) {
          var h = d[g]
            , l = h.Zd(a);
          c.push(l);
          l !== h && (e = !0)
      }
      if (e)
          return a = new Wl(null),
          Zl(a),
          a.a = c,
          Xl(a),
          a.u(),
          this.i[b] = a;
      this.g = a;
      return this
  }
  ;
  k.S = function() {
      return "GeometryCollection"
  }
  ;
  k.Ya = function(a) {
      var b = this.a, c;
      var d = 0;
      for (c = b.length; d < c; ++d)
          if (b[d].Ya(a))
              return !0;
      return !1
  }
  ;
  k.rotate = function(a, b) {
      for (var c = this.a, d = 0, e = c.length; d < e; ++d)
          c[d].rotate(a, b);
      this.u()
  }
  ;
  k.scale = function(a, b, c) {
      c || (c = nb(this.G()));
      for (var d = this.a, e = 0, f = d.length; e < f; ++e)
          d[e].scale(a, b, c);
      this.u()
  }
  ;
  k.Cj = function(a) {
      a = Yl(a);
      Zl(this);
      this.a = a;
      Xl(this);
      this.u()
  }
  ;
  k.Jc = function(a) {
      var b = this.a, c;
      var d = 0;
      for (c = b.length; d < c; ++d)
          b[d].Jc(a);
      this.u()
  }
  ;
  k.translate = function(a, b) {
      var c = this.a, d;
      var e = 0;
      for (d = c.length; e < d; ++e)
          c[e].translate(a, b);
      this.u()
  }
  ;
  k.ka = function() {
      Zl(this);
      ef.prototype.ka.call(this)
  }
  ;
  function $l(a) {
      a = a ? a : {};
      fl.call(this);
      this.defaultDataProjection = Zb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326");
      a.featureProjection && (this.i = Zb(a.featureProjection));
      this.b = a.geometryName
  }
  v($l, jl);
  function am(a, b) {
      return a ? il((0,
      bm[a.type])(a), !1, b) : null
  }
  function cm(a, b) {
      return (0,
      dm[a.S()])(il(a, !0, b), b)
  }
  var bm = {
      Point: function(a) {
          return new D(a.coordinates)
      },
      LineString: function(a) {
          return new M(a.coordinates)
      },
      Polygon: function(a) {
          return new E(a.coordinates)
      },
      MultiPoint: function(a) {
          return new ql(a.coordinates)
      },
      MultiLineString: function(a) {
          return new O(a.coordinates)
      },
      MultiPolygon: function(a) {
          return new P(a.coordinates)
      },
      GeometryCollection: function(a, b) {
          a = a.geometries.map(function(a) {
              return am(a, b)
          });
          return new Wl(a)
      }
  }
    , dm = {
      Point: function(a) {
          return {
              type: "Point",
              coordinates: a.V()
          }
      },
      LineString: function(a) {
          return {
              type: "LineString",
              coordinates: a.V()
          }
      },
      Polygon: function(a, b) {
          if (b)
              var c = b.rightHanded;
          return {
              type: "Polygon",
              coordinates: a.V(c)
          }
      },
      MultiPoint: function(a) {
          return {
              type: "MultiPoint",
              coordinates: a.V()
          }
      },
      MultiLineString: function(a) {
          return {
              type: "MultiLineString",
              coordinates: a.V()
          }
      },
      MultiPolygon: function(a, b) {
          if (b)
              var c = b.rightHanded;
          return {
              type: "MultiPolygon",
              coordinates: a.V(c)
          }
      },
      GeometryCollection: function(a, b) {
          return {
              type: "GeometryCollection",
              geometries: a.a.map(function(a) {
                  var c = tb({}, b);
                  delete c.featureProjection;
                  return cm(a, c)
              })
          }
      },
      Circle: function() {
          return {
              type: "GeometryCollection",
              geometries: []
          }
      }
  };
  k = $l.prototype;
  k.Xc = function(a, b) {
      a = "Feature" === a.type ? a : {
          type: "Feature",
          geometry: a
      };
      b = am(a.geometry, b);
      var c = new Kk;
      this.b && c.Zc(this.b);
      c.Sa(b);
      void 0 !== a.id && c.mc(a.id);
      a.properties && c.H(a.properties);
      return c
  }
  ;
  k.Kg = function(a, b) {
      if ("FeatureCollection" === a.type) {
          var c = [];
          a = a.features;
          var d;
          var e = 0;
          for (d = a.length; e < d; ++e)
              c.push(this.Xc(a[e], b))
      } else
          c = [this.Xc(a, b)];
      return c
  }
  ;
  k.Og = function(a, b) {
      return am(a, b)
  }
  ;
  k.Rg = function(a) {
      a = a.crs;
      var b;
      a ? "name" == a.type ? b = Zb(a.properties.name) : "EPSG" == a.type ? b = Zb("EPSG:" + a.properties.code) : wa(!1, 36) : b = this.defaultDataProjection;
      return b
  }
  ;
  k.ed = function(a, b) {
      b = hl(this, b);
      var c = {
          type: "Feature"
      }
        , d = a.c;
      void 0 !== d && (c.id = d);
      (d = a.W()) ? c.geometry = cm(d, b) : c.geometry = null;
      b = a.M();
      delete b[a.a];
      wb(b) ? c.properties = null : c.properties = b;
      return c
  }
  ;
  k.te = function(a, b) {
      b = hl(this, b);
      var c = [], d;
      var e = 0;
      for (d = a.length; e < d; ++e)
          c.push(this.ed(a[e], b));
      return {
          type: "FeatureCollection",
          features: c
      }
  }
  ;
  k.ve = function(a, b) {
      return cm(a, hl(this, b))
  }
  ;
  function em() {
      this.f = new XMLSerializer;
      fl.call(this)
  }
  v(em, fl);
  k = em.prototype;
  k.S = function() {
      return "xml"
  }
  ;
  k.Vb = function(a, b) {
      return Qk(a) ? fm(this, a, b) : Rk(a) ? this.Jg(a, b) : "string" === typeof a ? (a = Sk(a),
      fm(this, a, b)) : null
  }
  ;
  function fm(a, b, c) {
      a = gm(a, b, c);
      return 0 < a.length ? a[0] : null
  }
  k.Jg = function() {
      return null
  }
  ;
  k.Ma = function(a, b) {
      return Qk(a) ? gm(this, a, b) : Rk(a) ? this.Dc(a, b) : "string" === typeof a ? (a = Sk(a),
      gm(this, a, b)) : []
  }
  ;
  function gm(a, b, c) {
      var d = [];
      for (b = b.firstChild; b; b = b.nextSibling)
          b.nodeType == Node.ELEMENT_NODE && ja(d, a.Dc(b, c));
      return d
  }
  k.Yc = function(a, b) {
      if (Qk(a))
          return null;
      if (Rk(a))
          return this.oj(a, b);
      "string" === typeof a && Sk(a);
      return null
  }
  ;
  k.oj = function() {
      return null
  }
  ;
  k.pb = function(a) {
      return Qk(a) ? this.Qg(a) : Rk(a) ? this.uf(a) : "string" === typeof a ? (a = Sk(a),
      this.Qg(a)) : null
  }
  ;
  k.Qg = function() {
      return this.defaultDataProjection
  }
  ;
  k.uf = function() {
      return this.defaultDataProjection
  }
  ;
  k.Gd = function(a, b) {
      return this.f.serializeToString(this.kh(a, b))
  }
  ;
  k.kh = function() {
      return null
  }
  ;
  k.Yb = function(a, b) {
      a = this.Zb(a, b);
      return this.f.serializeToString(a)
  }
  ;
  k.Zb = function() {
      return null
  }
  ;
  k.fd = function(a, b) {
      a = this.ue(a, b);
      return this.f.serializeToString(a)
  }
  ;
  k.ue = function() {
      return null
  }
  ;
  function hm(a) {
      a = a ? a : {};
      this.featureType = a.featureType;
      this.featureNS = a.featureNS;
      this.srsName = a.srsName;
      this.schemaLocation = "";
      this.b = {};
      this.b["http://www.opengis.net/gml"] = {
          featureMember: Vk(hm.prototype.ie),
          featureMembers: Vk(hm.prototype.ie)
      };
      em.call(this)
  }
  v(hm, em);
  var im = /^[\s\xa0]*$/;
  k = hm.prototype;
  k.ie = function(a, b) {
      var c = a.localName
        , d = null;
      if ("FeatureCollection" == c)
          "http://www.opengis.net/wfs" === a.namespaceURI ? d = L([], this.b, a, b, this) : d = L(null, this.b, a, b, this);
      else if ("featureMembers" == c || "featureMember" == c) {
          var e = b[0], f = e.featureType, g = e.featureNS, h;
          if (!f && a.childNodes) {
              f = [];
              g = {};
              var l = 0;
              for (h = a.childNodes.length; l < h; ++l) {
                  var m = a.childNodes[l];
                  if (1 === m.nodeType) {
                      var n = m.nodeName.split(":").pop();
                      if (-1 === f.indexOf(n)) {
                          var p = ""
                            , q = 0;
                          m = m.namespaceURI;
                          for (var r in g) {
                              if (g[r] === m) {
                                  p = r;
                                  break
                              }
                              ++q
                          }
                          p || (p = "p" + q,
                          g[p] = m);
                          f.push(p + ":" + n)
                      }
                  }
              }
              "featureMember" != c && (e.featureType = f,
              e.featureNS = g)
          }
          "string" === typeof g && (l = g,
          g = {},
          g.p0 = l);
          e = {};
          f = Array.isArray(f) ? f : [f];
          for (var u in g) {
              n = {};
              l = 0;
              for (h = f.length; l < h; ++l)
                  (-1 === f[l].indexOf(":") ? "p0" : f[l].split(":")[0]) === u && (n[f[l].split(":").pop()] = "featureMembers" == c ? Uk(this.Ig, this) : Vk(this.Ig, this));
              e[g[u]] = n
          }
          "featureMember" == c ? d = L(void 0, e, a, b) : d = L([], e, a, b)
      }
      null === d && (d = []);
      return d
  }
  ;
  k.rf = function(a, b) {
      var c = b[0];
      c.srsName = a.firstElementChild.getAttribute("srsName");
      c.srsDimension = a.firstElementChild.getAttribute("srsDimension");
      if (a = L(null, this.oh, a, b, this))
          return il(a, !1, c)
  }
  ;
  k.Ig = function(a, b) {
      var c;
      (c = a.getAttribute("fid")) || (c = a.getAttributeNS("http://www.opengis.net/gml", "id") || "");
      var d = {}, e;
      for (a = a.firstElementChild; a; a = a.nextElementSibling) {
          var f = a.localName;
          if (0 === a.childNodes.length || 1 === a.childNodes.length && (3 === a.firstChild.nodeType || 4 === a.firstChild.nodeType)) {
              var g = Ok(a, !1);
              im.test(g) && (g = void 0);
              d[f] = g
          } else
              "boundedBy" !== f && (e = f),
              d[f] = this.rf(a, b)
      }
      b = new Kk(d);
      e && b.Zc(e);
      c && b.mc(c);
      return b
  }
  ;
  k.tj = function(a, b) {
      if (a = this.qf(a, b))
          return b = new D(null),
          b.aa("XYZ", a),
          b
  }
  ;
  k.rj = function(a, b) {
      if (a = L([], this.ck, a, b, this))
          return new ql(a)
  }
  ;
  k.qj = function(a, b) {
      if (a = L([], this.bk, a, b, this))
          return b = new O(null),
          pl(b, a),
          b
  }
  ;
  k.sj = function(a, b) {
      if (a = L([], this.dk, a, b, this))
          return b = new P(null),
          rl(b, a),
          b
  }
  ;
  k.kj = function(a, b) {
      bl(this.gk, a, b, this)
  }
  ;
  k.ci = function(a, b) {
      bl(this.$j, a, b, this)
  }
  ;
  k.lj = function(a, b) {
      bl(this.hk, a, b, this)
  }
  ;
  k.sf = function(a, b) {
      if (a = this.qf(a, b))
          return b = new M(null),
          b.aa("XYZ", a),
          b
  }
  ;
  k.Ep = function(a, b) {
      if (a = L(null, this.we, a, b, this))
          return a
  }
  ;
  k.pj = function(a, b) {
      if (a = this.qf(a, b))
          return b = new Bf(null),
          Cf(b, "XYZ", a),
          b
  }
  ;
  k.tf = function(a, b) {
      if ((a = L([null], this.Gf, a, b, this)) && a[0]) {
          b = new E(null);
          var c = a[0], d = [c.length], e;
          var f = 1;
          for (e = a.length; f < e; ++f)
              ja(c, a[f]),
              d.push(c.length);
          b.aa("XYZ", c, d);
          return b
      }
  }
  ;
  k.qf = function(a, b) {
      return L(null, this.we, a, b, this)
  }
  ;
  k.ck = {
      "http://www.opengis.net/gml": {
          pointMember: Uk(hm.prototype.kj),
          pointMembers: Uk(hm.prototype.kj)
      }
  };
  k.bk = {
      "http://www.opengis.net/gml": {
          lineStringMember: Uk(hm.prototype.ci),
          lineStringMembers: Uk(hm.prototype.ci)
      }
  };
  k.dk = {
      "http://www.opengis.net/gml": {
          polygonMember: Uk(hm.prototype.lj),
          polygonMembers: Uk(hm.prototype.lj)
      }
  };
  k.gk = {
      "http://www.opengis.net/gml": {
          Point: Uk(hm.prototype.qf)
      }
  };
  k.$j = {
      "http://www.opengis.net/gml": {
          LineString: Uk(hm.prototype.sf)
      }
  };
  k.hk = {
      "http://www.opengis.net/gml": {
          Polygon: Uk(hm.prototype.tf)
      }
  };
  k.xe = {
      "http://www.opengis.net/gml": {
          LinearRing: Vk(hm.prototype.Ep)
      }
  };
  k.oj = function(a, b) {
      return (a = this.rf(a, [gl(this, a, b ? b : {})])) ? a : null
  }
  ;
  k.Dc = function(a, b) {
      var c = {
          featureType: this.featureType,
          featureNS: this.featureNS
      };
      b && tb(c, gl(this, a, b));
      return this.ie(a, [c]) || []
  }
  ;
  k.uf = function(a) {
      return Zb(this.srsName ? this.srsName : a.firstElementChild.getAttribute("srsName"))
  }
  ;
  function jm(a) {
      a = Ok(a, !1);
      return km(a)
  }
  function km(a) {
      if (a = /^\s*(true|1)|(false|0)\s*$/.exec(a))
          return void 0 !== a[1] || !1
  }
  function lm(a) {
      a = Ok(a, !1);
      a = Date.parse(a);
      return isNaN(a) ? void 0 : a / 1E3
  }
  function mm(a) {
      a = Ok(a, !1);
      return nm(a)
  }
  function nm(a) {
      if (a = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(a))
          return parseFloat(a[1])
  }
  function om(a) {
      a = Ok(a, !1);
      return pm(a)
  }
  function pm(a) {
      if (a = /^\s*(\d+)\s*$/.exec(a))
          return parseInt(a[1], 10)
  }
  function Q(a) {
      return Ok(a, !1).trim()
  }
  function qm(a, b) {
      rm(a, b ? "1" : "0")
  }
  function sm(a, b) {
      a.appendChild(Mk.createTextNode(b.toPrecision()))
  }
  function tm(a, b) {
      a.appendChild(Mk.createTextNode(b.toString()))
  }
  function rm(a, b) {
      a.appendChild(Mk.createTextNode(b))
  }
  ;function um(a) {
      a = a ? a : {};
      hm.call(this, a);
      this.o = void 0 !== a.surface ? a.surface : !1;
      this.c = void 0 !== a.curve ? a.curve : !1;
      this.g = void 0 !== a.multiCurve ? a.multiCurve : !0;
      this.j = void 0 !== a.multiSurface ? a.multiSurface : !0;
      this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd";
      this.hasZ = void 0 !== a.hasZ ? a.hasZ : !1
  }
  v(um, hm);
  k = um.prototype;
  k.Ip = function(a, b) {
      if (a = L([], this.ak, a, b, this))
          return b = new O(null),
          pl(b, a),
          b
  }
  ;
  k.Jp = function(a, b) {
      if (a = L([], this.ek, a, b, this))
          return b = new P(null),
          rl(b, a),
          b
  }
  ;
  k.Dh = function(a, b) {
      bl(this.Xj, a, b, this)
  }
  ;
  k.Pj = function(a, b) {
      bl(this.jk, a, b, this)
  }
  ;
  k.Mp = function(a, b) {
      return L([null], this.fk, a, b, this)
  }
  ;
  k.Pp = function(a, b) {
      return L([null], this.ik, a, b, this)
  }
  ;
  k.Np = function(a, b) {
      return L([null], this.Gf, a, b, this)
  }
  ;
  k.Hp = function(a, b) {
      return L([null], this.we, a, b, this)
  }
  ;
  k.lm = function(a, b) {
      (a = L(void 0, this.xe, a, b, this)) && b[b.length - 1].push(a)
  }
  ;
  k.Jk = function(a, b) {
      (a = L(void 0, this.xe, a, b, this)) && (b[b.length - 1][0] = a)
  }
  ;
  k.uj = function(a, b) {
      if ((a = L([null], this.kk, a, b, this)) && a[0]) {
          b = new E(null);
          var c = a[0], d = [c.length], e;
          var f = 1;
          for (e = a.length; f < e; ++f)
              ja(c, a[f]),
              d.push(c.length);
          b.aa("XYZ", c, d);
          return b
      }
  }
  ;
  k.mj = function(a, b) {
      if (a = L([null], this.Yj, a, b, this))
          return b = new M(null),
          b.aa("XYZ", a),
          b
  }
  ;
  k.Dp = function(a, b) {
      a = L([null], this.Zj, a, b, this);
      return Ya(a[1][0], a[1][1], a[2][0], a[2][1])
  }
  ;
  k.Fp = function(a, b) {
      var c = Ok(a, !1)
        , d = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/;
      a = [];
      for (var e; e = d.exec(c); )
          a.push(parseFloat(e[1])),
          c = c.substr(e[0].length);
      if ("" === c) {
          b = b[0].srsName;
          c = "enu";
          b && (c = Zb(b).b);
          if ("neu" === c)
              for (b = 0,
              c = a.length; b < c; b += 3)
                  d = a[b],
                  a[b] = a[b + 1],
                  a[b + 1] = d;
          b = a.length;
          2 == b && a.push(0);
          if (0 !== b)
              return a
      }
  }
  ;
  k.Ng = function(a, b) {
      var c = Ok(a, !1).replace(/^\s*|\s*$/g, "");
      b = b[0];
      var d = b.srsName
        , e = b.srsDimension;
      b = "enu";
      d && (b = Zb(d).b);
      c = c.split(/\s+/);
      d = 2;
      a.getAttribute("srsDimension") ? d = pm(a.getAttribute("srsDimension")) : a.getAttribute("dimension") ? d = pm(a.getAttribute("dimension")) : a.parentNode.getAttribute("srsDimension") ? d = pm(a.parentNode.getAttribute("srsDimension")) : e && (d = pm(e));
      for (var f, g = [], h = 0, l = c.length; h < l; h += d)
          a = parseFloat(c[h]),
          e = parseFloat(c[h + 1]),
          f = 3 === d ? parseFloat(c[h + 2]) : 0,
          "en" === b.substr(0, 2) ? g.push(a, e, f) : g.push(e, a, f);
      return g
  }
  ;
  k.we = {
      "http://www.opengis.net/gml": {
          pos: Vk(um.prototype.Fp),
          posList: Vk(um.prototype.Ng)
      }
  };
  k.Gf = {
      "http://www.opengis.net/gml": {
          interior: um.prototype.lm,
          exterior: um.prototype.Jk
      }
  };
  k.oh = {
      "http://www.opengis.net/gml": {
          Point: Vk(hm.prototype.tj),
          MultiPoint: Vk(hm.prototype.rj),
          LineString: Vk(hm.prototype.sf),
          MultiLineString: Vk(hm.prototype.qj),
          LinearRing: Vk(hm.prototype.pj),
          Polygon: Vk(hm.prototype.tf),
          MultiPolygon: Vk(hm.prototype.sj),
          Surface: Vk(um.prototype.uj),
          MultiSurface: Vk(um.prototype.Jp),
          Curve: Vk(um.prototype.mj),
          MultiCurve: Vk(um.prototype.Ip),
          Envelope: Vk(um.prototype.Dp)
      }
  };
  k.ak = {
      "http://www.opengis.net/gml": {
          curveMember: Uk(um.prototype.Dh),
          curveMembers: Uk(um.prototype.Dh)
      }
  };
  k.ek = {
      "http://www.opengis.net/gml": {
          surfaceMember: Uk(um.prototype.Pj),
          surfaceMembers: Uk(um.prototype.Pj)
      }
  };
  k.Xj = {
      "http://www.opengis.net/gml": {
          LineString: Uk(hm.prototype.sf),
          Curve: Uk(um.prototype.mj)
      }
  };
  k.jk = {
      "http://www.opengis.net/gml": {
          Polygon: Uk(hm.prototype.tf),
          Surface: Uk(um.prototype.uj)
      }
  };
  k.kk = {
      "http://www.opengis.net/gml": {
          patches: Vk(um.prototype.Mp)
      }
  };
  k.Yj = {
      "http://www.opengis.net/gml": {
          segments: Vk(um.prototype.Pp)
      }
  };
  k.Zj = {
      "http://www.opengis.net/gml": {
          lowerCorner: Uk(um.prototype.Ng),
          upperCorner: Uk(um.prototype.Ng)
      }
  };
  k.fk = {
      "http://www.opengis.net/gml": {
          PolygonPatch: Vk(um.prototype.Np)
      }
  };
  k.ik = {
      "http://www.opengis.net/gml": {
          LineStringSegment: Vk(um.prototype.Hp)
      }
  };
  function vm(a, b, c) {
      var d = c[c.length - 1];
      c = d.hasZ;
      a.setAttribute("srsDimension", c ? 3 : 2);
      d = d.srsName;
      b = b.V();
      for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h) {
          g = b[h];
          var l = h
            , m = c
            , n = "enu";
          d && (n = Zb(d).b);
          n = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0];
          m && (n += " " + (g[2] || 0));
          f[l] = n
      }
      rm(a, f.join(" "))
  }
  k.Ei = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      d && a.setAttribute("srsName", d);
      d = Nk(a.namespaceURI, "pos");
      a.appendChild(d);
      c = c[c.length - 1];
      a = c.hasZ;
      d.setAttribute("srsDimension", a ? 3 : 2);
      var e = c.srsName;
      c = "enu";
      e && (c = Zb(e).b);
      b = b.V();
      c = "en" === c.substr(0, 2) ? b[0] + " " + b[1] : b[1] + " " + b[0];
      a && (c += " " + (b[2] || 0));
      rm(d, c)
  }
  ;
  var wm = {
      "http://www.opengis.net/gml": {
          lowerCorner: J(rm),
          upperCorner: J(rm)
      }
  };
  k = um.prototype;
  k.vn = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      d && a.setAttribute("srsName", d);
      cl({
          node: a
      }, wm, $k, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
  }
  ;
  k.Bi = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      d && a.setAttribute("srsName", d);
      d = Nk(a.namespaceURI, "posList");
      a.appendChild(d);
      vm(d, b, c)
  }
  ;
  k.tn = function(a, b) {
      a = b[b.length - 1];
      b = a.node;
      var c = a.exteriorWritten;
      void 0 === c && (a.exteriorWritten = !0);
      return Nk(b.namespaceURI, void 0 !== c ? "interior" : "exterior")
  }
  ;
  k.bf = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ;
      d = d.srsName;
      "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
      "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Xd(),
      cl({
          node: a,
          hasZ: e,
          srsName: d
      }, xm, this.tn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Nk(a.namespaceURI, "patches"),
      a.appendChild(e),
      a = Nk(e.namespaceURI, "PolygonPatch"),
      e.appendChild(a),
      this.bf(a, b, c))
  }
  ;
  k.af = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
      "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Nk(a.namespaceURI, "posList"),
      a.appendChild(d),
      vm(d, b, c)) : "Curve" === a.nodeName && (d = Nk(a.namespaceURI, "segments"),
      a.appendChild(d),
      a = Nk(d.namespaceURI, "LineStringSegment"),
      d.appendChild(a),
      this.af(a, b, c))
  }
  ;
  k.Di = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ
        , f = d.srsName;
      d = d.surface;
      f && a.setAttribute("srsName", f);
      b = b.Yd();
      cl({
          node: a,
          hasZ: e,
          srsName: f,
          surface: d
      }, ym, this.l, b, c, void 0, this)
  }
  ;
  k.wn = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.srsName;
      d = d.hasZ;
      e && a.setAttribute("srsName", e);
      b = b.ee();
      cl({
          node: a,
          hasZ: d,
          srsName: e
      }, zm, Yk("pointMember"), b, c, void 0, this)
  }
  ;
  k.Ci = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ
        , f = d.srsName;
      d = d.curve;
      f && a.setAttribute("srsName", f);
      b = b.qd();
      cl({
          node: a,
          hasZ: e,
          srsName: f,
          curve: d
      }, Am, this.l, b, c, void 0, this)
  }
  ;
  k.Fi = function(a, b, c) {
      var d = Nk(a.namespaceURI, "LinearRing");
      a.appendChild(d);
      this.Bi(d, b, c)
  }
  ;
  k.Gi = function(a, b, c) {
      var d = this.a(b, c);
      d && (a.appendChild(d),
      this.bf(d, b, c))
  }
  ;
  k.xn = function(a, b, c) {
      var d = Nk(a.namespaceURI, "Point");
      a.appendChild(d);
      this.Ei(d, b, c)
  }
  ;
  k.Ai = function(a, b, c) {
      var d = this.a(b, c);
      d && (a.appendChild(d),
      this.af(d, b, c))
  }
  ;
  k.wd = function(a, b, c) {
      var d = c[c.length - 1]
        , e = tb({}, d);
      e.node = a;
      var f;
      Array.isArray(b) ? d.dataProjection ? f = lc(b, d.featureProjection, d.dataProjection) : f = b : f = il(b, !0, d);
      cl(e, Bm, this.a, [f], c, void 0, this)
  }
  ;
  k.zi = function(a, b, c) {
      var d = b.c;
      d && a.setAttribute("fid", d);
      d = c[c.length - 1];
      var e = d.featureNS
        , f = b.a;
      d.qb || (d.qb = {},
      d.qb[e] = {});
      var g = b.M();
      b = [];
      var h = [];
      for (m in g) {
          var l = g[m];
          null !== l && (b.push(m),
          h.push(l),
          m == f || l instanceof ef ? m in d.qb[e] || (d.qb[e][m] = J(this.wd, this)) : m in d.qb[e] || (d.qb[e][m] = J(rm)))
      }
      var m = tb({}, d);
      m.node = a;
      cl(m, d.qb, Yk(void 0, e), h, c, b)
  }
  ;
  var ym = {
      "http://www.opengis.net/gml": {
          surfaceMember: J(um.prototype.Gi),
          polygonMember: J(um.prototype.Gi)
      }
  }
    , zm = {
      "http://www.opengis.net/gml": {
          pointMember: J(um.prototype.xn)
      }
  }
    , Am = {
      "http://www.opengis.net/gml": {
          lineStringMember: J(um.prototype.Ai),
          curveMember: J(um.prototype.Ai)
      }
  }
    , xm = {
      "http://www.opengis.net/gml": {
          exterior: J(um.prototype.Fi),
          interior: J(um.prototype.Fi)
      }
  }
    , Bm = {
      "http://www.opengis.net/gml": {
          Curve: J(um.prototype.af),
          MultiCurve: J(um.prototype.Ci),
          Point: J(um.prototype.Ei),
          MultiPoint: J(um.prototype.wn),
          LineString: J(um.prototype.af),
          MultiLineString: J(um.prototype.Ci),
          LinearRing: J(um.prototype.Bi),
          Polygon: J(um.prototype.bf),
          MultiPolygon: J(um.prototype.Di),
          Surface: J(um.prototype.bf),
          MultiSurface: J(um.prototype.Di),
          Envelope: J(um.prototype.vn)
      }
  }
    , Cm = {
      MultiLineString: "lineStringMember",
      MultiCurve: "curveMember",
      MultiPolygon: "polygonMember",
      MultiSurface: "surfaceMember"
  };
  um.prototype.l = function(a, b) {
      return Nk("http://www.opengis.net/gml", Cm[b[b.length - 1].node.nodeName])
  }
  ;
  um.prototype.a = function(a, b) {
      var c = b[b.length - 1];
      b = c.multiSurface;
      var d = c.surface
        , e = c.curve;
      c = c.multiCurve;
      Array.isArray(a) ? a = "Envelope" : (a = a.S(),
      "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "LineString" === a && !0 === e ? a = "Curve" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
      return Nk("http://www.opengis.net/gml", a)
  }
  ;
  um.prototype.ue = function(a, b) {
      b = hl(this, b);
      var c = Nk("http://www.opengis.net/gml", "geom")
        , d = {
          node: c,
          hasZ: this.hasZ,
          srsName: this.srsName,
          curve: this.c,
          surface: this.o,
          multiSurface: this.j,
          multiCurve: this.g
      };
      b && tb(d, b);
      this.wd(c, a, [d]);
      return c
  }
  ;
  um.prototype.Zb = function(a, b) {
      b = hl(this, b);
      var c = Nk("http://www.opengis.net/gml", "featureMembers");
      c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
      var d = {
          srsName: this.srsName,
          hasZ: this.hasZ,
          curve: this.c,
          surface: this.o,
          multiSurface: this.j,
          multiCurve: this.g,
          featureNS: this.featureNS,
          featureType: this.featureType
      };
      b && tb(d, b);
      b = [d];
      var e = b[b.length - 1];
      d = e.featureType;
      var f = e.featureNS
        , g = {};
      g[f] = {};
      g[f][d] = J(this.zi, this);
      e = tb({}, e);
      e.node = c;
      cl(e, g, Yk(d, f), a, b);
      return c
  }
  ;
  function Dm(a) {
      a = a ? a : {};
      hm.call(this, a);
      this.b["http://www.opengis.net/gml"].featureMember = Uk(hm.prototype.ie);
      this.schemaLocation = a.schemaLocation ? a.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
  }
  v(Dm, hm);
  k = Dm.prototype;
  k.nj = function(a, b) {
      a = Ok(a, !1).replace(/^\s*|\s*$/g, "");
      var c = b[0].srsName;
      b = "enu";
      c && (c = Zb(c)) && (b = c.b);
      a = a.trim().split(/\s+/);
      for (var d, e, f = [], g = 0, h = a.length; g < h; g++)
          e = a[g].split(/,+/),
          c = parseFloat(e[0]),
          d = parseFloat(e[1]),
          e = 3 === e.length ? parseFloat(e[2]) : 0,
          "en" === b.substr(0, 2) ? f.push(c, d, e) : f.push(d, c, e);
      return f
  }
  ;
  k.Bp = function(a, b) {
      a = L([null], this.Wj, a, b, this);
      return Ya(a[1][0], a[1][1], a[1][3], a[1][4])
  }
  ;
  k.jm = function(a, b) {
      (a = L(void 0, this.xe, a, b, this)) && b[b.length - 1].push(a)
  }
  ;
  k.kp = function(a, b) {
      (a = L(void 0, this.xe, a, b, this)) && (b[b.length - 1][0] = a)
  }
  ;
  k.we = {
      "http://www.opengis.net/gml": {
          coordinates: Vk(Dm.prototype.nj)
      }
  };
  k.Gf = {
      "http://www.opengis.net/gml": {
          innerBoundaryIs: Dm.prototype.jm,
          outerBoundaryIs: Dm.prototype.kp
      }
  };
  k.Wj = {
      "http://www.opengis.net/gml": {
          coordinates: Uk(Dm.prototype.nj)
      }
  };
  k.oh = {
      "http://www.opengis.net/gml": {
          Point: Vk(hm.prototype.tj),
          MultiPoint: Vk(hm.prototype.rj),
          LineString: Vk(hm.prototype.sf),
          MultiLineString: Vk(hm.prototype.qj),
          LinearRing: Vk(hm.prototype.pj),
          Polygon: Vk(hm.prototype.tf),
          MultiPolygon: Vk(hm.prototype.sj),
          Box: Vk(Dm.prototype.Bp)
      }
  };
  k.vg = function(a, b) {
      var c = b[b.length - 1];
      b = c.multiSurface;
      var d = c.surface;
      c = c.multiCurve;
      Array.isArray(a) ? a = "Envelope" : (a = a.S(),
      "MultiPolygon" === a && !0 === b ? a = "MultiSurface" : "Polygon" === a && !0 === d ? a = "Surface" : "MultiLineString" === a && !0 === c && (a = "MultiCurve"));
      return Nk("http://www.opengis.net/gml", a)
  }
  ;
  k.ri = function(a, b, c) {
      var d = c[c.length - 1]
        , e = tb({}, d);
      e.node = a;
      var f;
      Array.isArray(b) ? d.dataProjection ? f = lc(b, d.featureProjection, d.dataProjection) : f = b : f = il(b, !0, d);
      cl(e, Em, this.vg, [f], c, void 0, this)
  }
  ;
  k.Ze = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      "LineStringSegment" !== a.nodeName && d && a.setAttribute("srsName", d);
      "LineString" === a.nodeName || "LineStringSegment" === a.nodeName ? (d = Fm(a.namespaceURI),
      a.appendChild(d),
      Gm(d, b, c)) : "Curve" === a.nodeName && (d = Nk(a.namespaceURI, "segments"),
      a.appendChild(d),
      a = Nk(d.namespaceURI, "LineStringSegment"),
      d.appendChild(a),
      this.Ze(a, b, c))
  }
  ;
  function Fm(a) {
      a = Nk(a, "coordinates");
      a.setAttribute("decimal", ".");
      a.setAttribute("cs", ",");
      a.setAttribute("ts", " ");
      return a
  }
  function Gm(a, b, c) {
      var d = c[c.length - 1];
      c = d.hasZ;
      d = d.srsName;
      b = b.V();
      for (var e = b.length, f = Array(e), g, h = 0; h < e; ++h)
          g = b[h],
          f[h] = Hm(g, d, c);
      rm(a, f.join(" "))
  }
  k.$e = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ;
      d = d.srsName;
      "PolygonPatch" !== a.nodeName && d && a.setAttribute("srsName", d);
      "Polygon" === a.nodeName || "PolygonPatch" === a.nodeName ? (b = b.Xd(),
      cl({
          node: a,
          hasZ: e,
          srsName: d
      }, Im, this.pn, b, c, void 0, this)) : "Surface" === a.nodeName && (e = Nk(a.namespaceURI, "patches"),
      a.appendChild(e),
      a = Nk(e.namespaceURI, "PolygonPatch"),
      e.appendChild(a),
      this.$e(a, b, c))
  }
  ;
  k.pn = function(a, b) {
      a = b[b.length - 1];
      b = a.node;
      var c = a.exteriorWritten;
      void 0 === c && (a.exteriorWritten = !0);
      return Nk(b.namespaceURI, void 0 !== c ? "innerBoundaryIs" : "outerBoundaryIs")
  }
  ;
  k.xi = function(a, b, c) {
      var d = Nk(a.namespaceURI, "LinearRing");
      a.appendChild(d);
      this.ti(d, b, c)
  }
  ;
  function Hm(a, b, c) {
      var d = "enu";
      b && (d = Zb(b).b);
      b = "en" === d.substr(0, 2) ? a[0] + "," + a[1] : a[1] + "," + a[0];
      c && (b += "," + (a[2] || 0));
      return b
  }
  k.ui = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ
        , f = d.srsName;
      d = d.curve;
      f && a.setAttribute("srsName", f);
      b = b.qd();
      cl({
          node: a,
          hasZ: e,
          srsName: f,
          curve: d
      }, Jm, this.a, b, c, void 0, this)
  }
  ;
  k.wi = function(a, b, c) {
      var d = c[c.length - 1];
      c = d.hasZ;
      var e = d.srsName;
      e && a.setAttribute("srsName", e);
      d = Fm(a.namespaceURI);
      a.appendChild(d);
      a = b.V();
      a = Hm(a, e, c);
      rm(d, a)
  }
  ;
  k.rn = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ;
      (d = d.srsName) && a.setAttribute("srsName", d);
      b = b.ee();
      cl({
          node: a,
          hasZ: e,
          srsName: d
      }, Km, Yk("pointMember"), b, c, void 0, this)
  }
  ;
  k.sn = function(a, b, c) {
      var d = Nk(a.namespaceURI, "Point");
      a.appendChild(d);
      this.wi(d, b, c)
  }
  ;
  k.si = function(a, b, c) {
      var d = this.vg(b, c);
      d && (a.appendChild(d),
      this.Ze(d, b, c))
  }
  ;
  k.ti = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      d && a.setAttribute("srsName", d);
      d = Fm(a.namespaceURI);
      a.appendChild(d);
      Gm(d, b, c)
  }
  ;
  k.vi = function(a, b, c) {
      var d = c[c.length - 1]
        , e = d.hasZ
        , f = d.srsName;
      d = d.surface;
      f && a.setAttribute("srsName", f);
      b = b.Yd();
      cl({
          node: a,
          hasZ: e,
          srsName: f,
          surface: d
      }, Lm, this.a, b, c, void 0, this)
  }
  ;
  k.yi = function(a, b, c) {
      var d = this.vg(b, c);
      d && (a.appendChild(d),
      this.$e(d, b, c))
  }
  ;
  k.qn = function(a, b, c) {
      var d = c[c.length - 1].srsName;
      d && a.setAttribute("srsName", d);
      cl({
          node: a
      }, Mm, $k, [b[0] + " " + b[1], b[2] + " " + b[3]], c, ["lowerCorner", "upperCorner"], this)
  }
  ;
  var Em = {
      "http://www.opengis.net/gml": {
          Curve: J(Dm.prototype.Ze),
          MultiCurve: J(Dm.prototype.ui),
          Point: J(Dm.prototype.wi),
          MultiPoint: J(Dm.prototype.rn),
          LineString: J(Dm.prototype.Ze),
          MultiLineString: J(Dm.prototype.ui),
          LinearRing: J(Dm.prototype.ti),
          Polygon: J(Dm.prototype.$e),
          MultiPolygon: J(Dm.prototype.vi),
          Surface: J(Dm.prototype.$e),
          MultiSurface: J(Dm.prototype.vi),
          Envelope: J(Dm.prototype.qn)
      }
  }
    , Im = {
      "http://www.opengis.net/gml": {
          outerBoundaryIs: J(Dm.prototype.xi),
          innerBoundaryIs: J(Dm.prototype.xi)
      }
  }
    , Km = {
      "http://www.opengis.net/gml": {
          pointMember: J(Dm.prototype.sn)
      }
  }
    , Jm = {
      "http://www.opengis.net/gml": {
          lineStringMember: J(Dm.prototype.si),
          curveMember: J(Dm.prototype.si)
      }
  };
  Dm.prototype.a = function(a, b) {
      return Nk("http://www.opengis.net/gml", Nm[b[b.length - 1].node.nodeName])
  }
  ;
  var Nm = {
      MultiLineString: "lineStringMember",
      MultiCurve: "curveMember",
      MultiPolygon: "polygonMember",
      MultiSurface: "surfaceMember"
  }
    , Lm = {
      "http://www.opengis.net/gml": {
          surfaceMember: J(Dm.prototype.yi),
          polygonMember: J(Dm.prototype.yi)
      }
  }
    , Mm = {
      "http://www.opengis.net/gml": {
          lowerCorner: J(rm),
          upperCorner: J(rm)
      }
  };
  function Om(a) {
      a = a ? a : {};
      em.call(this);
      this.defaultDataProjection = Zb("EPSG:4326");
      this.b = a.readExtensions
  }
  v(Om, em);
  var Pm = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];
  function Qm(a, b, c, d) {
      a.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
      "ele"in d ? (a.push(d.ele),
      delete d.ele,
      b.hasZ = !0) : a.push(0);
      "time"in d ? (a.push(d.time),
      delete d.time,
      b.hasM = !0) : a.push(0);
      return a
  }
  function Rm(a, b, c) {
      var d = "XY"
        , e = 2;
      a.hasZ && a.hasM ? (d = "XYZM",
      e = 4) : a.hasZ ? (d = "XYZ",
      e = 3) : a.hasM && (d = "XYM",
      e = 3);
      if (4 !== e) {
          var f;
          var g = 0;
          for (f = b.length / 4; g < f; g++)
              b[g * e] = b[4 * g],
              b[g * e + 1] = b[4 * g + 1],
              a.hasZ && (b[g * e + 2] = b[4 * g + 2]),
              a.hasM && (b[g * e + 2] = b[4 * g + 3]);
          b.length = b.length / 4 * e;
          if (c)
              for (g = 0,
              f = c.length; g < f; g++)
                  c[g] = c[g] / 4 * e
      }
      return d
  }
  function Sm(a, b) {
      var c = b[b.length - 1]
        , d = a.getAttribute("href");
      null !== d && (c.link = d);
      bl(Tm, a, b)
  }
  function Um(a, b) {
      b[b.length - 1].extensionsNode_ = a
  }
  function Vm(a, b) {
      var c = b[0];
      if (a = L({
          flatCoordinates: [],
          layoutOptions: {}
      }, Wm, a, b)) {
          b = a.flatCoordinates;
          delete a.flatCoordinates;
          var d = a.layoutOptions;
          delete a.layoutOptions;
          d = Rm(d, b);
          var e = new M(null);
          e.aa(d, b);
          il(e, !1, c);
          c = new Kk(e);
          c.H(a);
          return c
      }
  }
  function Xm(a, b) {
      var c = b[0];
      if (a = L({
          flatCoordinates: [],
          ends: [],
          layoutOptions: {}
      }, Ym, a, b)) {
          b = a.flatCoordinates;
          delete a.flatCoordinates;
          var d = a.ends;
          delete a.ends;
          var e = a.layoutOptions;
          delete a.layoutOptions;
          e = Rm(e, b, d);
          var f = new O(null);
          f.aa(e, b, d);
          il(f, !1, c);
          c = new Kk(f);
          c.H(a);
          return c
      }
  }
  function Zm(a, b) {
      var c = b[0];
      if (b = L({}, $m, a, b)) {
          var d = {};
          a = Qm([], d, a, b);
          d = Rm(d, a);
          a = new D(a,d);
          il(a, !1, c);
          c = new Kk(a);
          c.H(b);
          return c
      }
  }
  var an = {
      rte: Vm,
      trk: Xm,
      wpt: Zm
  }
    , bn = K(Pm, {
      rte: Uk(Vm),
      trk: Uk(Xm),
      wpt: Uk(Zm)
  })
    , Tm = K(Pm, {
      text: I(Q, "linkText"),
      type: I(Q, "linkType")
  })
    , Wm = K(Pm, {
      name: I(Q),
      cmt: I(Q),
      desc: I(Q),
      src: I(Q),
      link: Sm,
      number: I(om),
      extensions: Um,
      type: I(Q),
      rtept: function(a, b) {
          var c = L({}, cn, a, b);
          c && (b = b[b.length - 1],
          Qm(b.flatCoordinates, b.layoutOptions, a, c))
      }
  })
    , cn = K(Pm, {
      ele: I(mm),
      time: I(lm)
  })
    , Ym = K(Pm, {
      name: I(Q),
      cmt: I(Q),
      desc: I(Q),
      src: I(Q),
      link: Sm,
      number: I(om),
      type: I(Q),
      extensions: Um,
      trkseg: function(a, b) {
          var c = b[b.length - 1];
          bl(dn, a, b);
          c.ends.push(c.flatCoordinates.length)
      }
  })
    , dn = K(Pm, {
      trkpt: function(a, b) {
          var c = L({}, en, a, b);
          c && (b = b[b.length - 1],
          Qm(b.flatCoordinates, b.layoutOptions, a, c))
      }
  })
    , en = K(Pm, {
      ele: I(mm),
      time: I(lm)
  })
    , $m = K(Pm, {
      ele: I(mm),
      time: I(lm),
      magvar: I(mm),
      geoidheight: I(mm),
      name: I(Q),
      cmt: I(Q),
      desc: I(Q),
      src: I(Q),
      link: Sm,
      sym: I(Q),
      type: I(Q),
      fix: I(Q),
      sat: I(om),
      hdop: I(mm),
      vdop: I(mm),
      pdop: I(mm),
      ageofdgpsdata: I(mm),
      dgpsid: I(om),
      extensions: Um
  });
  function fn(a, b) {
      b || (b = []);
      for (var c = 0, d = b.length; c < d; ++c) {
          var e = b[c];
          if (a.b) {
              var f = e.get("extensionsNode_") || null;
              a.b(e, f)
          }
          e.set("extensionsNode_", void 0)
      }
  }
  Om.prototype.Jg = function(a, b) {
      if (!ha(Pm, a.namespaceURI))
          return null;
      var c = an[a.localName];
      if (!c)
          return null;
      a = c(a, [gl(this, a, b)]);
      if (!a)
          return null;
      fn(this, [a]);
      return a
  }
  ;
  Om.prototype.Dc = function(a, b) {
      return ha(Pm, a.namespaceURI) ? "gpx" == a.localName && (a = L([], bn, a, [gl(this, a, b)])) ? (fn(this, a),
      a) : [] : []
  }
  ;
  function gn(a, b, c) {
      a.setAttribute("href", b);
      b = c[c.length - 1].properties;
      cl({
          node: a
      }, hn, $k, [b.linkText, b.linkType], c, jn)
  }
  function kn(a, b, c) {
      var d = c[c.length - 1]
        , e = d.node.namespaceURI
        , f = d.properties;
      a.setAttributeNS(null, "lat", b[1]);
      a.setAttributeNS(null, "lon", b[0]);
      switch (d.geometryLayout) {
      case "XYZM":
          0 !== b[3] && (f.time = b[3]);
      case "XYZ":
          0 !== b[2] && (f.ele = b[2]);
          break;
      case "XYM":
          0 !== b[2] && (f.time = b[2])
      }
      b = "rtept" == a.nodeName ? ln[e] : mn[e];
      d = al(f, b);
      cl({
          node: a,
          properties: f
      }, nn, $k, d, c, b)
  }
  var jn = ["text", "type"]
    , hn = K(Pm, {
      text: J(rm),
      type: J(rm)
  })
    , on = K(Pm, "name cmt desc src link number type rtept".split(" "))
    , pn = K(Pm, {
      name: J(rm),
      cmt: J(rm),
      desc: J(rm),
      src: J(rm),
      link: J(gn),
      number: J(tm),
      type: J(rm),
      rtept: Xk(J(kn))
  })
    , ln = K(Pm, ["ele", "time"])
    , qn = K(Pm, "name cmt desc src link number type trkseg".split(" "))
    , tn = K(Pm, {
      name: J(rm),
      cmt: J(rm),
      desc: J(rm),
      src: J(rm),
      link: J(gn),
      number: J(tm),
      type: J(rm),
      trkseg: Xk(J(function(a, b, c) {
          cl({
              node: a,
              geometryLayout: b.ja,
              properties: {}
          }, rn, sn, b.V(), c)
      }))
  })
    , sn = Yk("trkpt")
    , rn = K(Pm, {
      trkpt: J(kn)
  })
    , mn = K(Pm, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" "))
    , nn = K(Pm, {
      ele: J(sm),
      time: J(function(a, b) {
          b = new Date(1E3 * b);
          a.appendChild(Mk.createTextNode(b.getUTCFullYear() + "-" + we(b.getUTCMonth() + 1) + "-" + we(b.getUTCDate()) + "T" + we(b.getUTCHours()) + ":" + we(b.getUTCMinutes()) + ":" + we(b.getUTCSeconds()) + "Z"))
      }),
      magvar: J(sm),
      geoidheight: J(sm),
      name: J(rm),
      cmt: J(rm),
      desc: J(rm),
      src: J(rm),
      link: J(gn),
      sym: J(rm),
      type: J(rm),
      fix: J(rm),
      sat: J(tm),
      hdop: J(sm),
      vdop: J(sm),
      pdop: J(sm),
      ageofdgpsdata: J(sm),
      dgpsid: J(tm)
  })
    , un = {
      Point: "wpt",
      LineString: "rte",
      MultiLineString: "trk"
  };
  function vn(a, b) {
      if (a = a.W())
          if (a = un[a.S()])
              return Nk(b[b.length - 1].node.namespaceURI, a)
  }
  var wn = K(Pm, {
      rte: J(function(a, b, c) {
          var d = c[0]
            , e = b.M();
          a = {
              node: a,
              properties: e
          };
          if (b = b.W())
              b = il(b, !0, d),
              a.geometryLayout = b.ja,
              e.rtept = b.V();
          d = on[c[c.length - 1].node.namespaceURI];
          e = al(e, d);
          cl(a, pn, $k, e, c, d)
      }),
      trk: J(function(a, b, c) {
          var d = c[0]
            , e = b.M();
          a = {
              node: a,
              properties: e
          };
          if (b = b.W())
              b = il(b, !0, d),
              e.trkseg = b.qd();
          d = qn[c[c.length - 1].node.namespaceURI];
          e = al(e, d);
          cl(a, tn, $k, e, c, d)
      }),
      wpt: J(function(a, b, c) {
          var d = c[0]
            , e = c[c.length - 1];
          e.properties = b.M();
          if (b = b.W())
              b = il(b, !0, d),
              e.geometryLayout = b.ja,
              kn(a, b.V(), c)
      })
  });
  Om.prototype.Zb = function(a, b) {
      b = hl(this, b);
      var c = Nk("http://www.topografix.com/GPX/1/1", "gpx");
      c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
      c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd");
      c.setAttribute("version", "1.1");
      c.setAttribute("creator", "OpenLayers");
      cl({
          node: c
      }, wn, vn, a, [b]);
      return c
  }
  ;
  function xn() {
      fl.call(this)
  }
  v(xn, fl);
  function yn(a) {
      return "string" === typeof a ? a : ""
  }
  k = xn.prototype;
  k.S = function() {
      return "text"
  }
  ;
  k.Vb = function(a, b) {
      return this.he(yn(a), hl(this, b))
  }
  ;
  k.Ma = function(a, b) {
      return this.Lg(yn(a), hl(this, b))
  }
  ;
  k.Yc = function(a, b) {
      return this.Dd(yn(a), hl(this, b))
  }
  ;
  k.pb = function() {
      return this.defaultDataProjection
  }
  ;
  k.Gd = function(a, b) {
      return this.se(a, hl(this, b))
  }
  ;
  k.Yb = function(a, b) {
      return this.lh(a, hl(this, b))
  }
  ;
  k.fd = function(a, b) {
      return this.Hd(a, hl(this, b))
  }
  ;
  function zn(a) {
      a = a ? a : {};
      fl.call(this);
      this.defaultDataProjection = Zb("EPSG:4326");
      this.b = a.altitudeMode ? a.altitudeMode : "none"
  }
  v(zn, xn);
  var An = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/
    , Bn = /^H.([A-Z]{3}).*?:(.*)/
    , Cn = /^HFDTE(\d{2})(\d{2})(\d{2})/
    , Dn = /\r\n|\r|\n/;
  k = zn.prototype;
  k.he = function(a, b) {
      var c = this.b
        , d = a.split(Dn);
      a = {};
      var e = [], f = 2E3, g = 0, h = 1, l = -1, m;
      var n = 0;
      for (m = d.length; n < m; ++n) {
          var p = d[n], q;
          if ("B" == p.charAt(0)) {
              if (q = An.exec(p)) {
                  p = parseInt(q[1], 10);
                  var r = parseInt(q[2], 10)
                    , u = parseInt(q[3], 10)
                    , x = parseInt(q[4], 10) + parseInt(q[5], 10) / 6E4;
                  "S" == q[6] && (x = -x);
                  var B = parseInt(q[7], 10) + parseInt(q[8], 10) / 6E4;
                  "W" == q[9] && (B = -B);
                  e.push(B, x);
                  "none" != c && e.push("gps" == c ? parseInt(q[11], 10) : "barometric" == c ? parseInt(q[12], 10) : 0);
                  q = Date.UTC(f, g, h, p, r, u);
                  q < l && (q = Date.UTC(f, g, h + 1, p, r, u));
                  e.push(q / 1E3);
                  l = q
              }
          } else
              "H" == p.charAt(0) && ((q = Cn.exec(p)) ? (h = parseInt(q[1], 10),
              g = parseInt(q[2], 10) - 1,
              f = 2E3 + parseInt(q[3], 10)) : (q = Bn.exec(p)) && (a[q[1]] = q[2].trim()))
      }
      if (0 === e.length)
          return null;
      d = new M(null);
      d.aa("none" == c ? "XYM" : "XYZM", e);
      b = new Kk(il(d, !1, b));
      b.H(a);
      return b
  }
  ;
  k.Lg = function(a, b) {
      return (a = this.he(a, b)) ? [a] : []
  }
  ;
  k.se = function() {}
  ;
  k.lh = function() {}
  ;
  k.Hd = function() {}
  ;
  k.Dd = function() {}
  ;
  function En(a, b, c, d, e, f) {
      Tc.call(this);
      this.j = null;
      this.N = a ? a : new Image;
      null !== d && (this.N.crossOrigin = d);
      this.c = f ? document.createElement("CANVAS") : null;
      this.g = f;
      this.i = null;
      this.f = e;
      this.a = c;
      this.l = b;
      this.o = !1;
      2 == this.f && Fn(this)
  }
  v(En, Tc);
  function Fn(a) {
      var b = dg(1, 1);
      try {
          b.drawImage(a.N, 0, 0),
          b.getImageData(0, 0, 1, 1)
      } catch (c) {
          a.o = !0
      }
  }
  En.prototype.v = function() {
      this.f = 3;
      this.i.forEach(Hc);
      this.i = null;
      this.b("change")
  }
  ;
  En.prototype.s = function() {
      this.f = 2;
      this.a && (this.N.width = this.a[0],
      this.N.height = this.a[1]);
      this.a = [this.N.width, this.N.height];
      this.i.forEach(Hc);
      this.i = null;
      Fn(this);
      if (!this.o && null !== this.g) {
          this.c.width = this.N.width;
          this.c.height = this.N.height;
          var a = this.c.getContext("2d");
          a.drawImage(this.N, 0, 0);
          for (var b = a.getImageData(0, 0, this.N.width, this.N.height), c = b.data, d = this.g[0] / 255, e = this.g[1] / 255, f = this.g[2] / 255, g = 0, h = c.length; g < h; g += 4)
              c[g] *= d,
              c[g + 1] *= e,
              c[g + 2] *= f;
          a.putImageData(b, 0, 0)
      }
      this.b("change")
  }
  ;
  En.prototype.Y = function() {
      return this.c ? this.c : this.N
  }
  ;
  En.prototype.load = function() {
      if (0 == this.f) {
          this.f = 1;
          this.i = [Mc(this.N, "error", this.v, this), Mc(this.N, "load", this.s, this)];
          try {
              this.N.src = this.l
          } catch (a) {
              this.v()
          }
      }
  }
  ;
  function Gn(a) {
      a = a || {};
      this.l = void 0 !== a.anchor ? a.anchor : [.5, .5];
      this.s = null;
      this.f = void 0 !== a.anchorOrigin ? a.anchorOrigin : "top-left";
      this.D = void 0 !== a.anchorXUnits ? a.anchorXUnits : "fraction";
      this.B = void 0 !== a.anchorYUnits ? a.anchorYUnits : "fraction";
      this.sa = void 0 !== a.crossOrigin ? a.crossOrigin : null;
      var b = void 0 !== a.img ? a.img : null
        , c = void 0 !== a.imgSize ? a.imgSize : null
        , d = a.src;
      wa(!(void 0 !== d && b), 4);
      wa(!b || b && c, 5);
      void 0 !== d && 0 !== d.length || !b || (d = b.src || w(b).toString());
      wa(void 0 !== d && 0 < d.length, 6);
      var e = void 0 !== a.src ? 0 : 2;
      this.j = void 0 !== a.color ? Ph(a.color) : null;
      var f = this.sa
        , g = this.j
        , h = zi.get(d, f, g);
      h || (h = new En(b,d,c,f,e,g),
      zi.set(d, f, g, h));
      this.b = h;
      this.ra = void 0 !== a.offset ? a.offset : [0, 0];
      this.c = void 0 !== a.offsetOrigin ? a.offsetOrigin : "top-left";
      this.O = null;
      this.C = void 0 !== a.size ? a.size : null;
      yk.call(this, {
          opacity: void 0 !== a.opacity ? a.opacity : 1,
          rotation: void 0 !== a.rotation ? a.rotation : 0,
          scale: void 0 !== a.scale ? a.scale : 1,
          snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0,
          rotateWithView: void 0 !== a.rotateWithView ? a.rotateWithView : !1
      })
  }
  v(Gn, yk);
  k = Gn.prototype;
  k.clone = function() {
      return new Gn({
          anchor: this.l.slice(),
          anchorOrigin: this.f,
          anchorXUnits: this.D,
          anchorYUnits: this.B,
          crossOrigin: this.sa,
          color: this.j && this.j.slice ? this.j.slice() : this.j || void 0,
          src: this.b.l,
          offset: this.ra.slice(),
          offsetOrigin: this.c,
          size: null !== this.C ? this.C.slice() : void 0,
          opacity: this.i,
          scale: this.a,
          snapToPixel: this.v,
          rotation: this.g,
          rotateWithView: this.o
      })
  }
  ;
  k.Oc = function() {
      if (this.s)
          return this.s;
      var a = this.l
        , b = this.kc();
      if ("fraction" == this.D || "fraction" == this.B) {
          if (!b)
              return null;
          a = this.l.slice();
          "fraction" == this.D && (a[0] *= b[0]);
          "fraction" == this.B && (a[1] *= b[1])
      }
      if ("top-left" != this.f) {
          if (!b)
              return null;
          a === this.l && (a = this.l.slice());
          if ("top-right" == this.f || "bottom-right" == this.f)
              a[0] = -a[0] + b[0];
          if ("bottom-left" == this.f || "bottom-right" == this.f)
              a[1] = -a[1] + b[1]
      }
      return this.s = a
  }
  ;
  k.To = function() {
      return this.j
  }
  ;
  k.Y = function(a) {
      return this.b.Y(a)
  }
  ;
  k.Ie = function() {
      return this.b.a
  }
  ;
  k.gf = function() {
      return this.b.f
  }
  ;
  k.Cg = function() {
      var a = this.b;
      if (!a.j)
          if (a.o) {
              var b = a.a[0]
                , c = a.a[1]
                , d = dg(b, c);
              d.fillRect(0, 0, b, c);
              a.j = d.canvas
          } else
              a.j = a.N;
      return a.j
  }
  ;
  k.Vc = function() {
      if (this.O)
          return this.O;
      var a = this.ra;
      if ("top-left" != this.c) {
          var b = this.kc()
            , c = this.b.a;
          if (!b || !c)
              return null;
          a = a.slice();
          if ("top-right" == this.c || "bottom-right" == this.c)
              a[0] = c[0] - b[0] - a[0];
          if ("bottom-left" == this.c || "bottom-right" == this.c)
              a[1] = c[1] - b[1] - a[1]
      }
      return this.O = a
  }
  ;
  k.Uo = function() {
      return this.b.l
  }
  ;
  k.kc = function() {
      return this.C ? this.C : this.b.a
  }
  ;
  k.di = function(a, b) {
      return z(this.b, "change", a, b)
  }
  ;
  k.load = function() {
      this.b.load()
  }
  ;
  k.Qj = function(a, b) {
      Nc(this.b, "change", a, b)
  }
  ;
  function Hn(a) {
      a = a || {};
      this.a = a.font;
      this.i = a.rotation;
      this.l = a.rotateWithView;
      this.b = a.scale;
      this.qa = a.text;
      this.g = a.textAlign;
      this.j = a.textBaseline;
      this.Wa = void 0 !== a.fill ? a.fill : new Ck({
          color: "#333"
      });
      this.v = void 0 !== a.maxAngle ? a.maxAngle : Math.PI / 4;
      this.s = void 0 !== a.placement ? a.placement : "point";
      this.o = void 0 !== a.exceedLength ? a.exceedLength : !1;
      this.Ta = void 0 !== a.stroke ? a.stroke : null;
      this.f = void 0 !== a.offsetX ? a.offsetX : 0;
      this.c = void 0 !== a.offsetY ? a.offsetY : 0
  }
  k = Hn.prototype;
  k.clone = function() {
      return new Hn({
          font: this.a,
          placement: this.s,
          maxAngle: this.v,
          exceedLength: this.o,
          rotation: this.i,
          rotateWithView: this.l,
          scale: this.b,
          text: this.Ia(),
          textAlign: this.g,
          textBaseline: this.j,
          fill: this.Ca() ? this.Ca().clone() : void 0,
          stroke: this.Da() ? this.Da().clone() : void 0,
          offsetX: this.f,
          offsetY: this.c
      })
  }
  ;
  k.Wk = function() {
      return this.o
  }
  ;
  k.Xk = function() {
      return this.a
  }
  ;
  k.jl = function() {
      return this.v
  }
  ;
  k.ql = function() {
      return this.s
  }
  ;
  k.ml = function() {
      return this.f
  }
  ;
  k.nl = function() {
      return this.c
  }
  ;
  k.Ca = function() {
      return this.Wa
  }
  ;
  k.Zo = function() {
      return this.l
  }
  ;
  k.$o = function() {
      return this.i
  }
  ;
  k.ap = function() {
      return this.b
  }
  ;
  k.Da = function() {
      return this.Ta
  }
  ;
  k.Ia = function() {
      return this.qa
  }
  ;
  k.wl = function() {
      return this.g
  }
  ;
  k.xl = function() {
      return this.j
  }
  ;
  k.aq = function(a) {
      this.o = a
  }
  ;
  k.Bj = function(a) {
      this.a = a
  }
  ;
  k.hq = function(a) {
      this.v = a
  }
  ;
  k.Fj = function(a) {
      this.f = a
  }
  ;
  k.Gj = function(a) {
      this.c = a
  }
  ;
  k.lq = function(a) {
      this.s = a
  }
  ;
  k.yf = function(a) {
      this.Wa = a
  }
  ;
  k.bp = function(a) {
      this.i = a
  }
  ;
  k.fj = function(a) {
      this.b = a
  }
  ;
  k.Af = function(a) {
      this.Ta = a
  }
  ;
  k.Ed = function(a) {
      this.qa = a
  }
  ;
  k.Ij = function(a) {
      this.g = a
  }
  ;
  k.nq = function(a) {
      this.j = a
  }
  ;
  function In(a) {
      a = a ? a : {};
      em.call(this);
      Jn || (Kn = [255, 255, 255, 1],
      Ln = new Ck({
          color: Kn
      }),
      Mn = [20, 2],
      Nn = On = "pixels",
      Pn = [64, 64],
      Qn = "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",
      Rn = .5,
      Sn = new Gn({
          anchor: Mn,
          anchorOrigin: "bottom-left",
          anchorXUnits: On,
          anchorYUnits: Nn,
          crossOrigin: "anonymous",
          rotation: 0,
          scale: Rn,
          size: Pn,
          src: Qn
      }),
      Tn = "NO_IMAGE",
      Un = new Dk({
          color: Kn,
          width: 1
      }),
      Vn = new Dk({
          color: [51, 51, 51, 1],
          width: 2
      }),
      Wn = new Hn({
          font: "bold 16px Helvetica",
          fill: Ln,
          stroke: Vn,
          scale: .8
      }),
      Xn = new Ek({
          fill: Ln,
          image: Sn,
          text: Wn,
          stroke: Un,
          zIndex: 0
      }),
      Jn = [Xn]);
      this.defaultDataProjection = Zb("EPSG:4326");
      this.a = a.defaultStyle ? a.defaultStyle : Jn;
      this.c = void 0 !== a.extractStyles ? a.extractStyles : !0;
      this.j = void 0 !== a.writeStyles ? a.writeStyles : !0;
      this.b = {};
      this.g = void 0 !== a.showPointNames ? a.showPointNames : !0
  }
  var Jn, Kn, Ln, Mn, On, Nn, Pn, Qn, Rn, Sn, Tn, Un, Vn, Wn, Xn;
  v(In, em);
  var Yn = ["http://www.google.com/kml/ext/2.2"]
    , Zn = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"]
    , $n = {
      fraction: "fraction",
      pixels: "pixels",
      insetPixels: "pixels"
  };
  function ao(a, b) {
      var c = [0, 0]
        , d = "start";
      if (a.Y()) {
          var e = a.Y().Ie();
          null === e && (e = Pn);
          2 == e.length && (d = a.Y().a,
          c[0] = d * e[0] / 2,
          c[1] = -d * e[1] / 2,
          d = "left")
      }
      null !== a.Ia() ? (e = a.Ia(),
      a = e.clone(),
      a.Bj(e.a || Wn.a),
      a.fj(e.b || Wn.b),
      a.yf(e.Ca() || Wn.Ca()),
      a.Af(e.Da() || Vn)) : a = Wn.clone();
      a.Ed(b);
      a.Fj(c[0]);
      a.Gj(c[1]);
      a.Ij(d);
      return new Ek({
          text: a
      })
  }
  function bo(a, b, c, d, e) {
      return function() {
          var f = e
            , g = "";
          f && this.W() && (f = "Point" === this.W().S());
          f && (g = this.get("name"),
          f = f && g);
          if (a)
              return f ? (f = ao(a[0], g),
              a.concat(f)) : a;
          if (b) {
              var h = co(b, c, d);
              return f ? (f = ao(h[0], g),
              h.concat(f)) : h
          }
          return f ? (f = ao(c[0], g),
          c.concat(f)) : c
      }
  }
  function co(a, b, c) {
      return Array.isArray(a) ? a : "string" === typeof a ? (!(a in c) && "#" + a in c && (a = "#" + a),
      co(c[a], b, c)) : b
  }
  function eo(a) {
      a = Ok(a, !1);
      if (a = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(a))
          return a = a[1],
          [parseInt(a.substr(6, 2), 16), parseInt(a.substr(4, 2), 16), parseInt(a.substr(2, 2), 16), parseInt(a.substr(0, 2), 16) / 255]
  }
  function fo(a) {
      a = Ok(a, !1);
      for (var b = [], c = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, d; d = c.exec(a); )
          b.push(parseFloat(d[1]), parseFloat(d[2]), d[3] ? parseFloat(d[3]) : 0),
          a = a.substr(d[0].length);
      if ("" === a)
          return b
  }
  function go(a) {
      var b = Ok(a, !1).trim();
      a = a.baseURI;
      a && "about:blank" != a || (a = window.location.href);
      return a ? (new URL(b,a)).href : b
  }
  function ho(a) {
      return mm(a)
  }
  function io(a, b) {
      return L(null, jo, a, b)
  }
  function ko(a, b) {
      if (b = L({
          A: [],
          Tj: []
      }, lo, a, b)) {
          a = b.A;
          b = b.Tj;
          var c;
          var d = 0;
          for (c = Math.min(a.length, b.length); d < c; ++d)
              a[4 * d + 3] = b[d];
          b = new M(null);
          b.aa("XYZM", a);
          return b
      }
  }
  function mo(a, b) {
      var c = L({}, no, a, b);
      if (a = L(null, oo, a, b))
          return b = new M(null),
          b.aa("XYZ", a),
          b.H(c),
          b
  }
  function po(a, b) {
      var c = L({}, no, a, b);
      if (a = L(null, oo, a, b))
          return b = new E(null),
          b.aa("XYZ", a, [a.length]),
          b.H(c),
          b
  }
  function qo(a, b) {
      a = L([], ro, a, b);
      if (!a)
          return null;
      if (0 === a.length)
          return new Wl(a);
      var c = !0, d = a[0].S(), e;
      var f = 1;
      for (e = a.length; f < e; ++f)
          if (b = a[f],
          b.S() != d) {
              c = !1;
              break
          }
      if (c)
          if ("Point" == d) {
              var g = a[0];
              c = g.ja;
              d = g.ca();
              f = 1;
              for (e = a.length; f < e; ++f)
                  b = a[f],
                  ja(d, b.ca());
              g = new ql(null);
              g.aa(c, d);
              so(g, a)
          } else
              "LineString" == d ? (g = new O(null),
              pl(g, a),
              so(g, a)) : "Polygon" == d ? (g = new P(null),
              rl(g, a),
              so(g, a)) : "GeometryCollection" == d ? g = new Wl(a) : wa(!1, 37);
      else
          g = new Wl(a);
      return g
  }
  function to(a, b) {
      var c = L({}, no, a, b);
      if (a = L(null, oo, a, b))
          return b = new D(null),
          b.aa("XYZ", a),
          b.H(c),
          b
  }
  function uo(a, b) {
      var c = L({}, no, a, b);
      if ((a = L([null], vo, a, b)) && a[0]) {
          b = new E(null);
          var d = a[0], e = [d.length], f;
          var g = 1;
          for (f = a.length; g < f; ++g)
              ja(d, a[g]),
              e.push(d.length);
          b.aa("XYZ", d, e);
          b.H(c);
          return b
      }
  }
  function wo(a, b) {
      b = L({}, xo, a, b);
      if (!b)
          return null;
      a = "fillStyle"in b ? b.fillStyle : Ln;
      var c = b.fill;
      void 0 === c || c || (a = null);
      c = "imageStyle"in b ? b.imageStyle : Sn;
      c == Tn && (c = void 0);
      var d = "textStyle"in b ? b.textStyle : Wn
        , e = "strokeStyle"in b ? b.strokeStyle : Un;
      b = b.outline;
      void 0 === b || b || (e = null);
      return [new Ek({
          fill: a,
          image: c,
          stroke: e,
          text: d,
          zIndex: void 0
      })]
  }
  function so(a, b) {
      var c = b.length, d = Array(b.length), e = Array(b.length), f = Array(b.length), g, h, l;
      var m = h = l = !1;
      for (g = 0; g < c; ++g) {
          var n = b[g];
          d[g] = n.get("extrude");
          e[g] = n.get("tessellate");
          f[g] = n.get("altitudeMode");
          m = m || void 0 !== d[g];
          h = h || void 0 !== e[g];
          l = l || f[g]
      }
      m && a.set("extrude", d);
      h && a.set("tessellate", e);
      l && a.set("altitudeMode", f)
  }
  function yo(a, b) {
      bl(zo, a, b)
  }
  function Ao(a, b) {
      bl(Bo, a, b)
  }
  var Co = K(Zn, {
      displayName: I(Q),
      value: I(Q)
  })
    , zo = K(Zn, {
      Data: function(a, b) {
          var c = a.getAttribute("name");
          bl(Co, a, b);
          a = b[b.length - 1];
          null !== c ? a[c] = a.value : null !== a.displayName && (a[a.displayName] = a.value);
          delete a.value
      },
      SchemaData: function(a, b) {
          bl(Do, a, b)
      }
  })
    , Bo = K(Zn, {
      LatLonAltBox: function(a, b) {
          if (a = L({}, Eo, a, b))
              b = b[b.length - 1],
              b.extent = [parseFloat(a.west), parseFloat(a.south), parseFloat(a.east), parseFloat(a.north)],
              b.altitudeMode = a.altitudeMode,
              b.minAltitude = parseFloat(a.minAltitude),
              b.maxAltitude = parseFloat(a.maxAltitude)
      },
      Lod: function(a, b) {
          if (a = L({}, Fo, a, b))
              b = b[b.length - 1],
              b.minLodPixels = parseFloat(a.minLodPixels),
              b.maxLodPixels = parseFloat(a.maxLodPixels),
              b.minFadeExtent = parseFloat(a.minFadeExtent),
              b.maxFadeExtent = parseFloat(a.maxFadeExtent)
      }
  })
    , Eo = K(Zn, {
      altitudeMode: I(Q),
      minAltitude: I(mm),
      maxAltitude: I(mm),
      north: I(mm),
      south: I(mm),
      east: I(mm),
      west: I(mm)
  })
    , Fo = K(Zn, {
      minLodPixels: I(mm),
      maxLodPixels: I(mm),
      minFadeExtent: I(mm),
      maxFadeExtent: I(mm)
  })
    , no = K(Zn, {
      extrude: I(jm),
      tessellate: I(jm),
      altitudeMode: I(Q)
  })
    , jo = K(Zn, {
      coordinates: Vk(fo)
  })
    , vo = K(Zn, {
      innerBoundaryIs: function(a, b) {
          (a = L(void 0, Ho, a, b)) && b[b.length - 1].push(a)
      },
      outerBoundaryIs: function(a, b) {
          (a = L(void 0, Io, a, b)) && (b[b.length - 1][0] = a)
      }
  })
    , lo = K(Zn, {
      when: function(a, b) {
          b = b[b.length - 1].Tj;
          a = Ok(a, !1);
          a = Date.parse(a);
          b.push(isNaN(a) ? 0 : a)
      }
  }, K(Yn, {
      coord: function(a, b) {
          b = b[b.length - 1].A;
          a = Ok(a, !1);
          (a = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(a)) ? b.push(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]), 0) : b.push(0, 0, 0, 0)
      }
  }))
    , oo = K(Zn, {
      coordinates: Vk(fo)
  })
    , Jo = K(Zn, {
      href: I(go)
  }, K(Yn, {
      x: I(mm),
      y: I(mm),
      w: I(mm),
      h: I(mm)
  }))
    , Ko = K(Zn, {
      Icon: I(function(a, b) {
          return (a = L({}, Jo, a, b)) ? a : null
      }),
      heading: I(mm),
      hotSpot: I(function(a) {
          var b = a.getAttribute("xunits")
            , c = a.getAttribute("yunits");
          var d = "insetPixels" !== b ? "insetPixels" !== c ? "bottom-left" : "top-left" : "insetPixels" !== c ? "bottom-right" : "top-right";
          return {
              x: parseFloat(a.getAttribute("x")),
              mh: $n[b],
              y: parseFloat(a.getAttribute("y")),
              nh: $n[c],
              origin: d
          }
      }),
      scale: I(ho)
  })
    , Ho = K(Zn, {
      LinearRing: Vk(io)
  })
    , Lo = K(Zn, {
      color: I(eo),
      scale: I(ho)
  })
    , Mo = K(Zn, {
      color: I(eo),
      width: I(mm)
  })
    , ro = K(Zn, {
      LineString: Uk(mo),
      LinearRing: Uk(po),
      MultiGeometry: Uk(qo),
      Point: Uk(to),
      Polygon: Uk(uo)
  })
    , No = K(Yn, {
      Track: Uk(ko)
  })
    , Po = K(Zn, {
      ExtendedData: yo,
      Region: Ao,
      Link: function(a, b) {
          bl(Oo, a, b)
      },
      address: I(Q),
      description: I(Q),
      name: I(Q),
      open: I(jm),
      phoneNumber: I(Q),
      visibility: I(jm)
  })
    , Oo = K(Zn, {
      href: I(go)
  })
    , Io = K(Zn, {
      LinearRing: Vk(io)
  })
    , Qo = K(Zn, {
      Style: I(wo),
      key: I(Q),
      styleUrl: I(go)
  })
    , So = K(Zn, {
      ExtendedData: yo,
      Region: Ao,
      MultiGeometry: I(qo, "geometry"),
      LineString: I(mo, "geometry"),
      LinearRing: I(po, "geometry"),
      Point: I(to, "geometry"),
      Polygon: I(uo, "geometry"),
      Style: I(wo),
      StyleMap: function(a, b) {
          if (a = L(void 0, Ro, a, b))
              b = b[b.length - 1],
              Array.isArray(a) ? b.Style = a : "string" === typeof a ? b.styleUrl = a : wa(!1, 38)
      },
      address: I(Q),
      description: I(Q),
      name: I(Q),
      open: I(jm),
      phoneNumber: I(Q),
      styleUrl: I(go),
      visibility: I(jm)
  }, K(Yn, {
      MultiTrack: I(function(a, b) {
          if (a = L([], No, a, b))
              return b = new O(null),
              pl(b, a),
              b
      }, "geometry"),
      Track: I(ko, "geometry")
  }))
    , To = K(Zn, {
      color: I(eo),
      fill: I(jm),
      outline: I(jm)
  })
    , Do = K(Zn, {
      SimpleData: function(a, b) {
          var c = a.getAttribute("name");
          null !== c && (a = Q(a),
          b[b.length - 1][c] = a)
      }
  })
    , xo = K(Zn, {
      IconStyle: function(a, b) {
          if (a = L({}, Ko, a, b)) {
              b = b[b.length - 1];
              var c = "Icon"in a ? a.Icon : {}, d = !("Icon"in a) || 0 < Object.keys(c).length, e, f = c.href;
              f ? e = f : d && (e = Qn);
              f = "bottom-left";
              var g = a.hotSpot;
              if (g) {
                  var h = [g.x, g.y];
                  var l = g.mh;
                  var m = g.nh;
                  f = g.origin
              } else
                  e === Qn ? (h = Mn,
                  l = On,
                  m = Nn) : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(e) && (h = [.5, 0],
                  m = l = "fraction");
              var n;
              g = c.x;
              var p = c.y;
              void 0 !== g && void 0 !== p && (n = [g, p]);
              var q;
              g = c.w;
              c = c.h;
              void 0 !== g && void 0 !== c && (q = [g, c]);
              var r;
              c = a.heading;
              void 0 !== c && (r = Ia(c));
              a = a.scale;
              d ? (e == Qn && (q = Pn,
              void 0 === a && (a = Rn)),
              e = new Gn({
                  anchor: h,
                  anchorOrigin: f,
                  anchorXUnits: l,
                  anchorYUnits: m,
                  crossOrigin: "anonymous",
                  offset: n,
                  offsetOrigin: "bottom-left",
                  rotation: r,
                  scale: a,
                  size: q,
                  src: e
              }),
              b.imageStyle = e) : b.imageStyle = Tn
          }
      },
      LabelStyle: function(a, b) {
          (a = L({}, Lo, a, b)) && (b[b.length - 1].textStyle = new Hn({
              fill: new Ck({
                  color: "color"in a ? a.color : Kn
              }),
              scale: a.scale
          }))
      },
      LineStyle: function(a, b) {
          (a = L({}, Mo, a, b)) && (b[b.length - 1].strokeStyle = new Dk({
              color: "color"in a ? a.color : Kn,
              width: "width"in a ? a.width : 1
          }))
      },
      PolyStyle: function(a, b) {
          if (a = L({}, To, a, b)) {
              b = b[b.length - 1];
              b.fillStyle = new Ck({
                  color: "color"in a ? a.color : Kn
              });
              var c = a.fill;
              void 0 !== c && (b.fill = c);
              a = a.outline;
              void 0 !== a && (b.outline = a)
          }
      }
  })
    , Ro = K(Zn, {
      Pair: function(a, b) {
          if (a = L({}, Qo, a, b)) {
              var c = a.key;
              c && "normal" == c && ((c = a.styleUrl) && (b[b.length - 1] = c),
              (a = a.Style) && (b[b.length - 1] = a))
          }
      }
  });
  k = In.prototype;
  k.Hg = function(a, b) {
      var c = K(Zn, {
          Document: Tk(this.Hg, this),
          Folder: Tk(this.Hg, this),
          Placemark: Uk(this.Pg, this),
          Style: this.Rp.bind(this),
          StyleMap: this.Qp.bind(this)
      });
      if (a = L([], c, a, b, this))
          return a
  }
  ;
  k.Pg = function(a, b) {
      var c = L({
          geometry: null
      }, So, a, b);
      if (c) {
          var d = new Kk;
          a = a.getAttribute("id");
          null !== a && d.mc(a);
          b = b[0];
          (a = c.geometry) && il(a, !1, b);
          d.Sa(a);
          delete c.geometry;
          this.c && d.rg(bo(c.Style, c.styleUrl, this.a, this.b, this.g));
          delete c.Style;
          d.H(c);
          return d
      }
  }
  ;
  k.Rp = function(a, b) {
      var c = a.getAttribute("id");
      null !== c && (b = wo(a, b)) && (a = a.baseURI,
      a && "about:blank" != a || (a = window.location.href),
      c = a ? (new URL("#" + c,a)).href : "#" + c,
      this.b[c] = b)
  }
  ;
  k.Qp = function(a, b) {
      var c = a.getAttribute("id");
      null !== c && (b = L(void 0, Ro, a, b)) && (a = a.baseURI,
      a && "about:blank" != a || (a = window.location.href),
      c = a ? (new URL("#" + c,a)).href : "#" + c,
      this.b[c] = b)
  }
  ;
  k.Jg = function(a, b) {
      return ha(Zn, a.namespaceURI) ? (a = this.Pg(a, [gl(this, a, b)])) ? a : null : null
  }
  ;
  k.Dc = function(a, b) {
      if (!ha(Zn, a.namespaceURI))
          return [];
      var c = a.localName;
      if ("Document" == c || "Folder" == c)
          return (c = this.Hg(a, [gl(this, a, b)])) ? c : [];
      if ("Placemark" == c)
          return (b = this.Pg(a, [gl(this, a, b)])) ? [b] : [];
      if ("kml" == c) {
          c = [];
          for (a = a.firstElementChild; a; a = a.nextElementSibling) {
              var d = this.Dc(a, b);
              d && ja(c, d)
          }
          return c
      }
      return []
  }
  ;
  k.Kp = function(a) {
      if (Qk(a))
          return Uo(this, a);
      if (Rk(a))
          return Vo(this, a);
      if ("string" === typeof a)
          return a = Sk(a),
          Uo(this, a)
  }
  ;
  function Uo(a, b) {
      for (b = b.firstChild; b; b = b.nextSibling)
          if (b.nodeType == Node.ELEMENT_NODE) {
              var c = Vo(a, b);
              if (c)
                  return c
          }
  }
  function Vo(a, b) {
      var c;
      for (c = b.firstElementChild; c; c = c.nextElementSibling)
          if (ha(Zn, c.namespaceURI) && "name" == c.localName)
              return Q(c);
      for (c = b.firstElementChild; c; c = c.nextElementSibling)
          if (b = c.localName,
          ha(Zn, c.namespaceURI) && ("Document" == b || "Folder" == b || "Placemark" == b || "kml" == b) && (b = Vo(a, c)))
              return b
  }
  k.Lp = function(a) {
      var b = [];
      Qk(a) ? ja(b, Wo(this, a)) : Rk(a) ? ja(b, Xo(this, a)) : "string" === typeof a && (a = Sk(a),
      ja(b, Wo(this, a)));
      return b
  }
  ;
  function Wo(a, b) {
      var c = [];
      for (b = b.firstChild; b; b = b.nextSibling)
          b.nodeType == Node.ELEMENT_NODE && ja(c, Xo(a, b));
      return c
  }
  function Xo(a, b) {
      var c, d = [];
      for (c = b.firstElementChild; c; c = c.nextElementSibling)
          if (ha(Zn, c.namespaceURI) && "NetworkLink" == c.localName) {
              var e = L({}, Po, c, []);
              d.push(e)
          }
      for (c = b.firstElementChild; c; c = c.nextElementSibling)
          b = c.localName,
          !ha(Zn, c.namespaceURI) || "Document" != b && "Folder" != b && "kml" != b || ja(d, Xo(a, c));
      return d
  }
  k.Op = function(a) {
      var b = [];
      Qk(a) ? ja(b, Yo(this, a)) : Rk(a) ? ja(b, this.vf(a)) : "string" === typeof a && (a = Sk(a),
      ja(b, Yo(this, a)));
      return b
  }
  ;
  function Yo(a, b) {
      var c = [];
      for (b = b.firstChild; b; b = b.nextSibling)
          b.nodeType == Node.ELEMENT_NODE && ja(c, a.vf(b));
      return c
  }
  k.vf = function(a) {
      var b, c = [];
      for (b = a.firstElementChild; b; b = b.nextElementSibling)
          if (ha(Zn, b.namespaceURI) && "Region" == b.localName) {
              var d = L({}, Bo, b, []);
              c.push(d)
          }
      for (b = a.firstElementChild; b; b = b.nextElementSibling)
          a = b.localName,
          !ha(Zn, b.namespaceURI) || "Document" != a && "Folder" != a && "kml" != a || ja(c, this.vf(b));
      return c
  }
  ;
  function Zo(a, b) {
      b = Ph(b);
      b = [255 * (4 == b.length ? b[3] : 1), b[2], b[1], b[0]];
      var c;
      for (c = 0; 4 > c; ++c) {
          var d = parseInt(b[c], 10).toString(16);
          b[c] = 1 == d.length ? "0" + d : d
      }
      rm(a, b.join(""))
  }
  function $o(a, b, c) {
      a = {
          node: a
      };
      var d = b.S();
      if ("GeometryCollection" == d) {
          var e = b.pd();
          var f = ap
      } else
          "MultiPoint" == d ? (e = b.ee(),
          f = bp) : "MultiLineString" == d ? (e = b.qd(),
          f = cp) : "MultiPolygon" == d ? (e = b.Yd(),
          f = dp) : wa(!1, 39);
      cl(a, ep, f, e, c)
  }
  function fp(a, b, c) {
      cl({
          node: a
      }, gp, hp, [b], c)
  }
  function ip(a, b, c) {
      var d = {
          node: a
      };
      b.c && a.setAttribute("id", b.c);
      a = b.M();
      var e = {
          address: 1,
          description: 1,
          name: 1,
          open: 1,
          phoneNumber: 1,
          styleUrl: 1,
          visibility: 1
      };
      e[b.a] = 1;
      var f = Object.keys(a || {}).sort().filter(function(a) {
          return !e[a]
      });
      if (0 < f.length) {
          var g = al(a, f);
          cl(d, jp, kp, [{
              names: f,
              values: g
          }], c)
      }
      if (f = b.bb())
          if (f = f.call(b, 0))
              f = Array.isArray(f) ? f[0] : f,
              this.j && (a.Style = f),
              (f = f.Ia()) && (a.name = f.Ia());
      f = lp[c[c.length - 1].node.namespaceURI];
      a = al(a, f);
      cl(d, jp, $k, a, c, f);
      a = c[0];
      (b = b.W()) && (b = il(b, !0, a));
      cl(d, jp, ap, [b], c)
  }
  function mp(a, b, c) {
      var d = b.ca();
      a = {
          node: a
      };
      a.layout = b.ja;
      a.stride = b.pa();
      b = b.M();
      b.coordinates = d;
      d = np[c[c.length - 1].node.namespaceURI];
      b = al(b, d);
      cl(a, op, $k, b, c, d)
  }
  function pp(a, b, c) {
      b = b.Xd();
      var d = b.shift();
      a = {
          node: a
      };
      cl(a, qp, rp, b, c);
      cl(a, qp, sp, [d], c)
  }
  function tp(a, b) {
      sm(a, Math.round(1E6 * b) / 1E6)
  }
  var up = K(Zn, ["Document", "Placemark"])
    , xp = K(Zn, {
      Document: J(function(a, b, c) {
          cl({
              node: a
          }, vp, wp, b, c, void 0, this)
      }),
      Placemark: J(ip)
  })
    , vp = K(Zn, {
      Placemark: J(ip)
  })
    , yp = K(Zn, {
      Data: J(function(a, b, c) {
          a.setAttribute("name", b.name);
          a = {
              node: a
          };
          b = b.value;
          "object" == typeof b ? (null !== b && b.displayName && cl(a, yp, $k, [b.displayName], c, ["displayName"]),
          null !== b && b.value && cl(a, yp, $k, [b.value], c, ["value"])) : cl(a, yp, $k, [b], c, ["value"])
      }),
      value: J(function(a, b) {
          rm(a, b)
      }),
      displayName: J(function(a, b) {
          a.appendChild(Mk.createCDATASection(b))
      })
  })
    , zp = {
      Point: "Point",
      LineString: "LineString",
      LinearRing: "LinearRing",
      Polygon: "Polygon",
      MultiPoint: "MultiGeometry",
      MultiLineString: "MultiGeometry",
      MultiPolygon: "MultiGeometry",
      GeometryCollection: "MultiGeometry"
  }
    , Ap = K(Zn, ["href"], K(Yn, ["x", "y", "w", "h"]))
    , Bp = K(Zn, {
      href: J(rm)
  }, K(Yn, {
      x: J(sm),
      y: J(sm),
      w: J(sm),
      h: J(sm)
  }))
    , Cp = K(Zn, ["scale", "heading", "Icon", "hotSpot"])
    , Ep = K(Zn, {
      Icon: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = Ap[c[c.length - 1].node.namespaceURI]
            , e = al(b, d);
          cl(a, Bp, $k, e, c, d);
          d = Ap[Yn[0]];
          e = al(b, d);
          cl(a, Bp, Dp, e, c, d)
      }),
      heading: J(sm),
      hotSpot: J(function(a, b) {
          a.setAttribute("x", b.x);
          a.setAttribute("y", b.y);
          a.setAttribute("xunits", b.mh);
          a.setAttribute("yunits", b.nh)
      }),
      scale: J(tp)
  })
    , Fp = K(Zn, ["color", "scale"])
    , Gp = K(Zn, {
      color: J(Zo),
      scale: J(tp)
  })
    , Hp = K(Zn, ["color", "width"])
    , Ip = K(Zn, {
      color: J(Zo),
      width: J(sm)
  })
    , gp = K(Zn, {
      LinearRing: J(mp)
  })
    , ep = K(Zn, {
      LineString: J(mp),
      Point: J(mp),
      Polygon: J(pp),
      GeometryCollection: J($o)
  })
    , lp = K(Zn, "name open visibility address phoneNumber description styleUrl Style".split(" "))
    , jp = K(Zn, {
      ExtendedData: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = b.names;
          b = b.values;
          for (var e = d.length, f = 0; f < e; f++)
              cl(a, yp, Jp, [{
                  name: d[f],
                  value: b[f]
              }], c)
      }),
      MultiGeometry: J($o),
      LineString: J(mp),
      LinearRing: J(mp),
      Point: J(mp),
      Polygon: J(pp),
      Style: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = {}
            , e = b.Ca()
            , f = b.Da()
            , g = b.Y();
          b = b.Ia();
          g instanceof Gn && (d.IconStyle = g);
          b && (d.LabelStyle = b);
          f && (d.LineStyle = f);
          e && (d.PolyStyle = e);
          b = Kp[c[c.length - 1].node.namespaceURI];
          d = al(d, b);
          cl(a, Lp, $k, d, c, b)
      }),
      address: J(rm),
      description: J(rm),
      name: J(rm),
      open: J(qm),
      phoneNumber: J(rm),
      styleUrl: J(rm),
      visibility: J(qm)
  })
    , np = K(Zn, ["extrude", "tessellate", "altitudeMode", "coordinates"])
    , op = K(Zn, {
      extrude: J(qm),
      tessellate: J(qm),
      altitudeMode: J(rm),
      coordinates: J(function(a, b, c) {
          c = c[c.length - 1];
          var d = c.layout;
          c = c.stride;
          var e;
          "XY" == d || "XYM" == d ? e = 2 : "XYZ" == d || "XYZM" == d ? e = 3 : wa(!1, 34);
          var f, g = b.length, h = "";
          if (0 < g) {
              h += b[0];
              for (d = 1; d < e; ++d)
                  h += "," + b[d];
              for (f = c; f < g; f += c)
                  for (h += " " + b[f],
                  d = 1; d < e; ++d)
                      h += "," + b[f + d]
          }
          rm(a, h)
      })
  })
    , qp = K(Zn, {
      outerBoundaryIs: J(fp),
      innerBoundaryIs: J(fp)
  })
    , Mp = K(Zn, {
      color: J(Zo)
  })
    , Kp = K(Zn, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"])
    , Lp = K(Zn, {
      IconStyle: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = {}
            , e = b.kc()
            , f = b.Ie()
            , g = {
              href: b.b.l
          };
          if (e) {
              g.w = e[0];
              g.h = e[1];
              var h = b.Oc()
                , l = b.Vc();
              l && f && 0 !== l[0] && l[1] !== e[1] && (g.x = l[0],
              g.y = f[1] - (l[1] + e[1]));
              !h || h[0] === e[0] / 2 && h[1] === e[1] / 2 || (d.hotSpot = {
                  x: h[0],
                  mh: "pixels",
                  y: e[1] - h[1],
                  nh: "pixels"
              })
          }
          d.Icon = g;
          e = b.a;
          1 !== e && (d.scale = e);
          b = b.g;
          0 !== b && (d.heading = b);
          b = Cp[c[c.length - 1].node.namespaceURI];
          d = al(d, b);
          cl(a, Ep, $k, d, c, b)
      }),
      LabelStyle: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = {}
            , e = b.Ca();
          e && (d.color = e.b);
          (b = b.b) && 1 !== b && (d.scale = b);
          b = Fp[c[c.length - 1].node.namespaceURI];
          d = al(d, b);
          cl(a, Gp, $k, d, c, b)
      }),
      LineStyle: J(function(a, b, c) {
          a = {
              node: a
          };
          var d = Hp[c[c.length - 1].node.namespaceURI];
          b = al({
              color: b.b,
              width: b.c
          }, d);
          cl(a, Ip, $k, b, c, d)
      }),
      PolyStyle: J(function(a, b, c) {
          cl({
              node: a
          }, Mp, Np, [b.b], c)
      })
  });
  function Dp(a, b, c) {
      return Nk(Yn[0], "gx:" + c)
  }
  function wp(a, b) {
      return Nk(b[b.length - 1].node.namespaceURI, "Placemark")
  }
  function ap(a, b) {
      if (a)
          return Nk(b[b.length - 1].node.namespaceURI, zp[a.S()])
  }
  var Np = Yk("color")
    , Jp = Yk("Data")
    , kp = Yk("ExtendedData")
    , rp = Yk("innerBoundaryIs")
    , bp = Yk("Point")
    , cp = Yk("LineString")
    , hp = Yk("LinearRing")
    , dp = Yk("Polygon")
    , sp = Yk("outerBoundaryIs");
  In.prototype.Zb = function(a, b) {
      b = hl(this, b);
      var c = Nk(Zn[4], "kml");
      c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:gx", Yn[0]);
      c.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
      c.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
      var d = {
          node: c
      }
        , e = {};
      1 < a.length ? e.Document = a : 1 == a.length && (e.Placemark = a[0]);
      a = up[c.namespaceURI];
      e = al(e, a);
      cl(d, xp, $k, e, [b], a, this);
      return c
  }
  ;
  var Op = {
      Id: function() {}
  };
  (function(a) {
      function b(a) {
          this.pc = ArrayBuffer.isView && ArrayBuffer.isView(a) ? a : new Uint8Array(a || 0);
          this.type = this.ha = 0;
          this.length = this.pc.length
      }
      function c(a, b, c) {
          var e = c.pc;
          var f = e[c.ha++];
          var g = (f & 112) >> 4;
          if (128 > f)
              return d(a, g, b);
          f = e[c.ha++];
          g |= (f & 127) << 3;
          if (128 > f)
              return d(a, g, b);
          f = e[c.ha++];
          g |= (f & 127) << 10;
          if (128 > f)
              return d(a, g, b);
          f = e[c.ha++];
          g |= (f & 127) << 17;
          if (128 > f)
              return d(a, g, b);
          f = e[c.ha++];
          g |= (f & 127) << 24;
          if (128 > f)
              return d(a, g, b);
          f = e[c.ha++];
          if (128 > f)
              return d(a, g | (f & 1) << 31, b);
          throw Error("Expected varint not more than 10 bytes");
      }
      function d(a, b, c) {
          return c ? 4294967296 * b + (a >>> 0) : 4294967296 * (b >>> 0) + (a >>> 0)
      }
      var e = {
          read: function(a, b, c, d, e) {
              var f = 8 * e - d - 1;
              var g = (1 << f) - 1
                , h = g >> 1
                , l = -7;
              e = c ? e - 1 : 0;
              var m = c ? -1 : 1
                , x = a[b + e];
              e += m;
              c = x & (1 << -l) - 1;
              x >>= -l;
              for (l += f; 0 < l; c = 256 * c + a[b + e],
              e += m,
              l -= 8)
                  ;
              f = c & (1 << -l) - 1;
              c >>= -l;
              for (l += d; 0 < l; f = 256 * f + a[b + e],
              e += m,
              l -= 8)
                  ;
              if (0 === c)
                  c = 1 - h;
              else {
                  if (c === g)
                      return f ? NaN : Infinity * (x ? -1 : 1);
                  f += Math.pow(2, d);
                  c -= h
              }
              return (x ? -1 : 1) * f * Math.pow(2, c - d)
          },
          write: function(a, b, c, d, e, n) {
              var f, g = 8 * n - e - 1, h = (1 << g) - 1, l = h >> 1, m = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
              n = d ? 0 : n - 1;
              var B = d ? 1 : -1
                , A = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
              b = Math.abs(b);
              isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0,
              d = h) : (d = Math.floor(Math.log(b) / Math.LN2),
              1 > b * (f = Math.pow(2, -d)) && (d--,
              f *= 2),
              b = 1 <= d + l ? b + m / f : b + m * Math.pow(2, 1 - l),
              2 <= b * f && (d++,
              f /= 2),
              d + l >= h ? (b = 0,
              d = h) : 1 <= d + l ? (b = (b * f - 1) * Math.pow(2, e),
              d += l) : (b = b * Math.pow(2, l - 1) * Math.pow(2, e),
              d = 0));
              for (; 8 <= e; a[c + n] = b & 255,
              n += B,
              b /= 256,
              e -= 8)
                  ;
              d = d << e | b;
              for (g += e; 0 < g; a[c + n] = d & 255,
              n += B,
              d /= 256,
              g -= 8)
                  ;
              a[c + n - B] |= 128 * A
          }
      };
      "use strict";
      b.c = 0;
      b.f = 1;
      b.b = 2;
      b.a = 5;
      b.prototype = {
          Mg: function(a, b, c) {
              for (c = c || this.length; this.ha < c; ) {
                  var d = this.Ra()
                    , e = d >> 3
                    , f = this.ha;
                  this.type = d & 7;
                  a(e, b, this);
                  this.ha === f && this.pq(d)
              }
              return b
          },
          Gp: function() {
              var a = e.read(this.pc, this.ha, !0, 23, 4);
              this.ha += 4;
              return a
          },
          Cp: function() {
              var a = e.read(this.pc, this.ha, !0, 52, 8);
              this.ha += 8;
              return a
          },
          Ra: function(a) {
              var b = this.pc;
              var d = b[this.ha++];
              var e = d & 127;
              if (128 > d)
                  return e;
              d = b[this.ha++];
              e |= (d & 127) << 7;
              if (128 > d)
                  return e;
              d = b[this.ha++];
              e |= (d & 127) << 14;
              if (128 > d)
                  return e;
              d = b[this.ha++];
              e |= (d & 127) << 21;
              if (128 > d)
                  return e;
              d = b[this.ha];
              return c(e | (d & 15) << 28, a, this)
          },
          Sp: function() {
              return this.Ra(!0)
          },
          Sg: function() {
              var a = this.Ra();
              return 1 === a % 2 ? (a + 1) / -2 : a / 2
          },
          Ap: function() {
              return !!this.Ra()
          },
          Tg: function() {
              for (var a = this.Ra() + this.ha, b = this.pc, c = "", d = this.ha; d < a; ) {
                  var e = b[d]
                    , n = null
                    , p = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
                  if (d + p > a)
                      break;
                  if (1 === p)
                      128 > e && (n = e);
                  else if (2 === p) {
                      var q = b[d + 1];
                      128 === (q & 192) && (n = (e & 31) << 6 | q & 63,
                      127 >= n && (n = null))
                  } else if (3 === p) {
                      q = b[d + 1];
                      var r = b[d + 2];
                      128 === (q & 192) && 128 === (r & 192) && (n = (e & 15) << 12 | (q & 63) << 6 | r & 63,
                      2047 >= n || 55296 <= n && 57343 >= n) && (n = null)
                  } else if (4 === p) {
                      q = b[d + 1];
                      r = b[d + 2];
                      var u = b[d + 3];
                      128 === (q & 192) && 128 === (r & 192) && 128 === (u & 192) && (n = (e & 15) << 18 | (q & 63) << 12 | (r & 63) << 6 | u & 63,
                      65535 >= n || 1114112 <= n) && (n = null)
                  }
                  null === n ? (n = 65533,
                  p = 1) : 65535 < n && (n -= 65536,
                  c += String.fromCharCode(n >>> 10 & 1023 | 55296),
                  n = 56320 | n & 1023);
                  c += String.fromCharCode(n);
                  d += p
              }
              this.ha = a;
              return c
          },
          pq: function(a) {
              a &= 7;
              if (a === b.c)
                  for (; 127 < this.pc[this.ha++]; )
                      ;
              else if (a === b.b)
                  this.ha = this.Ra() + this.ha;
              else if (a === b.a)
                  this.ha += 4;
              else if (a === b.f)
                  this.ha += 8;
              else
                  throw Error("Unimplemented type: " + a);
          }
      };
      a["default"] = b
  }
  )(Op.Id = Op.Id || {});
  Op.Id = Op.Id.default;
  function Pp(a, b, c, d, e) {
      this.g = e;
      this.f = a;
      this.b = b;
      this.i = c;
      this.c = d;
      this.j = Ue()
  }
  k = Pp.prototype;
  k.get = function(a) {
      return this.c[a]
  }
  ;
  k.lb = Pp.prototype.md = function() {
      return this.i
  }
  ;
  k.G = function() {
      this.a || (this.a = "Point" === this.f ? $a(this.b) : ab(this.b, 0, this.b.length, 2));
      return this.a
  }
  ;
  k.fo = function() {
      return this.g
  }
  ;
  k.Ub = function() {
      return this.b
  }
  ;
  k.ca = Pp.prototype.Ub;
  k.W = function() {
      return this
  }
  ;
  k.ho = function() {
      return this.c
  }
  ;
  k.Zd = Pp.prototype.W;
  k.pa = function() {
      return 2
  }
  ;
  k.bb = sa;
  k.S = function() {
      return this.f
  }
  ;
  k.hb = function(a) {
      var b = a.G();
      a = a.re;
      b = mb(a) / mb(b);
      var c = this.j;
      cf(c, a[0], a[3], b, -b, 0, 0, 0);
      Re(this.b, 0, this.b.length, 2, c, this.b)
  }
  ;
  function Qp(a) {
      fl.call(this);
      a = a ? a : {};
      this.defaultDataProjection = new Gb({
          code: "EPSG:3857",
          units: "tile-pixels"
      });
      this.b = a.featureClass ? a.featureClass : Pp;
      this.f = a.geometryName;
      this.g = a.layerName ? a.layerName : "layer";
      this.c = a.layers ? a.layers : null;
      this.a = null
  }
  v(Qp, fl);
  function Rp(a, b, c) {
      if (3 === a) {
          a = {
              keys: [],
              values: [],
              features: []
          };
          var d = c.Ra() + c.ha;
          c.Mg(Sp, a, d);
          a.length = a.features.length;
          a.length && (b[a.name] = a)
      }
  }
  function Sp(a, b, c) {
      if (15 === a)
          b.version = c.Ra();
      else if (1 === a)
          b.name = c.Tg();
      else if (5 === a)
          b.extent = c.Ra();
      else if (2 === a)
          b.features.push(c.ha);
      else if (3 === a)
          b.keys.push(c.Tg());
      else if (4 === a) {
          a = null;
          for (var d = c.Ra() + c.ha; c.ha < d; )
              a = c.Ra() >> 3,
              a = 1 === a ? c.Tg() : 2 === a ? c.Gp() : 3 === a ? c.Cp() : 4 === a ? c.Sp() : 5 === a ? c.Ra() : 6 === a ? c.Sg() : 7 === a ? c.Ap() : null;
          b.values.push(a)
      }
  }
  function Tp(a, b, c) {
      if (1 == a)
          b.id = c.Ra();
      else if (2 == a)
          for (a = c.Ra() + c.ha; c.ha < a; ) {
              var d = b.layer.keys[c.Ra()]
                , e = b.layer.values[c.Ra()];
              b.properties[d] = e
          }
      else
          3 == a ? b.type = c.Ra() : 4 == a && (b.geometry = c.ha)
  }
  function Up(a, b, c) {
      var d = c.type;
      if (0 === d)
          return null;
      var e = c.id
        , f = c.properties;
      f[a.g] = c.layer.name;
      var g = [];
      var h = []
        , l = h;
      b.ha = c.geometry;
      c = b.Ra() + b.ha;
      for (var m = 1, n = 0, p = 0, q = 0, r = 0, u = 0; b.ha < c; )
          n || (n = b.Ra(),
          m = n & 7,
          n >>= 3),
          n--,
          1 === m || 2 === m ? (p += b.Sg(),
          q += b.Sg(),
          1 === m && r > u && (l.push(r),
          u = r),
          g.push(p, q),
          r += 2) : 7 === m ? r > u && (g.push(g[u], g[u + 1]),
          r += 2) : wa(!1, 59);
      r > u && l.push(r);
      b = h.length;
      var x;
      1 === d ? x = 1 === b ? "Point" : "MultiPoint" : 2 === d ? x = 1 === b ? "LineString" : "MultiLineString" : 3 === d && (x = "Polygon");
      d = x;
      if (a.b === Pp)
          g = new a.b(d,g,h,f,e);
      else {
          if ("Polygon" == d) {
              d = [];
              l = b = x = 0;
              for (c = h.length; l < c; ++l)
                  m = h[l],
                  Kf(g, x, m, 2) || (d.push(h.slice(b, l)),
                  b = l),
                  x = m;
              1 < d.length ? (h = d,
              d = new P(null)) : d = new E(null)
          } else
              d = "Point" === d ? new D(null) : "LineString" === d ? new M(null) : "Polygon" === d ? new E(null) : "MultiPoint" === d ? new ql(null) : "MultiLineString" === d ? new O(null) : null;
          d.aa("XY", g, h);
          g = new a.b;
          a.f && g.Zc(a.f);
          a = il(d, !1, hl(a, void 0));
          g.Sa(a);
          g.mc(e);
          g.H(f)
      }
      return g
  }
  k = Qp.prototype;
  k.dg = function() {
      return this.a
  }
  ;
  k.S = function() {
      return "arraybuffer"
  }
  ;
  k.Ma = function(a) {
      var b = this.c;
      a = new Op.Id(a);
      var c = a.Mg(Rp, {}), d = [], e;
      for (e in c)
          if (!b || -1 != b.indexOf(e)) {
              var f = c[e];
              for (var g, h = 0, l = f.length; h < l; ++h) {
                  g = a;
                  var m = f;
                  g.ha = m.features[h];
                  var n = g.Ra() + g.ha;
                  m = {
                      layer: m,
                      type: 0,
                      properties: {}
                  };
                  g.Mg(Tp, m, n);
                  g = m;
                  d.push(Up(this, a, g))
              }
              this.a = f ? [0, 0, f.extent, f.extent] : null
          }
      return d
  }
  ;
  k.pb = function() {
      return this.defaultDataProjection
  }
  ;
  k.yn = function(a) {
      this.c = a
  }
  ;
  k.Vb = function() {}
  ;
  k.Yc = function() {}
  ;
  k.Gd = function() {}
  ;
  k.fd = function() {}
  ;
  k.Yb = function() {}
  ;
  function Vp() {
      em.call(this);
      this.defaultDataProjection = Zb("EPSG:4326")
  }
  v(Vp, em);
  function Wp(a, b) {
      b[b.length - 1].oe[a.getAttribute("k")] = a.getAttribute("v")
  }
  var Xp = [null]
    , Yp = K(Xp, {
      nd: function(a, b) {
          b[b.length - 1].ud.push(a.getAttribute("ref"))
      },
      tag: Wp
  })
    , $p = K(Xp, {
      node: function(a, b) {
          var c = b[0]
            , d = b[b.length - 1]
            , e = a.getAttribute("id")
            , f = [parseFloat(a.getAttribute("lon")), parseFloat(a.getAttribute("lat"))];
          d.hi[e] = f;
          a = L({
              oe: {}
          }, Zp, a, b);
          wb(a.oe) || (f = new D(f),
          il(f, !1, c),
          c = new Kk(f),
          c.mc(e),
          c.H(a.oe),
          d.features.push(c))
      },
      way: function(a, b) {
          var c = a.getAttribute("id");
          a = L({
              id: c,
              ud: [],
              oe: {}
          }, Yp, a, b);
          b[b.length - 1].jh.push(a)
      }
  })
    , Zp = K(Xp, {
      tag: Wp
  });
  Vp.prototype.Dc = function(a, b) {
      b = gl(this, a, b);
      if ("osm" == a.localName) {
          a = L({
              hi: {},
              jh: [],
              features: []
          }, $p, a, [b]);
          for (var c = 0; c < a.jh.length; c++) {
              for (var d = a.jh[c], e = [], f = 0, g = d.ud.length; f < g; f++)
                  ja(e, a.hi[d.ud[f]]);
              d.ud[0] == d.ud[d.ud.length - 1] ? (f = new E(null),
              f.aa("XY", e, [e.length])) : (f = new M(null),
              f.aa("XY", e));
              il(f, !1, b);
              e = new Kk(f);
              e.mc(d.id);
              e.H(d.oe);
              a.features.push(e)
          }
          if (a.features)
              return a.features
      }
      return []
  }
  ;
  Vp.prototype.kh = function() {}
  ;
  Vp.prototype.Zb = function() {}
  ;
  Vp.prototype.ue = function() {}
  ;
  function aq(a) {
      return a.getAttributeNS("http://www.w3.org/1999/xlink", "href")
  }
  ;function bq() {}
  bq.prototype.read = function(a) {
      return Qk(a) ? this.a(a) : Rk(a) ? this.b(a) : "string" === typeof a ? (a = Sk(a),
      this.a(a)) : null
  }
  ;
  function cq() {}
  v(cq, bq);
  cq.prototype.a = function(a) {
      for (a = a.firstChild; a; a = a.nextSibling)
          if (a.nodeType == Node.ELEMENT_NODE)
              return this.b(a);
      return null
  }
  ;
  cq.prototype.b = function(a) {
      return (a = L({}, dq, a, [])) ? a : null
  }
  ;
  var eq = [null, "http://www.opengis.net/ows/1.1"]
    , dq = K(eq, {
      ServiceIdentification: I(function(a, b) {
          return L({}, fq, a, b)
      }),
      ServiceProvider: I(function(a, b) {
          return L({}, gq, a, b)
      }),
      OperationsMetadata: I(function(a, b) {
          return L({}, hq, a, b)
      })
  })
    , iq = K(eq, {
      DeliveryPoint: I(Q),
      City: I(Q),
      AdministrativeArea: I(Q),
      PostalCode: I(Q),
      Country: I(Q),
      ElectronicMailAddress: I(Q)
  })
    , jq = K(eq, {
      Value: Wk(function(a) {
          return Q(a)
      })
  })
    , kq = K(eq, {
      AllowedValues: I(function(a, b) {
          return L({}, jq, a, b)
      })
  })
    , mq = K(eq, {
      Phone: I(function(a, b) {
          return L({}, lq, a, b)
      }),
      Address: I(function(a, b) {
          return L({}, iq, a, b)
      })
  })
    , oq = K(eq, {
      HTTP: I(function(a, b) {
          return L({}, nq, a, b)
      })
  })
    , nq = K(eq, {
      Get: Wk(function(a, b) {
          var c = aq(a);
          if (c)
              return L({
                  href: c
              }, pq, a, b)
      }),
      Post: void 0
  })
    , qq = K(eq, {
      DCP: I(function(a, b) {
          return L({}, oq, a, b)
      })
  })
    , hq = K(eq, {
      Operation: function(a, b) {
          var c = a.getAttribute("name");
          (a = L({}, qq, a, b)) && (b[b.length - 1][c] = a)
      }
  })
    , lq = K(eq, {
      Voice: I(Q),
      Facsimile: I(Q)
  })
    , pq = K(eq, {
      Constraint: Wk(function(a, b) {
          var c = a.getAttribute("name");
          if (c)
              return L({
                  name: c
              }, kq, a, b)
      })
  })
    , rq = K(eq, {
      IndividualName: I(Q),
      PositionName: I(Q),
      ContactInfo: I(function(a, b) {
          return L({}, mq, a, b)
      })
  })
    , fq = K(eq, {
      Title: I(Q),
      ServiceTypeVersion: I(Q),
      ServiceType: I(Q)
  })
    , gq = K(eq, {
      ProviderName: I(Q),
      ProviderSite: I(aq),
      ServiceContact: I(function(a, b) {
          return L({}, rq, a, b)
      })
  });
  function sq(a, b, c, d) {
      var e;
      void 0 !== d ? e = d : e = [];
      for (var f = d = 0; f < b; ) {
          var g = a[f++];
          e[d++] = a[f++];
          e[d++] = g;
          for (g = 2; g < c; ++g)
              e[d++] = a[f++]
      }
      e.length = d
  }
  ;function tq(a) {
      a = a ? a : {};
      fl.call(this);
      this.defaultDataProjection = Zb("EPSG:4326");
      this.b = a.factor ? a.factor : 1E5;
      this.a = a.geometryLayout ? a.geometryLayout : "XY"
  }
  v(tq, xn);
  function uq(a, b, c) {
      var d, e = Array(b);
      for (d = 0; d < b; ++d)
          e[d] = 0;
      var f;
      var g = 0;
      for (f = a.length; g < f; )
          for (d = 0; d < b; ++d,
          ++g) {
              var h = a[g]
                , l = h - e[d];
              e[d] = h;
              a[g] = l
          }
      return vq(a, c ? c : 1E5)
  }
  function wq(a, b, c) {
      var d, e = Array(b);
      for (d = 0; d < b; ++d)
          e[d] = 0;
      a = xq(a, c ? c : 1E5);
      var f;
      c = 0;
      for (f = a.length; c < f; )
          for (d = 0; d < b; ++d,
          ++c)
              e[d] += a[c],
              a[c] = e[d];
      return a
  }
  function vq(a, b) {
      b = b ? b : 1E5;
      var c;
      var d = 0;
      for (c = a.length; d < c; ++d)
          a[d] = Math.round(a[d] * b);
      b = 0;
      for (d = a.length; b < d; ++b)
          c = a[b],
          a[b] = 0 > c ? ~(c << 1) : c << 1;
      b = "";
      d = 0;
      for (c = a.length; d < c; ++d) {
          for (var e, f = a[d], g = ""; 32 <= f; )
              e = (32 | f & 31) + 63,
              g += String.fromCharCode(e),
              f >>= 5;
          g += String.fromCharCode(f + 63);
          b += g
      }
      return b
  }
  function xq(a, b) {
      b = b ? b : 1E5;
      var c = [], d = 0, e = 0, f;
      var g = 0;
      for (f = a.length; g < f; ++g) {
          var h = a.charCodeAt(g) - 63;
          d |= (h & 31) << e;
          32 > h ? (c.push(d),
          e = d = 0) : e += 5
      }
      a = 0;
      for (d = c.length; a < d; ++a)
          e = c[a],
          c[a] = e & 1 ? ~(e >> 1) : e >> 1;
      a = 0;
      for (d = c.length; a < d; ++a)
          c[a] /= b;
      return c
  }
  k = tq.prototype;
  k.he = function(a, b) {
      a = this.Dd(a, b);
      return new Kk(a)
  }
  ;
  k.Lg = function(a, b) {
      return [this.he(a, b)]
  }
  ;
  k.Dd = function(a, b) {
      var c = gf(this.a);
      a = wq(a, c, this.b);
      sq(a, a.length, c, a);
      c = wf(a, 0, a.length, c);
      return il(new M(c,this.a), !1, hl(this, b))
  }
  ;
  k.se = function(a, b) {
      if (a = a.W())
          return this.Hd(a, b);
      wa(!1, 40);
      return ""
  }
  ;
  k.lh = function(a, b) {
      return this.se(a[0], b)
  }
  ;
  k.Hd = function(a, b) {
      a = il(a, !0, hl(this, b));
      b = a.ca();
      a = a.pa();
      sq(b, b.length, a, b);
      return uq(b, a, this.b)
  }
  ;
  function yq(a) {
      a = a ? a : {};
      fl.call(this);
      this.a = a.layerName;
      this.b = a.layers ? a.layers : null;
      this.defaultDataProjection = Zb(a.defaultDataProjection ? a.defaultDataProjection : "EPSG:4326")
  }
  v(yq, jl);
  function zq(a, b) {
      var c = [], d, e;
      var f = 0;
      for (e = a.length; f < e; ++f) {
          var g = a[f];
          0 < f && c.pop();
          0 <= g ? d = b[g] : d = b[~g].slice().reverse();
          c.push.apply(c, d)
      }
      a = 0;
      for (b = c.length; a < b; ++a)
          c[a] = c[a].slice();
      return c
  }
  function Aq(a, b, c, d, e, f, g) {
      a = a.geometries;
      var h = [], l;
      var m = 0;
      for (l = a.length; m < l; ++m)
          h[m] = Bq(a[m], b, c, d, e, f, g);
      return h
  }
  function Bq(a, b, c, d, e, f, g) {
      var h = a.type
        , l = Cq[h];
      c = "Point" === h || "MultiPoint" === h ? l(a, c, d) : l(a, b);
      b = new Kk;
      b.Sa(il(c, !1, g));
      void 0 !== a.id && b.mc(a.id);
      a = a.properties;
      e && (a || (a = {}),
      a[e] = f);
      a && b.H(a);
      return b
  }
  yq.prototype.Kg = function(a, b) {
      if ("Topology" == a.type) {
          var c = null
            , d = null;
          if (a.transform) {
              var e = a.transform;
              c = e.scale;
              d = e.translate
          }
          var f = a.arcs;
          if (e) {
              e = c;
              var g = d, h;
              var l = 0;
              for (h = f.length; l < h; ++l) {
                  var m, n = f[l], p = e, q = g, r = 0, u = 0;
                  var x = 0;
                  for (m = n.length; x < m; ++x) {
                      var B = n[x];
                      r += B[0];
                      u += B[1];
                      B[0] = r;
                      B[1] = u;
                      Dq(B, p, q)
                  }
              }
          }
          e = [];
          a = a.objects;
          g = this.a;
          for (var A in a)
              this.b && -1 == this.b.indexOf(A) || ("GeometryCollection" === a[A].type ? (l = a[A],
              e.push.apply(e, Aq(l, f, c, d, g, A, b))) : (l = a[A],
              e.push(Bq(l, f, c, d, g, A, b))));
          return e
      }
      return []
  }
  ;
  function Dq(a, b, c) {
      a[0] = a[0] * b[0] + c[0];
      a[1] = a[1] * b[1] + c[1]
  }
  yq.prototype.Rg = function() {
      return this.defaultDataProjection
  }
  ;
  var Cq = {
      Point: function(a, b, c) {
          a = a.coordinates;
          b && c && Dq(a, b, c);
          return new D(a)
      },
      LineString: function(a, b) {
          a = zq(a.arcs, b);
          return new M(a)
      },
      Polygon: function(a, b) {
          var c = [], d;
          var e = 0;
          for (d = a.arcs.length; e < d; ++e)
              c[e] = zq(a.arcs[e], b);
          return new E(c)
      },
      MultiPoint: function(a, b, c) {
          a = a.coordinates;
          var d;
          if (b && c) {
              var e = 0;
              for (d = a.length; e < d; ++e)
                  Dq(a[e], b, c)
          }
          return new ql(a)
      },
      MultiLineString: function(a, b) {
          var c = [], d;
          var e = 0;
          for (d = a.arcs.length; e < d; ++e)
              c[e] = zq(a.arcs[e], b);
          return new O(c)
      },
      MultiPolygon: function(a, b) {
          var c = [], d, e;
          var f = 0;
          for (e = a.arcs.length; f < e; ++f) {
              var g = a.arcs[f];
              var h = [];
              var l = 0;
              for (d = g.length; l < d; ++l)
                  h[l] = zq(g[l], b);
              c[f] = h
          }
          return new P(c)
      }
  };
  k = yq.prototype;
  k.ed = function() {}
  ;
  k.te = function() {}
  ;
  k.ve = function() {}
  ;
  k.Og = function() {}
  ;
  k.Xc = function() {}
  ;
  function Eq(a) {
      a = a ? a : {};
      this.c = a.featureType;
      this.a = a.featureNS;
      this.b = a.gmlFormat ? a.gmlFormat : new um;
      this.l = a.schemaLocation ? a.schemaLocation : Fq["1.1.0"];
      em.call(this)
  }
  v(Eq, em);
  var Fq = {
      "1.1.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd",
      "1.0.0": "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"
  };
  Eq.prototype.Dc = function(a, b) {
      var c = {
          featureType: this.c,
          featureNS: this.a
      };
      tb(c, gl(this, a, b ? b : {}));
      b = [c];
      this.b.b["http://www.opengis.net/gml"].featureMember = Uk(hm.prototype.ie);
      (a = L([], this.b.b, a, b, this.b)) || (a = []);
      return a
  }
  ;
  Eq.prototype.j = function(a) {
      if (Qk(a))
          return Gq(a);
      if (Rk(a))
          return L({}, Hq, a, []);
      if ("string" === typeof a)
          return a = Sk(a),
          Gq(a)
  }
  ;
  Eq.prototype.g = function(a) {
      if (Qk(a))
          return Iq(this, a);
      if (Rk(a))
          return Jq(this, a);
      if ("string" === typeof a)
          return a = Sk(a),
          Iq(this, a)
  }
  ;
  function Iq(a, b) {
      for (b = b.firstChild; b; b = b.nextSibling)
          if (b.nodeType == Node.ELEMENT_NODE)
              return Jq(a, b)
  }
  var Kq = {
      "http://www.opengis.net/gml": {
          boundedBy: I(hm.prototype.rf, "bounds")
      }
  };
  function Jq(a, b) {
      var c = {}
        , d = pm(b.getAttribute("numberOfFeatures"));
      c.numberOfFeatures = d;
      return L(c, Kq, b, [], a.b)
  }
  var Lq = {
      "http://www.opengis.net/wfs": {
          totalInserted: I(om),
          totalUpdated: I(om),
          totalDeleted: I(om)
      }
  }
    , Mq = {
      "http://www.opengis.net/ogc": {
          FeatureId: Uk(function(a) {
              return a.getAttribute("fid")
          })
      }
  }
    , Nq = {
      "http://www.opengis.net/wfs": {
          Feature: function(a, b) {
              bl(Mq, a, b)
          }
      }
  }
    , Hq = {
      "http://www.opengis.net/wfs": {
          TransactionSummary: I(function(a, b) {
              return L({}, Lq, a, b)
          }, "transactionSummary"),
          InsertResults: I(function(a, b) {
              return L([], Nq, a, b)
          }, "insertIds")
      }
  };
  function Gq(a) {
      for (a = a.firstChild; a; a = a.nextSibling)
          if (a.nodeType == Node.ELEMENT_NODE)
              return L({}, Hq, a, [])
  }
  var Oq = {
      "http://www.opengis.net/wfs": {
          PropertyName: J(rm)
      }
  };
  function Pq(a, b) {
      var c = Nk("http://www.opengis.net/ogc", "Filter")
        , d = Nk("http://www.opengis.net/ogc", "FeatureId");
      c.appendChild(d);
      d.setAttribute("fid", b);
      a.appendChild(c)
  }
  function Qq(a, b) {
      a = (a ? a : "feature") + ":";
      return 0 === b.indexOf(a) ? b : a + b
  }
  var Rq = {
      "http://www.opengis.net/wfs": {
          Insert: J(function(a, b, c) {
              var d = c[c.length - 1]
                , e = d.gmlVersion;
              d = Nk(d.featureNS, d.featureType);
              a.appendChild(d);
              if (2 === e) {
                  a = Dm.prototype;
                  (e = b.c) && d.setAttribute("fid", e);
                  e = c[c.length - 1];
                  var f = e.featureNS
                    , g = b.a;
                  e.qb || (e.qb = {},
                  e.qb[f] = {});
                  var h = b.M();
                  b = [];
                  var l = [];
                  for (n in h) {
                      var m = h[n];
                      null !== m && (b.push(n),
                      l.push(m),
                      n == g || m instanceof ef ? n in e.qb[f] || (e.qb[f][n] = J(a.ri, a)) : n in e.qb[f] || (e.qb[f][n] = J(rm)))
                  }
                  var n = tb({}, e);
                  n.node = d;
                  cl(n, e.qb, Yk(void 0, f), l, c, b)
              } else
                  um.prototype.zi(d, b, c)
          }),
          Update: J(function(a, b, c) {
              var d = c[c.length - 1];
              wa(void 0 !== b.c, 27);
              var e = d.featurePrefix
                , f = d.featureNS
                , g = b.a;
              a.setAttribute("typeName", Qq(e, d.featureType));
              a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
              e = b.c;
              if (void 0 !== e) {
                  f = b.P();
                  for (var h = [], l = 0, m = f.length; l < m; l++) {
                      var n = b.get(f[l]);
                      if (void 0 !== n) {
                          var p = f[l];
                          n instanceof ef && (p = g);
                          h.push({
                              name: p,
                              value: n
                          })
                      }
                  }
                  cl({
                      gmlVersion: d.gmlVersion,
                      node: a,
                      hasZ: d.hasZ,
                      srsName: d.srsName
                  }, Rq, Yk("Property"), h, c);
                  Pq(a, e)
              }
          }),
          Delete: J(function(a, b, c) {
              c = c[c.length - 1];
              wa(void 0 !== b.c, 26);
              var d = c.featurePrefix
                , e = c.featureNS;
              a.setAttribute("typeName", Qq(d, c.featureType));
              a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + d, e);
              b = b.c;
              void 0 !== b && Pq(a, b)
          }),
          Property: J(function(a, b, c) {
              var d = Nk("http://www.opengis.net/wfs", "Name")
                , e = c[c.length - 1].gmlVersion;
              a.appendChild(d);
              rm(d, b.name);
              void 0 !== b.value && null !== b.value && (d = Nk("http://www.opengis.net/wfs", "Value"),
              a.appendChild(d),
              b.value instanceof ef ? 2 === e ? Dm.prototype.ri(d, b.value, c) : um.prototype.wd(d, b.value, c) : rm(d, b.value))
          }),
          Native: J(function(a, b) {
              b.yq && a.setAttribute("vendorId", b.yq);
              void 0 !== b.Xp && a.setAttribute("safeToIgnore", b.Xp);
              void 0 !== b.value && rm(a, b.value)
          })
      }
  };
  function Sq(a, b, c) {
      a = {
          node: a
      };
      b = b.b;
      for (var d = 0, e = b.length; d < e; ++d) {
          var f = b[d];
          cl(a, Tq, Yk(f.nc), [f], c)
      }
  }
  function Uq(a, b) {
      void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
      Vq(a, b.b);
      Wq(a, "" + b.f)
  }
  function Xq(a, b, c) {
      a = Nk("http://www.opengis.net/ogc", a);
      rm(a, c);
      b.appendChild(a)
  }
  function Vq(a, b) {
      Xq("PropertyName", a, b)
  }
  function Wq(a, b) {
      Xq("Literal", a, b)
  }
  function Yq(a, b) {
      var c = Nk("http://www.opengis.net/gml", "TimeInstant");
      a.appendChild(c);
      a = Nk("http://www.opengis.net/gml", "timePosition");
      c.appendChild(a);
      rm(a, b)
  }
  var Tq = {
      "http://www.opengis.net/wfs": {
          Query: J(function(a, b, c) {
              var d = c[c.length - 1]
                , e = d.featurePrefix
                , f = d.featureNS
                , g = d.propertyNames
                , h = d.srsName;
              a.setAttribute("typeName", e ? Qq(e, b) : b);
              h && a.setAttribute("srsName", h);
              f && a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:" + e, f);
              b = tb({}, d);
              b.node = a;
              cl(b, Oq, Yk("PropertyName"), g, c);
              if (d = d.filter)
                  g = Nk("http://www.opengis.net/ogc", "Filter"),
                  a.appendChild(g),
                  cl({
                      node: g
                  }, Tq, Yk(d.nc), [d], c)
          })
      },
      "http://www.opengis.net/ogc": {
          During: J(function(a, b) {
              var c = Nk("http://www.opengis.net/fes", "ValueReference");
              rm(c, b.b);
              a.appendChild(c);
              c = Nk("http://www.opengis.net/gml", "TimePeriod");
              a.appendChild(c);
              a = Nk("http://www.opengis.net/gml", "begin");
              c.appendChild(a);
              Yq(a, b.a);
              a = Nk("http://www.opengis.net/gml", "end");
              c.appendChild(a);
              Yq(a, b.f)
          }),
          And: J(Sq),
          Or: J(Sq),
          Not: J(function(a, b, c) {
              b = b.condition;
              cl({
                  node: a
              }, Tq, Yk(b.nc), [b], c)
          }),
          BBOX: J(function(a, b, c) {
              c[c.length - 1].srsName = b.srsName;
              Vq(a, b.geometryName);
              um.prototype.wd(a, b.extent, c)
          }),
          Intersects: J(function(a, b, c) {
              c[c.length - 1].srsName = b.srsName;
              Vq(a, b.geometryName);
              um.prototype.wd(a, b.geometry, c)
          }),
          Within: J(function(a, b, c) {
              c[c.length - 1].srsName = b.srsName;
              Vq(a, b.geometryName);
              um.prototype.wd(a, b.geometry, c)
          }),
          PropertyIsEqualTo: J(Uq),
          PropertyIsNotEqualTo: J(Uq),
          PropertyIsLessThan: J(Uq),
          PropertyIsLessThanOrEqualTo: J(Uq),
          PropertyIsGreaterThan: J(Uq),
          PropertyIsGreaterThanOrEqualTo: J(Uq),
          PropertyIsNull: J(function(a, b) {
              Vq(a, b.b)
          }),
          PropertyIsBetween: J(function(a, b) {
              Vq(a, b.b);
              var c = Nk("http://www.opengis.net/ogc", "LowerBoundary");
              a.appendChild(c);
              Wq(c, "" + b.a);
              c = Nk("http://www.opengis.net/ogc", "UpperBoundary");
              a.appendChild(c);
              Wq(c, "" + b.f)
          }),
          PropertyIsLike: J(function(a, b) {
              a.setAttribute("wildCard", b.g);
              a.setAttribute("singleChar", b.i);
              a.setAttribute("escapeChar", b.f);
              void 0 !== b.a && a.setAttribute("matchCase", b.a.toString());
              Vq(a, b.b);
              Wq(a, "" + b.c)
          })
      }
  };
  Eq.prototype.o = function(a) {
      var b = Nk("http://www.opengis.net/wfs", "GetFeature");
      b.setAttribute("service", "WFS");
      b.setAttribute("version", "1.1.0");
      if (a) {
          a.handle && b.setAttribute("handle", a.handle);
          a.outputFormat && b.setAttribute("outputFormat", a.outputFormat);
          void 0 !== a.maxFeatures && b.setAttribute("maxFeatures", a.maxFeatures);
          a.resultType && b.setAttribute("resultType", a.resultType);
          void 0 !== a.startIndex && b.setAttribute("startIndex", a.startIndex);
          void 0 !== a.count && b.setAttribute("count", a.count);
          var c = a.filter;
          if (a.bbox) {
              wa(a.geometryName, 12);
              var d = Vl(a.geometryName, a.bbox, a.srsName);
              c ? c = Ul(c, d) : c = d
          }
      }
      b.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.l);
      c = {
          node: b,
          srsName: a.srsName,
          featureNS: a.featureNS ? a.featureNS : this.a,
          featurePrefix: a.featurePrefix,
          geometryName: a.geometryName,
          filter: c,
          propertyNames: a.propertyNames ? a.propertyNames : []
      };
      wa(Array.isArray(a.featureTypes), 11);
      a = a.featureTypes;
      c = [c];
      d = tb({}, c[c.length - 1]);
      d.node = b;
      cl(d, Tq, Yk("Query"), a, c);
      return b
  }
  ;
  Eq.prototype.v = function(a, b, c, d) {
      var e = []
        , f = Nk("http://www.opengis.net/wfs", "Transaction")
        , g = d.version ? d.version : "1.1.0"
        , h = "1.0.0" === g ? 2 : 3;
      f.setAttribute("service", "WFS");
      f.setAttribute("version", g);
      if (d) {
          var l = d.gmlOptions ? d.gmlOptions : {};
          d.handle && f.setAttribute("handle", d.handle)
      }
      f.setAttributeNS("http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", Fq[g]);
      var m = d.featurePrefix ? d.featurePrefix : "feature";
      a && (g = {
          node: f,
          featureNS: d.featureNS,
          featureType: d.featureType,
          featurePrefix: m,
          gmlVersion: h,
          hasZ: d.hasZ,
          srsName: d.srsName
      },
      tb(g, l),
      cl(g, Rq, Yk("Insert"), a, e));
      b && (g = {
          node: f,
          featureNS: d.featureNS,
          featureType: d.featureType,
          featurePrefix: m,
          gmlVersion: h,
          hasZ: d.hasZ,
          srsName: d.srsName
      },
      tb(g, l),
      cl(g, Rq, Yk("Update"), b, e));
      c && cl({
          node: f,
          featureNS: d.featureNS,
          featureType: d.featureType,
          featurePrefix: m,
          gmlVersion: h,
          srsName: d.srsName
      }, Rq, Yk("Delete"), c, e);
      d.nativeElements && cl({
          node: f,
          featureNS: d.featureNS,
          featureType: d.featureType,
          featurePrefix: m,
          gmlVersion: h,
          srsName: d.srsName
      }, Rq, Yk("Native"), d.nativeElements, e);
      return f
  }
  ;
  Eq.prototype.Qg = function(a) {
      for (a = a.firstChild; a; a = a.nextSibling)
          if (a.nodeType == Node.ELEMENT_NODE)
              return this.uf(a);
      return null
  }
  ;
  Eq.prototype.uf = function(a) {
      if (a.firstElementChild && a.firstElementChild.firstElementChild)
          for (a = a.firstElementChild.firstElementChild,
          a = a.firstElementChild; a; a = a.nextElementSibling)
              if (0 !== a.childNodes.length && (1 !== a.childNodes.length || 3 !== a.firstChild.nodeType)) {
                  var b = [{}];
                  this.b.rf(a, b);
                  return Zb(b.pop().srsName)
              }
      return null
  }
  ;
  function Zq(a) {
      a = a ? a : {};
      fl.call(this);
      this.b = void 0 !== a.splitCollection ? a.splitCollection : !1
  }
  v(Zq, xn);
  function $q(a) {
      a = a.V();
      return 0 === a.length ? "" : a.join(" ")
  }
  function ar(a) {
      a = a.V();
      for (var b = [], c = 0, d = a.length; c < d; ++c)
          b.push(a[c].join(" "));
      return b.join(",")
  }
  function br(a) {
      var b = [];
      a = a.Xd();
      for (var c = 0, d = a.length; c < d; ++c)
          b.push("(" + ar(a[c]) + ")");
      return b.join(",")
  }
  function cr(a) {
      var b = a.S()
        , c = (0,
      dr[b])(a);
      b = b.toUpperCase();
      if (a instanceof ff) {
          a = a.ja;
          var d = "";
          if ("XYZ" === a || "XYZM" === a)
              d += "Z";
          if ("XYM" === a || "XYZM" === a)
              d += "M";
          a = d;
          0 < a.length && (b += " " + a)
      }
      return 0 === c.length ? b + " EMPTY" : b + "(" + c + ")"
  }
  var dr = {
      Point: $q,
      LineString: ar,
      Polygon: br,
      MultiPoint: function(a) {
          var b = [];
          a = a.ee();
          for (var c = 0, d = a.length; c < d; ++c)
              b.push("(" + $q(a[c]) + ")");
          return b.join(",")
      },
      MultiLineString: function(a) {
          var b = [];
          a = a.qd();
          for (var c = 0, d = a.length; c < d; ++c)
              b.push("(" + ar(a[c]) + ")");
          return b.join(",")
      },
      MultiPolygon: function(a) {
          var b = [];
          a = a.Yd();
          for (var c = 0, d = a.length; c < d; ++c)
              b.push("(" + br(a[c]) + ")");
          return b.join(",")
      },
      GeometryCollection: function(a) {
          var b = [];
          a = a.pd();
          for (var c = 0, d = a.length; c < d; ++c)
              b.push(cr(a[c]));
          return b.join(",")
      }
  };
  k = Zq.prototype;
  k.he = function(a, b) {
      return (a = this.Dd(a, b)) ? (b = new Kk,
      b.Sa(a),
      b) : null
  }
  ;
  k.Lg = function(a, b) {
      var c = [];
      a = this.Dd(a, b);
      this.b && "GeometryCollection" == a.S() ? c = a.a : c = [a];
      b = [];
      for (var d = 0, e = c.length; d < e; ++d)
          a = new Kk,
          a.Sa(c[d]),
          b.push(a);
      return b
  }
  ;
  k.Dd = function(a, b) {
      a = new er(new fr(a));
      gr(a);
      return (a = hr(a)) ? il(a, !1, b) : null
  }
  ;
  k.se = function(a, b) {
      return (a = a.W()) ? this.Hd(a, b) : ""
  }
  ;
  k.lh = function(a, b) {
      if (1 == a.length)
          return this.se(a[0], b);
      for (var c = [], d = 0, e = a.length; d < e; ++d)
          c.push(a[d].W());
      a = new Wl(c);
      return this.Hd(a, b)
  }
  ;
  k.Hd = function(a, b) {
      return cr(il(a, !0, b))
  }
  ;
  function fr(a) {
      this.a = a;
      this.b = -1
  }
  function ir(a) {
      var b = a.a.charAt(++a.b)
        , c = {
          position: a.b,
          value: b
      };
      if ("(" == b)
          c.type = 2;
      else if ("," == b)
          c.type = 5;
      else if (")" == b)
          c.type = 3;
      else if ("0" <= b && "9" >= b || "." == b || "-" == b) {
          c.type = 4;
          b = a.b;
          var d = !1
            , e = !1;
          do {
              if ("." == f)
                  d = !0;
              else if ("e" == f || "E" == f)
                  e = !0;
              var f = a.a.charAt(++a.b)
          } while ("0" <= f && "9" >= f || "." == f && (void 0 === d || !d) || !e && ("e" == f || "E" == f) || e && ("-" == f || "+" == f));a = parseFloat(a.a.substring(b, a.b--));
          c.value = a
      } else if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b) {
          c.type = 1;
          b = a.b;
          do
              f = a.a.charAt(++a.b);
          while ("a" <= f && "z" >= f || "A" <= f && "Z" >= f);a = a.a.substring(b, a.b--).toUpperCase();
          c.value = a
      } else {
          if (" " == b || "\t" == b || "\r" == b || "\n" == b)
              return ir(a);
          if ("" === b)
              c.type = 6;
          else
              throw Error("Unexpected character: " + b);
      }
      return c
  }
  function er(a) {
      this.f = a;
      this.a = "XY"
  }
  function gr(a) {
      a.b = ir(a.f)
  }
  function jr(a, b) {
      (b = a.b.type == b) && gr(a);
      return b
  }
  function hr(a) {
      var b = a.b;
      if (jr(a, 1)) {
          b = b.value;
          var c = "XY"
            , d = a.b;
          1 == a.b.type && (d = d.value,
          "Z" === d ? c = "XYZ" : "M" === d ? c = "XYM" : "ZM" === d && (c = "XYZM"),
          "XY" !== c && gr(a));
          a.a = c;
          if ("GEOMETRYCOLLECTION" == b) {
              a: {
                  if (jr(a, 2)) {
                      b = [];
                      do
                          b.push(hr(a));
                      while (jr(a, 5));if (jr(a, 3)) {
                          a = b;
                          break a
                      }
                  } else if (kr(a)) {
                      a = [];
                      break a
                  }
                  throw Error(lr(a));
              }
              return new Wl(a)
          }
          d = mr[b];
          c = nr[b];
          if (!d || !c)
              throw Error("Invalid geometry type: " + b);
          b = d.call(a);
          return new c(b,a.a)
      }
      throw Error(lr(a));
  }
  k = er.prototype;
  k.Fg = function() {
      if (jr(this, 2)) {
          var a = or(this);
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return null;
      throw Error(lr(this));
  }
  ;
  k.Eg = function() {
      if (jr(this, 2)) {
          var a = pr(this);
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return [];
      throw Error(lr(this));
  }
  ;
  k.Gg = function() {
      if (jr(this, 2)) {
          var a = qr(this);
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return [];
      throw Error(lr(this));
  }
  ;
  k.np = function() {
      if (jr(this, 2)) {
          var a;
          if (2 == this.b.type)
              for (a = [this.Fg()]; jr(this, 5); )
                  a.push(this.Fg());
          else
              a = pr(this);
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return [];
      throw Error(lr(this));
  }
  ;
  k.mp = function() {
      if (jr(this, 2)) {
          var a = qr(this);
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return [];
      throw Error(lr(this));
  }
  ;
  k.op = function() {
      if (jr(this, 2)) {
          for (var a = [this.Gg()]; jr(this, 5); )
              a.push(this.Gg());
          if (jr(this, 3))
              return a
      } else if (kr(this))
          return [];
      throw Error(lr(this));
  }
  ;
  function or(a) {
      for (var b = [], c = a.a.length, d = 0; d < c; ++d) {
          var e = a.b;
          if (jr(a, 4))
              b.push(e.value);
          else
              break
      }
      if (b.length == c)
          return b;
      throw Error(lr(a));
  }
  function pr(a) {
      for (var b = [or(a)]; jr(a, 5); )
          b.push(or(a));
      return b
  }
  function qr(a) {
      for (var b = [a.Eg()]; jr(a, 5); )
          b.push(a.Eg());
      return b
  }
  function kr(a) {
      var b = 1 == a.b.type && "EMPTY" == a.b.value;
      b && gr(a);
      return b
  }
  function lr(a) {
      return "Unexpected `" + a.b.value + "` at position " + a.b.position + " in `" + a.f.a + "`"
  }
  var nr = {
      POINT: D,
      LINESTRING: M,
      POLYGON: E,
      MULTIPOINT: ql,
      MULTILINESTRING: O,
      MULTIPOLYGON: P
  }
    , mr = {
      POINT: er.prototype.Fg,
      LINESTRING: er.prototype.Eg,
      POLYGON: er.prototype.Gg,
      MULTIPOINT: er.prototype.np,
      MULTILINESTRING: er.prototype.mp,
      MULTIPOLYGON: er.prototype.op
  };
  function rr() {
      this.version = void 0
  }
  v(rr, bq);
  rr.prototype.a = function(a) {
      for (a = a.firstChild; a; a = a.nextSibling)
          if (a.nodeType == Node.ELEMENT_NODE)
              return this.b(a);
      return null
  }
  ;
  rr.prototype.b = function(a) {
      this.version = a.getAttribute("version").trim();
      return (a = L({
          version: this.version
      }, sr, a, [])) ? a : null
  }
  ;
  function tr(a, b) {
      return L({}, ur, a, b)
  }
  function vr(a, b) {
      return L({}, wr, a, b)
  }
  function xr(a, b) {
      if (b = tr(a, b))
          return a = [pm(a.getAttribute("width")), pm(a.getAttribute("height"))],
          b.size = a,
          b
  }
  function yr(a, b) {
      return L([], zr, a, b)
  }
  var Ar = [null, "http://www.opengis.net/wms"]
    , sr = K(Ar, {
      Service: I(function(a, b) {
          return L({}, Br, a, b)
      }),
      Capability: I(function(a, b) {
          return L({}, Cr, a, b)
      })
  })
    , Cr = K(Ar, {
      Request: I(function(a, b) {
          return L({}, Dr, a, b)
      }),
      Exception: I(function(a, b) {
          return L([], Er, a, b)
      }),
      Layer: I(function(a, b) {
          return L({}, Fr, a, b)
      })
  })
    , Br = K(Ar, {
      Name: I(Q),
      Title: I(Q),
      Abstract: I(Q),
      KeywordList: I(yr),
      OnlineResource: I(aq),
      ContactInformation: I(function(a, b) {
          return L({}, Gr, a, b)
      }),
      Fees: I(Q),
      AccessConstraints: I(Q),
      LayerLimit: I(om),
      MaxWidth: I(om),
      MaxHeight: I(om)
  })
    , Gr = K(Ar, {
      ContactPersonPrimary: I(function(a, b) {
          return L({}, Hr, a, b)
      }),
      ContactPosition: I(Q),
      ContactAddress: I(function(a, b) {
          return L({}, Ir, a, b)
      }),
      ContactVoiceTelephone: I(Q),
      ContactFacsimileTelephone: I(Q),
      ContactElectronicMailAddress: I(Q)
  })
    , Hr = K(Ar, {
      ContactPerson: I(Q),
      ContactOrganization: I(Q)
  })
    , Ir = K(Ar, {
      AddressType: I(Q),
      Address: I(Q),
      City: I(Q),
      StateOrProvince: I(Q),
      PostCode: I(Q),
      Country: I(Q)
  })
    , Er = K(Ar, {
      Format: Uk(Q)
  })
    , Fr = K(Ar, {
      Name: I(Q),
      Title: I(Q),
      Abstract: I(Q),
      KeywordList: I(yr),
      CRS: Wk(Q),
      EX_GeographicBoundingBox: I(function(a, b) {
          var c = L({}, Jr, a, b);
          if (c) {
              a = c.westBoundLongitude;
              b = c.southBoundLatitude;
              var d = c.eastBoundLongitude;
              c = c.northBoundLatitude;
              if (void 0 !== a && void 0 !== b && void 0 !== d && void 0 !== c)
                  return [a, b, d, c]
          }
      }),
      BoundingBox: Wk(function(a) {
          var b = [nm(a.getAttribute("minx")), nm(a.getAttribute("miny")), nm(a.getAttribute("maxx")), nm(a.getAttribute("maxy"))]
            , c = [nm(a.getAttribute("resx")), nm(a.getAttribute("resy"))];
          return {
              crs: a.getAttribute("CRS"),
              extent: b,
              res: c
          }
      }),
      Dimension: Wk(function(a) {
          return {
              name: a.getAttribute("name"),
              units: a.getAttribute("units"),
              unitSymbol: a.getAttribute("unitSymbol"),
              "default": a.getAttribute("default"),
              multipleValues: km(a.getAttribute("multipleValues")),
              nearestValue: km(a.getAttribute("nearestValue")),
              current: km(a.getAttribute("current")),
              values: Q(a)
          }
      }),
      Attribution: I(function(a, b) {
          return L({}, Kr, a, b)
      }),
      AuthorityURL: Wk(function(a, b) {
          if (b = tr(a, b))
              return b.name = a.getAttribute("name"),
              b
      }),
      Identifier: Wk(Q),
      MetadataURL: Wk(function(a, b) {
          if (b = tr(a, b))
              return b.type = a.getAttribute("type"),
              b
      }),
      DataURL: Wk(tr),
      FeatureListURL: Wk(tr),
      Style: Wk(function(a, b) {
          return L({}, Lr, a, b)
      }),
      MinScaleDenominator: I(mm),
      MaxScaleDenominator: I(mm),
      Layer: Wk(function(a, b) {
          var c = b[b.length - 1]
            , d = L({}, Fr, a, b);
          if (d)
              return b = km(a.getAttribute("queryable")),
              void 0 === b && (b = c.queryable),
              d.queryable = void 0 !== b ? b : !1,
              b = pm(a.getAttribute("cascaded")),
              void 0 === b && (b = c.cascaded),
              d.cascaded = b,
              b = km(a.getAttribute("opaque")),
              void 0 === b && (b = c.opaque),
              d.opaque = void 0 !== b ? b : !1,
              b = km(a.getAttribute("noSubsets")),
              void 0 === b && (b = c.noSubsets),
              d.noSubsets = void 0 !== b ? b : !1,
              (b = nm(a.getAttribute("fixedWidth"))) || (b = c.fixedWidth),
              d.fixedWidth = b,
              (a = nm(a.getAttribute("fixedHeight"))) || (a = c.fixedHeight),
              d.fixedHeight = a,
              ["Style", "CRS", "AuthorityURL"].forEach(function(a) {
                  a in c && (d[a] = (d[a] || []).concat(c[a]))
              }),
              "EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" ").forEach(function(a) {
                  a in d || (d[a] = c[a])
              }),
              d
      })
  })
    , Kr = K(Ar, {
      Title: I(Q),
      OnlineResource: I(aq),
      LogoURL: I(xr)
  })
    , Jr = K(Ar, {
      westBoundLongitude: I(mm),
      eastBoundLongitude: I(mm),
      southBoundLatitude: I(mm),
      northBoundLatitude: I(mm)
  })
    , Dr = K(Ar, {
      GetCapabilities: I(vr),
      GetMap: I(vr),
      GetFeatureInfo: I(vr)
  })
    , wr = K(Ar, {
      Format: Wk(Q),
      DCPType: Wk(function(a, b) {
          return L({}, Mr, a, b)
      })
  })
    , Mr = K(Ar, {
      HTTP: I(function(a, b) {
          return L({}, Nr, a, b)
      })
  })
    , Nr = K(Ar, {
      Get: I(tr),
      Post: I(tr)
  })
    , Lr = K(Ar, {
      Name: I(Q),
      Title: I(Q),
      Abstract: I(Q),
      LegendURL: Wk(xr),
      StyleSheetURL: I(tr),
      StyleURL: I(tr)
  })
    , ur = K(Ar, {
      Format: I(Q),
      OnlineResource: I(aq)
  })
    , zr = K(Ar, {
      Keyword: Uk(Q)
  });
  function Or(a) {
      a = a ? a : {};
      this.a = "http://mapserver.gis.umn.edu/mapserver";
      this.b = new Dm;
      this.c = a.layers ? a.layers : null;
      em.call(this)
  }
  v(Or, em);
  Or.prototype.Dc = function(a, b) {
      var c = {};
      b && tb(c, gl(this, a, b));
      c = [c];
      a.setAttribute("namespaceURI", this.a);
      var d = a.localName;
      b = [];
      if (0 !== a.childNodes.length) {
          if ("msGMLOutput" == d)
              for (var e = 0, f = a.childNodes.length; e < f; e++) {
                  var g = a.childNodes[e];
                  if (g.nodeType === Node.ELEMENT_NODE) {
                      var h = c[0]
                        , l = g.localName.replace("_layer", "");
                      if (!this.c || ha(this.c, l)) {
                          l += "_feature";
                          h.featureType = l;
                          h.featureNS = this.a;
                          var m = {};
                          m[l] = Uk(this.b.Ig, this.b);
                          h = K([h.featureNS, null], m);
                          g.setAttribute("namespaceURI", this.a);
                          (g = L([], h, g, c, this.b)) && ja(b, g)
                      }
                  }
              }
          "FeatureCollection" == d && (a = L([], this.b.b, a, [{}], this.b)) && (b = a)
      }
      return b
  }
  ;
  Or.prototype.kh = function() {}
  ;
  Or.prototype.Zb = function() {}
  ;
  Or.prototype.ue = function() {}
  ;
  function Pr() {
      this.f = new cq
  }
  v(Pr, bq);
  Pr.prototype.a = function(a) {
      for (a = a.firstChild; a; a = a.nextSibling)
          if (a.nodeType == Node.ELEMENT_NODE)
              return this.b(a);
      return null
  }
  ;
  Pr.prototype.b = function(a) {
      var b = a.getAttribute("version").trim()
        , c = this.f.b(a);
      if (!c)
          return null;
      c.version = b;
      return (c = L(c, Qr, a, [])) ? c : null
  }
  ;
  function Rr(a) {
      var b = Q(a).split(" ");
      if (b && 2 == b.length && (a = +b[0],
      b = +b[1],
      !isNaN(a) && !isNaN(b)))
          return [a, b]
  }
  var Sr = [null, "http://www.opengis.net/wmts/1.0"]
    , Tr = [null, "http://www.opengis.net/ows/1.1"]
    , Qr = K(Sr, {
      Contents: I(function(a, b) {
          return L({}, Ur, a, b)
      })
  })
    , Ur = K(Sr, {
      Layer: Wk(function(a, b) {
          return L({}, Vr, a, b)
      }),
      TileMatrixSet: Wk(function(a, b) {
          return L({}, Wr, a, b)
      })
  })
    , Vr = K(Sr, {
      Style: Wk(function(a, b) {
          if (b = L({}, Xr, a, b))
              return a = "true" === a.getAttribute("isDefault"),
              b.isDefault = a,
              b
      }),
      Format: Wk(Q),
      TileMatrixSetLink: Wk(function(a, b) {
          return L({}, Yr, a, b)
      }),
      Dimension: Wk(function(a, b) {
          return L({}, Zr, a, b)
      }),
      ResourceURL: Wk(function(a) {
          var b = a.getAttribute("format")
            , c = a.getAttribute("template");
          a = a.getAttribute("resourceType");
          var d = {};
          b && (d.format = b);
          c && (d.template = c);
          a && (d.resourceType = a);
          return d
      })
  }, K(Tr, {
      Title: I(Q),
      Abstract: I(Q),
      WGS84BoundingBox: I(function(a, b) {
          a = L([], $r, a, b);
          if (2 == a.length)
              return Oa(a)
      }),
      Identifier: I(Q)
  }))
    , Xr = K(Sr, {
      LegendURL: Wk(function(a) {
          var b = {};
          b.format = a.getAttribute("format");
          b.href = aq(a);
          return b
      })
  }, K(Tr, {
      Title: I(Q),
      Identifier: I(Q)
  }))
    , Yr = K(Sr, {
      TileMatrixSet: I(Q),
      TileMatrixSetLimits: I(function(a, b) {
          return L([], as, a, b)
      })
  })
    , as = K(Sr, {
      TileMatrixLimits: Uk(function(a, b) {
          return L({}, bs, a, b)
      })
  })
    , bs = K(Sr, {
      TileMatrix: I(Q),
      MinTileRow: I(om),
      MaxTileRow: I(om),
      MinTileCol: I(om),
      MaxTileCol: I(om)
  })
    , Zr = K(Sr, {
      Default: I(Q),
      Value: Wk(Q)
  }, K(Tr, {
      Identifier: I(Q)
  }))
    , $r = K(Tr, {
      LowerCorner: Uk(Rr),
      UpperCorner: Uk(Rr)
  })
    , Wr = K(Sr, {
      WellKnownScaleSet: I(Q),
      TileMatrix: Wk(function(a, b) {
          return L({}, cs, a, b)
      })
  }, K(Tr, {
      SupportedCRS: I(Q),
      Identifier: I(Q)
  }))
    , cs = K(Sr, {
      TopLeftCorner: I(Rr),
      ScaleDenominator: I(mm),
      TileWidth: I(om),
      TileHeight: I(om),
      MatrixWidth: I(om),
      MatrixHeight: I(om)
  }, K(Tr, {
      Identifier: I(Q)
  }));
  function ds(a) {
      Wc.call(this);
      a = a || {};
      this.a = null;
      this.i = jc;
      this.g = new xb(6378137);
      this.c = void 0;
      z(this, Yc("projection"), this.Lm, this);
      z(this, Yc("tracking"), this.Mm, this);
      void 0 !== a.projection && this.li(a.projection);
      void 0 !== a.trackingOptions && this.Jj(a.trackingOptions);
      this.Ve(void 0 !== a.tracking ? a.tracking : !1)
  }
  v(ds, Wc);
  k = ds.prototype;
  k.ka = function() {
      this.Ve(!1);
      Wc.prototype.ka.call(this)
  }
  ;
  k.Lm = function() {
      var a = this.ji();
      a && (this.i = $b(Zb("EPSG:4326"), a),
      this.a && this.set("position", this.i(this.a)))
  }
  ;
  k.Mm = function() {
      if (td) {
          var a = this.ki();
          a && void 0 === this.c ? this.c = navigator.geolocation.watchPosition(this.vp.bind(this), this.wp.bind(this), this.Xh()) : a || void 0 === this.c || (navigator.geolocation.clearWatch(this.c),
          this.c = void 0)
      }
  }
  ;
  k.vp = function(a) {
      a = a.coords;
      this.set("accuracy", a.accuracy);
      this.set("altitude", null === a.altitude ? void 0 : a.altitude);
      this.set("altitudeAccuracy", null === a.altitudeAccuracy ? void 0 : a.altitudeAccuracy);
      this.set("heading", null === a.heading ? void 0 : Ia(a.heading));
      this.a ? (this.a[0] = a.longitude,
      this.a[1] = a.latitude) : this.a = [a.longitude, a.latitude];
      var b = this.i(this.a);
      this.set("position", b);
      this.set("speed", null === a.speed ? void 0 : a.speed);
      a = Qf(this.g, this.a, a.accuracy);
      a.Jc(this.i);
      this.set("accuracyGeometry", a);
      this.u()
  }
  ;
  k.wp = function(a) {
      a.type = "error";
      this.Ve(!1);
      this.b(a)
  }
  ;
  k.Ok = function() {
      return this.get("accuracy")
  }
  ;
  k.Pk = function() {
      return this.get("accuracyGeometry") || null
  }
  ;
  k.Qk = function() {
      return this.get("altitude")
  }
  ;
  k.Rk = function() {
      return this.get("altitudeAccuracy")
  }
  ;
  k.Jm = function() {
      return this.get("heading")
  }
  ;
  k.Km = function() {
      return this.get("position")
  }
  ;
  k.ji = function() {
      return this.get("projection")
  }
  ;
  k.ul = function() {
      return this.get("speed")
  }
  ;
  k.ki = function() {
      return this.get("tracking")
  }
  ;
  k.Xh = function() {
      return this.get("trackingOptions")
  }
  ;
  k.li = function(a) {
      this.set("projection", Zb(a))
  }
  ;
  k.Ve = function(a) {
      this.set("tracking", a)
  }
  ;
  k.Jj = function(a) {
      this.set("trackingOptions", a)
  }
  ;
  function es(a, b, c) {
      ff.call(this);
      this.fh(a, b ? b : 0, c)
  }
  v(es, ff);
  k = es.prototype;
  k.clone = function() {
      var a = new es(null);
      hf(a, this.ja, this.A.slice());
      a.u();
      return a
  }
  ;
  k.Mb = function(a, b, c, d) {
      var e = this.A;
      a -= e[0];
      var f = b - e[1];
      b = a * a + f * f;
      if (b < d) {
          if (0 === b)
              for (d = 0; d < this.a; ++d)
                  c[d] = e[d];
          else
              for (d = this.xd() / Math.sqrt(b),
              c[0] = e[0] + d * a,
              c[1] = e[1] + d * f,
              d = 2; d < this.a; ++d)
                  c[d] = e[d];
          c.length = this.a;
          return b
      }
      return d
  }
  ;
  k.Tc = function(a, b) {
      var c = this.A;
      a -= c[0];
      b -= c[1];
      return a * a + b * b <= fs(this)
  }
  ;
  k.xa = function() {
      return this.A.slice(0, this.a)
  }
  ;
  k.De = function(a) {
      var b = this.A
        , c = b[this.a] - b[0];
      return Ya(b[0] - c, b[1] - c, b[0] + c, b[1] + c, a)
  }
  ;
  k.xd = function() {
      return Math.sqrt(fs(this))
  }
  ;
  function fs(a) {
      var b = a.A[a.a] - a.A[0];
      a = a.A[a.a + 1] - a.A[1];
      return b * b + a * a
  }
  k.S = function() {
      return "Circle"
  }
  ;
  k.Ya = function(a) {
      var b = this.G();
      return qb(a, b) ? (b = this.xa(),
      a[0] <= b[0] && a[2] >= b[0] || a[1] <= b[1] && a[3] >= b[1] ? !0 : eb(a, this.yb, this)) : !1
  }
  ;
  k.rb = function(a) {
      var b = this.a
        , c = a.slice();
      c[b] = c[0] + (this.A[b] - this.A[0]);
      var d;
      for (d = 1; d < b; ++d)
          c[b + d] = a[d];
      hf(this, this.ja, c);
      this.u()
  }
  ;
  k.fh = function(a, b, c) {
      if (a) {
          jf(this, c, a, 0);
          this.A || (this.A = []);
          c = this.A;
          a = tf(c, a);
          c[a++] = c[0] + b;
          var d;
          b = 1;
          for (d = this.a; b < d; ++b)
              c[a++] = c[b];
          c.length = a
      } else
          hf(this, "XY", null);
      this.u()
  }
  ;
  k.V = function() {}
  ;
  k.na = function() {}
  ;
  k.$c = function(a) {
      this.A[this.a] = this.A[0] + a;
      this.u()
  }
  ;
  function gs(a, b, c) {
      for (var d = [], e = a(0), f = a(1), g = b(e), h = b(f), l = [f, e], m = [h, g], n = [1, 0], p = {}, q = 1E5, r, u, x, B, A; 0 < --q && 0 < n.length; )
          x = n.pop(),
          e = l.pop(),
          g = m.pop(),
          f = x.toString(),
          f in p || (d.push(g[0], g[1]),
          p[f] = !0),
          B = n.pop(),
          f = l.pop(),
          h = m.pop(),
          A = (x + B) / 2,
          r = a(A),
          u = b(r),
          Ga(u[0], u[1], g[0], g[1], h[0], h[1]) < c ? (d.push(h[0], h[1]),
          f = B.toString(),
          p[f] = !0) : (n.push(B, A, A, x),
          m.push(h, u, u, g),
          l.push(f, r, r, e));
      return d
  }
  function hs(a, b, c, d, e) {
      var f = Zb("EPSG:4326");
      return gs(function(d) {
          return [a, b + (c - b) * d]
      }, ic(f, d), e)
  }
  function is(a, b, c, d, e) {
      var f = Zb("EPSG:4326");
      return gs(function(d) {
          return [b + (c - b) * d, a]
      }, ic(f, d), e)
  }
  ;function js(a, b, c) {
      var d = b - c;
      return a[0] === a[d] && a[1] === a[d + 1] && 3 < (b - 0) / c ? !!mf(a, 0, b, c) : !1
  }
  ;function ks(a) {
      a = a || {};
      this.i = this.v = null;
      this.j = this.g = Infinity;
      this.o = this.l = -Infinity;
      this.sa = this.ra = Infinity;
      this.T = this.I = -Infinity;
      this.oa = void 0 !== a.targetSize ? a.targetSize : 100;
      this.kb = void 0 !== a.maxLines ? a.maxLines : 100;
      this.f = [];
      this.c = [];
      this.ma = void 0 !== a.strokeStyle ? a.strokeStyle : ls;
      this.C = this.s = void 0;
      this.a = this.b = this.O = null;
      1 == a.showLabels && (this.ta = a.lonLabelFormatter ? a.lonLabelFormatter : Be.bind(this, "EW"),
      this.Ua = a.latLabelFormatter ? a.latLabelFormatter : Be.bind(this, "NS"),
      this.fa = void 0 == a.lonLabelPosition ? 0 : a.lonLabelPosition,
      this.U = void 0 == a.latLabelPosition ? 1 : a.latLabelPosition,
      this.B = void 0 !== a.lonLabelStyle ? a.lonLabelStyle : new Hn({
          font: "12px Calibri,sans-serif",
          textBaseline: "bottom",
          fill: new Ck({
              color: "rgba(0,0,0,1)"
          }),
          stroke: new Dk({
              color: "rgba(255,255,255,1)",
              width: 3
          })
      }),
      this.D = void 0 !== a.latLabelStyle ? a.latLabelStyle : new Hn({
          font: "12px Calibri,sans-serif",
          textAlign: "end",
          fill: new Ck({
              color: "rgba(0,0,0,1)"
          }),
          stroke: new Dk({
              color: "rgba(255,255,255,1)",
              width: 3
          })
      }),
      this.b = [],
      this.a = []);
      this.setMap(void 0 !== a.map ? a.map : null)
  }
  var ls = new Dk({
      color: "rgba(0,0,0,0.2)"
  })
    , ms = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];
  function ns(a, b, c, d, e, f, g) {
      var h = g;
      c = hs(b, c, d, a.i, e);
      h = void 0 !== a.f[h] ? a.f[h] : new M(null);
      h.aa("XY", c);
      qb(h.G(), f) && (a.b && (c = g,
      d = h.ca(),
      f = [d[0], Da(f[1] + Math.abs(f[1] - f[3]) * a.fa, Math.max(f[1], d[1]), Math.min(f[3], d[d.length - 1]))],
      c = a.b[c] ? a.b[c].Ud : new D(null),
      c.na(f),
      a.b[g] = {
          Ud: c,
          text: a.ta(b)
      }),
      a.f[g++] = h);
      return g
  }
  function os(a, b, c, d, e, f, g) {
      var h = g;
      c = is(b, c, d, a.i, e);
      h = void 0 !== a.c[h] ? a.c[h] : new M(null);
      h.aa("XY", c);
      qb(h.G(), f) && (a.a && (c = g,
      d = h.ca(),
      f = [Da(f[0] + Math.abs(f[0] - f[2]) * a.U, Math.max(f[0], d[0]), Math.min(f[2], d[d.length - 2])), d[1]],
      c = a.a[c] ? a.a[c].Ud : new D(null),
      c.na(f),
      a.a[g] = {
          Ud: c,
          text: a.Ua(b)
      }),
      a.c[g++] = h);
      return g
  }
  k = ks.prototype;
  k.Nm = function() {
      return this.v
  }
  ;
  k.kl = function() {
      return this.f
  }
  ;
  k.pl = function() {
      return this.c
  }
  ;
  k.ai = function(a) {
      var b = a.vectorContext
        , c = a.frameState;
      a = c.extent;
      var d = c.viewState
        , e = d.center
        , f = d.projection;
      d = d.resolution;
      c = c.pixelRatio;
      c = d * d / (4 * c * c);
      if (!this.i || !hc(this.i, f)) {
          var g = Zb("EPSG:4326")
            , h = f.G()
            , l = f.re
            , m = lc(l, g, f)
            , n = l[2]
            , p = l[1]
            , q = l[0]
            , r = m[3]
            , u = m[2]
            , x = m[1];
          m = m[0];
          this.g = l[3];
          this.j = n;
          this.l = p;
          this.o = q;
          this.ra = r;
          this.sa = u;
          this.I = x;
          this.T = m;
          this.s = ic(g, f);
          this.C = ic(f, g);
          this.O = this.C(nb(h));
          this.i = f
      }
      f = this.O[0];
      g = this.O[1];
      h = -1;
      n = Math.pow(this.oa * d, 2);
      p = [];
      q = [];
      d = 0;
      for (l = ms.length; d < l; ++d) {
          r = ms[d] / 2;
          p[0] = f - r;
          p[1] = g - r;
          q[0] = f + r;
          q[1] = g + r;
          this.s(p, p);
          this.s(q, q);
          r = Math.pow(q[0] - p[0], 2) + Math.pow(q[1] - p[1], 2);
          if (r <= n)
              break;
          h = ms[d]
      }
      d = h;
      if (-1 == d)
          this.f.length = this.c.length = 0,
          this.b && (this.b.length = 0),
          this.a && (this.a.length = 0);
      else {
          f = this.C(e);
          e = f[0];
          f = f[1];
          g = this.kb;
          l = [Math.max(a[0], this.T), Math.max(a[1], this.I), Math.min(a[2], this.sa), Math.min(a[3], this.ra)];
          l = lc(l, this.i, "EPSG:4326");
          p = l[3];
          h = l[2];
          q = l[1];
          r = l[0];
          e = Math.floor(e / d) * d;
          u = Da(e, this.o, this.j);
          n = ns(this, u, q, p, c, a, 0);
          for (l = 0; u != this.o && l++ < g; )
              u = Math.max(u - d, this.o),
              n = ns(this, u, q, p, c, a, n);
          u = Da(e, this.o, this.j);
          for (l = 0; u != this.j && l++ < g; )
              u = Math.min(u + d, this.j),
              n = ns(this, u, q, p, c, a, n);
          this.f.length = n;
          this.b && (this.b.length = n);
          f = Math.floor(f / d) * d;
          e = Da(f, this.l, this.g);
          n = os(this, e, r, h, c, a, 0);
          for (l = 0; e != this.l && l++ < g; )
              e = Math.max(e - d, this.l),
              n = os(this, e, r, h, c, a, n);
          e = Da(f, this.l, this.g);
          for (l = 0; e != this.g && l++ < g; )
              e = Math.min(e + d, this.g),
              n = os(this, e, r, h, c, a, n);
          this.c.length = n;
          this.a && (this.a.length = n)
      }
      b.La(null, this.ma);
      a = 0;
      for (c = this.f.length; a < c; ++a)
          e = this.f[a],
          b.Fb(e);
      a = 0;
      for (c = this.c.length; a < c; ++a)
          e = this.c[a],
          b.Fb(e);
      if (this.b)
          for (a = 0,
          c = this.b.length; a < c; ++a)
              e = this.b[a],
              this.B.Ed(e.text),
              b.ib(this.B),
              b.Fb(e.Ud);
      if (this.a)
          for (a = 0,
          c = this.a.length; a < c; ++a)
              e = this.a[a],
              this.D.Ed(e.text),
              b.ib(this.D),
              b.Fb(e.Ud)
  }
  ;
  k.setMap = function(a) {
      this.v && (this.v.K("postcompose", this.ai, this),
      this.v.render());
      a && (a.J("postcompose", this.ai, this),
      a.render());
      this.v = a
  }
  ;
  function ps(a, b, c, d, e) {
      Tc.call(this);
      this.c = e;
      this.extent = a;
      this.a = c;
      this.resolution = b;
      this.state = d
  }
  v(ps, Tc);
  ps.prototype.u = function() {
      this.b("change")
  }
  ;
  ps.prototype.G = function() {
      return this.extent
  }
  ;
  ps.prototype.getState = function() {
      return this.state
  }
  ;
  function qs(a, b, c, d, e, f, g) {
      ps.call(this, a, b, c, 0, d);
      this.g = e;
      this.N = new Image;
      null !== f && (this.N.crossOrigin = f);
      this.f = null;
      this.state = 0;
      this.i = g
  }
  v(qs, ps);
  k = qs.prototype;
  k.Y = function() {
      return this.N
  }
  ;
  k.Qm = function() {
      this.state = 3;
      this.f.forEach(Hc);
      this.f = null;
      this.u()
  }
  ;
  k.Rm = function() {
      void 0 === this.resolution && (this.resolution = mb(this.extent) / this.N.height);
      this.state = 2;
      this.f.forEach(Hc);
      this.f = null;
      this.u()
  }
  ;
  k.load = function() {
      if (0 == this.state || 3 == this.state)
          this.state = 1,
          this.u(),
          this.f = [Mc(this.N, "error", this.Qm, this), Mc(this.N, "load", this.Rm, this)],
          this.i(this, this.g)
  }
  ;
  k.gh = function(a) {
      this.N = a
  }
  ;
  function rs(a, b, c, d, e, f) {
      this.i = f ? f : null;
      ps.call(this, a, b, c, f ? 0 : 2, d);
      this.f = e
  }
  v(rs, ps);
  rs.prototype.g = function(a) {
      this.state = a ? 3 : 2;
      this.u()
  }
  ;
  rs.prototype.load = function() {
      0 == this.state && (this.state = 1,
      this.u(),
      this.i(this.g.bind(this)))
  }
  ;
  rs.prototype.Y = function() {
      return this.f
  }
  ;
  function ss(a, b, c) {
      Tc.call(this);
      c = c ? c : {};
      this.wa = a;
      this.state = b;
      this.f = null;
      this.key = "";
      this.j = void 0 === c.transition ? 250 : c.transition;
      this.o = {}
  }
  v(ss, Tc);
  ss.prototype.u = function() {
      this.b("change")
  }
  ;
  ss.prototype.gb = function() {
      return this.key + "/" + this.wa
  }
  ;
  function Ki(a) {
      if (!a.f)
          return a;
      var b = a.f;
      do {
          if (2 == b.getState())
              return b;
          b = b.f
      } while (b);return a
  }
  function ts(a) {
      if (a.f) {
          var b = a.f;
          do {
              if (2 == b.getState()) {
                  b.f = null;
                  break
              } else
                  1 == b.getState() ? a = b : 0 == b.getState() ? a.f = b.f : a = b;
              b = a.f
          } while (b)
      }
  }
  ss.prototype.i = function() {
      return this.wa
  }
  ;
  ss.prototype.getState = function() {
      return this.state
  }
  ;
  function Ji(a, b) {
      a.state = b;
      a.u()
  }
  function Li(a, b, c) {
      if (!a.j)
          return 1;
      var d = a.o[b];
      if (!d)
          d = c,
          a.o[b] = d;
      else if (-1 === d)
          return 1;
      b = c - d + 1E3 / 60;
      return b >= a.j ? 1 : Le(b / a.j)
  }
  ;function us(a, b, c, d, e, f) {
      ss.call(this, a, b, f);
      this.g = c;
      this.N = new Image;
      null !== d && (this.N.crossOrigin = d);
      this.c = null;
      this.l = e
  }
  v(us, ss);
  k = us.prototype;
  k.ka = function() {
      1 == this.state && (vs(this),
      this.N.src = ws);
      this.f && Qc(this.f);
      this.state = 5;
      this.u();
      ss.prototype.ka.call(this)
  }
  ;
  k.Y = function() {
      return this.N
  }
  ;
  k.gb = function() {
      return this.g
  }
  ;
  k.Om = function() {
      this.state = 3;
      vs(this);
      this.N.src = ws;
      this.u()
  }
  ;
  k.Pm = function() {
      this.state = this.N.naturalWidth && this.N.naturalHeight ? 2 : 4;
      vs(this);
      this.u()
  }
  ;
  k.load = function() {
      if (0 == this.state || 3 == this.state)
          this.state = 1,
          this.u(),
          this.c = [Mc(this.N, "error", this.Om, this), Mc(this.N, "load", this.Pm, this)],
          this.l(this, this.g)
  }
  ;
  function vs(a) {
      a.c.forEach(Hc);
      a.c = null
  }
  var ws, xs = dg(1, 1);
  xs.fillStyle = "rgba(0,0,0,0)";
  xs.fillRect(0, 0, 1, 1);
  ws = xs.canvas.toDataURL("image/png");
  function ys(a) {
      a = a ? a : {};
      Bg.call(this, {
          handleEvent: Pe
      });
      this.j = a.formatConstructors ? a.formatConstructors : [];
      this.o = a.projection ? Zb(a.projection) : null;
      this.a = null;
      this.g = a.source || null;
      this.target = a.target ? a.target : null
  }
  v(ys, Bg);
  function zs(a) {
      a = a.dataTransfer.files;
      var b;
      var c = 0;
      for (b = a.length; c < b; ++c) {
          var d = a.item(c);
          var e = new FileReader;
          e.addEventListener("load", this.l.bind(this, d));
          e.readAsText(d)
      }
  }
  function As(a) {
      a.stopPropagation();
      a.preventDefault();
      a.dataTransfer.dropEffect = "copy"
  }
  ys.prototype.l = function(a, b) {
      b = b.target.result;
      var c = this.v
        , d = this.o;
      d || (d = c.$().v);
      c = this.j;
      var e = [], f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = new c[g];
          var l = {
              featureProjection: d
          };
          try {
              e = h.Ma(b, l)
          } catch (m) {
              e = null
          }
          if (e && 0 < e.length)
              break
      }
      this.g && (this.g.clear(),
      this.g.Ic(e));
      this.b(new Bs(Cs,a,e,d))
  }
  ;
  function Ds(a) {
      var b = a.v;
      b && (b = a.target ? a.target : b.a,
      a.a = [z(b, "drop", zs, a), z(b, "dragenter", As, a), z(b, "dragover", As, a), z(b, "drop", As, a)])
  }
  ys.prototype.Ga = function(a) {
      Bg.prototype.Ga.call(this, a);
      a ? Ds(this) : Es(this)
  }
  ;
  ys.prototype.setMap = function(a) {
      Es(this);
      Bg.prototype.setMap.call(this, a);
      this.c() && Ds(this)
  }
  ;
  function Es(a) {
      a.a && (a.a.forEach(Hc),
      a.a = null)
  }
  var Cs = "addfeatures";
  function Bs(a, b, c, d) {
      Rc.call(this, a);
      this.features = c;
      this.file = b;
      this.projection = d
  }
  v(Bs, Rc);
  function Fs(a) {
      a = a ? a : {};
      Tg.call(this, {
          handleDownEvent: Gs,
          handleDragEvent: Hs,
          handleUpEvent: Is
      });
      this.o = a.condition ? a.condition : Pg;
      this.a = this.g = void 0;
      this.j = 0;
      this.s = void 0 !== a.duration ? a.duration : 400
  }
  v(Fs, Tg);
  function Hs(a) {
      if (Rg(a)) {
          var b = a.map
            , c = b.zb()
            , d = a.pixel;
          a = d[0] - c[0] / 2;
          d = c[1] / 2 - d[1];
          c = Math.atan2(d, a);
          a = Math.sqrt(a * a + d * d);
          b = b.$();
          b.g.rotation !== se && void 0 !== this.g && (d = c - this.g,
          Eg(b, b.Pa() - d));
          this.g = c;
          void 0 !== this.a && (c = this.a * (b.Oa() / a),
          Gg(b, c));
          void 0 !== this.a && (this.j = this.a / a);
          this.a = a
      }
  }
  function Is(a) {
      if (!Rg(a))
          return !0;
      a = a.map.$();
      Xf(a, 1, -1);
      var b = this.j - 1
        , c = a.Pa();
      c = a.constrainRotation(c, 0);
      Eg(a, c, void 0, void 0);
      c = a.Oa();
      var d = this.s;
      c = a.constrainResolution(c, 0, b);
      Gg(a, c, void 0, d);
      this.j = 0;
      return !1
  }
  function Gs(a) {
      return Rg(a) && this.o(a) ? (Xf(a.map.$(), 1, 1),
      this.a = this.g = void 0,
      !0) : !1
  }
  ;function R(a) {
      a = a ? a : {};
      var b = tb({}, a);
      delete b.style;
      delete b.renderBuffer;
      delete b.updateWhileAnimating;
      delete b.updateWhileInteracting;
      wi.call(this, b);
      this.g = void 0 !== a.renderBuffer ? a.renderBuffer : 100;
      this.C = null;
      this.I = void 0;
      this.j(a.style);
      this.U = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;
      this.ta = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
      this.type = "VECTOR"
  }
  v(R, wi);
  R.prototype.D = function() {
      return this.C
  }
  ;
  R.prototype.bb = function() {
      return this.I
  }
  ;
  R.prototype.j = function(a) {
      this.C = void 0 !== a ? a : Ik;
      this.I = null === a ? void 0 : Gk(this.C);
      this.u()
  }
  ;
  var Bj = "renderOrder";
  function Js() {
      return [[-Infinity, -Infinity, Infinity, Infinity]]
  }
  ;function Ks(a) {
      Wc.call(this);
      this.c = Zb(a.projection);
      this.j = Ls(a.attributions);
      this.D = a.logo;
      this.ta = void 0 !== a.state ? a.state : "ready";
      this.C = void 0 !== a.wrapX ? a.wrapX : !1
  }
  v(Ks, Wc);
  function Ls(a) {
      if ("string" === typeof a)
          return [new Fc({
              html: a
          })];
      if (a instanceof Fc)
          return [a];
      if (Array.isArray(a)) {
          for (var b = a.length, c = Array(b), d = 0; d < b; d++) {
              var e = a[d];
              c[d] = "string" === typeof e ? new Fc({
                  html: e
              }) : e
          }
          return c
      }
      return null
  }
  k = Ks.prototype;
  k.Fa = sa;
  k.Aa = function() {
      return this.j
  }
  ;
  k.ya = function() {
      return this.D
  }
  ;
  k.Ba = function() {
      return this.c
  }
  ;
  k.getState = function() {
      return this.ta
  }
  ;
  k.ua = function() {
      this.u()
  }
  ;
  k.va = function(a) {
      this.j = Ls(a);
      this.u()
  }
  ;
  function Ms(a, b) {
      a.ta = b;
      a.u()
  }
  ;Op.ge = function() {}
  ;
  (function(a) {
      function b(a, e, f, g, h) {
          f = f || 0;
          g = g || a.length - 1;
          for (h = h || d; g > f; ) {
              if (600 < g - f) {
                  var l = g - f + 1
                    , m = e - f + 1
                    , n = Math.log(l)
                    , p = .5 * Math.exp(2 * n / 3);
                  n = .5 * Math.sqrt(n * p * (l - p) / l) * (0 > m - l / 2 ? -1 : 1);
                  b(a, e, Math.max(f, Math.floor(e - m * p / l + n)), Math.min(g, Math.floor(e + (l - m) * p / l + n)), h)
              }
              l = a[e];
              m = f;
              p = g;
              c(a, f, e);
              for (0 < h(a[g], l) && c(a, f, g); m < p; ) {
                  c(a, m, p);
                  m++;
                  for (p--; 0 > h(a[m], l); )
                      m++;
                  for (; 0 < h(a[p], l); )
                      p--
              }
              0 === h(a[f], l) ? c(a, f, p) : (p++,
              c(a, p, g));
              p <= e && (f = p + 1);
              e <= p && (g = p - 1)
          }
      }
      function c(a, b, c) {
          var d = a[b];
          a[b] = a[c];
          a[c] = d
      }
      function d(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
      }
      function e(a, b) {
          if (!(this instanceof e))
              return new e(a,b);
          this.Lf = Math.max(4, a || 9);
          this.uh = Math.max(2, Math.ceil(.4 * this.Lf));
          b && this.sk(b);
          this.clear()
      }
      function f(a, b) {
          g(a, 0, a.children.length, b, a)
      }
      function g(a, b, c, d, e) {
          e || (e = u(null));
          e.ba = Infinity;
          e.ea = Infinity;
          e.da = -Infinity;
          e.ga = -Infinity;
          for (var f; b < c; b++)
              f = a.children[b],
              h(e, a.nb ? d(f) : f);
          return e
      }
      function h(a, b) {
          a.ba = Math.min(a.ba, b.ba);
          a.ea = Math.min(a.ea, b.ea);
          a.da = Math.max(a.da, b.da);
          a.ga = Math.max(a.ga, b.ga)
      }
      function l(a, b) {
          return a.ba - b.ba
      }
      function m(a, b) {
          return a.ea - b.ea
      }
      function n(a) {
          return (a.da - a.ba) * (a.ga - a.ea)
      }
      function p(a) {
          return a.da - a.ba + (a.ga - a.ea)
      }
      function q(a, b) {
          return a.ba <= b.ba && a.ea <= b.ea && b.da <= a.da && b.ga <= a.ga
      }
      function r(a, b) {
          return b.ba <= a.da && b.ea <= a.ga && b.da >= a.ba && b.ga >= a.ea
      }
      function u(a) {
          return {
              children: a,
              height: 1,
              nb: !0,
              ba: Infinity,
              ea: Infinity,
              da: -Infinity,
              ga: -Infinity
          }
      }
      function x(a, b, c, d, e) {
          for (var f = [b, c], g; f.length; )
              c = f.pop(),
              b = f.pop(),
              c - b <= d || (g = b + Math.ceil((c - b) / d / 2) * d,
              B(a, g, b, c, e),
              f.push(b, g, g, c))
      }
      var B = b;
      "use strict";
      e.prototype = {
          all: function() {
              return this.ph(this.data, [])
          },
          search: function(a) {
              var b = this.data
                , c = []
                , d = this.Db;
              if (!r(a, b))
                  return c;
              for (var e = [], f, g, h, l; b; ) {
                  f = 0;
                  for (g = b.children.length; f < g; f++)
                      h = b.children[f],
                      l = b.nb ? d(h) : h,
                      r(a, l) && (b.nb ? c.push(h) : q(a, l) ? this.ph(h, c) : e.push(h));
                  b = e.pop()
              }
              return c
          },
          load: function(a) {
              if (!a || !a.length)
                  return this;
              if (a.length < this.uh) {
                  for (var b = 0, c = a.length; b < c; b++)
                      this.Ea(a[b]);
                  return this
              }
              a = this.rh(a.slice(), 0, a.length - 1, 0);
              this.data.children.length ? this.data.height === a.height ? this.wh(this.data, a) : (this.data.height < a.height && (b = this.data,
              this.data = a,
              a = b),
              this.th(a, this.data.height - a.height - 1, !0)) : this.data = a;
              return this
          },
          Ea: function(a) {
              a && this.th(a, this.data.height - 1);
              return this
          },
          clear: function() {
              this.data = u([]);
              return this
          },
          remove: function(a, b) {
              if (!a)
                  return this;
              for (var c = this.data, d = this.Db(a), e = [], f = [], g, h, l, m; c || e.length; ) {
                  c || (c = e.pop(),
                  h = e[e.length - 1],
                  g = f.pop(),
                  m = !0);
                  if (c.nb) {
                      a: {
                          l = a;
                          var n = c.children
                            , p = b;
                          if (p) {
                              for (var r = 0; r < n.length; r++)
                                  if (p(l, n[r])) {
                                      l = r;
                                      break a
                                  }
                              l = -1
                          } else
                              l = n.indexOf(l)
                      }
                      if (-1 !== l) {
                          c.children.splice(l, 1);
                          e.push(c);
                          this.qk(e);
                          break
                      }
                  }
                  m || c.nb || !q(c, d) ? h ? (g++,
                  c = h.children[g],
                  m = !1) : c = null : (e.push(c),
                  f.push(g),
                  g = 0,
                  h = c,
                  c = c.children[0])
              }
              return this
          },
          Db: function(a) {
              return a
          },
          Pf: l,
          Qf: m,
          toJSON: function() {
              return this.data
          },
          ph: function(a, b) {
              for (var c = []; a; )
                  a.nb ? b.push.apply(b, a.children) : c.push.apply(c, a.children),
                  a = c.pop();
              return b
          },
          rh: function(a, b, c, d) {
              var e = c - b + 1
                , g = this.Lf;
              if (e <= g) {
                  var h = u(a.slice(b, c + 1));
                  f(h, this.Db);
                  return h
              }
              d || (d = Math.ceil(Math.log(e) / Math.log(g)),
              g = Math.ceil(e / Math.pow(g, d - 1)));
              h = u([]);
              h.nb = !1;
              h.height = d;
              e = Math.ceil(e / g);
              g = e * Math.ceil(Math.sqrt(g));
              var l;
              for (x(a, b, c, g, this.Pf); b <= c; b += g) {
                  var m = Math.min(b + g - 1, c);
                  x(a, b, m, e, this.Qf);
                  for (l = b; l <= m; l += e) {
                      var n = Math.min(l + e - 1, m);
                      h.children.push(this.rh(a, l, n, d - 1))
                  }
              }
              f(h, this.Db);
              return h
          },
          pk: function(a, b, c, d) {
              for (var e, f, g, h, l, m, p, q; ; ) {
                  d.push(b);
                  if (b.nb || d.length - 1 === c)
                      break;
                  p = q = Infinity;
                  e = 0;
                  for (f = b.children.length; e < f; e++)
                      g = b.children[e],
                      l = n(g),
                      m = (Math.max(g.da, a.da) - Math.min(g.ba, a.ba)) * (Math.max(g.ga, a.ga) - Math.min(g.ea, a.ea)) - l,
                      m < q ? (q = m,
                      p = l < p ? l : p,
                      h = g) : m === q && l < p && (p = l,
                      h = g);
                  b = h || b.children[0]
              }
              return b
          },
          th: function(a, b, c) {
              var d = this.Db;
              c = c ? a : d(a);
              d = [];
              var e = this.pk(c, this.data, b, d);
              e.children.push(a);
              for (h(e, c); 0 <= b; )
                  if (d[b].children.length > this.Lf)
                      this.vk(d, b),
                      b--;
                  else
                      break;
              this.lk(c, d, b)
          },
          vk: function(a, b) {
              var c = a[b]
                , d = c.children.length
                , e = this.uh;
              this.mk(c, e, d);
              d = this.nk(c, e, d);
              d = u(c.children.splice(d, c.children.length - d));
              d.height = c.height;
              d.nb = c.nb;
              f(c, this.Db);
              f(d, this.Db);
              b ? a[b - 1].children.push(d) : this.wh(c, d)
          },
          wh: function(a, b) {
              this.data = u([a, b]);
              this.data.height = a.height + 1;
              this.data.nb = !1;
              f(this.data, this.Db)
          },
          nk: function(a, b, c) {
              var d, e;
              var f = e = Infinity;
              for (d = b; d <= c - b; d++) {
                  var h = g(a, 0, d, this.Db);
                  var l = g(a, d, c, this.Db);
                  var m = Math.max(0, Math.min(h.da, l.da) - Math.max(h.ba, l.ba)) * Math.max(0, Math.min(h.ga, l.ga) - Math.max(h.ea, l.ea));
                  h = n(h) + n(l);
                  if (m < f) {
                      f = m;
                      var p = d;
                      e = h < e ? h : e
                  } else
                      m === f && h < e && (e = h,
                      p = d)
              }
              return p
          },
          mk: function(a, b, c) {
              var d = a.nb ? this.Pf : l
                , e = a.nb ? this.Qf : m
                , f = this.qh(a, b, c, d);
              b = this.qh(a, b, c, e);
              f < b && a.children.sort(d)
          },
          qh: function(a, b, c, d) {
              a.children.sort(d);
              d = this.Db;
              var e = g(a, 0, b, d), f = g(a, c - b, c, d), l = p(e) + p(f), m;
              for (m = b; m < c - b; m++) {
                  var n = a.children[m];
                  h(e, a.nb ? d(n) : n);
                  l += p(e)
              }
              for (m = c - b - 1; m >= b; m--)
                  n = a.children[m],
                  h(f, a.nb ? d(n) : n),
                  l += p(f);
              return l
          },
          lk: function(a, b, c) {
              for (; 0 <= c; c--)
                  h(b[c], a)
          },
          qk: function(a) {
              for (var b = a.length - 1, c; 0 <= b; b--)
                  0 === a[b].children.length ? 0 < b ? (c = a[b - 1].children,
                  c.splice(c.indexOf(a[b]), 1)) : this.clear() : f(a[b], this.Db)
          },
          sk: function(a) {
              var b = ["return a", " - b", ";"];
              this.Pf = new Function("a","b",b.join(a[0]));
              this.Qf = new Function("a","b",b.join(a[1]));
              this.Db = new Function("a","return {minX: a" + a[0] + ", minY: a" + a[1] + ", maxX: a" + a[2] + ", maxY: a" + a[3] + "};")
          }
      };
      a["default"] = e
  }
  )(Op.ge = Op.ge || {});
  Op.ge = Op.ge.default;
  function Ns(a) {
      this.a = Op.ge(a);
      this.b = {}
  }
  k = Ns.prototype;
  k.Ea = function(a, b) {
      a = {
          ba: a[0],
          ea: a[1],
          da: a[2],
          ga: a[3],
          value: b
      };
      this.a.Ea(a);
      this.b[w(b)] = a
  }
  ;
  k.load = function(a, b) {
      for (var c = Array(b.length), d = 0, e = b.length; d < e; d++) {
          var f = a[d]
            , g = b[d];
          f = {
              ba: f[0],
              ea: f[1],
              da: f[2],
              ga: f[3],
              value: g
          };
          c[d] = f;
          this.b[w(g)] = f
      }
      this.a.load(c)
  }
  ;
  k.remove = function(a) {
      a = w(a);
      var b = this.b[a];
      delete this.b[a];
      return null !== this.a.remove(b)
  }
  ;
  function Os(a, b, c) {
      var d = a.b[w(c)];
      cb([d.ba, d.ea, d.da, d.ga], b) || (a.remove(c),
      a.Ea(b, c))
  }
  function Ps(a) {
      return a.a.all().map(function(a) {
          return a.value
      })
  }
  function Qs(a, b) {
      return a.a.search({
          ba: b[0],
          ea: b[1],
          da: b[2],
          ga: b[3]
      }).map(function(a) {
          return a.value
      })
  }
  k.forEach = function(a, b) {
      return Rs(Ps(this), a, b)
  }
  ;
  function Ss(a, b, c, d) {
      return Rs(Qs(a, b), c, d)
  }
  function Rs(a, b, c) {
      for (var d, e = 0, f = a.length; e < f && !(d = b.call(c, a[e])); e++)
          ;
      return d
  }
  k.clear = function() {
      this.a.clear();
      this.b = {}
  }
  ;
  k.G = function(a) {
      var b = this.a.data;
      return Ya(b.ba, b.ea, b.da, b.ga, a)
  }
  ;
  k.concat = function(a) {
      this.a.load(a.a.all());
      for (var b in a.b)
          this.b[b | 0] = a.b[b | 0]
  }
  ;
  function S(a) {
      a = a || {};
      Ks.call(this, {
          attributions: a.attributions,
          logo: a.logo,
          projection: void 0,
          state: "ready",
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0
      });
      this.s = sa;
      this.B = a.format;
      this.U = void 0 == a.overlaps ? !0 : a.overlaps;
      this.I = a.url;
      a.loader ? this.s = a.loader : void 0 !== this.I && (wa(this.B, 7),
      this.s = el(this.I, this.B));
      this.fa = a.strategy ? a.strategy : Js;
      var b = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;
      this.a = b ? new Ns : null;
      this.T = new Ns;
      this.g = {};
      this.l = {};
      this.o = {};
      this.v = {};
      this.i = null;
      if (a.features instanceof C) {
          var c = a.features;
          var d = c.a
      } else
          Array.isArray(a.features) && (d = a.features);
      b || c || (c = new C(d));
      d && Ts(this, d);
      c && Us(this, c)
  }
  v(S, Ks);
  k = S.prototype;
  k.Eb = function(a) {
      var b = w(a).toString();
      if (Vs(this, b, a)) {
          Ws(this, b, a);
          var c = a.W();
          c ? (b = c.G(),
          this.a && this.a.Ea(b, a)) : this.g[b] = a;
          this.b(new Xs("addfeature",a))
      }
      this.u()
  }
  ;
  function Ws(a, b, c) {
      a.v[b] = [z(c, "change", a.aj, a), z(c, "propertychange", a.aj, a)]
  }
  function Vs(a, b, c) {
      var d = !0
        , e = c.c;
      void 0 !== e ? e.toString()in a.l ? d = !1 : a.l[e.toString()] = c : (wa(!(b in a.o), 30),
      a.o[b] = c);
      return d
  }
  k.Ic = function(a) {
      Ts(this, a);
      this.u()
  }
  ;
  function Ts(a, b) {
      var c, d = [], e = [], f = [];
      var g = 0;
      for (c = b.length; g < c; g++) {
          var h = b[g];
          var l = w(h).toString();
          Vs(a, l, h) && e.push(h)
      }
      g = 0;
      for (c = e.length; g < c; g++)
          h = e[g],
          l = w(h).toString(),
          Ws(a, l, h),
          (b = h.W()) ? (l = b.G(),
          d.push(l),
          f.push(h)) : a.g[l] = h;
      a.a && a.a.load(d, f);
      g = 0;
      for (c = e.length; g < c; g++)
          a.b(new Xs("addfeature",e[g]))
  }
  function Us(a, b) {
      var c = !1;
      z(a, "addfeature", function(a) {
          c || (c = !0,
          b.push(a.feature),
          c = !1)
      });
      z(a, "removefeature", function(a) {
          c || (c = !0,
          b.remove(a.feature),
          c = !1)
      });
      z(b, "add", function(a) {
          c || (c = !0,
          this.Eb(a.element),
          c = !1)
      }, a);
      z(b, "remove", function(a) {
          c || (c = !0,
          this.Ib(a.element),
          c = !1)
      }, a);
      a.i = b
  }
  k.clear = function(a) {
      if (a) {
          for (var b in this.v)
              this.v[b].forEach(Hc);
          this.i || (this.v = {},
          this.l = {},
          this.o = {})
      } else if (this.a) {
          this.a.forEach(this.Wg, this);
          for (var c in this.g)
              this.Wg(this.g[c])
      }
      this.i && this.i.clear();
      this.a && this.a.clear();
      this.T.clear();
      this.g = {};
      this.b(new Xs("clear"));
      this.u()
  }
  ;
  k.Ih = function(a, b) {
      if (this.a)
          return this.a.forEach(a, b);
      if (this.i)
          return this.i.forEach(a, b)
  }
  ;
  function Ys(a, b, c) {
      a.ac([b[0], b[1], b[0], b[1]], function(a) {
          if (a.W().yb(b))
              return c.call(void 0, a)
      })
  }
  k.ac = function(a, b, c) {
      if (this.a)
          return Ss(this.a, a, b, c);
      if (this.i)
          return this.i.forEach(b, c)
  }
  ;
  k.Jh = function(a, b, c) {
      return this.ac(a, function(d) {
          if (d.W().Ya(a) && (d = b.call(c, d)))
              return d
      })
  }
  ;
  k.Qh = function() {
      return this.i
  }
  ;
  k.fe = function() {
      if (this.i)
          var a = this.i.a;
      else
          this.a && (a = Ps(this.a),
          wb(this.g) || ja(a, vb(this.g)));
      return a
  }
  ;
  k.Ph = function(a) {
      var b = [];
      Ys(this, a, function(a) {
          b.push(a)
      });
      return b
  }
  ;
  k.Zf = function(a) {
      return Qs(this.a, a)
  }
  ;
  k.Lh = function(a, b) {
      var c = a[0]
        , d = a[1]
        , e = null
        , f = [NaN, NaN]
        , g = Infinity
        , h = [-Infinity, -Infinity, Infinity, Infinity]
        , l = b ? b : Pe;
      Ss(this.a, h, function(a) {
          if (l(a)) {
              var b = a.W()
                , m = g;
              g = b.Mb(c, d, f, g);
              g < m && (e = a,
              a = Math.sqrt(g),
              h[0] = c - a,
              h[1] = d - a,
              h[2] = c + a,
              h[3] = d + a)
          }
      });
      return e
  }
  ;
  k.G = function(a) {
      return this.a.G(a)
  }
  ;
  k.Oh = function(a) {
      a = this.l[a.toString()];
      return void 0 !== a ? a : null
  }
  ;
  k.Zi = function() {
      return this.B
  }
  ;
  k.$i = function() {
      return this.I
  }
  ;
  k.aj = function(a) {
      a = a.target;
      var b = w(a).toString()
        , c = a.W();
      c ? (c = c.G(),
      b in this.g ? (delete this.g[b],
      this.a && this.a.Ea(c, a)) : this.a && Os(this.a, c, a)) : b in this.g || (this.a && this.a.remove(a),
      this.g[b] = a);
      c = a.c;
      void 0 !== c ? (c = c.toString(),
      b in this.o ? (delete this.o[b],
      this.l[c] = a) : this.l[c] !== a && (Zs(this, a),
      this.l[c] = a)) : b in this.o || (Zs(this, a),
      this.o[b] = a);
      this.u();
      this.b(new Xs("changefeature",a))
  }
  ;
  k.ce = function(a, b, c) {
      var d = this.T;
      a = this.fa(a, b);
      var e;
      var f = 0;
      for (e = a.length; f < e; ++f) {
          var g = a[f];
          Ss(d, g, function(a) {
              return Wa(a.extent, g)
          }) || (this.s.call(this, g, b, c),
          d.Ea(g, {
              extent: g.slice()
          }))
      }
  }
  ;
  k.Ib = function(a) {
      var b = w(a).toString();
      b in this.g ? delete this.g[b] : this.a && this.a.remove(a);
      this.Wg(a);
      this.u()
  }
  ;
  k.Wg = function(a) {
      var b = w(a).toString();
      this.v[b].forEach(Hc);
      delete this.v[b];
      var c = a.c;
      void 0 !== c ? delete this.l[c.toString()] : delete this.o[b];
      this.b(new Xs("removefeature",a))
  }
  ;
  function Zs(a, b) {
      for (var c in a.l)
          if (a.l[c] === b) {
              delete a.l[c];
              break
          }
  }
  k.bj = function(a) {
      this.s = a
  }
  ;
  function Xs(a, b) {
      Rc.call(this, a);
      this.feature = b
  }
  v(Xs, Rc);
  function $s(a) {
      Tg.call(this, {
          handleDownEvent: at,
          handleEvent: bt,
          handleUpEvent: ct
      });
      this.U = !1;
      this.fa = null;
      this.s = !1;
      this.Lb = a.source ? a.source : null;
      this.ab = a.features ? a.features : null;
      this.Hk = a.snapTolerance ? a.snapTolerance : 12;
      this.T = a.type;
      this.g = dt(this.T);
      this.Va = a.minPoints ? a.minPoints : this.g === et ? 3 : 2;
      this.oa = a.maxPoints ? a.maxPoints : Infinity;
      this.Jd = a.finishCondition ? a.finishCondition : Pe;
      var b = a.geometryFunction;
      if (!b)
          if ("Circle" === this.T)
              b = function(a, b) {
                  b = b ? b : new es([NaN, NaN]);
                  b.fh(a[0], Math.sqrt(Ge(a[0], a[1])));
                  return b
              }
              ;
          else {
              var c, d = this.g;
              d === ft ? c = D : d === gt ? c = M : d === et && (c = E);
              b = function(a, b) {
                  b ? d === et ? b.na([a[0].concat([a[0][0]])]) : b.na(a) : b = new c(a);
                  return b
              }
          }
      this.Za = b;
      this.I = this.D = this.a = this.B = this.j = this.o = null;
      this.gd = a.clickTolerance ? a.clickTolerance * a.clickTolerance : 36;
      this.ma = new R({
          source: new S({
              useSpatialIndex: !1,
              wrapX: a.wrapX ? a.wrapX : !1
          }),
          style: a.style ? a.style : ht()
      });
      this.ub = a.geometryName;
      this.Gk = a.condition ? a.condition : Og;
      this.If = a.freehand ? Pe : a.freehandCondition ? a.freehandCondition : Pg;
      z(this, Yc("active"), this.Hi, this)
  }
  v($s, Tg);
  function ht() {
      var a = Jk();
      return function(b) {
          return a[b.W().S()]
      }
  }
  k = $s.prototype;
  k.setMap = function(a) {
      Tg.prototype.setMap.call(this, a);
      this.Hi()
  }
  ;
  function bt(a) {
      this.s = this.g !== ft && this.If(a);
      var b = !0;
      this.s && "pointerdrag" === a.type && null !== this.j ? (it(this, a),
      b = !1) : this.s && "pointerdown" === a.type ? b = !1 : "pointermove" === a.type ? b = jt(this, a) : "dblclick" === a.type && (b = !1);
      return Ug.call(this, a) && b
  }
  function at(a) {
      this.U = !this.s;
      return this.s ? (this.fa = a.pixel,
      this.o || kt(this, a),
      !0) : this.Gk(a) ? (this.fa = a.pixel,
      !0) : !1
  }
  function ct(a) {
      var b = !0;
      jt(this, a);
      var c = this.g === lt;
      this.U ? (this.o ? this.s || c ? this.Td() : mt(this, a) ? this.Jd(a) && this.Td() : it(this, a) : (kt(this, a),
      this.g === ft && this.Td()),
      b = !1) : this.s && (this.o = null,
      nt(this));
      return b
  }
  function jt(a, b) {
      if (a.fa && (!a.s && a.U || a.s && !a.U)) {
          var c = a.fa
            , d = b.pixel
            , e = c[0] - d[0];
          c = c[1] - d[1];
          e = e * e + c * c;
          a.U = a.s ? e > a.gd : e <= a.gd
      }
      a.o ? (e = b.coordinate,
      c = a.j.W(),
      a.g === ft ? d = a.a : a.g === et ? (d = a.a[0],
      d = d[d.length - 1],
      mt(a, b) && (e = a.o.slice())) : (d = a.a,
      d = d[d.length - 1]),
      d[0] = e[0],
      d[1] = e[1],
      a.Za(a.a, c),
      a.B && a.B.W().na(e),
      c instanceof E && a.g !== et ? (a.D || (a.D = new Kk(new M(null))),
      e = c.Sh(0),
      b = a.D.W(),
      b.aa(e.ja, e.ca())) : a.I && (b = a.D.W(),
      b.na(a.I)),
      ot(a)) : (b = b.coordinate.slice(),
      a.B ? a.B.W().na(b) : (a.B = new Kk(new D(b)),
      ot(a)));
      return !0
  }
  function mt(a, b) {
      var c = !1;
      if (a.j) {
          var d = !1
            , e = [a.o];
          a.g === gt ? d = a.a.length > a.Va : a.g === et && (d = a.a[0].length > a.Va,
          e = [a.a[0][0], a.a[0][a.a[0].length - 2]]);
          if (d) {
              d = b.map;
              for (var f = 0, g = e.length; f < g; f++) {
                  var h = e[f]
                    , l = d.Ha(h)
                    , m = b.pixel;
                  c = m[0] - l[0];
                  l = m[1] - l[1];
                  if (c = Math.sqrt(c * c + l * l) <= (a.s ? 1 : a.Hk)) {
                      a.o = h;
                      break
                  }
              }
          }
      }
      return c
  }
  function kt(a, b) {
      b = b.coordinate;
      a.o = b;
      a.g === ft ? a.a = b.slice() : a.g === et ? (a.a = [[b.slice(), b.slice()]],
      a.I = a.a[0]) : (a.a = [b.slice(), b.slice()],
      a.g === lt && (a.I = a.a));
      a.I && (a.D = new Kk(new M(a.I)));
      b = a.Za(a.a);
      a.j = new Kk;
      a.ub && a.j.Zc(a.ub);
      a.j.Sa(b);
      ot(a);
      a.b(new pt("drawstart",a.j))
  }
  function it(a, b) {
      b = b.coordinate;
      var c = a.j.W(), d;
      if (a.g === gt) {
          a.o = b.slice();
          var e = a.a;
          e.length >= a.oa && (a.s ? e.pop() : d = !0);
          e.push(b.slice());
          a.Za(e, c)
      } else
          a.g === et && (e = a.a[0],
          e.length >= a.oa && (a.s ? e.pop() : d = !0),
          e.push(b.slice()),
          d && (a.o = e[0]),
          a.Za(a.a, c));
      ot(a);
      d && a.Td()
  }
  k.Up = function() {
      if (this.j) {
          var a = this.j.W();
          if (this.g === gt) {
              var b = this.a;
              b.splice(-2, 1);
              this.Za(b, a);
              2 <= b.length && (this.o = b[b.length - 2].slice())
          } else if (this.g === et) {
              b = this.a[0];
              b.splice(-2, 1);
              var c = this.D.W();
              c.na(b);
              this.Za(this.a, a)
          }
          0 === b.length && (this.o = null);
          ot(this)
      }
  }
  ;
  k.Td = function() {
      var a = nt(this)
        , b = this.a
        , c = a.W();
      this.g === gt ? (b.pop(),
      this.Za(b, c)) : this.g === et && (b[0].pop(),
      this.Za(b, c),
      b = c.V());
      "MultiPoint" === this.T ? a.Sa(new ql([b])) : "MultiLineString" === this.T ? a.Sa(new O([b])) : "MultiPolygon" === this.T && a.Sa(new P([b]));
      this.b(new pt("drawend",a));
      this.ab && this.ab.push(a);
      this.Lb && this.Lb.Eb(a)
  }
  ;
  function nt(a) {
      a.o = null;
      var b = a.j;
      b && (a.j = null,
      a.B = null,
      a.D = null,
      a.ma.ia().clear(!0));
      return b
  }
  k.Fn = function(a) {
      var b = a.W();
      this.j = a;
      this.a = b.V();
      a = this.a[this.a.length - 1];
      this.o = a.slice();
      this.a.push(a.slice());
      ot(this);
      this.b(new pt("drawstart",this.j))
  }
  ;
  k.cd = Qe;
  function ot(a) {
      var b = [];
      a.j && b.push(a.j);
      a.D && b.push(a.D);
      a.B && b.push(a.B);
      a = a.ma.ia();
      a.clear(!0);
      a.Ic(b)
  }
  k.Hi = function() {
      var a = this.v
        , b = this.c();
      a && b || nt(this);
      this.ma.setMap(b ? a : null)
  }
  ;
  function dt(a) {
      var b;
      "Point" === a || "MultiPoint" === a ? b = ft : "LineString" === a || "MultiLineString" === a ? b = gt : "Polygon" === a || "MultiPolygon" === a ? b = et : "Circle" === a && (b = lt);
      return b
  }
  var ft = "Point"
    , gt = "LineString"
    , et = "Polygon"
    , lt = "Circle";
  function pt(a, b) {
      Rc.call(this, a);
      this.feature = b
  }
  v(pt, Rc);
  function qt(a) {
      this.a = this.j = null;
      this.D = !1;
      this.B = this.o = null;
      a || (a = {});
      Tg.call(this, {
          handleDownEvent: rt,
          handleDragEvent: st,
          handleEvent: tt,
          handleUpEvent: ut
      });
      this.s = new R({
          source: new S({
              useSpatialIndex: !1,
              wrapX: !!a.wrapX
          }),
          style: a.boxStyle ? a.boxStyle : vt(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
      });
      this.I = new R({
          source: new S({
              useSpatialIndex: !1,
              wrapX: !!a.wrapX
          }),
          style: a.pointerStyle ? a.pointerStyle : wt(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
      });
      a.extent && this.g(a.extent)
  }
  v(qt, Tg);
  function tt(a) {
      if (!(a instanceof Dd))
          return !0;
      if ("pointermove" == a.type && !this.C) {
          var b = a.pixel
            , c = a.map
            , d = xt(this, b, c);
          d || (d = c.Na(b));
          yt(this, d)
      }
      Ug.call(this, a);
      return !1
  }
  function rt(a) {
      function b(a) {
          var b = null
            , c = null;
          a[0] == e[0] ? b = e[2] : a[0] == e[2] && (b = e[0]);
          a[1] == e[1] ? c = e[3] : a[1] == e[3] && (c = e[1]);
          return null !== b && null !== c ? [b, c] : null
      }
      var c = a.pixel
        , d = a.map
        , e = this.G();
      (a = xt(this, c, d)) && e ? (c = a[0] == e[0] || a[0] == e[2] ? a[0] : null,
      d = a[1] == e[1] || a[1] == e[3] ? a[1] : null,
      null !== c && null !== d ? this.a = zt(b(a)) : null !== c ? this.a = At(b([c, e[1]]), b([c, e[3]])) : null !== d && (this.a = At(b([e[0], d]), b([e[2], d])))) : (a = d.Na(c),
      this.g([a[0], a[1], a[0], a[1]]),
      this.a = zt(a));
      return !0
  }
  function st(a) {
      this.a && (a = a.coordinate,
      this.g(this.a(a)),
      yt(this, a));
      return !0
  }
  function ut() {
      this.a = null;
      var a = this.G();
      a && 0 !== jb(a) || this.g(null);
      return !1
  }
  function vt() {
      var a = Jk();
      return function() {
          return a.Polygon
      }
  }
  function wt() {
      var a = Jk();
      return function() {
          return a.Point
      }
  }
  function zt(a) {
      return function(b) {
          return Oa([a, b])
      }
  }
  function At(a, b) {
      return a[0] == b[0] ? function(c) {
          return Oa([a, [c[0], b[1]]])
      }
      : a[1] == b[1] ? function(c) {
          return Oa([a, [b[0], c[1]]])
      }
      : null
  }
  function xt(a, b, c) {
      function d(a, b) {
          return Ie(e, a) - Ie(e, b)
      }
      var e = c.Na(b)
        , f = a.G();
      if (f) {
          f = [[[f[0], f[1]], [f[0], f[3]]], [[f[0], f[3]], [f[2], f[3]]], [[f[2], f[3]], [f[2], f[1]]], [[f[2], f[1]], [f[0], f[1]]]];
          f.sort(d);
          f = f[0];
          var g = Ae(e, f)
            , h = c.Ha(g);
          if (10 >= He(b, h))
              return b = c.Ha(f[0]),
              c = c.Ha(f[1]),
              b = Ge(h, b),
              c = Ge(h, c),
              a.D = 10 >= Math.sqrt(Math.min(b, c)),
              a.D && (g = b > c ? f[1] : f[0]),
              g
      }
      return null
  }
  function yt(a, b) {
      var c = a.B;
      c ? c.W().na(b) : (c = new Kk(new D(b)),
      a.B = c,
      a.I.ia().Eb(c))
  }
  qt.prototype.setMap = function(a) {
      this.s.setMap(a);
      this.I.setMap(a);
      Tg.prototype.setMap.call(this, a)
  }
  ;
  qt.prototype.G = function() {
      return this.j
  }
  ;
  qt.prototype.g = function(a) {
      this.j = a ? a : null;
      var b = this.o;
      b ? a ? b.Sa(Rf(a)) : b.Sa(void 0) : (this.o = b = a ? new Kk(Rf(a)) : new Kk({}),
      this.s.ia().Eb(b));
      this.b(new Bt(this.j))
  }
  ;
  function Bt(a) {
      Rc.call(this, "extentchanged");
      this.extent = a
  }
  v(Bt, Rc);
  function Ct(a) {
      Tg.call(this, {
          handleDownEvent: Dt,
          handleDragEvent: Et,
          handleEvent: Ft,
          handleUpEvent: Gt
      });
      this.Jd = a.condition ? a.condition : Sg;
      this.ub = function(a) {
          return Jg(a) && Ng(a)
      }
      ;
      this.Lb = a.deleteCondition ? a.deleteCondition : this.ub;
      this.gd = a.insertVertexCondition ? a.insertVertexCondition : Pe;
      this.ab = this.g = null;
      this.Va = [0, 0];
      this.D = this.I = !1;
      this.a = new Ns;
      this.ma = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
      this.o = this.oa = !1;
      this.j = [];
      this.B = new R({
          source: new S({
              useSpatialIndex: !1,
              wrapX: !!a.wrapX
          }),
          style: a.style ? a.style : Ht(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
      });
      this.fa = {
          Point: this.Nn,
          LineString: this.Ji,
          LinearRing: this.Ji,
          Polygon: this.On,
          MultiPoint: this.Ln,
          MultiLineString: this.Kn,
          MultiPolygon: this.Mn,
          Circle: this.In,
          GeometryCollection: this.Jn
      };
      this.U = null;
      a.source ? (this.U = a.source,
      a = new C(this.U.fe()),
      z(this.U, "addfeature", this.bm, this),
      z(this.U, "removefeature", this.dm, this)) : a = a.features;
      if (!a)
          throw Error("The modify interaction requires features or a source");
      this.s = a;
      this.s.forEach(this.wg, this);
      z(this.s, "add", this.Gn, this);
      z(this.s, "remove", this.Hn, this);
      this.T = null
  }
  v(Ct, Tg);
  k = Ct.prototype;
  k.wg = function(a) {
      var b = a.W();
      b && b.S()in this.fa && this.fa[b.S()].call(this, a, b);
      (b = this.v) && b.c && this.c() && It(this, this.Va, b);
      z(a, "change", this.Ii, this)
  }
  ;
  function Jt(a, b) {
      a.D || (a.D = !0,
      a.b(new Kt("modifystart",a.s,b)))
  }
  function Lt(a, b) {
      Mt(a, b);
      a.g && 0 === a.s.gc() && (a.B.ia().Ib(a.g),
      a.g = null);
      Nc(b, "change", a.Ii, a)
  }
  function Mt(a, b) {
      a = a.a;
      var c = [];
      a.forEach(function(a) {
          b === a.feature && c.push(a)
      });
      for (var d = c.length - 1; 0 <= d; --d)
          a.remove(c[d])
  }
  k.Ga = function(a) {
      this.g && !a && (this.B.ia().Ib(this.g),
      this.g = null);
      Tg.prototype.Ga.call(this, a)
  }
  ;
  k.setMap = function(a) {
      this.B.setMap(a);
      Tg.prototype.setMap.call(this, a)
  }
  ;
  k.bm = function(a) {
      a.feature && this.s.push(a.feature)
  }
  ;
  k.dm = function(a) {
      a.feature && this.s.remove(a.feature)
  }
  ;
  k.Gn = function(a) {
      this.wg(a.element)
  }
  ;
  k.Ii = function(a) {
      this.o || (a = a.target,
      Lt(this, a),
      this.wg(a))
  }
  ;
  k.Hn = function(a) {
      Lt(this, a.element)
  }
  ;
  k.Nn = function(a, b) {
      var c = b.V();
      a = {
          feature: a,
          geometry: b,
          la: [c, c]
      };
      this.a.Ea(b.G(), a)
  }
  ;
  k.Ln = function(a, b) {
      var c = b.V(), d;
      var e = 0;
      for (d = c.length; e < d; ++e) {
          var f = c[e];
          f = {
              feature: a,
              geometry: b,
              depth: [e],
              index: e,
              la: [f, f]
          };
          this.a.Ea(b.G(), f)
      }
  }
  ;
  k.Ji = function(a, b) {
      var c = b.V(), d;
      var e = 0;
      for (d = c.length - 1; e < d; ++e) {
          var f = c.slice(e, e + 2);
          var g = {
              feature: a,
              geometry: b,
              index: e,
              la: f
          };
          this.a.Ea(Oa(f), g)
      }
  }
  ;
  k.Kn = function(a, b) {
      var c = b.V(), d, e;
      var f = 0;
      for (e = c.length; f < e; ++f) {
          var g = c[f];
          var h = 0;
          for (d = g.length - 1; h < d; ++h) {
              var l = g.slice(h, h + 2);
              var m = {
                  feature: a,
                  geometry: b,
                  depth: [f],
                  index: h,
                  la: l
              };
              this.a.Ea(Oa(l), m)
          }
      }
  }
  ;
  k.On = function(a, b) {
      var c = b.V(), d, e;
      var f = 0;
      for (e = c.length; f < e; ++f) {
          var g = c[f];
          var h = 0;
          for (d = g.length - 1; h < d; ++h) {
              var l = g.slice(h, h + 2);
              var m = {
                  feature: a,
                  geometry: b,
                  depth: [f],
                  index: h,
                  la: l
              };
              this.a.Ea(Oa(l), m)
          }
      }
  }
  ;
  k.Mn = function(a, b) {
      var c = b.V(), d, e, f;
      var g = 0;
      for (f = c.length; g < f; ++g) {
          var h = c[g];
          var l = 0;
          for (e = h.length; l < e; ++l) {
              var m = h[l];
              var n = 0;
              for (d = m.length - 1; n < d; ++n) {
                  var p = m.slice(n, n + 2);
                  var q = {
                      feature: a,
                      geometry: b,
                      depth: [l, g],
                      index: n,
                      la: p
                  };
                  this.a.Ea(Oa(p), q)
              }
          }
      }
  }
  ;
  k.In = function(a, b) {
      var c = b.xa()
        , d = {
          feature: a,
          geometry: b,
          index: 0,
          la: [c, c]
      };
      a = {
          feature: a,
          geometry: b,
          index: 1,
          la: [c, c]
      };
      d.Tf = a.Tf = [d, a];
      this.a.Ea($a(c), d);
      this.a.Ea(b.G(), a)
  }
  ;
  k.Jn = function(a, b) {
      var c = b.a;
      for (b = 0; b < c.length; ++b)
          this.fa[c[b].S()].call(this, a, c[b])
  }
  ;
  function Nt(a, b) {
      var c = a.g;
      c ? c.W().na(b) : (c = new Kk(new D(b)),
      a.g = c,
      a.B.ia().Eb(c))
  }
  function Ot(a, b) {
      return a.index - b.index
  }
  function Dt(a) {
      if (!this.Jd(a))
          return !1;
      It(this, a.pixel, a.map);
      var b = a.map.Na(a.pixel);
      this.j.length = 0;
      this.D = !1;
      var c = this.g;
      if (c) {
          var d = [];
          c = c.W().V();
          var e = Oa([c]);
          e = Qs(this.a, e);
          var f = {};
          e.sort(Ot);
          for (var g = 0, h = e.length; g < h; ++g) {
              var l = e[g]
                , m = l.la
                , n = w(l.feature)
                , p = l.depth;
              p && (n += "-" + p.join("-"));
              f[n] || (f[n] = Array(2));
              if ("Circle" === l.geometry.S() && 1 === l.index)
                  m = Pt(b, l),
                  De(m, c) && !f[n][0] && (this.j.push([l, 0]),
                  f[n][0] = l);
              else if (De(m[0], c) && !f[n][0])
                  this.j.push([l, 0]),
                  f[n][0] = l;
              else if (De(m[1], c) && !f[n][1]) {
                  if ("LineString" !== l.geometry.S() && "MultiLineString" !== l.geometry.S() || !f[n][0] || 0 !== f[n][0].index)
                      this.j.push([l, 1]),
                      f[n][1] = l
              } else
                  this.gd(a) && w(m)in this.ab && !f[n][0] && !f[n][1] && d.push([l, c])
          }
          d.length && Jt(this, a);
          for (a = d.length - 1; 0 <= a; --a)
              this.km.apply(this, d[a])
      }
      return !!this.g
  }
  function Et(a) {
      this.I = !1;
      Jt(this, a);
      a = a.coordinate;
      for (var b = 0, c = this.j.length; b < c; ++b) {
          var d = this.j[b]
            , e = d[0]
            , f = e.depth
            , g = e.geometry
            , h = e.la;
          for (d = d[1]; a.length < g.pa(); )
              a.push(h[d][a.length]);
          switch (g.S()) {
          case "Point":
              var l = a;
              h[0] = h[1] = a;
              break;
          case "MultiPoint":
              l = g.V();
              l[e.index] = a;
              h[0] = h[1] = a;
              break;
          case "LineString":
              l = g.V();
              l[e.index + d] = a;
              h[d] = a;
              break;
          case "MultiLineString":
              l = g.V();
              l[f[0]][e.index + d] = a;
              h[d] = a;
              break;
          case "Polygon":
              l = g.V();
              l[f[0]][e.index + d] = a;
              h[d] = a;
              break;
          case "MultiPolygon":
              l = g.V();
              l[f[1]][f[0]][e.index + d] = a;
              h[d] = a;
              break;
          case "Circle":
              h[0] = h[1] = a,
              0 === e.index ? (this.o = !0,
              g.rb(a)) : (this.o = !0,
              g.$c(He(g.xa(), a))),
              this.o = !1
          }
          l && (e = g,
          f = l,
          this.o = !0,
          e.na(f),
          this.o = !1)
      }
      Nt(this, a)
  }
  function Gt(a) {
      for (var b, c, d = this.j.length - 1; 0 <= d; --d)
          if (b = this.j[d][0],
          c = b.geometry,
          "Circle" === c.S()) {
              var e = c.xa()
                , f = b.Tf[0];
              b = b.Tf[1];
              f.la[0] = f.la[1] = e;
              b.la[0] = b.la[1] = e;
              Os(this.a, $a(e), f);
              Os(this.a, c.G(), b)
          } else
              Os(this.a, Oa(b.la), b);
      this.D && (this.b(new Kt("modifyend",this.s,a)),
      this.D = !1);
      return !1
  }
  function Ft(a) {
      if (!(a instanceof Dd))
          return !0;
      this.T = a;
      var b;
      Yf(a.map.$())[1] || "pointermove" != a.type || this.C || (this.Va = a.pixel,
      It(this, a.pixel, a.map));
      this.g && this.Lb(a) && (b = "singleclick" == a.type && this.I ? !0 : this.vj());
      "singleclick" == a.type && (this.I = !1);
      return Ug.call(this, a) && !b
  }
  function It(a, b, c) {
      function d(a, b) {
          return Qt(e, a) - Qt(e, b)
      }
      var e = c.Na(b)
        , f = Ra($a(e), c.$().Oa() * a.ma);
      f = Qs(a.a, f);
      if (0 < f.length) {
          f.sort(d);
          var g = f[0]
            , h = g.la
            , l = Pt(e, g)
            , m = c.Ha(l)
            , n = He(b, m);
          if (n <= a.ma) {
              b = {};
              if ("Circle" === g.geometry.S() && 1 === g.index)
                  a.oa = !0,
                  Nt(a, l);
              else
                  for (n = c.Ha(h[0]),
                  g = c.Ha(h[1]),
                  c = Ge(m, n),
                  m = Ge(m, g),
                  n = Math.sqrt(Math.min(c, m)),
                  a.oa = n <= a.ma,
                  a.oa && (l = c > m ? h[1] : h[0]),
                  Nt(a, l),
                  m = 1,
                  c = f.length; m < c; ++m)
                      if (l = f[m].la,
                      De(h[0], l[0]) && De(h[1], l[1]) || De(h[0], l[1]) && De(h[1], l[0]))
                          b[w(l)] = !0;
                      else
                          break;
              b[w(h)] = !0;
              a.ab = b;
              return
          }
      }
      a.g && (a.B.ia().Ib(a.g),
      a.g = null)
  }
  function Qt(a, b) {
      var c = b.geometry;
      return "Circle" === c.S() && 1 === b.index ? (a = Ge(c.xa(), a),
      c = Math.sqrt(a) - c.xd(),
      c * c) : Ie(a, b.la)
  }
  function Pt(a, b) {
      var c = b.geometry;
      return "Circle" === c.S() && 1 === b.index ? c.Gb(a) : Ae(a, b.la)
  }
  k.km = function(a, b) {
      for (var c = a.la, d = a.feature, e = a.geometry, f = a.depth, g = a.index, h; b.length < e.pa(); )
          b.push(0);
      switch (e.S()) {
      case "MultiLineString":
          h = e.V();
          h[f[0]].splice(g + 1, 0, b);
          break;
      case "Polygon":
          h = e.V();
          h[f[0]].splice(g + 1, 0, b);
          break;
      case "MultiPolygon":
          h = e.V();
          h[f[1]][f[0]].splice(g + 1, 0, b);
          break;
      case "LineString":
          h = e.V();
          h.splice(g + 1, 0, b);
          break;
      default:
          return
      }
      this.o = !0;
      e.na(h);
      this.o = !1;
      h = this.a;
      h.remove(a);
      Rt(this, e, g, f, 1);
      a = {
          la: [c[0], b],
          feature: d,
          geometry: e,
          depth: f,
          index: g
      };
      h.Ea(Oa(a.la), a);
      this.j.push([a, 1]);
      b = {
          la: [b, c[1]],
          feature: d,
          geometry: e,
          depth: f,
          index: g + 1
      };
      h.Ea(Oa(b.la), b);
      this.j.push([b, 0]);
      this.I = !0
  }
  ;
  k.vj = function() {
      if (this.T && "pointerdrag" != this.T.type) {
          var a = this.T;
          Jt(this, a);
          var b = this.j, c = {}, d, e;
          for (e = b.length - 1; 0 <= e; --e) {
              var f = b[e];
              var g = f[0];
              var h = w(g.feature);
              g.depth && (h += "-" + g.depth.join("-"));
              h in c || (c[h] = {});
              0 === f[1] ? (c[h].right = g,
              c[h].index = g.index) : 1 == f[1] && (c[h].left = g,
              c[h].index = g.index + 1)
          }
          for (h in c) {
              var l = c[h].right;
              var m = c[h].left;
              e = c[h].index;
              var n = e - 1;
              g = void 0 !== m ? m : l;
              0 > n && (n = 0);
              f = g.geometry;
              var p = d = f.V();
              var q = !1;
              switch (f.S()) {
              case "MultiLineString":
                  2 < d[g.depth[0]].length && (d[g.depth[0]].splice(e, 1),
                  q = !0);
                  break;
              case "LineString":
                  2 < d.length && (d.splice(e, 1),
                  q = !0);
                  break;
              case "MultiPolygon":
                  p = p[g.depth[1]];
              case "Polygon":
                  p = p[g.depth[0]],
                  4 < p.length && (e == p.length - 1 && (e = 0),
                  p.splice(e, 1),
                  q = !0,
                  0 === e && (p.pop(),
                  p.push(p[0]),
                  n = p.length - 1))
              }
              q && (q = f,
              this.o = !0,
              q.na(d),
              this.o = !1,
              d = [],
              void 0 !== m && (this.a.remove(m),
              d.push(m.la[0])),
              void 0 !== l && (this.a.remove(l),
              d.push(l.la[1])),
              void 0 !== m && void 0 !== l && (m = {
                  depth: g.depth,
                  feature: g.feature,
                  geometry: g.geometry,
                  index: n,
                  la: d
              },
              this.a.Ea(Oa(m.la), m)),
              Rt(this, f, e, g.depth, -1),
              this.g && (this.B.ia().Ib(this.g),
              this.g = null),
              b.length = 0)
          }
          this.b(new Kt("modifyend",this.s,a));
          this.D = !1;
          return !0
      }
      return !1
  }
  ;
  function Rt(a, b, c, d, e) {
      Ss(a.a, b.G(), function(a) {
          a.geometry === b && (void 0 === d || void 0 === a.depth || ma(a.depth, d)) && a.index > c && (a.index += e)
      })
  }
  function Ht() {
      var a = Jk();
      return function() {
          return a.Point
      }
  }
  function Kt(a, b, c) {
      Rc.call(this, a);
      this.features = b;
      this.mapBrowserEvent = c
  }
  v(Kt, Rc);
  function St(a) {
      Bg.call(this, {
          handleEvent: Tt
      });
      a = a ? a : {};
      this.D = a.condition ? a.condition : Ng;
      this.C = a.addCondition ? a.addCondition : Qe;
      this.B = a.removeCondition ? a.removeCondition : Qe;
      this.I = a.toggleCondition ? a.toggleCondition : Pg;
      this.o = a.multi ? a.multi : !1;
      this.l = a.filter ? a.filter : Pe;
      this.j = a.hitTolerance ? a.hitTolerance : 0;
      this.g = new R({
          source: new S({
              useSpatialIndex: !1,
              features: a.features,
              wrapX: a.wrapX
          }),
          style: a.style ? a.style : Ut(),
          updateWhileAnimating: !0,
          updateWhileInteracting: !0
      });
      if (a.layers)
          if ("function" === typeof a.layers)
              a = a.layers;
          else {
              var b = a.layers;
              a = function(a) {
                  return ha(b, a)
              }
          }
      else
          a = Pe;
      this.s = a;
      this.a = {};
      a = this.g.ia().i;
      z(a, "add", this.Pn, this);
      z(a, "remove", this.Tn, this)
  }
  v(St, Bg);
  k = St.prototype;
  k.Qn = function() {
      return this.g.ia().i
  }
  ;
  k.Rn = function() {
      return this.j
  }
  ;
  k.Sn = function(a) {
      a = w(a);
      return this.a[a]
  }
  ;
  function Tt(a) {
      if (!this.D(a))
          return !0;
      var b = this.C(a)
        , c = this.B(a)
        , d = this.I(a)
        , e = !b && !c && !d
        , f = a.map
        , g = this.g.ia().i
        , h = []
        , l = [];
      if (e) {
          ub(this.a);
          f.Mc(a.pixel, function(a, b) {
              if (this.l(a, b))
                  return l.push(a),
                  a = w(a),
                  this.a[a] = b,
                  !this.o
          }
          .bind(this), {
              layerFilter: this.s,
              hitTolerance: this.j
          });
          for (e = g.gc() - 1; 0 <= e; --e) {
              f = g.item(e);
              var m = l.indexOf(f);
              -1 < m ? l.splice(m, 1) : (g.remove(f),
              h.push(f))
          }
          0 !== l.length && g.pg(l)
      } else {
          f.Mc(a.pixel, function(a, e) {
              if (this.l(a, e))
                  return !b && !d || ha(g.a, a) ? (c || d) && ha(g.a, a) && (h.push(a),
                  e = w(a),
                  delete this.a[e]) : (l.push(a),
                  a = w(a),
                  this.a[a] = e),
                  !this.o
          }
          .bind(this), {
              layerFilter: this.s,
              hitTolerance: this.j
          });
          for (e = h.length - 1; 0 <= e; --e)
              g.remove(h[e]);
          g.pg(l)
      }
      (0 < l.length || 0 < h.length) && this.b(new Vt(Wt,l,h,a));
      return Mg(a)
  }
  k.Un = function(a) {
      this.j = a
  }
  ;
  k.setMap = function(a) {
      var b = this.v
        , c = this.g.ia().i;
      b && c.forEach(b.Rj, b);
      Bg.prototype.setMap.call(this, a);
      this.g.setMap(a);
      a && c.forEach(a.Mj, a)
  }
  ;
  function Ut() {
      var a = Jk();
      ja(a.Polygon, a.LineString);
      ja(a.GeometryCollection, a.LineString);
      return function(b) {
          return b.W() ? a[b.W().S()] : null
      }
  }
  k.Pn = function(a) {
      var b = this.v;
      b && b.Mj(a.element)
  }
  ;
  k.Tn = function(a) {
      var b = this.v;
      b && b.Rj(a.element)
  }
  ;
  function Vt(a, b, c, d) {
      Rc.call(this, a);
      this.selected = b;
      this.deselected = c;
      this.mapBrowserEvent = d
  }
  v(Vt, Rc);
  var Wt = "select";
  function Xt(a) {
      Tg.call(this, {
          handleEvent: Yt,
          handleDownEvent: Pe,
          handleUpEvent: Zt
      });
      a = a ? a : {};
      this.o = a.source ? a.source : null;
      this.T = void 0 !== a.vertex ? a.vertex : !0;
      this.D = void 0 !== a.edge ? a.edge : !0;
      this.j = a.features ? a.features : null;
      this.ma = [];
      this.B = {};
      this.U = {};
      this.s = {};
      this.I = null;
      this.g = void 0 !== a.pixelTolerance ? a.pixelTolerance : 10;
      this.oa = $t.bind(this);
      this.a = new Ns;
      this.fa = {
          Point: this.ao,
          LineString: this.Mi,
          LinearRing: this.Mi,
          Polygon: this.bo,
          MultiPoint: this.Zn,
          MultiLineString: this.Yn,
          MultiPolygon: this.$n,
          GeometryCollection: this.Xn,
          Circle: this.Wn
      }
  }
  v(Xt, Tg);
  k = Xt.prototype;
  k.Eb = function(a, b) {
      b = void 0 !== b ? b : !0;
      var c = w(a)
        , d = a.W();
      if (d) {
          var e = this.fa[d.S()];
          e && (this.U[c] = d.G(Pa()),
          e.call(this, a, d))
      }
      b && (this.B[c] = z(a, "change", this.Vn, this))
  }
  ;
  k.Lk = function(a) {
      this.Eb(a)
  }
  ;
  k.Mk = function(a) {
      this.Ib(a)
  }
  ;
  k.Ki = function(a) {
      if (a instanceof Xs)
          var b = a.feature;
      else
          a instanceof dd && (b = a.element);
      this.Eb(b)
  }
  ;
  k.Li = function(a) {
      if (a instanceof Xs)
          var b = a.feature;
      else
          a instanceof dd && (b = a.element);
      this.Ib(b)
  }
  ;
  k.Vn = function(a) {
      a = a.target;
      if (this.C) {
          var b = w(a);
          b in this.s || (this.s[b] = a)
      } else
          this.Sj(a)
  }
  ;
  k.Ib = function(a, b) {
      b = void 0 !== b ? b : !0;
      var c = w(a)
        , d = this.U[c];
      if (d) {
          var e = this.a
            , f = [];
          Ss(e, d, function(b) {
              a === b.feature && f.push(b)
          });
          for (d = f.length - 1; 0 <= d; --d)
              e.remove(f[d])
      }
      b && (Hc(this.B[c]),
      delete this.B[c])
  }
  ;
  k.setMap = function(a) {
      var b = this.v, c = this.ma, d;
      this.j ? d = this.j : this.o && (d = this.o.fe());
      b && (c.forEach(Hc),
      c.length = 0,
      d.forEach(this.Mk, this));
      Tg.prototype.setMap.call(this, a);
      a && (this.j ? c.push(z(this.j, "add", this.Ki, this), z(this.j, "remove", this.Li, this)) : this.o && c.push(z(this.o, "addfeature", this.Ki, this), z(this.o, "removefeature", this.Li, this)),
      d.forEach(this.Lk, this))
  }
  ;
  k.cd = Qe;
  function au(a, b, c, d) {
      var e = d.Na([b[0] - a.g, b[1] + a.g])
        , f = d.Na([b[0] + a.g, b[1] - a.g]);
      e = Oa([e, f]);
      var g = Qs(a.a, e);
      a.T && !a.D && (g = g.filter(function(a) {
          return "Circle" !== a.feature.W().S()
      }));
      var h = !1;
      e = !1;
      var l = f = null;
      if (0 < g.length) {
          a.I = c;
          g.sort(a.oa);
          var m = g[0].la;
          h = "Circle" === g[0].feature.W().S();
          if (a.T && !a.D) {
              if (c = d.Ha(m[0]),
              h = d.Ha(m[1]),
              c = Ge(b, c),
              b = Ge(b, h),
              h = Math.sqrt(Math.min(c, b)),
              h = h <= a.g)
                  e = !0,
                  f = c > b ? m[1] : m[0],
                  l = d.Ha(f)
          } else
              a.D && (f = h ? ze(c, g[0].feature.W()) : Ae(c, m),
              l = d.Ha(f),
              He(b, l) <= a.g && (e = !0,
              a.T && !h && (c = d.Ha(m[0]),
              h = d.Ha(m[1]),
              c = Ge(l, c),
              b = Ge(l, h),
              h = Math.sqrt(Math.min(c, b)),
              h = h <= a.g))) && (f = c > b ? m[1] : m[0],
              l = d.Ha(f));
          e && (l = [Math.round(l[0]), Math.round(l[1])])
      }
      return {
          qq: e,
          vertex: f,
          zq: l
      }
  }
  k.Sj = function(a) {
      this.Ib(a, !1);
      this.Eb(a, !1)
  }
  ;
  k.Wn = function(a, b) {
      b = Sf(b).V()[0];
      var c;
      var d = 0;
      for (c = b.length - 1; d < c; ++d) {
          var e = b.slice(d, d + 2);
          var f = {
              feature: a,
              la: e
          };
          this.a.Ea(Oa(e), f)
      }
  }
  ;
  k.Xn = function(a, b) {
      var c = b.a;
      for (b = 0; b < c.length; ++b) {
          var d = this.fa[c[b].S()];
          d && d.call(this, a, c[b])
      }
  }
  ;
  k.Mi = function(a, b) {
      b = b.V();
      var c;
      var d = 0;
      for (c = b.length - 1; d < c; ++d) {
          var e = b.slice(d, d + 2);
          var f = {
              feature: a,
              la: e
          };
          this.a.Ea(Oa(e), f)
      }
  }
  ;
  k.Yn = function(a, b) {
      b = b.V();
      var c, d;
      var e = 0;
      for (d = b.length; e < d; ++e) {
          var f = b[e];
          var g = 0;
          for (c = f.length - 1; g < c; ++g) {
              var h = f.slice(g, g + 2);
              var l = {
                  feature: a,
                  la: h
              };
              this.a.Ea(Oa(h), l)
          }
      }
  }
  ;
  k.Zn = function(a, b) {
      var c = b.V(), d;
      var e = 0;
      for (d = c.length; e < d; ++e) {
          var f = c[e];
          f = {
              feature: a,
              la: [f, f]
          };
          this.a.Ea(b.G(), f)
      }
  }
  ;
  k.$n = function(a, b) {
      b = b.V();
      var c, d, e;
      var f = 0;
      for (e = b.length; f < e; ++f) {
          var g = b[f];
          var h = 0;
          for (d = g.length; h < d; ++h) {
              var l = g[h];
              var m = 0;
              for (c = l.length - 1; m < c; ++m) {
                  var n = l.slice(m, m + 2);
                  var p = {
                      feature: a,
                      la: n
                  };
                  this.a.Ea(Oa(n), p)
              }
          }
      }
  }
  ;
  k.ao = function(a, b) {
      var c = b.V();
      a = {
          feature: a,
          la: [c, c]
      };
      this.a.Ea(b.G(), a)
  }
  ;
  k.bo = function(a, b) {
      b = b.V();
      var c, d;
      var e = 0;
      for (d = b.length; e < d; ++e) {
          var f = b[e];
          var g = 0;
          for (c = f.length - 1; g < c; ++g) {
              var h = f.slice(g, g + 2);
              var l = {
                  feature: a,
                  la: h
              };
              this.a.Ea(Oa(h), l)
          }
      }
  }
  ;
  function Yt(a) {
      var b = au(this, a.pixel, a.coordinate, a.map);
      b.qq && (a.coordinate = b.vertex.slice(0, 2),
      a.pixel = b.zq);
      return Ug.call(this, a)
  }
  function Zt() {
      var a = vb(this.s);
      a.length && (a.forEach(this.Sj, this),
      this.s = {});
      return !1
  }
  function $t(a, b) {
      return Ie(this.I, a.la) - Ie(this.I, b.la)
  }
  ;function bu(a) {
      Tg.call(this, {
          handleDownEvent: cu,
          handleDragEvent: du,
          handleMoveEvent: eu,
          handleUpEvent: fu
      });
      a = a ? a : {};
      this.a = null;
      this.j = void 0 !== a.features ? a.features : null;
      if (a.layers)
          if ("function" === typeof a.layers)
              var b = a.layers;
          else {
              var c = a.layers;
              b = function(a) {
                  return ha(c, a)
              }
          }
      else
          b = Pe;
      this.D = b;
      this.o = a.hitTolerance ? a.hitTolerance : 0;
      this.g = null;
      z(this, Yc("active"), this.s, this)
  }
  v(bu, Tg);
  function cu(a) {
      this.g = gu(this, a.pixel, a.map);
      if (!this.a && this.g) {
          this.a = a.coordinate;
          eu.call(this, a);
          var b = this.j || new C([this.g]);
          this.b(new hu("translatestart",b,a.coordinate));
          return !0
      }
      return !1
  }
  function fu(a) {
      if (this.a) {
          this.a = null;
          eu.call(this, a);
          var b = this.j || new C([this.g]);
          this.b(new hu("translateend",b,a.coordinate));
          return !0
      }
      return !1
  }
  function du(a) {
      if (this.a) {
          a = a.coordinate;
          var b = a[0] - this.a[0]
            , c = a[1] - this.a[1]
            , d = this.j || new C([this.g]);
          d.forEach(function(a) {
              var d = a.W();
              d.translate(b, c);
              a.Sa(d)
          });
          this.a = a;
          this.b(new hu("translating",d,a))
      }
  }
  function eu(a) {
      var b = a.map.a;
      gu(this, a.pixel, a.map) ? (b.classList.remove(this.a ? "ol-grab" : "ol-grabbing"),
      b.classList.add(this.a ? "ol-grabbing" : "ol-grab")) : b.classList.remove("ol-grab", "ol-grabbing")
  }
  function gu(a, b, c) {
      return c.Mc(b, function(a) {
          if (!this.j || ha(this.j.a, a))
              return a
      }
      .bind(a), {
          layerFilter: a.D,
          hitTolerance: a.o
      })
  }
  bu.prototype.B = function() {
      return this.o
  }
  ;
  bu.prototype.I = function(a) {
      this.o = a
  }
  ;
  bu.prototype.setMap = function(a) {
      var b = this.v;
      Tg.prototype.setMap.call(this, a);
      iu(this, b)
  }
  ;
  bu.prototype.s = function() {
      iu(this, null)
  }
  ;
  function iu(a, b) {
      var c = a.v;
      a = a.c();
      c && a || (c = c || b) && c.a.classList.remove("ol-grab", "ol-grabbing")
  }
  function hu(a, b, c) {
      Rc.call(this, a);
      this.features = b;
      this.coordinate = c
  }
  v(hu, Rc);
  function V(a) {
      a = a ? a : {};
      var b = tb({}, a);
      delete b.gradient;
      delete b.radius;
      delete b.blur;
      delete b.shadow;
      delete b.weight;
      R.call(this, b);
      this.c = null;
      this.T = void 0 !== a.shadow ? a.shadow : 250;
      this.B = void 0;
      this.v = null;
      z(this, Yc(ju), this.Jl, this);
      this.Dj(a.gradient ? a.gradient : ku);
      this.xj(void 0 !== a.blur ? a.blur : 15);
      this.$c(void 0 !== a.radius ? a.radius : 8);
      z(this, Yc(lu), this.mg, this);
      z(this, Yc(mu), this.mg, this);
      this.mg();
      var c = a.weight ? a.weight : "weight", d;
      "string" === typeof c ? d = function(a) {
          return a.get(c)
      }
      : d = c;
      this.j(function(a) {
          a = d(a);
          a = void 0 !== a ? Da(a, 0, 1) : 1;
          var b = 255 * a | 0
            , c = this.v[b];
          c || (c = [new Ek({
              image: new Gn({
                  opacity: a,
                  src: this.B
              })
          })],
          this.v[b] = c);
          return c
      }
      .bind(this));
      this.set(Bj, null);
      z(this, "render", this.$l, this)
  }
  v(V, R);
  var ku = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
  k = V.prototype;
  k.Kh = function() {
      return this.get(lu)
  }
  ;
  k.Rh = function() {
      return this.get(ju)
  }
  ;
  k.Oi = function() {
      return this.get(mu)
  }
  ;
  k.Jl = function() {
      for (var a = this.Rh(), b = dg(1, 256), c = b.createLinearGradient(0, 0, 1, 256), d = 1 / (a.length - 1), e = 0, f = a.length; e < f; ++e)
          c.addColorStop(e * d, a[e]);
      b.fillStyle = c;
      b.fillRect(0, 0, 1, 256);
      this.c = b.getImageData(0, 0, 1, 256).data
  }
  ;
  k.mg = function() {
      var a = this.Oi()
        , b = this.Kh()
        , c = a + b + 1
        , d = 2 * c;
      d = dg(d, d);
      d.shadowOffsetX = d.shadowOffsetY = this.T;
      d.shadowBlur = b;
      d.shadowColor = "#000";
      d.beginPath();
      b = c - this.T;
      d.arc(b, b, a, 0, 2 * Math.PI, !0);
      d.fill();
      this.B = d.canvas.toDataURL();
      this.v = Array(256);
      this.u()
  }
  ;
  k.$l = function(a) {
      a = a.context;
      var b = a.canvas;
      b = a.getImageData(0, 0, b.width, b.height);
      var c = b.data, d, e;
      var f = 0;
      for (d = c.length; f < d; f += 4)
          if (e = 4 * c[f + 3])
              c[f] = this.c[e],
              c[f + 1] = this.c[e + 1],
              c[f + 2] = this.c[e + 2];
      a.putImageData(b, 0, 0)
  }
  ;
  k.xj = function(a) {
      this.set(lu, a)
  }
  ;
  k.Dj = function(a) {
      this.set(ju, a)
  }
  ;
  k.$c = function(a) {
      this.set(mu, a)
  }
  ;
  var lu = "blur"
    , ju = "gradient"
    , mu = "radius";
  function nu(a) {
      wi.call(this, a ? a : {});
      this.type = "IMAGE"
  }
  v(nu, wi);
  function ou(a) {
      a = a ? a : {};
      var b = tb({}, a);
      delete b.preload;
      delete b.useInterimTilesOnError;
      wi.call(this, b);
      this.j(void 0 !== a.preload ? a.preload : 0);
      this.C(void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
      this.type = "TILE"
  }
  v(ou, wi);
  ou.prototype.c = function() {
      return this.get("preload")
  }
  ;
  ou.prototype.j = function(a) {
      this.set("preload", a)
  }
  ;
  ou.prototype.i = function() {
      return this.get("useInterimTilesOnError")
  }
  ;
  ou.prototype.C = function(a) {
      this.set("useInterimTilesOnError", a)
  }
  ;
  function W(a) {
      a = a ? a : {};
      var b = tb({}, a);
      delete b.preload;
      delete b.useInterimTilesOnError;
      R.call(this, b);
      this.B(a.preload ? a.preload : 0);
      this.T(a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
      wa(void 0 == a.renderMode || "image" == a.renderMode || "hybrid" == a.renderMode || "vector" == a.renderMode, 28);
      this.v = a.renderMode || "hybrid";
      this.type = "VECTOR_TILE"
  }
  v(W, R);
  W.prototype.c = function() {
      return this.get("preload")
  }
  ;
  W.prototype.i = function() {
      return this.get("useInterimTilesOnError")
  }
  ;
  W.prototype.B = function(a) {
      this.set("preload", a)
  }
  ;
  W.prototype.T = function(a) {
      this.set("useInterimTilesOnError", a)
  }
  ;
  function pu(a) {
      this.b = a
  }
  ;function qu(a) {
      this.b = a
  }
  v(qu, pu);
  qu.prototype.S = function() {
      return 35632
  }
  ;
  function ru(a) {
      this.b = a
  }
  v(ru, pu);
  ru.prototype.S = function() {
      return 35633
  }
  ;
  var su = new qu("precision mediump float;varying vec2 a;varying vec2 b;varying float c;varying float d;uniform float m;uniform vec4 n;uniform vec4 o;uniform vec2 p;void main(void){vec2 windowCenter=vec2((a.x+1.0)/2.0*p.x*d,(a.y+1.0)/2.0*p.y*d);vec2 windowOffset=vec2((b.x+1.0)/2.0*p.x*d,(b.y+1.0)/2.0*p.y*d);float radius=length(windowCenter-windowOffset);float dist=length(windowCenter-gl_FragCoord.xy);if(dist>radius+c){if(o.a==0.0){gl_FragColor=n;}else{gl_FragColor=o;}gl_FragColor.a=gl_FragColor.a-(dist-(radius+c));}else if(n.a==0.0){gl_FragColor=o;if(dist<radius-c){gl_FragColor.a=gl_FragColor.a-(radius-c-dist);}} else{gl_FragColor=n;float strokeDist=radius-c;float antialias=2.0*d;if(dist>strokeDist){gl_FragColor=o;}else if(dist>=strokeDist-antialias){float step=smoothstep(strokeDist-antialias,strokeDist,dist);gl_FragColor=mix(n,o,step);}} gl_FragColor.a=gl_FragColor.a*m;if(gl_FragColor.a<=0.0){discard;}}")
    , tu = new ru("varying vec2 a;varying vec2 b;varying float c;varying float d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;void main(void){mat4 offsetMatrix=i*j;a=vec4(h*vec4(e,0.0,1.0)).xy;d=l;float lineWidth=k*l;c=lineWidth/2.0;if(lineWidth==0.0){lineWidth=2.0*l;}vec2 offset;float radius=g+3.0*l;//Until we get gl_VertexID in WebGL,we store an instruction.if(f==0.0){//Offsetting the edges of the triangle by lineWidth/2 is necessary,however//we should also leave some space for the antialiasing,thus we offset by lineWidth.offset=vec2(-1.0,1.0);}else if(f==1.0){offset=vec2(-1.0,-1.0);}else if(f==2.0){offset=vec2(1.0,-1.0);}else{offset=vec2(1.0,1.0);}gl_Position=h*vec4(e+offset*radius,0.0,1.0)+offsetMatrix*vec4(offset*lineWidth,0.0,0.0);b=vec4(h*vec4(e.x+g,e.y,0.0,1.0)).xy;if(distance(a,b)>20000.0){gl_Position=vec4(a,0.0,1.0);}}");
  function uu(a, b) {
      this.f = a.getUniformLocation(b, "h");
      this.i = a.getUniformLocation(b, "i");
      this.c = a.getUniformLocation(b, "j");
      this.ra = a.getUniformLocation(b, "k");
      this.sa = a.getUniformLocation(b, "l");
      this.a = a.getUniformLocation(b, "m");
      this.D = a.getUniformLocation(b, "n");
      this.T = a.getUniformLocation(b, "o");
      this.I = a.getUniformLocation(b, "p");
      this.b = a.getAttribLocation(b, "e");
      this.j = a.getAttribLocation(b, "f");
      this.O = a.getAttribLocation(b, "g")
  }
  ;function vu() {
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  }
  function wu(a, b) {
      a[0] = b[0];
      a[1] = b[1];
      a[4] = b[2];
      a[5] = b[3];
      a[12] = b[4];
      a[13] = b[5];
      return a
  }
  ;function xu(a, b) {
      this.origin = nb(b);
      this.ub = Ue();
      this.Va = Ue();
      this.ab = Ue();
      this.U = vu();
      this.b = [];
      this.j = null;
      this.f = [];
      this.i = [];
      this.a = [];
      this.o = null;
      this.g = void 0
  }
  v(xu, Uh);
  xu.prototype.Ka = function(a, b, c, d, e, f, g, h, l, m, n) {
      var p = a.b;
      if (this.g) {
          var q = p.isEnabled(p.STENCIL_TEST);
          var r = p.getParameter(p.STENCIL_FUNC);
          var u = p.getParameter(p.STENCIL_VALUE_MASK);
          var x = p.getParameter(p.STENCIL_REF);
          var B = p.getParameter(p.STENCIL_WRITEMASK);
          var A = p.getParameter(p.STENCIL_FAIL);
          var y = p.getParameter(p.STENCIL_PASS_DEPTH_PASS);
          var N = p.getParameter(p.STENCIL_PASS_DEPTH_FAIL);
          p.enable(p.STENCIL_TEST);
          p.clear(p.STENCIL_BUFFER_BIT);
          p.stencilMask(255);
          p.stencilFunc(p.ALWAYS, 1, 255);
          p.stencilOp(p.KEEP, p.KEEP, p.REPLACE);
          this.g.Ka(a, b, c, d, e, f, g, h, l, m, n);
          p.stencilMask(0);
          p.stencilFunc(p.NOTEQUAL, 1, 255)
      }
      yu(a, 34962, this.o);
      yu(a, 34963, this.j);
      f = this.Bf(p, a, e, f);
      var ca = Ve(this.ub);
      af(ca, 2 / (c * e[0]), 2 / (c * e[1]));
      $e(ca, -d);
      bf(ca, -(b[0] - this.origin[0]), -(b[1] - this.origin[1]));
      b = Ve(this.ab);
      af(b, 2 / e[0], 2 / e[1]);
      e = Ve(this.Va);
      0 !== d && $e(e, -d);
      p.uniformMatrix4fv(f.f, !1, wu(this.U, ca));
      p.uniformMatrix4fv(f.i, !1, wu(this.U, b));
      p.uniformMatrix4fv(f.c, !1, wu(this.U, e));
      p.uniform1f(f.a, g);
      if (l) {
          m ? a = this.He(p, a, h, l, n) : (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT),
          this.Sd(p, a, h, !0),
          a = (a = l(null)) ? a : void 0);
          var la = a
      } else
          this.Sd(p, a, h, !1);
      this.Cf(p, f);
      this.g && (q || p.disable(p.STENCIL_TEST),
      p.clear(p.STENCIL_BUFFER_BIT),
      p.stencilFunc(r, x, u),
      p.stencilMask(B),
      p.stencilOp(A, N, y));
      return la
  }
  ;
  function zu(a, b, c, d) {
      a.drawElements(4, d - c, b.g ? 5125 : 5123, c * (b.g ? 4 : 2))
  }
  ;var Au = [0, 0, 0, 1]
    , Bu = []
    , Cu = [0, 0, 0, 1];
  function Du(a, b, c, d, e, f) {
      a = (c - a) * (f - b) - (e - a) * (d - b);
      return a <= Eu && a >= -Eu ? void 0 : 0 < a
  }
  var Eu = Number.EPSILON || 2.220446049250313E-16;
  function Fu(a) {
      this.b = void 0 !== a ? a : [];
      this.a = Gu
  }
  var Gu = 35044;
  function Hu(a, b) {
      xu.call(this, 0, b);
      this.v = null;
      this.l = [];
      this.s = [];
      this.O = 0;
      this.c = {
          fillColor: null,
          strokeColor: null,
          lineDash: null,
          lineDashOffset: void 0,
          lineWidth: void 0,
          u: !1
      }
  }
  v(Hu, xu);
  k = Hu.prototype;
  k.$b = function(a, b) {
      var c = a.xd()
        , d = a.pa();
      if (c) {
          this.f.push(this.b.length);
          this.i.push(b);
          this.c.u && (this.s.push(this.b.length),
          this.c.u = !1);
          this.O = c;
          a = a.ca();
          a = Se(a, 0, 2, d, -this.origin[0], -this.origin[1]);
          b = this.a.length;
          c = this.b.length;
          var e = b / 4, f;
          for (f = 0; 2 > f; f += d)
              this.a[b++] = a[f],
              this.a[b++] = a[f + 1],
              this.a[b++] = 0,
              this.a[b++] = this.O,
              this.a[b++] = a[f],
              this.a[b++] = a[f + 1],
              this.a[b++] = 1,
              this.a[b++] = this.O,
              this.a[b++] = a[f],
              this.a[b++] = a[f + 1],
              this.a[b++] = 2,
              this.a[b++] = this.O,
              this.a[b++] = a[f],
              this.a[b++] = a[f + 1],
              this.a[b++] = 3,
              this.a[b++] = this.O,
              this.b[c++] = e,
              this.b[c++] = e + 1,
              this.b[c++] = e + 2,
              this.b[c++] = e + 2,
              this.b[c++] = e + 3,
              this.b[c++] = e,
              e += 4
      } else
          this.c.u && (this.l.pop(),
          this.l.length && (d = this.l[this.l.length - 1],
          this.c.fillColor = d[0],
          this.c.strokeColor = d[1],
          this.c.lineWidth = d[2],
          this.c.u = !1))
  }
  ;
  k.$a = function() {
      this.o = new Fu(this.a);
      this.j = new Fu(this.b);
      this.f.push(this.b.length);
      0 === this.s.length && 0 < this.l.length && (this.l = []);
      this.b = this.a = null
  }
  ;
  k.Ab = function(a) {
      var b = this.o
        , c = this.j;
      return function() {
          Iu(a, b);
          Iu(a, c)
      }
  }
  ;
  k.Bf = function(a, b, c, d) {
      var e = Ju(b, su, tu);
      if (this.v)
          var f = this.v;
      else
          this.v = f = new uu(a,e);
      b.Wc(e);
      a.enableVertexAttribArray(f.b);
      a.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0);
      a.enableVertexAttribArray(f.j);
      a.vertexAttribPointer(f.j, 1, 5126, !1, 16, 8);
      a.enableVertexAttribArray(f.O);
      a.vertexAttribPointer(f.O, 1, 5126, !1, 16, 12);
      a.uniform2fv(f.I, c);
      a.uniform1f(f.sa, d);
      return f
  }
  ;
  k.Cf = function(a, b) {
      a.disableVertexAttribArray(b.b);
      a.disableVertexAttribArray(b.j);
      a.disableVertexAttribArray(b.O)
  }
  ;
  k.Sd = function(a, b, c) {
      if (wb(c)) {
          var d = this.f[this.f.length - 1];
          for (c = this.s.length - 1; 0 <= c; --c) {
              var e = this.s[c];
              var f = this.l[c];
              a.uniform4fv(this.v.D, f[0]);
              Ku(this, a, f[1], f[2]);
              zu(a, b, e, d);
              d = e
          }
      } else {
          var g = this.f.length - 2;
          f = d = this.f[g + 1];
          for (e = this.s.length - 1; 0 <= e; --e) {
              var h = this.l[e];
              a.uniform4fv(this.v.D, h[0]);
              Ku(this, a, h[1], h[2]);
              for (h = this.s[e]; 0 <= g && this.f[g] >= h; ) {
                  var l = this.f[g];
                  var m = this.i[g];
                  m = w(m).toString();
                  c[m] && (d !== f && zu(a, b, d, f),
                  f = l);
                  g--;
                  d = l
              }
              d !== f && zu(a, b, d, f);
              d = f = h
          }
      }
  }
  ;
  k.He = function(a, b, c, d, e) {
      var f, g;
      var h = this.f.length - 2;
      var l = this.f[h + 1];
      for (f = this.s.length - 1; 0 <= f; --f) {
          var m = this.l[f];
          a.uniform4fv(this.v.D, m[0]);
          Ku(this, a, m[1], m[2]);
          for (g = this.s[f]; 0 <= h && this.f[h] >= g; ) {
              m = this.f[h];
              var n = this.i[h];
              var p = w(n).toString();
              if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
              zu(a, b, m, l),
              l = d(n)))
                  return l;
              h--;
              l = m
          }
      }
  }
  ;
  function Ku(a, b, c, d) {
      b.uniform4fv(a.v.T, c);
      b.uniform1f(a.v.ra, d)
  }
  k.La = function(a, b) {
      if (b) {
          var c = b.f;
          this.c.lineDash = c ? c : Bu;
          c = b.i;
          this.c.lineDashOffset = c ? c : 0;
          c = b.b;
          c instanceof CanvasGradient || c instanceof CanvasPattern ? c = Cu : c = Ph(c).map(function(a, b) {
              return 3 != b ? a / 255 : a
          }) || Cu;
          b = b.c;
          b = void 0 !== b ? b : 1
      } else
          c = [0, 0, 0, 0],
          b = 0;
      a = a ? a.b : [0, 0, 0, 0];
      a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Au : a = Ph(a).map(function(a, b) {
          return 3 != b ? a / 255 : a
      }) || Au;
      this.c.strokeColor && ma(this.c.strokeColor, c) && this.c.fillColor && ma(this.c.fillColor, a) && this.c.lineWidth === b || (this.c.u = !0,
      this.c.fillColor = a,
      this.c.strokeColor = c,
      this.c.lineWidth = b,
      this.l.push([a, c, b]))
  }
  ;
  var Lu = new qu("precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}")
    , Mu = new ru("varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.0,0.0);gl_Position=h*vec4(c,0.0,1.0)+offsets;a=d;b=f;}");
  function Nu(a, b) {
      this.f = a.getUniformLocation(b, "h");
      this.i = a.getUniformLocation(b, "i");
      this.c = a.getUniformLocation(b, "j");
      this.a = a.getUniformLocation(b, "k");
      this.b = a.getAttribLocation(b, "c");
      this.B = a.getAttribLocation(b, "d");
      this.v = a.getAttribLocation(b, "e");
      this.s = a.getAttribLocation(b, "f");
      this.C = a.getAttribLocation(b, "g")
  }
  ;function Ou(a, b) {
      this.j = a;
      this.b = b;
      this.a = {};
      this.c = {};
      this.f = {};
      this.o = this.v = this.i = this.l = null;
      (this.g = ha(da, "OES_element_index_uint")) && b.getExtension("OES_element_index_uint");
      z(this.j, "webglcontextlost", this.fp, this);
      z(this.j, "webglcontextrestored", this.gp, this)
  }
  v(Ou, Pc);
  function yu(a, b, c) {
      var d = a.b
        , e = c.b
        , f = String(w(c));
      if (f in a.a)
          d.bindBuffer(b, a.a[f].buffer);
      else {
          var g = d.createBuffer();
          d.bindBuffer(b, g);
          var h;
          34962 == b ? h = new Float32Array(e) : 34963 == b && (h = a.g ? new Uint32Array(e) : new Uint16Array(e));
          d.bufferData(b, h, c.a);
          a.a[f] = {
              pc: c,
              buffer: g
          }
      }
  }
  function Iu(a, b) {
      var c = a.b;
      b = String(w(b));
      var d = a.a[b];
      c.isContextLost() || c.deleteBuffer(d.buffer);
      delete a.a[b]
  }
  k = Ou.prototype;
  k.ka = function() {
      Oc(this.j);
      var a = this.b;
      if (!a.isContextLost()) {
          for (var b in this.a)
              a.deleteBuffer(this.a[b].buffer);
          for (b in this.f)
              a.deleteProgram(this.f[b]);
          for (b in this.c)
              a.deleteShader(this.c[b]);
          a.deleteFramebuffer(this.i);
          a.deleteRenderbuffer(this.o);
          a.deleteTexture(this.v)
      }
  }
  ;
  k.ep = function() {
      return this.b
  }
  ;
  function Pu(a) {
      if (!a.i) {
          var b = a.b
            , c = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, c);
          var d = Qu(b, 1, 1)
            , e = b.createRenderbuffer();
          b.bindRenderbuffer(b.RENDERBUFFER, e);
          b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
          b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
          b.bindTexture(b.TEXTURE_2D, null);
          b.bindRenderbuffer(b.RENDERBUFFER, null);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          a.i = c;
          a.v = d;
          a.o = e
      }
      return a.i
  }
  function Ru(a, b) {
      var c = String(w(b));
      if (c in a.c)
          return a.c[c];
      var d = a.b
        , e = d.createShader(b.S());
      d.shaderSource(e, b.b);
      d.compileShader(e);
      return a.c[c] = e
  }
  function Ju(a, b, c) {
      var d = w(b) + "/" + w(c);
      if (d in a.f)
          return a.f[d];
      var e = a.b
        , f = e.createProgram();
      e.attachShader(f, Ru(a, b));
      e.attachShader(f, Ru(a, c));
      e.linkProgram(f);
      return a.f[d] = f
  }
  k.fp = function() {
      ub(this.a);
      ub(this.c);
      ub(this.f);
      this.o = this.v = this.i = this.l = null
  }
  ;
  k.gp = function() {}
  ;
  k.Wc = function(a) {
      if (a == this.l)
          return !1;
      this.b.useProgram(a);
      this.l = a;
      return !0
  }
  ;
  function Su(a, b, c) {
      var d = a.createTexture();
      a.bindTexture(a.TEXTURE_2D, d);
      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
      a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
      void 0 !== b && a.texParameteri(3553, 10242, b);
      void 0 !== c && a.texParameteri(3553, 10243, c);
      return d
  }
  function Qu(a, b, c) {
      var d = Su(a, void 0, void 0);
      a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, b, c, 0, a.RGBA, a.UNSIGNED_BYTE, null);
      return d
  }
  function Tu(a, b) {
      var c = Su(a, 33071, 33071);
      a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, b);
      return c
  }
  ;function Uu(a, b) {
      xu.call(this, 0, b);
      this.D = this.C = void 0;
      this.v = [];
      this.s = [];
      this.sa = this.ra = this.height = void 0;
      this.Ua = null;
      this.width = this.scale = this.rotation = this.rotateWithView = this.T = this.I = this.opacity = void 0
  }
  v(Uu, xu);
  k = Uu.prototype;
  k.Ab = function(a) {
      var b = this.o
        , c = this.j
        , d = this.jg(!0)
        , e = a.b;
      return function() {
          if (!e.isContextLost()) {
              var f;
              var g = 0;
              for (f = d.length; g < f; ++g)
                  e.deleteTexture(d[g])
          }
          Iu(a, b);
          Iu(a, c)
      }
  }
  ;
  function Vu(a, b, c, d) {
      var e = a.C
        , f = a.D
        , g = a.height
        , h = a.ra
        , l = a.sa
        , m = a.opacity
        , n = a.I
        , p = a.T
        , q = a.rotateWithView ? 1 : 0
        , r = -a.rotation
        , u = a.scale
        , x = a.width
        , B = Math.cos(r);
      r = Math.sin(r);
      var A = a.b.length, y = a.a.length, N;
      for (N = 0; N < c; N += d) {
          var ca = b[N] - a.origin[0];
          var la = b[N + 1] - a.origin[1];
          var fa = y / 8;
          var va = -u * e;
          var ra = -u * (g - f);
          a.a[y++] = ca;
          a.a[y++] = la;
          a.a[y++] = va * B - ra * r;
          a.a[y++] = va * r + ra * B;
          a.a[y++] = n / l;
          a.a[y++] = (p + g) / h;
          a.a[y++] = m;
          a.a[y++] = q;
          va = u * (x - e);
          ra = -u * (g - f);
          a.a[y++] = ca;
          a.a[y++] = la;
          a.a[y++] = va * B - ra * r;
          a.a[y++] = va * r + ra * B;
          a.a[y++] = (n + x) / l;
          a.a[y++] = (p + g) / h;
          a.a[y++] = m;
          a.a[y++] = q;
          va = u * (x - e);
          ra = u * f;
          a.a[y++] = ca;
          a.a[y++] = la;
          a.a[y++] = va * B - ra * r;
          a.a[y++] = va * r + ra * B;
          a.a[y++] = (n + x) / l;
          a.a[y++] = p / h;
          a.a[y++] = m;
          a.a[y++] = q;
          va = -u * e;
          ra = u * f;
          a.a[y++] = ca;
          a.a[y++] = la;
          a.a[y++] = va * B - ra * r;
          a.a[y++] = va * r + ra * B;
          a.a[y++] = n / l;
          a.a[y++] = p / h;
          a.a[y++] = m;
          a.a[y++] = q;
          a.b[A++] = fa;
          a.b[A++] = fa + 1;
          a.b[A++] = fa + 2;
          a.b[A++] = fa;
          a.b[A++] = fa + 2;
          a.b[A++] = fa + 3
      }
  }
  function Wu(a, b, c, d) {
      var e, f = b.length;
      for (e = 0; e < f; ++e) {
          var g = b[e];
          var h = w(g).toString();
          h in c ? g = c[h] : (g = Tu(d, g),
          c[h] = g);
          a[e] = g
      }
  }
  k.Bf = function(a, b) {
      var c = Ju(b, Lu, Mu);
      if (this.Ua)
          var d = this.Ua;
      else
          this.Ua = d = new Nu(a,c);
      b.Wc(c);
      a.enableVertexAttribArray(d.b);
      a.vertexAttribPointer(d.b, 2, 5126, !1, 32, 0);
      a.enableVertexAttribArray(d.v);
      a.vertexAttribPointer(d.v, 2, 5126, !1, 32, 8);
      a.enableVertexAttribArray(d.B);
      a.vertexAttribPointer(d.B, 2, 5126, !1, 32, 16);
      a.enableVertexAttribArray(d.s);
      a.vertexAttribPointer(d.s, 1, 5126, !1, 32, 24);
      a.enableVertexAttribArray(d.C);
      a.vertexAttribPointer(d.C, 1, 5126, !1, 32, 28);
      return d
  }
  ;
  k.Cf = function(a, b) {
      a.disableVertexAttribArray(b.b);
      a.disableVertexAttribArray(b.v);
      a.disableVertexAttribArray(b.B);
      a.disableVertexAttribArray(b.s);
      a.disableVertexAttribArray(b.C)
  }
  ;
  k.Sd = function(a, b, c, d) {
      var e = d ? this.bg() : this.jg();
      d = d ? this.s : this.v;
      if (wb(c)) {
          var f;
          c = 0;
          var g = e.length;
          for (f = 0; c < g; ++c) {
              a.bindTexture(3553, e[c]);
              var h = d[c];
              zu(a, b, f, h);
              f = h
          }
      } else
          for (f = g = 0,
          h = e.length; f < h; ++f) {
              a.bindTexture(3553, e[f]);
              for (var l = 0 < f ? d[f - 1] : 0, m = d[f], n = l; g < this.f.length && this.f[g] <= m; ) {
                  var p = w(this.i[g]).toString();
                  void 0 !== c[p] ? (n !== l && zu(a, b, n, l),
                  l = n = g === this.f.length - 1 ? m : this.f[g + 1]) : l = g === this.f.length - 1 ? m : this.f[g + 1];
                  g++
              }
              n !== l && zu(a, b, n, l)
          }
  }
  ;
  k.He = function(a, b, c, d, e) {
      var f, g, h = this.f.length - 1, l = this.bg();
      for (f = l.length - 1; 0 <= f; --f) {
          a.bindTexture(3553, l[f]);
          var m = 0 < f ? this.s[f - 1] : 0;
          for (g = this.s[f]; 0 <= h && this.f[h] >= m; ) {
              var n = this.f[h];
              var p = this.i[h];
              var q = w(p).toString();
              if (void 0 === c[q] && p.W() && (void 0 === e || qb(e, p.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
              zu(a, b, n, g),
              g = d(p)))
                  return g;
              g = n;
              h--
          }
      }
  }
  ;
  k.$a = function() {
      this.sa = this.ra = this.height = this.D = this.C = void 0;
      this.b = null;
      this.scale = this.rotation = this.rotateWithView = this.T = this.I = this.opacity = void 0;
      this.a = null;
      this.width = void 0
  }
  ;
  function Xu(a, b) {
      Uu.call(this, 0, b);
      this.l = [];
      this.c = [];
      this.B = [];
      this.O = []
  }
  v(Xu, Uu);
  k = Xu.prototype;
  k.sc = function(a, b) {
      this.f.push(this.b.length);
      this.i.push(b);
      b = a.ca();
      Vu(this, b, b.length, a.pa())
  }
  ;
  k.uc = function(a, b) {
      this.f.push(this.b.length);
      this.i.push(b);
      b = a.ca();
      Vu(this, b, b.length, a.pa())
  }
  ;
  k.$a = function(a) {
      var b = a.b;
      this.v.push(this.b.length);
      this.s.push(this.b.length);
      this.o = new Fu(this.a);
      this.j = new Fu(this.b);
      var c = {};
      Wu(this.B, this.l, c, b);
      Wu(this.O, this.c, c, b);
      this.c = this.l = null;
      Uu.prototype.$a.call(this, a)
  }
  ;
  k.Wb = function(a) {
      var b = a.Oc()
        , c = a.Y(1)
        , d = a.Ie()
        , e = a.Cg(1)
        , f = a.i
        , g = a.Vc()
        , h = a.o
        , l = a.g
        , m = a.kc();
      a = a.a;
      if (0 === this.l.length)
          this.l.push(c);
      else {
          var n = this.l[this.l.length - 1];
          w(n) != w(c) && (this.v.push(this.b.length),
          this.l.push(c))
      }
      0 === this.c.length ? this.c.push(e) : (n = this.c[this.c.length - 1],
      w(n) != w(e) && (this.s.push(this.b.length),
      this.c.push(e)));
      this.C = b[0];
      this.D = b[1];
      this.height = m[1];
      this.ra = d[1];
      this.sa = d[0];
      this.opacity = f;
      this.I = g[0];
      this.T = g[1];
      this.rotation = l;
      this.rotateWithView = h;
      this.scale = a;
      this.width = m[0]
  }
  ;
  k.jg = function(a) {
      return a ? this.B.concat(this.O) : this.B
  }
  ;
  k.bg = function() {
      return this.O
  }
  ;
  var Yu = new qu("precision mediump float;varying float a;varying vec2 aVertex;varying float c;uniform float m;uniform vec4 n;uniform vec2 o;uniform float p;void main(void){if(a>0.0){vec2 windowCoords=vec2((aVertex.x+1.0)/2.0*o.x*p,(aVertex.y+1.0)/2.0*o.y*p);if(length(windowCoords-gl_FragCoord.xy)>c*p){discard;}} gl_FragColor=n;float alpha=n.a*m;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}")
    , Zu = new ru("varying float a;varying vec2 aVertex;varying float c;attribute vec2 d;attribute vec2 e;attribute vec2 f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;uniform float k;uniform float l;bool nearlyEquals(in float value,in float ref){float epsilon=0.000000000001;return value>=ref-epsilon&&value<=ref+epsilon;}void alongNormal(out vec2 offset,in vec2 nextP,in float turnDir,in float direction){vec2 dirVect=nextP-e;vec2 normal=normalize(vec2(-turnDir*dirVect.y,turnDir*dirVect.x));offset=k/2.0*normal*direction;}void miterUp(out vec2 offset,out float round,in bool isRound,in float direction){float halfWidth=k/2.0;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=f-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;round=0.0;if(isRound){round=1.0;}else if(miterLength>l+k){offset=halfWidth*tmpNormal*direction;}} bool miterDown(out vec2 offset,in vec4 projPos,in mat4 offsetMatrix,in float direction){bool degenerate=false;vec2 tangent=normalize(normalize(f-e)+normalize(e-d));vec2 normal=vec2(-tangent.y,tangent.x);vec2 dirVect=d-e;vec2 tmpNormal=normalize(vec2(-dirVect.y,dirVect.x));vec2 longOffset,shortOffset,longVertex;vec4 shortProjVertex;float halfWidth=k/2.0;if(length(f-e)>length(d-e)){longOffset=tmpNormal*direction*halfWidth;shortOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=f;shortProjVertex=h*vec4(d,0.0,1.0);}else{shortOffset=tmpNormal*direction*halfWidth;longOffset=normalize(vec2(dirVect.y,-dirVect.x))*direction*halfWidth;longVertex=d;shortProjVertex=h*vec4(f,0.0,1.0);}vec4 p1=h*vec4(longVertex,0.0,1.0)+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p2=projPos+offsetMatrix*vec4(longOffset,0.0,0.0);vec4 p3=shortProjVertex+offsetMatrix*vec4(-shortOffset,0.0,0.0);vec4 p4=shortProjVertex+offsetMatrix*vec4(shortOffset,0.0,0.0);float denom=(p4.y-p3.y)*(p2.x-p1.x)-(p4.x-p3.x)*(p2.y-p1.y);float firstU=((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))/denom;float secondU=((p2.x-p1.x)*(p1.y-p3.y)-(p2.y-p1.y)*(p1.x-p3.x))/denom;float epsilon=0.000000000001;if(firstU>epsilon&&firstU<1.0-epsilon&&secondU>epsilon&&secondU<1.0-epsilon){shortProjVertex.x=p1.x+firstU*(p2.x-p1.x);shortProjVertex.y=p1.y+firstU*(p2.y-p1.y);offset=shortProjVertex.xy;degenerate=true;}else{float miterLength=abs(halfWidth/dot(normal,tmpNormal));offset=normal*direction*miterLength;}return degenerate;}void squareCap(out vec2 offset,out float round,in bool isRound,in vec2 nextP,in float turnDir,in float direction){round=0.0;vec2 dirVect=e-nextP;vec2 firstNormal=normalize(dirVect);vec2 secondNormal=vec2(turnDir*firstNormal.y*direction,-turnDir*firstNormal.x*direction);vec2 hypotenuse=normalize(firstNormal-secondNormal);vec2 normal=vec2(turnDir*hypotenuse.y*direction,-turnDir*hypotenuse.x*direction);float length=sqrt(c*c*2.0);offset=normal*length;if(isRound){round=1.0;}} void main(void){bool degenerate=false;float direction=float(sign(g));mat4 offsetMatrix=i*j;vec2 offset;vec4 projPos=h*vec4(e,0.0,1.0);bool round=nearlyEquals(mod(g,2.0),0.0);a=0.0;c=k/2.0;aVertex=projPos.xy;if(nearlyEquals(mod(g,3.0),0.0)||nearlyEquals(mod(g,17.0),0.0)){alongNormal(offset,f,1.0,direction);}else if(nearlyEquals(mod(g,5.0),0.0)||nearlyEquals(mod(g,13.0),0.0)){alongNormal(offset,d,-1.0,direction);}else if(nearlyEquals(mod(g,23.0),0.0)){miterUp(offset,a,round,direction);}else if(nearlyEquals(mod(g,19.0),0.0)){degenerate=miterDown(offset,projPos,offsetMatrix,direction);}else if(nearlyEquals(mod(g,7.0),0.0)){squareCap(offset,a,round,f,1.0,direction);}else if(nearlyEquals(mod(g,11.0),0.0)){squareCap(offset,a,round,d,-1.0,direction);}if(!degenerate){vec4 offsets=offsetMatrix*vec4(offset,0.0,0.0);gl_Position=projPos+offsets;}else{gl_Position=vec4(offset,0.0,1.0);}}");
  function $u(a, b) {
      this.f = a.getUniformLocation(b, "h");
      this.i = a.getUniformLocation(b, "i");
      this.c = a.getUniformLocation(b, "j");
      this.ra = a.getUniformLocation(b, "k");
      this.T = a.getUniformLocation(b, "l");
      this.a = a.getUniformLocation(b, "m");
      this.D = a.getUniformLocation(b, "n");
      this.I = a.getUniformLocation(b, "o");
      this.sa = a.getUniformLocation(b, "p");
      this.l = a.getAttribLocation(b, "d");
      this.b = a.getAttribLocation(b, "e");
      this.o = a.getAttribLocation(b, "f");
      this.g = a.getAttribLocation(b, "g")
  }
  ;function av(a, b) {
      xu.call(this, 0, b);
      this.v = null;
      this.s = [];
      this.l = [];
      this.c = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: void 0,
          miterLimit: void 0,
          u: !1
      }
  }
  v(av, xu);
  function bv(a, b, c, d) {
      var e, f = a.a.length, g = a.b.length, h = "bevel" === a.c.lineJoin ? 0 : "miter" === a.c.lineJoin ? 1 : 2, l = "butt" === a.c.lineCap ? 0 : "square" === a.c.lineCap ? 1 : 2, m = js(b, c, d), n = g, p = 1;
      for (e = 0; e < c; e += d) {
          var q = f / 7;
          var r = u;
          var u = x || [b[e], b[e + 1]];
          if (0 === e) {
              var x = [b[e + d], b[e + d + 1]];
              if (c - 0 === 2 * d && ma(u, x))
                  break;
              if (m) {
                  r = [b[c - 2 * d], b[c - 2 * d + 1]];
                  var B = x
              } else {
                  l && (f = cv(a, [0, 0], u, x, p * dv * l, f),
                  f = cv(a, [0, 0], u, x, -p * dv * l, f),
                  a.b[g++] = q + 2,
                  a.b[g++] = q,
                  a.b[g++] = q + 1,
                  a.b[g++] = q + 1,
                  a.b[g++] = q + 3,
                  a.b[g++] = q + 2);
                  f = cv(a, [0, 0], u, x, p * ev * (l || 1), f);
                  f = cv(a, [0, 0], u, x, -p * ev * (l || 1), f);
                  n = f / 7 - 1;
                  continue
              }
          } else if (e === c - d) {
              m ? x = B : (r = r || [0, 0],
              f = cv(a, r, u, [0, 0], p * fv * (l || 1), f),
              f = cv(a, r, u, [0, 0], -p * fv * (l || 1), f),
              a.b[g++] = q,
              a.b[g++] = n - 1,
              a.b[g++] = n,
              a.b[g++] = n,
              a.b[g++] = q + 1,
              a.b[g++] = q,
              l && (f = cv(a, r, u, [0, 0], p * gv * l, f),
              f = cv(a, r, u, [0, 0], -p * gv * l, f),
              a.b[g++] = q + 2,
              a.b[g++] = q,
              a.b[g++] = q + 1,
              a.b[g++] = q + 1,
              a.b[g++] = q + 3,
              a.b[g++] = q + 2));
              break
          } else
              x = [b[e + d], b[e + d + 1]];
          var A = Du(r[0], r[1], u[0], u[1], x[0], x[1]) ? -1 : 1;
          f = cv(a, r, u, x, A * hv * (h || 1), f);
          f = cv(a, r, u, x, A * iv * (h || 1), f);
          f = cv(a, r, u, x, -A * jv * (h || 1), f);
          0 < e && (a.b[g++] = q,
          a.b[g++] = n - 1,
          a.b[g++] = n,
          a.b[g++] = q + 2,
          a.b[g++] = q,
          a.b[g++] = 0 < p * A ? n : n - 1);
          a.b[g++] = q;
          a.b[g++] = q + 2;
          a.b[g++] = q + 1;
          n = q + 2;
          p = A;
          h && (f = cv(a, r, u, x, A * kv * h, f),
          a.b[g++] = q + 1,
          a.b[g++] = q + 3,
          a.b[g++] = q)
      }
      m && (q = q || f / 7,
      A = Kf([r[0], r[1], u[0], u[1], x[0], x[1]], 0, 6, 2) ? 1 : -1,
      f = cv(a, r, u, x, A * hv * (h || 1), f),
      cv(a, r, u, x, -A * jv * (h || 1), f),
      a.b[g++] = q,
      a.b[g++] = n - 1,
      a.b[g++] = n,
      a.b[g++] = q + 1,
      a.b[g++] = q,
      a.b[g++] = 0 < p * A ? n : n - 1)
  }
  function cv(a, b, c, d, e, f) {
      a.a[f++] = b[0];
      a.a[f++] = b[1];
      a.a[f++] = c[0];
      a.a[f++] = c[1];
      a.a[f++] = d[0];
      a.a[f++] = d[1];
      a.a[f++] = e;
      return f
  }
  function lv(a, b, c, d) {
      c -= b;
      return c < 2 * d ? !1 : c === 2 * d ? !ma([a[b], a[b + 1]], [a[b + d], a[b + d + 1]]) : !0
  }
  k = av.prototype;
  k.qc = function(a, b) {
      var c = a.ca();
      a = a.pa();
      lv(c, 0, c.length, a) && (c = Se(c, 0, c.length, a, -this.origin[0], -this.origin[1]),
      this.c.u && (this.l.push(this.b.length),
      this.c.u = !1),
      this.f.push(this.b.length),
      this.i.push(b),
      bv(this, c, c.length, a))
  }
  ;
  k.rc = function(a, b) {
      var c = this.b.length
        , d = a.lb();
      d.unshift(0);
      var e = a.ca();
      a = a.pa();
      var f;
      if (1 < d.length) {
          var g = 1;
          for (f = d.length; g < f; ++g)
              if (lv(e, d[g - 1], d[g], a)) {
                  var h = Se(e, d[g - 1], d[g], a, -this.origin[0], -this.origin[1]);
                  bv(this, h, h.length, a)
              }
      }
      this.b.length > c && (this.f.push(c),
      this.i.push(b),
      this.c.u && (this.l.push(c),
      this.c.u = !1))
  }
  ;
  function mv(a, b, c, d) {
      js(b, b.length, d) || (b.push(b[0]),
      b.push(b[1]));
      bv(a, b, b.length, d);
      if (c.length) {
          var e;
          b = 0;
          for (e = c.length; b < e; ++b)
              js(c[b], c[b].length, d) || (c[b].push(c[b][0]),
              c[b].push(c[b][1])),
              bv(a, c[b], c[b].length, d)
      }
  }
  function nv(a, b, c) {
      c = void 0 === c ? a.b.length : c;
      a.f.push(c);
      a.i.push(b);
      a.c.u && (a.l.push(c),
      a.c.u = !1)
  }
  k.$a = function() {
      this.o = new Fu(this.a);
      this.j = new Fu(this.b);
      this.f.push(this.b.length);
      0 === this.l.length && 0 < this.s.length && (this.s = []);
      this.b = this.a = null
  }
  ;
  k.Ab = function(a) {
      var b = this.o
        , c = this.j;
      return function() {
          Iu(a, b);
          Iu(a, c)
      }
  }
  ;
  k.Bf = function(a, b, c, d) {
      var e = Ju(b, Yu, Zu);
      if (this.v)
          var f = this.v;
      else
          this.v = f = new $u(a,e);
      b.Wc(e);
      a.enableVertexAttribArray(f.l);
      a.vertexAttribPointer(f.l, 2, 5126, !1, 28, 0);
      a.enableVertexAttribArray(f.b);
      a.vertexAttribPointer(f.b, 2, 5126, !1, 28, 8);
      a.enableVertexAttribArray(f.o);
      a.vertexAttribPointer(f.o, 2, 5126, !1, 28, 16);
      a.enableVertexAttribArray(f.g);
      a.vertexAttribPointer(f.g, 1, 5126, !1, 28, 24);
      a.uniform2fv(f.I, c);
      a.uniform1f(f.sa, d);
      return f
  }
  ;
  k.Cf = function(a, b) {
      a.disableVertexAttribArray(b.l);
      a.disableVertexAttribArray(b.b);
      a.disableVertexAttribArray(b.o);
      a.disableVertexAttribArray(b.g)
  }
  ;
  k.Sd = function(a, b, c, d) {
      var e = a.getParameter(a.DEPTH_FUNC)
        , f = a.getParameter(a.DEPTH_WRITEMASK);
      d || (a.enable(a.DEPTH_TEST),
      a.depthMask(!0),
      a.depthFunc(a.NOTEQUAL));
      if (wb(c)) {
          var g = this.f[this.f.length - 1];
          for (c = this.l.length - 1; 0 <= c; --c) {
              var h = this.l[c];
              var l = this.s[c];
              ov(this, a, l[0], l[1], l[2]);
              zu(a, b, h, g);
              a.clear(a.DEPTH_BUFFER_BIT);
              g = h
          }
      } else {
          var m = this.f.length - 2;
          l = g = this.f[m + 1];
          for (h = this.l.length - 1; 0 <= h; --h) {
              var n = this.s[h];
              ov(this, a, n[0], n[1], n[2]);
              for (n = this.l[h]; 0 <= m && this.f[m] >= n; ) {
                  var p = this.f[m];
                  var q = this.i[m];
                  q = w(q).toString();
                  c[q] && (g !== l && (zu(a, b, g, l),
                  a.clear(a.DEPTH_BUFFER_BIT)),
                  l = p);
                  m--;
                  g = p
              }
              g !== l && (zu(a, b, g, l),
              a.clear(a.DEPTH_BUFFER_BIT));
              g = l = n
          }
      }
      d || (a.disable(a.DEPTH_TEST),
      a.clear(a.DEPTH_BUFFER_BIT),
      a.depthMask(f),
      a.depthFunc(e))
  }
  ;
  k.He = function(a, b, c, d, e) {
      var f, g;
      var h = this.f.length - 2;
      var l = this.f[h + 1];
      for (f = this.l.length - 1; 0 <= f; --f) {
          var m = this.s[f];
          ov(this, a, m[0], m[1], m[2]);
          for (g = this.l[f]; 0 <= h && this.f[h] >= g; ) {
              m = this.f[h];
              var n = this.i[h];
              var p = w(n).toString();
              if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
              zu(a, b, m, l),
              l = d(n)))
                  return l;
              h--;
              l = m
          }
      }
  }
  ;
  function ov(a, b, c, d, e) {
      b.uniform4fv(a.v.D, c);
      b.uniform1f(a.v.ra, d);
      b.uniform1f(a.v.T, e)
  }
  k.La = function(a, b) {
      a = b.g;
      this.c.lineCap = void 0 !== a ? a : "round";
      a = b.f;
      this.c.lineDash = a ? a : Bu;
      a = b.i;
      this.c.lineDashOffset = a ? a : 0;
      a = b.j;
      this.c.lineJoin = void 0 !== a ? a : "round";
      a = b.b;
      a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Cu : a = Ph(a).map(function(a, b) {
          return 3 != b ? a / 255 : a
      }) || Cu;
      var c = b.c;
      c = void 0 !== c ? c : 1;
      b = b.l;
      b = void 0 !== b ? b : 10;
      this.c.strokeColor && ma(this.c.strokeColor, a) && this.c.lineWidth === c && this.c.miterLimit === b || (this.c.u = !0,
      this.c.strokeColor = a,
      this.c.lineWidth = c,
      this.c.miterLimit = b,
      this.s.push([a, c, b]))
  }
  ;
  var ev = 3
    , fv = 5
    , dv = 7
    , gv = 11
    , hv = 13
    , iv = 17
    , jv = 19
    , kv = 23;
  var pv = new qu("precision mediump float;uniform vec4 e;uniform float f;void main(void){gl_FragColor=e;float alpha=e.a*f;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}")
    , qv = new ru("attribute vec2 a;uniform mat4 b;uniform mat4 c;uniform mat4 d;void main(void){gl_Position=b*vec4(a,0.0,1.0);}");
  function rv(a, b) {
      this.f = a.getUniformLocation(b, "b");
      this.i = a.getUniformLocation(b, "c");
      this.c = a.getUniformLocation(b, "d");
      this.D = a.getUniformLocation(b, "e");
      this.a = a.getUniformLocation(b, "f");
      this.b = a.getAttribLocation(b, "a")
  }
  ;function sv(a) {
      this.b = this.a = this.f = void 0;
      this.i = void 0 === a ? !0 : a;
      this.c = 0
  }
  function tv(a) {
      var b = a.b;
      if (b) {
          var c = b.next
            , d = b.Bb;
          c && (c.Bb = d);
          d && (d.next = c);
          a.b = c || d;
          a.f === a.a ? (a.b = void 0,
          a.f = void 0,
          a.a = void 0) : a.f === b ? a.f = a.b : a.a === b && (a.a = d ? a.b.Bb : a.b);
          a.c--
      }
  }
  function uv(a) {
      a.b = a.f;
      if (a.b)
          return a.b.data
  }
  function vv(a) {
      if (a.b && a.b.next)
          return a.b = a.b.next,
          a.b.data
  }
  function wv(a) {
      if (a.b && a.b.next)
          return a.b.next.data
  }
  function xv(a) {
      if (a.b && a.b.Bb)
          return a.b = a.b.Bb,
          a.b.data
  }
  function yv(a) {
      if (a.b && a.b.Bb)
          return a.b.Bb.data
  }
  function zv(a) {
      if (a.b)
          return a.b.data
  }
  sv.prototype.concat = function(a) {
      if (a.b) {
          if (this.b) {
              var b = this.b.next;
              this.b.next = a.f;
              a.f.Bb = this.b;
              b.Bb = a.a;
              a.a.next = b;
              this.c += a.c
          } else
              this.b = a.b,
              this.f = a.f,
              this.a = a.a,
              this.c = a.c;
          a.b = void 0;
          a.f = void 0;
          a.a = void 0;
          a.c = 0
      }
  }
  ;
  function Av(a, b) {
      xu.call(this, 0, b);
      this.g = new av(0,b);
      this.v = null;
      this.s = [];
      this.c = [];
      this.l = {
          fillColor: null,
          u: !1
      }
  }
  v(Av, xu);
  function Bv(a, b, c, d) {
      var e = new sv
        , f = new Ns;
      Cv(a, b, d, e, f, !0);
      b = Dv(e);
      if (c.length) {
          var g, h = [];
          var l = 0;
          for (g = c.length; l < g; ++l) {
              var m = {
                  list: new sv,
                  yc: void 0,
                  eh: new Ns
              };
              h.push(m);
              Cv(a, c[l], d, m.list, m.eh, !1);
              Ev(m.list, m.eh, !0);
              m.yc = Dv(m.list)
          }
          h.sort(function(a, b) {
              return b.yc[0] === a.yc[0] ? a.yc[1] - b.yc[1] : b.yc[0] - a.yc[0]
          });
          for (l = 0; l < h.length; ++l) {
              c = h[l].list;
              g = d = uv(c);
              do {
                  if (Fv(g, f).length) {
                      var n = !0;
                      break
                  }
                  g = vv(c)
              } while (d !== g);!n && Gv(c, h[l].yc[0], e, b[0], f) && (f.concat(h[l].eh),
              Ev(e, f, !1))
          }
      } else
          Ev(e, f, !1);
      Hv(a, e, f)
  }
  function Cv(a, b, c, d, e, f) {
      var g, h = a.a.length / 2, l = [], m = [];
      if (f === Kf(b, 0, b.length, c)) {
          var n = f = Iv(a, b[0], b[1], h++);
          var p = c;
          for (g = b.length; p < g; p += c) {
              var q = Iv(a, b[p], b[p + 1], h++);
              m.push(Jv(n, q, d));
              l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
              n = q
          }
      } else
          for (p = b.length - c,
          n = f = Iv(a, b[p], b[p + 1], h++),
          p -= c,
          g = 0; p >= g; p -= c)
              q = Iv(a, b[p], b[p + 1], h++),
              m.push(Jv(n, q, d)),
              l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]),
              n = q;
      m.push(Jv(q, f, d));
      l.push([Math.min(n.x, q.x), Math.min(n.y, q.y), Math.max(n.x, q.x), Math.max(n.y, q.y)]);
      e.load(l, m)
  }
  function Dv(a) {
      var b = uv(a)
        , c = b
        , d = [c.Z.x, c.Z.y];
      do
          c = vv(a),
          c.Z.x > d[0] && (d = [c.Z.x, c.Z.y]);
      while (c !== b);return d
  }
  function Ev(a, b, c) {
      var d = uv(a)
        , e = d
        , f = vv(a)
        , g = !1;
      do {
          var h = c ? Du(f.X.x, f.X.y, e.X.x, e.X.y, e.Z.x, e.Z.y) : Du(e.Z.x, e.Z.y, e.X.x, e.X.y, f.X.x, f.X.y);
          void 0 === h ? (Kv(e, f, a, b),
          g = !0,
          f === d && (d = wv(a)),
          f = e,
          xv(a)) : e.X.Hb !== h && (e.X.Hb = h,
          g = !0);
          e = f;
          f = vv(a)
      } while (e !== d);return g
  }
  function Gv(a, b, c, d, e) {
      for (var f = uv(a); f.X.x !== b; )
          f = vv(a);
      b = f.X;
      d = {
          x: d,
          y: b.y,
          mb: -1
      };
      var g = Infinity, h;
      var l = Fv({
          Z: b,
          X: d
      }, e, !0);
      var m = 0;
      for (h = l.length; m < h; ++m) {
          var n = l[m]
            , p = Lv(b, d, n.Z, n.X, !0)
            , q = Math.abs(b.x - p[0]);
          if (q < g && void 0 !== Du(b.x, b.y, n.Z.x, n.Z.y, n.X.x, n.X.y)) {
              g = q;
              var r = {
                  x: p[0],
                  y: p[1],
                  mb: -1
              };
              f = n
          }
      }
      if (Infinity === g)
          return !1;
      l = f.X;
      if (0 < g && (f = Mv(b, r, f.X, e),
      f.length))
          for (r = Infinity,
          m = 0,
          h = f.length; m < h; ++m)
              if (g = f[m],
              n = Math.atan2(b.y - g.y, d.x - g.x),
              n < r || n === r && g.x < l.x)
                  r = n,
                  l = g;
      for (f = uv(c); f.X.x !== l.x || f.X.y !== l.y; )
          f = vv(c);
      d = {
          x: b.x,
          y: b.y,
          mb: b.mb,
          Hb: void 0
      };
      m = {
          x: f.X.x,
          y: f.X.y,
          mb: f.X.mb,
          Hb: void 0
      };
      wv(a).Z = d;
      Jv(b, f.X, a, e);
      Jv(m, d, a, e);
      f.X = m;
      a.i && a.b && (a.f = a.b,
      a.a = a.b.Bb);
      c.concat(a);
      return !0
  }
  function Hv(a, b, c) {
      for (var d = !1, e = Nv(b, c); 3 < b.c; )
          if (e) {
              if (!Ov(a, b, c, e, d) && !Ev(b, c, d) && !Pv(a, b, c, !0))
                  break
          } else if (!Ov(a, b, c, e, d) && !Ev(b, c, d) && !Pv(a, b, c))
              if (e = Nv(b, c)) {
                  d = b;
                  var f = 2 * d.c
                    , g = Array(f)
                    , h = uv(d)
                    , l = h
                    , m = 0;
                  do
                      g[m++] = l.Z.x,
                      g[m++] = l.Z.y,
                      l = vv(d);
                  while (l !== h);d = !Kf(g, 0, f, 2);
                  Ev(b, c, d)
              } else {
                  e = a;
                  d = b;
                  f = g = uv(d);
                  do {
                      h = Fv(f, c);
                      if (h.length) {
                          g = h[0];
                          h = Lv(f.Z, f.X, g.Z, g.X);
                          h = Iv(e, h[0], h[1], e.a.length / 2);
                          l = new sv;
                          m = new Ns;
                          Jv(h, f.X, l, m);
                          f.X = h;
                          Os(c, [Math.min(f.Z.x, h.x), Math.min(f.Z.y, h.y), Math.max(f.Z.x, h.x), Math.max(f.Z.y, h.y)], f);
                          for (f = vv(d); f !== g; )
                              Jv(f.Z, f.X, l, m),
                              c.remove(f),
                              tv(d),
                              f = zv(d);
                          Jv(g.Z, h, l, m);
                          g.Z = h;
                          Os(c, [Math.min(g.X.x, h.x), Math.min(g.X.y, h.y), Math.max(g.X.x, h.x), Math.max(g.X.y, h.y)], g);
                          Ev(d, c, !1);
                          Hv(e, d, c);
                          Ev(l, m, !1);
                          Hv(e, l, m);
                          break
                      }
                      f = vv(d)
                  } while (f !== g);break
              }
      3 === b.c && (e = a.b.length,
      a.b[e++] = yv(b).Z.mb,
      a.b[e++] = zv(b).Z.mb,
      a.b[e++] = wv(b).Z.mb)
  }
  function Ov(a, b, c, d, e) {
      var f = a.b.length
        , g = uv(b)
        , h = yv(b)
        , l = g
        , m = vv(b)
        , n = wv(b)
        , p = !1;
      do {
          var q = l.Z;
          var r = l.X;
          var u = m.X;
          if (!1 === r.Hb) {
              var x = d ? 0 === Mv(q, r, u, c, !0).length : e ? Qv(n.X, u, r, q, h.Z) : Qv(h.Z, q, r, u, n.X);
              !d && 0 !== Fv({
                  Z: q,
                  X: u
              }, c).length || !x || !d && !1 !== q.Hb && !1 !== u.Hb && Kf([h.Z.x, h.Z.y, q.x, q.y, r.x, r.y, u.x, u.y, n.X.x, n.X.y], 0, 10, 2) !== !e || (a.b[f++] = q.mb,
              a.b[f++] = r.mb,
              a.b[f++] = u.mb,
              Kv(l, m, b, c),
              m === g && (g = n),
              p = !0)
          }
          h = yv(b);
          l = zv(b);
          m = vv(b);
          n = wv(b)
      } while (l !== g && 3 < b.c);return p
  }
  function Pv(a, b, c, d) {
      var e = uv(b);
      vv(b);
      var f = e
        , g = vv(b)
        , h = !1;
      do {
          var l = Lv(f.Z, f.X, g.Z, g.X, d);
          if (l) {
              h = a.b.length;
              var m = a.a.length / 2
                , n = xv(b);
              tv(b);
              c.remove(n);
              var p = n === e;
              d ? (l[0] === f.Z.x && l[1] === f.Z.y ? (xv(b),
              l = f.Z,
              g.Z = l,
              c.remove(f),
              p = p || f === e) : (l = g.X,
              f.X = l,
              c.remove(g),
              p = p || g === e),
              tv(b)) : (l = Iv(a, l[0], l[1], m),
              f.X = l,
              g.Z = l,
              Os(c, [Math.min(f.Z.x, f.X.x), Math.min(f.Z.y, f.X.y), Math.max(f.Z.x, f.X.x), Math.max(f.Z.y, f.X.y)], f),
              Os(c, [Math.min(g.Z.x, g.X.x), Math.min(g.Z.y, g.X.y), Math.max(g.Z.x, g.X.x), Math.max(g.Z.y, g.X.y)], g));
              a.b[h++] = n.Z.mb;
              a.b[h++] = n.X.mb;
              a.b[h++] = l.mb;
              h = !0;
              if (p)
                  break
          }
          f = yv(b);
          g = vv(b)
      } while (f !== e);return h
  }
  function Nv(a, b) {
      var c = uv(a)
        , d = c;
      do {
          if (Fv(d, b).length)
              return !1;
          d = vv(a)
      } while (d !== c);return !0
  }
  function Iv(a, b, c, d) {
      var e = a.a.length;
      a.a[e++] = b;
      a.a[e++] = c;
      return {
          x: b,
          y: c,
          mb: d,
          Hb: void 0
      }
  }
  function Jv(a, b, c, d) {
      var e = {
          Z: a,
          X: b
      }
        , f = {
          Bb: void 0,
          next: void 0,
          data: e
      }
        , g = c.b;
      if (g) {
          var h = g.next;
          f.Bb = g;
          f.next = h;
          g.next = f;
          h && (h.Bb = f);
          g === c.a && (c.a = f)
      } else
          c.f = f,
          c.a = f,
          c.i && (f.next = f,
          f.Bb = f);
      c.b = f;
      c.c++;
      d && d.Ea([Math.min(a.x, b.x), Math.min(a.y, b.y), Math.max(a.x, b.x), Math.max(a.y, b.y)], e);
      return e
  }
  function Kv(a, b, c, d) {
      zv(c) === b && (tv(c),
      a.X = b.X,
      d.remove(b),
      Os(d, [Math.min(a.Z.x, a.X.x), Math.min(a.Z.y, a.X.y), Math.max(a.Z.x, a.X.x), Math.max(a.Z.y, a.X.y)], a))
  }
  function Mv(a, b, c, d, e) {
      var f, g, h = [], l = Qs(d, [Math.min(a.x, b.x, c.x), Math.min(a.y, b.y, c.y), Math.max(a.x, b.x, c.x), Math.max(a.y, b.y, c.y)]);
      d = 0;
      for (f = l.length; d < f; ++d)
          for (g in l[d]) {
              var m = l[d][g];
              "object" !== typeof m || e && !m.Hb || m.x === a.x && m.y === a.y || m.x === b.x && m.y === b.y || m.x === c.x && m.y === c.y || -1 !== h.indexOf(m) || !Ef([a.x, a.y, b.x, b.y, c.x, c.y], 0, 6, 2, m.x, m.y) || h.push(m)
          }
      return h
  }
  function Fv(a, b, c) {
      var d = a.Z
        , e = a.X;
      b = Qs(b, [Math.min(d.x, e.x), Math.min(d.y, e.y), Math.max(d.x, e.x), Math.max(d.y, e.y)]);
      var f = [], g;
      var h = 0;
      for (g = b.length; h < g; ++h) {
          var l = b[h];
          a !== l && (c || l.Z !== e || l.X !== d) && Lv(d, e, l.Z, l.X, c) && f.push(l)
      }
      return f
  }
  function Lv(a, b, c, d, e) {
      var f = (d.y - c.y) * (b.x - a.x) - (d.x - c.x) * (b.y - a.y);
      if (0 !== f && (d = ((d.x - c.x) * (a.y - c.y) - (d.y - c.y) * (a.x - c.x)) / f,
      c = ((b.x - a.x) * (a.y - c.y) - (b.y - a.y) * (a.x - c.x)) / f,
      !e && d > Eu && d < 1 - Eu && c > Eu && c < 1 - Eu || e && 0 <= d && 1 >= d && 0 <= c && 1 >= c))
          return [a.x + d * (b.x - a.x), a.y + d * (b.y - a.y)]
  }
  function Qv(a, b, c, d, e) {
      if (void 0 === b.Hb || void 0 === d.Hb)
          return !1;
      var f = (c.x - d.x) * (b.y - d.y) > (c.y - d.y) * (b.x - d.x);
      e = (e.x - d.x) * (b.y - d.y) < (e.y - d.y) * (b.x - d.x);
      a = (a.x - b.x) * (d.y - b.y) > (a.y - b.y) * (d.x - b.x);
      c = (c.x - b.x) * (d.y - b.y) < (c.y - b.y) * (d.x - b.x);
      b = b.Hb ? c || a : c && a;
      return (d.Hb ? e || f : e && f) && b
  }
  k = Av.prototype;
  k.tc = function(a, b) {
      var c = a.md()
        , d = a.pa()
        , e = this.b.length
        , f = this.g.b.length;
      a = a.ca();
      var g, h, l;
      var m = h = 0;
      for (g = c.length; m < g; ++m) {
          var n = c[m];
          if (0 < n.length) {
              var p = Se(a, h, n[0], d, -this.origin[0], -this.origin[1]);
              if (p.length) {
                  var q = [];
                  h = 1;
                  for (l = n.length; h < l; ++h)
                      if (n[h] !== n[h - 1]) {
                          var r = Se(a, n[h - 1], n[h], d, -this.origin[0], -this.origin[1]);
                          q.push(r)
                      }
                  mv(this.g, p, q, d);
                  Bv(this, p, q, d)
              }
          }
          h = n[n.length - 1]
      }
      this.b.length > e && (this.f.push(e),
      this.i.push(b),
      this.l.u && (this.c.push(e),
      this.l.u = !1));
      this.g.b.length > f && nv(this.g, b, f)
  }
  ;
  k.vc = function(a, b) {
      var c = a.lb()
        , d = a.pa();
      if (0 < c.length) {
          a = a.ca().map(Number);
          var e = Se(a, 0, c[0], d, -this.origin[0], -this.origin[1]);
          if (e.length) {
              var f = [], g;
              var h = 1;
              for (g = c.length; h < g; ++h)
                  if (c[h] !== c[h - 1]) {
                      var l = Se(a, c[h - 1], c[h], d, -this.origin[0], -this.origin[1]);
                      f.push(l)
                  }
              this.f.push(this.b.length);
              this.i.push(b);
              this.l.u && (this.c.push(this.b.length),
              this.l.u = !1);
              nv(this.g, b);
              mv(this.g, e, f, d);
              Bv(this, e, f, d)
          }
      }
  }
  ;
  k.$a = function(a) {
      this.o = new Fu(this.a);
      this.j = new Fu(this.b);
      this.f.push(this.b.length);
      this.g.$a(a);
      0 === this.c.length && 0 < this.s.length && (this.s = []);
      this.b = this.a = null
  }
  ;
  k.Ab = function(a) {
      var b = this.o
        , c = this.j
        , d = this.g.Ab(a);
      return function() {
          Iu(a, b);
          Iu(a, c);
          d()
      }
  }
  ;
  k.Bf = function(a, b) {
      var c = Ju(b, pv, qv);
      if (this.v)
          var d = this.v;
      else
          this.v = d = new rv(a,c);
      b.Wc(c);
      a.enableVertexAttribArray(d.b);
      a.vertexAttribPointer(d.b, 2, 5126, !1, 8, 0);
      return d
  }
  ;
  k.Cf = function(a, b) {
      a.disableVertexAttribArray(b.b)
  }
  ;
  k.Sd = function(a, b, c, d) {
      var e = a.getParameter(a.DEPTH_FUNC)
        , f = a.getParameter(a.DEPTH_WRITEMASK);
      d || (a.enable(a.DEPTH_TEST),
      a.depthMask(!0),
      a.depthFunc(a.NOTEQUAL));
      if (wb(c)) {
          var g = this.f[this.f.length - 1];
          for (c = this.c.length - 1; 0 <= c; --c) {
              var h = this.c[c];
              var l = this.s[c];
              a.uniform4fv(this.v.D, l);
              zu(a, b, h, g);
              g = h
          }
      } else {
          var m = this.f.length - 2;
          l = g = this.f[m + 1];
          for (h = this.c.length - 1; 0 <= h; --h) {
              var n = this.s[h];
              a.uniform4fv(this.v.D, n);
              for (n = this.c[h]; 0 <= m && this.f[m] >= n; ) {
                  var p = this.f[m];
                  var q = this.i[m];
                  q = w(q).toString();
                  c[q] && (g !== l && (zu(a, b, g, l),
                  a.clear(a.DEPTH_BUFFER_BIT)),
                  l = p);
                  m--;
                  g = p
              }
              g !== l && (zu(a, b, g, l),
              a.clear(a.DEPTH_BUFFER_BIT));
              g = l = n
          }
      }
      d || (a.disable(a.DEPTH_TEST),
      a.clear(a.DEPTH_BUFFER_BIT),
      a.depthMask(f),
      a.depthFunc(e))
  }
  ;
  k.He = function(a, b, c, d, e) {
      var f, g;
      var h = this.f.length - 2;
      var l = this.f[h + 1];
      for (f = this.c.length - 1; 0 <= f; --f) {
          var m = this.s[f];
          a.uniform4fv(this.v.D, m);
          for (g = this.c[f]; 0 <= h && this.f[h] >= g; ) {
              m = this.f[h];
              var n = this.i[h];
              var p = w(n).toString();
              if (void 0 === c[p] && n.W() && (void 0 === e || qb(e, n.W().G())) && (a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT),
              zu(a, b, m, l),
              l = d(n)))
                  return l;
              h--;
              l = m
          }
      }
  }
  ;
  k.La = function(a, b) {
      a = a ? a.b : [0, 0, 0, 0];
      a instanceof CanvasGradient || a instanceof CanvasPattern ? a = Au : a = Ph(a).map(function(a, b) {
          return 3 != b ? a / 255 : a
      }) || Au;
      this.l.fillColor && ma(a, this.l.fillColor) || (this.l.fillColor = a,
      this.l.u = !0,
      this.s.push(a));
      b ? this.g.La(null, b) : this.g.La(null, new Dk({
          color: [0, 0, 0, 0],
          lineWidth: 0
      }))
  }
  ;
  function Rv(a, b) {
      this.b = b;
      this.a = [{
          x: 0,
          y: 0,
          width: a,
          height: a
      }];
      this.c = {};
      this.f = dg(a, a);
      this.i = this.f.canvas
  }
  Rv.prototype.get = function(a) {
      return this.c[a] || null
  }
  ;
  Rv.prototype.add = function(a, b, c, d, e) {
      var f;
      var g = 0;
      for (f = this.a.length; g < f; ++g) {
          var h = this.a[g];
          if (h.width >= b + this.b && h.height >= c + this.b)
              return f = {
                  offsetX: h.x + this.b,
                  offsetY: h.y + this.b,
                  image: this.i
              },
              this.c[a] = f,
              d.call(e, this.f, h.x + this.b, h.y + this.b),
              a = g,
              b += this.b,
              d = c + this.b,
              h.width - b > h.height - d ? (c = {
                  x: h.x + b,
                  y: h.y,
                  width: h.width - b,
                  height: h.height
              },
              b = {
                  x: h.x,
                  y: h.y + d,
                  width: b,
                  height: h.height - d
              },
              Sv(this, a, c, b)) : (c = {
                  x: h.x + b,
                  y: h.y,
                  width: h.width - b,
                  height: d
              },
              b = {
                  x: h.x,
                  y: h.y + d,
                  width: h.width,
                  height: h.height - d
              },
              Sv(this, a, c, b)),
              f
      }
      return null
  }
  ;
  function Sv(a, b, c, d) {
      b = [b, 1];
      0 < c.width && 0 < c.height && b.push(c);
      0 < d.width && 0 < d.height && b.push(d);
      a.a.splice.apply(a.a, b)
  }
  ;function Tv(a) {
      a = a || {};
      this.a = void 0 !== a.initialSize ? a.initialSize : 256;
      this.f = void 0 !== a.maxSize ? a.maxSize : void 0 !== ba ? ba : 2048;
      this.b = void 0 !== a.space ? a.space : 1;
      this.g = [new Rv(this.a,this.b)];
      this.c = this.a;
      this.i = [new Rv(this.c,this.b)]
  }
  function Uv(a, b) {
      var c;
      var d = 0;
      for (c = a.length; d < c; ++d) {
          var e = a[d];
          if (e = e.get(b))
              return e
      }
      return null
  }
  function Vv(a, b) {
      return {
          offsetX: a.offsetX,
          offsetY: a.offsetY,
          image: a.image,
          hm: b.image
      }
  }
  Tv.prototype.add = function(a, b, c, d, e, f) {
      if (b + this.b > this.f || c + this.b > this.f)
          return null;
      d = Wv(this, !1, a, b, c, d, f);
      if (!d)
          return null;
      a = Wv(this, !0, a, b, c, e ? e : sa, f);
      return Vv(d, a)
  }
  ;
  function Wv(a, b, c, d, e, f, g) {
      var h = b ? a.i : a.g, l;
      var m = 0;
      for (l = h.length; m < l; ++m) {
          var n = h[m];
          if (n = n.add(c, d, e, f, g))
              return n;
          n || m !== l - 1 || (b ? (n = Math.min(2 * a.c, a.f),
          a.c = n) : (n = Math.min(2 * a.a, a.f),
          a.a = n),
          n = new Rv(n,a.b),
          h.push(n),
          ++l)
      }
      return null
  }
  ;function Xv(a, b) {
      Uu.call(this, 0, b);
      this.c = [];
      this.oa = [];
      this.oc = dg(0, 0).canvas;
      this.O = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: 0,
          miterLimit: void 0,
          fillColor: null,
          font: void 0,
          scale: void 0
      };
      this.qa = "";
      this.fa = this.ta = this.ma = this.kb = void 0;
      this.B = {};
      this.l = void 0;
      this.opacity = this.scale = 1
  }
  v(Xv, Uu);
  k = Xv.prototype;
  k.Sb = function(a, b) {
      if (this.qa) {
          var c = null
            , d = 2
            , e = 2;
          switch (a.S()) {
          case "Point":
          case "MultiPoint":
              c = a.ca();
              d = c.length;
              e = a.pa();
              break;
          case "Circle":
              c = a.xa();
              break;
          case "LineString":
              c = bi(a);
              break;
          case "MultiLineString":
              c = ci(a);
              d = c.length;
              break;
          case "Polygon":
              c = Pf(a);
              break;
          case "MultiPolygon":
              c = ei(a),
              d = c.length
          }
          this.f.push(this.b.length);
          this.i.push(b);
          a = this.l;
          b = this.qa.split("\n");
          var f = Yv(this, b), g, h, l = Math.round(f[0] * this.kb - this.ta), m = Math.round(f[1] * this.ma - this.fa), n = this.O.lineWidth / 2 * this.O.scale;
          f = 0;
          for (g = b.length; f < g; ++f) {
              var p = 0;
              var q = a.height * f;
              var r = b[f].split("");
              var u = 0;
              for (h = r.length; u < h; ++u) {
                  var x = a.yh;
                  var B = r[u]
                    , A = Uv(x.g, B);
                  A ? (x = Uv(x.i, B),
                  x = Vv(A, x)) : x = null;
                  if (x) {
                      A = x.image;
                      this.C = l - p;
                      this.D = m - q;
                      this.I = 0 === u ? x.offsetX - n : x.offsetX;
                      this.T = x.offsetY;
                      this.height = a.height;
                      this.width = 0 === u || u === r.length - 1 ? a.width[r[u]] + n : a.width[r[u]];
                      this.ra = A.height;
                      this.sa = A.width;
                      0 === this.c.length ? this.c.push(A) : (x = this.c[this.c.length - 1],
                      w(x) != w(A) && (this.v.push(this.b.length),
                      this.c.push(A)));
                      x = c;
                      B = d;
                      var y = e;
                      for (A = 0; A < B; A += y)
                          Vu(this, x, B, y)
                  }
                  p += this.width
              }
          }
      }
  }
  ;
  function Yv(a, b) {
      var c = a.l
        , d = b.length * c.height;
      return [b.map(function(b) {
          var d = 0, e;
          var h = 0;
          for (e = b.length; h < e; ++h) {
              var l = b[h];
              c.width[l] || Zv(a, l);
              d += c.width[l] ? c.width[l] : 0
          }
          return d
      }).reduce(function(a, b) {
          return Math.max(a, b)
      }), d]
  }
  function Zv(a, b) {
      if (1 === b.length) {
          var c = a.l
            , d = a.O;
          a = a.oc.getContext("2d");
          a.font = d.font;
          a = Math.ceil(a.measureText(b).width * d.scale);
          c.yh.add(b, a, c.height, function(a, c, g) {
              a.font = d.font;
              a.fillStyle = d.fillColor;
              a.strokeStyle = d.strokeColor;
              a.lineWidth = d.lineWidth;
              a.lineCap = d.lineCap;
              a.lineJoin = d.lineJoin;
              a.miterLimit = d.miterLimit;
              a.textAlign = "left";
              a.textBaseline = "top";
              qd && d.lineDash && (a.setLineDash(d.lineDash),
              a.lineDashOffset = d.lineDashOffset);
              1 !== d.scale && a.setTransform(d.scale, 0, 0, d.scale, 0, 0);
              d.strokeColor && a.strokeText(b, c, g);
              d.fillColor && a.fillText(b, c, g)
          }) && (c.width[b] = a)
      }
  }
  k.$a = function(a) {
      var b = a.b;
      this.v.push(this.b.length);
      this.s = this.v;
      this.o = new Fu(this.a);
      this.j = new Fu(this.b);
      Wu(this.oa, this.c, {}, b);
      this.O = {
          strokeColor: null,
          lineCap: void 0,
          lineDash: null,
          lineDashOffset: void 0,
          lineJoin: void 0,
          lineWidth: 0,
          miterLimit: void 0,
          fillColor: null,
          font: void 0,
          scale: void 0
      };
      this.qa = "";
      this.fa = this.ta = this.ma = this.kb = void 0;
      this.c = null;
      this.B = {};
      this.l = void 0;
      Uu.prototype.$a.call(this, a)
  }
  ;
  k.ib = function(a) {
      var b = this.O
        , c = a.Ca()
        , d = a.Da();
      if (a && a.Ia() && (c || d)) {
          c ? (c = c.b,
          b.fillColor = Th(c ? c : Au)) : b.fillColor = null;
          d ? (c = d.b,
          b.strokeColor = Th(c ? c : Cu),
          b.lineWidth = d.c || 1,
          b.lineCap = d.g || "round",
          b.lineDashOffset = d.i || 0,
          b.lineJoin = d.j || "round",
          b.miterLimit = d.l || 10,
          d = d.f,
          b.lineDash = d ? d.slice() : Bu) : (b.strokeColor = null,
          b.lineWidth = 0);
          b.font = a.a || "10px sans-serif";
          b.scale = a.b || 1;
          this.qa = a.Ia();
          d = ej[a.g];
          c = ej[a.j];
          this.kb = void 0 === d ? .5 : d;
          this.ma = void 0 === c ? .5 : c;
          this.ta = a.f || 0;
          this.fa = a.c || 0;
          this.rotateWithView = !!a.l;
          this.rotation = a.i || 0;
          a = [];
          for (var e in b)
              if (b[e] || 0 === b[e])
                  Array.isArray(b[e]) ? a = a.concat(b[e]) : a.push(b[e]);
          c = "";
          e = 0;
          for (d = a.length; e < d; ++e)
              c += a[e];
          e = c;
          this.B[e] || (a = this.oc.getContext("2d"),
          a.font = b.font,
          a = Math.ceil((1.5 * a.measureText("M").width + b.lineWidth / 2) * b.scale),
          this.B[e] = {
              yh: new Tv({
                  space: b.lineWidth + 1
              }),
              width: {},
              height: a
          });
          this.l = this.B[e]
      } else
          this.qa = ""
  }
  ;
  k.jg = function() {
      return this.oa
  }
  ;
  k.bg = function() {
      return this.oa
  }
  ;
  function $v(a, b, c) {
      this.g = b;
      this.j = a;
      this.i = c;
      this.f = {}
  }
  v($v, Mi);
  function aw(a, b) {
      var c = [], d;
      for (d in a.f) {
          var e = a.f[d], f;
          for (f in e)
              c.push(e[f].Ab(b))
      }
      return function() {
          for (var a = c.length, b, d = 0; d < a; d++)
              b = c[d].apply(this, arguments);
          return b
      }
  }
  function bw(a, b) {
      for (var c in a.f) {
          var d = a.f[c], e;
          for (e in d)
              d[e].$a(b)
      }
  }
  $v.prototype.b = function(a, b) {
      var c = void 0 !== a ? a.toString() : "0";
      a = this.f[c];
      void 0 === a && (a = {},
      this.f[c] = a);
      c = a[b];
      void 0 === c && (c = new cw[b](this.j,this.g),
      a[b] = c);
      return c
  }
  ;
  $v.prototype.c = function() {
      return wb(this.f)
  }
  ;
  $v.prototype.Ka = function(a, b, c, d, e, f, g, h) {
      var l = Object.keys(this.f).map(Number);
      l.sort(ea);
      var m, n;
      var p = 0;
      for (m = l.length; p < m; ++p) {
          var q = this.f[l[p].toString()];
          var r = 0;
          for (n = dj.length; r < n; ++r) {
              var u = q[dj[r]];
              void 0 !== u && u.Ka(a, b, c, d, e, f, g, h, void 0, !1)
          }
      }
  }
  ;
  function dw(a, b, c, d, e, f, g, h, l, m, n) {
      var p = ew
        , q = Object.keys(a.f).map(Number);
      q.sort(function(a, b) {
          return b - a
      });
      var r, u;
      var x = 0;
      for (r = q.length; x < r; ++x) {
          var B = a.f[q[x].toString()];
          for (u = dj.length - 1; 0 <= u; --u) {
              var A = B[dj[u]];
              if (void 0 !== A && (A = A.Ka(b, c, d, e, p, f, g, h, l, m, n)))
                  return A
          }
      }
  }
  $v.prototype.Fa = function(a, b, c, d, e, f, g, h, l, m) {
      var n = b.b;
      n.bindFramebuffer(n.FRAMEBUFFER, Pu(b));
      var p;
      void 0 !== this.i && (p = Ra($a(a), d * this.i));
      return dw(this, b, a, d, e, g, h, l, function(a) {
          var b = new Uint8Array(4);
          n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, b);
          if (0 < b[3] && (a = m(a)))
              return a
      }, !0, p)
  }
  ;
  function fw(a, b, c, d, e, f, g, h) {
      var l = c.b;
      l.bindFramebuffer(l.FRAMEBUFFER, Pu(c));
      return void 0 !== dw(a, c, b, d, e, f, g, h, function() {
          var a = new Uint8Array(4);
          l.readPixels(0, 0, 1, 1, l.RGBA, l.UNSIGNED_BYTE, a);
          return 0 < a[3]
      }, !1)
  }
  var ew = [1, 1]
    , cw = {
      Circle: Hu,
      Image: Xu,
      LineString: av,
      Polygon: Av,
      Text: Xv
  };
  function gw(a, b, c, d, e, f, g) {
      this.b = a;
      this.f = b;
      this.c = f;
      this.i = g;
      this.l = e;
      this.j = d;
      this.g = c;
      this.a = this.o = this.v = this.s = null
  }
  v(gw, Uh);
  function hw(a, b, c) {
      var d = a.b;
      b = b.b(0, "Text");
      b.ib(a.a);
      b.Sb(c, null);
      b.$a(d);
      b.Ka(a.b, a.f, a.g, a.j, a.l, a.i, 1, {}, void 0, !1);
      b.Ab(d)()
  }
  k = gw.prototype;
  k.zd = function(a) {
      this.La(a.Ca(), a.Da());
      this.Wb(a.Y());
      this.ib(a.Ia())
  }
  ;
  k.Fb = function(a) {
      switch (a.S()) {
      case "Point":
          this.uc(a, null);
          break;
      case "LineString":
          this.qc(a, null);
          break;
      case "Polygon":
          this.vc(a, null);
          break;
      case "MultiPoint":
          this.sc(a, null);
          break;
      case "MultiLineString":
          this.rc(a, null);
          break;
      case "MultiPolygon":
          this.tc(a, null);
          break;
      case "GeometryCollection":
          this.Ge(a, null);
          break;
      case "Circle":
          this.$b(a, null)
      }
  }
  ;
  k.Fe = function(a, b) {
      (a = (0,
      b.Za)(a)) && qb(this.c, a.G()) && (this.zd(b),
      this.Fb(a))
  }
  ;
  k.Ge = function(a) {
      a = a.a;
      var b;
      var c = 0;
      for (b = a.length; c < b; ++c)
          this.Fb(a[c])
  }
  ;
  k.uc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "Image");
      e.Wb(this.s);
      e.uc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.sc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "Image");
      e.Wb(this.s);
      e.sc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.qc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "LineString");
      e.La(null, this.o);
      e.qc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.rc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "LineString");
      e.La(null, this.o);
      e.rc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.vc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "Polygon");
      e.La(this.v, this.o);
      e.vc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.tc = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "Polygon");
      e.La(this.v, this.o);
      e.tc(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.$b = function(a, b) {
      var c = this.b
        , d = new $v(1,this.c)
        , e = d.b(0, "Circle");
      e.La(this.v, this.o);
      e.$b(a, b);
      e.$a(c);
      e.Ka(this.b, this.f, this.g, this.j, this.l, this.i, 1, {}, void 0, !1);
      e.Ab(c)();
      this.a && hw(this, d, a)
  }
  ;
  k.Wb = function(a) {
      this.s = a
  }
  ;
  k.La = function(a, b) {
      this.v = a;
      this.o = b
  }
  ;
  k.ib = function(a) {
      this.a = a
  }
  ;
  var iw = new qu("precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}")
    , jw = new ru("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}");
  function kw(a, b) {
      this.g = a.getUniformLocation(b, "d");
      this.c = a.getUniformLocation(b, "e");
      this.f = a.getUniformLocation(b, "f");
      this.i = a.getUniformLocation(b, "g");
      this.b = a.getAttribLocation(b, "b");
      this.a = a.getAttribLocation(b, "c")
  }
  ;function lw(a, b) {
      fi.call(this, b);
      this.c = a;
      this.U = new Fu([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
      this.g = this.Kb = null;
      this.j = void 0;
      this.v = Ue();
      this.O = Ue();
      this.D = vu();
      this.s = null
  }
  v(lw, fi);
  function mw(a, b, c) {
      var d = a.c.f;
      if (void 0 === a.j || a.j != c) {
          b.postRenderFunctions.push(function(a, b, c) {
              a.isContextLost() || (a.deleteFramebuffer(b),
              a.deleteTexture(c))
          }
          .bind(null, d, a.g, a.Kb));
          b = Qu(d, c, c);
          var e = d.createFramebuffer();
          d.bindFramebuffer(36160, e);
          d.framebufferTexture2D(36160, 36064, 3553, b, 0);
          a.Kb = b;
          a.g = e;
          a.j = c
      } else
          d.bindFramebuffer(36160, a.g)
  }
  lw.prototype.Ti = function(a, b, c) {
      nw(this, "precompose", c, a);
      yu(c, 34962, this.U);
      var d = c.b
        , e = Ju(c, iw, jw);
      if (this.s)
          var f = this.s;
      else
          this.s = f = new kw(d,e);
      c.Wc(e) && (d.enableVertexAttribArray(f.b),
      d.vertexAttribPointer(f.b, 2, 5126, !1, 16, 0),
      d.enableVertexAttribArray(f.a),
      d.vertexAttribPointer(f.a, 2, 5126, !1, 16, 8),
      d.uniform1i(f.i, 0));
      d.uniformMatrix4fv(f.g, !1, wu(this.D, this.v));
      d.uniformMatrix4fv(f.c, !1, wu(this.D, this.O));
      d.uniform1f(f.f, b.opacity);
      d.bindTexture(3553, this.Kb);
      d.drawArrays(5, 0, 4);
      nw(this, "postcompose", c, a)
  }
  ;
  function nw(a, b, c, d) {
      a = a.a;
      if (Uc(a, b)) {
          var e = d.viewState;
          a.b(new Ih(b,new gw(c,e.center,e.resolution,e.rotation,d.size,d.extent,d.pixelRatio),d,null,c))
      }
  }
  lw.prototype.yg = function() {
      this.g = this.Kb = null;
      this.j = void 0
  }
  ;
  function ow(a, b, c, d) {
      var e = kc(c, b, a);
      c = Yb(b, d, c);
      b = b.Rc();
      void 0 !== b && (c *= b);
      b = a.Rc();
      void 0 !== b && (c /= b);
      b = a.G();
      if (!b || Ua(b, e))
          a = Yb(a, c, e) / c,
          isFinite(a) && 0 < a && (c /= a);
      return c
  }
  function pw(a, b, c, d) {
      a = c - a;
      b = d - b;
      var e = Math.sqrt(a * a + b * b);
      return [Math.round(c + a / e), Math.round(d + b / e)]
  }
  function qw(a, b, c, d, e, f, g, h, l, m, n) {
      var p = dg(Math.round(c * a), Math.round(c * b));
      if (0 === l.length)
          return p.canvas;
      p.scale(c, c);
      var q = Pa();
      l.forEach(function(a) {
          db(q, a.extent)
      });
      var r = dg(Math.round(c * lb(q) / d), Math.round(c * mb(q) / d))
        , u = c / d;
      l.forEach(function(a) {
          r.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - q[0]) * u, -(a.extent[3] - q[3]) * u, lb(a.extent) * u, mb(a.extent) * u)
      });
      var x = ib(g);
      h.c.forEach(function(a) {
          var b = a.source
            , e = a.target
            , g = b[1][0]
            , h = b[1][1]
            , l = b[2][0]
            , m = b[2][1];
          a = (e[0][0] - x[0]) / f;
          var n = -(e[0][1] - x[1]) / f
            , u = (e[1][0] - x[0]) / f
            , B = -(e[1][1] - x[1]) / f
            , U = (e[2][0] - x[0]) / f
            , Xb = -(e[2][1] - x[1]) / f;
          e = b[0][0];
          b = b[0][1];
          g -= e;
          h -= b;
          l -= e;
          m -= b;
          a: {
              g = [[g, h, 0, 0, u - a], [l, m, 0, 0, U - a], [0, 0, g, h, B - n], [0, 0, l, m, Xb - n]];
              h = g.length;
              for (l = 0; l < h; l++) {
                  m = l;
                  for (var Ca = Math.abs(g[l][l]), Cb = l + 1; Cb < h; Cb++) {
                      var nc = Math.abs(g[Cb][l]);
                      nc > Ca && (Ca = nc,
                      m = Cb)
                  }
                  if (0 === Ca) {
                      g = null;
                      break a
                  }
                  Ca = g[m];
                  g[m] = g[l];
                  g[l] = Ca;
                  for (m = l + 1; m < h; m++)
                      for (Ca = -g[m][l] / g[l][l],
                      Cb = l; Cb < h + 1; Cb++)
                          g[m][Cb] = l == Cb ? 0 : g[m][Cb] + Ca * g[l][Cb]
              }
              l = Array(h);
              for (m = h - 1; 0 <= m; m--)
                  for (l[m] = g[m][h] / g[m][m],
                  Ca = m - 1; 0 <= Ca; Ca--)
                      g[Ca][h] -= g[Ca][m] * l[m];
              g = l
          }
          g && (p.save(),
          p.beginPath(),
          l = (a + u + U) / 3,
          m = (n + B + Xb) / 3,
          h = pw(l, m, a, n),
          u = pw(l, m, u, B),
          U = pw(l, m, U, Xb),
          p.moveTo(u[0], u[1]),
          p.lineTo(h[0], h[1]),
          p.lineTo(U[0], U[1]),
          p.clip(),
          p.transform(g[0], g[2], g[1], g[3], a, n),
          p.translate(q[0] - e, q[3] - b),
          p.scale(d / c, -d / c),
          p.drawImage(r.canvas, 0, 0),
          p.restore())
      });
      n && (p.save(),
      p.strokeStyle = "black",
      p.lineWidth = 1,
      h.c.forEach(function(a) {
          var b = a.target;
          a = (b[0][0] - x[0]) / f;
          var c = -(b[0][1] - x[1]) / f
            , d = (b[1][0] - x[0]) / f
            , e = -(b[1][1] - x[1]) / f
            , g = (b[2][0] - x[0]) / f;
          b = -(b[2][1] - x[1]) / f;
          p.beginPath();
          p.moveTo(d, e);
          p.lineTo(a, c);
          p.lineTo(g, b);
          p.closePath();
          p.stroke()
      }),
      p.restore());
      return p.canvas
  }
  ;function rw(a, b, c, d, e) {
      this.f = a;
      this.i = b;
      var f = {}
        , g = ic(this.i, this.f);
      this.a = function(a) {
          var b = a[0] + "/" + a[1];
          f[b] || (f[b] = g(a));
          return f[b]
      }
      ;
      this.g = d;
      this.v = e * e;
      this.c = [];
      this.l = !1;
      this.o = this.f.f && !!d && !!this.f.G() && lb(d) == lb(this.f.G());
      this.b = this.f.G() ? lb(this.f.G()) : null;
      this.j = this.i.G() ? lb(this.i.G()) : null;
      a = ib(c);
      b = hb(c);
      d = gb(c);
      c = fb(c);
      e = this.a(a);
      var h = this.a(b)
        , l = this.a(d)
        , m = this.a(c);
      sw(this, a, b, d, c, e, h, l, m, 10);
      if (this.l) {
          var n = Infinity;
          this.c.forEach(function(a) {
              n = Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0])
          });
          this.c.forEach(function(a) {
              if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
                  var b = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];
                  b[0][0] - n > this.b / 2 && (b[0][0] -= this.b);
                  b[1][0] - n > this.b / 2 && (b[1][0] -= this.b);
                  b[2][0] - n > this.b / 2 && (b[2][0] -= this.b);
                  Math.max(b[0][0], b[1][0], b[2][0]) - Math.min(b[0][0], b[1][0], b[2][0]) < this.b / 2 && (a.source = b)
              }
          }, this)
      }
      f = {}
  }
  function sw(a, b, c, d, e, f, g, h, l, m) {
      var n = Oa([f, g, h, l])
        , p = a.b ? lb(n) / a.b : null
        , q = a.b
        , r = a.f.f && .5 < p && 1 > p
        , u = !1;
      if (0 < m) {
          if (a.i.c && a.j) {
              var x = Oa([b, c, d, e]);
              u |= .25 < lb(x) / a.j
          }
          !r && a.f.c && p && (u |= .25 < p)
      }
      if (u || !a.g || qb(n, a.g)) {
          if (!(u || isFinite(f[0]) && isFinite(f[1]) && isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(l[0]) && isFinite(l[1])))
              if (0 < m)
                  u = !0;
              else
                  return;
          if (0 < m && (u || (n = a.a([(b[0] + d[0]) / 2, (b[1] + d[1]) / 2]),
          q = r ? (Ja(f[0], q) + Ja(h[0], q)) / 2 - Ja(n[0], q) : (f[0] + h[0]) / 2 - n[0],
          n = (f[1] + h[1]) / 2 - n[1],
          u = q * q + n * n > a.v),
          u)) {
              Math.abs(b[0] - d[0]) <= Math.abs(b[1] - d[1]) ? (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2],
              q = a.a(r),
              n = [(e[0] + b[0]) / 2, (e[1] + b[1]) / 2],
              p = a.a(n),
              sw(a, b, c, r, n, f, g, q, p, m - 1),
              sw(a, n, r, d, e, p, q, h, l, m - 1)) : (r = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2],
              q = a.a(r),
              n = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2],
              p = a.a(n),
              sw(a, b, r, n, e, f, q, p, l, m - 1),
              sw(a, r, c, d, n, q, g, h, p, m - 1));
              return
          }
          if (r) {
              if (!a.o)
                  return;
              a.l = !0
          }
          a.c.push({
              source: [f, h, l],
              target: [b, d, e]
          });
          a.c.push({
              source: [f, g, h],
              target: [b, c, d]
          })
      }
  }
  function tw(a) {
      var b = Pa();
      a.c.forEach(function(a) {
          a = a.source;
          Qa(b, a[0]);
          Qa(b, a[1]);
          Qa(b, a[2])
      });
      return b
  }
  ;function uw(a, b, c, d, e, f) {
      this.v = b;
      this.o = a.G();
      var g = b.G()
        , h = g ? pb(c, g) : c;
      g = ow(a, b, nb(h), d);
      this.j = new rw(a,b,h,this.o,.5 * g);
      this.i = d;
      this.f = c;
      a = tw(this.j);
      this.l = (this.Jb = f(a, g, e)) ? this.Jb.a : 1;
      this.me = this.g = null;
      e = 2;
      f = [];
      this.Jb && (e = 0,
      f = this.Jb.c);
      ps.call(this, c, d, this.l, e, f)
  }
  v(uw, ps);
  uw.prototype.ka = function() {
      1 == this.state && (Hc(this.me),
      this.me = null);
      ps.prototype.ka.call(this)
  }
  ;
  uw.prototype.Y = function() {
      return this.g
  }
  ;
  uw.prototype.je = function() {
      var a = this.Jb.getState();
      2 == a && (this.g = qw(lb(this.f) / this.i, mb(this.f) / this.i, this.l, this.Jb.resolution, 0, this.i, this.f, this.j, [{
          extent: this.Jb.G(),
          image: this.Jb.Y()
      }], 0));
      this.state = a;
      this.u()
  }
  ;
  uw.prototype.load = function() {
      if (0 == this.state) {
          this.state = 1;
          this.u();
          var a = this.Jb.getState();
          2 == a || 3 == a ? this.je() : (this.me = z(this.Jb, "change", function() {
              var a = this.Jb.getState();
              if (2 == a || 3 == a)
                  Hc(this.me),
                  this.me = null,
                  this.je()
          }, this),
          this.Jb.load())
      }
  }
  ;
  function vw(a) {
      Ks.call(this, {
          attributions: a.attributions,
          extent: a.extent,
          logo: a.logo,
          projection: a.projection,
          state: a.state
      });
      this.s = void 0 !== a.resolutions ? a.resolutions : null;
      this.i = null;
      this.fa = 0
  }
  v(vw, Ks);
  function ww(a, b) {
      a.s && (b = a.s[ia(a.s, b, 0)]);
      return b
  }
  vw.prototype.Y = function(a, b, c, d) {
      var e = this.c;
      if (e && d && !hc(e, d)) {
          if (this.i) {
              if (this.fa == this.f && hc(this.i.v, d) && this.i.resolution == b && cb(this.i.G(), a))
                  return this.i;
              Qc(this.i);
              this.i = null
          }
          this.i = new uw(e,d,a,b,c,function(a, b, c) {
              return this.Qc(a, b, c, e)
          }
          .bind(this));
          this.fa = this.f;
          return this.i
      }
      e && (d = e);
      return this.Qc(a, b, c, d)
  }
  ;
  vw.prototype.l = function(a) {
      a = a.target;
      switch (a.getState()) {
      case 1:
          this.b(new xw(yw,a));
          break;
      case 2:
          this.b(new xw(zw,a));
          break;
      case 3:
          this.b(new xw(Aw,a))
      }
  }
  ;
  function Bw(a, b) {
      a.Y().src = b
  }
  function xw(a, b) {
      Rc.call(this, a);
      this.image = b
  }
  v(xw, Rc);
  var yw = "imageloadstart"
    , zw = "imageloadend"
    , Aw = "imageloaderror";
  function Cw(a) {
      vw.call(this, {
          attributions: a.attributions,
          logo: a.logo,
          projection: a.projection,
          resolutions: a.resolutions,
          state: a.state
      });
      this.ma = a.canvasFunction;
      this.T = null;
      this.U = 0;
      this.oa = void 0 !== a.ratio ? a.ratio : 1.5
  }
  v(Cw, vw);
  Cw.prototype.Qc = function(a, b, c, d) {
      b = ww(this, b);
      var e = this.T;
      if (e && this.U == this.f && e.resolution == b && e.a == c && Wa(e.G(), a))
          return e;
      a = a.slice();
      rb(a, this.oa);
      (d = this.ma(a, b, c, [lb(a) / b * c, mb(a) / b * c], d)) && (e = new rs(a,b,c,this.j,d));
      this.T = e;
      this.U = this.f;
      return e
  }
  ;
  function Dw(a) {
      this.a = a.source;
      this.ab = Ue();
      this.g = dg();
      this.o = [0, 0];
      this.Va = void 0 == a.renderBuffer ? 100 : a.renderBuffer;
      this.B = null;
      Cw.call(this, {
          attributions: a.attributions,
          canvasFunction: this.Ek.bind(this),
          logo: a.logo,
          projection: a.projection,
          ratio: a.ratio,
          resolutions: a.resolutions,
          state: this.a.getState()
      });
      this.I = null;
      this.v = void 0;
      this.Vi(a.style);
      z(this.a, "change", this.zo, this)
  }
  v(Dw, Cw);
  k = Dw.prototype;
  k.Ek = function(a, b, c, d, e) {
      var f = new nj(.5 * b / c,a,b,c,this.a.U,this.Va);
      this.a.ce(a, b, e);
      var g = !1;
      this.a.ac(a, function(a) {
          var d;
          if (!(d = g)) {
              var e;
              (d = a.bb()) ? e = d.call(a, b) : this.v && (e = this.v(a, b));
              if (e) {
                  var h, p = !1;
                  Array.isArray(e) || (e = [e]);
                  d = 0;
                  for (h = e.length; d < h; ++d)
                      p = xj(f, a, e[d], wj(b, c), this.yo, this) || p;
                  d = p
              } else
                  d = !1
          }
          g = d
      }, this);
      rj(f);
      if (g)
          return null;
      this.o[0] != d[0] || this.o[1] != d[1] ? (this.g.canvas.width = d[0],
      this.g.canvas.height = d[1],
      this.o[0] = d[0],
      this.o[1] = d[1]) : this.g.clearRect(0, 0, d[0], d[1]);
      a = Ew(this, nb(a), b, c, d);
      f.Ka(this.g, a, 0, {});
      this.B = f;
      return this.g.canvas
  }
  ;
  k.Fa = function(a, b, c, d, e, f) {
      if (this.B) {
          var g = {};
          return this.B.Fa(a, b, 0, d, e, function(a) {
              var b = w(a).toString();
              if (!(b in g))
                  return g[b] = !0,
                  f(a)
          })
      }
  }
  ;
  k.wo = function() {
      return this.a
  }
  ;
  k.xo = function() {
      return this.I
  }
  ;
  k.bb = function() {
      return this.v
  }
  ;
  function Ew(a, b, c, d, e) {
      c = d / c;
      return cf(a.ab, e[0] / 2, e[1] / 2, c, -c, 0, -b[0], -b[1])
  }
  k.yo = function() {
      this.u()
  }
  ;
  k.zo = function() {
      Ms(this, this.a.getState())
  }
  ;
  k.Vi = function(a) {
      this.I = void 0 !== a ? a : Ik;
      this.v = a ? Gk(this.I) : void 0;
      this.u()
  }
  ;
  function Fw(a, b) {
      lw.call(this, a, b);
      this.l = this.i = this.N = null
  }
  v(Fw, lw);
  Fw.handles = function(a, b) {
      return "webgl" === a && "IMAGE" === b.S()
  }
  ;
  Fw.create = function(a, b) {
      return new Fw(a,b)
  }
  ;
  function Gw(a, b) {
      b = b.Y();
      return Tu(a.c.f, b)
  }
  Fw.prototype.Fa = function(a, b, c, d, e) {
      var f = this.a;
      return f.ia().Fa(a, b.viewState.resolution, b.viewState.rotation, c, b.skippedFeatureUids, function(a) {
          return d.call(e, a, f)
      })
  }
  ;
  Fw.prototype.zg = function(a, b) {
      var c = this.c.f
        , d = a.pixelRatio
        , e = a.viewState
        , f = e.center
        , g = e.resolution
        , h = e.rotation
        , l = this.N
        , m = this.Kb
        , n = this.a.ia()
        , p = a.viewHints
        , q = a.extent;
      void 0 !== b.extent && (q = pb(q, b.extent));
      p[0] || p[1] || kb(q) || (b = n.Y(q, g, d, e.projection)) && ii(this, b) && (l = b,
      m = Gw(this, b),
      this.Kb && a.postRenderFunctions.push(function(a, b) {
          a.isContextLost() || a.deleteTexture(b)
      }
      .bind(null, c, this.Kb)));
      l && (c = this.c.getContext().j,
      Hw(this, c.width, c.height, d, f, g, h, l.G()),
      this.l = null,
      d = this.v,
      Ve(d),
      af(d, 1, -1),
      bf(d, 0, -1),
      this.N = l,
      this.Kb = m,
      ki(a.attributions, l.c),
      li(a, n));
      return !!l
  }
  ;
  function Hw(a, b, c, d, e, f, g, h) {
      b *= f;
      c *= f;
      a = a.O;
      Ve(a);
      af(a, 2 * d / b, 2 * d / c);
      $e(a, -g);
      bf(a, h[0] - e[0], h[1] - e[1]);
      af(a, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
      bf(a, 1, 1)
  }
  Fw.prototype.df = function(a, b) {
      return void 0 !== this.Fa(a, b, 0, Pe, this)
  }
  ;
  Fw.prototype.xg = function(a, b, c, d) {
      if (this.N && this.N.Y())
          if (this.a.ia()instanceof Dw) {
              var e = Ze(b.pixelToCoordinateTransform, a.slice());
              if (this.Fa(e, b, 0, Pe, this))
                  return c.call(d, this.a, null)
          } else {
              e = [this.N.Y().width, this.N.Y().height];
              if (!this.l) {
                  var f = b.size;
                  b = Ue();
                  bf(b, -1, -1);
                  af(b, 2 / f[0], 2 / f[1]);
                  bf(b, 0, f[1]);
                  af(b, 1, -1);
                  f = df(this.O.slice());
                  var g = Ue();
                  bf(g, 0, e[1]);
                  af(g, 1, -1);
                  af(g, e[0] / 2, e[1] / 2);
                  bf(g, 1, 1);
                  Xe(g, f);
                  Xe(g, b);
                  this.l = g
              }
              a = Ze(this.l, a.slice());
              if (!(0 > a[0] || a[0] > e[0] || 0 > a[1] || a[1] > e[1]) && (this.i || (this.i = dg(1, 1)),
              this.i.clearRect(0, 0, 1, 1),
              this.i.drawImage(this.N.Y(), a[0], a[1], 1, 1, 0, 0, 1, 1),
              e = this.i.getImageData(0, 0, 1, 1).data,
              0 < e[3]))
                  return c.call(d, this.a, e)
          }
  }
  ;
  function Iw(a, b) {
      Ai.call(this, 0, b);
      this.b = document.createElement("CANVAS");
      this.b.style.width = "100%";
      this.b.style.height = "100%";
      this.b.style.display = "block";
      this.b.className = "ol-unselectable";
      a.insertBefore(this.b, a.childNodes[0] || null);
      this.O = this.C = 0;
      this.D = dg();
      this.l = !0;
      this.f = hd(this.b, {
          antialias: !0,
          depth: !0,
          failIfMajorPerformanceCaveat: !0,
          preserveDrawingBuffer: !1,
          stencil: !0
      });
      this.v = new Ou(this.b,this.f);
      z(this.b, "webglcontextlost", this.io, this);
      z(this.b, "webglcontextrestored", this.jo, this);
      this.a = new fj;
      this.s = null;
      this.g = new he(function(a) {
          var b = a[1];
          a = a[2];
          var c = b[0] - this.s[0];
          b = b[1] - this.s[1];
          return 65536 * Math.log(a) + Math.sqrt(c * c + b * b) / a
      }
      .bind(this),function(a) {
          return a[0].gb()
      }
      );
      this.B = function() {
          if (0 !== this.g.b.length) {
              le(this.g);
              var a = ie(this.g);
              Jw(this, a[0], a[3], a[4])
          }
          return !1
      }
      .bind(this);
      this.i = 0;
      Kw(this)
  }
  v(Iw, Ai);
  Iw.handles = function(a) {
      return id && "webgl" === a
  }
  ;
  Iw.create = function(a, b) {
      return new Iw(a,b)
  }
  ;
  function Jw(a, b, c, d) {
      var e = a.f
        , f = b.gb();
      if (a.a.b.hasOwnProperty(f))
          a = a.a.get(f),
          e.bindTexture(3553, a.Kb),
          9729 != a.ei && (e.texParameteri(3553, 10240, 9729),
          a.ei = 9729),
          9729 != a.gi && (e.texParameteri(3553, 10241, 9729),
          a.gi = 9729);
      else {
          var g = e.createTexture();
          e.bindTexture(3553, g);
          if (0 < d) {
              var h = a.D.canvas
                , l = a.D;
              a.C !== c[0] || a.O !== c[1] ? (h.width = c[0],
              h.height = c[1],
              a.C = c[0],
              a.O = c[1]) : l.clearRect(0, 0, c[0], c[1]);
              l.drawImage(b.Y(), d, d, c[0], c[1], 0, 0, c[0], c[1]);
              e.texImage2D(3553, 0, 6408, 6408, 5121, h)
          } else
              e.texImage2D(3553, 0, 6408, 6408, 5121, b.Y());
          e.texParameteri(3553, 10240, 9729);
          e.texParameteri(3553, 10241, 9729);
          e.texParameteri(3553, 10242, 33071);
          e.texParameteri(3553, 10243, 33071);
          a.a.set(f, {
              Kb: g,
              ei: 9729,
              gi: 9729
          })
      }
  }
  function Lw(a, b, c) {
      var d = a.j;
      if (Uc(d, b)) {
          a = a.v;
          var e = c.viewState;
          d.b(new Ih(b,new gw(a,e.center,e.resolution,e.rotation,c.size,c.extent,c.pixelRatio),c,null,a))
      }
  }
  k = Iw.prototype;
  k.ka = function() {
      var a = this.f;
      a.isContextLost() || this.a.forEach(function(b) {
          b && a.deleteTexture(b.Kb)
      });
      Qc(this.v);
      Ai.prototype.ka.call(this)
  }
  ;
  k.Ik = function(a, b) {
      a = this.f;
      for (var c; 1024 < this.a.c - this.i; ) {
          if (c = this.a.a.Hc)
              a.deleteTexture(c.Kb);
          else if (+this.a.a.fc == b.index)
              break;
          else
              --this.i;
          this.a.pop()
      }
  }
  ;
  k.getContext = function() {
      return this.v
  }
  ;
  k.S = function() {
      return "webgl"
  }
  ;
  k.io = function(a) {
      a.preventDefault();
      this.a.clear();
      this.i = 0;
      a = this.c;
      for (var b in a)
          a[b].yg()
  }
  ;
  k.jo = function() {
      Kw(this);
      this.j.render()
  }
  ;
  function Kw(a) {
      a = a.f;
      a.activeTexture(33984);
      a.blendFuncSeparate(770, 771, 1, 771);
      a.disable(2884);
      a.disable(2929);
      a.disable(3089);
      a.disable(2960)
  }
  k.$g = function(a) {
      var b = this.getContext()
        , c = this.f;
      if (c.isContextLost())
          return !1;
      if (!a)
          return this.l && (this.b.style.display = "none",
          this.l = !1),
          !1;
      this.s = a.focus;
      this.a.set((-a.index).toString(), null);
      ++this.i;
      Lw(this, "precompose", a);
      var d = []
        , e = a.layerStatesArray;
      na(e);
      var f = a.viewState.resolution, g;
      var h = 0;
      for (g = e.length; h < g; ++h) {
          var l = e[h];
          if (xi(l, f) && "ready" == l.Nj) {
              var m = Di(this, l.layer);
              m.zg(a, l, b) && d.push(l)
          }
      }
      e = a.size[0] * a.pixelRatio;
      f = a.size[1] * a.pixelRatio;
      if (this.b.width != e || this.b.height != f)
          this.b.width = e,
          this.b.height = f;
      c.bindFramebuffer(36160, null);
      c.clearColor(0, 0, 0, 0);
      c.clear(16384);
      c.enable(3042);
      c.viewport(0, 0, this.b.width, this.b.height);
      h = 0;
      for (g = d.length; h < g; ++h)
          l = d[h],
          m = Di(this, l.layer),
          m.Ti(a, l, b);
      this.l || (this.b.style.display = "",
      this.l = !0);
      Bi(a);
      1024 < this.a.c - this.i && a.postRenderFunctions.push(this.Ik.bind(this));
      0 !== this.g.b.length && (a.postRenderFunctions.push(this.B),
      a.animate = !0);
      Lw(this, "postcompose", a);
      Ei(this, a);
      a.postRenderFunctions.push(Ci)
  }
  ;
  k.Fa = function(a, b, c, d, e, f, g) {
      if (this.f.isContextLost())
          return !1;
      var h = b.viewState, l = b.layerStatesArray, m;
      for (m = l.length - 1; 0 <= m; --m) {
          var n = l[m];
          var p = n.layer;
          if (xi(n, h.resolution) && f.call(g, p) && (n = Di(this, p).Fa(a, b, c, d, e)))
              return n
      }
  }
  ;
  k.Ri = function(a, b, c, d, e) {
      c = !1;
      if (this.f.isContextLost())
          return !1;
      var f = b.viewState, g = b.layerStatesArray, h;
      for (h = g.length - 1; 0 <= h; --h) {
          var l = g[h]
            , m = l.layer;
          if (xi(l, f.resolution) && d.call(e, m) && (c = Di(this, m).df(a, b)))
              return !0
      }
      return c
  }
  ;
  k.Qi = function(a, b, c, d, e) {
      if (this.f.isContextLost())
          return !1;
      var f = b.viewState, g = b.layerStatesArray, h;
      for (h = g.length - 1; 0 <= h; --h) {
          var l = g[h];
          var m = l.layer;
          if (xi(l, f.resolution) && e.call(d, m) && (l = Di(this, m).xg(a, b, c, d)))
              return l
      }
  }
  ;
  var Mw = new qu("precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}")
    , Nw = new ru("varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}");
  function Ow(a, b) {
      this.c = a.getUniformLocation(b, "d");
      this.f = a.getUniformLocation(b, "e");
      this.b = a.getAttribLocation(b, "b");
      this.a = a.getAttribLocation(b, "c")
  }
  ;function Pw(a, b) {
      lw.call(this, a, b);
      this.I = Mw;
      this.fa = Nw;
      this.i = null;
      this.B = new Fu([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
      this.C = this.l = null;
      this.o = -1;
      this.T = [0, 0]
  }
  v(Pw, lw);
  Pw.handles = function(a, b) {
      return "webgl" === a && "TILE" === b.S()
  }
  ;
  Pw.create = function(a, b) {
      return new Pw(a,b)
  }
  ;
  k = Pw.prototype;
  k.ka = function() {
      Iu(this.c.getContext(), this.B);
      lw.prototype.ka.call(this)
  }
  ;
  k.Rf = function(a, b, c) {
      var d = this.c;
      return function(e, f) {
          return gi(a, b, e, f, function(a) {
              var b = d.a.b.hasOwnProperty(a.gb());
              b && (c[e] || (c[e] = {}),
              c[e][a.wa.toString()] = a);
              return b
          })
      }
  }
  ;
  k.yg = function() {
      lw.prototype.yg.call(this);
      this.i = null
  }
  ;
  k.zg = function(a, b, c) {
      var d = this.c
        , e = c.b
        , f = a.viewState
        , g = f.projection
        , h = this.a
        , l = h.ia()
        , m = l.Xa(g)
        , n = m.xc(f.resolution)
        , p = m.Qa(n)
        , q = l.be(n, a.pixelRatio, g)
        , r = q[0] / Na(m.eb(n), this.T)[0]
        , u = p / r
        , x = l.Sc(r) * l.$f(g)
        , B = f.center
        , A = a.extent
        , y = tc(m, A, n);
      if (this.l && Aa(this.l, y) && this.o == l.f)
          u = this.C;
      else {
          var N = [y.da - y.ba + 1, y.ga - y.ea + 1]
            , ca = Fa(Math.max(N[0] * q[0], N[1] * q[1]));
          N = u * ca;
          var la = m.Cc(n)
            , fa = la[0] + y.ba * q[0] * u;
          u = la[1] + y.ea * q[1] * u;
          u = [fa, u, fa + N, u + N];
          mw(this, a, ca);
          e.viewport(0, 0, ca, ca);
          e.clearColor(0, 0, 0, 0);
          e.clear(16384);
          e.disable(3042);
          ca = Ju(c, this.I, this.fa);
          c.Wc(ca);
          this.i || (this.i = new Ow(e,ca));
          yu(c, 34962, this.B);
          e.enableVertexAttribArray(this.i.b);
          e.vertexAttribPointer(this.i.b, 2, 5126, !1, 16, 0);
          e.enableVertexAttribArray(this.i.a);
          e.vertexAttribPointer(this.i.a, 2, 5126, !1, 16, 8);
          e.uniform1i(this.i.f, 0);
          c = {};
          c[n] = {};
          var va = this.Rf(l, g, c)
            , ra = h.i();
          ca = !0;
          fa = Pa();
          var T = new xa(0,0,0,0), U, Xb;
          for (U = y.ba; U <= y.da; ++U)
              for (Xb = y.ea; Xb <= y.ga; ++Xb) {
                  la = l.Uc(n, U, Xb, r, g);
                  if (void 0 !== b.extent) {
                      var Ca = m.Ja(la.wa, fa);
                      if (!qb(Ca, b.extent))
                          continue
                  }
                  Ca = la.getState();
                  (Ca = 2 == Ca || 4 == Ca || 3 == Ca && !ra) || (la = Ki(la));
                  Ca = la.getState();
                  if (2 == Ca) {
                      if (d.a.b.hasOwnProperty(la.gb())) {
                          c[n][la.wa.toString()] = la;
                          continue
                      }
                  } else if (4 == Ca || 3 == Ca && !ra)
                      continue;
                  ca = !1;
                  Ca = uc(m, la.wa, va, T, fa);
                  Ca || (la = vc(m, la.wa, T, fa)) && va(n + 1, la)
              }
          b = Object.keys(c).map(Number);
          b.sort(ea);
          va = new Float32Array(4);
          var Cb;
          ra = 0;
          for (T = b.length; ra < T; ++ra)
              for (Cb in U = c[b[ra]],
              U)
                  la = U[Cb],
                  Ca = m.Ja(la.wa, fa),
                  va[0] = 2 * (Ca[2] - Ca[0]) / N,
                  va[1] = 2 * (Ca[3] - Ca[1]) / N,
                  va[2] = 2 * (Ca[0] - u[0]) / N - 1,
                  va[3] = 2 * (Ca[1] - u[1]) / N - 1,
                  e.uniform4fv(this.i.c, va),
                  Jw(d, la, q, x * r),
                  e.drawArrays(5, 0, 4);
          ca ? (this.l = y,
          this.C = u,
          this.o = l.f) : (this.C = this.l = null,
          this.o = -1,
          a.animate = !0)
      }
      mi(a.usedTiles, l, n, y);
      var nc = d.g;
      ni(a, l, m, r, g, A, n, h.c(), function(a) {
          2 != a.getState() || d.a.b.hasOwnProperty(a.gb()) || a.gb()in nc.a || nc.i([a, yc(m, a.wa), m.Qa(a.wa[0]), q, x * r])
      }, this);
      ji(a, l);
      li(a, l);
      e = this.v;
      Ve(e);
      bf(e, (Math.round(B[0] / p) * p - u[0]) / (u[2] - u[0]), (Math.round(B[1] / p) * p - u[1]) / (u[3] - u[1]));
      0 !== f.rotation && $e(e, f.rotation);
      af(e, a.size[0] * f.resolution / (u[2] - u[0]), a.size[1] * f.resolution / (u[3] - u[1]));
      bf(e, -.5, -.5);
      return !0
  }
  ;
  k.xg = function(a, b, c, d) {
      if (this.g) {
          a = Ze(this.v, [a[0] / b.size[0], (b.size[1] - a[1]) / b.size[1]].slice());
          a = [a[0] * this.j, a[1] * this.j];
          b = this.c.getContext().b;
          b.bindFramebuffer(b.FRAMEBUFFER, this.g);
          var e = new Uint8Array(4);
          b.readPixels(a[0], a[1], 1, 1, b.RGBA, b.UNSIGNED_BYTE, e);
          if (0 < e[3])
              return c.call(d, this.a, e)
      }
  }
  ;
  function Qw(a, b) {
      lw.call(this, a, b);
      this.o = !1;
      this.T = -1;
      this.I = NaN;
      this.C = Pa();
      this.l = this.i = this.B = null
  }
  v(Qw, lw);
  Qw.handles = function(a, b) {
      return "webgl" === a && "VECTOR" === b.S()
  }
  ;
  Qw.create = function(a, b) {
      return new Qw(a,b)
  }
  ;
  k = Qw.prototype;
  k.Ti = function(a, b, c) {
      this.l = b;
      var d = a.viewState
        , e = this.i
        , f = a.size
        , g = a.pixelRatio
        , h = this.c.f;
      e && !e.c() && (h.enable(h.SCISSOR_TEST),
      h.scissor(0, 0, f[0] * g, f[1] * g),
      e.Ka(c, d.center, d.resolution, d.rotation, f, g, b.opacity, b.Ue ? a.skippedFeatureUids : {}),
      h.disable(h.SCISSOR_TEST))
  }
  ;
  k.ka = function() {
      var a = this.i;
      if (a) {
          var b = this.c.getContext();
          aw(a, b)();
          this.i = null
      }
      lw.prototype.ka.call(this)
  }
  ;
  k.Fa = function(a, b, c, d, e) {
      if (this.i && this.l) {
          c = this.c.getContext();
          var f = b.viewState
            , g = this.a
            , h = {};
          return this.i.Fa(a, c, f.center, f.resolution, f.rotation, b.size, b.pixelRatio, this.l.opacity, {}, function(a) {
              var b = w(a).toString();
              if (!(b in h))
                  return h[b] = !0,
                  d.call(e, a, g)
          })
      }
  }
  ;
  k.df = function(a, b) {
      if (this.i && this.l) {
          var c = this.c.getContext()
            , d = b.viewState;
          return fw(this.i, a, c, d.resolution, d.rotation, b.pixelRatio, this.l.opacity, b.skippedFeatureUids)
      }
      return !1
  }
  ;
  k.xg = function(a, b, c, d) {
      a = Ze(b.pixelToCoordinateTransform, a.slice());
      if (this.df(a, b))
          return c.call(d, this.a, null)
  }
  ;
  k.Ui = function() {
      hi(this)
  }
  ;
  k.zg = function(a, b, c) {
      function d(a) {
          var b = a.bb();
          if (b)
              var c = b.call(a, m);
          else
              (b = e.bb()) && (c = b(a, m));
          if (c) {
              if (c) {
                  b = !1;
                  if (Array.isArray(c))
                      for (var d = c.length - 1; 0 <= d; --d)
                          b = xj(q, a, c[d], wj(m, n), this.Ui, this) || b;
                  else
                      b = xj(q, a, c, wj(m, n), this.Ui, this) || b;
                  a = b
              } else
                  a = !1;
              this.o = this.o || a
          }
      }
      var e = this.a;
      b = e.ia();
      ki(a.attributions, b.j);
      li(a, b);
      var f = a.viewHints[0]
        , g = a.viewHints[1]
        , h = e.U
        , l = e.ta;
      if (!this.o && !h && f || !l && g)
          return !0;
      g = a.extent;
      h = a.viewState;
      f = h.projection;
      var m = h.resolution
        , n = a.pixelRatio;
      h = e.f;
      var p = e.g;
      l = e.get(Bj);
      void 0 === l && (l = vj);
      g = Ra(g, p * m);
      if (!this.o && this.I == m && this.T == h && this.B == l && Wa(this.C, g))
          return !0;
      this.i && a.postRenderFunctions.push(aw(this.i, c));
      this.o = !1;
      var q = new $v(.5 * m / n,g,e.g);
      b.ce(g, m, f);
      if (l) {
          var r = [];
          b.ac(g, function(a) {
              r.push(a)
          }, this);
          r.sort(l);
          r.forEach(d, this)
      } else
          b.ac(g, d, this);
      bw(q, c);
      this.I = m;
      this.T = h;
      this.B = l;
      this.C = g;
      this.i = q;
      return !0
  }
  ;
  mg("MAP_RENDERER", Fi);
  ng([vi, Hi, Aj, Cj]);
  mg("MAP_RENDERER", Iw);
  ng([Fw, Pw, Qw]);
  function X(a) {
      a = tb({}, a);
      a.controls || (a.controls = xg());
      a.interactions || (a.interactions = Hh());
      G.call(this, a)
  }
  v(X, G);
  function Rw(a, b, c, d) {
      function e() {
          delete window[g];
          f.parentNode.removeChild(f)
      }
      var f = document.createElement("script")
        , g = "olc_" + w(b);
      f.async = !0;
      f.src = a + (-1 == a.indexOf("?") ? "?" : "&") + (d || "callback") + "=" + g;
      var h = setTimeout(function() {
          e();
          c && c()
      }, 1E4);
      window[g] = function(a) {
          clearTimeout(h);
          e();
          b(a)
      }
      ;
      document.getElementsByTagName("head")[0].appendChild(f)
  }
  ;function Sw(a, b, c, d, e, f, g, h, l, m, n) {
      ss.call(this, e, 0);
      this.B = void 0 !== n ? n : !1;
      this.D = g;
      this.C = h;
      this.O = null;
      this.c = b;
      this.l = d;
      this.v = f ? f : e;
      this.a = [];
      this.Fd = null;
      this.g = 0;
      f = d.Ja(this.v);
      h = this.l.G();
      e = this.c.G();
      f = h ? pb(f, h) : f;
      if (0 === jb(f))
          this.state = 4;
      else if ((h = a.G()) && (e ? e = pb(e, h) : e = h),
      d = ow(a, c, nb(f), d.Qa(this.v[0])),
      !isFinite(d) || 0 >= d)
          this.state = 4;
      else if (this.s = new rw(a,c,f,e,d * (void 0 !== m ? m : .5)),
      0 === this.s.c.length)
          this.state = 4;
      else if (this.g = b.xc(d),
      c = tw(this.s),
      e && (a.f ? (c[1] = Da(c[1], e[1], e[3]),
      c[3] = Da(c[3], e[1], e[3])) : c = pb(c, e)),
      jb(c)) {
          a = tc(b, c, this.g);
          for (b = a.ba; b <= a.da; b++)
              for (c = a.ea; c <= a.ga; c++)
                  (m = l(this.g, b, c, g)) && this.a.push(m);
          0 === this.a.length && (this.state = 4)
      } else
          this.state = 4
  }
  v(Sw, ss);
  Sw.prototype.ka = function() {
      1 == this.state && (this.Fd.forEach(Hc),
      this.Fd = null);
      ss.prototype.ka.call(this)
  }
  ;
  Sw.prototype.Y = function() {
      return this.O
  }
  ;
  Sw.prototype.je = function() {
      var a = [];
      this.a.forEach(function(b) {
          b && 2 == b.getState() && a.push({
              extent: this.c.Ja(b.wa),
              image: b.Y()
          })
      }, this);
      this.a.length = 0;
      if (0 === a.length)
          this.state = 3;
      else {
          var b = this.v[0]
            , c = this.l.eb(b)
            , d = "number" === typeof c ? c : c[0];
          c = "number" === typeof c ? c : c[1];
          b = this.l.Qa(b);
          var e = this.c.Qa(this.g)
            , f = this.l.Ja(this.v);
          this.O = qw(d, c, this.D, e, this.c.G(), b, f, this.s, a, this.C, this.B);
          this.state = 2
      }
      this.u()
  }
  ;
  Sw.prototype.load = function() {
      if (0 == this.state) {
          this.state = 1;
          this.u();
          var a = 0;
          this.Fd = [];
          this.a.forEach(function(b) {
              var c = b.getState();
              if (0 == c || 1 == c) {
                  a++;
                  var d = z(b, "change", function() {
                      var c = b.getState();
                      if (2 == c || 3 == c || 4 == c)
                          Hc(d),
                          a--,
                          0 === a && (this.Fd.forEach(Hc),
                          this.Fd = null,
                          this.je())
                  }, this);
                  this.Fd.push(d)
              }
          }, this);
          this.a.forEach(function(a) {
              0 == a.getState() && a.load()
          });
          0 === a && setTimeout(this.je.bind(this), 0)
      }
  }
  ;
  function Tw(a, b) {
      var c = /\{z\}/g
        , d = /\{x\}/g
        , e = /\{y\}/g
        , f = /\{-y\}/g;
      return function(g) {
          if (g)
              return a.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, function() {
                  return (-g[2] - 1).toString()
              }).replace(f, function() {
                  var a = b.a ? b.a[g[0]] : null;
                  wa(a, 55);
                  return (a.ga - a.ea + 1 + g[2]).toString()
              })
      }
  }
  function Uw(a, b) {
      for (var c = a.length, d = Array(c), e = 0; e < c; ++e)
          d[e] = Tw(a[e], b);
      return Vw(d)
  }
  function Vw(a) {
      return 1 === a.length ? a[0] : function(b, c, d) {
          if (b)
              return a[Ja((b[1] << b[0]) + b[2], a.length)](b, c, d)
      }
  }
  function Ww() {}
  function Xw(a) {
      var b = []
        , c = /\{([a-z])-([a-z])\}/.exec(a);
      if (c) {
          var d = c[2].charCodeAt(0), e;
          for (e = c[1].charCodeAt(0); e <= d; ++e)
              b.push(a.replace(c[0], String.fromCharCode(e)));
          return b
      }
      if (c = c = /\{(\d+)-(\d+)\}/.exec(a)) {
          d = parseInt(c[2], 10);
          for (e = parseInt(c[1], 10); e <= d; e++)
              b.push(a.replace(c[0], e.toString()));
          return b
      }
      b.push(a);
      return b
  }
  ;function Yw(a) {
      fj.call(this, a)
  }
  v(Yw, fj);
  Yw.prototype.ld = function(a) {
      for (var b, c; gj(this); ) {
          b = this.a.Hc;
          c = b.wa[0].toString();
          var d;
          if (d = c in a)
              b = b.wa,
              d = za(a[c], b[1], b[2]);
          if (d)
              break;
          else
              Qc(this.pop())
      }
  }
  ;
  function Zw(a) {
      if (0 !== a.c) {
          var b = a.f.fc.split("/").map(Number)[0];
          a.forEach(function(a) {
              if (a.wa[0] !== b) {
                  var c = a.wa;
                  this.remove(c[0] + "/" + c[1] + "/" + c[2]);
                  Qc(a)
              }
          }, a)
      }
  }
  ;function $w(a) {
      Ks.call(this, {
          attributions: a.attributions,
          extent: a.extent,
          logo: a.logo,
          projection: a.projection,
          state: a.state,
          wrapX: a.wrapX
      });
      this.ab = void 0 !== a.opaque ? a.opaque : !1;
      this.Lb = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;
      this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;
      this.a = new Yw(a.cacheSize);
      this.l = [0, 0];
      this.fc = "";
      this.ma = {
          transition: a.transition
      }
  }
  v($w, Ks);
  k = $w.prototype;
  k.Xi = function() {
      return gj(this.a)
  }
  ;
  k.ld = function(a, b) {
      (a = this.ae(a)) && a.ld(b)
  }
  ;
  function gi(a, b, c, d, e) {
      a = a.ae(b);
      if (!a)
          return !1;
      b = !0;
      for (var f, g, h = d.ba; h <= d.da; ++h)
          for (var l = d.ea; l <= d.ga; ++l)
              f = c + "/" + h + "/" + l,
              g = !1,
              a.b.hasOwnProperty(f) && (f = a.get(f),
              (g = 2 === f.getState()) && (g = !1 !== e(f))),
              g || (b = !1);
      return b
  }
  k.$f = function() {
      return 0
  }
  ;
  function ax(a, b) {
      a.fc !== b && (a.fc = b,
      a.u())
  }
  k.fg = function() {
      return this.ab
  }
  ;
  k.cb = function() {
      return this.tileGrid
  }
  ;
  k.Xa = function(a) {
      return this.tileGrid ? this.tileGrid : zc(a)
  }
  ;
  k.ae = function(a) {
      var b = this.c;
      return b && !hc(b, a) ? null : this.a
  }
  ;
  k.Sc = function() {
      return this.Lb
  }
  ;
  k.be = function(a, b, c) {
      c = this.Xa(c);
      b = this.Sc(b);
      a = Na(c.eb(a), this.l);
      return 1 == b ? a : Ma(a, b, this.l)
  }
  ;
  function bx(a, b, c) {
      var d = void 0 !== c ? c : a.c;
      c = a.Xa(d);
      if (a.C && d.c) {
          var e = b;
          b = e[0];
          a = yc(c, e);
          d = Dc(d);
          Ua(d, a) ? b = e : (e = lb(d),
          a[0] += e * Math.ceil((d[0] - a[0]) / e),
          b = c.kg(a, b))
      }
      e = b[0];
      d = b[1];
      a = b[2];
      if (c.minZoom > e || e > c.maxZoom)
          c = !1;
      else {
          var f = c.G();
          c = (c = f ? tc(c, f, e) : c.a ? c.a[e] : null) ? za(c, d, a) : !0
      }
      return c ? b : null
  }
  k.ua = function() {
      this.a.clear();
      this.u()
  }
  ;
  k.ih = sa;
  function cx(a, b) {
      Rc.call(this, a);
      this.tile = b
  }
  v(cx, Rc);
  function dx(a) {
      $w.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          extent: a.extent,
          logo: a.logo,
          opaque: a.opaque,
          projection: a.projection,
          state: a.state,
          tileGrid: a.tileGrid,
          tilePixelRatio: a.tilePixelRatio,
          wrapX: a.wrapX,
          transition: a.transition
      });
      this.tileLoadFunction = a.tileLoadFunction;
      this.tileUrlFunction = this.Lc ? this.Lc.bind(this) : Ww;
      this.urls = null;
      a.urls ? this.tb(a.urls) : a.url && this.ob(a.url);
      a.tileUrlFunction && this.jb(a.tileUrlFunction);
      this.T = {}
  }
  v(dx, $w);
  k = dx.prototype;
  k.vb = function() {
      return this.tileLoadFunction
  }
  ;
  k.wb = function() {
      return this.tileUrlFunction
  }
  ;
  k.xb = function() {
      return this.urls
  }
  ;
  k.Yi = function(a) {
      a = a.target;
      var b = w(a)
        , c = a.getState();
      if (1 == c) {
          this.T[b] = !0;
          var d = "tileloadstart"
      } else
          b in this.T && (delete this.T[b],
          d = 3 == c ? "tileloaderror" : 2 == c || 5 == c ? "tileloadend" : void 0);
      void 0 != d && this.b(new cx(d,a))
  }
  ;
  k.Cb = function(a) {
      this.a.clear();
      this.tileLoadFunction = a;
      this.u()
  }
  ;
  k.jb = function(a, b) {
      this.tileUrlFunction = a;
      Zw(this.a);
      "undefined" !== typeof b ? ax(this, b) : this.u()
  }
  ;
  k.ob = function(a) {
      var b = this.urls = Xw(a);
      this.jb(this.Lc ? this.Lc.bind(this) : Uw(b, this.tileGrid), a)
  }
  ;
  k.tb = function(a) {
      this.urls = a;
      var b = a.join("\n");
      this.jb(this.Lc ? this.Lc.bind(this) : Uw(a, this.tileGrid), b)
  }
  ;
  k.ih = function(a, b, c) {
      a = a + "/" + b + "/" + c;
      this.a.b.hasOwnProperty(a) && this.a.get(a)
  }
  ;
  function ex(a) {
      dx.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          extent: a.extent,
          logo: a.logo,
          opaque: a.opaque,
          projection: a.projection,
          state: a.state,
          tileGrid: a.tileGrid,
          tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : fx,
          tilePixelRatio: a.tilePixelRatio,
          tileUrlFunction: a.tileUrlFunction,
          url: a.url,
          urls: a.urls,
          wrapX: a.wrapX,
          transition: a.transition
      });
      this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;
      this.tileClass = a.tileClass ? a.tileClass : us;
      this.g = {};
      this.v = {};
      this.ub = a.reprojectionErrorThreshold;
      this.I = !1
  }
  v(ex, dx);
  k = ex.prototype;
  k.Xi = function() {
      if (gj(this.a))
          return !0;
      for (var a in this.g)
          if (gj(this.g[a]))
              return !0;
      return !1
  }
  ;
  k.ld = function(a, b) {
      a = this.ae(a);
      this.a.ld(this.a == a ? b : {});
      for (var c in this.g) {
          var d = this.g[c];
          d.ld(d == a ? b : {})
      }
  }
  ;
  k.$f = function(a) {
      return this.c && a && !hc(this.c, a) ? 0 : this.ag()
  }
  ;
  k.ag = function() {
      return 0
  }
  ;
  k.fg = function(a) {
      return this.c && a && !hc(this.c, a) ? !1 : dx.prototype.fg.call(this, a)
  }
  ;
  k.Xa = function(a) {
      var b = this.c;
      return !this.tileGrid || b && !hc(b, a) ? (b = w(a).toString(),
      b in this.v || (this.v[b] = zc(a)),
      this.v[b]) : this.tileGrid
  }
  ;
  k.ae = function(a) {
      var b = this.c;
      if (!b || hc(b, a))
          return this.a;
      a = w(a).toString();
      a in this.g || (this.g[a] = new Yw(this.a.highWaterMark));
      return this.g[a]
  }
  ;
  function gx(a, b, c, d, e, f, g) {
      b = [b, c, d];
      e = (c = bx(a, b, f)) ? a.tileUrlFunction(c, e, f) : void 0;
      e = new a.tileClass(b,void 0 !== e ? 0 : 4,void 0 !== e ? e : "",a.crossOrigin,a.tileLoadFunction,a.ma);
      e.key = g;
      z(e, "change", a.Yi, a);
      return e
  }
  k.Uc = function(a, b, c, d, e) {
      if (this.c && e && !hc(this.c, e)) {
          var f = this.ae(e);
          c = [a, b, c];
          var g;
          a = c[0] + "/" + c[1] + "/" + c[2];
          f.b.hasOwnProperty(a) && (g = f.get(a));
          b = this.fc;
          if (g && g.key == b)
              return g;
          var h = this.c
            , l = this.Xa(h)
            , m = this.Xa(e)
            , n = bx(this, c, e);
          d = new Sw(h,l,e,m,c,n,this.Sc(d),this.ag(),function(a, b, c, d) {
              return hx(this, a, b, c, d, h)
          }
          .bind(this),this.ub,this.I);
          d.key = b;
          g ? (d.f = g,
          ts(d),
          f.replace(a, d)) : f.set(a, d);
          return d
      }
      return hx(this, a, b, c, d, e)
  }
  ;
  function hx(a, b, c, d, e, f) {
      var g = b + "/" + c + "/" + d
        , h = a.fc;
      if (a.a.b.hasOwnProperty(g)) {
          var l = a.a.get(g);
          if (l.key != h) {
              var m = l;
              l = gx(a, b, c, d, e, f, h);
              0 == m.getState() ? l.f = m.f : l.f = m;
              ts(l);
              a.a.replace(g, l)
          }
      } else
          l = gx(a, b, c, d, e, f, h),
          a.a.set(g, l);
      return l
  }
  k.Pb = function(a) {
      if (this.I != a) {
          this.I = a;
          for (var b in this.g)
              this.g[b].clear();
          this.u()
      }
  }
  ;
  k.Qb = function(a, b) {
      if (a = Zb(a))
          a = w(a).toString(),
          a in this.v || (this.v[a] = b)
  }
  ;
  function fx(a, b) {
      a.Y().src = b
  }
  ;function ix(a) {
      this.i = void 0 !== a.hidpi ? a.hidpi : !1;
      ex.call(this, {
          cacheSize: a.cacheSize,
          crossOrigin: "anonymous",
          opaque: !0,
          projection: Zb("EPSG:3857"),
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          state: "loading",
          tileLoadFunction: a.tileLoadFunction,
          tilePixelRatio: this.i ? 2 : 1,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
          transition: a.transition
      });
      this.U = void 0 !== a.culture ? a.culture : "en-us";
      this.B = void 0 !== a.maxZoom ? a.maxZoom : -1;
      this.o = a.key;
      this.s = a.imagerySet;
      Rw("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + this.s + "?uriScheme=https&include=ImageryProviders&key=" + this.o, this.Va.bind(this), void 0, "jsonp")
  }
  v(ix, ex);
  var jx = new Fc({
      html: '<a class="ol-attribution-bing-tos" href="https://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'
  });
  ix.prototype.fa = function() {
      return this.o
  }
  ;
  ix.prototype.oa = function() {
      return this.s
  }
  ;
  ix.prototype.Va = function(a) {
      if (200 != a.statusCode || "OK" != a.statusDescription || "ValidCredentials" != a.authenticationResultCode || 1 != a.resourceSets.length || 1 != a.resourceSets[0].resources.length)
          Ms(this, "error");
      else {
          var b = a.brandLogoUri;
          -1 == b.indexOf("https") && (b = b.replace("http", "https"));
          var c = a.resourceSets[0].resources[0]
            , d = -1 == this.B ? c.zoomMax : this.B;
          a = Dc(this.c);
          var e = Bc({
              extent: a,
              minZoom: c.zoomMin,
              maxZoom: d,
              tileSize: (c.imageWidth == c.imageHeight ? c.imageWidth : [c.imageWidth, c.imageHeight]) / (this.i ? 2 : 1)
          });
          this.tileGrid = e;
          var f = this.U
            , g = this.i;
          this.tileUrlFunction = Vw(c.imageUrlSubdomains.map(function(a) {
              var b = [0, 0, 0]
                , d = c.imageUrl.replace("{subdomain}", a).replace("{culture}", f);
              return function(a) {
                  if (a)
                      return oc(a[0], a[1], -a[2] - 1, b),
                      a = d,
                      g && (a += "&dpi=d1&device=mobile"),
                      a.replace("{quadkey}", pc(b))
              }
          }));
          if (c.imageryProviders) {
              var h = $b(Zb("EPSG:4326"), this.c);
              a = c.imageryProviders.map(function(a) {
                  var b = a.attribution
                    , c = {};
                  a.coverageAreas.forEach(function(a) {
                      var b = a.zoomMin
                        , f = Math.min(a.zoomMax, d);
                      a = a.bbox;
                      a = sb([a[1], a[0], a[3], a[2]], h);
                      var g;
                      for (g = b; g <= f; ++g) {
                          var l = g.toString();
                          b = tc(e, a, g);
                          l in c ? c[l].push(b) : c[l] = [b]
                      }
                  });
                  return new Fc({
                      html: b,
                      tileRanges: c
                  })
              });
              a.push(jx);
              this.va(a)
          }
          this.D = b;
          Ms(this, "ready")
      }
  }
  ;
  function kx(a) {
      a = a || {};
      var b = void 0 !== a.projection ? a.projection : "EPSG:3857"
        , c = void 0 !== a.tileGrid ? a.tileGrid : Bc({
          extent: Dc(b),
          maxZoom: a.maxZoom,
          minZoom: a.minZoom,
          tileSize: a.tileSize
      });
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          opaque: a.opaque,
          projection: b,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileGrid: c,
          tileLoadFunction: a.tileLoadFunction,
          tilePixelRatio: a.tilePixelRatio,
          tileUrlFunction: a.tileUrlFunction,
          url: a.url,
          urls: a.urls,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
          transition: a.transition
      })
  }
  v(kx, ex);
  function lx(a) {
      this.s = a.account;
      this.B = a.map || "";
      this.i = a.config || {};
      this.o = {};
      kx.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 18,
          minZoom: a.minZoom,
          projection: a.projection,
          state: "loading",
          wrapX: a.wrapX
      });
      mx(this)
  }
  v(lx, kx);
  k = lx.prototype;
  k.Uk = function() {
      return this.i
  }
  ;
  k.wq = function(a) {
      tb(this.i, a);
      mx(this)
  }
  ;
  k.Zp = function(a) {
      this.i = a || {};
      mx(this)
  }
  ;
  function mx(a) {
      var b = JSON.stringify(a.i);
      if (a.o[b])
          nx(a, a.o[b]);
      else {
          var c = "https://" + a.s + ".carto.com/api/v1/map";
          a.B && (c += "/named/" + a.B);
          var d = new XMLHttpRequest;
          d.addEventListener("load", a.Ll.bind(a, b));
          d.addEventListener("error", a.Kl.bind(a));
          d.open("POST", c);
          d.setRequestHeader("Content-type", "application/json");
          d.send(JSON.stringify(a.i))
      }
  }
  k.Ll = function(a, b) {
      b = b.target;
      if (!b.status || 200 <= b.status && 300 > b.status) {
          try {
              var c = JSON.parse(b.responseText)
          } catch (d) {
              Ms(this, "error");
              return
          }
          nx(this, c);
          this.o[a] = c;
          Ms(this, "ready")
      } else
          Ms(this, "error")
  }
  ;
  k.Kl = function() {
      Ms(this, "error")
  }
  ;
  function nx(a, b) {
      a.ob("https://" + b.cdn_url.https + "/" + a.s + "/api/v1/map/" + b.layergroupid + "/{z}/{x}/{y}.png")
  }
  ;function Y(a) {
      S.call(this, {
          attributions: a.attributions,
          extent: a.extent,
          logo: a.logo,
          projection: a.projection,
          wrapX: a.wrapX
      });
      this.resolution = void 0;
      this.distance = void 0 !== a.distance ? a.distance : 20;
      this.features = [];
      this.geometryFunction = a.geometryFunction || function(a) {
          a = a.W();
          wa(a instanceof D, 10);
          return a
      }
      ;
      this.source = a.source;
      this.source.J("change", Y.prototype.ua, this)
  }
  v(Y, S);
  k = Y.prototype;
  k.ko = function() {
      return this.distance
  }
  ;
  k.lo = function() {
      return this.source
  }
  ;
  k.ce = function(a, b, c) {
      this.source.ce(a, b, c);
      b !== this.resolution && (this.clear(),
      this.resolution = b,
      ox(this),
      this.Ic(this.features))
  }
  ;
  k.$p = function(a) {
      this.distance = a;
      this.ua()
  }
  ;
  k.ua = function() {
      this.clear();
      ox(this);
      this.Ic(this.features);
      S.prototype.ua.call(this)
  }
  ;
  function ox(a) {
      if (void 0 !== a.resolution) {
          a.features.length = 0;
          for (var b = Pa(), c = a.distance * a.resolution, d = a.source.fe(), e = {}, f = 0, g = d.length; f < g; f++) {
              var h = d[f];
              w(h).toString()in e || !(h = a.geometryFunction(h)) || (h = h.V(),
              $a(h, b),
              Ra(b, c, b),
              h = a.source.Zf(b),
              h = h.filter(function(a) {
                  a = w(a).toString();
                  return a in e ? !1 : e[a] = !0
              }),
              a.features.push(px(a, h)))
          }
      }
  }
  function px(a, b) {
      for (var c = [0, 0], d = b.length - 1; 0 <= d; --d) {
          var e = a.geometryFunction(b[d]);
          e ? ye(c, e.V()) : b.splice(d, 1)
      }
      Fe(c, 1 / b.length);
      a = new Kk(new D(c));
      a.set("features", b);
      return a
  }
  ;function qx(a, b) {
      var c = [];
      Object.keys(b).forEach(function(a) {
          null !== b[a] && void 0 !== b[a] && c.push(a + "=" + encodeURIComponent(b[a]))
      });
      var d = c.join("&");
      a = a.replace(/[?&]$/, "");
      a = -1 === a.indexOf("?") ? a + "?" : a + "&";
      return a + d
  }
  ;function rx(a) {
      a = a || {};
      vw.call(this, {
          attributions: a.attributions,
          logo: a.logo,
          projection: a.projection,
          resolutions: a.resolutions
      });
      this.T = void 0 !== a.crossOrigin ? a.crossOrigin : null;
      this.U = void 0 !== a.hidpi ? a.hidpi : !0;
      this.a = a.url;
      this.g = a.imageLoadFunction ? a.imageLoadFunction : Bw;
      this.v = a.params || {};
      this.N = null;
      this.o = [0, 0];
      this.I = 0;
      this.B = void 0 !== a.ratio ? a.ratio : 1.5
  }
  v(rx, vw);
  k = rx.prototype;
  k.no = function() {
      return this.v
  }
  ;
  k.Qc = function(a, b, c, d) {
      if (void 0 === this.a)
          return null;
      b = ww(this, b);
      c = this.U ? c : 1;
      var e = this.N;
      if (e && this.I == this.f && e.resolution == b && e.a == c && Wa(e.G(), a))
          return e;
      e = {
          F: "image",
          FORMAT: "PNG32",
          TRANSPARENT: !0
      };
      tb(e, this.v);
      a = a.slice();
      var f = (a[0] + a[2]) / 2
        , g = (a[1] + a[3]) / 2;
      if (1 != this.B) {
          var h = this.B * lb(a) / 2
            , l = this.B * mb(a) / 2;
          a[0] = f - h;
          a[1] = g - l;
          a[2] = f + h;
          a[3] = g + l
      }
      h = b / c;
      l = Math.ceil(lb(a) / h);
      var m = Math.ceil(mb(a) / h);
      a[0] = f - h * l / 2;
      a[2] = f + h * l / 2;
      a[1] = g - h * m / 2;
      a[3] = g + h * m / 2;
      this.o[0] = l;
      this.o[1] = m;
      f = a;
      g = this.o;
      h = c;
      d = d.sb.split(":").pop();
      e.SIZE = g[0] + "," + g[1];
      e.BBOX = f.join(",");
      e.BBOXSR = d;
      e.IMAGESR = d;
      e.DPI = Math.round(90 * h);
      d = this.a;
      f = d.replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage");
      f == d && wa(!1, 50);
      e = qx(f, e);
      this.N = new qs(a,b,c,this.j,e,this.T,this.g);
      this.I = this.f;
      z(this.N, "change", this.l, this);
      return this.N
  }
  ;
  k.mo = function() {
      return this.g
  }
  ;
  k.oo = function() {
      return this.a
  }
  ;
  k.po = function(a) {
      this.N = null;
      this.g = a;
      this.u()
  }
  ;
  k.qo = function(a) {
      a != this.a && (this.a = a,
      this.N = null,
      this.u())
  }
  ;
  k.ro = function(a) {
      tb(this.v, a);
      this.N = null;
      this.u()
  }
  ;
  function sx(a) {
      vw.call(this, {
          projection: a.projection,
          resolutions: a.resolutions
      });
      this.T = void 0 !== a.crossOrigin ? a.crossOrigin : null;
      this.o = void 0 !== a.displayDpi ? a.displayDpi : 96;
      this.g = a.params || {};
      this.I = a.url;
      this.a = a.imageLoadFunction ? a.imageLoadFunction : Bw;
      this.U = void 0 !== a.hidpi ? a.hidpi : !0;
      this.ma = void 0 !== a.metersPerUnit ? a.metersPerUnit : 1;
      this.v = void 0 !== a.ratio ? a.ratio : 1;
      this.oa = void 0 !== a.useOverlay ? a.useOverlay : !1;
      this.N = null;
      this.B = 0
  }
  v(sx, vw);
  k = sx.prototype;
  k.to = function() {
      return this.g
  }
  ;
  k.Qc = function(a, b, c) {
      b = ww(this, b);
      c = this.U ? c : 1;
      var d = this.N;
      if (d && this.B == this.f && d.resolution == b && d.a == c && Wa(d.G(), a))
          return d;
      1 != this.v && (a = a.slice(),
      rb(a, this.v));
      var e = [lb(a) / b * c, mb(a) / b * c];
      if (void 0 !== this.I) {
          d = this.I;
          var f = nb(a)
            , g = this.ma
            , h = lb(a)
            , l = mb(a)
            , m = e[0]
            , n = e[1]
            , p = .0254 / this.o;
          e = {
              OPERATION: this.oa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
              VERSION: "2.0.0",
              LOCALE: "en",
              CLIENTAGENT: "ol.source.ImageMapGuide source",
              CLIP: "1",
              SETDISPLAYDPI: this.o,
              SETDISPLAYWIDTH: Math.round(e[0]),
              SETDISPLAYHEIGHT: Math.round(e[1]),
              SETVIEWSCALE: n * h > m * l ? h * g / (m * p) : l * g / (n * p),
              SETVIEWCENTERX: f[0],
              SETVIEWCENTERY: f[1]
          };
          tb(e, this.g);
          d = qx(d, e);
          d = new qs(a,b,c,this.j,d,this.T,this.a);
          z(d, "change", this.l, this)
      } else
          d = null;
      this.N = d;
      this.B = this.f;
      return d
  }
  ;
  k.so = function() {
      return this.a
  }
  ;
  k.vo = function(a) {
      tb(this.g, a);
      this.u()
  }
  ;
  k.uo = function(a) {
      this.N = null;
      this.a = a;
      this.u()
  }
  ;
  function tx(a) {
      var b = a.imageExtent
        , c = void 0 !== a.crossOrigin ? a.crossOrigin : null
        , d = a.imageLoadFunction ? a.imageLoadFunction : Bw;
      vw.call(this, {
          attributions: a.attributions,
          logo: a.logo,
          projection: Zb(a.projection)
      });
      this.N = new qs(b,void 0,1,this.j,a.url,c,d);
      this.a = a.imageSize ? a.imageSize : null;
      z(this.N, "change", this.l, this)
  }
  v(tx, vw);
  tx.prototype.Qc = function(a) {
      return qb(a, this.N.G()) ? this.N : null
  }
  ;
  tx.prototype.l = function(a) {
      if (2 == this.N.getState()) {
          var b = this.N.G()
            , c = this.N.Y();
          if (this.a) {
              var d = this.a[0];
              var e = this.a[1]
          } else
              d = c.width,
              e = c.height;
          b = Math.ceil(lb(b) / (mb(b) / e));
          if (b != d) {
              b = dg(b, e);
              var f = b.canvas;
              b.drawImage(c, 0, 0, d, e, 0, 0, f.width, f.height);
              this.N.gh(f)
          }
      }
      vw.prototype.l.call(this, a)
  }
  ;
  function ux(a) {
      a = a || {};
      vw.call(this, {
          attributions: a.attributions,
          logo: a.logo,
          projection: a.projection,
          resolutions: a.resolutions
      });
      this.ma = void 0 !== a.crossOrigin ? a.crossOrigin : null;
      this.g = a.url;
      this.v = a.imageLoadFunction ? a.imageLoadFunction : Bw;
      this.a = a.params || {};
      this.o = !0;
      vx(this);
      this.U = a.serverType;
      this.oa = void 0 !== a.hidpi ? a.hidpi : !0;
      this.N = null;
      this.B = [0, 0];
      this.T = 0;
      this.I = void 0 !== a.ratio ? a.ratio : 1.5
  }
  v(ux, vw);
  var wx = [101, 101];
  k = ux.prototype;
  k.Ao = function(a, b, c, d) {
      if (void 0 !== this.g) {
          var e = ob(a, b, 0, wx)
            , f = {
              SERVICE: "WMS",
              VERSION: "1.3.0",
              REQUEST: "GetFeatureInfo",
              FORMAT: "image/png",
              TRANSPARENT: !0,
              QUERY_LAYERS: this.a.LAYERS
          };
          tb(f, this.a, d);
          d = Math.floor((e[3] - a[1]) / b);
          f[this.o ? "I" : "X"] = Math.floor((a[0] - e[0]) / b);
          f[this.o ? "J" : "Y"] = d;
          return xx(this, e, wx, 1, Zb(c), f)
      }
  }
  ;
  k.Co = function() {
      return this.a
  }
  ;
  k.Qc = function(a, b, c, d) {
      if (void 0 === this.g)
          return null;
      b = ww(this, b);
      1 == c || this.oa && void 0 !== this.U || (c = 1);
      var e = b / c
        , f = nb(a)
        , g = ob(f, e, 0, [Math.ceil(lb(a) / e), Math.ceil(mb(a) / e)]);
      a = ob(f, e, 0, [Math.ceil(this.I * lb(a) / e), Math.ceil(this.I * mb(a) / e)]);
      if ((f = this.N) && this.T == this.f && f.resolution == b && f.a == c && Wa(f.G(), g))
          return f;
      g = {
          SERVICE: "WMS",
          VERSION: "1.3.0",
          REQUEST: "GetMap",
          FORMAT: "image/png",
          TRANSPARENT: !0
      };
      tb(g, this.a);
      this.B[0] = Math.round(lb(a) / e);
      this.B[1] = Math.round(mb(a) / e);
      d = xx(this, a, this.B, c, d, g);
      this.N = new qs(a,b,c,this.j,d,this.ma,this.v);
      this.T = this.f;
      z(this.N, "change", this.l, this);
      return this.N
  }
  ;
  k.Bo = function() {
      return this.v
  }
  ;
  function xx(a, b, c, d, e, f) {
      wa(void 0 !== a.g, 9);
      f[a.o ? "CRS" : "SRS"] = e.sb;
      "STYLES"in a.a || (f.STYLES = "");
      if (1 != d)
          switch (a.U) {
          case "geoserver":
              d = 90 * d + .5 | 0;
              f.FORMAT_OPTIONS = "FORMAT_OPTIONS"in f ? f.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
              break;
          case "mapserver":
              f.MAP_RESOLUTION = 90 * d;
              break;
          case "carmentaserver":
          case "qgis":
              f.DPI = 90 * d;
              break;
          default:
              wa(!1, 8)
          }
      f.WIDTH = c[0];
      f.HEIGHT = c[1];
      c = e.b;
      var g;
      a.o && "ne" == c.substr(0, 2) ? g = [b[1], b[0], b[3], b[2]] : g = b;
      f.BBOX = g.join(",");
      return qx(a.g, f)
  }
  k.Do = function() {
      return this.g
  }
  ;
  k.Eo = function(a) {
      this.N = null;
      this.v = a;
      this.u()
  }
  ;
  k.Fo = function(a) {
      a != this.g && (this.g = a,
      this.N = null,
      this.u())
  }
  ;
  k.Go = function(a) {
      tb(this.a, a);
      vx(this);
      this.N = null;
      this.u()
  }
  ;
  function vx(a) {
      a.o = 0 <= xe(a.a.VERSION || "1.3.0")
  }
  ;function yx(a) {
      a = a || {};
      var b;
      void 0 !== a.attributions ? b = a.attributions : b = [zx];
      kx.call(this, {
          attributions: b,
          cacheSize: a.cacheSize,
          crossOrigin: void 0 !== a.crossOrigin ? a.crossOrigin : "anonymous",
          opaque: void 0 !== a.opaque ? a.opaque : !0,
          maxZoom: void 0 !== a.maxZoom ? a.maxZoom : 19,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileLoadFunction: a.tileLoadFunction,
          url: void 0 !== a.url ? a.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          wrapX: a.wrapX
      })
  }
  v(yx, kx);
  var zx = new Fc({
      html: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
  });
  Op.nf = {};
  Op.nf.Hf = function() {}
  ;
  (function(a) {
      function b(a, b, c) {
          if (g)
              return new ImageData(a,b,c);
          b = h.createImageData(b, c);
          b.data.set(a);
          return b
      }
      function c(a) {
          var b = !0;
          try {
              new ImageData(10,10)
          } catch (n) {
              b = !1
          }
          return function(c) {
              var d = c.buffers
                , e = c.meta
                , f = c.width
                , g = c.height
                , h = d.length
                , l = d[0].byteLength;
              if (c.imageOps) {
                  l = Array(h);
                  for (c = 0; c < h; ++c) {
                      var m = c;
                      var n = new Uint8ClampedArray(d[c]);
                      var N = f
                        , ca = g;
                      n = b ? new ImageData(n,N,ca) : {
                          data: n,
                          width: N,
                          height: ca
                      };
                      l[m] = n
                  }
                  f = a(l, e).data
              } else {
                  f = new Uint8ClampedArray(l);
                  g = Array(h);
                  m = Array(h);
                  for (c = 0; c < h; ++c)
                      g[c] = new Uint8ClampedArray(d[c]),
                      m[c] = [0, 0, 0, 0];
                  for (d = 0; d < l; d += 4) {
                      for (c = 0; c < h; ++c)
                          n = g[c],
                          m[c][0] = n[d],
                          m[c][1] = n[d + 1],
                          m[c][2] = n[d + 2],
                          m[c][3] = n[d + 3];
                      c = a(m, e);
                      f[d] = c[0];
                      f[d + 1] = c[1];
                      f[d + 2] = c[2];
                      f[d + 3] = c[3]
                  }
              }
              return f.buffer
          }
      }
      function d(a, b) {
          var d = Object.keys(a.lib || {}).map(function(b) {
              return "var " + b + " = " + a.lib[b].toString() + ";"
          }).concat(["var __minion__ = (" + c.toString() + ")(", a.operation.toString(), ");", 'self.addEventListener("message", function(event) {', "  var buffer = __minion__(event.data);", "  self.postMessage({buffer: buffer, meta: event.data.meta}, [buffer]);", "});"]);
          d = URL.createObjectURL(new Blob(d,{
              type: "text/javascript"
          }));
          d = new Worker(d);
          d.addEventListener("message", b);
          return d
      }
      function e(a, b) {
          var d = c(a.operation);
          return {
              postMessage: function(a) {
                  setTimeout(function() {
                      b({
                          data: {
                              buffer: d(a),
                              meta: a.meta
                          }
                      })
                  }, 0)
              }
          }
      }
      function f(a) {
          this.Jf = !!a.im;
          var b;
          0 === a.threads ? b = 0 : this.Jf ? b = 1 : b = a.threads || 1;
          var c = [];
          if (b)
              for (var f = 0; f < b; ++f)
                  c[f] = d(a, this.vh.bind(this, f));
          else
              c[0] = e(a, this.vh.bind(this, 0));
          this.ze = c;
          this.Kd = [];
          this.tk = a.zp || Infinity;
          this.ye = 0;
          this.hd = {};
          this.Kf = null
      }
      var g = !0;
      try {
          new ImageData(10,10)
      } catch (l) {
          g = !1
      }
      var h = document.createElement("canvas").getContext("2d");
      f.prototype.xp = function(a, b, c) {
          this.rk({
              inputs: a,
              fi: b,
              callback: c
          });
          this.sh()
      }
      ;
      f.prototype.rk = function(a) {
          for (this.Kd.push(a); this.Kd.length > this.tk; )
              this.Kd.shift().callback(null, null)
      }
      ;
      f.prototype.sh = function() {
          if (0 === this.ye && 0 < this.Kd.length) {
              var a = this.Kf = this.Kd.shift()
                , b = a.inputs[0].width
                , c = a.inputs[0].height
                , d = a.inputs.map(function(a) {
                  return a.data.buffer
              })
                , e = this.ze.length;
              this.ye = e;
              if (1 === e)
                  this.ze[0].postMessage({
                      buffers: d,
                      meta: a.fi,
                      imageOps: this.Jf,
                      width: b,
                      height: c
                  }, d);
              else
                  for (var f = 4 * Math.ceil(a.inputs[0].data.length / 4 / e), g = 0; g < e; ++g) {
                      for (var h = g * f, B = [], A = 0, y = d.length; A < y; ++A)
                          B.push(d[g].slice(h, h + f));
                      this.ze[g].postMessage({
                          buffers: B,
                          meta: a.fi,
                          imageOps: this.Jf,
                          width: b,
                          height: c
                      }, B)
                  }
          }
      }
      ;
      f.prototype.vh = function(a, b) {
          this.Mq || (this.hd[a] = b.data,
          --this.ye,
          0 === this.ye && this.uk())
      }
      ;
      f.prototype.uk = function() {
          var a = this.Kf
            , c = this.ze.length;
          if (1 === c) {
              var d = new Uint8ClampedArray(this.hd[0].buffer);
              var e = this.hd[0].meta
          } else {
              var f = a.inputs[0].data.length;
              d = new Uint8ClampedArray(f);
              e = Array(f);
              f = 4 * Math.ceil(f / 4 / c);
              for (var g = 0; g < c; ++g) {
                  var h = g * f;
                  d.set(new Uint8ClampedArray(this.hd[g].buffer), h);
                  e[g] = this.hd[g].meta
              }
          }
          this.Kf = null;
          this.hd = {};
          a.callback(null, b(d, a.inputs[0].width, a.inputs[0].height), e);
          this.sh()
      }
      ;
      a["default"] = {
          Hf: f
      };
      a.Hf = f
  }
  )(Op.nf = Op.nf || {});
  function Ax(a) {
      this.B = null;
      this.oa = void 0 !== a.operationType ? a.operationType : "pixel";
      this.Va = void 0 !== a.threads ? a.threads : 1;
      this.g = Bx(a.sources);
      for (var b = 0, c = this.g.length; b < c; ++b)
          z(this.g[b], "change", this.u, this);
      this.U = new me(function() {
          return 1
      }
      ,this.u.bind(this));
      b = Cx(this.g);
      c = {};
      for (var d = 0, e = b.length; d < e; ++d)
          c[w(b[d].layer)] = b[d];
      this.a = null;
      this.I = {
          animate: !1,
          attributions: {},
          coordinateToPixelTransform: Ue(),
          extent: null,
          focus: null,
          index: 0,
          layerStates: c,
          layerStatesArray: b,
          logos: {},
          pixelRatio: 1,
          pixelToCoordinateTransform: Ue(),
          postRenderFunctions: [],
          size: [0, 0],
          skippedFeatureUids: {},
          tileQueue: this.U,
          time: Date.now(),
          usedTiles: {},
          viewState: {
              rotation: 0
          },
          viewHints: [],
          wantedTiles: {}
      };
      vw.call(this, {});
      a.operation && this.v(a.operation, a.lib)
  }
  v(Ax, vw);
  Ax.prototype.v = function(a, b) {
      this.B = new Op.nf.Hf({
          operation: a,
          im: "image" === this.oa,
          zp: 1,
          lib: b,
          threads: this.Va
      });
      this.u()
  }
  ;
  Ax.prototype.Y = function(a, b, c, d) {
      c = !0;
      for (var e, f = 0, g = this.g.length; f < g; ++f)
          if (e = this.g[f].a.ia(),
          "ready" !== e.getState()) {
              c = !1;
              break
          }
      if (!c)
          return null;
      c = tb({}, this.I);
      c.viewState = tb({}, c.viewState);
      e = nb(a);
      c.extent = a.slice();
      c.focus = e;
      c.size[0] = Math.round(lb(a) / b);
      c.size[1] = Math.round(mb(a) / b);
      c.time = Date.now();
      c.animate = !1;
      f = c.viewState;
      f.center = e;
      f.projection = d;
      f.resolution = b;
      this.o = c;
      this.a && (d = this.a.resolution,
      e = this.a.G(),
      b === d && cb(a, e) || (this.a = null));
      if (!this.a || this.f !== this.T)
          a: {
              a = this.o;
              d = this.g.length;
              b = Array(d);
              for (e = 0; e < d; ++e) {
                  f = this.g[e];
                  g = a;
                  var h = a.layerStatesArray[e];
                  if (f.Ad(g, h)) {
                      var l = g.size[0]
                        , m = g.size[1];
                      if (Dx) {
                          var n = Dx.canvas;
                          n.width !== l || n.height !== m ? Dx = dg(l, m) : Dx.clearRect(0, 0, l, m)
                      } else
                          Dx = dg(l, m);
                      f.v(g, h, Dx);
                      f = Dx.getImageData(0, 0, l, m)
                  } else
                      f = null;
                  if (f)
                      b[e] = f;
                  else
                      break a
              }
              d = {};
              this.b(new Ex(Fx,a,d));
              this.B.xp(b, d, this.ma.bind(this, a))
          }
      ne(c.tileQueue, 16, 16);
      c.animate && requestAnimationFrame(this.u.bind(this));
      return this.a
  }
  ;
  Ax.prototype.ma = function(a, b, c, d) {
      if (!b && c) {
          b = a.extent;
          var e = a.viewState.resolution;
          if (e === this.o.viewState.resolution && cb(b, this.o.extent)) {
              if (this.a)
                  var f = this.a.Y().getContext("2d");
              else
                  f = dg(Math.round(lb(b) / e), Math.round(mb(b) / e)),
                  this.a = new rs(b,e,1,this.j,f.canvas);
              f.putImageData(c, 0, 0);
              this.u();
              this.T = this.f;
              this.b(new Ex(Gx,a,d))
          }
      }
  }
  ;
  var Dx = null;
  function Cx(a) {
      return a.map(function(a) {
          return hg(a.a)
      })
  }
  function Bx(a) {
      for (var b = a.length, c = Array(b), d = 0; d < b; ++d) {
          var e = d
            , f = a[d]
            , g = null;
          f instanceof $w ? (f = new ou({
              source: f
          }),
          g = new Hi(f)) : f instanceof vw && (f = new nu({
              source: f
          }),
          g = new vi(f));
          c[e] = g
      }
      return c
  }
  function Ex(a, b, c) {
      Rc.call(this, a);
      this.extent = b.extent;
      this.resolution = b.viewState.resolution / b.pixelRatio;
      this.data = c
  }
  v(Ex, Rc);
  Ax.prototype.Qc = function() {
      return null
  }
  ;
  var Fx = "beforeoperations"
    , Gx = "afteroperations";
  function Hx(a) {
      var b = a.layer.indexOf("-");
      b = Ix[-1 == b ? a.layer : a.layer.slice(0, b)];
      var c = Jx[a.layer];
      kx.call(this, {
          attributions: Kx,
          cacheSize: a.cacheSize,
          crossOrigin: "anonymous",
          maxZoom: void 0 != a.maxZoom ? a.maxZoom : b.maxZoom,
          minZoom: void 0 != a.minZoom ? a.minZoom : b.minZoom,
          opaque: c.opaque,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileLoadFunction: a.tileLoadFunction,
          url: void 0 !== a.url ? a.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + a.layer + "/{z}/{x}/{y}." + c.Nb,
          wrapX: a.wrapX
      })
  }
  v(Hx, kx);
  var Kx = [new Fc({
      html: 'Map tiles by <a href="https://stamen.com/">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'
  }), zx]
    , Jx = {
      terrain: {
          Nb: "jpg",
          opaque: !0
      },
      "terrain-background": {
          Nb: "jpg",
          opaque: !0
      },
      "terrain-labels": {
          Nb: "png",
          opaque: !1
      },
      "terrain-lines": {
          Nb: "png",
          opaque: !1
      },
      "toner-background": {
          Nb: "png",
          opaque: !0
      },
      toner: {
          Nb: "png",
          opaque: !0
      },
      "toner-hybrid": {
          Nb: "png",
          opaque: !1
      },
      "toner-labels": {
          Nb: "png",
          opaque: !1
      },
      "toner-lines": {
          Nb: "png",
          opaque: !1
      },
      "toner-lite": {
          Nb: "png",
          opaque: !0
      },
      watercolor: {
          Nb: "jpg",
          opaque: !0
      }
  }
    , Ix = {
      terrain: {
          minZoom: 4,
          maxZoom: 18
      },
      toner: {
          minZoom: 0,
          maxZoom: 20
      },
      watercolor: {
          minZoom: 1,
          maxZoom: 16
      }
  };
  function Lx(a) {
      a = a || {};
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          projection: a.projection,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileGrid: a.tileGrid,
          tileLoadFunction: a.tileLoadFunction,
          url: a.url,
          urls: a.urls,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
          transition: a.transition
      });
      this.i = a.params || {};
      this.o = Pa();
      ax(this, Mx(this))
  }
  v(Lx, ex);
  function Mx(a) {
      var b = 0, c = [], d;
      for (d in a.i)
          c[b++] = d + "-" + a.i[d];
      return c.join("/")
  }
  Lx.prototype.s = function() {
      return this.i
  }
  ;
  Lx.prototype.Sc = function(a) {
      return a
  }
  ;
  Lx.prototype.Lc = function(a, b, c) {
      var d = this.tileGrid;
      d || (d = this.Xa(c));
      if (!(d.b.length <= a[0])) {
          var e = d.Ja(a, this.o)
            , f = Na(d.eb(a[0]), this.l);
          1 != b && (f = Ma(f, b, this.l));
          d = {
              F: "image",
              FORMAT: "PNG32",
              TRANSPARENT: !0
          };
          tb(d, this.i);
          var g = this.urls;
          g ? (c = c.sb.split(":").pop(),
          d.SIZE = f[0] + "," + f[1],
          d.BBOX = e.join(","),
          d.BBOXSR = c,
          d.IMAGESR = c,
          d.DPI = Math.round(d.DPI ? d.DPI * b : 90 * b),
          a = (1 == g.length ? g[0] : g[Ja((a[1] << a[0]) + a[2], g.length)]).replace(/MapServer\/?$/, "MapServer/export").replace(/ImageServer\/?$/, "ImageServer/exportImage"),
          a = qx(a, d)) : a = void 0;
          return a
      }
  }
  ;
  Lx.prototype.B = function(a) {
      tb(this.i, a);
      ax(this, Mx(this))
  }
  ;
  function Nx(a) {
      $w.call(this, {
          opaque: !1,
          projection: a.projection,
          tileGrid: a.tileGrid,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0
      })
  }
  v(Nx, $w);
  Nx.prototype.Uc = function(a, b, c) {
      var d = a + "/" + b + "/" + c;
      if (this.a.b.hasOwnProperty(d))
          return this.a.get(d);
      var e = Na(this.tileGrid.eb(a));
      a = [a, b, c];
      b = (b = bx(this, a)) ? bx(this, b).toString() : "";
      e = new Ox(a,e,b);
      this.a.set(d, e);
      return e
  }
  ;
  function Ox(a, b, c) {
      ss.call(this, a, 2);
      this.c = b;
      this.qa = c;
      this.a = null
  }
  v(Ox, ss);
  Ox.prototype.Y = function() {
      if (this.a)
          return this.a;
      var a = this.c
        , b = dg(a[0], a[1]);
      b.strokeStyle = "black";
      b.strokeRect(.5, .5, a[0] + .5, a[1] + .5);
      b.fillStyle = "black";
      b.textAlign = "center";
      b.textBaseline = "middle";
      b.font = "24px sans-serif";
      b.fillText(this.qa, a[0] / 2, a[1] / 2);
      return this.a = b.canvas
  }
  ;
  Ox.prototype.load = function() {}
  ;
  function Px(a) {
      this.i = null;
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          projection: Zb("EPSG:3857"),
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          state: "loading",
          tileLoadFunction: a.tileLoadFunction,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
          transition: a.transition
      });
      if (a.url)
          if (a.jsonp)
              Rw(a.url, this.Ag.bind(this), this.ef.bind(this));
          else {
              var b = new XMLHttpRequest;
              b.addEventListener("load", this.Io.bind(this));
              b.addEventListener("error", this.Ho.bind(this));
              b.open("GET", a.url);
              b.send()
          }
      else
          a.tileJSON ? this.Ag(a.tileJSON) : wa(!1, 51)
  }
  v(Px, ex);
  k = Px.prototype;
  k.Io = function(a) {
      a = a.target;
      if (!a.status || 200 <= a.status && 300 > a.status) {
          try {
              var b = JSON.parse(a.responseText)
          } catch (c) {
              this.ef();
              return
          }
          this.Ag(b)
      } else
          this.ef()
  }
  ;
  k.Ho = function() {
      this.ef()
  }
  ;
  k.yl = function() {
      return this.i
  }
  ;
  k.Ag = function(a) {
      var b = Zb("EPSG:4326")
        , c = this.c;
      if (a.bounds) {
          var d = $b(b, c);
          var e = sb(a.bounds, d)
      }
      var f = a.minzoom || 0;
      d = a.maxzoom || 22;
      this.tileGrid = c = Bc({
          extent: Dc(c),
          maxZoom: d,
          minZoom: f
      });
      this.tileUrlFunction = Uw(a.tiles, c);
      if (void 0 !== a.attribution && !this.j) {
          b = void 0 !== e ? e : b.G();
          e = {};
          for (var g; f <= d; ++f)
              g = f.toString(),
              e[g] = [tc(c, b, f)];
          this.va([new Fc({
              html: a.attribution,
              tileRanges: e
          })])
      }
      this.i = a;
      Ms(this, "ready")
  }
  ;
  k.ef = function() {
      Ms(this, "error")
  }
  ;
  function Qx(a) {
      $w.call(this, {
          projection: Zb("EPSG:3857"),
          state: "loading"
      });
      this.v = void 0 !== a.preemptive ? a.preemptive : !0;
      this.o = Ww;
      this.g = void 0;
      this.i = a.jsonp || !1;
      if (a.url)
          if (this.i)
              Rw(a.url, this.Bg.bind(this), this.ff.bind(this));
          else {
              var b = new XMLHttpRequest;
              b.addEventListener("load", this.Mo.bind(this));
              b.addEventListener("error", this.Lo.bind(this));
              b.open("GET", a.url);
              b.send()
          }
      else
          a.tileJSON ? this.Bg(a.tileJSON) : wa(!1, 51)
  }
  v(Qx, $w);
  k = Qx.prototype;
  k.Mo = function(a) {
      a = a.target;
      if (!a.status || 200 <= a.status && 300 > a.status) {
          try {
              var b = JSON.parse(a.responseText)
          } catch (c) {
              this.ff();
              return
          }
          this.Bg(b)
      } else
          this.ff()
  }
  ;
  k.Lo = function() {
      this.ff()
  }
  ;
  k.vl = function() {
      return this.g
  }
  ;
  k.Kk = function(a, b, c, d, e) {
      this.tileGrid ? (b = this.tileGrid.Me(a, b),
      Rx(this.Uc(b[0], b[1], b[2], 1, this.c), a, c, d, e)) : !0 === e ? setTimeout(function() {
          c.call(d, null)
      }, 0) : c.call(d, null)
  }
  ;
  k.ff = function() {
      Ms(this, "error")
  }
  ;
  k.Bg = function(a) {
      var b = Zb("EPSG:4326")
        , c = this.c;
      if (a.bounds) {
          var d = $b(b, c);
          var e = sb(a.bounds, d)
      }
      var f = a.minzoom || 0;
      d = a.maxzoom || 22;
      this.tileGrid = c = Bc({
          extent: Dc(c),
          maxZoom: d,
          minZoom: f
      });
      this.g = a.template;
      var g = a.grids;
      if (g) {
          this.o = Uw(g, c);
          if (void 0 !== a.attribution) {
              b = void 0 !== e ? e : b.G();
              for (e = {}; f <= d; ++f)
                  g = f.toString(),
                  e[g] = [tc(c, b, f)];
              this.va([new Fc({
                  html: a.attribution,
                  tileRanges: e
              })])
          }
          Ms(this, "ready")
      } else
          Ms(this, "error")
  }
  ;
  k.Uc = function(a, b, c, d, e) {
      var f = a + "/" + b + "/" + c;
      if (this.a.b.hasOwnProperty(f))
          return this.a.get(f);
      a = [a, b, c];
      b = bx(this, a, e);
      d = this.o(b, d, e);
      d = new Sx(a,void 0 !== d ? 0 : 4,void 0 !== d ? d : "",this.tileGrid.Ja(a),this.v,this.i);
      this.a.set(f, d);
      return d
  }
  ;
  k.ih = function(a, b, c) {
      a = a + "/" + b + "/" + c;
      this.a.b.hasOwnProperty(a) && this.a.get(a)
  }
  ;
  function Sx(a, b, c, d, e, f) {
      ss.call(this, a, b);
      this.v = c;
      this.a = d;
      this.O = e;
      this.c = this.l = this.g = null;
      this.s = f
  }
  v(Sx, ss);
  k = Sx.prototype;
  k.Y = function() {
      return null
  }
  ;
  k.getData = function(a) {
      if (!this.g || !this.l)
          return null;
      var b = this.g[Math.floor((1 - (a[1] - this.a[1]) / (this.a[3] - this.a[1])) * this.g.length)];
      if ("string" !== typeof b)
          return null;
      b = b.charCodeAt(Math.floor((a[0] - this.a[0]) / (this.a[2] - this.a[0]) * b.length));
      93 <= b && b--;
      35 <= b && b--;
      b -= 32;
      a = null;
      b in this.l && (b = this.l[b],
      this.c && b in this.c ? a = this.c[b] : a = b);
      return a
  }
  ;
  function Rx(a, b, c, d, e) {
      0 == a.state && !0 === e ? (Mc(a, "change", function() {
          c.call(d, this.getData(b))
      }, a),
      Tx(a)) : !0 === e ? setTimeout(function() {
          c.call(d, this.getData(b))
      }
      .bind(a), 0) : c.call(d, a.getData(b))
  }
  k.gb = function() {
      return this.v
  }
  ;
  k.Oe = function() {
      this.state = 3;
      this.u()
  }
  ;
  k.Wi = function(a) {
      this.g = a.grid;
      this.l = a.keys;
      this.c = a.data;
      this.state = 4;
      this.u()
  }
  ;
  function Tx(a) {
      if (0 == a.state)
          if (a.state = 1,
          a.s)
              Rw(a.v, a.Wi.bind(a), a.Oe.bind(a));
          else {
              var b = new XMLHttpRequest;
              b.addEventListener("load", a.Ko.bind(a));
              b.addEventListener("error", a.Jo.bind(a));
              b.open("GET", a.v);
              b.send()
          }
  }
  k.Ko = function(a) {
      a = a.target;
      if (!a.status || 200 <= a.status && 300 > a.status) {
          try {
              var b = JSON.parse(a.responseText)
          } catch (c) {
              this.Oe();
              return
          }
          this.Wi(b)
      } else
          this.Oe()
  }
  ;
  k.Jo = function() {
      this.Oe()
  }
  ;
  k.load = function() {
      this.O && Tx(this)
  }
  ;
  function Ux(a) {
      a = a || {};
      var b = a.params || {};
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          opaque: !("TRANSPARENT"in b ? b.TRANSPARENT : 1),
          projection: a.projection,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileClass: a.tileClass,
          tileGrid: a.tileGrid,
          tileLoadFunction: a.tileLoadFunction,
          url: a.url,
          urls: a.urls,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !0,
          transition: a.transition
      });
      this.s = void 0 !== a.gutter ? a.gutter : 0;
      this.i = b;
      this.o = !0;
      this.B = a.serverType;
      this.U = void 0 !== a.hidpi ? a.hidpi : !0;
      this.fa = Pa();
      Vx(this);
      ax(this, Wx(this))
  }
  v(Ux, ex);
  k = Ux.prototype;
  k.No = function(a, b, c, d) {
      c = Zb(c);
      var e = this.tileGrid;
      e || (e = this.Xa(c));
      b = e.Me(a, b);
      if (!(e.b.length <= b[0])) {
          var f = e.Qa(b[0])
            , g = e.Ja(b, this.fa);
          e = Na(e.eb(b[0]), this.l);
          var h = this.s;
          0 !== h && (e = La(e, h, this.l),
          g = Ra(g, f * h, g));
          h = {
              SERVICE: "WMS",
              VERSION: "1.3.0",
              REQUEST: "GetFeatureInfo",
              FORMAT: "image/png",
              TRANSPARENT: !0,
              QUERY_LAYERS: this.i.LAYERS
          };
          tb(h, this.i, d);
          d = Math.floor((g[3] - a[1]) / f);
          h[this.o ? "I" : "X"] = Math.floor((a[0] - g[0]) / f);
          h[this.o ? "J" : "Y"] = d;
          return Xx(this, b, e, g, 1, c, h)
      }
  }
  ;
  k.ag = function() {
      return this.s
  }
  ;
  k.Oo = function() {
      return this.i
  }
  ;
  function Xx(a, b, c, d, e, f, g) {
      var h = a.urls;
      if (h) {
          g.WIDTH = c[0];
          g.HEIGHT = c[1];
          g[a.o ? "CRS" : "SRS"] = f.sb;
          "STYLES"in a.i || (g.STYLES = "");
          if (1 != e)
              switch (a.B) {
              case "geoserver":
                  c = 90 * e + .5 | 0;
                  g.FORMAT_OPTIONS = "FORMAT_OPTIONS"in g ? g.FORMAT_OPTIONS + (";dpi:" + c) : "dpi:" + c;
                  break;
              case "mapserver":
                  g.MAP_RESOLUTION = 90 * e;
                  break;
              case "carmentaserver":
              case "qgis":
                  g.DPI = 90 * e;
                  break;
              default:
                  wa(!1, 52)
              }
          f = f.b;
          a.o && "ne" == f.substr(0, 2) && (a = d[0],
          d[0] = d[1],
          d[1] = a,
          a = d[2],
          d[2] = d[3],
          d[3] = a);
          g.BBOX = d.join(",");
          return qx(1 == h.length ? h[0] : h[Ja((b[1] << b[0]) + b[2], h.length)], g)
      }
  }
  k.Sc = function(a) {
      return this.U && void 0 !== this.B ? a : 1
  }
  ;
  function Wx(a) {
      var b = 0, c = [], d;
      for (d in a.i)
          c[b++] = d + "-" + a.i[d];
      return c.join("/")
  }
  k.Lc = function(a, b, c) {
      var d = this.tileGrid;
      d || (d = this.Xa(c));
      if (!(d.b.length <= a[0])) {
          1 == b || this.U && void 0 !== this.B || (b = 1);
          var e = d.Qa(a[0])
            , f = d.Ja(a, this.fa);
          d = Na(d.eb(a[0]), this.l);
          var g = this.s;
          0 !== g && (d = La(d, g, this.l),
          f = Ra(f, e * g, f));
          1 != b && (d = Ma(d, b, this.l));
          e = {
              SERVICE: "WMS",
              VERSION: "1.3.0",
              REQUEST: "GetMap",
              FORMAT: "image/png",
              TRANSPARENT: !0
          };
          tb(e, this.i);
          return Xx(this, a, d, f, b, c, e)
      }
  }
  ;
  k.Po = function(a) {
      tb(this.i, a);
      Vx(this);
      ax(this, Wx(this))
  }
  ;
  function Vx(a) {
      a.o = 0 <= xe(a.i.VERSION || "1.3.0")
  }
  ;function Yx(a, b, c, d, e, f, g, h, l, m, n, p, q, r, u) {
      ss.call(this, a, b, u);
      this.l = {};
      this.v = {};
      this.c = m;
      this.a = [];
      this.C = c;
      this.O = f;
      this.g = [];
      this.s = [];
      if (f) {
          var x = l.Ja(f)
            , B = l.Qa(a[0]);
          h.Vf(x, h.xc(B), function(a) {
              var b = pb(x, h.Ja(a))
                , c = h.G();
              c && (b = pb(b, c));
              .5 <= lb(b) / B && .5 <= mb(b) / B && (b = a.toString(),
              c = m[b],
              c || (c = g(a, n, p),
              c = m[b] = new q(a,void 0 == c ? 4 : 0,void 0 == c ? "" : c,d,e),
              this.s.push(z(c, "change", r))),
              c.c++,
              this.a.push(b))
          }
          .bind(this))
      }
  }
  v(Yx, ss);
  k = Yx.prototype;
  k.ka = function() {
      for (var a = 0, b = this.a.length; a < b; ++a) {
          var c = this.a[a]
            , d = this.c[c];
          d.c--;
          0 == d.c && (delete this.c[c],
          Qc(d))
      }
      this.a.length = 0;
      this.c = null;
      this.g.forEach(Hc);
      this.g.length = 0;
      this.f && Qc(this.f);
      this.state = 5;
      this.u();
      this.s.forEach(Hc);
      this.s.length = 0;
      ss.prototype.ka.call(this)
  }
  ;
  k.getContext = function(a) {
      a = w(a).toString();
      a in this.l || (this.l[a] = dg());
      return this.l[a]
  }
  ;
  k.Y = function(a) {
      return -1 == Fj(this, a).dh ? null : this.getContext(a).canvas
  }
  ;
  function Fj(a, b) {
      b = w(b).toString();
      b in a.v || (a.v[b] = {
          Ee: !1,
          bh: null,
          wf: -1,
          dh: -1
      });
      return a.v[b]
  }
  k.gb = function() {
      return this.a.join("/") + "/" + this.C
  }
  ;
  k.load = function() {
      var a = 0
        , b = {};
      0 == this.state && Ji(this, 1);
      1 == this.state && this.a.forEach(function(c) {
          var d = this.c[c];
          0 == d.state && (d.tg(this.D),
          d.load());
          1 == d.state && (c = z(d, "change", function() {
              var c = d.getState();
              if (2 == c || 3 == c) {
                  var f = w(d);
                  3 == c ? b[f] = !0 : (--a,
                  delete b[f]);
                  0 == a - Object.keys(b).length && this.Hh()
              }
          }
          .bind(this)),
          this.g.push(c),
          ++a)
      }
      .bind(this));
      0 == a - Object.keys(b).length && setTimeout(this.Hh.bind(this), 0)
  }
  ;
  k.Hh = function() {
      for (var a = this.a.length, b = 0, c = a - 1; 0 <= c; --c) {
          var d = this.c[this.a[c]].getState();
          2 != d && --a;
          4 == d && ++b
      }
      a == this.a.length ? (this.g.forEach(Hc),
      this.g.length = 0,
      Ji(this, 2)) : Ji(this, b == this.a.length ? 4 : 3)
  }
  ;
  function Zx(a, b) {
      a.tg(dl(b, a.v, a.ip.bind(a), a.hp.bind(a)))
  }
  ;function $x(a, b, c, d, e, f) {
      ss.call(this, a, b, f);
      this.c = 0;
      this.l = null;
      this.v = d;
      this.a = null;
      this.g = {};
      this.D = e;
      this.O = c
  }
  v($x, ss);
  k = $x.prototype;
  k.ka = function() {
      this.a = null;
      this.g = {};
      this.state = 5;
      this.u();
      ss.prototype.ka.call(this)
  }
  ;
  k.G = function() {
      return this.l || ay
  }
  ;
  k.Vm = function() {
      return this.v
  }
  ;
  k.Um = function() {
      return this.a
  }
  ;
  k.gb = function() {
      return this.O
  }
  ;
  k.Wm = function() {
      return this.s
  }
  ;
  function Gj(a, b, c) {
      return a.g[w(b) + "," + c]
  }
  k.load = function() {
      0 == this.state && (Ji(this, 1),
      this.D(this, this.O),
      this.C(null, NaN, null))
  }
  ;
  k.ip = function(a, b, c) {
      this.ug(b);
      this.Aj(a);
      this.ni(c)
  }
  ;
  k.hp = function() {
      Ji(this, 3)
  }
  ;
  k.ni = function(a) {
      this.l = a
  }
  ;
  k.Aj = function(a) {
      this.a = a;
      Ji(this, 2)
  }
  ;
  k.ug = function(a) {
      this.s = a
  }
  ;
  k.tg = function(a) {
      this.C = a
  }
  ;
  var ay = [0, 0, 4096, 4096];
  function by(a) {
      var b = a.projection || "EPSG:3857"
        , c = a.extent || Dc(b)
        , d = a.tileGrid || Bc({
          extent: c,
          maxZoom: a.maxZoom || 22,
          minZoom: a.minZoom,
          tileSize: a.tileSize || 512
      });
      dx.call(this, {
          attributions: a.attributions,
          cacheSize: void 0 !== a.cacheSize ? a.cacheSize : 128,
          extent: c,
          logo: a.logo,
          opaque: !1,
          projection: b,
          state: a.state,
          tileGrid: d,
          tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : Zx,
          tileUrlFunction: a.tileUrlFunction,
          url: a.url,
          urls: a.urls,
          wrapX: void 0 === a.wrapX ? !0 : a.wrapX,
          transition: a.transition
      });
      this.o = a.format ? a.format : null;
      this.i = {};
      this.v = void 0 == a.overlaps ? !0 : a.overlaps;
      this.tileClass = a.tileClass ? a.tileClass : $x;
      this.g = {}
  }
  v(by, dx);
  k = by.prototype;
  k.clear = function() {
      this.a.clear();
      this.i = {}
  }
  ;
  k.Uc = function(a, b, c, d, e) {
      var f = a + "/" + b + "/" + c;
      if (this.a.b.hasOwnProperty(f))
          return this.a.get(f);
      a = [a, b, c];
      c = (b = bx(this, a, e)) ? this.tileUrlFunction(b, d, e) : void 0;
      d = new Yx(a,void 0 !== c ? 0 : 4,void 0 !== c ? c : "",this.o,this.tileLoadFunction,b,this.tileUrlFunction,this.tileGrid,this.Xa(e),this.i,d,e,this.tileClass,this.Yi.bind(this),this.ma);
      this.a.set(f, d);
      return d
  }
  ;
  k.Xa = function(a) {
      var b = a.sb
        , c = this.g[b];
      c || (c = this.tileGrid,
      c = this.g[b] = Ac(a, void 0, c ? c.eb(c.minZoom) : void 0));
      return c
  }
  ;
  k.Sc = function(a) {
      return a
  }
  ;
  k.be = function(a, b, c) {
      a = Na(this.Xa(c).eb(a));
      return [Math.round(a[0] * b), Math.round(a[1] * b)]
  }
  ;
  function cy(a) {
      this.o = a.matrixIds;
      qc.call(this, {
          extent: a.extent,
          origin: a.origin,
          origins: a.origins,
          resolutions: a.resolutions,
          tileSize: a.tileSize,
          tileSizes: a.tileSizes,
          sizes: a.sizes
      })
  }
  v(cy, qc);
  cy.prototype.v = function() {
      return this.o
  }
  ;
  function dy(a, b, c) {
      var d = []
        , e = []
        , f = []
        , g = []
        , h = []
        , l = void 0 !== c ? c : [];
      c = Zb(a.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
      var m = c.Rc()
        , n = "ne" == c.b.substr(0, 2);
      a.TileMatrix.sort(function(a, b) {
          return b.ScaleDenominator - a.ScaleDenominator
      });
      a.TileMatrix.forEach(function(a) {
          var b;
          0 < l.length ? b = ka(l, function(b) {
              return a.Identifier == b.TileMatrix
          }) : b = !0;
          if (b) {
              e.push(a.Identifier);
              b = 2.8E-4 * a.ScaleDenominator / m;
              var c = a.TileWidth
                , p = a.TileHeight;
              n ? f.push([a.TopLeftCorner[1], a.TopLeftCorner[0]]) : f.push(a.TopLeftCorner);
              d.push(b);
              g.push(c == p ? c : [c, p]);
              h.push([a.MatrixWidth, -a.MatrixHeight])
          }
      });
      return new cy({
          extent: b,
          origins: f,
          resolutions: d,
          matrixIds: e,
          tileSizes: g,
          sizes: h
      })
  }
  ;function Z(a) {
      function b(a) {
          a = "KVP" == d ? qx(a, f) : a.replace(/\{(\w+?)\}/g, function(a, b) {
              return b.toLowerCase()in f ? f[b.toLowerCase()] : a
          });
          return function(b) {
              if (b) {
                  var c = {
                      TileMatrix: e.o[b[0]],
                      TileCol: b[1],
                      TileRow: -b[2] - 1
                  };
                  tb(c, g);
                  b = a;
                  return b = "KVP" == d ? qx(b, c) : b.replace(/\{(\w+?)\}/g, function(a, b) {
                      return c[b]
                  })
              }
          }
      }
      this.oa = void 0 !== a.version ? a.version : "1.0.0";
      this.s = void 0 !== a.format ? a.format : "image/jpeg";
      this.i = a.dimensions ? a.dimensions : {};
      this.B = a.layer;
      this.o = a.matrixSet;
      this.U = a.style;
      var c = a.urls;
      void 0 === c && void 0 !== a.url && (c = Xw(a.url));
      var d = this.fa = void 0 !== a.requestEncoding ? a.requestEncoding : "KVP"
        , e = a.tileGrid
        , f = {
          layer: this.B,
          style: this.U,
          tilematrixset: this.o
      };
      "KVP" == d && tb(f, {
          Service: "WMTS",
          Request: "GetTile",
          Version: this.oa,
          Format: this.s
      });
      var g = this.i
        , h = c && 0 < c.length ? Vw(c.map(b)) : Ww;
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          projection: a.projection,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileClass: a.tileClass,
          tileGrid: e,
          tileLoadFunction: a.tileLoadFunction,
          tilePixelRatio: a.tilePixelRatio,
          tileUrlFunction: h,
          urls: c,
          wrapX: void 0 !== a.wrapX ? a.wrapX : !1,
          transition: a.transition
      });
      ax(this, ey(this))
  }
  v(Z, ex);
  k = Z.prototype;
  k.Vk = function() {
      return this.i
  }
  ;
  k.Qo = function() {
      return this.s
  }
  ;
  k.Ro = function() {
      return this.B
  }
  ;
  k.il = function() {
      return this.o
  }
  ;
  k.tl = function() {
      return this.fa
  }
  ;
  k.So = function() {
      return this.U
  }
  ;
  k.Al = function() {
      return this.oa
  }
  ;
  function ey(a) {
      var b = 0, c = [], d;
      for (d in a.i)
          c[b++] = d + "-" + a.i[d];
      return c.join("/")
  }
  k.xq = function(a) {
      tb(this.i, a);
      ax(this, ey(this))
  }
  ;
  function fy(a) {
      a = a || {};
      var b = a.size
        , c = b[0]
        , d = b[1]
        , e = []
        , f = 256;
      switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : gy) {
      case gy:
          for (; c > f || d > f; )
              e.push([Math.ceil(c / f), Math.ceil(d / f)]),
              f += f;
          break;
      case hy:
          for (; c > f || d > f; )
              e.push([Math.ceil(c / f), Math.ceil(d / f)]),
              c >>= 1,
              d >>= 1;
          break;
      default:
          wa(!1, 53)
      }
      e.push([1, 1]);
      e.reverse();
      f = [1];
      var g = [0];
      d = 1;
      for (c = e.length; d < c; d++)
          f.push(1 << d),
          g.push(e[d - 1][0] * e[d - 1][1] + g[d - 1]);
      f.reverse();
      b = [0, -b[1], b[0], 0];
      b = new qc({
          extent: b,
          origin: ib(b),
          resolutions: f
      });
      (f = a.url) && -1 == f.indexOf("{TileGroup}") && -1 == f.indexOf("{tileIndex}") && (f += "{TileGroup}/{z}-{x}-{y}.jpg");
      f = Xw(f);
      f = Vw(f.map(function(a) {
          return function(b) {
              if (b) {
                  var c = b[0]
                    , d = b[1];
                  b = -b[2] - 1;
                  var f = d + b * e[c][0]
                    , h = {
                      z: c,
                      x: d,
                      y: b,
                      tileIndex: f,
                      TileGroup: "TileGroup" + ((f + g[c]) / 256 | 0)
                  };
                  return a.replace(/\{(\w+?)\}/g, function(a, b) {
                      return h[b]
                  })
              }
          }
      }));
      ex.call(this, {
          attributions: a.attributions,
          cacheSize: a.cacheSize,
          crossOrigin: a.crossOrigin,
          logo: a.logo,
          projection: a.projection,
          reprojectionErrorThreshold: a.reprojectionErrorThreshold,
          tileClass: iy,
          tileGrid: b,
          tileUrlFunction: f,
          transition: a.transition
      })
  }
  v(fy, ex);
  function iy(a, b, c, d, e, f) {
      us.call(this, a, b, c, d, e, f);
      this.a = null
  }
  v(iy, us);
  iy.prototype.Y = function() {
      if (this.a)
          return this.a;
      var a = us.prototype.Y.call(this);
      if (2 == this.state) {
          if (256 == a.width && 256 == a.height)
              return this.a = a;
          var b = dg(256, 256);
          b.drawImage(a, 0, 0);
          return this.a = b.canvas
      }
      return a
  }
  ;
  var gy = "default"
    , hy = "truncated";
  ua.prototype.code = ua.prototype.code;
  t("ol.Attribution", Fc);
  Fc.prototype.getHTML = Fc.prototype.f;
  t("ol.CanvasMap", H);
  t("ol.Collection", C);
  C.prototype.clear = C.prototype.clear;
  C.prototype.extend = C.prototype.pg;
  C.prototype.forEach = C.prototype.forEach;
  C.prototype.getArray = C.prototype.Dm;
  C.prototype.item = C.prototype.item;
  C.prototype.getLength = C.prototype.gc;
  C.prototype.insertAt = C.prototype.Se;
  C.prototype.pop = C.prototype.pop;
  C.prototype.push = C.prototype.push;
  C.prototype.remove = C.prototype.remove;
  C.prototype.removeAt = C.prototype.Ug;
  C.prototype.setAt = C.prototype.Yp;
  dd.prototype.element = dd.prototype.element;
  t("ol.color.asArray", Ph);
  t("ol.color.asString", Rh);
  t("ol.colorlike.asColorLike", Th);
  t("ol.control.defaults", xg);
  t("ol.coordinate.add", ye);
  t("ol.coordinate.createStringXY", function(a) {
      return function(b) {
          return Ke(b, a)
      }
  });
  t("ol.coordinate.format", Ce);
  t("ol.coordinate.rotate", Ee);
  t("ol.coordinate.toStringHDMS", function(a, b) {
      return a ? Be("NS", a[1], b) + " " + Be("EW", a[0], b) : ""
  });
  t("ol.coordinate.toStringXY", Ke);
  t("ol.DeviceOrientation", sk);
  sk.prototype.getAlpha = sk.prototype.Em;
  sk.prototype.getBeta = sk.prototype.Sk;
  sk.prototype.getGamma = sk.prototype.Yk;
  sk.prototype.getHeading = sk.prototype.Fm;
  sk.prototype.getTracking = sk.prototype.ii;
  sk.prototype.setTracking = sk.prototype.qg;
  t("ol.easing.easeIn", Le);
  t("ol.easing.easeOut", Me);
  t("ol.easing.inAndOut", Ne);
  t("ol.easing.linear", Oe);
  t("ol.easing.upAndDown", function(a) {
      return .5 > a ? Ne(2 * a) : 1 - Ne(2 * (a - .5))
  });
  t("ol.extent.boundingExtent", Oa);
  t("ol.extent.buffer", Ra);
  t("ol.extent.containsCoordinate", Ua);
  t("ol.extent.containsExtent", Wa);
  t("ol.extent.containsXY", Va);
  t("ol.extent.createEmpty", Pa);
  t("ol.extent.equals", cb);
  t("ol.extent.extend", db);
  t("ol.extent.getArea", jb);
  t("ol.extent.getBottomLeft", fb);
  t("ol.extent.getBottomRight", gb);
  t("ol.extent.getCenter", nb);
  t("ol.extent.getHeight", mb);
  t("ol.extent.getIntersection", pb);
  t("ol.extent.getSize", function(a) {
      return [a[2] - a[0], a[3] - a[1]]
  });
  t("ol.extent.getTopLeft", ib);
  t("ol.extent.getTopRight", hb);
  t("ol.extent.getWidth", lb);
  t("ol.extent.intersects", qb);
  t("ol.extent.isEmpty", kb);
  t("ol.extent.applyTransform", sb);
  t("ol.Feature", Kk);
  Kk.prototype.clone = Kk.prototype.clone;
  Kk.prototype.getGeometry = Kk.prototype.W;
  Kk.prototype.getId = Kk.prototype.Hm;
  Kk.prototype.getGeometryName = Kk.prototype.$k;
  Kk.prototype.getStyle = Kk.prototype.Im;
  Kk.prototype.getStyleFunction = Kk.prototype.bb;
  Kk.prototype.setGeometry = Kk.prototype.Sa;
  Kk.prototype.setStyle = Kk.prototype.rg;
  Kk.prototype.setId = Kk.prototype.mc;
  Kk.prototype.setGeometryName = Kk.prototype.Zc;
  t("ol.featureloader.xhr", el);
  t("ol.Geolocation", ds);
  ds.prototype.getAccuracy = ds.prototype.Ok;
  ds.prototype.getAccuracyGeometry = ds.prototype.Pk;
  ds.prototype.getAltitude = ds.prototype.Qk;
  ds.prototype.getAltitudeAccuracy = ds.prototype.Rk;
  ds.prototype.getHeading = ds.prototype.Jm;
  ds.prototype.getPosition = ds.prototype.Km;
  ds.prototype.getProjection = ds.prototype.ji;
  ds.prototype.getSpeed = ds.prototype.ul;
  ds.prototype.getTracking = ds.prototype.ki;
  ds.prototype.getTrackingOptions = ds.prototype.Xh;
  ds.prototype.setProjection = ds.prototype.li;
  ds.prototype.setTracking = ds.prototype.Ve;
  ds.prototype.setTrackingOptions = ds.prototype.Jj;
  t("ol.Graticule", ks);
  ks.prototype.getMap = ks.prototype.Nm;
  ks.prototype.getMeridians = ks.prototype.kl;
  ks.prototype.getParallels = ks.prototype.pl;
  ks.prototype.setMap = ks.prototype.setMap;
  t("ol.has.DEVICE_PIXEL_RATIO", pd);
  t("ol.has.CANVAS", rd);
  t("ol.has.DEVICE_ORIENTATION", sd);
  t("ol.has.GEOLOCATION", td);
  t("ol.has.TOUCH", ud);
  t("ol.has.WEBGL", id);
  qs.prototype.getImage = qs.prototype.Y;
  qs.prototype.load = qs.prototype.load;
  us.prototype.getImage = us.prototype.Y;
  t("ol.inherits", v);
  t("ol.interaction.defaults", Hh);
  t("ol.Kinetic", yg);
  t("ol.loadingstrategy.all", Js);
  t("ol.loadingstrategy.bbox", function(a) {
      return [a]
  });
  t("ol.loadingstrategy.tile", function(a) {
      return function(b, c) {
          c = a.xc(c);
          b = tc(a, b, c);
          var d = [];
          c = [c, 0, 0];
          for (c[1] = b.ba; c[1] <= b.da; ++c[1])
              for (c[2] = b.ea; c[2] <= b.ga; ++c[2])
                  d.push(a.Ja(c));
          return d
      }
  });
  t("ol.Map", X);
  fd.prototype.originalEvent = fd.prototype.originalEvent;
  fd.prototype.pixel = fd.prototype.pixel;
  fd.prototype.coordinate = fd.prototype.coordinate;
  fd.prototype.dragging = fd.prototype.dragging;
  ed.prototype.map = ed.prototype.map;
  ed.prototype.frameState = ed.prototype.frameState;
  t("ol.Object", Wc);
  Wc.prototype.get = Wc.prototype.get;
  Wc.prototype.getKeys = Wc.prototype.P;
  Wc.prototype.getProperties = Wc.prototype.M;
  Wc.prototype.set = Wc.prototype.set;
  Wc.prototype.setProperties = Wc.prototype.H;
  Wc.prototype.unset = Wc.prototype.R;
  $c.prototype.key = $c.prototype.key;
  $c.prototype.oldValue = $c.prototype.oldValue;
  t("ol.Observable", Vc);
  t("ol.Observable.unByKey", function(a) {
      if (Array.isArray(a))
          for (var b = 0, c = a.length; b < c; ++b)
              Hc(a[b]);
      else
          Hc(a)
  });
  Vc.prototype.changed = Vc.prototype.u;
  Vc.prototype.dispatchEvent = Vc.prototype.b;
  Vc.prototype.getRevision = Vc.prototype.L;
  Vc.prototype.on = Vc.prototype.J;
  Vc.prototype.once = Vc.prototype.once;
  Vc.prototype.un = Vc.prototype.K;
  t("ol.Overlay", Rj);
  Rj.prototype.getElement = Rj.prototype.Vd;
  Rj.prototype.getId = Rj.prototype.Tm;
  Rj.prototype.getMap = Rj.prototype.We;
  Rj.prototype.getOffset = Rj.prototype.Th;
  Rj.prototype.getPosition = Rj.prototype.mi;
  Rj.prototype.getPositioning = Rj.prototype.Uh;
  Rj.prototype.setElement = Rj.prototype.zj;
  Rj.prototype.setMap = Rj.prototype.setMap;
  Rj.prototype.setOffset = Rj.prototype.Ej;
  Rj.prototype.setPosition = Rj.prototype.Xe;
  Rj.prototype.setPositioning = Rj.prototype.Hj;
  t("ol.PluggableMap", G);
  G.prototype.addControl = G.prototype.Mf;
  G.prototype.addInteraction = G.prototype.Nf;
  G.prototype.addLayer = G.prototype.Ae;
  G.prototype.addOverlay = G.prototype.Be;
  G.prototype.forEachFeatureAtPixel = G.prototype.Mc;
  G.prototype.getFeaturesAtPixel = G.prototype.Yf;
  G.prototype.forEachLayerAtPixel = G.prototype.sg;
  G.prototype.hasFeatureAtPixel = G.prototype.ng;
  G.prototype.getEventCoordinate = G.prototype.Wd;
  G.prototype.getEventPixel = G.prototype.od;
  G.prototype.getTarget = G.prototype.$d;
  G.prototype.getTargetElement = G.prototype.wc;
  G.prototype.getCoordinateFromPixel = G.prototype.Na;
  G.prototype.getControls = G.prototype.Xf;
  G.prototype.getOverlays = G.prototype.hg;
  G.prototype.getOverlayById = G.prototype.gg;
  G.prototype.getInteractions = G.prototype.cg;
  G.prototype.getLayerGroup = G.prototype.dc;
  G.prototype.getLayers = G.prototype.Ye;
  G.prototype.getPixelFromCoordinate = G.prototype.Ha;
  G.prototype.getSize = G.prototype.zb;
  G.prototype.getView = G.prototype.$;
  G.prototype.getViewport = G.prototype.lg;
  G.prototype.renderSync = G.prototype.ah;
  G.prototype.render = G.prototype.render;
  G.prototype.removeControl = G.prototype.Vg;
  G.prototype.removeInteraction = G.prototype.Xg;
  G.prototype.removeLayer = G.prototype.Yg;
  G.prototype.removeOverlay = G.prototype.Zg;
  G.prototype.setLayerGroup = G.prototype.zf;
  G.prototype.setSize = G.prototype.ke;
  G.prototype.setTarget = G.prototype.vd;
  G.prototype.setView = G.prototype.hh;
  G.prototype.updateSize = G.prototype.Gc;
  t("ol.proj.METERS_PER_UNIT", Eb);
  t("ol.proj.setProj4", function(a) {
      Fb = a
  });
  t("ol.proj.getPointResolution", Yb);
  t("ol.proj.addEquivalentProjections", ac);
  t("ol.proj.addProjection", bc);
  t("ol.proj.addCoordinateTransforms", fc);
  t("ol.proj.fromLonLat", function(a, b) {
      return kc(a, "EPSG:4326", void 0 !== b ? b : "EPSG:3857")
  });
  t("ol.proj.toLonLat", function(a, b) {
      return kc(a, void 0 !== b ? b : "EPSG:3857", "EPSG:4326")
  });
  t("ol.proj.get", Zb);
  t("ol.proj.equivalent", hc);
  t("ol.proj.getTransform", ic);
  t("ol.proj.transform", kc);
  t("ol.proj.transformExtent", lc);
  t("ol.render.toContext", function(a, b) {
      var c = a.canvas
        , d = b ? b : {};
      b = d.pixelRatio || pd;
      if (d = d.size)
          c.width = d[0] * b,
          c.height = d[1] * b,
          c.style.width = d[0] + "px",
          c.style.height = d[1] + "px";
      c = [0, 0, c.width, c.height];
      d = af(Ue(), b, b);
      return new Vh(a,b,c,d,0)
  });
  t("ol.size.toSize", Na);
  t("ol.Sphere", xb);
  xb.prototype.geodesicArea = xb.prototype.a;
  xb.prototype.haversineDistance = xb.prototype.b;
  t("ol.Sphere.getLength", Ab);
  t("ol.Sphere.getArea", Db);
  ss.prototype.getTileCoord = ss.prototype.i;
  ss.prototype.load = ss.prototype.load;
  t("ol.tilegrid.createXYZ", Bc);
  $x.prototype.getFormat = $x.prototype.Vm;
  $x.prototype.getFeatures = $x.prototype.Um;
  $x.prototype.getProjection = $x.prototype.Wm;
  $x.prototype.setExtent = $x.prototype.ni;
  $x.prototype.setFeatures = $x.prototype.Aj;
  $x.prototype.setProjection = $x.prototype.ug;
  $x.prototype.setLoader = $x.prototype.tg;
  t("ol.View", F);
  F.prototype.animate = F.prototype.animate;
  F.prototype.getAnimating = F.prototype.Pc;
  F.prototype.getInteracting = F.prototype.al;
  F.prototype.cancelAnimations = F.prototype.kd;
  F.prototype.constrainCenter = F.prototype.Kc;
  F.prototype.constrainResolution = F.prototype.constrainResolution;
  F.prototype.constrainRotation = F.prototype.constrainRotation;
  F.prototype.getCenter = F.prototype.xa;
  F.prototype.calculateExtent = F.prototype.jd;
  F.prototype.getMaxResolution = F.prototype.Xm;
  F.prototype.getMinResolution = F.prototype.Zm;
  F.prototype.getMaxZoom = F.prototype.Ym;
  F.prototype.setMaxZoom = F.prototype.iq;
  F.prototype.getMinZoom = F.prototype.$m;
  F.prototype.setMinZoom = F.prototype.jq;
  F.prototype.getProjection = F.prototype.an;
  F.prototype.getResolution = F.prototype.Oa;
  F.prototype.getResolutions = F.prototype.bn;
  F.prototype.getResolutionForExtent = F.prototype.Ke;
  F.prototype.getRotation = F.prototype.Pa;
  F.prototype.getZoom = F.prototype.Yh;
  F.prototype.getZoomForResolution = F.prototype.Ne;
  F.prototype.getResolutionForZoom = F.prototype.Wh;
  F.prototype.fit = F.prototype.Uf;
  F.prototype.centerOn = F.prototype.Fk;
  F.prototype.rotate = F.prototype.rotate;
  F.prototype.setCenter = F.prototype.rb;
  F.prototype.setResolution = F.prototype.ad;
  F.prototype.setRotation = F.prototype.de;
  F.prototype.setZoom = F.prototype.Lj;
  t("ol.xml.getAllTextContent", Ok);
  t("ol.xml.parse", Sk);
  Ou.prototype.getGL = Ou.prototype.ep;
  Ou.prototype.useProgram = Ou.prototype.Wc;
  t("ol.tilegrid.TileGrid", qc);
  qc.prototype.forEachTileCoord = qc.prototype.Vf;
  qc.prototype.getMaxZoom = qc.prototype.gj;
  qc.prototype.getMinZoom = qc.prototype.hj;
  qc.prototype.getOrigin = qc.prototype.Cc;
  qc.prototype.getResolution = qc.prototype.Qa;
  qc.prototype.getResolutions = qc.prototype.ij;
  qc.prototype.getTileCoordExtent = qc.prototype.Ja;
  qc.prototype.getTileCoordForCoordAndResolution = qc.prototype.Me;
  qc.prototype.getTileCoordForCoordAndZ = qc.prototype.kg;
  qc.prototype.getTileSize = qc.prototype.eb;
  qc.prototype.getZForResolution = qc.prototype.xc;
  t("ol.tilegrid.WMTS", cy);
  cy.prototype.getMatrixIds = cy.prototype.v;
  t("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", dy);
  t("ol.style.AtlasManager", Tv);
  t("ol.style.Circle", Bk);
  Bk.prototype.setRadius = Bk.prototype.$c;
  t("ol.style.Fill", Ck);
  Ck.prototype.clone = Ck.prototype.clone;
  Ck.prototype.getColor = Ck.prototype.f;
  Ck.prototype.setColor = Ck.prototype.c;
  t("ol.style.Icon", Gn);
  Gn.prototype.clone = Gn.prototype.clone;
  Gn.prototype.getAnchor = Gn.prototype.Oc;
  Gn.prototype.getColor = Gn.prototype.To;
  Gn.prototype.getImage = Gn.prototype.Y;
  Gn.prototype.getOrigin = Gn.prototype.Vc;
  Gn.prototype.getSrc = Gn.prototype.Uo;
  Gn.prototype.getSize = Gn.prototype.kc;
  Gn.prototype.load = Gn.prototype.load;
  t("ol.style.Image", yk);
  yk.prototype.getOpacity = yk.prototype.hf;
  yk.prototype.getRotateWithView = yk.prototype.jf;
  yk.prototype.getRotation = yk.prototype.kf;
  yk.prototype.getScale = yk.prototype.lf;
  yk.prototype.getSnapToPixel = yk.prototype.Le;
  yk.prototype.setOpacity = yk.prototype.Bd;
  yk.prototype.setRotation = yk.prototype.mf;
  yk.prototype.setScale = yk.prototype.Cd;
  t("ol.style.RegularShape", zk);
  zk.prototype.clone = zk.prototype.clone;
  zk.prototype.getAnchor = zk.prototype.Oc;
  zk.prototype.getAngle = zk.prototype.cj;
  zk.prototype.getFill = zk.prototype.Ca;
  zk.prototype.getImage = zk.prototype.Y;
  zk.prototype.getOrigin = zk.prototype.Vc;
  zk.prototype.getPoints = zk.prototype.dj;
  zk.prototype.getRadius = zk.prototype.ej;
  zk.prototype.getRadius2 = zk.prototype.Vh;
  zk.prototype.getSize = zk.prototype.kc;
  zk.prototype.getStroke = zk.prototype.Da;
  t("ol.style.Stroke", Dk);
  Dk.prototype.clone = Dk.prototype.clone;
  Dk.prototype.getColor = Dk.prototype.Vo;
  Dk.prototype.getLineCap = Dk.prototype.dl;
  Dk.prototype.getLineDash = Dk.prototype.Wo;
  Dk.prototype.getLineDashOffset = Dk.prototype.el;
  Dk.prototype.getLineJoin = Dk.prototype.fl;
  Dk.prototype.getMiterLimit = Dk.prototype.ll;
  Dk.prototype.getWidth = Dk.prototype.Xo;
  Dk.prototype.setColor = Dk.prototype.Yo;
  Dk.prototype.setLineCap = Dk.prototype.eq;
  Dk.prototype.setLineDash = Dk.prototype.setLineDash;
  Dk.prototype.setLineDashOffset = Dk.prototype.fq;
  Dk.prototype.setLineJoin = Dk.prototype.gq;
  Dk.prototype.setMiterLimit = Dk.prototype.kq;
  Dk.prototype.setWidth = Dk.prototype.oq;
  t("ol.style.Style", Ek);
  Ek.prototype.clone = Ek.prototype.clone;
  Ek.prototype.getRenderer = Ek.prototype.Je;
  Ek.prototype.setRenderer = Ek.prototype.mq;
  Ek.prototype.getGeometry = Ek.prototype.W;
  Ek.prototype.getGeometryFunction = Ek.prototype.Zk;
  Ek.prototype.getFill = Ek.prototype.Ca;
  Ek.prototype.setFill = Ek.prototype.yf;
  Ek.prototype.getImage = Ek.prototype.Y;
  Ek.prototype.setImage = Ek.prototype.gh;
  Ek.prototype.getStroke = Ek.prototype.Da;
  Ek.prototype.setStroke = Ek.prototype.Af;
  Ek.prototype.getText = Ek.prototype.Ia;
  Ek.prototype.setText = Ek.prototype.Ed;
  Ek.prototype.getZIndex = Ek.prototype.za;
  Ek.prototype.setGeometry = Ek.prototype.Sa;
  Ek.prototype.setZIndex = Ek.prototype.Xb;
  t("ol.style.Text", Hn);
  Hn.prototype.clone = Hn.prototype.clone;
  Hn.prototype.getExceedLength = Hn.prototype.Wk;
  Hn.prototype.getFont = Hn.prototype.Xk;
  Hn.prototype.getMaxAngle = Hn.prototype.jl;
  Hn.prototype.getPlacement = Hn.prototype.ql;
  Hn.prototype.getOffsetX = Hn.prototype.ml;
  Hn.prototype.getOffsetY = Hn.prototype.nl;
  Hn.prototype.getFill = Hn.prototype.Ca;
  Hn.prototype.getRotateWithView = Hn.prototype.Zo;
  Hn.prototype.getRotation = Hn.prototype.$o;
  Hn.prototype.getScale = Hn.prototype.ap;
  Hn.prototype.getStroke = Hn.prototype.Da;
  Hn.prototype.getText = Hn.prototype.Ia;
  Hn.prototype.getTextAlign = Hn.prototype.wl;
  Hn.prototype.getTextBaseline = Hn.prototype.xl;
  Hn.prototype.setExceedLength = Hn.prototype.aq;
  Hn.prototype.setFont = Hn.prototype.Bj;
  Hn.prototype.setMaxAngle = Hn.prototype.hq;
  Hn.prototype.setOffsetX = Hn.prototype.Fj;
  Hn.prototype.setOffsetY = Hn.prototype.Gj;
  Hn.prototype.setPlacement = Hn.prototype.lq;
  Hn.prototype.setFill = Hn.prototype.yf;
  Hn.prototype.setRotation = Hn.prototype.bp;
  Hn.prototype.setScale = Hn.prototype.fj;
  Hn.prototype.setStroke = Hn.prototype.Af;
  Hn.prototype.setText = Hn.prototype.Ed;
  Hn.prototype.setTextAlign = Hn.prototype.Ij;
  Hn.prototype.setTextBaseline = Hn.prototype.nq;
  t("ol.source.BingMaps", ix);
  t("ol.source.BingMaps.TOS_ATTRIBUTION", jx);
  ix.prototype.getApiKey = ix.prototype.fa;
  ix.prototype.getImagerySet = ix.prototype.oa;
  t("ol.source.CartoDB", lx);
  lx.prototype.getConfig = lx.prototype.Uk;
  lx.prototype.updateConfig = lx.prototype.wq;
  lx.prototype.setConfig = lx.prototype.Zp;
  t("ol.source.Cluster", Y);
  Y.prototype.getDistance = Y.prototype.ko;
  Y.prototype.getSource = Y.prototype.lo;
  Y.prototype.setDistance = Y.prototype.$p;
  t("ol.source.Image", vw);
  xw.prototype.image = xw.prototype.image;
  t("ol.source.ImageArcGISRest", rx);
  rx.prototype.getParams = rx.prototype.no;
  rx.prototype.getImageLoadFunction = rx.prototype.mo;
  rx.prototype.getUrl = rx.prototype.oo;
  rx.prototype.setImageLoadFunction = rx.prototype.po;
  rx.prototype.setUrl = rx.prototype.qo;
  rx.prototype.updateParams = rx.prototype.ro;
  t("ol.source.ImageCanvas", Cw);
  t("ol.source.ImageMapGuide", sx);
  sx.prototype.getParams = sx.prototype.to;
  sx.prototype.getImageLoadFunction = sx.prototype.so;
  sx.prototype.updateParams = sx.prototype.vo;
  sx.prototype.setImageLoadFunction = sx.prototype.uo;
  t("ol.source.ImageStatic", tx);
  t("ol.source.ImageVector", Dw);
  Dw.prototype.getSource = Dw.prototype.wo;
  Dw.prototype.getStyle = Dw.prototype.xo;
  Dw.prototype.getStyleFunction = Dw.prototype.bb;
  Dw.prototype.setStyle = Dw.prototype.Vi;
  t("ol.source.ImageWMS", ux);
  ux.prototype.getGetFeatureInfoUrl = ux.prototype.Ao;
  ux.prototype.getParams = ux.prototype.Co;
  ux.prototype.getImageLoadFunction = ux.prototype.Bo;
  ux.prototype.getUrl = ux.prototype.Do;
  ux.prototype.setImageLoadFunction = ux.prototype.Eo;
  ux.prototype.setUrl = ux.prototype.Fo;
  ux.prototype.updateParams = ux.prototype.Go;
  t("ol.source.OSM", yx);
  t("ol.source.OSM.ATTRIBUTION", zx);
  t("ol.source.Raster", Ax);
  Ax.prototype.setOperation = Ax.prototype.v;
  Ex.prototype.extent = Ex.prototype.extent;
  Ex.prototype.resolution = Ex.prototype.resolution;
  Ex.prototype.data = Ex.prototype.data;
  t("ol.source.Source", Ks);
  Ks.prototype.getAttributions = Ks.prototype.Aa;
  Ks.prototype.getLogo = Ks.prototype.ya;
  Ks.prototype.getProjection = Ks.prototype.Ba;
  Ks.prototype.getState = Ks.prototype.getState;
  Ks.prototype.refresh = Ks.prototype.ua;
  Ks.prototype.setAttributions = Ks.prototype.va;
  t("ol.source.Stamen", Hx);
  t("ol.source.Tile", $w);
  $w.prototype.getTileGrid = $w.prototype.cb;
  cx.prototype.tile = cx.prototype.tile;
  t("ol.source.TileArcGISRest", Lx);
  Lx.prototype.getParams = Lx.prototype.s;
  Lx.prototype.updateParams = Lx.prototype.B;
  t("ol.source.TileDebug", Nx);
  t("ol.source.TileImage", ex);
  ex.prototype.setRenderReprojectionEdges = ex.prototype.Pb;
  ex.prototype.setTileGridForProjection = ex.prototype.Qb;
  t("ol.source.TileJSON", Px);
  Px.prototype.getTileJSON = Px.prototype.yl;
  t("ol.source.TileUTFGrid", Qx);
  Qx.prototype.getTemplate = Qx.prototype.vl;
  Qx.prototype.forDataAtCoordinateAndResolution = Qx.prototype.Kk;
  t("ol.source.TileWMS", Ux);
  Ux.prototype.getGetFeatureInfoUrl = Ux.prototype.No;
  Ux.prototype.getParams = Ux.prototype.Oo;
  Ux.prototype.updateParams = Ux.prototype.Po;
  dx.prototype.getTileLoadFunction = dx.prototype.vb;
  dx.prototype.getTileUrlFunction = dx.prototype.wb;
  dx.prototype.getUrls = dx.prototype.xb;
  dx.prototype.setTileLoadFunction = dx.prototype.Cb;
  dx.prototype.setTileUrlFunction = dx.prototype.jb;
  dx.prototype.setUrl = dx.prototype.ob;
  dx.prototype.setUrls = dx.prototype.tb;
  t("ol.source.Vector", S);
  S.prototype.addFeature = S.prototype.Eb;
  S.prototype.addFeatures = S.prototype.Ic;
  S.prototype.clear = S.prototype.clear;
  S.prototype.forEachFeature = S.prototype.Ih;
  S.prototype.forEachFeatureInExtent = S.prototype.ac;
  S.prototype.forEachFeatureIntersectingExtent = S.prototype.Jh;
  S.prototype.getFeaturesCollection = S.prototype.Qh;
  S.prototype.getFeatures = S.prototype.fe;
  S.prototype.getFeaturesAtCoordinate = S.prototype.Ph;
  S.prototype.getFeaturesInExtent = S.prototype.Zf;
  S.prototype.getClosestFeatureToCoordinate = S.prototype.Lh;
  S.prototype.getExtent = S.prototype.G;
  S.prototype.getFeatureById = S.prototype.Oh;
  S.prototype.getFormat = S.prototype.Zi;
  S.prototype.getUrl = S.prototype.$i;
  S.prototype.removeFeature = S.prototype.Ib;
  S.prototype.setLoader = S.prototype.bj;
  Xs.prototype.feature = Xs.prototype.feature;
  t("ol.source.VectorTile", by);
  by.prototype.clear = by.prototype.clear;
  t("ol.source.WMTS", Z);
  Z.prototype.getDimensions = Z.prototype.Vk;
  Z.prototype.getFormat = Z.prototype.Qo;
  Z.prototype.getLayer = Z.prototype.Ro;
  Z.prototype.getMatrixSet = Z.prototype.il;
  Z.prototype.getRequestEncoding = Z.prototype.tl;
  Z.prototype.getStyle = Z.prototype.So;
  Z.prototype.getVersion = Z.prototype.Al;
  Z.prototype.updateDimensions = Z.prototype.xq;
  t("ol.source.WMTS.optionsFromCapabilities", function(a, b) {
      var c = ka(a.Contents.Layer, function(a) {
          return a.Identifier == b.layer
      });
      if (null === c)
          return null;
      var d = a.Contents.TileMatrixSet;
      var e = 1 < c.TileMatrixSetLink.length ? "projection"in b ? pa(c.TileMatrixSetLink, function(a) {
          var c = ka(d, function(b) {
              return b.Identifier == a.TileMatrixSet
          }).SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3")
            , e = Zb(c)
            , f = Zb(b.projection);
          return e && f ? hc(e, f) : c == b.projection
      }) : pa(c.TileMatrixSetLink, function(a) {
          return a.TileMatrixSet == b.matrixSet
      }) : 0;
      0 > e && (e = 0);
      var f = c.TileMatrixSetLink[e].TileMatrixSet;
      var g = c.TileMatrixSetLink[e].TileMatrixSetLimits;
      var h = c.Format[0];
      "format"in b && (h = b.format);
      e = pa(c.Style, function(a) {
          return "style"in b ? a.Title == b.style : a.isDefault
      });
      0 > e && (e = 0);
      e = c.Style[e].Identifier;
      var l = {};
      "Dimension"in c && c.Dimension.forEach(function(a) {
          var b = a.Identifier
            , c = a.Default;
          void 0 === c && (c = a.Value[0]);
          l[b] = c
      });
      var m = ka(a.Contents.TileMatrixSet, function(a) {
          return a.Identifier == f
      });
      var n = "projection"in b ? Zb(b.projection) : Zb(m.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
      var p = c.WGS84BoundingBox;
      if (void 0 !== p) {
          var q = Zb("EPSG:4326").G();
          q = p[0] == q[0] && p[2] == q[2];
          var r = lc(p, "EPSG:4326", n);
          (p = n.G()) && (Wa(p, r) || (r = void 0))
      }
      g = dy(m, r, g);
      var u = [];
      m = b.requestEncoding;
      m = void 0 !== m ? m : "";
      if ("OperationsMetadata"in a && "GetTile"in a.OperationsMetadata)
          for (a = a.OperationsMetadata.GetTile.DCP.HTTP.Get,
          r = 0,
          p = a.length; r < p; ++r) {
              var x = ka(a[r].Constraint, function(a) {
                  return "GetEncoding" == a.name
              }).AllowedValues.Value;
              "" === m && (m = x[0]);
              if ("KVP" === m)
                  ha(x, "KVP") && u.push(a[r].href);
              else
                  break
          }
      0 === u.length && (m = "REST",
      c.ResourceURL.forEach(function(a) {
          "tile" === a.resourceType && (h = a.format,
          u.push(a.template))
      }));
      return {
          urls: u,
          layer: b.layer,
          matrixSet: f,
          format: h,
          projection: n,
          requestEncoding: m,
          tileGrid: g,
          style: e,
          dimensions: l,
          wrapX: q,
          crossOrigin: b.crossOrigin
      }
  });
  t("ol.source.XYZ", kx);
  t("ol.source.Zoomify", fy);
  t("ol.renderer.webgl.ImageLayer", Fw);
  t("ol.renderer.webgl.Map", Iw);
  t("ol.renderer.webgl.TileLayer", Pw);
  t("ol.renderer.webgl.VectorLayer", Qw);
  t("ol.renderer.canvas.ImageLayer", vi);
  t("ol.renderer.canvas.Map", Fi);
  t("ol.renderer.canvas.TileLayer", Hi);
  t("ol.renderer.canvas.VectorLayer", Aj);
  t("ol.renderer.canvas.VectorTileLayer", Cj);
  Ih.prototype.vectorContext = Ih.prototype.vectorContext;
  Ih.prototype.frameState = Ih.prototype.frameState;
  Ih.prototype.context = Ih.prototype.context;
  Ih.prototype.glContext = Ih.prototype.glContext;
  Pp.prototype.get = Pp.prototype.get;
  Pp.prototype.getExtent = Pp.prototype.G;
  Pp.prototype.getId = Pp.prototype.fo;
  Pp.prototype.getGeometry = Pp.prototype.W;
  Pp.prototype.getProperties = Pp.prototype.ho;
  Pp.prototype.getType = Pp.prototype.S;
  t("ol.render.VectorContext", Uh);
  gw.prototype.setStyle = gw.prototype.zd;
  gw.prototype.drawGeometry = gw.prototype.Fb;
  gw.prototype.drawFeature = gw.prototype.Fe;
  Vh.prototype.drawCircle = Vh.prototype.$b;
  Vh.prototype.setStyle = Vh.prototype.zd;
  Vh.prototype.drawGeometry = Vh.prototype.Fb;
  Vh.prototype.drawFeature = Vh.prototype.Fe;
  t("ol.proj.common.add", mc);
  t("ol.proj.Projection", Gb);
  Gb.prototype.getCode = Gb.prototype.Tk;
  Gb.prototype.getExtent = Gb.prototype.G;
  Gb.prototype.getUnits = Gb.prototype.eo;
  Gb.prototype.getMetersPerUnit = Gb.prototype.Rc;
  Gb.prototype.getWorldExtent = Gb.prototype.Bl;
  Gb.prototype.isGlobal = Gb.prototype.mm;
  Gb.prototype.setGlobal = Gb.prototype.cq;
  Gb.prototype.setExtent = Gb.prototype.Pi;
  Gb.prototype.setWorldExtent = Gb.prototype.Kj;
  Gb.prototype.setGetPointResolution = Gb.prototype.bq;
  t("ol.proj.Units.METERS_PER_UNIT", Eb);
  t("ol.layer.Base", gg);
  gg.prototype.getExtent = gg.prototype.G;
  gg.prototype.getMaxResolution = gg.prototype.hc;
  gg.prototype.getMinResolution = gg.prototype.ic;
  gg.prototype.getOpacity = gg.prototype.jc;
  gg.prototype.getVisible = gg.prototype.Tb;
  gg.prototype.getZIndex = gg.prototype.za;
  gg.prototype.setExtent = gg.prototype.zc;
  gg.prototype.setMaxResolution = gg.prototype.Ec;
  gg.prototype.setMinResolution = gg.prototype.Fc;
  gg.prototype.setOpacity = gg.prototype.Ac;
  gg.prototype.setVisible = gg.prototype.Bc;
  gg.prototype.setZIndex = gg.prototype.Xb;
  t("ol.layer.Group", ig);
  ig.prototype.getLayers = ig.prototype.yd;
  ig.prototype.setLayers = ig.prototype.Ni;
  t("ol.layer.Heatmap", V);
  V.prototype.getBlur = V.prototype.Kh;
  V.prototype.getGradient = V.prototype.Rh;
  V.prototype.getRadius = V.prototype.Oi;
  V.prototype.setBlur = V.prototype.xj;
  V.prototype.setGradient = V.prototype.Dj;
  V.prototype.setRadius = V.prototype.$c;
  t("ol.layer.Image", nu);
  nu.prototype.getSource = nu.prototype.ia;
  t("ol.layer.Layer", wi);
  wi.prototype.getSource = wi.prototype.ia;
  wi.prototype.setMap = wi.prototype.setMap;
  wi.prototype.setSource = wi.prototype.bd;
  t("ol.layer.Tile", ou);
  ou.prototype.getPreload = ou.prototype.c;
  ou.prototype.getSource = ou.prototype.ia;
  ou.prototype.setPreload = ou.prototype.j;
  ou.prototype.getUseInterimTilesOnError = ou.prototype.i;
  ou.prototype.setUseInterimTilesOnError = ou.prototype.C;
  t("ol.layer.Vector", R);
  R.prototype.getSource = R.prototype.ia;
  R.prototype.getStyle = R.prototype.D;
  R.prototype.getStyleFunction = R.prototype.bb;
  R.prototype.setStyle = R.prototype.j;
  t("ol.layer.VectorTile", W);
  W.prototype.getPreload = W.prototype.c;
  W.prototype.getUseInterimTilesOnError = W.prototype.i;
  W.prototype.setPreload = W.prototype.B;
  W.prototype.setUseInterimTilesOnError = W.prototype.T;
  W.prototype.getSource = W.prototype.ia;
  t("ol.interaction.DoubleClickZoom", Hg);
  t("ol.interaction.DoubleClickZoom.handleEvent", Ig);
  t("ol.interaction.DragAndDrop", ys);
  t("ol.interaction.DragAndDrop.handleEvent", Pe);
  Bs.prototype.features = Bs.prototype.features;
  Bs.prototype.file = Bs.prototype.file;
  Bs.prototype.projection = Bs.prototype.projection;
  t("ol.interaction.DragBox", gh);
  gh.prototype.getGeometry = gh.prototype.W;
  lh.prototype.coordinate = lh.prototype.coordinate;
  lh.prototype.mapBrowserEvent = lh.prototype.mapBrowserEvent;
  t("ol.interaction.DragPan", Wg);
  t("ol.interaction.DragRotate", $g);
  t("ol.interaction.DragRotateAndZoom", Fs);
  t("ol.interaction.DragZoom", ph);
  t("ol.interaction.Draw", $s);
  t("ol.interaction.Draw.handleEvent", bt);
  $s.prototype.removeLastPoint = $s.prototype.Up;
  $s.prototype.finishDrawing = $s.prototype.Td;
  $s.prototype.extend = $s.prototype.Fn;
  t("ol.interaction.Draw.createRegularPolygon", function(a, b) {
      return function(c, d) {
          var e = c[0];
          c = c[1];
          var f = Math.sqrt(Ge(e, c));
          d = d ? d : Sf(new es(e), a);
          Tf(d, e, f, b ? b : Math.atan((c[1] - e[1]) / (c[0] - e[0])));
          return d
      }
  });
  t("ol.interaction.Draw.createBox", function() {
      return function(a, b) {
          a = Oa(a);
          b = b || new E(null);
          b.na([[fb(a), gb(a), hb(a), ib(a), fb(a)]]);
          return b
      }
  });
  pt.prototype.feature = pt.prototype.feature;
  t("ol.interaction.Extent", qt);
  qt.prototype.getExtent = qt.prototype.G;
  qt.prototype.setExtent = qt.prototype.g;
  Bt.prototype.extent = Bt.prototype.extent;
  t("ol.interaction.Interaction", Bg);
  Bg.prototype.getActive = Bg.prototype.c;
  Bg.prototype.getMap = Bg.prototype.i;
  Bg.prototype.setActive = Bg.prototype.Ga;
  t("ol.interaction.KeyboardPan", qh);
  t("ol.interaction.KeyboardPan.handleEvent", rh);
  t("ol.interaction.KeyboardZoom", th);
  t("ol.interaction.KeyboardZoom.handleEvent", uh);
  t("ol.interaction.Modify", Ct);
  t("ol.interaction.Modify.handleEvent", Ft);
  Ct.prototype.removePoint = Ct.prototype.vj;
  Kt.prototype.features = Kt.prototype.features;
  Kt.prototype.mapBrowserEvent = Kt.prototype.mapBrowserEvent;
  t("ol.interaction.MouseWheelZoom", vh);
  t("ol.interaction.MouseWheelZoom.handleEvent", wh);
  vh.prototype.setMouseAnchor = vh.prototype.U;
  t("ol.interaction.PinchRotate", zh);
  t("ol.interaction.PinchZoom", Dh);
  t("ol.interaction.Pointer", Tg);
  t("ol.interaction.Pointer.handleEvent", Ug);
  t("ol.interaction.Select", St);
  St.prototype.getFeatures = St.prototype.Qn;
  St.prototype.getHitTolerance = St.prototype.Rn;
  St.prototype.getLayer = St.prototype.Sn;
  t("ol.interaction.Select.handleEvent", Tt);
  St.prototype.setHitTolerance = St.prototype.Un;
  St.prototype.setMap = St.prototype.setMap;
  Vt.prototype.selected = Vt.prototype.selected;
  Vt.prototype.deselected = Vt.prototype.deselected;
  Vt.prototype.mapBrowserEvent = Vt.prototype.mapBrowserEvent;
  t("ol.interaction.Snap", Xt);
  Xt.prototype.addFeature = Xt.prototype.Eb;
  Xt.prototype.removeFeature = Xt.prototype.Ib;
  t("ol.interaction.Translate", bu);
  bu.prototype.getHitTolerance = bu.prototype.B;
  bu.prototype.setHitTolerance = bu.prototype.I;
  hu.prototype.features = hu.prototype.features;
  hu.prototype.coordinate = hu.prototype.coordinate;
  t("ol.geom.Circle", es);
  es.prototype.clone = es.prototype.clone;
  es.prototype.getCenter = es.prototype.xa;
  es.prototype.getRadius = es.prototype.xd;
  es.prototype.getType = es.prototype.S;
  es.prototype.intersectsExtent = es.prototype.Ya;
  es.prototype.setCenter = es.prototype.rb;
  es.prototype.setCenterAndRadius = es.prototype.fh;
  es.prototype.setRadius = es.prototype.$c;
  es.prototype.transform = es.prototype.hb;
  t("ol.geom.Geometry", ef);
  ef.prototype.getClosestPoint = ef.prototype.Gb;
  ef.prototype.intersectsCoordinate = ef.prototype.yb;
  ef.prototype.getExtent = ef.prototype.G;
  ef.prototype.rotate = ef.prototype.rotate;
  ef.prototype.scale = ef.prototype.scale;
  ef.prototype.simplify = ef.prototype.Rb;
  ef.prototype.transform = ef.prototype.hb;
  t("ol.geom.GeometryCollection", Wl);
  Wl.prototype.clone = Wl.prototype.clone;
  Wl.prototype.getGeometries = Wl.prototype.pd;
  Wl.prototype.getType = Wl.prototype.S;
  Wl.prototype.intersectsExtent = Wl.prototype.Ya;
  Wl.prototype.setGeometries = Wl.prototype.Cj;
  Wl.prototype.applyTransform = Wl.prototype.Jc;
  Wl.prototype.translate = Wl.prototype.translate;
  t("ol.geom.LinearRing", Bf);
  Bf.prototype.clone = Bf.prototype.clone;
  Bf.prototype.getArea = Bf.prototype.Bn;
  Bf.prototype.getCoordinates = Bf.prototype.V;
  Bf.prototype.getType = Bf.prototype.S;
  Bf.prototype.setCoordinates = Bf.prototype.na;
  t("ol.geom.LineString", M);
  M.prototype.appendCoordinate = M.prototype.xk;
  M.prototype.clone = M.prototype.clone;
  M.prototype.forEachSegment = M.prototype.Nk;
  M.prototype.getCoordinateAtM = M.prototype.zn;
  M.prototype.getCoordinates = M.prototype.V;
  M.prototype.getCoordinateAt = M.prototype.Mh;
  M.prototype.getLength = M.prototype.An;
  M.prototype.getType = M.prototype.S;
  M.prototype.intersectsExtent = M.prototype.Ya;
  M.prototype.setCoordinates = M.prototype.na;
  t("ol.geom.MultiLineString", O);
  O.prototype.appendLineString = O.prototype.yk;
  O.prototype.clone = O.prototype.clone;
  O.prototype.getCoordinateAtM = O.prototype.Cn;
  O.prototype.getCoordinates = O.prototype.V;
  O.prototype.getLineString = O.prototype.gl;
  O.prototype.getLineStrings = O.prototype.qd;
  O.prototype.getType = O.prototype.S;
  O.prototype.intersectsExtent = O.prototype.Ya;
  O.prototype.setCoordinates = O.prototype.na;
  t("ol.geom.MultiPoint", ql);
  ql.prototype.appendPoint = ql.prototype.Ak;
  ql.prototype.clone = ql.prototype.clone;
  ql.prototype.getCoordinates = ql.prototype.V;
  ql.prototype.getPoint = ql.prototype.rl;
  ql.prototype.getPoints = ql.prototype.ee;
  ql.prototype.getType = ql.prototype.S;
  ql.prototype.intersectsExtent = ql.prototype.Ya;
  ql.prototype.setCoordinates = ql.prototype.na;
  t("ol.geom.MultiPolygon", P);
  P.prototype.appendPolygon = P.prototype.Bk;
  P.prototype.clone = P.prototype.clone;
  P.prototype.getArea = P.prototype.Dn;
  P.prototype.getCoordinates = P.prototype.V;
  P.prototype.getInteriorPoints = P.prototype.cl;
  P.prototype.getPolygon = P.prototype.sl;
  P.prototype.getPolygons = P.prototype.Yd;
  P.prototype.getType = P.prototype.S;
  P.prototype.intersectsExtent = P.prototype.Ya;
  P.prototype.setCoordinates = P.prototype.na;
  t("ol.geom.Point", D);
  D.prototype.clone = D.prototype.clone;
  D.prototype.getCoordinates = D.prototype.V;
  D.prototype.getType = D.prototype.S;
  D.prototype.intersectsExtent = D.prototype.Ya;
  D.prototype.setCoordinates = D.prototype.na;
  t("ol.geom.Polygon", E);
  E.prototype.appendLinearRing = E.prototype.zk;
  E.prototype.clone = E.prototype.clone;
  E.prototype.getArea = E.prototype.En;
  E.prototype.getCoordinates = E.prototype.V;
  E.prototype.getInteriorPoint = E.prototype.bl;
  E.prototype.getLinearRingCount = E.prototype.hl;
  E.prototype.getLinearRing = E.prototype.Sh;
  E.prototype.getLinearRings = E.prototype.Xd;
  E.prototype.getType = E.prototype.S;
  E.prototype.intersectsExtent = E.prototype.Ya;
  E.prototype.setCoordinates = E.prototype.na;
  t("ol.geom.Polygon.circular", Qf);
  t("ol.geom.Polygon.fromExtent", Rf);
  t("ol.geom.Polygon.fromCircle", Sf);
  t("ol.geom.SimpleGeometry", ff);
  ff.prototype.getFirstCoordinate = ff.prototype.bc;
  ff.prototype.getLastCoordinate = ff.prototype.cc;
  ff.prototype.getLayout = ff.prototype.ec;
  ff.prototype.applyTransform = ff.prototype.Jc;
  ff.prototype.translate = ff.prototype.translate;
  t("ol.format.EsriJSON", sl);
  sl.prototype.readFeature = sl.prototype.Vb;
  sl.prototype.readFeatures = sl.prototype.Ma;
  sl.prototype.readGeometry = sl.prototype.Yc;
  sl.prototype.readProjection = sl.prototype.pb;
  sl.prototype.writeGeometry = sl.prototype.fd;
  sl.prototype.writeGeometryObject = sl.prototype.ve;
  sl.prototype.writeFeature = sl.prototype.Gd;
  sl.prototype.writeFeatureObject = sl.prototype.ed;
  sl.prototype.writeFeatures = sl.prototype.Yb;
  sl.prototype.writeFeaturesObject = sl.prototype.te;
  t("ol.format.Feature", fl);
  t("ol.format.filter.and", Ul);
  t("ol.format.filter.or", function(a) {
      var b = [null].concat(Array.prototype.slice.call(arguments));
      return new (Function.prototype.bind.apply(Sl, b))
  });
  t("ol.format.filter.not", function(a) {
      return new Ql(a)
  });
  t("ol.format.filter.bbox", Vl);
  t("ol.format.filter.intersects", function(a, b, c) {
      return new Kl(a,b,c)
  });
  t("ol.format.filter.within", function(a, b, c) {
      return new Tl(a,b,c)
  });
  t("ol.format.filter.equalTo", function(a, b, c) {
      return new Gl(a,b,c)
  });
  t("ol.format.filter.notEqualTo", function(a, b, c) {
      return new Rl(a,b,c)
  });
  t("ol.format.filter.lessThan", function(a, b) {
      return new Ol(a,b)
  });
  t("ol.format.filter.lessThanOrEqualTo", function(a, b) {
      return new Pl(a,b)
  });
  t("ol.format.filter.greaterThan", function(a, b) {
      return new Hl(a,b)
  });
  t("ol.format.filter.greaterThanOrEqualTo", function(a, b) {
      return new Il(a,b)
  });
  t("ol.format.filter.isNull", function(a) {
      return new Nl(a)
  });
  t("ol.format.filter.between", function(a, b, c) {
      return new Ll(a,b,c)
  });
  t("ol.format.filter.like", function(a, b, c, d, e, f) {
      return new Ml(a,b,c,d,e,f)
  });
  t("ol.format.filter.during", function(a, b, c) {
      return new El(a,b,c)
  });
  t("ol.format.GeoJSON", $l);
  $l.prototype.readFeature = $l.prototype.Vb;
  $l.prototype.readFeatures = $l.prototype.Ma;
  $l.prototype.readGeometry = $l.prototype.Yc;
  $l.prototype.readProjection = $l.prototype.pb;
  $l.prototype.writeFeature = $l.prototype.Gd;
  $l.prototype.writeFeatureObject = $l.prototype.ed;
  $l.prototype.writeFeatures = $l.prototype.Yb;
  $l.prototype.writeFeaturesObject = $l.prototype.te;
  $l.prototype.writeGeometry = $l.prototype.fd;
  $l.prototype.writeGeometryObject = $l.prototype.ve;
  t("ol.format.GML", um);
  um.prototype.writeFeatures = um.prototype.Yb;
  um.prototype.writeFeaturesNode = um.prototype.Zb;
  t("ol.format.GML2", Dm);
  t("ol.format.GML3", um);
  um.prototype.writeGeometryNode = um.prototype.ue;
  um.prototype.writeFeatures = um.prototype.Yb;
  um.prototype.writeFeaturesNode = um.prototype.Zb;
  hm.prototype.readFeatures = hm.prototype.Ma;
  t("ol.format.GPX", Om);
  Om.prototype.readFeature = Om.prototype.Vb;
  Om.prototype.readFeatures = Om.prototype.Ma;
  Om.prototype.readProjection = Om.prototype.pb;
  Om.prototype.writeFeatures = Om.prototype.Yb;
  Om.prototype.writeFeaturesNode = Om.prototype.Zb;
  t("ol.format.IGC", zn);
  zn.prototype.readFeature = zn.prototype.Vb;
  zn.prototype.readFeatures = zn.prototype.Ma;
  zn.prototype.readProjection = zn.prototype.pb;
  t("ol.format.KML", In);
  In.prototype.readFeature = In.prototype.Vb;
  In.prototype.readFeatures = In.prototype.Ma;
  In.prototype.readName = In.prototype.Kp;
  In.prototype.readNetworkLinks = In.prototype.Lp;
  In.prototype.readRegion = In.prototype.Op;
  In.prototype.readRegionFromNode = In.prototype.vf;
  In.prototype.readProjection = In.prototype.pb;
  In.prototype.writeFeatures = In.prototype.Yb;
  In.prototype.writeFeaturesNode = In.prototype.Zb;
  t("ol.format.MVT", Qp);
  Qp.prototype.getLastExtent = Qp.prototype.dg;
  Qp.prototype.readFeatures = Qp.prototype.Ma;
  Qp.prototype.readProjection = Qp.prototype.pb;
  Qp.prototype.setLayers = Qp.prototype.yn;
  t("ol.format.OSMXML", Vp);
  Vp.prototype.readFeatures = Vp.prototype.Ma;
  Vp.prototype.readProjection = Vp.prototype.pb;
  t("ol.format.Polyline", tq);
  t("ol.format.Polyline.encodeDeltas", uq);
  t("ol.format.Polyline.decodeDeltas", wq);
  t("ol.format.Polyline.encodeFloats", vq);
  t("ol.format.Polyline.decodeFloats", xq);
  tq.prototype.readFeature = tq.prototype.Vb;
  tq.prototype.readFeatures = tq.prototype.Ma;
  tq.prototype.readGeometry = tq.prototype.Yc;
  tq.prototype.readProjection = tq.prototype.pb;
  tq.prototype.writeGeometry = tq.prototype.fd;
  t("ol.format.TopoJSON", yq);
  yq.prototype.readFeatures = yq.prototype.Ma;
  yq.prototype.readProjection = yq.prototype.pb;
  t("ol.format.WFS", Eq);
  Eq.prototype.readFeatures = Eq.prototype.Ma;
  Eq.prototype.readTransactionResponse = Eq.prototype.j;
  Eq.prototype.readFeatureCollectionMetadata = Eq.prototype.g;
  t("ol.format.WFS.writeFilter", function(a) {
      var b = Nk("http://www.opengis.net/ogc", "Filter");
      cl({
          node: b
      }, Tq, Yk(a.nc), [a], []);
      return b
  });
  Eq.prototype.writeGetFeature = Eq.prototype.o;
  Eq.prototype.writeTransaction = Eq.prototype.v;
  Eq.prototype.readProjection = Eq.prototype.pb;
  t("ol.format.WKT", Zq);
  Zq.prototype.readFeature = Zq.prototype.Vb;
  Zq.prototype.readFeatures = Zq.prototype.Ma;
  Zq.prototype.readGeometry = Zq.prototype.Yc;
  Zq.prototype.writeFeature = Zq.prototype.Gd;
  Zq.prototype.writeFeatures = Zq.prototype.Yb;
  Zq.prototype.writeGeometry = Zq.prototype.fd;
  t("ol.format.WMSCapabilities", rr);
  rr.prototype.read = rr.prototype.read;
  t("ol.format.WMSGetFeatureInfo", Or);
  Or.prototype.readFeatures = Or.prototype.Ma;
  t("ol.format.WMTSCapabilities", Pr);
  Pr.prototype.read = Pr.prototype.read;
  t("ol.format.filter.And", Bl);
  t("ol.format.filter.Bbox", Cl);
  t("ol.format.filter.Comparison", Dl);
  t("ol.format.filter.ComparisonBinary", Fl);
  t("ol.format.filter.During", El);
  t("ol.format.filter.EqualTo", Gl);
  t("ol.format.filter.Filter", zl);
  t("ol.format.filter.GreaterThan", Hl);
  t("ol.format.filter.GreaterThanOrEqualTo", Il);
  t("ol.format.filter.Intersects", Kl);
  t("ol.format.filter.IsBetween", Ll);
  t("ol.format.filter.IsLike", Ml);
  t("ol.format.filter.IsNull", Nl);
  t("ol.format.filter.LessThan", Ol);
  t("ol.format.filter.LessThanOrEqualTo", Pl);
  t("ol.format.filter.Not", Ql);
  t("ol.format.filter.NotEqualTo", Rl);
  t("ol.format.filter.Or", Sl);
  t("ol.format.filter.Spatial", Jl);
  t("ol.format.filter.Within", Tl);
  t("ol.events.condition.altKeyOnly", Jg);
  t("ol.events.condition.altShiftKeysOnly", Kg);
  t("ol.events.condition.always", Pe);
  t("ol.events.condition.click", function(a) {
      return "click" == a.type
  });
  t("ol.events.condition.never", Qe);
  t("ol.events.condition.pointerMove", Mg);
  t("ol.events.condition.singleClick", Ng);
  t("ol.events.condition.doubleClick", function(a) {
      return "dblclick" == a.type
  });
  t("ol.events.condition.noModifierKeys", Og);
  t("ol.events.condition.platformModifierKeyOnly", function(a) {
      a = a.originalEvent;
      return !a.altKey && (od ? a.metaKey : a.ctrlKey) && !a.shiftKey
  });
  t("ol.events.condition.shiftKeyOnly", Pg);
  t("ol.events.condition.targetNotEditable", Qg);
  t("ol.events.condition.mouseOnly", Rg);
  t("ol.events.condition.primaryAction", Sg);
  Rc.prototype.type = Rc.prototype.type;
  Rc.prototype.target = Rc.prototype.target;
  Rc.prototype.preventDefault = Rc.prototype.preventDefault;
  Rc.prototype.stopPropagation = Rc.prototype.stopPropagation;
  t("ol.control.Attribution", rg);
  t("ol.control.Attribution.render", sg);
  rg.prototype.getCollapsible = rg.prototype.dn;
  rg.prototype.setCollapsible = rg.prototype.gn;
  rg.prototype.setCollapsed = rg.prototype.fn;
  rg.prototype.getCollapsed = rg.prototype.cn;
  t("ol.control.Control", qg);
  qg.prototype.getMap = qg.prototype.g;
  qg.prototype.setMap = qg.prototype.setMap;
  qg.prototype.setTarget = qg.prototype.i;
  t("ol.control.FullScreen", Hj);
  t("ol.control.MousePosition", Mj);
  t("ol.control.MousePosition.render", Nj);
  Mj.prototype.getCoordinateFormat = Mj.prototype.Nh;
  Mj.prototype.getProjection = Mj.prototype.oi;
  Mj.prototype.setCoordinateFormat = Mj.prototype.yj;
  Mj.prototype.setProjection = Mj.prototype.pi;
  t("ol.control.OverviewMap", ak);
  t("ol.control.OverviewMap.render", bk);
  ak.prototype.getCollapsible = ak.prototype.kn;
  ak.prototype.setCollapsible = ak.prototype.nn;
  ak.prototype.setCollapsed = ak.prototype.mn;
  ak.prototype.getCollapsed = ak.prototype.jn;
  ak.prototype.getOverviewMap = ak.prototype.ol;
  t("ol.control.Rotate", ug);
  t("ol.control.Rotate.render", vg);
  t("ol.control.ScaleLine", fk);
  fk.prototype.getUnits = fk.prototype.D;
  t("ol.control.ScaleLine.render", gk);
  fk.prototype.setUnits = fk.prototype.I;
  t("ol.control.Zoom", wg);
  t("ol.control.ZoomSlider", kk);
  t("ol.control.ZoomSlider.render", mk);
  t("ol.control.ZoomToExtent", rk);
  Wc.prototype.changed = Wc.prototype.u;
  Wc.prototype.dispatchEvent = Wc.prototype.b;
  Wc.prototype.getRevision = Wc.prototype.L;
  Wc.prototype.on = Wc.prototype.J;
  Wc.prototype.once = Wc.prototype.once;
  Wc.prototype.un = Wc.prototype.K;
  G.prototype.get = G.prototype.get;
  G.prototype.getKeys = G.prototype.P;
  G.prototype.getProperties = G.prototype.M;
  G.prototype.set = G.prototype.set;
  G.prototype.setProperties = G.prototype.H;
  G.prototype.unset = G.prototype.R;
  G.prototype.changed = G.prototype.u;
  G.prototype.dispatchEvent = G.prototype.b;
  G.prototype.getRevision = G.prototype.L;
  G.prototype.on = G.prototype.J;
  G.prototype.once = G.prototype.once;
  G.prototype.un = G.prototype.K;
  H.prototype.addControl = H.prototype.Mf;
  H.prototype.addInteraction = H.prototype.Nf;
  H.prototype.addLayer = H.prototype.Ae;
  H.prototype.addOverlay = H.prototype.Be;
  H.prototype.forEachFeatureAtPixel = H.prototype.Mc;
  H.prototype.getFeaturesAtPixel = H.prototype.Yf;
  H.prototype.forEachLayerAtPixel = H.prototype.sg;
  H.prototype.hasFeatureAtPixel = H.prototype.ng;
  H.prototype.getEventCoordinate = H.prototype.Wd;
  H.prototype.getEventPixel = H.prototype.od;
  H.prototype.getTarget = H.prototype.$d;
  H.prototype.getTargetElement = H.prototype.wc;
  H.prototype.getCoordinateFromPixel = H.prototype.Na;
  H.prototype.getControls = H.prototype.Xf;
  H.prototype.getOverlays = H.prototype.hg;
  H.prototype.getOverlayById = H.prototype.gg;
  H.prototype.getInteractions = H.prototype.cg;
  H.prototype.getLayerGroup = H.prototype.dc;
  H.prototype.getLayers = H.prototype.Ye;
  H.prototype.getPixelFromCoordinate = H.prototype.Ha;
  H.prototype.getSize = H.prototype.zb;
  H.prototype.getView = H.prototype.$;
  H.prototype.getViewport = H.prototype.lg;
  H.prototype.renderSync = H.prototype.ah;
  H.prototype.render = H.prototype.render;
  H.prototype.removeControl = H.prototype.Vg;
  H.prototype.removeInteraction = H.prototype.Xg;
  H.prototype.removeLayer = H.prototype.Yg;
  H.prototype.removeOverlay = H.prototype.Zg;
  H.prototype.setLayerGroup = H.prototype.zf;
  H.prototype.setSize = H.prototype.ke;
  H.prototype.setTarget = H.prototype.vd;
  H.prototype.setView = H.prototype.hh;
  H.prototype.updateSize = H.prototype.Gc;
  H.prototype.get = H.prototype.get;
  H.prototype.getKeys = H.prototype.P;
  H.prototype.getProperties = H.prototype.M;
  H.prototype.set = H.prototype.set;
  H.prototype.setProperties = H.prototype.H;
  H.prototype.unset = H.prototype.R;
  H.prototype.changed = H.prototype.u;
  H.prototype.dispatchEvent = H.prototype.b;
  H.prototype.getRevision = H.prototype.L;
  H.prototype.on = H.prototype.J;
  H.prototype.once = H.prototype.once;
  H.prototype.un = H.prototype.K;
  C.prototype.get = C.prototype.get;
  C.prototype.getKeys = C.prototype.P;
  C.prototype.getProperties = C.prototype.M;
  C.prototype.set = C.prototype.set;
  C.prototype.setProperties = C.prototype.H;
  C.prototype.unset = C.prototype.R;
  C.prototype.changed = C.prototype.u;
  C.prototype.dispatchEvent = C.prototype.b;
  C.prototype.getRevision = C.prototype.L;
  C.prototype.on = C.prototype.J;
  C.prototype.once = C.prototype.once;
  C.prototype.un = C.prototype.K;
  dd.prototype.type = dd.prototype.type;
  dd.prototype.target = dd.prototype.target;
  dd.prototype.preventDefault = dd.prototype.preventDefault;
  dd.prototype.stopPropagation = dd.prototype.stopPropagation;
  sk.prototype.get = sk.prototype.get;
  sk.prototype.getKeys = sk.prototype.P;
  sk.prototype.getProperties = sk.prototype.M;
  sk.prototype.set = sk.prototype.set;
  sk.prototype.setProperties = sk.prototype.H;
  sk.prototype.unset = sk.prototype.R;
  sk.prototype.changed = sk.prototype.u;
  sk.prototype.dispatchEvent = sk.prototype.b;
  sk.prototype.getRevision = sk.prototype.L;
  sk.prototype.on = sk.prototype.J;
  sk.prototype.once = sk.prototype.once;
  sk.prototype.un = sk.prototype.K;
  Kk.prototype.get = Kk.prototype.get;
  Kk.prototype.getKeys = Kk.prototype.P;
  Kk.prototype.getProperties = Kk.prototype.M;
  Kk.prototype.set = Kk.prototype.set;
  Kk.prototype.setProperties = Kk.prototype.H;
  Kk.prototype.unset = Kk.prototype.R;
  Kk.prototype.changed = Kk.prototype.u;
  Kk.prototype.dispatchEvent = Kk.prototype.b;
  Kk.prototype.getRevision = Kk.prototype.L;
  Kk.prototype.on = Kk.prototype.J;
  Kk.prototype.once = Kk.prototype.once;
  Kk.prototype.un = Kk.prototype.K;
  ds.prototype.get = ds.prototype.get;
  ds.prototype.getKeys = ds.prototype.P;
  ds.prototype.getProperties = ds.prototype.M;
  ds.prototype.set = ds.prototype.set;
  ds.prototype.setProperties = ds.prototype.H;
  ds.prototype.unset = ds.prototype.R;
  ds.prototype.changed = ds.prototype.u;
  ds.prototype.dispatchEvent = ds.prototype.b;
  ds.prototype.getRevision = ds.prototype.L;
  ds.prototype.on = ds.prototype.J;
  ds.prototype.once = ds.prototype.once;
  ds.prototype.un = ds.prototype.K;
  us.prototype.getTileCoord = us.prototype.i;
  us.prototype.load = us.prototype.load;
  X.prototype.addControl = X.prototype.Mf;
  X.prototype.addInteraction = X.prototype.Nf;
  X.prototype.addLayer = X.prototype.Ae;
  X.prototype.addOverlay = X.prototype.Be;
  X.prototype.forEachFeatureAtPixel = X.prototype.Mc;
  X.prototype.getFeaturesAtPixel = X.prototype.Yf;
  X.prototype.forEachLayerAtPixel = X.prototype.sg;
  X.prototype.hasFeatureAtPixel = X.prototype.ng;
  X.prototype.getEventCoordinate = X.prototype.Wd;
  X.prototype.getEventPixel = X.prototype.od;
  X.prototype.getTarget = X.prototype.$d;
  X.prototype.getTargetElement = X.prototype.wc;
  X.prototype.getCoordinateFromPixel = X.prototype.Na;
  X.prototype.getControls = X.prototype.Xf;
  X.prototype.getOverlays = X.prototype.hg;
  X.prototype.getOverlayById = X.prototype.gg;
  X.prototype.getInteractions = X.prototype.cg;
  X.prototype.getLayerGroup = X.prototype.dc;
  X.prototype.getLayers = X.prototype.Ye;
  X.prototype.getPixelFromCoordinate = X.prototype.Ha;
  X.prototype.getSize = X.prototype.zb;
  X.prototype.getView = X.prototype.$;
  X.prototype.getViewport = X.prototype.lg;
  X.prototype.renderSync = X.prototype.ah;
  X.prototype.render = X.prototype.render;
  X.prototype.removeControl = X.prototype.Vg;
  X.prototype.removeInteraction = X.prototype.Xg;
  X.prototype.removeLayer = X.prototype.Yg;
  X.prototype.removeOverlay = X.prototype.Zg;
  X.prototype.setLayerGroup = X.prototype.zf;
  X.prototype.setSize = X.prototype.ke;
  X.prototype.setTarget = X.prototype.vd;
  X.prototype.setView = X.prototype.hh;
  X.prototype.updateSize = X.prototype.Gc;
  X.prototype.get = X.prototype.get;
  X.prototype.getKeys = X.prototype.P;
  X.prototype.getProperties = X.prototype.M;
  X.prototype.set = X.prototype.set;
  X.prototype.setProperties = X.prototype.H;
  X.prototype.unset = X.prototype.R;
  X.prototype.changed = X.prototype.u;
  X.prototype.dispatchEvent = X.prototype.b;
  X.prototype.getRevision = X.prototype.L;
  X.prototype.on = X.prototype.J;
  X.prototype.once = X.prototype.once;
  X.prototype.un = X.prototype.K;
  ed.prototype.type = ed.prototype.type;
  ed.prototype.target = ed.prototype.target;
  ed.prototype.preventDefault = ed.prototype.preventDefault;
  ed.prototype.stopPropagation = ed.prototype.stopPropagation;
  fd.prototype.map = fd.prototype.map;
  fd.prototype.frameState = fd.prototype.frameState;
  fd.prototype.type = fd.prototype.type;
  fd.prototype.target = fd.prototype.target;
  fd.prototype.preventDefault = fd.prototype.preventDefault;
  fd.prototype.stopPropagation = fd.prototype.stopPropagation;
  Dd.prototype.originalEvent = Dd.prototype.originalEvent;
  Dd.prototype.pixel = Dd.prototype.pixel;
  Dd.prototype.coordinate = Dd.prototype.coordinate;
  Dd.prototype.dragging = Dd.prototype.dragging;
  Dd.prototype.preventDefault = Dd.prototype.preventDefault;
  Dd.prototype.stopPropagation = Dd.prototype.stopPropagation;
  Dd.prototype.map = Dd.prototype.map;
  Dd.prototype.frameState = Dd.prototype.frameState;
  Dd.prototype.type = Dd.prototype.type;
  Dd.prototype.target = Dd.prototype.target;
  $c.prototype.type = $c.prototype.type;
  $c.prototype.target = $c.prototype.target;
  $c.prototype.preventDefault = $c.prototype.preventDefault;
  $c.prototype.stopPropagation = $c.prototype.stopPropagation;
  Rj.prototype.get = Rj.prototype.get;
  Rj.prototype.getKeys = Rj.prototype.P;
  Rj.prototype.getProperties = Rj.prototype.M;
  Rj.prototype.set = Rj.prototype.set;
  Rj.prototype.setProperties = Rj.prototype.H;
  Rj.prototype.unset = Rj.prototype.R;
  Rj.prototype.changed = Rj.prototype.u;
  Rj.prototype.dispatchEvent = Rj.prototype.b;
  Rj.prototype.getRevision = Rj.prototype.L;
  Rj.prototype.on = Rj.prototype.J;
  Rj.prototype.once = Rj.prototype.once;
  Rj.prototype.un = Rj.prototype.K;
  Yx.prototype.getTileCoord = Yx.prototype.i;
  Yx.prototype.load = Yx.prototype.load;
  $x.prototype.getTileCoord = $x.prototype.i;
  $x.prototype.load = $x.prototype.load;
  F.prototype.get = F.prototype.get;
  F.prototype.getKeys = F.prototype.P;
  F.prototype.getProperties = F.prototype.M;
  F.prototype.set = F.prototype.set;
  F.prototype.setProperties = F.prototype.H;
  F.prototype.unset = F.prototype.R;
  F.prototype.changed = F.prototype.u;
  F.prototype.dispatchEvent = F.prototype.b;
  F.prototype.getRevision = F.prototype.L;
  F.prototype.on = F.prototype.J;
  F.prototype.once = F.prototype.once;
  F.prototype.un = F.prototype.K;
  cy.prototype.forEachTileCoord = cy.prototype.Vf;
  cy.prototype.getMaxZoom = cy.prototype.gj;
  cy.prototype.getMinZoom = cy.prototype.hj;
  cy.prototype.getOrigin = cy.prototype.Cc;
  cy.prototype.getResolution = cy.prototype.Qa;
  cy.prototype.getResolutions = cy.prototype.ij;
  cy.prototype.getTileCoordExtent = cy.prototype.Ja;
  cy.prototype.getTileCoordForCoordAndResolution = cy.prototype.Me;
  cy.prototype.getTileCoordForCoordAndZ = cy.prototype.kg;
  cy.prototype.getTileSize = cy.prototype.eb;
  cy.prototype.getZForResolution = cy.prototype.xc;
  zk.prototype.getOpacity = zk.prototype.hf;
  zk.prototype.getRotateWithView = zk.prototype.jf;
  zk.prototype.getRotation = zk.prototype.kf;
  zk.prototype.getScale = zk.prototype.lf;
  zk.prototype.getSnapToPixel = zk.prototype.Le;
  zk.prototype.setOpacity = zk.prototype.Bd;
  zk.prototype.setRotation = zk.prototype.mf;
  zk.prototype.setScale = zk.prototype.Cd;
  Bk.prototype.clone = Bk.prototype.clone;
  Bk.prototype.getAngle = Bk.prototype.cj;
  Bk.prototype.getFill = Bk.prototype.Ca;
  Bk.prototype.getPoints = Bk.prototype.dj;
  Bk.prototype.getRadius = Bk.prototype.ej;
  Bk.prototype.getRadius2 = Bk.prototype.Vh;
  Bk.prototype.getStroke = Bk.prototype.Da;
  Bk.prototype.getOpacity = Bk.prototype.hf;
  Bk.prototype.getRotateWithView = Bk.prototype.jf;
  Bk.prototype.getRotation = Bk.prototype.kf;
  Bk.prototype.getScale = Bk.prototype.lf;
  Bk.prototype.getSnapToPixel = Bk.prototype.Le;
  Bk.prototype.setOpacity = Bk.prototype.Bd;
  Bk.prototype.setRotation = Bk.prototype.mf;
  Bk.prototype.setScale = Bk.prototype.Cd;
  Gn.prototype.getOpacity = Gn.prototype.hf;
  Gn.prototype.getRotateWithView = Gn.prototype.jf;
  Gn.prototype.getRotation = Gn.prototype.kf;
  Gn.prototype.getScale = Gn.prototype.lf;
  Gn.prototype.getSnapToPixel = Gn.prototype.Le;
  Gn.prototype.setOpacity = Gn.prototype.Bd;
  Gn.prototype.setRotation = Gn.prototype.mf;
  Gn.prototype.setScale = Gn.prototype.Cd;
  Ks.prototype.get = Ks.prototype.get;
  Ks.prototype.getKeys = Ks.prototype.P;
  Ks.prototype.getProperties = Ks.prototype.M;
  Ks.prototype.set = Ks.prototype.set;
  Ks.prototype.setProperties = Ks.prototype.H;
  Ks.prototype.unset = Ks.prototype.R;
  Ks.prototype.changed = Ks.prototype.u;
  Ks.prototype.dispatchEvent = Ks.prototype.b;
  Ks.prototype.getRevision = Ks.prototype.L;
  Ks.prototype.on = Ks.prototype.J;
  Ks.prototype.once = Ks.prototype.once;
  Ks.prototype.un = Ks.prototype.K;
  $w.prototype.getAttributions = $w.prototype.Aa;
  $w.prototype.getLogo = $w.prototype.ya;
  $w.prototype.getProjection = $w.prototype.Ba;
  $w.prototype.getState = $w.prototype.getState;
  $w.prototype.refresh = $w.prototype.ua;
  $w.prototype.setAttributions = $w.prototype.va;
  $w.prototype.get = $w.prototype.get;
  $w.prototype.getKeys = $w.prototype.P;
  $w.prototype.getProperties = $w.prototype.M;
  $w.prototype.set = $w.prototype.set;
  $w.prototype.setProperties = $w.prototype.H;
  $w.prototype.unset = $w.prototype.R;
  $w.prototype.changed = $w.prototype.u;
  $w.prototype.dispatchEvent = $w.prototype.b;
  $w.prototype.getRevision = $w.prototype.L;
  $w.prototype.on = $w.prototype.J;
  $w.prototype.once = $w.prototype.once;
  $w.prototype.un = $w.prototype.K;
  dx.prototype.getTileGrid = dx.prototype.cb;
  dx.prototype.refresh = dx.prototype.ua;
  dx.prototype.getAttributions = dx.prototype.Aa;
  dx.prototype.getLogo = dx.prototype.ya;
  dx.prototype.getProjection = dx.prototype.Ba;
  dx.prototype.getState = dx.prototype.getState;
  dx.prototype.setAttributions = dx.prototype.va;
  dx.prototype.get = dx.prototype.get;
  dx.prototype.getKeys = dx.prototype.P;
  dx.prototype.getProperties = dx.prototype.M;
  dx.prototype.set = dx.prototype.set;
  dx.prototype.setProperties = dx.prototype.H;
  dx.prototype.unset = dx.prototype.R;
  dx.prototype.changed = dx.prototype.u;
  dx.prototype.dispatchEvent = dx.prototype.b;
  dx.prototype.getRevision = dx.prototype.L;
  dx.prototype.on = dx.prototype.J;
  dx.prototype.once = dx.prototype.once;
  dx.prototype.un = dx.prototype.K;
  ex.prototype.getTileLoadFunction = ex.prototype.vb;
  ex.prototype.getTileUrlFunction = ex.prototype.wb;
  ex.prototype.getUrls = ex.prototype.xb;
  ex.prototype.setTileLoadFunction = ex.prototype.Cb;
  ex.prototype.setTileUrlFunction = ex.prototype.jb;
  ex.prototype.setUrl = ex.prototype.ob;
  ex.prototype.setUrls = ex.prototype.tb;
  ex.prototype.getTileGrid = ex.prototype.cb;
  ex.prototype.refresh = ex.prototype.ua;
  ex.prototype.getAttributions = ex.prototype.Aa;
  ex.prototype.getLogo = ex.prototype.ya;
  ex.prototype.getProjection = ex.prototype.Ba;
  ex.prototype.getState = ex.prototype.getState;
  ex.prototype.setAttributions = ex.prototype.va;
  ex.prototype.get = ex.prototype.get;
  ex.prototype.getKeys = ex.prototype.P;
  ex.prototype.getProperties = ex.prototype.M;
  ex.prototype.set = ex.prototype.set;
  ex.prototype.setProperties = ex.prototype.H;
  ex.prototype.unset = ex.prototype.R;
  ex.prototype.changed = ex.prototype.u;
  ex.prototype.dispatchEvent = ex.prototype.b;
  ex.prototype.getRevision = ex.prototype.L;
  ex.prototype.on = ex.prototype.J;
  ex.prototype.once = ex.prototype.once;
  ex.prototype.un = ex.prototype.K;
  ix.prototype.setRenderReprojectionEdges = ix.prototype.Pb;
  ix.prototype.setTileGridForProjection = ix.prototype.Qb;
  ix.prototype.getTileLoadFunction = ix.prototype.vb;
  ix.prototype.getTileUrlFunction = ix.prototype.wb;
  ix.prototype.getUrls = ix.prototype.xb;
  ix.prototype.setTileLoadFunction = ix.prototype.Cb;
  ix.prototype.setTileUrlFunction = ix.prototype.jb;
  ix.prototype.setUrl = ix.prototype.ob;
  ix.prototype.setUrls = ix.prototype.tb;
  ix.prototype.getTileGrid = ix.prototype.cb;
  ix.prototype.refresh = ix.prototype.ua;
  ix.prototype.getAttributions = ix.prototype.Aa;
  ix.prototype.getLogo = ix.prototype.ya;
  ix.prototype.getProjection = ix.prototype.Ba;
  ix.prototype.getState = ix.prototype.getState;
  ix.prototype.setAttributions = ix.prototype.va;
  ix.prototype.get = ix.prototype.get;
  ix.prototype.getKeys = ix.prototype.P;
  ix.prototype.getProperties = ix.prototype.M;
  ix.prototype.set = ix.prototype.set;
  ix.prototype.setProperties = ix.prototype.H;
  ix.prototype.unset = ix.prototype.R;
  ix.prototype.changed = ix.prototype.u;
  ix.prototype.dispatchEvent = ix.prototype.b;
  ix.prototype.getRevision = ix.prototype.L;
  ix.prototype.on = ix.prototype.J;
  ix.prototype.once = ix.prototype.once;
  ix.prototype.un = ix.prototype.K;
  kx.prototype.setRenderReprojectionEdges = kx.prototype.Pb;
  kx.prototype.setTileGridForProjection = kx.prototype.Qb;
  kx.prototype.getTileLoadFunction = kx.prototype.vb;
  kx.prototype.getTileUrlFunction = kx.prototype.wb;
  kx.prototype.getUrls = kx.prototype.xb;
  kx.prototype.setTileLoadFunction = kx.prototype.Cb;
  kx.prototype.setTileUrlFunction = kx.prototype.jb;
  kx.prototype.setUrl = kx.prototype.ob;
  kx.prototype.setUrls = kx.prototype.tb;
  kx.prototype.getTileGrid = kx.prototype.cb;
  kx.prototype.refresh = kx.prototype.ua;
  kx.prototype.getAttributions = kx.prototype.Aa;
  kx.prototype.getLogo = kx.prototype.ya;
  kx.prototype.getProjection = kx.prototype.Ba;
  kx.prototype.getState = kx.prototype.getState;
  kx.prototype.setAttributions = kx.prototype.va;
  kx.prototype.get = kx.prototype.get;
  kx.prototype.getKeys = kx.prototype.P;
  kx.prototype.getProperties = kx.prototype.M;
  kx.prototype.set = kx.prototype.set;
  kx.prototype.setProperties = kx.prototype.H;
  kx.prototype.unset = kx.prototype.R;
  kx.prototype.changed = kx.prototype.u;
  kx.prototype.dispatchEvent = kx.prototype.b;
  kx.prototype.getRevision = kx.prototype.L;
  kx.prototype.on = kx.prototype.J;
  kx.prototype.once = kx.prototype.once;
  kx.prototype.un = kx.prototype.K;
  lx.prototype.setRenderReprojectionEdges = lx.prototype.Pb;
  lx.prototype.setTileGridForProjection = lx.prototype.Qb;
  lx.prototype.getTileLoadFunction = lx.prototype.vb;
  lx.prototype.getTileUrlFunction = lx.prototype.wb;
  lx.prototype.getUrls = lx.prototype.xb;
  lx.prototype.setTileLoadFunction = lx.prototype.Cb;
  lx.prototype.setTileUrlFunction = lx.prototype.jb;
  lx.prototype.setUrl = lx.prototype.ob;
  lx.prototype.setUrls = lx.prototype.tb;
  lx.prototype.getTileGrid = lx.prototype.cb;
  lx.prototype.refresh = lx.prototype.ua;
  lx.prototype.getAttributions = lx.prototype.Aa;
  lx.prototype.getLogo = lx.prototype.ya;
  lx.prototype.getProjection = lx.prototype.Ba;
  lx.prototype.getState = lx.prototype.getState;
  lx.prototype.setAttributions = lx.prototype.va;
  lx.prototype.get = lx.prototype.get;
  lx.prototype.getKeys = lx.prototype.P;
  lx.prototype.getProperties = lx.prototype.M;
  lx.prototype.set = lx.prototype.set;
  lx.prototype.setProperties = lx.prototype.H;
  lx.prototype.unset = lx.prototype.R;
  lx.prototype.changed = lx.prototype.u;
  lx.prototype.dispatchEvent = lx.prototype.b;
  lx.prototype.getRevision = lx.prototype.L;
  lx.prototype.on = lx.prototype.J;
  lx.prototype.once = lx.prototype.once;
  lx.prototype.un = lx.prototype.K;
  S.prototype.getAttributions = S.prototype.Aa;
  S.prototype.getLogo = S.prototype.ya;
  S.prototype.getProjection = S.prototype.Ba;
  S.prototype.getState = S.prototype.getState;
  S.prototype.refresh = S.prototype.ua;
  S.prototype.setAttributions = S.prototype.va;
  S.prototype.get = S.prototype.get;
  S.prototype.getKeys = S.prototype.P;
  S.prototype.getProperties = S.prototype.M;
  S.prototype.set = S.prototype.set;
  S.prototype.setProperties = S.prototype.H;
  S.prototype.unset = S.prototype.R;
  S.prototype.changed = S.prototype.u;
  S.prototype.dispatchEvent = S.prototype.b;
  S.prototype.getRevision = S.prototype.L;
  S.prototype.on = S.prototype.J;
  S.prototype.once = S.prototype.once;
  S.prototype.un = S.prototype.K;
  Y.prototype.addFeature = Y.prototype.Eb;
  Y.prototype.addFeatures = Y.prototype.Ic;
  Y.prototype.clear = Y.prototype.clear;
  Y.prototype.forEachFeature = Y.prototype.Ih;
  Y.prototype.forEachFeatureInExtent = Y.prototype.ac;
  Y.prototype.forEachFeatureIntersectingExtent = Y.prototype.Jh;
  Y.prototype.getFeaturesCollection = Y.prototype.Qh;
  Y.prototype.getFeatures = Y.prototype.fe;
  Y.prototype.getFeaturesAtCoordinate = Y.prototype.Ph;
  Y.prototype.getFeaturesInExtent = Y.prototype.Zf;
  Y.prototype.getClosestFeatureToCoordinate = Y.prototype.Lh;
  Y.prototype.getExtent = Y.prototype.G;
  Y.prototype.getFeatureById = Y.prototype.Oh;
  Y.prototype.getFormat = Y.prototype.Zi;
  Y.prototype.getUrl = Y.prototype.$i;
  Y.prototype.removeFeature = Y.prototype.Ib;
  Y.prototype.setLoader = Y.prototype.bj;
  Y.prototype.getAttributions = Y.prototype.Aa;
  Y.prototype.getLogo = Y.prototype.ya;
  Y.prototype.getProjection = Y.prototype.Ba;
  Y.prototype.getState = Y.prototype.getState;
  Y.prototype.refresh = Y.prototype.ua;
  Y.prototype.setAttributions = Y.prototype.va;
  Y.prototype.get = Y.prototype.get;
  Y.prototype.getKeys = Y.prototype.P;
  Y.prototype.getProperties = Y.prototype.M;
  Y.prototype.set = Y.prototype.set;
  Y.prototype.setProperties = Y.prototype.H;
  Y.prototype.unset = Y.prototype.R;
  Y.prototype.changed = Y.prototype.u;
  Y.prototype.dispatchEvent = Y.prototype.b;
  Y.prototype.getRevision = Y.prototype.L;
  Y.prototype.on = Y.prototype.J;
  Y.prototype.once = Y.prototype.once;
  Y.prototype.un = Y.prototype.K;
  vw.prototype.getAttributions = vw.prototype.Aa;
  vw.prototype.getLogo = vw.prototype.ya;
  vw.prototype.getProjection = vw.prototype.Ba;
  vw.prototype.getState = vw.prototype.getState;
  vw.prototype.refresh = vw.prototype.ua;
  vw.prototype.setAttributions = vw.prototype.va;
  vw.prototype.get = vw.prototype.get;
  vw.prototype.getKeys = vw.prototype.P;
  vw.prototype.getProperties = vw.prototype.M;
  vw.prototype.set = vw.prototype.set;
  vw.prototype.setProperties = vw.prototype.H;
  vw.prototype.unset = vw.prototype.R;
  vw.prototype.changed = vw.prototype.u;
  vw.prototype.dispatchEvent = vw.prototype.b;
  vw.prototype.getRevision = vw.prototype.L;
  vw.prototype.on = vw.prototype.J;
  vw.prototype.once = vw.prototype.once;
  vw.prototype.un = vw.prototype.K;
  xw.prototype.type = xw.prototype.type;
  xw.prototype.target = xw.prototype.target;
  xw.prototype.preventDefault = xw.prototype.preventDefault;
  xw.prototype.stopPropagation = xw.prototype.stopPropagation;
  rx.prototype.getAttributions = rx.prototype.Aa;
  rx.prototype.getLogo = rx.prototype.ya;
  rx.prototype.getProjection = rx.prototype.Ba;
  rx.prototype.getState = rx.prototype.getState;
  rx.prototype.refresh = rx.prototype.ua;
  rx.prototype.setAttributions = rx.prototype.va;
  rx.prototype.get = rx.prototype.get;
  rx.prototype.getKeys = rx.prototype.P;
  rx.prototype.getProperties = rx.prototype.M;
  rx.prototype.set = rx.prototype.set;
  rx.prototype.setProperties = rx.prototype.H;
  rx.prototype.unset = rx.prototype.R;
  rx.prototype.changed = rx.prototype.u;
  rx.prototype.dispatchEvent = rx.prototype.b;
  rx.prototype.getRevision = rx.prototype.L;
  rx.prototype.on = rx.prototype.J;
  rx.prototype.once = rx.prototype.once;
  rx.prototype.un = rx.prototype.K;
  Cw.prototype.getAttributions = Cw.prototype.Aa;
  Cw.prototype.getLogo = Cw.prototype.ya;
  Cw.prototype.getProjection = Cw.prototype.Ba;
  Cw.prototype.getState = Cw.prototype.getState;
  Cw.prototype.refresh = Cw.prototype.ua;
  Cw.prototype.setAttributions = Cw.prototype.va;
  Cw.prototype.get = Cw.prototype.get;
  Cw.prototype.getKeys = Cw.prototype.P;
  Cw.prototype.getProperties = Cw.prototype.M;
  Cw.prototype.set = Cw.prototype.set;
  Cw.prototype.setProperties = Cw.prototype.H;
  Cw.prototype.unset = Cw.prototype.R;
  Cw.prototype.changed = Cw.prototype.u;
  Cw.prototype.dispatchEvent = Cw.prototype.b;
  Cw.prototype.getRevision = Cw.prototype.L;
  Cw.prototype.on = Cw.prototype.J;
  Cw.prototype.once = Cw.prototype.once;
  Cw.prototype.un = Cw.prototype.K;
  sx.prototype.getAttributions = sx.prototype.Aa;
  sx.prototype.getLogo = sx.prototype.ya;
  sx.prototype.getProjection = sx.prototype.Ba;
  sx.prototype.getState = sx.prototype.getState;
  sx.prototype.refresh = sx.prototype.ua;
  sx.prototype.setAttributions = sx.prototype.va;
  sx.prototype.get = sx.prototype.get;
  sx.prototype.getKeys = sx.prototype.P;
  sx.prototype.getProperties = sx.prototype.M;
  sx.prototype.set = sx.prototype.set;
  sx.prototype.setProperties = sx.prototype.H;
  sx.prototype.unset = sx.prototype.R;
  sx.prototype.changed = sx.prototype.u;
  sx.prototype.dispatchEvent = sx.prototype.b;
  sx.prototype.getRevision = sx.prototype.L;
  sx.prototype.on = sx.prototype.J;
  sx.prototype.once = sx.prototype.once;
  sx.prototype.un = sx.prototype.K;
  tx.prototype.getAttributions = tx.prototype.Aa;
  tx.prototype.getLogo = tx.prototype.ya;
  tx.prototype.getProjection = tx.prototype.Ba;
  tx.prototype.getState = tx.prototype.getState;
  tx.prototype.refresh = tx.prototype.ua;
  tx.prototype.setAttributions = tx.prototype.va;
  tx.prototype.get = tx.prototype.get;
  tx.prototype.getKeys = tx.prototype.P;
  tx.prototype.getProperties = tx.prototype.M;
  tx.prototype.set = tx.prototype.set;
  tx.prototype.setProperties = tx.prototype.H;
  tx.prototype.unset = tx.prototype.R;
  tx.prototype.changed = tx.prototype.u;
  tx.prototype.dispatchEvent = tx.prototype.b;
  tx.prototype.getRevision = tx.prototype.L;
  tx.prototype.on = tx.prototype.J;
  tx.prototype.once = tx.prototype.once;
  tx.prototype.un = tx.prototype.K;
  Dw.prototype.getAttributions = Dw.prototype.Aa;
  Dw.prototype.getLogo = Dw.prototype.ya;
  Dw.prototype.getProjection = Dw.prototype.Ba;
  Dw.prototype.getState = Dw.prototype.getState;
  Dw.prototype.refresh = Dw.prototype.ua;
  Dw.prototype.setAttributions = Dw.prototype.va;
  Dw.prototype.get = Dw.prototype.get;
  Dw.prototype.getKeys = Dw.prototype.P;
  Dw.prototype.getProperties = Dw.prototype.M;
  Dw.prototype.set = Dw.prototype.set;
  Dw.prototype.setProperties = Dw.prototype.H;
  Dw.prototype.unset = Dw.prototype.R;
  Dw.prototype.changed = Dw.prototype.u;
  Dw.prototype.dispatchEvent = Dw.prototype.b;
  Dw.prototype.getRevision = Dw.prototype.L;
  Dw.prototype.on = Dw.prototype.J;
  Dw.prototype.once = Dw.prototype.once;
  Dw.prototype.un = Dw.prototype.K;
  ux.prototype.getAttributions = ux.prototype.Aa;
  ux.prototype.getLogo = ux.prototype.ya;
  ux.prototype.getProjection = ux.prototype.Ba;
  ux.prototype.getState = ux.prototype.getState;
  ux.prototype.refresh = ux.prototype.ua;
  ux.prototype.setAttributions = ux.prototype.va;
  ux.prototype.get = ux.prototype.get;
  ux.prototype.getKeys = ux.prototype.P;
  ux.prototype.getProperties = ux.prototype.M;
  ux.prototype.set = ux.prototype.set;
  ux.prototype.setProperties = ux.prototype.H;
  ux.prototype.unset = ux.prototype.R;
  ux.prototype.changed = ux.prototype.u;
  ux.prototype.dispatchEvent = ux.prototype.b;
  ux.prototype.getRevision = ux.prototype.L;
  ux.prototype.on = ux.prototype.J;
  ux.prototype.once = ux.prototype.once;
  ux.prototype.un = ux.prototype.K;
  yx.prototype.setRenderReprojectionEdges = yx.prototype.Pb;
  yx.prototype.setTileGridForProjection = yx.prototype.Qb;
  yx.prototype.getTileLoadFunction = yx.prototype.vb;
  yx.prototype.getTileUrlFunction = yx.prototype.wb;
  yx.prototype.getUrls = yx.prototype.xb;
  yx.prototype.setTileLoadFunction = yx.prototype.Cb;
  yx.prototype.setTileUrlFunction = yx.prototype.jb;
  yx.prototype.setUrl = yx.prototype.ob;
  yx.prototype.setUrls = yx.prototype.tb;
  yx.prototype.getTileGrid = yx.prototype.cb;
  yx.prototype.refresh = yx.prototype.ua;
  yx.prototype.getAttributions = yx.prototype.Aa;
  yx.prototype.getLogo = yx.prototype.ya;
  yx.prototype.getProjection = yx.prototype.Ba;
  yx.prototype.getState = yx.prototype.getState;
  yx.prototype.setAttributions = yx.prototype.va;
  yx.prototype.get = yx.prototype.get;
  yx.prototype.getKeys = yx.prototype.P;
  yx.prototype.getProperties = yx.prototype.M;
  yx.prototype.set = yx.prototype.set;
  yx.prototype.setProperties = yx.prototype.H;
  yx.prototype.unset = yx.prototype.R;
  yx.prototype.changed = yx.prototype.u;
  yx.prototype.dispatchEvent = yx.prototype.b;
  yx.prototype.getRevision = yx.prototype.L;
  yx.prototype.on = yx.prototype.J;
  yx.prototype.once = yx.prototype.once;
  yx.prototype.un = yx.prototype.K;
  Ax.prototype.getAttributions = Ax.prototype.Aa;
  Ax.prototype.getLogo = Ax.prototype.ya;
  Ax.prototype.getProjection = Ax.prototype.Ba;
  Ax.prototype.getState = Ax.prototype.getState;
  Ax.prototype.refresh = Ax.prototype.ua;
  Ax.prototype.setAttributions = Ax.prototype.va;
  Ax.prototype.get = Ax.prototype.get;
  Ax.prototype.getKeys = Ax.prototype.P;
  Ax.prototype.getProperties = Ax.prototype.M;
  Ax.prototype.set = Ax.prototype.set;
  Ax.prototype.setProperties = Ax.prototype.H;
  Ax.prototype.unset = Ax.prototype.R;
  Ax.prototype.changed = Ax.prototype.u;
  Ax.prototype.dispatchEvent = Ax.prototype.b;
  Ax.prototype.getRevision = Ax.prototype.L;
  Ax.prototype.on = Ax.prototype.J;
  Ax.prototype.once = Ax.prototype.once;
  Ax.prototype.un = Ax.prototype.K;
  Ex.prototype.type = Ex.prototype.type;
  Ex.prototype.target = Ex.prototype.target;
  Ex.prototype.preventDefault = Ex.prototype.preventDefault;
  Ex.prototype.stopPropagation = Ex.prototype.stopPropagation;
  Hx.prototype.setRenderReprojectionEdges = Hx.prototype.Pb;
  Hx.prototype.setTileGridForProjection = Hx.prototype.Qb;
  Hx.prototype.getTileLoadFunction = Hx.prototype.vb;
  Hx.prototype.getTileUrlFunction = Hx.prototype.wb;
  Hx.prototype.getUrls = Hx.prototype.xb;
  Hx.prototype.setTileLoadFunction = Hx.prototype.Cb;
  Hx.prototype.setTileUrlFunction = Hx.prototype.jb;
  Hx.prototype.setUrl = Hx.prototype.ob;
  Hx.prototype.setUrls = Hx.prototype.tb;
  Hx.prototype.getTileGrid = Hx.prototype.cb;
  Hx.prototype.refresh = Hx.prototype.ua;
  Hx.prototype.getAttributions = Hx.prototype.Aa;
  Hx.prototype.getLogo = Hx.prototype.ya;
  Hx.prototype.getProjection = Hx.prototype.Ba;
  Hx.prototype.getState = Hx.prototype.getState;
  Hx.prototype.setAttributions = Hx.prototype.va;
  Hx.prototype.get = Hx.prototype.get;
  Hx.prototype.getKeys = Hx.prototype.P;
  Hx.prototype.getProperties = Hx.prototype.M;
  Hx.prototype.set = Hx.prototype.set;
  Hx.prototype.setProperties = Hx.prototype.H;
  Hx.prototype.unset = Hx.prototype.R;
  Hx.prototype.changed = Hx.prototype.u;
  Hx.prototype.dispatchEvent = Hx.prototype.b;
  Hx.prototype.getRevision = Hx.prototype.L;
  Hx.prototype.on = Hx.prototype.J;
  Hx.prototype.once = Hx.prototype.once;
  Hx.prototype.un = Hx.prototype.K;
  cx.prototype.type = cx.prototype.type;
  cx.prototype.target = cx.prototype.target;
  cx.prototype.preventDefault = cx.prototype.preventDefault;
  cx.prototype.stopPropagation = cx.prototype.stopPropagation;
  Lx.prototype.setRenderReprojectionEdges = Lx.prototype.Pb;
  Lx.prototype.setTileGridForProjection = Lx.prototype.Qb;
  Lx.prototype.getTileLoadFunction = Lx.prototype.vb;
  Lx.prototype.getTileUrlFunction = Lx.prototype.wb;
  Lx.prototype.getUrls = Lx.prototype.xb;
  Lx.prototype.setTileLoadFunction = Lx.prototype.Cb;
  Lx.prototype.setTileUrlFunction = Lx.prototype.jb;
  Lx.prototype.setUrl = Lx.prototype.ob;
  Lx.prototype.setUrls = Lx.prototype.tb;
  Lx.prototype.getTileGrid = Lx.prototype.cb;
  Lx.prototype.refresh = Lx.prototype.ua;
  Lx.prototype.getAttributions = Lx.prototype.Aa;
  Lx.prototype.getLogo = Lx.prototype.ya;
  Lx.prototype.getProjection = Lx.prototype.Ba;
  Lx.prototype.getState = Lx.prototype.getState;
  Lx.prototype.setAttributions = Lx.prototype.va;
  Lx.prototype.get = Lx.prototype.get;
  Lx.prototype.getKeys = Lx.prototype.P;
  Lx.prototype.getProperties = Lx.prototype.M;
  Lx.prototype.set = Lx.prototype.set;
  Lx.prototype.setProperties = Lx.prototype.H;
  Lx.prototype.unset = Lx.prototype.R;
  Lx.prototype.changed = Lx.prototype.u;
  Lx.prototype.dispatchEvent = Lx.prototype.b;
  Lx.prototype.getRevision = Lx.prototype.L;
  Lx.prototype.on = Lx.prototype.J;
  Lx.prototype.once = Lx.prototype.once;
  Lx.prototype.un = Lx.prototype.K;
  Nx.prototype.getTileGrid = Nx.prototype.cb;
  Nx.prototype.refresh = Nx.prototype.ua;
  Nx.prototype.getAttributions = Nx.prototype.Aa;
  Nx.prototype.getLogo = Nx.prototype.ya;
  Nx.prototype.getProjection = Nx.prototype.Ba;
  Nx.prototype.getState = Nx.prototype.getState;
  Nx.prototype.setAttributions = Nx.prototype.va;
  Nx.prototype.get = Nx.prototype.get;
  Nx.prototype.getKeys = Nx.prototype.P;
  Nx.prototype.getProperties = Nx.prototype.M;
  Nx.prototype.set = Nx.prototype.set;
  Nx.prototype.setProperties = Nx.prototype.H;
  Nx.prototype.unset = Nx.prototype.R;
  Nx.prototype.changed = Nx.prototype.u;
  Nx.prototype.dispatchEvent = Nx.prototype.b;
  Nx.prototype.getRevision = Nx.prototype.L;
  Nx.prototype.on = Nx.prototype.J;
  Nx.prototype.once = Nx.prototype.once;
  Nx.prototype.un = Nx.prototype.K;
  Px.prototype.setRenderReprojectionEdges = Px.prototype.Pb;
  Px.prototype.setTileGridForProjection = Px.prototype.Qb;
  Px.prototype.getTileLoadFunction = Px.prototype.vb;
  Px.prototype.getTileUrlFunction = Px.prototype.wb;
  Px.prototype.getUrls = Px.prototype.xb;
  Px.prototype.setTileLoadFunction = Px.prototype.Cb;
  Px.prototype.setTileUrlFunction = Px.prototype.jb;
  Px.prototype.setUrl = Px.prototype.ob;
  Px.prototype.setUrls = Px.prototype.tb;
  Px.prototype.getTileGrid = Px.prototype.cb;
  Px.prototype.refresh = Px.prototype.ua;
  Px.prototype.getAttributions = Px.prototype.Aa;
  Px.prototype.getLogo = Px.prototype.ya;
  Px.prototype.getProjection = Px.prototype.Ba;
  Px.prototype.getState = Px.prototype.getState;
  Px.prototype.setAttributions = Px.prototype.va;
  Px.prototype.get = Px.prototype.get;
  Px.prototype.getKeys = Px.prototype.P;
  Px.prototype.getProperties = Px.prototype.M;
  Px.prototype.set = Px.prototype.set;
  Px.prototype.setProperties = Px.prototype.H;
  Px.prototype.unset = Px.prototype.R;
  Px.prototype.changed = Px.prototype.u;
  Px.prototype.dispatchEvent = Px.prototype.b;
  Px.prototype.getRevision = Px.prototype.L;
  Px.prototype.on = Px.prototype.J;
  Px.prototype.once = Px.prototype.once;
  Px.prototype.un = Px.prototype.K;
  Qx.prototype.getTileGrid = Qx.prototype.cb;
  Qx.prototype.refresh = Qx.prototype.ua;
  Qx.prototype.getAttributions = Qx.prototype.Aa;
  Qx.prototype.getLogo = Qx.prototype.ya;
  Qx.prototype.getProjection = Qx.prototype.Ba;
  Qx.prototype.getState = Qx.prototype.getState;
  Qx.prototype.setAttributions = Qx.prototype.va;
  Qx.prototype.get = Qx.prototype.get;
  Qx.prototype.getKeys = Qx.prototype.P;
  Qx.prototype.getProperties = Qx.prototype.M;
  Qx.prototype.set = Qx.prototype.set;
  Qx.prototype.setProperties = Qx.prototype.H;
  Qx.prototype.unset = Qx.prototype.R;
  Qx.prototype.changed = Qx.prototype.u;
  Qx.prototype.dispatchEvent = Qx.prototype.b;
  Qx.prototype.getRevision = Qx.prototype.L;
  Qx.prototype.on = Qx.prototype.J;
  Qx.prototype.once = Qx.prototype.once;
  Qx.prototype.un = Qx.prototype.K;
  Ux.prototype.setRenderReprojectionEdges = Ux.prototype.Pb;
  Ux.prototype.setTileGridForProjection = Ux.prototype.Qb;
  Ux.prototype.getTileLoadFunction = Ux.prototype.vb;
  Ux.prototype.getTileUrlFunction = Ux.prototype.wb;
  Ux.prototype.getUrls = Ux.prototype.xb;
  Ux.prototype.setTileLoadFunction = Ux.prototype.Cb;
  Ux.prototype.setTileUrlFunction = Ux.prototype.jb;
  Ux.prototype.setUrl = Ux.prototype.ob;
  Ux.prototype.setUrls = Ux.prototype.tb;
  Ux.prototype.getTileGrid = Ux.prototype.cb;
  Ux.prototype.refresh = Ux.prototype.ua;
  Ux.prototype.getAttributions = Ux.prototype.Aa;
  Ux.prototype.getLogo = Ux.prototype.ya;
  Ux.prototype.getProjection = Ux.prototype.Ba;
  Ux.prototype.getState = Ux.prototype.getState;
  Ux.prototype.setAttributions = Ux.prototype.va;
  Ux.prototype.get = Ux.prototype.get;
  Ux.prototype.getKeys = Ux.prototype.P;
  Ux.prototype.getProperties = Ux.prototype.M;
  Ux.prototype.set = Ux.prototype.set;
  Ux.prototype.setProperties = Ux.prototype.H;
  Ux.prototype.unset = Ux.prototype.R;
  Ux.prototype.changed = Ux.prototype.u;
  Ux.prototype.dispatchEvent = Ux.prototype.b;
  Ux.prototype.getRevision = Ux.prototype.L;
  Ux.prototype.on = Ux.prototype.J;
  Ux.prototype.once = Ux.prototype.once;
  Ux.prototype.un = Ux.prototype.K;
  Xs.prototype.type = Xs.prototype.type;
  Xs.prototype.target = Xs.prototype.target;
  Xs.prototype.preventDefault = Xs.prototype.preventDefault;
  Xs.prototype.stopPropagation = Xs.prototype.stopPropagation;
  by.prototype.getTileLoadFunction = by.prototype.vb;
  by.prototype.getTileUrlFunction = by.prototype.wb;
  by.prototype.getUrls = by.prototype.xb;
  by.prototype.setTileLoadFunction = by.prototype.Cb;
  by.prototype.setTileUrlFunction = by.prototype.jb;
  by.prototype.setUrl = by.prototype.ob;
  by.prototype.setUrls = by.prototype.tb;
  by.prototype.getTileGrid = by.prototype.cb;
  by.prototype.refresh = by.prototype.ua;
  by.prototype.getAttributions = by.prototype.Aa;
  by.prototype.getLogo = by.prototype.ya;
  by.prototype.getProjection = by.prototype.Ba;
  by.prototype.getState = by.prototype.getState;
  by.prototype.setAttributions = by.prototype.va;
  by.prototype.get = by.prototype.get;
  by.prototype.getKeys = by.prototype.P;
  by.prototype.getProperties = by.prototype.M;
  by.prototype.set = by.prototype.set;
  by.prototype.setProperties = by.prototype.H;
  by.prototype.unset = by.prototype.R;
  by.prototype.changed = by.prototype.u;
  by.prototype.dispatchEvent = by.prototype.b;
  by.prototype.getRevision = by.prototype.L;
  by.prototype.on = by.prototype.J;
  by.prototype.once = by.prototype.once;
  by.prototype.un = by.prototype.K;
  Z.prototype.setRenderReprojectionEdges = Z.prototype.Pb;
  Z.prototype.setTileGridForProjection = Z.prototype.Qb;
  Z.prototype.getTileLoadFunction = Z.prototype.vb;
  Z.prototype.getTileUrlFunction = Z.prototype.wb;
  Z.prototype.getUrls = Z.prototype.xb;
  Z.prototype.setTileLoadFunction = Z.prototype.Cb;
  Z.prototype.setTileUrlFunction = Z.prototype.jb;
  Z.prototype.setUrl = Z.prototype.ob;
  Z.prototype.setUrls = Z.prototype.tb;
  Z.prototype.getTileGrid = Z.prototype.cb;
  Z.prototype.refresh = Z.prototype.ua;
  Z.prototype.getAttributions = Z.prototype.Aa;
  Z.prototype.getLogo = Z.prototype.ya;
  Z.prototype.getProjection = Z.prototype.Ba;
  Z.prototype.getState = Z.prototype.getState;
  Z.prototype.setAttributions = Z.prototype.va;
  Z.prototype.get = Z.prototype.get;
  Z.prototype.getKeys = Z.prototype.P;
  Z.prototype.getProperties = Z.prototype.M;
  Z.prototype.set = Z.prototype.set;
  Z.prototype.setProperties = Z.prototype.H;
  Z.prototype.unset = Z.prototype.R;
  Z.prototype.changed = Z.prototype.u;
  Z.prototype.dispatchEvent = Z.prototype.b;
  Z.prototype.getRevision = Z.prototype.L;
  Z.prototype.on = Z.prototype.J;
  Z.prototype.once = Z.prototype.once;
  Z.prototype.un = Z.prototype.K;
  fy.prototype.setRenderReprojectionEdges = fy.prototype.Pb;
  fy.prototype.setTileGridForProjection = fy.prototype.Qb;
  fy.prototype.getTileLoadFunction = fy.prototype.vb;
  fy.prototype.getTileUrlFunction = fy.prototype.wb;
  fy.prototype.getUrls = fy.prototype.xb;
  fy.prototype.setTileLoadFunction = fy.prototype.Cb;
  fy.prototype.setTileUrlFunction = fy.prototype.jb;
  fy.prototype.setUrl = fy.prototype.ob;
  fy.prototype.setUrls = fy.prototype.tb;
  fy.prototype.getTileGrid = fy.prototype.cb;
  fy.prototype.refresh = fy.prototype.ua;
  fy.prototype.getAttributions = fy.prototype.Aa;
  fy.prototype.getLogo = fy.prototype.ya;
  fy.prototype.getProjection = fy.prototype.Ba;
  fy.prototype.getState = fy.prototype.getState;
  fy.prototype.setAttributions = fy.prototype.va;
  fy.prototype.get = fy.prototype.get;
  fy.prototype.getKeys = fy.prototype.P;
  fy.prototype.getProperties = fy.prototype.M;
  fy.prototype.set = fy.prototype.set;
  fy.prototype.setProperties = fy.prototype.H;
  fy.prototype.unset = fy.prototype.R;
  fy.prototype.changed = fy.prototype.u;
  fy.prototype.dispatchEvent = fy.prototype.b;
  fy.prototype.getRevision = fy.prototype.L;
  fy.prototype.on = fy.prototype.J;
  fy.prototype.once = fy.prototype.once;
  fy.prototype.un = fy.prototype.K;
  Sw.prototype.getTileCoord = Sw.prototype.i;
  Sw.prototype.load = Sw.prototype.load;
  fi.prototype.changed = fi.prototype.u;
  fi.prototype.dispatchEvent = fi.prototype.b;
  fi.prototype.getRevision = fi.prototype.L;
  fi.prototype.on = fi.prototype.J;
  fi.prototype.once = fi.prototype.once;
  fi.prototype.un = fi.prototype.K;
  lw.prototype.changed = lw.prototype.u;
  lw.prototype.dispatchEvent = lw.prototype.b;
  lw.prototype.getRevision = lw.prototype.L;
  lw.prototype.on = lw.prototype.J;
  lw.prototype.once = lw.prototype.once;
  lw.prototype.un = lw.prototype.K;
  Fw.prototype.changed = Fw.prototype.u;
  Fw.prototype.dispatchEvent = Fw.prototype.b;
  Fw.prototype.getRevision = Fw.prototype.L;
  Fw.prototype.on = Fw.prototype.J;
  Fw.prototype.once = Fw.prototype.once;
  Fw.prototype.un = Fw.prototype.K;
  Pw.prototype.changed = Pw.prototype.u;
  Pw.prototype.dispatchEvent = Pw.prototype.b;
  Pw.prototype.getRevision = Pw.prototype.L;
  Pw.prototype.on = Pw.prototype.J;
  Pw.prototype.once = Pw.prototype.once;
  Pw.prototype.un = Pw.prototype.K;
  Qw.prototype.changed = Qw.prototype.u;
  Qw.prototype.dispatchEvent = Qw.prototype.b;
  Qw.prototype.getRevision = Qw.prototype.L;
  Qw.prototype.on = Qw.prototype.J;
  Qw.prototype.once = Qw.prototype.once;
  Qw.prototype.un = Qw.prototype.K;
  oi.prototype.changed = oi.prototype.u;
  oi.prototype.dispatchEvent = oi.prototype.b;
  oi.prototype.getRevision = oi.prototype.L;
  oi.prototype.on = oi.prototype.J;
  oi.prototype.once = oi.prototype.once;
  oi.prototype.un = oi.prototype.K;
  si.prototype.changed = si.prototype.u;
  si.prototype.dispatchEvent = si.prototype.b;
  si.prototype.getRevision = si.prototype.L;
  si.prototype.on = si.prototype.J;
  si.prototype.once = si.prototype.once;
  si.prototype.un = si.prototype.K;
  vi.prototype.changed = vi.prototype.u;
  vi.prototype.dispatchEvent = vi.prototype.b;
  vi.prototype.getRevision = vi.prototype.L;
  vi.prototype.on = vi.prototype.J;
  vi.prototype.once = vi.prototype.once;
  vi.prototype.un = vi.prototype.K;
  Hi.prototype.changed = Hi.prototype.u;
  Hi.prototype.dispatchEvent = Hi.prototype.b;
  Hi.prototype.getRevision = Hi.prototype.L;
  Hi.prototype.on = Hi.prototype.J;
  Hi.prototype.once = Hi.prototype.once;
  Hi.prototype.un = Hi.prototype.K;
  Aj.prototype.changed = Aj.prototype.u;
  Aj.prototype.dispatchEvent = Aj.prototype.b;
  Aj.prototype.getRevision = Aj.prototype.L;
  Aj.prototype.on = Aj.prototype.J;
  Aj.prototype.once = Aj.prototype.once;
  Aj.prototype.un = Aj.prototype.K;
  Cj.prototype.changed = Cj.prototype.u;
  Cj.prototype.dispatchEvent = Cj.prototype.b;
  Cj.prototype.getRevision = Cj.prototype.L;
  Cj.prototype.on = Cj.prototype.J;
  Cj.prototype.once = Cj.prototype.once;
  Cj.prototype.un = Cj.prototype.K;
  Ih.prototype.type = Ih.prototype.type;
  Ih.prototype.target = Ih.prototype.target;
  Ih.prototype.preventDefault = Ih.prototype.preventDefault;
  Ih.prototype.stopPropagation = Ih.prototype.stopPropagation;
  Od.prototype.type = Od.prototype.type;
  Od.prototype.target = Od.prototype.target;
  Od.prototype.preventDefault = Od.prototype.preventDefault;
  Od.prototype.stopPropagation = Od.prototype.stopPropagation;
  gg.prototype.get = gg.prototype.get;
  gg.prototype.getKeys = gg.prototype.P;
  gg.prototype.getProperties = gg.prototype.M;
  gg.prototype.set = gg.prototype.set;
  gg.prototype.setProperties = gg.prototype.H;
  gg.prototype.unset = gg.prototype.R;
  gg.prototype.changed = gg.prototype.u;
  gg.prototype.dispatchEvent = gg.prototype.b;
  gg.prototype.getRevision = gg.prototype.L;
  gg.prototype.on = gg.prototype.J;
  gg.prototype.once = gg.prototype.once;
  gg.prototype.un = gg.prototype.K;
  ig.prototype.getExtent = ig.prototype.G;
  ig.prototype.getMaxResolution = ig.prototype.hc;
  ig.prototype.getMinResolution = ig.prototype.ic;
  ig.prototype.getOpacity = ig.prototype.jc;
  ig.prototype.getVisible = ig.prototype.Tb;
  ig.prototype.getZIndex = ig.prototype.za;
  ig.prototype.setExtent = ig.prototype.zc;
  ig.prototype.setMaxResolution = ig.prototype.Ec;
  ig.prototype.setMinResolution = ig.prototype.Fc;
  ig.prototype.setOpacity = ig.prototype.Ac;
  ig.prototype.setVisible = ig.prototype.Bc;
  ig.prototype.setZIndex = ig.prototype.Xb;
  ig.prototype.get = ig.prototype.get;
  ig.prototype.getKeys = ig.prototype.P;
  ig.prototype.getProperties = ig.prototype.M;
  ig.prototype.set = ig.prototype.set;
  ig.prototype.setProperties = ig.prototype.H;
  ig.prototype.unset = ig.prototype.R;
  ig.prototype.changed = ig.prototype.u;
  ig.prototype.dispatchEvent = ig.prototype.b;
  ig.prototype.getRevision = ig.prototype.L;
  ig.prototype.on = ig.prototype.J;
  ig.prototype.once = ig.prototype.once;
  ig.prototype.un = ig.prototype.K;
  wi.prototype.getExtent = wi.prototype.G;
  wi.prototype.getMaxResolution = wi.prototype.hc;
  wi.prototype.getMinResolution = wi.prototype.ic;
  wi.prototype.getOpacity = wi.prototype.jc;
  wi.prototype.getVisible = wi.prototype.Tb;
  wi.prototype.getZIndex = wi.prototype.za;
  wi.prototype.setExtent = wi.prototype.zc;
  wi.prototype.setMaxResolution = wi.prototype.Ec;
  wi.prototype.setMinResolution = wi.prototype.Fc;
  wi.prototype.setOpacity = wi.prototype.Ac;
  wi.prototype.setVisible = wi.prototype.Bc;
  wi.prototype.setZIndex = wi.prototype.Xb;
  wi.prototype.get = wi.prototype.get;
  wi.prototype.getKeys = wi.prototype.P;
  wi.prototype.getProperties = wi.prototype.M;
  wi.prototype.set = wi.prototype.set;
  wi.prototype.setProperties = wi.prototype.H;
  wi.prototype.unset = wi.prototype.R;
  wi.prototype.changed = wi.prototype.u;
  wi.prototype.dispatchEvent = wi.prototype.b;
  wi.prototype.getRevision = wi.prototype.L;
  wi.prototype.on = wi.prototype.J;
  wi.prototype.once = wi.prototype.once;
  wi.prototype.un = wi.prototype.K;
  R.prototype.setMap = R.prototype.setMap;
  R.prototype.setSource = R.prototype.bd;
  R.prototype.getExtent = R.prototype.G;
  R.prototype.getMaxResolution = R.prototype.hc;
  R.prototype.getMinResolution = R.prototype.ic;
  R.prototype.getOpacity = R.prototype.jc;
  R.prototype.getVisible = R.prototype.Tb;
  R.prototype.getZIndex = R.prototype.za;
  R.prototype.setExtent = R.prototype.zc;
  R.prototype.setMaxResolution = R.prototype.Ec;
  R.prototype.setMinResolution = R.prototype.Fc;
  R.prototype.setOpacity = R.prototype.Ac;
  R.prototype.setVisible = R.prototype.Bc;
  R.prototype.setZIndex = R.prototype.Xb;
  R.prototype.get = R.prototype.get;
  R.prototype.getKeys = R.prototype.P;
  R.prototype.getProperties = R.prototype.M;
  R.prototype.set = R.prototype.set;
  R.prototype.setProperties = R.prototype.H;
  R.prototype.unset = R.prototype.R;
  R.prototype.changed = R.prototype.u;
  R.prototype.dispatchEvent = R.prototype.b;
  R.prototype.getRevision = R.prototype.L;
  R.prototype.on = R.prototype.J;
  R.prototype.once = R.prototype.once;
  R.prototype.un = R.prototype.K;
  V.prototype.getSource = V.prototype.ia;
  V.prototype.getStyle = V.prototype.D;
  V.prototype.getStyleFunction = V.prototype.bb;
  V.prototype.setStyle = V.prototype.j;
  V.prototype.setMap = V.prototype.setMap;
  V.prototype.setSource = V.prototype.bd;
  V.prototype.getExtent = V.prototype.G;
  V.prototype.getMaxResolution = V.prototype.hc;
  V.prototype.getMinResolution = V.prototype.ic;
  V.prototype.getOpacity = V.prototype.jc;
  V.prototype.getVisible = V.prototype.Tb;
  V.prototype.getZIndex = V.prototype.za;
  V.prototype.setExtent = V.prototype.zc;
  V.prototype.setMaxResolution = V.prototype.Ec;
  V.prototype.setMinResolution = V.prototype.Fc;
  V.prototype.setOpacity = V.prototype.Ac;
  V.prototype.setVisible = V.prototype.Bc;
  V.prototype.setZIndex = V.prototype.Xb;
  V.prototype.get = V.prototype.get;
  V.prototype.getKeys = V.prototype.P;
  V.prototype.getProperties = V.prototype.M;
  V.prototype.set = V.prototype.set;
  V.prototype.setProperties = V.prototype.H;
  V.prototype.unset = V.prototype.R;
  V.prototype.changed = V.prototype.u;
  V.prototype.dispatchEvent = V.prototype.b;
  V.prototype.getRevision = V.prototype.L;
  V.prototype.on = V.prototype.J;
  V.prototype.once = V.prototype.once;
  V.prototype.un = V.prototype.K;
  nu.prototype.setMap = nu.prototype.setMap;
  nu.prototype.setSource = nu.prototype.bd;
  nu.prototype.getExtent = nu.prototype.G;
  nu.prototype.getMaxResolution = nu.prototype.hc;
  nu.prototype.getMinResolution = nu.prototype.ic;
  nu.prototype.getOpacity = nu.prototype.jc;
  nu.prototype.getVisible = nu.prototype.Tb;
  nu.prototype.getZIndex = nu.prototype.za;
  nu.prototype.setExtent = nu.prototype.zc;
  nu.prototype.setMaxResolution = nu.prototype.Ec;
  nu.prototype.setMinResolution = nu.prototype.Fc;
  nu.prototype.setOpacity = nu.prototype.Ac;
  nu.prototype.setVisible = nu.prototype.Bc;
  nu.prototype.setZIndex = nu.prototype.Xb;
  nu.prototype.get = nu.prototype.get;
  nu.prototype.getKeys = nu.prototype.P;
  nu.prototype.getProperties = nu.prototype.M;
  nu.prototype.set = nu.prototype.set;
  nu.prototype.setProperties = nu.prototype.H;
  nu.prototype.unset = nu.prototype.R;
  nu.prototype.changed = nu.prototype.u;
  nu.prototype.dispatchEvent = nu.prototype.b;
  nu.prototype.getRevision = nu.prototype.L;
  nu.prototype.on = nu.prototype.J;
  nu.prototype.once = nu.prototype.once;
  nu.prototype.un = nu.prototype.K;
  ou.prototype.setMap = ou.prototype.setMap;
  ou.prototype.setSource = ou.prototype.bd;
  ou.prototype.getExtent = ou.prototype.G;
  ou.prototype.getMaxResolution = ou.prototype.hc;
  ou.prototype.getMinResolution = ou.prototype.ic;
  ou.prototype.getOpacity = ou.prototype.jc;
  ou.prototype.getVisible = ou.prototype.Tb;
  ou.prototype.getZIndex = ou.prototype.za;
  ou.prototype.setExtent = ou.prototype.zc;
  ou.prototype.setMaxResolution = ou.prototype.Ec;
  ou.prototype.setMinResolution = ou.prototype.Fc;
  ou.prototype.setOpacity = ou.prototype.Ac;
  ou.prototype.setVisible = ou.prototype.Bc;
  ou.prototype.setZIndex = ou.prototype.Xb;
  ou.prototype.get = ou.prototype.get;
  ou.prototype.getKeys = ou.prototype.P;
  ou.prototype.getProperties = ou.prototype.M;
  ou.prototype.set = ou.prototype.set;
  ou.prototype.setProperties = ou.prototype.H;
  ou.prototype.unset = ou.prototype.R;
  ou.prototype.changed = ou.prototype.u;
  ou.prototype.dispatchEvent = ou.prototype.b;
  ou.prototype.getRevision = ou.prototype.L;
  ou.prototype.on = ou.prototype.J;
  ou.prototype.once = ou.prototype.once;
  ou.prototype.un = ou.prototype.K;
  W.prototype.getStyle = W.prototype.D;
  W.prototype.getStyleFunction = W.prototype.bb;
  W.prototype.setStyle = W.prototype.j;
  W.prototype.setMap = W.prototype.setMap;
  W.prototype.setSource = W.prototype.bd;
  W.prototype.getExtent = W.prototype.G;
  W.prototype.getMaxResolution = W.prototype.hc;
  W.prototype.getMinResolution = W.prototype.ic;
  W.prototype.getOpacity = W.prototype.jc;
  W.prototype.getVisible = W.prototype.Tb;
  W.prototype.getZIndex = W.prototype.za;
  W.prototype.setExtent = W.prototype.zc;
  W.prototype.setMaxResolution = W.prototype.Ec;
  W.prototype.setMinResolution = W.prototype.Fc;
  W.prototype.setOpacity = W.prototype.Ac;
  W.prototype.setVisible = W.prototype.Bc;
  W.prototype.setZIndex = W.prototype.Xb;
  W.prototype.get = W.prototype.get;
  W.prototype.getKeys = W.prototype.P;
  W.prototype.getProperties = W.prototype.M;
  W.prototype.set = W.prototype.set;
  W.prototype.setProperties = W.prototype.H;
  W.prototype.unset = W.prototype.R;
  W.prototype.changed = W.prototype.u;
  W.prototype.dispatchEvent = W.prototype.b;
  W.prototype.getRevision = W.prototype.L;
  W.prototype.on = W.prototype.J;
  W.prototype.once = W.prototype.once;
  W.prototype.un = W.prototype.K;
  Bg.prototype.get = Bg.prototype.get;
  Bg.prototype.getKeys = Bg.prototype.P;
  Bg.prototype.getProperties = Bg.prototype.M;
  Bg.prototype.set = Bg.prototype.set;
  Bg.prototype.setProperties = Bg.prototype.H;
  Bg.prototype.unset = Bg.prototype.R;
  Bg.prototype.changed = Bg.prototype.u;
  Bg.prototype.dispatchEvent = Bg.prototype.b;
  Bg.prototype.getRevision = Bg.prototype.L;
  Bg.prototype.on = Bg.prototype.J;
  Bg.prototype.once = Bg.prototype.once;
  Bg.prototype.un = Bg.prototype.K;
  Hg.prototype.getActive = Hg.prototype.c;
  Hg.prototype.getMap = Hg.prototype.i;
  Hg.prototype.setActive = Hg.prototype.Ga;
  Hg.prototype.get = Hg.prototype.get;
  Hg.prototype.getKeys = Hg.prototype.P;
  Hg.prototype.getProperties = Hg.prototype.M;
  Hg.prototype.set = Hg.prototype.set;
  Hg.prototype.setProperties = Hg.prototype.H;
  Hg.prototype.unset = Hg.prototype.R;
  Hg.prototype.changed = Hg.prototype.u;
  Hg.prototype.dispatchEvent = Hg.prototype.b;
  Hg.prototype.getRevision = Hg.prototype.L;
  Hg.prototype.on = Hg.prototype.J;
  Hg.prototype.once = Hg.prototype.once;
  Hg.prototype.un = Hg.prototype.K;
  ys.prototype.getActive = ys.prototype.c;
  ys.prototype.getMap = ys.prototype.i;
  ys.prototype.setActive = ys.prototype.Ga;
  ys.prototype.get = ys.prototype.get;
  ys.prototype.getKeys = ys.prototype.P;
  ys.prototype.getProperties = ys.prototype.M;
  ys.prototype.set = ys.prototype.set;
  ys.prototype.setProperties = ys.prototype.H;
  ys.prototype.unset = ys.prototype.R;
  ys.prototype.changed = ys.prototype.u;
  ys.prototype.dispatchEvent = ys.prototype.b;
  ys.prototype.getRevision = ys.prototype.L;
  ys.prototype.on = ys.prototype.J;
  ys.prototype.once = ys.prototype.once;
  ys.prototype.un = ys.prototype.K;
  Bs.prototype.type = Bs.prototype.type;
  Bs.prototype.target = Bs.prototype.target;
  Bs.prototype.preventDefault = Bs.prototype.preventDefault;
  Bs.prototype.stopPropagation = Bs.prototype.stopPropagation;
  Tg.prototype.getActive = Tg.prototype.c;
  Tg.prototype.getMap = Tg.prototype.i;
  Tg.prototype.setActive = Tg.prototype.Ga;
  Tg.prototype.get = Tg.prototype.get;
  Tg.prototype.getKeys = Tg.prototype.P;
  Tg.prototype.getProperties = Tg.prototype.M;
  Tg.prototype.set = Tg.prototype.set;
  Tg.prototype.setProperties = Tg.prototype.H;
  Tg.prototype.unset = Tg.prototype.R;
  Tg.prototype.changed = Tg.prototype.u;
  Tg.prototype.dispatchEvent = Tg.prototype.b;
  Tg.prototype.getRevision = Tg.prototype.L;
  Tg.prototype.on = Tg.prototype.J;
  Tg.prototype.once = Tg.prototype.once;
  Tg.prototype.un = Tg.prototype.K;
  gh.prototype.getActive = gh.prototype.c;
  gh.prototype.getMap = gh.prototype.i;
  gh.prototype.setActive = gh.prototype.Ga;
  gh.prototype.get = gh.prototype.get;
  gh.prototype.getKeys = gh.prototype.P;
  gh.prototype.getProperties = gh.prototype.M;
  gh.prototype.set = gh.prototype.set;
  gh.prototype.setProperties = gh.prototype.H;
  gh.prototype.unset = gh.prototype.R;
  gh.prototype.changed = gh.prototype.u;
  gh.prototype.dispatchEvent = gh.prototype.b;
  gh.prototype.getRevision = gh.prototype.L;
  gh.prototype.on = gh.prototype.J;
  gh.prototype.once = gh.prototype.once;
  gh.prototype.un = gh.prototype.K;
  lh.prototype.type = lh.prototype.type;
  lh.prototype.target = lh.prototype.target;
  lh.prototype.preventDefault = lh.prototype.preventDefault;
  lh.prototype.stopPropagation = lh.prototype.stopPropagation;
  Wg.prototype.getActive = Wg.prototype.c;
  Wg.prototype.getMap = Wg.prototype.i;
  Wg.prototype.setActive = Wg.prototype.Ga;
  Wg.prototype.get = Wg.prototype.get;
  Wg.prototype.getKeys = Wg.prototype.P;
  Wg.prototype.getProperties = Wg.prototype.M;
  Wg.prototype.set = Wg.prototype.set;
  Wg.prototype.setProperties = Wg.prototype.H;
  Wg.prototype.unset = Wg.prototype.R;
  Wg.prototype.changed = Wg.prototype.u;
  Wg.prototype.dispatchEvent = Wg.prototype.b;
  Wg.prototype.getRevision = Wg.prototype.L;
  Wg.prototype.on = Wg.prototype.J;
  Wg.prototype.once = Wg.prototype.once;
  Wg.prototype.un = Wg.prototype.K;
  $g.prototype.getActive = $g.prototype.c;
  $g.prototype.getMap = $g.prototype.i;
  $g.prototype.setActive = $g.prototype.Ga;
  $g.prototype.get = $g.prototype.get;
  $g.prototype.getKeys = $g.prototype.P;
  $g.prototype.getProperties = $g.prototype.M;
  $g.prototype.set = $g.prototype.set;
  $g.prototype.setProperties = $g.prototype.H;
  $g.prototype.unset = $g.prototype.R;
  $g.prototype.changed = $g.prototype.u;
  $g.prototype.dispatchEvent = $g.prototype.b;
  $g.prototype.getRevision = $g.prototype.L;
  $g.prototype.on = $g.prototype.J;
  $g.prototype.once = $g.prototype.once;
  $g.prototype.un = $g.prototype.K;
  Fs.prototype.getActive = Fs.prototype.c;
  Fs.prototype.getMap = Fs.prototype.i;
  Fs.prototype.setActive = Fs.prototype.Ga;
  Fs.prototype.get = Fs.prototype.get;
  Fs.prototype.getKeys = Fs.prototype.P;
  Fs.prototype.getProperties = Fs.prototype.M;
  Fs.prototype.set = Fs.prototype.set;
  Fs.prototype.setProperties = Fs.prototype.H;
  Fs.prototype.unset = Fs.prototype.R;
  Fs.prototype.changed = Fs.prototype.u;
  Fs.prototype.dispatchEvent = Fs.prototype.b;
  Fs.prototype.getRevision = Fs.prototype.L;
  Fs.prototype.on = Fs.prototype.J;
  Fs.prototype.once = Fs.prototype.once;
  Fs.prototype.un = Fs.prototype.K;
  ph.prototype.getGeometry = ph.prototype.W;
  ph.prototype.getActive = ph.prototype.c;
  ph.prototype.getMap = ph.prototype.i;
  ph.prototype.setActive = ph.prototype.Ga;
  ph.prototype.get = ph.prototype.get;
  ph.prototype.getKeys = ph.prototype.P;
  ph.prototype.getProperties = ph.prototype.M;
  ph.prototype.set = ph.prototype.set;
  ph.prototype.setProperties = ph.prototype.H;
  ph.prototype.unset = ph.prototype.R;
  ph.prototype.changed = ph.prototype.u;
  ph.prototype.dispatchEvent = ph.prototype.b;
  ph.prototype.getRevision = ph.prototype.L;
  ph.prototype.on = ph.prototype.J;
  ph.prototype.once = ph.prototype.once;
  ph.prototype.un = ph.prototype.K;
  $s.prototype.getActive = $s.prototype.c;
  $s.prototype.getMap = $s.prototype.i;
  $s.prototype.setActive = $s.prototype.Ga;
  $s.prototype.get = $s.prototype.get;
  $s.prototype.getKeys = $s.prototype.P;
  $s.prototype.getProperties = $s.prototype.M;
  $s.prototype.set = $s.prototype.set;
  $s.prototype.setProperties = $s.prototype.H;
  $s.prototype.unset = $s.prototype.R;
  $s.prototype.changed = $s.prototype.u;
  $s.prototype.dispatchEvent = $s.prototype.b;
  $s.prototype.getRevision = $s.prototype.L;
  $s.prototype.on = $s.prototype.J;
  $s.prototype.once = $s.prototype.once;
  $s.prototype.un = $s.prototype.K;
  pt.prototype.type = pt.prototype.type;
  pt.prototype.target = pt.prototype.target;
  pt.prototype.preventDefault = pt.prototype.preventDefault;
  pt.prototype.stopPropagation = pt.prototype.stopPropagation;
  qt.prototype.getActive = qt.prototype.c;
  qt.prototype.getMap = qt.prototype.i;
  qt.prototype.setActive = qt.prototype.Ga;
  qt.prototype.get = qt.prototype.get;
  qt.prototype.getKeys = qt.prototype.P;
  qt.prototype.getProperties = qt.prototype.M;
  qt.prototype.set = qt.prototype.set;
  qt.prototype.setProperties = qt.prototype.H;
  qt.prototype.unset = qt.prototype.R;
  qt.prototype.changed = qt.prototype.u;
  qt.prototype.dispatchEvent = qt.prototype.b;
  qt.prototype.getRevision = qt.prototype.L;
  qt.prototype.on = qt.prototype.J;
  qt.prototype.once = qt.prototype.once;
  qt.prototype.un = qt.prototype.K;
  Bt.prototype.type = Bt.prototype.type;
  Bt.prototype.target = Bt.prototype.target;
  Bt.prototype.preventDefault = Bt.prototype.preventDefault;
  Bt.prototype.stopPropagation = Bt.prototype.stopPropagation;
  qh.prototype.getActive = qh.prototype.c;
  qh.prototype.getMap = qh.prototype.i;
  qh.prototype.setActive = qh.prototype.Ga;
  qh.prototype.get = qh.prototype.get;
  qh.prototype.getKeys = qh.prototype.P;
  qh.prototype.getProperties = qh.prototype.M;
  qh.prototype.set = qh.prototype.set;
  qh.prototype.setProperties = qh.prototype.H;
  qh.prototype.unset = qh.prototype.R;
  qh.prototype.changed = qh.prototype.u;
  qh.prototype.dispatchEvent = qh.prototype.b;
  qh.prototype.getRevision = qh.prototype.L;
  qh.prototype.on = qh.prototype.J;
  qh.prototype.once = qh.prototype.once;
  qh.prototype.un = qh.prototype.K;
  th.prototype.getActive = th.prototype.c;
  th.prototype.getMap = th.prototype.i;
  th.prototype.setActive = th.prototype.Ga;
  th.prototype.get = th.prototype.get;
  th.prototype.getKeys = th.prototype.P;
  th.prototype.getProperties = th.prototype.M;
  th.prototype.set = th.prototype.set;
  th.prototype.setProperties = th.prototype.H;
  th.prototype.unset = th.prototype.R;
  th.prototype.changed = th.prototype.u;
  th.prototype.dispatchEvent = th.prototype.b;
  th.prototype.getRevision = th.prototype.L;
  th.prototype.on = th.prototype.J;
  th.prototype.once = th.prototype.once;
  th.prototype.un = th.prototype.K;
  Ct.prototype.getActive = Ct.prototype.c;
  Ct.prototype.getMap = Ct.prototype.i;
  Ct.prototype.setActive = Ct.prototype.Ga;
  Ct.prototype.get = Ct.prototype.get;
  Ct.prototype.getKeys = Ct.prototype.P;
  Ct.prototype.getProperties = Ct.prototype.M;
  Ct.prototype.set = Ct.prototype.set;
  Ct.prototype.setProperties = Ct.prototype.H;
  Ct.prototype.unset = Ct.prototype.R;
  Ct.prototype.changed = Ct.prototype.u;
  Ct.prototype.dispatchEvent = Ct.prototype.b;
  Ct.prototype.getRevision = Ct.prototype.L;
  Ct.prototype.on = Ct.prototype.J;
  Ct.prototype.once = Ct.prototype.once;
  Ct.prototype.un = Ct.prototype.K;
  Kt.prototype.type = Kt.prototype.type;
  Kt.prototype.target = Kt.prototype.target;
  Kt.prototype.preventDefault = Kt.prototype.preventDefault;
  Kt.prototype.stopPropagation = Kt.prototype.stopPropagation;
  vh.prototype.getActive = vh.prototype.c;
  vh.prototype.getMap = vh.prototype.i;
  vh.prototype.setActive = vh.prototype.Ga;
  vh.prototype.get = vh.prototype.get;
  vh.prototype.getKeys = vh.prototype.P;
  vh.prototype.getProperties = vh.prototype.M;
  vh.prototype.set = vh.prototype.set;
  vh.prototype.setProperties = vh.prototype.H;
  vh.prototype.unset = vh.prototype.R;
  vh.prototype.changed = vh.prototype.u;
  vh.prototype.dispatchEvent = vh.prototype.b;
  vh.prototype.getRevision = vh.prototype.L;
  vh.prototype.on = vh.prototype.J;
  vh.prototype.once = vh.prototype.once;
  vh.prototype.un = vh.prototype.K;
  zh.prototype.getActive = zh.prototype.c;
  zh.prototype.getMap = zh.prototype.i;
  zh.prototype.setActive = zh.prototype.Ga;
  zh.prototype.get = zh.prototype.get;
  zh.prototype.getKeys = zh.prototype.P;
  zh.prototype.getProperties = zh.prototype.M;
  zh.prototype.set = zh.prototype.set;
  zh.prototype.setProperties = zh.prototype.H;
  zh.prototype.unset = zh.prototype.R;
  zh.prototype.changed = zh.prototype.u;
  zh.prototype.dispatchEvent = zh.prototype.b;
  zh.prototype.getRevision = zh.prototype.L;
  zh.prototype.on = zh.prototype.J;
  zh.prototype.once = zh.prototype.once;
  zh.prototype.un = zh.prototype.K;
  Dh.prototype.getActive = Dh.prototype.c;
  Dh.prototype.getMap = Dh.prototype.i;
  Dh.prototype.setActive = Dh.prototype.Ga;
  Dh.prototype.get = Dh.prototype.get;
  Dh.prototype.getKeys = Dh.prototype.P;
  Dh.prototype.getProperties = Dh.prototype.M;
  Dh.prototype.set = Dh.prototype.set;
  Dh.prototype.setProperties = Dh.prototype.H;
  Dh.prototype.unset = Dh.prototype.R;
  Dh.prototype.changed = Dh.prototype.u;
  Dh.prototype.dispatchEvent = Dh.prototype.b;
  Dh.prototype.getRevision = Dh.prototype.L;
  Dh.prototype.on = Dh.prototype.J;
  Dh.prototype.once = Dh.prototype.once;
  Dh.prototype.un = Dh.prototype.K;
  St.prototype.getActive = St.prototype.c;
  St.prototype.getMap = St.prototype.i;
  St.prototype.setActive = St.prototype.Ga;
  St.prototype.get = St.prototype.get;
  St.prototype.getKeys = St.prototype.P;
  St.prototype.getProperties = St.prototype.M;
  St.prototype.set = St.prototype.set;
  St.prototype.setProperties = St.prototype.H;
  St.prototype.unset = St.prototype.R;
  St.prototype.changed = St.prototype.u;
  St.prototype.dispatchEvent = St.prototype.b;
  St.prototype.getRevision = St.prototype.L;
  St.prototype.on = St.prototype.J;
  St.prototype.once = St.prototype.once;
  St.prototype.un = St.prototype.K;
  Vt.prototype.type = Vt.prototype.type;
  Vt.prototype.target = Vt.prototype.target;
  Vt.prototype.preventDefault = Vt.prototype.preventDefault;
  Vt.prototype.stopPropagation = Vt.prototype.stopPropagation;
  Xt.prototype.getActive = Xt.prototype.c;
  Xt.prototype.getMap = Xt.prototype.i;
  Xt.prototype.setActive = Xt.prototype.Ga;
  Xt.prototype.get = Xt.prototype.get;
  Xt.prototype.getKeys = Xt.prototype.P;
  Xt.prototype.getProperties = Xt.prototype.M;
  Xt.prototype.set = Xt.prototype.set;
  Xt.prototype.setProperties = Xt.prototype.H;
  Xt.prototype.unset = Xt.prototype.R;
  Xt.prototype.changed = Xt.prototype.u;
  Xt.prototype.dispatchEvent = Xt.prototype.b;
  Xt.prototype.getRevision = Xt.prototype.L;
  Xt.prototype.on = Xt.prototype.J;
  Xt.prototype.once = Xt.prototype.once;
  Xt.prototype.un = Xt.prototype.K;
  bu.prototype.getActive = bu.prototype.c;
  bu.prototype.getMap = bu.prototype.i;
  bu.prototype.setActive = bu.prototype.Ga;
  bu.prototype.get = bu.prototype.get;
  bu.prototype.getKeys = bu.prototype.P;
  bu.prototype.getProperties = bu.prototype.M;
  bu.prototype.set = bu.prototype.set;
  bu.prototype.setProperties = bu.prototype.H;
  bu.prototype.unset = bu.prototype.R;
  bu.prototype.changed = bu.prototype.u;
  bu.prototype.dispatchEvent = bu.prototype.b;
  bu.prototype.getRevision = bu.prototype.L;
  bu.prototype.on = bu.prototype.J;
  bu.prototype.once = bu.prototype.once;
  bu.prototype.un = bu.prototype.K;
  hu.prototype.type = hu.prototype.type;
  hu.prototype.target = hu.prototype.target;
  hu.prototype.preventDefault = hu.prototype.preventDefault;
  hu.prototype.stopPropagation = hu.prototype.stopPropagation;
  ef.prototype.get = ef.prototype.get;
  ef.prototype.getKeys = ef.prototype.P;
  ef.prototype.getProperties = ef.prototype.M;
  ef.prototype.set = ef.prototype.set;
  ef.prototype.setProperties = ef.prototype.H;
  ef.prototype.unset = ef.prototype.R;
  ef.prototype.changed = ef.prototype.u;
  ef.prototype.dispatchEvent = ef.prototype.b;
  ef.prototype.getRevision = ef.prototype.L;
  ef.prototype.on = ef.prototype.J;
  ef.prototype.once = ef.prototype.once;
  ef.prototype.un = ef.prototype.K;
  ff.prototype.getClosestPoint = ff.prototype.Gb;
  ff.prototype.intersectsCoordinate = ff.prototype.yb;
  ff.prototype.getExtent = ff.prototype.G;
  ff.prototype.rotate = ff.prototype.rotate;
  ff.prototype.scale = ff.prototype.scale;
  ff.prototype.simplify = ff.prototype.Rb;
  ff.prototype.transform = ff.prototype.hb;
  ff.prototype.get = ff.prototype.get;
  ff.prototype.getKeys = ff.prototype.P;
  ff.prototype.getProperties = ff.prototype.M;
  ff.prototype.set = ff.prototype.set;
  ff.prototype.setProperties = ff.prototype.H;
  ff.prototype.unset = ff.prototype.R;
  ff.prototype.changed = ff.prototype.u;
  ff.prototype.dispatchEvent = ff.prototype.b;
  ff.prototype.getRevision = ff.prototype.L;
  ff.prototype.on = ff.prototype.J;
  ff.prototype.once = ff.prototype.once;
  ff.prototype.un = ff.prototype.K;
  es.prototype.getFirstCoordinate = es.prototype.bc;
  es.prototype.getLastCoordinate = es.prototype.cc;
  es.prototype.getLayout = es.prototype.ec;
  es.prototype.rotate = es.prototype.rotate;
  es.prototype.scale = es.prototype.scale;
  es.prototype.getClosestPoint = es.prototype.Gb;
  es.prototype.intersectsCoordinate = es.prototype.yb;
  es.prototype.getExtent = es.prototype.G;
  es.prototype.simplify = es.prototype.Rb;
  es.prototype.get = es.prototype.get;
  es.prototype.getKeys = es.prototype.P;
  es.prototype.getProperties = es.prototype.M;
  es.prototype.set = es.prototype.set;
  es.prototype.setProperties = es.prototype.H;
  es.prototype.unset = es.prototype.R;
  es.prototype.changed = es.prototype.u;
  es.prototype.dispatchEvent = es.prototype.b;
  es.prototype.getRevision = es.prototype.L;
  es.prototype.on = es.prototype.J;
  es.prototype.once = es.prototype.once;
  es.prototype.un = es.prototype.K;
  Wl.prototype.getClosestPoint = Wl.prototype.Gb;
  Wl.prototype.intersectsCoordinate = Wl.prototype.yb;
  Wl.prototype.getExtent = Wl.prototype.G;
  Wl.prototype.rotate = Wl.prototype.rotate;
  Wl.prototype.scale = Wl.prototype.scale;
  Wl.prototype.simplify = Wl.prototype.Rb;
  Wl.prototype.transform = Wl.prototype.hb;
  Wl.prototype.get = Wl.prototype.get;
  Wl.prototype.getKeys = Wl.prototype.P;
  Wl.prototype.getProperties = Wl.prototype.M;
  Wl.prototype.set = Wl.prototype.set;
  Wl.prototype.setProperties = Wl.prototype.H;
  Wl.prototype.unset = Wl.prototype.R;
  Wl.prototype.changed = Wl.prototype.u;
  Wl.prototype.dispatchEvent = Wl.prototype.b;
  Wl.prototype.getRevision = Wl.prototype.L;
  Wl.prototype.on = Wl.prototype.J;
  Wl.prototype.once = Wl.prototype.once;
  Wl.prototype.un = Wl.prototype.K;
  Bf.prototype.getFirstCoordinate = Bf.prototype.bc;
  Bf.prototype.getLastCoordinate = Bf.prototype.cc;
  Bf.prototype.getLayout = Bf.prototype.ec;
  Bf.prototype.rotate = Bf.prototype.rotate;
  Bf.prototype.scale = Bf.prototype.scale;
  Bf.prototype.getClosestPoint = Bf.prototype.Gb;
  Bf.prototype.intersectsCoordinate = Bf.prototype.yb;
  Bf.prototype.getExtent = Bf.prototype.G;
  Bf.prototype.simplify = Bf.prototype.Rb;
  Bf.prototype.transform = Bf.prototype.hb;
  Bf.prototype.get = Bf.prototype.get;
  Bf.prototype.getKeys = Bf.prototype.P;
  Bf.prototype.getProperties = Bf.prototype.M;
  Bf.prototype.set = Bf.prototype.set;
  Bf.prototype.setProperties = Bf.prototype.H;
  Bf.prototype.unset = Bf.prototype.R;
  Bf.prototype.changed = Bf.prototype.u;
  Bf.prototype.dispatchEvent = Bf.prototype.b;
  Bf.prototype.getRevision = Bf.prototype.L;
  Bf.prototype.on = Bf.prototype.J;
  Bf.prototype.once = Bf.prototype.once;
  Bf.prototype.un = Bf.prototype.K;
  M.prototype.getFirstCoordinate = M.prototype.bc;
  M.prototype.getLastCoordinate = M.prototype.cc;
  M.prototype.getLayout = M.prototype.ec;
  M.prototype.rotate = M.prototype.rotate;
  M.prototype.scale = M.prototype.scale;
  M.prototype.getClosestPoint = M.prototype.Gb;
  M.prototype.intersectsCoordinate = M.prototype.yb;
  M.prototype.getExtent = M.prototype.G;
  M.prototype.simplify = M.prototype.Rb;
  M.prototype.transform = M.prototype.hb;
  M.prototype.get = M.prototype.get;
  M.prototype.getKeys = M.prototype.P;
  M.prototype.getProperties = M.prototype.M;
  M.prototype.set = M.prototype.set;
  M.prototype.setProperties = M.prototype.H;
  M.prototype.unset = M.prototype.R;
  M.prototype.changed = M.prototype.u;
  M.prototype.dispatchEvent = M.prototype.b;
  M.prototype.getRevision = M.prototype.L;
  M.prototype.on = M.prototype.J;
  M.prototype.once = M.prototype.once;
  M.prototype.un = M.prototype.K;
  O.prototype.getFirstCoordinate = O.prototype.bc;
  O.prototype.getLastCoordinate = O.prototype.cc;
  O.prototype.getLayout = O.prototype.ec;
  O.prototype.rotate = O.prototype.rotate;
  O.prototype.scale = O.prototype.scale;
  O.prototype.getClosestPoint = O.prototype.Gb;
  O.prototype.intersectsCoordinate = O.prototype.yb;
  O.prototype.getExtent = O.prototype.G;
  O.prototype.simplify = O.prototype.Rb;
  O.prototype.transform = O.prototype.hb;
  O.prototype.get = O.prototype.get;
  O.prototype.getKeys = O.prototype.P;
  O.prototype.getProperties = O.prototype.M;
  O.prototype.set = O.prototype.set;
  O.prototype.setProperties = O.prototype.H;
  O.prototype.unset = O.prototype.R;
  O.prototype.changed = O.prototype.u;
  O.prototype.dispatchEvent = O.prototype.b;
  O.prototype.getRevision = O.prototype.L;
  O.prototype.on = O.prototype.J;
  O.prototype.once = O.prototype.once;
  O.prototype.un = O.prototype.K;
  ql.prototype.getFirstCoordinate = ql.prototype.bc;
  ql.prototype.getLastCoordinate = ql.prototype.cc;
  ql.prototype.getLayout = ql.prototype.ec;
  ql.prototype.rotate = ql.prototype.rotate;
  ql.prototype.scale = ql.prototype.scale;
  ql.prototype.getClosestPoint = ql.prototype.Gb;
  ql.prototype.intersectsCoordinate = ql.prototype.yb;
  ql.prototype.getExtent = ql.prototype.G;
  ql.prototype.simplify = ql.prototype.Rb;
  ql.prototype.transform = ql.prototype.hb;
  ql.prototype.get = ql.prototype.get;
  ql.prototype.getKeys = ql.prototype.P;
  ql.prototype.getProperties = ql.prototype.M;
  ql.prototype.set = ql.prototype.set;
  ql.prototype.setProperties = ql.prototype.H;
  ql.prototype.unset = ql.prototype.R;
  ql.prototype.changed = ql.prototype.u;
  ql.prototype.dispatchEvent = ql.prototype.b;
  ql.prototype.getRevision = ql.prototype.L;
  ql.prototype.on = ql.prototype.J;
  ql.prototype.once = ql.prototype.once;
  ql.prototype.un = ql.prototype.K;
  P.prototype.getFirstCoordinate = P.prototype.bc;
  P.prototype.getLastCoordinate = P.prototype.cc;
  P.prototype.getLayout = P.prototype.ec;
  P.prototype.rotate = P.prototype.rotate;
  P.prototype.scale = P.prototype.scale;
  P.prototype.getClosestPoint = P.prototype.Gb;
  P.prototype.intersectsCoordinate = P.prototype.yb;
  P.prototype.getExtent = P.prototype.G;
  P.prototype.simplify = P.prototype.Rb;
  P.prototype.transform = P.prototype.hb;
  P.prototype.get = P.prototype.get;
  P.prototype.getKeys = P.prototype.P;
  P.prototype.getProperties = P.prototype.M;
  P.prototype.set = P.prototype.set;
  P.prototype.setProperties = P.prototype.H;
  P.prototype.unset = P.prototype.R;
  P.prototype.changed = P.prototype.u;
  P.prototype.dispatchEvent = P.prototype.b;
  P.prototype.getRevision = P.prototype.L;
  P.prototype.on = P.prototype.J;
  P.prototype.once = P.prototype.once;
  P.prototype.un = P.prototype.K;
  D.prototype.getFirstCoordinate = D.prototype.bc;
  D.prototype.getLastCoordinate = D.prototype.cc;
  D.prototype.getLayout = D.prototype.ec;
  D.prototype.rotate = D.prototype.rotate;
  D.prototype.scale = D.prototype.scale;
  D.prototype.getClosestPoint = D.prototype.Gb;
  D.prototype.intersectsCoordinate = D.prototype.yb;
  D.prototype.getExtent = D.prototype.G;
  D.prototype.simplify = D.prototype.Rb;
  D.prototype.transform = D.prototype.hb;
  D.prototype.get = D.prototype.get;
  D.prototype.getKeys = D.prototype.P;
  D.prototype.getProperties = D.prototype.M;
  D.prototype.set = D.prototype.set;
  D.prototype.setProperties = D.prototype.H;
  D.prototype.unset = D.prototype.R;
  D.prototype.changed = D.prototype.u;
  D.prototype.dispatchEvent = D.prototype.b;
  D.prototype.getRevision = D.prototype.L;
  D.prototype.on = D.prototype.J;
  D.prototype.once = D.prototype.once;
  D.prototype.un = D.prototype.K;
  E.prototype.getFirstCoordinate = E.prototype.bc;
  E.prototype.getLastCoordinate = E.prototype.cc;
  E.prototype.getLayout = E.prototype.ec;
  E.prototype.rotate = E.prototype.rotate;
  E.prototype.scale = E.prototype.scale;
  E.prototype.getClosestPoint = E.prototype.Gb;
  E.prototype.intersectsCoordinate = E.prototype.yb;
  E.prototype.getExtent = E.prototype.G;
  E.prototype.simplify = E.prototype.Rb;
  E.prototype.transform = E.prototype.hb;
  E.prototype.get = E.prototype.get;
  E.prototype.getKeys = E.prototype.P;
  E.prototype.getProperties = E.prototype.M;
  E.prototype.set = E.prototype.set;
  E.prototype.setProperties = E.prototype.H;
  E.prototype.unset = E.prototype.R;
  E.prototype.changed = E.prototype.u;
  E.prototype.dispatchEvent = E.prototype.b;
  E.prototype.getRevision = E.prototype.L;
  E.prototype.on = E.prototype.J;
  E.prototype.once = E.prototype.once;
  E.prototype.un = E.prototype.K;
  um.prototype.readFeatures = um.prototype.Ma;
  Dm.prototype.readFeatures = Dm.prototype.Ma;
  um.prototype.readFeatures = um.prototype.Ma;
  qg.prototype.get = qg.prototype.get;
  qg.prototype.getKeys = qg.prototype.P;
  qg.prototype.getProperties = qg.prototype.M;
  qg.prototype.set = qg.prototype.set;
  qg.prototype.setProperties = qg.prototype.H;
  qg.prototype.unset = qg.prototype.R;
  qg.prototype.changed = qg.prototype.u;
  qg.prototype.dispatchEvent = qg.prototype.b;
  qg.prototype.getRevision = qg.prototype.L;
  qg.prototype.on = qg.prototype.J;
  qg.prototype.once = qg.prototype.once;
  qg.prototype.un = qg.prototype.K;
  rg.prototype.getMap = rg.prototype.g;
  rg.prototype.setMap = rg.prototype.setMap;
  rg.prototype.setTarget = rg.prototype.i;
  rg.prototype.get = rg.prototype.get;
  rg.prototype.getKeys = rg.prototype.P;
  rg.prototype.getProperties = rg.prototype.M;
  rg.prototype.set = rg.prototype.set;
  rg.prototype.setProperties = rg.prototype.H;
  rg.prototype.unset = rg.prototype.R;
  rg.prototype.changed = rg.prototype.u;
  rg.prototype.dispatchEvent = rg.prototype.b;
  rg.prototype.getRevision = rg.prototype.L;
  rg.prototype.on = rg.prototype.J;
  rg.prototype.once = rg.prototype.once;
  rg.prototype.un = rg.prototype.K;
  Hj.prototype.getMap = Hj.prototype.g;
  Hj.prototype.setMap = Hj.prototype.setMap;
  Hj.prototype.setTarget = Hj.prototype.i;
  Hj.prototype.get = Hj.prototype.get;
  Hj.prototype.getKeys = Hj.prototype.P;
  Hj.prototype.getProperties = Hj.prototype.M;
  Hj.prototype.set = Hj.prototype.set;
  Hj.prototype.setProperties = Hj.prototype.H;
  Hj.prototype.unset = Hj.prototype.R;
  Hj.prototype.changed = Hj.prototype.u;
  Hj.prototype.dispatchEvent = Hj.prototype.b;
  Hj.prototype.getRevision = Hj.prototype.L;
  Hj.prototype.on = Hj.prototype.J;
  Hj.prototype.once = Hj.prototype.once;
  Hj.prototype.un = Hj.prototype.K;
  Mj.prototype.getMap = Mj.prototype.g;
  Mj.prototype.setMap = Mj.prototype.setMap;
  Mj.prototype.setTarget = Mj.prototype.i;
  Mj.prototype.get = Mj.prototype.get;
  Mj.prototype.getKeys = Mj.prototype.P;
  Mj.prototype.getProperties = Mj.prototype.M;
  Mj.prototype.set = Mj.prototype.set;
  Mj.prototype.setProperties = Mj.prototype.H;
  Mj.prototype.unset = Mj.prototype.R;
  Mj.prototype.changed = Mj.prototype.u;
  Mj.prototype.dispatchEvent = Mj.prototype.b;
  Mj.prototype.getRevision = Mj.prototype.L;
  Mj.prototype.on = Mj.prototype.J;
  Mj.prototype.once = Mj.prototype.once;
  Mj.prototype.un = Mj.prototype.K;
  ak.prototype.getMap = ak.prototype.g;
  ak.prototype.setMap = ak.prototype.setMap;
  ak.prototype.setTarget = ak.prototype.i;
  ak.prototype.get = ak.prototype.get;
  ak.prototype.getKeys = ak.prototype.P;
  ak.prototype.getProperties = ak.prototype.M;
  ak.prototype.set = ak.prototype.set;
  ak.prototype.setProperties = ak.prototype.H;
  ak.prototype.unset = ak.prototype.R;
  ak.prototype.changed = ak.prototype.u;
  ak.prototype.dispatchEvent = ak.prototype.b;
  ak.prototype.getRevision = ak.prototype.L;
  ak.prototype.on = ak.prototype.J;
  ak.prototype.once = ak.prototype.once;
  ak.prototype.un = ak.prototype.K;
  ug.prototype.getMap = ug.prototype.g;
  ug.prototype.setMap = ug.prototype.setMap;
  ug.prototype.setTarget = ug.prototype.i;
  ug.prototype.get = ug.prototype.get;
  ug.prototype.getKeys = ug.prototype.P;
  ug.prototype.getProperties = ug.prototype.M;
  ug.prototype.set = ug.prototype.set;
  ug.prototype.setProperties = ug.prototype.H;
  ug.prototype.unset = ug.prototype.R;
  ug.prototype.changed = ug.prototype.u;
  ug.prototype.dispatchEvent = ug.prototype.b;
  ug.prototype.getRevision = ug.prototype.L;
  ug.prototype.on = ug.prototype.J;
  ug.prototype.once = ug.prototype.once;
  ug.prototype.un = ug.prototype.K;
  fk.prototype.getMap = fk.prototype.g;
  fk.prototype.setMap = fk.prototype.setMap;
  fk.prototype.setTarget = fk.prototype.i;
  fk.prototype.get = fk.prototype.get;
  fk.prototype.getKeys = fk.prototype.P;
  fk.prototype.getProperties = fk.prototype.M;
  fk.prototype.set = fk.prototype.set;
  fk.prototype.setProperties = fk.prototype.H;
  fk.prototype.unset = fk.prototype.R;
  fk.prototype.changed = fk.prototype.u;
  fk.prototype.dispatchEvent = fk.prototype.b;
  fk.prototype.getRevision = fk.prototype.L;
  fk.prototype.on = fk.prototype.J;
  fk.prototype.once = fk.prototype.once;
  fk.prototype.un = fk.prototype.K;
  wg.prototype.getMap = wg.prototype.g;
  wg.prototype.setMap = wg.prototype.setMap;
  wg.prototype.setTarget = wg.prototype.i;
  wg.prototype.get = wg.prototype.get;
  wg.prototype.getKeys = wg.prototype.P;
  wg.prototype.getProperties = wg.prototype.M;
  wg.prototype.set = wg.prototype.set;
  wg.prototype.setProperties = wg.prototype.H;
  wg.prototype.unset = wg.prototype.R;
  wg.prototype.changed = wg.prototype.u;
  wg.prototype.dispatchEvent = wg.prototype.b;
  wg.prototype.getRevision = wg.prototype.L;
  wg.prototype.on = wg.prototype.J;
  wg.prototype.once = wg.prototype.once;
  wg.prototype.un = wg.prototype.K;
  kk.prototype.getMap = kk.prototype.g;
  kk.prototype.setMap = kk.prototype.setMap;
  kk.prototype.setTarget = kk.prototype.i;
  kk.prototype.get = kk.prototype.get;
  kk.prototype.getKeys = kk.prototype.P;
  kk.prototype.getProperties = kk.prototype.M;
  kk.prototype.set = kk.prototype.set;
  kk.prototype.setProperties = kk.prototype.H;
  kk.prototype.unset = kk.prototype.R;
  kk.prototype.changed = kk.prototype.u;
  kk.prototype.dispatchEvent = kk.prototype.b;
  kk.prototype.getRevision = kk.prototype.L;
  kk.prototype.on = kk.prototype.J;
  kk.prototype.once = kk.prototype.once;
  kk.prototype.un = kk.prototype.K;
  rk.prototype.getMap = rk.prototype.g;
  rk.prototype.setMap = rk.prototype.setMap;
  rk.prototype.setTarget = rk.prototype.i;
  rk.prototype.get = rk.prototype.get;
  rk.prototype.getKeys = rk.prototype.P;
  rk.prototype.getProperties = rk.prototype.M;
  rk.prototype.set = rk.prototype.set;
  rk.prototype.setProperties = rk.prototype.H;
  rk.prototype.unset = rk.prototype.R;
  rk.prototype.changed = rk.prototype.u;
  rk.prototype.dispatchEvent = rk.prototype.b;
  rk.prototype.getRevision = rk.prototype.L;
  rk.prototype.on = rk.prototype.J;
  rk.prototype.once = rk.prototype.once;
  rk.prototype.un = rk.prototype.K;
  return OPENLAYERS.ol;
}));
