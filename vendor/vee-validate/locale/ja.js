!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__vee_validate_locale__ja=n.__vee_validate_locale__ja||{},n.__vee_validate_locale__ja.js=e())}(this,function(){"use strict";var n,e={name:"ja",messages:{after:function(n,e){return n+"は"+e[0]+"の後でなければなりません"},alpha_dash:function(n){return n+"は英数字とハイフン、アンダースコアのみ使用できます"},alpha_num:function(n){return n+"は英数字のみ使用できます"},alpha_spaces:function(n){return n+"はアルファベットと空白のみ使用できます"},alpha:function(n){return n+"はアルファベットのみ使用できます"},before:function(n,e){return n+"は"+e[0]+"よりも前でなければなりません"},between:function(n,e){return n+"は"+e[0]+"から"+e[1]+"の間でなければなりません"},confirmed:function(n){return n+"が一致しません"},credit_card:function(n){return n+"が正しくありません"},date_between:function(n,e){return n+"は"+e[0]+"から"+e[1]+"の間でなければなりません"},date_format:function(n,e){return n+"は"+e[0]+"形式でなけれななりません"},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),n+"は整数及び小数点以下"+("*"===t?"":t)+"桁までの数字にしてください"},digits:function(n,e){return n+"は"+e[0]+"桁の数字でなければなりません"},dimensions:function(n,e){return n+"は幅"+e[0]+"px、高さ"+e[1]+"px以内でなければなりません"},email:function(n){return n+"は有効なメールアドレスではありません"},ext:function(n){return n+"は有効なファイル形式ではありません"},image:function(n){return n+"は有効な画像形式ではありません"},in:function(n){return n+"は有効な値ではありません"},ip:function(n){return n+"は有効なIPアドレスではありません"},max:function(n,e){return n+"は"+e[0]+"文字以内にしてください"},max_value:function(n,e){return n+"は"+e[0]+"以下でなければなりません"},mimes:function(n){return n+"は有効なファイル形式ではありません"},min:function(n,e){return n+"は"+e[0]+"文字以上でなければなりません"},min_value:function(n,e){return n+"は"+e[0]+"以上でなければなりません"},not_in:function(n){return n+"は不正な値です"},numeric:function(n){return n+"は数字のみ使用できます"},regex:function(n){return n+"が正しくありません"},required:function(n){return n+"は必須項目です"},size:function(n,e){var t,r,u,i=e[0];return n+"は"+(t=i,r=1024,u=0==(t=Number(t)*r)?0:Math.floor(Math.log(t)/Math.log(r)),1*(t/Math.pow(r,u)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][u])+"以内でなければなりません"},url:function(n){return n+"が正しくありません"}},attributes:{}};"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[e.name]=e,n));return e});