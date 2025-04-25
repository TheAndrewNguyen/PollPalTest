(() => {
  "use strict";
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              d = r.base ? s[0] + r.base : s[0],
              u = a[d] || 0,
              p = "".concat(d, " ").concat(u);
            a[d] = u + 1;
            var l = t(p),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== l) e[l].references++, e[l].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), d = 0; d < a.length; d++) {
              var u = t(a[d]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            a = s;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var u = [].concat(n[d]);
                (r && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  t &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = t))
                      : (u[2] = t)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      365: (n, e, t) => {
        t.d(e, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          n.id,
          'body {\n  margin: 0;\n  padding: 0;\n  font-family: "Aldrich", sans-serif;\n  background-color: #f9f9f9;\n  color: #222;\n}\n\n#app {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.header {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n.header h1 {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n  color: #2c2c2c;\n}\n\n.tagline {\n  font-size: 1rem;\n  color: #666;\n}\n\n.main-container {\n  background: white;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n}\n\n.input-group {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n#zipInput {\n  flex: 1;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n#searchBtn {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #bb5fbb;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n#searchBtn:hover {\n  background-color: #a84ea8;\n}\n\n.results {\n  margin-top: 20px;\n  background-color: #f2f2f2;\n  border-radius: 6px;\n  padding: 15px;\n}\n\n.results h2 {\n  margin-top: 0;\n  color: #333;\n}\n\n.results a {\n  display: inline-block;\n  margin-top: 10px;\n  color: #0056b3;\n  text-decoration: none;\n}\n\n.results a:hover {\n  text-decoration: underline;\n}\n\n.footer {\n  margin-top: 40px;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #888;\n}\n\n.heart {\n  color: red;\n}\n\n.hidden {\n  display: none;\n}\n',
          "",
        ]);
        const c = i;
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    a = t(825),
    i = t.n(a),
    c = t(659),
    s = t.n(c),
    d = t(56),
    u = t.n(d),
    p = t(540),
    l = t.n(p),
    f = t(113),
    m = t.n(f),
    v = t(365),
    g = {};
  (g.styleTagTransform = m()),
    (g.setAttributes = u()),
    (g.insert = s().bind(null, "head")),
    (g.domAPI = i()),
    (g.insertStyleElement = l()),
    o()(v.A, g),
    v.A && v.A.locals && v.A.locals,
    document.getElementById("searchBtn").addEventListener("click", function () {
      "" !== document.getElementById("zipInput").value.trim() &&
        ((document.getElementById("locationName").textContent = "Seattle"),
        (document.getElementById("electionDate").textContent =
          "November 5, 2025"),
        (document.getElementById("registrationDeadline").textContent =
          "October 15, 2025"),
        (document.getElementById("registerLink").href = "https://vote.gov"),
        document.getElementById("results").classList.remove("hidden"));
    });
})();
