(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5301: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return s(441)
            }])
        },
        441: function(e, t, s) {
            "use strict";
            s.r(t);
            var n = s(5893),
                r = s(7294),
                a = s(1664),
                i = s(9008),
                l = s(6869),
                c = s(7005);

            function o(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = s,
                    e
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s)
                            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(s);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(s, e).enumerable
                        })))),
                        n.forEach((function(t) {
                            o(e, t, s[t])
                        }))
                }
                return e
            }

            function x(e, t) {
                if (null == e)
                    return {};
                var s, n, r = function(e, t) {
                    if (null == e)
                        return {};
                    var s, n, r = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++)
                        s = a[n],
                        t.indexOf(s) >= 0 || (r[s] = e[s]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++)
                        s = a[n],
                        t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
                }
                return r
            }

            function h(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var s = [],
                        n = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (s.push(i.value), !t || s.length !== t); n = !0)
                        ;
                    } catch (c) {
                        r = !0,
                            a = c
                    } finally {
                        try {
                            n || null == l.return || l.return()
                        } finally {
                            if (r)
                                throw a
                        }
                    }
                    return s
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            var p = function(e) {
                    var t = e.num;
                    return (0,
                        n.jsx)("video", {
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        className: "rounded-xl",
                        children: (0,
                            n.jsx)("source", {
                            src: "https://rndmcharacters.s3.amazonaws.com/InvisibleFriends-Previews/invsble_".concat(t, ".mp4"),
                            type: "video/mp4"
                        })
                    })
                },
                u = function(e) {
                    var t = e.src,
                        s = e.poster,
                        a = x(e, ["src", "poster"]),
                        i = (0,
                            r.useState)(!1),
                        l = i[0],
                        c = i[1];
                    return (0,
                            r.useEffect)((function() {
                            if (t) {
                                c(!1);
                                var e = new Image;
                                e.src = t,
                                    e.onload = function() {
                                        return c(!0)
                                    }
                            }
                        }), [t]),
                        l ? (0,
                            n.jsx)("img", m({
                            alt: a.alt,
                            src: t
                        }, a)) : (0,
                            n.jsx)("img", m({
                            alt: a.alt,
                            src: s
                        }, a))
                },
                f = function(e) {
                    var t = d({}, e);
                    return (0,
                        n.jsx)("button", m({
                        disabled: !0
                    }, t, {
                        children: "Connect wallet"
                    }))
                },
                g = function() {
                    var e, t = h((0,
                            l.mA)({
                            fetchEns: !0
                        }), 2),
                        s = t[0].data,
                        r = t[1];
                    return s ? (0,
                        n.jsxs)("div", {
                        children: [(null === (e = s.ens) || void 0 === e ? void 0 : e.name) || s.address, (0,
                            n.jsx)("button", {
                            onClick: function() {
                                return r()
                            },
                            children: "Disconnect"
                        })]
                    }) : (0,
                        n.jsx)(f, {
                        className: "font-bold bg-white border-4 border-dashed btn bg-opacity-10 opacity-30"
                    })
                };
            t.default = function() {
                return (0,
                    n.jsxs)("div", {
                    className: "flex flex-col min-h-screen font-fatfrank",
                    children: [(0,
                        n.jsxs)(i.default, {
                        children: [(0,
                            n.jsx)("title", {
                            children: "INVISIBLE FRIENDS"
                        }), (0,
                            n.jsx)("meta", {
                            name: "description",
                            content: "Bing bong!"
                        }), (0,
                            n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width"
                        }), (0,
                            n.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0,
                            n.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.png"
                        }), (0,
                            n.jsx)("link", {
                            rel: "apple-touch-icon",
                            href: "/apple-touch-icon.png"
                        }), (0,
                            n.jsx)("meta", {
                            name: "twitter:title",
                            content: "INVISIBLE FRIENDS"
                        }), (0,
                            n.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0,
                            n.jsx)("meta", {
                            name: "twitter:site",
                            content: "@InvsbleFriends"
                        }), (0,
                            n.jsx)("meta", {
                            name: "twitter:creator",
                            content: "@MotionMarkus"
                        }), (0,
                            n.jsx)("meta", {
                            property: "og:title",
                            content: "INVISIBLE FRIENDS"
                        }), (0,
                            n.jsx)("meta", {
                            property: "og:description",
                            content: "Dropping February 2022. Bing bong!"
                        }), (0,
                            n.jsx)("meta", {
                            property: "og:image",
                            content: "https://invisiblefriends.io/IF_open-graph.png"
                        })]
                    }), (0,
                        n.jsx)("div", {
                        className: "py-2 text-3xl text-yellow-200 bg-yellow-200 font-fatfrank text-outline-marquee",
                        children: (0,
                            n.jsx)(c.Z, {
                            direction: "right",
                            gradient: !1,
                            children: Array.from(new Array(10)).map((function(e, t) {
                                return (0,
                                    n.jsx)("span", {
                                    className: "uppercase",
                                    children: "\xb7 PUBLIC MINT IS LIVE \xb7 MINT NOW\xa0"
                                }, t)
                            }))
                        })
                    }), (0,
                        n.jsxs)("nav", {
                        className: "items-center flex-none p-5 grid grid-cols-3 lg:p-7",
                        children: [(0,
                            n.jsx)("div", {
                            className: "",
                            children: (0,
                                n.jsxs)("a", {
                                href: "https://shop.invisiblefriends.io",
                                className: "inline-flex items-center space-x-2",
                                target: "_blank",
                                rel: "noreferrer",
                                children: [(0,
                                    n.jsx)("span", {
                                    children: "Shop"
                                }), (0,
                                    n.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                        n.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    })
                                })]
                            })
                        }), (0,
                            n.jsx)("div", {
                            className: "flex justify-center",
                            children: (0,
                                n.jsx)(a.default, {
                                href: "/",
                                children: (0,
                                    n.jsx)("a", {
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/handshake.svg",
                                        alt: "bing bong",
                                        className: "w-8 text-white md:w-12"
                                    })
                                })
                            })
                        }), (0,
                            n.jsxs)("div", {
                            className: "flex items-center justify-end space-x-4",
                            children: [(0,
                                n.jsx)("a", {
                                className: "",
                                href: "https://twitter.com/InvsbleFriends",
                                children: (0,
                                    n.jsx)("img", {
                                    src: "/twitter-logo.svg",
                                    alt: "Twitter",
                                    className: "w-6 text-white md:w-8"
                                })
                            }), (0,
                                n.jsx)("a", {
                                className: "",
                                href: "https://www.instagram.com/invisiblefriends_io/",
                                children: (0,
                                    n.jsx)("img", {
                                    src: "/instagram.svg",
                                    alt: "Instagram",
                                    className: "w-6 text-white md:w-8"
                                })
                            }), (0,
                                n.jsx)("a", {
                                className: "",
                                href: "https://discord.gg/rndm",
                                children: (0,
                                    n.jsx)("img", {
                                    src: "/discord-logo.svg",
                                    alt: "Discord",
                                    className: "w-6 text-white md:w-8"
                                })
                            })]
                        })]
                    }), (0,
                        n.jsxs)("div", {
                        className: "flex flex-col items-center justify-center flex-1",
                        children: [(0,
                            n.jsxs)("header", {
                            className: "flex flex-col items-center justify-center h-full font-black text-center font-fatfrank",
                            children: [(0,
                                n.jsxs)("h1", {
                                className: "text-6xl text-yellow-200 md:text-8xl lg:text-9xl leading-solid ",
                                children: ["INVISIBLE", (0,
                                    n.jsx)("br", {}), "FRIENDS"]
                            }), (0,
                                n.jsx)("div", {
                                className: "w-full md:w-[600px] -mt-16 md:-mt-32 lg:-mt-36",
                                children: (0,
                                    n.jsx)(u, {
                                    src: "https://s3.brnbw.com/invisible-montage-600w-c3zLxbZQSZq2Cdu9FuY5m7bAsDLUxpYtAcT4MOAkjgBViiZyKagnbn6wJEwNN0fbvs2Dg7gpLJK92JRwhquCBaE7avOMN297Ht6o.gif",
                                    poster: "/invisible-montage.png",
                                    alt: "Basketball"
                                })
                            })]
                        }), (0,
                            n.jsxs)("div", {
                            id: "mint",
                        })]
                    }), (0,
                        n.jsx)("div", {
                        className: "py-2 text-3xl text-yellow-200 bg-yellow-200 font-fatfrank text-outline-marquee",
                        children: (0,
                            n.jsx)(c.Z, {
                            direction: "left",
                            gradient: !1,
                            children: Array.from(new Array(10)).map((function(e, t) {
                                return (0,
                                    n.jsx)("span", {
                                    className: "uppercase",
                                    children: "\xb7 PUBLIC MINT IS LIVE \xb7 MINT NOW\xa0"
                                }, t)
                            }))
                        })
                    }), (0,
                        n.jsxs)("div", {
                        className: "py-1 bg-white md:py-5 space-y-1 md:space-y-5 lg:space-y-7 lg:py-7 text-sea-600",
                        children: [(0,
                            n.jsx)("div", {
                            className: "px-1 overflow-hidden md:px-5 lg:px-7",
                            children: (0,
                                n.jsxs)("div", {
                                className: "-mx-10 md:-mx-32 grid grid-cols-5 md:grid-cols-2 md:grid-cols-5 gap-1 md:gap-5",
                                children: [(0,
                                    n.jsx)(p, {
                                    num: 1
                                }), (0,
                                    n.jsx)(p, {
                                    num: 2
                                }), (0,
                                    n.jsx)(p, {
                                    num: 3
                                }), (0,
                                    n.jsx)(p, {
                                    num: 4
                                }), (0,
                                    n.jsx)(p, {
                                    num: 5
                                })]
                            })
                        }), (0,
                            n.jsx)("div", {
                            className: "px-1 overflow-hidden md:px-5 lg:px-7",
                            children: (0,
                                n.jsxs)("div", {
                                className: "grid grid-cols-4 md:grid-cols-2 md:grid-cols-4 gap-1 md:gap-5",
                                children: [(0,
                                    n.jsx)(p, {
                                    num: 6
                                }), (0,
                                    n.jsx)(p, {
                                    num: 7
                                }), (0,
                                    n.jsx)(p, {
                                    num: 8
                                }), (0,
                                    n.jsx)(p, {
                                    num: 9
                                })]
                            })
                        }), (0,
                            n.jsx)("div", {
                            className: "px-1 overflow-hidden md:px-5 lg:px-7",
                            children: (0,
                                n.jsxs)("div", {
                                className: "-mx-10 md:-mx-32 grid grid-cols-5 md:grid-cols-2 md:grid-cols-5 gap-1 md:gap-5",
                                children: [(0,
                                    n.jsx)(p, {
                                    num: 10
                                }), (0,
                                    n.jsx)(p, {
                                    num: 11
                                }), (0,
                                    n.jsx)(p, {
                                    num: 12
                                }), (0,
                                    n.jsx)(p, {
                                    num: 13
                                }), (0,
                                    n.jsx)(p, {
                                    num: 14
                                })]
                            })
                        })]
                    }), (0,
                        n.jsx)("div", {
                        className: "py-2 text-3xl text-yellow-200 uppercase bg-yellow-200 font-fatfrank text-outline-marquee",
                        children: (0,
                            n.jsx)(c.Z, {
                            direction: "right",
                            gradient: !1,
                            children: Array.from(new Array(10)).map((function(e, t) {
                                return (0,
                                    n.jsx)("span", {
                                    children: "Nice to unsee you \xb7\xa0"
                                }, t)
                            }))
                        })
                    }), (0,
                        n.jsxs)("div", {
                        className: "p-5 py-10 text-center space-y-8 md:space-y-0 md:p-16 md:py-32 grid md:grid-cols-2 gap-4",
                        children: [(0,
                            n.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                                n.jsx)("img", {
                                src: "/handshake.svg",
                                className: "w-24 mx-auto",
                                alt: "Handshake"
                            }), (0,
                                n.jsxs)("h3", {
                                className: "text-3xl text-yellow-200 font-fatfrank md:text-5xl",
                                children: ["Markus", (0,
                                    n.jsx)("br", {}), "Magnusson"]
                            }), (0,
                                n.jsx)("p", {
                                className: "max-w-lg mx-auto",
                                children: "INVISIBLE FRIENDS are thought up, drawn and animated by this one Swedish dude."
                            }), (0,
                                n.jsx)("p", {
                                children: (0,
                                    n.jsx)("a", {
                                    href: "http://twitter.com/MotionMarkus",
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/twitter-logo.svg",
                                        alt: "Twitter",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                })
                            })]
                        }), (0,
                            n.jsxs)("div", {
                            className: "space-y-4",
                            children: [(0,
                                n.jsx)("img", {
                                src: "/rcc.png",
                                className: "w-24 mx-auto rounded-full",
                                alt: "Handshake"
                            }), (0,
                                n.jsxs)("h3", {
                                className: "text-yellow-200 font-fatfrank md:text-5xl",
                                children: ["Random Character", (0,
                                    n.jsx)("br", {}), "Collective"]
                            }), (0,
                                n.jsx)("p", {
                                className: "max-w-lg mx-auto",
                                children: "INVISIBLE FRIENDS are a proud member of Random Character Collective. The internet's friendliest animator collective."
                            }), (0,
                                n.jsx)("p", {
                                children: (0,
                                    n.jsx)("a", {
                                    href: "http://twitter.com/rndmcharacters",
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/twitter-logo.svg",
                                        alt: "Twitter",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                })
                            })]
                        })]
                    }), (0,
                        n.jsx)("div", {
                        className: "border-t border-black border-opacity-10"
                    }), (0,
                        n.jsx)("nav", {
                        className: "p-10 lg:p-16",
                        children: (0,
                            n.jsxs)("div", {
                            className: "flex flex-col mx-auto text-center space-y-6",
                            children: [(0,
                                n.jsx)(a.default, {
                                href: "/",
                                children: (0,
                                    n.jsx)("a", {
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/bingbong.svg",
                                        alt: "bing bong",
                                        className: "inline-block w-16 text-white md:w-24"
                                    })
                                })
                            }), (0,
                                n.jsxs)("div", {
                                className: "space-x-4",
                                children: [(0,
                                    n.jsx)("a", {
                                    className: "",
                                    href: "https://twitter.com/InvsbleFriends",
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/twitter-logo.svg",
                                        alt: "Twitter",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                }), (0,
                                    n.jsx)("a", {
                                    className: "",
                                    href: "https://www.instagram.com/invisiblefriends_io/",
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/instagram.svg",
                                        alt: "Instagram",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                }), (0,
                                    n.jsx)("a", {
                                    className: "",
                                    href: "https://discord.gg/rndm",
                                    children: (0,
                                        n.jsx)("img", {
                                        src: "/discord-logo.svg",
                                        alt: "Discord",
                                        className: "inline-block w-6 text-white md:w-8"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [2, 774, 888, 179], (function() {
            return t = 5301,
                e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);