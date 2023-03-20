import { marked } from 'marked';

function Preview({value}) {

    return (
        <div className='preview-wrapper'>
            <h3 className='preview-title'>PREVIEW</h3>


            <div id='preview' dangerouslySetInnerHTML={{__html: marked.parse(value)}}/>
            
        
        </div>
    )

}
export default Preview;
  