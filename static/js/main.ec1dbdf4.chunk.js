(this["webpackJsonprecipe-collection"]=this["webpackJsonprecipe-collection"]||[]).push([[0],{10:function(e,t,i){e.exports=i(17)},15:function(e,t,i){},16:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(8),s=i.n(r),c=(i(15),i(9)),l=i(2),o=i(3),d=i(5),p=i(4),u=i(1),m=i(6);i(16);localStorage.getItem("_bschade18_recipes")||localStorage.setItem("_bschade18_recipes",JSON.stringify([{recipeTitle:"Cookies",ingredients:["Eggs","Flour","Cookie mix"],steps:["Mix eggs and flour in a bowl","Add cookie mix","Cook in oven for 12 minutes","Serve and enjoy :)"]}]));var h=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={visibility:!1,currentRecipe:"",recipes:JSON.parse(localStorage.getItem("_bschade18_recipes")),dialogMode:""},i.addRecipe=i.addRecipe.bind(Object(u.a)(i)),i.closeVisibility=i.closeVisibility.bind(Object(u.a)(i)),i.setCurrent=i.setCurrent.bind(Object(u.a)(i)),i.fillForm=i.fillForm.bind(Object(u.a)(i)),i.handleDelete=i.handleDelete.bind(Object(u.a)(i)),i.handleEdit=i.handleEdit.bind(Object(u.a)(i)),i.handleFormType=i.handleFormType.bind(Object(u.a)(i)),i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("_bschade18_recipes"),t=JSON.parse(e)[0].recipeTitle;this.setState({currentRecipe:t})}},{key:"fillForm",value:function(){for(var e,t=this.state.currentRecipe,i=this.state.recipes,a=0;a<i.length;a++)t===i[a].recipeTitle&&(e=i[a]);document.getElementById("edit-recipe").value=e.recipeTitle,document.getElementById("edit-ingredients").value=e.ingredients.join(" / "),document.getElementById("edit-steps").value=e.steps.join(" / ")}},{key:"handleEdit",value:function(e){var t=this,i=this.state.recipes,a=this.state.currentRecipe,n=i.filter((function(e){return a!==e.recipeTitle})).concat({recipeTitle:document.getElementById("edit-recipe").value,ingredients:document.getElementById("edit-ingredients").value.split("/"),steps:document.getElementById("edit-steps").value.split("/")});setTimeout((function(){localStorage.setItem("_bschade18_recipes",JSON.stringify(n)),t.setState({recipes:n,visibility:!1})}),50)}},{key:"handleFormType",value:function(e){var t=this;"edit"===e.target.id?(this.setState({dialogMode:"edit",visibility:!0}),setTimeout((function(){return t.fillForm()}),20)):this.setState({dialogMode:"add",visibility:!0})}},{key:"addRecipe",value:function(e){for(var t=this.state.recipes,i=[],a=0;a<t.length;a++)i.push(t[a].recipeTitle.toLowerCase());if(i.includes(document.getElementById("edit-recipe").value.toLowerCase()))alert("That recipe already exists");else if(""!==document.getElementById("edit-recipe").value.toLowerCase()){var n=t.concat({recipeTitle:document.getElementById("edit-recipe").value,ingredients:document.getElementById("edit-ingredients").value.split("/"),steps:document.getElementById("edit-steps").value.split("/")});localStorage.setItem("_bschade18_recipes",JSON.stringify(n)),this.setState({visibility:!1,recipes:n,currentRecipe:document.getElementById("edit-recipe").value,recipeInput:"",ingredInput:"",stepsInput:""})}else alert("Enter a recipe name")}},{key:"closeVisibility",value:function(){this.state.visibility?this.setState({visibility:!1}):this.setState({visibility:!0})}},{key:"setCurrent",value:function(e){this.setState({currentRecipe:e.target.innerHTML})}},{key:"handleDelete",value:function(){for(var e,t=this,i=this.state.recipes,a=this.state.currentRecipe,n=0;n<i.length;n++)i[n].recipeTitle===a&&(e=n-1);var r=window.confirm("Are you sure you want to delete this recipe?"),s=i.filter((function(e){return e.recipeTitle!==a}));!0===r&&(e<0?(localStorage.setItem("_bschade18_recipes",JSON.stringify(s)),setTimeout((function(){t.setState({recipes:s,currentRecipe:i[1].recipeTitle})}),20)):(localStorage.setItem("_bschade18_recipes",JSON.stringify(s)),setTimeout((function(){t.setState({recipes:s,currentRecipe:i[e].recipeTitle})}),20)))}},{key:"render",value:function(){var e="add"===this.state.dialogMode?["Add Recipe","Add"]:["Edit Recipe","Save"],t="add"===this.state.dialogMode?["add"]:["edit"],i="add"===this.state.dialogMode?this.addRecipe:this.handleEdit;return n.a.createElement("div",null,n.a.createElement("h1",{id:"title"},"My Recipes"),n.a.createElement(g,{recipes:this.state.recipes,setCurrent:this.setCurrent}),n.a.createElement(v,{toggleVisibility:this.toggleVisibility,currentRecipe:this.state.currentRecipe,recipes:this.state.recipes,handleDelete:this.handleDelete,handleForm:this.handleFormType}),n.a.createElement(b,{addRecipe:this.addRecipe,closeVisibility:this.closeVisibility,currentRecipe:this.state.currentRecipe,dialogMode:this.state.dialogMode,editRecipe:this.handleEdit,formText:e,formID:t,formFunctions:i,visibility:this.state.visibility,recipes:this.state.recipes}))}}]),t}(n.a.Component),g=function(e){var t=e.recipes.map((function(t,i){return n.a.createElement("div",{id:"recipe-title",key:i,onClick:e.setCurrent},t.recipeTitle)}));return n.a.createElement("div",{id:"recipe-list"},t)},v=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e,t=this.props.recipes,i=this.props.currentRecipe,a=0;a<t.length;a++)i===t[a].recipeTitle&&(e=n.a.createElement("div",{className:"recipeBox"},n.a.createElement("div",{className:"recipeDisplay"},n.a.createElement("div",{id:"show-recipe-title",className:"recipe-display-pane"},i),n.a.createElement("div",{className:"recipe-display-pane"},n.a.createElement("i",Object(c.a)({id:"edit",className:"",onClick:this.props.handleForm},"className","fas fa-edit")),n.a.createElement("i",{onClick:this.props.handleDelete,className:"fas fa-trash"}),n.a.createElement("i",{id:"add-btn",onClick:this.props.handleForm,className:"fas fa-plus"}))),n.a.createElement("p",{className:"ingredients-heading"},"Ingredients:"),n.a.createElement("ul",{className:"show-ingredients"},t[a].ingredients.map((function(e,t){return n.a.createElement("li",{className:"list-ingredients",key:t},e)}))),n.a.createElement("p",{className:"directions-heading"},"Directions:"),n.a.createElement("ol",null,t[a].steps.map((function(e,t){return n.a.createElement("li",{className:"list-directions",key:t},e)})))));return n.a.createElement("div",null,e)}}]),t}(n.a.Component),b=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={},i}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.visibility?n.a.createElement("div",{id:"dialog"},n.a.createElement("div",null,n.a.createElement("div",{className:"input-title"},this.props.formText[0],n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-recipe",placeholder:"Recipe Name",type:"text",cols:"30",rows:"1"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Ingredients",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-ingredients",cols:"30",rows:"6",placeholder:'Separate each ingredient with a "/" :     Eggs / Flour / Cookie Mix',type:"text"}),n.a.createElement("br",null),n.a.createElement("div",{className:"input-title"},"Directions",n.a.createElement("br",null)),n.a.createElement("textarea",{id:"edit-steps",cols:"30",rows:"11",placeholder:'Seperate each direction with a "/" :        Mix eggs and flour in a bowl / Add cookie mix / Cook in oven ',type:"text"})),n.a.createElement("div",{className:"form-btns"},n.a.createElement("button",{onClick:this.props.formFunctions,id:this.props.formID[0]},this.props.formText[1]),n.a.createElement("button",{onClick:this.props.closeVisibility},"Close"))):n.a.createElement("div",null)}}]),t}(n.a.Component),f=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.ec1dbdf4.chunk.js.map