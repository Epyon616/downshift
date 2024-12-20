import ReactHtmlParser from 'react-html-parser';

type ContentBlockType = {
  content: string
}

const ContentBlock = ({ content }: ContentBlockType) => (
  <>
   {ReactHtmlParser(content)}
  </>
);

export default ContentBlock;