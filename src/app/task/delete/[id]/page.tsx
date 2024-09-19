import React from 'react'
import pageStyle from '@/styles/page.module.scss'
import DeleteTaskForm from '@/components/DeleteTaskForm';

type DeleteTaskProps = {
  params: {
    id: string;
  };
};

function page(props: DeleteTaskProps) {
  const { id } = props.params;
  return (
    <div className={pageStyle.page}>
      <DeleteTaskForm id={id}/>
    </div>
  )
}

export default page