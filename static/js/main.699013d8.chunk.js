(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={title:"statistics_title__2t_f4",p:"statistics_p__3BLfP"}},function(e,t,c){e.exports={button:"feedback_button__2klv3"}},,,,function(e,t,c){e.exports={title:"section_title__zAsnE"}},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),i=c.n(s),l=(c(12),c(4)),o=(c(13),c(7)),r=c.n(o),d=c(3),u=c.n(d),b=c(0);function j(e){var t=e.handleClickGood,c=e.handleClickNeutral,a=e.handleClickBad;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:u.a.button,type:"button",onClick:t,children:"Good"}),Object(b.jsx)("button",{className:u.a.button,type:"button",onClick:c,children:"Neutral"}),Object(b.jsx)("button",{className:u.a.button,type:"button",onClick:a,children:"Bad"})]})}var h=c(2),k=c.n(h);function f(e){var t=e.good,c=e.neutral,a=e.bad,n=e.totalFeedback,s=e.positiveFeedbackPercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:k.a.title,children:"Statistics"}),Object(b.jsxs)("p",{className:k.a.p,children:["Good: ",t]}),Object(b.jsxs)("p",{className:k.a.p,children:["Neutral: ",c]}),Object(b.jsxs)("p",{className:k.a.p,children:["Bad: ",a]}),Object(b.jsxs)("p",{className:k.a.p,children:["Total: ",n]}),Object(b.jsxs)("p",{className:k.a.p,children:["Positive feedback:"," ",s||0]})]})}function O(e){var t=e.msg;return Object(b.jsx)("div",{className:k.a.title,children:t})}function p(e){var t=e.title,c=e.handleClickGood,a=e.handleClickNeutral,n=e.handleClickBad,s=e.good,i=e.neutral,l=e.bad,o=e.totalFeedback,d=e.positiveFeedbackPercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:r.a.title,children:t}),Object(b.jsx)(j,{handleClickGood:c,handleClickNeutral:a,handleClickBad:n}),s||i||l?Object(b.jsx)(f,{good:s,neutral:i,bad:l,totalFeedback:o,positiveFeedbackPercentage:d}):Object(b.jsx)(O,{msg:"No feedback given"})]})}function x(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(l.a)(s,2),o=i[0],r=i[1],d=Object(a.useState)(0),u=Object(l.a)(d,2),j=u[0],h=u[1],k=Object(a.useRef)(0),f=Object(a.useRef)(0);return Object(a.useEffect)((function(){k.current=c+o+j,f.current=Math.round(c/k.current*100)})),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{title:"Please leave feedback",handleClickGood:function(){n((function(e){return e+1}))},handleClickNeutral:function(){r((function(e){return e+1}))},handleClickBad:function(){h((function(e){return e+1}))},good:c,neutral:o,bad:j,totalFeedback:k.current,positiveFeedbackPercentage:f.current})})}i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.699013d8.chunk.js.map