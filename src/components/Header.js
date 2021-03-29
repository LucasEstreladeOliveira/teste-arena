import styled from "styled-components"

const StyledHeader = styled.div`

  background: #717CB470;
  border-radius: 10px;
  margin: 20px 50px;
  padding: 20px;

  .title {
    color: #A6ACCD;
    font-size: 30px;
    margin-bottom: 25px;
  }
  .image {
    margin-bottom: 25px;
  }
  .image img {
    border-radius: 50%;
    border: 8px solid black;
    height: 150px;
  }

`

function Header() {
  return (
    <StyledHeader>
      <div className="title">
        Welcome to r/MK
      </div>
      <div className="image">
        <img alt="logoMk" src="https://b.thumbs.redditmedia.com/MRKGXjJgXi8FJz39snnnTe-WbjNymvKqq44g9grEFsk.png" />
      </div>
    </StyledHeader>
  )
}

export default Header;