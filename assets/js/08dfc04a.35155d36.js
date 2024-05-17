"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5802],{11401:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,quartoRawHtml:()=>g,toc:()=>d});var o=t(85893),s=t(11151);const i={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_logging.ipynb",description:"Provide capabilities of runtime logging for debugging and performance analysis.",source_notebook:"/notebook/agentchat_logging.ipynb",tags:["logging","debugging"],title:"Runtime Logging with AutoGen"},a="Runtime Logging with AutoGen",r={id:"notebooks/agentchat_logging",title:"Runtime Logging with AutoGen",description:"Provide capabilities of runtime logging for debugging and performance analysis.",source:"@site/docs/notebooks/agentchat_logging.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_logging",permalink:"/autogen/docs/notebooks/agentchat_logging",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_logging.ipynb",tags:[{label:"logging",permalink:"/autogen/docs/tags/logging"},{label:"debugging",permalink:"/autogen/docs/tags/debugging"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_logging.ipynb",description:"Provide capabilities of runtime logging for debugging and performance analysis.",source_notebook:"/notebook/agentchat_logging.ipynb",tags:["logging","debugging"],title:"Runtime Logging with AutoGen"},sidebar:"notebooksSidebar",previous:{title:"Engaging with Multimodal Models: GPT-4V in AutoGen",permalink:"/autogen/docs/notebooks/agentchat_lmm_gpt-4v"},next:{title:"Solving Multiple Tasks in a Sequence of Async Chats",permalink:"/autogen/docs/notebooks/agentchat_multi_task_async_chats"}},l={},d=[{value:"Getting Data from the SQLite Database",id:"getting-data-from-the-sqlite-database",level:2},{value:"Computing Cost",id:"computing-cost",level:2},{value:"Log data in File mode",id:"log-data-in-file-mode",level:2}],g=["<div>\n<style scoped>\n    .dataframe tbody tr th:only-of-type {\n        vertical-align: middle;\n    }\n    .dataframe tbody tr th {\n        vertical-align: top;\n    }\n    .dataframe thead th {\n        text-align: right;\n    }\n</style>\n","\n</div>"];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"runtime-logging-with-autogen",children:"Runtime Logging with AutoGen"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_logging.ipynb",children:(0,o.jsx)(e.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(e.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_logging.ipynb",children:(0,o.jsx)(e.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n","\n",(0,o.jsx)(e.p,{children:"AutoGen offers utilities to log data for debugging and performance\nanalysis. This notebook demonstrates how to use them."}),"\n",(0,o.jsx)(e.p,{children:"we log data in different modes: - SQlite Database - File"}),"\n",(0,o.jsxs)(e.p,{children:["In general, users can initiate logging by calling\n",(0,o.jsx)(e.code,{children:"autogen.runtime_logging.start()"})," and stop logging by calling\n",(0,o.jsx)(e.code,{children:"autogen.runtime_logging.stop()"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'import json\n\nimport pandas as pd\n\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n\n# Setup API key. Add your own API key to config file or environment variable\nllm_config = {\n    "config_list": autogen.config_list_from_json(\n        env_or_file="OAI_CONFIG_LIST",\n    ),\n    "temperature": 0.9,\n}\n\n# Start logging\nlogging_session_id = autogen.runtime_logging.start(config={"dbname": "logs.db"})\nprint("Logging session ID: " + str(logging_session_id))\n\n# Create an agent workflow and run it\nassistant = AssistantAgent(name="assistant", llm_config=llm_config)\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config=False,\n    human_input_mode="NEVER",\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n)\n\nuser_proxy.initiate_chat(\n    assistant, message="What is the height of the Eiffel Tower? Only respond with the answer and terminate"\n)\nautogen.runtime_logging.stop()\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"Logging session ID: 6e08f3e0-392b-434e-8b69-4ab36c4fcf99\nuser_proxy (to assistant):\n\nWhat is the height of the Eiffel Tower? Only respond with the answer and terminate\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nThe height of the Eiffel Tower is approximately 330 meters.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(e.h2,{id:"getting-data-from-the-sqlite-database",children:"Getting Data from the SQLite Database"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"logs.db"})," should be generated, by default it\u2019s using SQLite database.\nYou can view the data with GUI tool like ",(0,o.jsx)(e.code,{children:"sqlitebrowser"}),", using SQLite\ncommand line shell or using python script:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'def get_log(dbname="logs.db", table="chat_completions"):\n    import sqlite3\n\n    con = sqlite3.connect(dbname)\n    query = f"SELECT * from {table}"\n    cursor = con.execute(query)\n    rows = cursor.fetchall()\n    column_names = [description[0] for description in cursor.description]\n    data = [dict(zip(column_names, row)) for row in rows]\n    con.close()\n    return data\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'def str_to_dict(s):\n    return json.loads(s)\n\n\nlog_data = get_log()\nlog_data_df = pd.DataFrame(log_data)\n\nlog_data_df["total_tokens"] = log_data_df.apply(\n    lambda row: str_to_dict(row["response"])["usage"]["total_tokens"], axis=1\n)\n\nlog_data_df["request"] = log_data_df.apply(lambda row: str_to_dict(row["request"])["messages"][0]["content"], axis=1)\n\nlog_data_df["response"] = log_data_df.apply(\n    lambda row: str_to_dict(row["response"])["choices"][0]["message"]["content"], axis=1\n)\n\nlog_data_df\n'})}),"\n",(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:g[0]}}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{}),(0,o.jsx)(e.th,{children:"id"}),(0,o.jsx)(e.th,{children:"invocation_id"}),(0,o.jsx)(e.th,{children:"client_id"}),(0,o.jsx)(e.th,{children:"wrapper_id"}),(0,o.jsx)(e.th,{children:"session_id"}),(0,o.jsx)(e.th,{children:"request"}),(0,o.jsx)(e.th,{children:"response"}),(0,o.jsx)(e.th,{children:"is_cached"}),(0,o.jsx)(e.th,{children:"cost"}),(0,o.jsx)(e.th,{children:"start_time"}),(0,o.jsx)(e.th,{children:"end_time"}),(0,o.jsx)(e.th,{children:"total_tokens"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"0"}),(0,o.jsx)(e.td,{children:"1"}),(0,o.jsx)(e.td,{children:"e8bb00d7-6da5-4407-a949-e19b55d53da8"}),(0,o.jsx)(e.td,{children:"139819167322784"}),(0,o.jsx)(e.td,{children:"139823225568704"}),(0,o.jsx)(e.td,{children:"8821a150-8c78-4d05-a858-8a64f1d18648"}),(0,o.jsx)(e.td,{children:"You are a helpful AI assistant.\\nSolve tasks u..."}),(0,o.jsx)(e.td,{children:"The height of the Eiffel Tower is approximatel..."}),(0,o.jsx)(e.td,{children:"1"}),(0,o.jsx)(e.td,{children:"0.01572"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:22.082896"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:22.083169"}),(0,o.jsx)(e.td,{children:"507"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"1"}),(0,o.jsx)(e.td,{children:"2"}),(0,o.jsx)(e.td,{children:"c8522790-0067-484b-bb37-d39ae80db98b"}),(0,o.jsx)(e.td,{children:"139823225568656"}),(0,o.jsx)(e.td,{children:"139823225563040"}),(0,o.jsx)(e.td,{children:"fb0ef547-a2ac-428b-8c20-a5e63263b8e1"}),(0,o.jsx)(e.td,{children:"You are a helpful AI assistant.\\nSolve tasks u..."}),(0,o.jsx)(e.td,{children:"The height of the Eiffel Tower is approximatel..."}),(0,o.jsx)(e.td,{children:"1"}),(0,o.jsx)(e.td,{children:"0.01572"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:23.498758"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:23.499045"}),(0,o.jsx)(e.td,{children:"507"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"2"}),(0,o.jsx)(e.td,{children:"3"}),(0,o.jsx)(e.td,{children:"91c3f6c0-c6f7-4306-89cd-f304c9556de4"}),(0,o.jsx)(e.td,{children:"139823225449024"}),(0,o.jsx)(e.td,{children:"139819166072448"}),(0,o.jsx)(e.td,{children:"6e08f3e0-392b-434e-8b69-4ab36c4fcf99"}),(0,o.jsx)(e.td,{children:"You are a helpful AI assistant.\\nSolve tasks u..."}),(0,o.jsx)(e.td,{children:"The height of the Eiffel Tower is approximatel..."}),(0,o.jsx)(e.td,{children:"1"}),(0,o.jsx)(e.td,{children:"0.01572"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:24.688990"}),(0,o.jsx)(e.td,{children:"2024-02-13 15:06:24.689238"}),(0,o.jsx)(e.td,{children:"507"})]})]})]}),"\n",(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:g[1]}}),"\n",(0,o.jsx)(e.h2,{id:"computing-cost",children:"Computing Cost"}),"\n",(0,o.jsx)(e.p,{children:"One use case of logging data is to compute the cost of a session."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'# Sum totoal tokens for all sessions\ntotal_tokens = log_data_df["total_tokens"].sum()\n\n# Sum total cost for all sessions\ntotal_cost = log_data_df["cost"].sum()\n\n# Total tokens for specific session\nsession_tokens = log_data_df[log_data_df["session_id"] == logging_session_id]["total_tokens"].sum()\nsession_cost = log_data_df[log_data_df["session_id"] == logging_session_id]["cost"].sum()\n\nprint("Total tokens for all sessions: " + str(total_tokens) + ", total cost: " + str(round(total_cost, 4)))\nprint(\n    "Total tokens for session "\n    + str(logging_session_id)\n    + ": "\n    + str(session_tokens)\n    + ", cost: "\n    + str(round(session_cost, 4))\n)\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"Total tokens for all sessions: 1521, total cost: 0.0472\nTotal tokens for session 6e08f3e0-392b-434e-8b69-4ab36c4fcf99: 507, cost: 0.0157\n"})}),"\n",(0,o.jsx)(e.h2,{id:"log-data-in-file-mode",children:"Log data in File mode"}),"\n",(0,o.jsxs)(e.p,{children:["By default, the log type is set to ",(0,o.jsx)(e.code,{children:"sqlite"})," as shown above, but we\nintroduced a new parameter for the ",(0,o.jsx)(e.code,{children:"autogen.runtime_logging.start()"})]}),"\n",(0,o.jsxs)(e.p,{children:["the ",(0,o.jsx)(e.code,{children:'logger_type = "file"'})," will start to log data in the File mode."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-python",children:'\nimport pandas as pd\n\nimport autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n\n# Setup API key. Add your own API key to config file or environment variable\nllm_config = {\n    "config_list": autogen.config_list_from_json(\n        env_or_file="OAI_CONFIG_LIST",\n    ),\n    "temperature": 0.9,\n}\n\n# Start logging with logger_type and the filename to log to\nlogging_session_id = autogen.runtime_logging.start(logger_type="file", config={"filename": "runtime.log"})\nprint("Logging session ID: " + str(logging_session_id))\n\n# Create an agent workflow and run it\nassistant = AssistantAgent(name="assistant", llm_config=llm_config)\nuser_proxy = UserProxyAgent(\n    name="user_proxy",\n    code_execution_config=False,\n    human_input_mode="NEVER",\n    is_termination_msg=lambda msg: "TERMINATE" in msg["content"],\n)\n\nuser_proxy.initiate_chat(\n    assistant, message="What is the height of the Eiffel Tower? Only respond with the answer and terminate"\n)\nautogen.runtime_logging.stop()\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"Logging session ID: ed493ebf-d78e-49f0-b832-69557276d557\nuser_proxy (to assistant):\n\nWhat is the height of the Eiffel Tower? Only respond with the answer and terminate\n\n--------------------------------------------------------------------------------\nassistant (to user_proxy):\n\nThe height of the Eiffel Tower is 330 meters.\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsxs)(e.p,{children:["This should create a ",(0,o.jsx)(e.code,{children:"runtime.log"})," file in your current directory."]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);