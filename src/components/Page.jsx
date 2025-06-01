import { forwardRef } from 'react';
import PageIcon from "../icons/PageIcon";

const formatDescription = (desc) => {
  if (!desc) return null;
  
  // Dividir el texto en párrafos basados en los saltos de línea dobles
  const paragraphs = desc.split('\n\n');
  
  return paragraphs.map((paragraph, index) => {
    // Verificar si el párrafo comienza con alguna de las palabras clave
    let className = 'paragraph';
    if (paragraph.startsWith('Observación:')) className += ' observation';
    else if (paragraph.startsWith('Reflexión:')) className += ' reflection';
    else if (paragraph.startsWith('Plan de acción:')) className += ' action-plan';
    
    return (
      <p key={index} className={className}>
        {paragraph}
      </p>
    );
  });
};

const Page = forwardRef(({ number, img, desc, title }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        {title && <h1 className="story-title">{title}</h1>}
        <div className="page-image">{img}</div>
        <div className="page-text">
          {formatDescription(desc)}
        </div>
      </div>
      <div className="page-footer">
        <PageIcon />
        <p className="page-order">{number}</p>
      </div>
    </div>
  );
});

export default Page;