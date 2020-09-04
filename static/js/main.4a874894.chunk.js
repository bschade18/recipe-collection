(this["webpackJsonprecipe-collection"]=this["webpackJsonprecipe-collection"]||[]).push([[0],{10:function(e,t,i){e.exports=i(17)},15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),n=i(3),c=i.n(n),l=(i(15),i(4)),s=i(1),o=i(5),p=i(6),d=i(8),m=i(7),u=i(9),g=(i(16),function(e){var t=e.recipes,i=e.setCurrent;return r.a.createElement("div",{id:"recipe-list"},t.map((function(e,t){return r.a.createElement("div",{id:"recipe-title",key:t,onClick:i},e.recipeTitle)})))});var h=function(e){for(var t,i=e.recipes,a=e.currentRecipe,n=e.handleForm,c=e.handleDelete,l=0;l<i.length;l++)a===i[l].recipeTitle&&(t=r.a.createElement("div",{className:"recipeBox"},r.a.createElement("div",{className:"recipeDisplay"},r.a.createElement("div",{id:"show-recipe-title",className:"recipe-display-pane"},a),r.a.createElement("div",{className:"recipe-display-pane"},r.a.createElement("i",{id:"edit",onClick:n,className:"fas fa-edit"}),r.a.createElement("i",{onClick:c,className:"fas fa-trash"}),r.a.createElement("i",{id:"add-btn",onClick:n,className:"fas fa-plus"}))),r.a.createElement("p",{className:"ingredients-heading"},"Ingredients:"),r.a.createElement("ul",{className:"show-ingredients"},i[l].recipeIngredients.map((function(e,t){return r.a.createElement("li",{className:"list-ingredients",key:t},e)}))),r.a.createElement("p",{className:"directions-heading"},"Directions:"),r.a.createElement("ol",null,i[l].recipeSteps.map((function(e,t){return r.a.createElement("li",{className:"list-directions",key:t},e)})))));return i.length?r.a.createElement("div",null,t):r.a.createElement("div",{className:"recipeBox"},r.a.createElement("div",{className:"recipeDisplay"},r.a.createElement("div",{className:"recipe-display-pane"},r.a.createElement("i",{id:"edit",onClick:n,className:"fas fa-edit"}),r.a.createElement("i",{onClick:c,className:"fas fa-trash"}),r.a.createElement("i",{id:"add-btn",onClick:n,className:"fas fa-plus"}))))};var f=function(e){var t=e.visibility,i=e.dialogMode,a=e.onChange,n=e.recipeTitle,c=e.recipeIngredients,l=e.recipeSteps,s=e.addRecipe,o=e.handleEdit,p=e.toggleVisibility;return t&&r.a.createElement("div",{className:"dialog"},r.a.createElement("label",{className:"input-title"},"add"===i?"Add Recipe":"Edit Recipe",r.a.createElement("br",null)),r.a.createElement("textarea",{onChange:a,id:"edit-recipe",placeholder:"Recipe Name",name:"recipeTitle",value:n,type:"text",rows:"1"},n),r.a.createElement("br",null),r.a.createElement("label",{className:"input-title"},"Ingredients",r.a.createElement("br",null)),r.a.createElement("textarea",{id:"edit-ingredients",value:c,name:"recipeIngredients",onChange:a,placeholder:'Separate each ingredient with a "/" : Eggs / Flour / Cookie Mix',type:"text"},c),r.a.createElement("br",null),r.a.createElement("label",{className:"input-title"},"Directions",r.a.createElement("br",null)),r.a.createElement("textarea",{id:"edit-steps",value:l,name:"recipeSteps",onChange:a,placeholder:'Seperate each direction with a "/" : Mix eggs and flour in a bowl / Add cookie mix / Cook in oven ',type:"text"},l),r.a.createElement("div",{className:"form-btns"},r.a.createElement("button",{id:"add-save-btn",onClick:"add"===i?s:o},"add"===i?"Add":"Save"),r.a.createElement("button",{id:"close-dialog-btn",onClick:p},"Close")))};localStorage.getItem("_bschade18_recipes")||localStorage.setItem("_bschade18_recipes",JSON.stringify([{recipeTitle:"Cookies",recipeIngredients:["Eggs","Flour","Cookie mix"],recipeSteps:["Mix eggs and flour in a bowl","Add cookie mix","Cook in oven for 12 minutes","Serve and enjoy :)"]}]));var v=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(d.a)(this,Object(m.a)(t).call(this,e))).addRecipe=function(){var e=i.state,t=e.recipes,a=e.recipeTitle,r=e.recipeIngredients,n=e.recipeSteps,c=!0,l=!1,o=void 0;try{for(var p,d=t[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){if(p.value.recipeTitle.toLowerCase()===a.toLowerCase())return alert("That recipe already exists");if(""===a)return alert("Enter a recipe name")}}catch(g){l=!0,o=g}finally{try{c||null==d.return||d.return()}finally{if(l)throw o}}var m={recipeTitle:a,recipeIngredients:r.split("/"),recipeSteps:n.split("/")},u=[].concat(Object(s.a)(t),[m]);localStorage.setItem("_bschade18_recipes",JSON.stringify(u)),i.setState({visibility:!1,recipes:u,currentRecipe:a,recipeTitle:"",recipeIngredients:"",recipeSteps:""})},i.handleEdit=function(){var e=i.state,t=e.recipes,a=e.currentRecipe,r=e.recipeTitle,n=e.recipeIngredients,c=e.recipeSteps,l=t.filter((function(e){return a!==e.recipeTitle})),o={recipeTitle:r,recipeIngredients:n.split("/"),recipeSteps:c.split("/")},p=[].concat(Object(s.a)(l),[o]);localStorage.setItem("_bschade18_recipes",JSON.stringify(p)),i.setState({recipes:p,visibility:!1,recipeTitle:"",recipeIngredients:"",recipeSteps:""})},i.handleDelete=function(){for(var e,t=i.state,a=t.recipes,r=t.currentRecipe,n=0;n<a.length;n++)a[n].recipeTitle===r&&(e=n);var c=window.confirm("Are you sure you want to delete this recipe?"),l=a.filter((function(e){return e.recipeTitle!==i.state.currentRecipe}));e=0===e?1:e-1,!0===c&&(0===a.length&&(localStorage.setItem("_bschade18_recipes",JSON.stringify(l)),i.setState({currentRecipe:""})),localStorage.setItem("_bschade18_recipes",JSON.stringify(l)),i.setState({recipes:l,currentRecipe:a[e].recipeTitle}))},i.onChange=function(e){var t=e.target,a=t.name,r=t.value;i.setState(Object(l.a)({},a,r))},i.fillForm=function(){var e=i.state.recipes.filter((function(e){return e.recipeTitle===i.state.currentRecipe}));i.setState({recipeTitle:e[0].recipeTitle,recipeIngredients:e[0].recipeIngredients.join(" / "),recipeSteps:e[0].recipeSteps.join(" / ")})},i.handleFormType=function(e){"edit"===e.target.id?(i.setState({dialogMode:"edit",visibility:!0}),i.fillForm()):i.setState({dialogMode:"add",visibility:!0})},i.toggleVisibility=function(){i.setState({visibility:!i.state.visibility,recipeTitle:"",recipeIngredients:"",recipeSteps:""})},i.setCurrent=function(e){i.setState({currentRecipe:e.target.innerText})},i.state={recipes:JSON.parse(localStorage.getItem("_bschade18_recipes")),currentRecipe:"",recipeTitle:"",recipeIngredients:"",recipeSteps:"",visibility:!1,dialogMode:""},i}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("_bschade18_recipes"));if(e.length>0){var t=e[0].recipeTitle;this.setState({currentRecipe:t})}}},{key:"render",value:function(){var e={display:"none",background:"rgba(0, 0, 0, 0.4)",position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1};return this.state.visibility&&(e={display:"block",background:"rgba(0, 0, 0, 0.5)",position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1}),r.a.createElement("div",{id:"App"},r.a.createElement("h1",{id:"title"},"My Recipes"),r.a.createElement(f,{recipes:this.state.recipes,recipeTitle:this.state.recipeTitle,recipeIngredients:this.state.recipeIngredients,recipeSteps:this.state.recipeSteps,currentRecipe:this.state.currentRecipe,addRecipe:this.addRecipe,editRecipe:this.handleEdit,toggleVisibility:this.toggleVisibility,visibility:this.state.visibility,dialogMode:this.state.dialogMode,onChange:this.onChange,handleEdit:this.handleEdit}),r.a.createElement(g,{recipes:this.state.recipes,setCurrent:this.setCurrent}),r.a.createElement(h,{recipes:this.state.recipes,currentRecipe:this.state.currentRecipe,handleDelete:this.handleDelete,handleForm:this.handleFormType}),r.a.createElement("div",{style:e}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.4a874894.chunk.js.map