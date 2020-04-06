(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    22: function (e, t, a) {},
    32: function (e, t, a) {
      e.exports = a(53);
    },
    53: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        i = a(28),
        o = a.n(i),
        c = a(29),
        s = a(9),
        l = a(10),
        p = a(13),
        u = a(11),
        m = a(14),
        d = (a(22), "7Fs4xShlBdXXSRhSKKjv"),
        h = "9KLK-ZDQIbNbYFcQYM5uVQ",
        f = function (e) {
          return "https://isoline.route.api.here.com/routing/7.2/calculateisoline.json\n?app_id="
            .concat(d, "\n&app_code=")
            .concat(h, "\n&mode=shortest;")
            .concat(e.mode, ";\ntraffic:")
            .concat(e.traffic ? "enabled" : "disabled", "\n&start=geo!")
            .concat(e.center[0], ",")
            .concat(e.center[1], "\n&range=")
            .concat(e.range, "\n&rangetype=")
            .concat(e.type);
        },
        E = { time: 32400, distance: 8e5 },
        g =
          (a(23),
          a(24),
          a(43),
          a(50),
          function (e) {
            return r.a.createElement(
              "div",
              { className: "sidebar" },
              r.a.createElement(
                "div",
                { className: "header" },
                r.a.createElement("h1", null, "HERE Isoline Explorer"),
                r.a.createElement(
                  "div",
                  { className: "subtitle" },
                  "HERE Routing Isolines in action."
                )
              ),
              r.a.createElement(
                "div",
                { className: "content" },
                r.a.createElement(
                  "div",
                  { className: "section" },
                  r.a.createElement(
                    "div",
                    { className: "section-title" },
                    "Transportation mode"
                  ),
                  r.a.createElement(
                    "lui-radiobutton-group",
                    null,
                    r.a.createElement(
                      "lui-radiobutton",
                      {
                        onClick: function () {
                          return e.updateOptions("pedestrian", "mode");
                        },
                        class: "lui-small",
                      },
                      r.a.createElement("input", {
                        type: "radio",
                        name: "mode",
                        value: "pedestrian",
                        checked: "pedestrian" === e.options.mode,
                      }),
                      "Pedestrian"
                    ),
                    r.a.createElement(
                      "lui-radiobutton",
                      {
                        onClick: function () {
                          return e.updateOptions("car", "mode");
                        },
                        class: "lui-small",
                      },
                      r.a.createElement("input", {
                        type: "radio",
                        checked: "car" === e.options.mode,
                      }),
                      "Car"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "section" },
                  r.a.createElement(
                    "div",
                    { className: "section-title" },
                    "Traffic enabled"
                  ),
                  r.a.createElement(
                    "lui-checkbox",
                    {
                      class: "lui-small",
                      onClick: function () {
                        return e.updateOptions(!e.options.traffic, "traffic");
                      },
                    },
                    r.a.createElement("input", {
                      type: "checkbox",
                      checked: e.options.traffic,
                    }),
                    "Traffic"
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "section" },
                  r.a.createElement(
                    "div",
                    { className: "section-title" },
                    "Time or distance"
                  ),
                  r.a.createElement(
                    "lui-radiobutton-group",
                    null,
                    r.a.createElement(
                      "lui-radiobutton",
                      {
                        onClick: function () {
                          return e.updateOptions("distance", "type");
                        },
                        class: "lui-small",
                      },
                      r.a.createElement("input", {
                        type: "radio",
                        checked: "distance" === e.options.type,
                      }),
                      "Distance"
                    ),
                    r.a.createElement(
                      "lui-radiobutton",
                      {
                        onClick: function () {
                          return e.updateOptions("time", "type");
                        },
                        class: "lui-small",
                      },
                      r.a.createElement("input", {
                        type: "radio",
                        checked: "time" === e.options.type,
                      }),
                      "Time"
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "section" },
                  r.a.createElement(
                    "div",
                    { className: "section-title" },
                    "Range"
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    "distance" === e.options.type
                      ? Math.round(621371e-9 * e.options.range) + " miles"
                      : Math.round(e.options.range / 60) + " minutes"
                  ),
                  r.a.createElement("input", {
                    onChange: e.updateRange,
                    type: "range",
                    min: 1,
                    max: e.max,
                    value: e.sliderVal,
                    className: "slider",
                  })
                ),
                r.a.createElement(
                  "div",
                  { className: "section subtitle" },
                  r.a.createElement(
                    "div",
                    null,
                    "HERE Routing Isoline ",
                    " ",
                    r.a.createElement(
                      "a",
                      {
                        href:
                          "https://developer.here.com/documentation/routing/topics/request-isoline.html",
                      },
                      "documentation"
                    )
                  ),
                  r.a.createElement("br", null),
                  r.a.createElement(
                    "div",
                    null,
                    "Made by ",
                    r.a.createElement(
                      "a",
                      { href: "https://twitter.com/dbabbs" },
                      "@dbabbs"
                    )
                  )
                )
              )
            );
          }),
        v = a(56),
        b = a(58),
        k = a(55),
        y = a(57),
        M = (function (e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(p.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).handleMapMove = function () {
                var e = a.map.current.viewport.zoom;
                a.props.handleMapMove(e);
              }),
              (a.handleMarkerDrag = function () {
                var e = a.marker.current.leafletElement.getLatLng(),
                  t = [e.lat, e.lng];
                a.props.handleMarkerDrag(t);
              }),
              (a.marker = r.a.createRef()),
              (a.map = r.a.createRef()),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "map" },
                    r.a.createElement(
                      v.a,
                      {
                        center: this.props.center,
                        zoom: this.props.zoom,
                        zoomControl: !1,
                        attributionControl: !1,
                        onMoveend: this.handleMapMove,
                        ref: this.map,
                      },
                      r.a.createElement(b.a, {
                        url:
                          ((e = "reduced.night"),
                          "https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/"
                            .concat(e, "/{z}/{x}/{y}/512/png8?app_id=")
                            .concat(d, "&app_code=")
                            .concat(h, "&ppi=320")),
                      }),
                      r.a.createElement(k.a, {
                        position: this.props.center,
                        draggable: !0,
                        onDragEnd: this.handleMarkerDrag,
                        ref: this.marker,
                      }),
                      r.a.createElement(y.a, {
                        fillOpacity: 0.1,
                        weight: 2,
                        positions: this.props.isoline,
                        color: this.props.color,
                      })
                    )
                  );
                  var e;
                },
              },
            ]),
            t
          );
        })(r.a.Component),
        O = (function (e) {
          function t(e) {
            var a;
            return (
              Object(s.a)(this, t),
              ((a = Object(p.a)(
                this,
                Object(u.a)(t).call(this, e)
              )).updateIsoline = function () {
                fetch(f(a.state))
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    if (e.response.isoline[0].component.length > 0) {
                      var t = e.response.isoline[0].component[0].shape.map(
                        function (e) {
                          return [e.split(",")[0], e.split(",")[1]];
                        }
                      );
                      a.setState({ shape: t });
                    } else {
                      a.setState({ shape: [] });
                    }
                  });
              }),
              (a.handleMapMove = function (e) {
                return a.setState({ zoom: e });
              }),
              (a.componentDidMount = function () {
                return a.updateIsoline();
              }),
              (a.handleMarkerDrag = function (e) {
                return a.setState({ center: e }, function () {
                  return a.updateIsoline();
                });
              }),
              (a.updateOptions = function (e, t) {
                "type" === t &&
                  a.state.range > E[e] &&
                  a.setState({ range: E[e] }),
                  a.setState(Object(c.a)({}, t, e), function () {
                    return a.updateIsoline();
                  });
              }),
              (a.updateRange = function (e) {
                var t = e.target.value;
                a.setState({ range: t }, function () {
                  return a.updateIsoline();
                });
              }),
              (a.marker = r.a.createRef()),
              (a.map = r.a.createRef()),
              (a.state = {
                color: "#5DDCCF",
                shape: [],
                center: [47.605779, -122.315744],
                mode: "car",
                range: 1e3,
                type: "time",
                traffic: !1,
                zoom: 12,
              }),
              a
            );
          }
          return (
            Object(m.a)(t, e),
            Object(l.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = "distance" === this.state.type ? E.distance : E.time,
                    t = this.state.range > e ? e : this.state.range;
                  return r.a.createElement(
                    "div",
                    { className: "app" },
                    r.a.createElement(
                      "lui-desktoplayer-theme",
                      null,
                      r.a.createElement(g, {
                        updateOptions: this.updateOptions,
                        updateRange: this.updateRange,
                        max: e,
                        sliderVal: t,
                        options: this.state,
                      }),
                      r.a.createElement(M, {
                        color: this.state.color,
                        isoline: this.state.shape,
                        center: this.state.center,
                        zoom: this.state.zoom,
                        handleMapMove: this.handleMapMove,
                        handleMarkerDrag: this.handleMarkerDrag,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.Component);
      o.a.render(r.a.createElement(O, null), document.getElementById("root"));
    },
  },
  [[32, 2, 1]],
]);
//# sourceMappingURL=main.94397708.chunk.js.map
