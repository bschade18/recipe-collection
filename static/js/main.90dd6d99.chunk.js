(this["webpackJsonprecipe-collection"]=this["webpackJsonprecipe-collection"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(8),l=i.n(r),s=(i(14),i(2)),c=i(3),o=i(5),d=i(4),p=i(1),u=i(6);i(15);if(null===localStorage.getItem){localStorage.setItem("_bschade18_recipes",JSON.stringify([{recipeTitle:"cooks",ingredients:"food",steps:"steps"}]))}var m=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={visibility:!1,currentRecipe:"",recipes:JSON.parse(localStorage.getItem("_bschade18_recipes")),dialogMode:""},i.toggleVisibility=i.toggleVisibility.bind(Object(p.a)(i)),i.closeVisibility=i.closeVisibility.bind(Object(p.a)(i)),i.setCurrent=i.setCurrent.bind(Object(p.a)(i)),i.fillForm=i.fillForm.bind(Object(p.a)(i)),i.handleDelete=i.handleDelete.bind(Object(p.a)(i)),i.handleEdit=i.handleEdit.bind(Object(p.a)(i)),i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("_bschade18_recipes"),t=JSON.parse(e)[0].recipeTitle;this.setState({currentRecipe:t})}},{key:"fillForm",value:function(){for(var e,t=this.state.currentRecipe,i=this.state.recipes,n=0;n<i.length;n++)t==i[n].recipeTitle&&(e=i[n]);document.getElementById("edit-recipe").value=e.recipeTitle,document.getElementById("edit-ingredients").value=e.ingredients,document.getElementById("edit-steps").value=e.steps}},{key:"handleEdit",value:function(e){var t=this,i=this.state.recipes,n=this.state.currentRecipe,a=i.filter((function(e){return n!==e.recipeTitle}));e.preventDefault(),setTimeout((function(){t.setState({recipes:a.concat({recipeTitle:document.getElementById("edit-recipe").value,ingredients:document.getElementById("edit-ingredients").value,steps:document.getElementById("edit-steps").value}),visibility:!1}),t.toggleVisibility()}),50)}},{key:"toggleVisibility",value:function(e){var t=this,i=this.state.recipes;if("edit"==e.target.id?(this.setState({dialogMode:"edit"}),setTimeout((function(){return t.fillForm()}),20)):this.setState({dialogMode:"add"}),this.state.visibility){var n=i.concat({recipeTitle:document.getElementById("edit-recipe").value,ingredients:document.getElementById("edit-ingredients").value,steps:document.getElementById("edit-steps").value});localStorage.setItem("_bschade18_recipes",JSON.stringify(n)),this.setState({visibility:!1,recipes:n,currentRecipe:document.getElementById("edit-recipe").value,recipeInput:"",ingredInput:"",stepsInput:""})}else this.setState({visibility:!0})}},{key:"closeVisibility",value:function(){this.state.visibility?this.setState({visibility:!1}):this.setState({visibility:!0})}},{key:"setCurrent",value:function(e){this.setState({currentRecipe:e.target.innerHTML})}},{key:"handleDelete",value:function(){for(var e,t=this,i=this.state.recipes,n=this.state.currentRecipe,a=0;a<i.length;a++)i[a].recipeTitle==n&&(e=a-1);var r=window.confirm("Are you sure you want to delete this recipe?"),l=i.filter((function(e){return e.recipeTitle!==n}));1==r&&(localStorage.setItem("_bschade18_recipes",JSON.stringify(l)),setTimeout((function(){t.setState({recipes:l,currentRecipe:t.state.recipes[e].recipeTitle})}),20))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",{id:"title"},"My Recipes"),a.a.createElement(h,{recipes:this.state.recipes,setCurrent:this.setCurrent}),a.a.createElement(b,{toggleVisibility:this.toggleVisibility,currentRecipe:this.state.currentRecipe,recipes:this.state.recipes,handleDelete:this.handleDelete}),a.a.createElement(g,{toggleVisibility:this.toggleVisibility,closeVisibility:this.closeVisibility,visibility:this.state.visibility,dialogMode:this.state.dialogMode,currentRecipe:this.state.currentRecipe,recipes:this.state.recipes,editRecipe:this.handleEdit}))}}]),t}(a.a.Component),h=function(e){function t(e){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.recipes.map((function(t,i){return a.a.createElement("div",{id:"recipe-title",key:i,onClick:e.props.setCurrent},t.recipeTitle)}));return a.a.createElement("div",{id:"recipe-list"},t)}}]),t}(a.a.Component),b=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e,t=this.props.recipes,i=this.props.currentRecipe,n=0;n<t.length;n++)i==t[n].recipeTitle&&(e=a.a.createElement("div",{id:"recipeDisplay"},a.a.createElement("p",{id:"show-recipe-title"},i),a.a.createElement("p",null,"Ingredients:"),a.a.createElement("p",{id:"show-ingredients"},t[n].ingredients),a.a.createElement("p",null,"Steps:"),a.a.createElement("p",{id:"show-steps"},t[n].steps),a.a.createElement("button",{className:"",onClick:this.props.toggleVisibility},"Add Recipe"),a.a.createElement("button",{id:"edit",className:"",onClick:this.props.toggleVisibility},"Edit Recipe"),a.a.createElement("button",{className:"",onClick:this.props.handleDelete},"Delete Recipe")));return a.a.createElement("div",null,e)}}]),t}(a.a.Component),g=function(e){function t(e){var i;return Object(s.a)(this,t),(i=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={},i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.visibility?a.a.createElement("div",{id:"dialog"},a.a.createElement("form",null,"edit"==this.props.dialogMode?a.a.createElement("div",null,a.a.createElement("div",{className:"input-title"},"Edit Recipe",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-recipe",placeholder:"enter recipe name",type:"text"}),a.a.createElement("br",null),a.a.createElement("div",{className:"input-title"},"Ingredients",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-ingredients",rows:"5",placeholder:"enter ingredients",type:"text"}),a.a.createElement("br",null),a.a.createElement("div",{className:"input-title"},"Steps",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-steps",rows:"10",placeholder:"enter steps",type:"text"}),a.a.createElement("br",null)):a.a.createElement("div",null,a.a.createElement("div",{className:"input-title"},"Add Recipe",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-recipe",placeholder:"enter recipe name",type:"text"}),a.a.createElement("br",null),a.a.createElement("div",{className:"input-title"},"Ingredients",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-ingredients",rows:"5",placeholder:"enter ingredients",type:"text"}),a.a.createElement("br",null),a.a.createElement("div",{className:"input-title"},"Steps",a.a.createElement("br",null)),a.a.createElement("textarea",{id:"edit-steps",rows:"10",placeholder:"enter steps",type:"text"}),a.a.createElement("br",null)),"edit"==this.props.dialogMode?a.a.createElement("button",{onClick:this.props.editRecipe},"Save"):a.a.createElement("button",{onClick:this.props.toggleVisibility},"Add"),a.a.createElement("button",{onClick:this.props.closeVisibility},"Close"))):a.a.createElement("div",null)}}]),t}(a.a.Component),v=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,i){e.exports=i(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.90dd6d99.chunk.js.map