import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as e,d as r}from"./app.7f175228.js";const a={},i=r('<h1 id="_1-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> 1. \u6570\u636E\u5E93\u8BBE\u8BA1</h1><blockquote><p>(tableName=EXSIM_db)</p></blockquote><h2 id="_1-1-user" tabindex="-1"><a class="header-anchor" href="#_1-1-user" aria-hidden="true">#</a> 1.1 user</h2><table><thead><tr><th>column</th><th>type</th><th>properties</th><th>comment</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>not nulauto__increment</td><td></td></tr><tr><td>username</td><td>varchar(100)</td><td>not null</td><td></td></tr><tr><td>password</td><td>varchar(100)</td><td>default null</td><td></td></tr><tr><td>email</td><td>varchar(100)</td><td>not null</td><td>distinct,login needed</td></tr><tr><td>status</td><td>tinyint(1)</td><td>default 0</td><td>0 is frozen,1 is activated</td></tr></tbody></table><h2 id="_1-2-file" tabindex="-1"><a class="header-anchor" href="#_1-2-file" aria-hidden="true">#</a> 1.2 file</h2><table><thead><tr><th>column</th><th>type</th><th>properties</th><th>comment</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>not null auto_ increment</td><td></td></tr><tr><td>file_name</td><td>varchar(100)</td><td>not null</td><td></td></tr><tr><td>file_path</td><td>varchar(200)</td><td>not null</td><td></td></tr><tr><td>created_time</td><td>datetime</td><td>not null</td><td></td></tr><tr><td>last_modify_time</td><td>datetime</td><td>not null</td><td></td></tr><tr><td>last_modify_user_id</td><td>bigint</td><td>not null</td><td></td></tr><tr><td>create_author_id</td><td>bigint</td><td>not null</td><td></td></tr><tr><td>description</td><td>varchar(200)</td><td>default null</td><td></td></tr><tr><td>property</td><td>tinyint(1)</td><td>default 0</td><td>0 is private,1 is public</td></tr></tbody></table><h2 id="_1-3-file-permission" tabindex="-1"><a class="header-anchor" href="#_1-3-file-permission" aria-hidden="true">#</a> 1.3 file_permission</h2><table><thead><tr><th>column</th><th>type</th><th>properties</th><th>comment</th></tr></thead><tbody><tr><td>id</td><td>bigint</td><td>not null auto __increment</td><td></td></tr><tr><td>user_id</td><td>bigint</td><td>not null</td><td></td></tr><tr><td>file_id</td><td>bigint</td><td>not null</td><td></td></tr><tr><td>permission</td><td>tinyint(1)</td><td>default 0</td><td>0 is read only,1 is write and read</td></tr></tbody></table>',8),n=[i];function l(o,h){return d(),e("div",null,n)}const u=t(a,[["render",l],["__file","database.html.vue"]]);export{u as default};
