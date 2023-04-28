import streamlit as st
import plotly.graph_objects as go

# Set the title of the page
st.set_page_config(
    page_title="Plagiarism",
)

st.markdown("<h1 align='center'>Plagiarism Checker</h1>", unsafe_allow_html=True)
st.markdown("<hr>", unsafe_allow_html=True)

# Create two columns with st.beta_columns()
col1, col2 = st.columns(2)

# Add content to the left column
with col1:
    st.write(
        "Welcome to our plagiarism checker page, where you can ensure the originality of your written work. Our tool uses advanced algorithms to scan your document and provide you with a comprehensive report highlighting any potential instances of plagiarism. You can easily identify problematic areas and make the necessary changes to ensure your work is 100% original. Whether you are a student, researcher, or writer, our fast and accurate plagiarism checker is the perfect solution to ensure the integrity of your work. Try it out today!")

# Add content to the right column
with col2:
    text = st.text_area("Enter Text Here")
    file = st.file_uploader("Upload File")
    button_clicked = st.button("Get Plagiarism Report")

if button_clicked:
    if len(text) != 0 or file is not None:
        if file is not None:
            file_contents = file.read()
            st.write(file_contents)

        st.markdown("<hr>", unsafe_allow_html=True)
        st.markdown("<h2 align='center'>Plagiarism Report</h2>", unsafe_allow_html=True)
        similarity = 0.5

        fig = go.Figure(go.Indicator(
            mode="gauge+number",
            value=int(similarity * 100),
            domain={'x': [0, 1], 'y': [0, 1]},

            gauge={'axis': {'range': [None, 100]},
                   'bar': {'color': "black"},
                   'bgcolor': "white",
                   'steps': [
                       {'range': [0, 25], 'color': "lightgreen"},
                       {'range': [25, 50], 'color': "green"},
                       {'range': [50, 75], 'color': "orange"},
                       {'range': [75, 100], 'color': "red"}]}))

        st.plotly_chart(fig, theme="streamlit", use_container_width=True)

    else:
        st.error("Please paste some text or upload a file!")