import { CKEditor } from '@ckeditor/ckeditor5-react'
//@ts-ignore
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'bulletedList',
    'numberedList',
    '|',
    'outdent',
    'indent',
    //text align
    'alignment',
    '|',
    // 'imageUpload',
    'blockQuote',
    'insertTable',
    // 'mediaEmbed',
    'undo',
    'redo',
    'pageBreak',
  ]
};
export default function CkEditors(props: any) {
  return (
    <div>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={props.initialData}
        onChange={(event, editor: any) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  )
}
