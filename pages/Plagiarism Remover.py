import streamlit as st

# Set the title of the page
st.set_page_config(
    page_title="Plagiarism",
)

st.markdown("<h1 align='center'>Plagiarism Remover</h1>", unsafe_allow_html=True)
st.markdown("<hr>", unsafe_allow_html=True)

# Create two columns with st.beta_columns()
col1, col2 = st.columns(2)

# Add content to the left column
with col1:
    st.write(
        "Welcome to our plagiarism remover webpage, where we are committed to helping you produce original and authentic content. Our advanced software uses cutting-edge technology to scan your text and identify any potential instances of plagiarism. With just a few clicks, you can have peace of mind knowing that your work is free from any copied material. Our platform is user-friendly and efficient, ensuring that you can submit your work with confidence. Say goodbye to the stress and hassle of plagiarism and try our plagiarism remover today!")

# Add content to the right column
with col2:
    text = st.text_area("Enter Text Here")
    file = st.file_uploader("Upload File")
    button_clicked = st.button("Remove Plagiarism Please!")

if button_clicked:
    if len(text) != 0 or file is not None:
        st.markdown("<hr>", unsafe_allow_html=True)
        st.markdown("<h2 align='center'>Plagiarism Free Work</h2>", unsafe_allow_html=True)

        if file is not None:
            file_contents = file.read()
            st.write(file_contents)
        elif len(text) != 0:
            st.write(text)
    else:
        st.error("Please paste some text or upload a file!")
