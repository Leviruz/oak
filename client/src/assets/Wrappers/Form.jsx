import styled from 'styled-components'

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;

  label {
    margin-bottom: 10px;
  }
  input {
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  select {
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 8px;
}
  
`;
export default Wrapper