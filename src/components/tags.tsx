import { ContainerTag, TagOption } from "./stylesTag";

export function Tags(){
  return (
    <ContainerTag>
      <ul>
        <TagOption variant="green">Data Science</TagOption>
        <TagOption variant="red">Frontend</TagOption>
        <TagOption variant="blue">Designer</TagOption>
        <TagOption variant="yellow">Backend</TagOption>
      </ul>
    </ContainerTag>
  )
}