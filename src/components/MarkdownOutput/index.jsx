import { createRef } from 'react'
import styles from './MarkdownOutput.module.css'

import { marked } from 'marked'
import DOMPurify from 'dompurify';

const outputAreaRef = createRef();

const MarkdownOutput = props => {
    const html = marked.parse(props.children);
    setTimeout(() => {
        outputAreaRef.current.innerHTML = DOMPurify.sanitize(html)
    });
    return (
        <div className={styles.outputArea} ref={outputAreaRef}></div>
    )
}

export default MarkdownOutput