<template>
<section class="model-1">
<div class="checkbox">
  <input type="checkbox"/>
    <label></label>
</div>
</section>
</template>
<style scoped>
.checkbox {
position: relative;
display: inline-block;
}
.checkbox:after, .checkbox:before {
-webkit-font-feature-settings: normal;
 -moz-font-feature-settings: normal;
      font-feature-settings: normal;
-webkit-font-kerning: auto;
 -moz-font-kerning: auto;
      font-kerning: auto;
-webkit-font-language-override: normal;
 -moz-font-language-override: normal;
      font-language-override: normal;
font-stretch: normal;
font-style: normal;
font-synthesis: weight style;
font-variant: normal;
font-weight: normal;
text-rendering: auto;
}
.checkbox label {
width: 70px;
height: 28px;
background: #ccc;
position: relative;
display: inline-block;
border-radius: 30px;
-webkit-transition: 0.4s;
transition: 0.4s;
}
.checkbox label:after {
content: '';
position: absolute;
width: 30px;
height: 30px;
border-radius: 100%;
left: 0;
top: -1px;
z-index: 2;
background: #fff;
-webkit-transition: 0.4s;
transition: 0.4s;
}
.checkbox input {
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
z-index: 5;
opacity: 0;
cursor: pointer;
}
.checkbox input:hover + label:after {
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.15);
}
.checkbox input:checked + label:after {
left: 40px;
}

.model-1 .checkbox input:checked + label {
background: rgb(133,217,104);
}
.model-1 .checkbox input:checked + label:after {
background: white;
}

</style>
