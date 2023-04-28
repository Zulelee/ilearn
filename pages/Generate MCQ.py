import streamlit as st
import os
from langchain.llms import OpenAI

# Set the title of the page
st.set_page_config(
    page_title="MCQ Generator",
)

os.environ["OPENAI_API_KEY"] = "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"

st.markdown("<h1 align='center'>MCQ Generator</h1>", unsafe_allow_html=True)
st.markdown("<hr>", unsafe_allow_html=True)
llm = OpenAI(temperature=0.9, verbose= True, model_name='text-davinci-003')

text = "What would be a good company name for a company that makes colorful socks?"
print(llm(text))

# topic = st.text_input("Enter anything")
#
# if topic:
#     # text = "Generate 5 MCQs on the topic {topic}"
#     response = llm(topic)
#     st.text(response)
#
#
#
