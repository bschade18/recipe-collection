(this["webpackJsonprecipe-collection"]=this["webpackJsonprecipe-collection"]||[]).push([[0],{10:function(e,t,i){e.exports=i(17)},15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),l=i(8),r=i.n(l),s=(i(15),i(9)),c=i(2),o=i(3),d=i(5),p=i(4),u=i(1),m=i(6);i(16);if(null===localStorage.getItem){localStorage.setItem("_bschade18_recipes",JSON.stringify([{recipeTitle:"Cookies",ingredients:["Eggs","Flour","Cookie mix"],steps:["Mix eggs and flour in a bowl","Add cookie mix","Cook in oven for 12 minutes","Serve and enjoy :)"]}]))}var h=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={visibility:!1,currentRecipe:"",recipes:JSON.parse(localStorage.getItem("_bschade18_recipes")),dialogMode:""},i.toggleVisibility=i.toggleVisibility.bind(Object(u.a)(i)),i.closeVisibility=i.closeVisibility.bind(Object(u.a)(i)),i.setCurrent=i.setCurrent.bind(Object(u.a)(i)),i.fillForm=i.fillForm.bind(Object(u.a)(i)),i.handleDelete=i.handleDelete.bind(Object(u.a)(i)),i.handleEdit=i.handleEdit.bind(Object(u.a)(i)),i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("_bschade18_recipes"),t=JSON.parse(e)[0].recipeTitle;this.setState({currentRecipe:t})}},{key:"fillForm",value:function(){for(var e,t=this.state.currentRecipe,i=this.state.recipes,a=0;a<i.length;a++)t==i[a].recipeTitle&&(e=i[a]);document.getElementById("edit-recipe").value=e.recipeTitle,document.getElementById("edit-ingredients").value=e.ingredients,document.getElementById("edit-steps").value=e.steps}},{key:"handleEdit",value:function(e){var t=this,i=this.state.recipes,a=this.state.currentRecipe,n=i.filter((function(e){return a!==e.recipeTitle}));e.preventDefault();var l=n.concat({recipeTitle:document.getElementById("edit-recipe").value.split("/"),ingredients:document.getElementById("edit-ingredients").value.split("/"),steps:document.getElementById("edit-steps").value.split("/")});setTimeout((function(){localStorage.setItem("_bschade18_recipes",JSON.stringify(l)),t.setState({recipes:l,visibility:!1}),t.toggleVisibility()}),50)}},{key:"toggleVisibility",value:function(e){var t=this,i=this.state.recipes;if("edit"==e.target.id?(this.setState({dialogMode:"edit"}),setTimeout((function(){return t.fillForm()}),20)):this.setState({dialogMode:"add"}),this.state.visibility){var a=i.concat({recipeTitle:document.getElementById("edit-recipe").value,ingredients:document.getElementById("edit-ingredients").value.split("/"),steps:document.getElementById("edit-steps").value.split("/")});localStorage.setItem("_bschade18_recipes",JSON.stringify(a)),this.setState({visibility:!1,recipes:a,currentRecipe:document.getElementById("edit-recipe").value,recipeInput:"",ingredInput:"",stepsInput:""})}else this.setState({visibility:!0})}},{key:"closeVisibility",value:function(){this.state.visibility?this.setState({visibility:!1}):this.setState({visibility:!0})}},{key:"setCurrent",value:function(e){this.setState({currentRecipe:e.target.innerHTML})}},{key:"handleDelete",value:function(){for(var e,t=this,i=this.state.recipes,a=this.state.currentRecipe,n=0;n<i.length;n++)i[n].recipeTitle==a&&(e=n-1);var l=window.confirm("Are you sure you want to delete this recipe?"),r=i.filter((function(e){return e.recipeTitle!==a}));1==l&&(localStorage.setItem("_bschade18_recipes",JSON.stringify(r)),setTimeout((function(){t.setState({recipes:r,currentRecipe:i[e].recipeTitle})}),20))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{id:"title"},"My Recipes"),n.a.createElement(g,{recipes:this.state.recipes,setCurrent:this.setCurrent}),n.a.createElement(b,{toggleVisibility:this.toggleVisibility,currentRecipe:this.state.currentRecipe,recipes:this.state.recipes,handleDelete:this.handleDelete}),n.a.createElement(v,{toggleVisibility:this.toggleVisibility,closeVisibility:this.closeVisibility,visibility:this.state.visibility,dialogMode:this.state.dialogMode,currentRecipe:this.state.currentRecipe,recipes:this.state.recipes,editRecipe:this.handleEdit}))}}]),t}(n.a.Component),g=function(e){function t(e){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.recipes.map((function(t,i){return n.a.createElement("div",{id:"recipe-title",key:i,onClick:e.props.setCurrent},t.recipeTitle)}));return n.a.createElement("div",{id:"recipe-list"},t)}}]),t}(n.a.Component),b=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.props.recipes,i=this.props.currentRecipe,a=t[0].steps;console.log(typeof a);for(var l=0;l<t.length;l++)i==t[l].recipeTitle&&(e=n.a.createElement("div",{className:"recipeBox"},n.a.createElement("div",{className:"recipeDisplay"},n.a.createElement("div",{id:"show-recipe-title",className:"recipe-display-pane"},i),n.a.createElement("div",{className:"recipe-display-pane"},n.a.createElement("i",Object(s.a)({id:"edit",className:"",onClick:this.props.toggleVisibility},"className","fas fa-edit")),n.a.createElement("i",{onClick:this.props.handleDelete,className:"fas fa-trash"}))),n.a.createElement("p",{className:"ingredients-heading"},"Ingredients:"),n.a.createElement("ul",{className:"show-ingredients"},t[l].ingredients.map((function(e,t){return n.a.createElement("li",{className:"list-ingredients",key:t},e)}))),n.a.createElement("p",{className:"directions-heading"},"Directions:"),n.a.createElement("ol",null,t[l].steps.map((function(e,t){return n.a.createElement("li",{className:"list-directions",key:t},e)}))),n.a.createElement("i",{onClick:this.props.toggleVisibility,className:"fas fa-plus"})));return n.a.createElement("div",null,e)}}]),t}(n.a.Component),v=function(e){function t(e){var i;return Object(c.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.visibility?n.a.createElement("div",{id:"dialog"},n.a.createElement("form",null,"edit"==this.props.dialogMode?n.a.createElement("div",null,n.a.createElement("div",{className:"input-title"},"Edit Recipe",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-recipe",placeholder:"Recipe Name",type:"text"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Ingredients",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-ingredients",rows:"5",placeholder:'Separate each ingredient with a "/"',type:"text"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Steps",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-steps",rows:"10",placeholder:'Seperate each direction with a "/" ',type:"text"}),n.a.createElement("br",null)):n.a.createElement("div",null,n.a.createElement("div",{className:"input-title"},"Add Recipe",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-recipe",placeholder:"Recipe Name",type:"text"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Ingredients",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-ingredients",rows:"5",placeholder:'Separate each ingredient with a "/"',type:"text"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Steps",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-steps",rows:"10",placeholder:'Seperate each direction with a "/"',type:"text"}),n.a.createElement("br",null)),"edit"==this.props.dialogMode?n.a.createElement("button",{onClick:this.props.editRecipe},"Save"):n.a.createElement("button",{onClick:this.props.toggleVisibility},"Add"),n.a.createElement("button",{onClick:this.props.closeVisibility},"Close"))):n.a.createElement("div",null)}}]),t}(n.a.Component),y=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.53196f74.chunk.js.map