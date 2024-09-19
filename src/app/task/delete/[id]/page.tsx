import React from 'react'
import pageStyle from '@/styles/page.module.scss'
import style from '@/styles/delete.module.scss'
import DeleteButton from '@/components/ui/DeleteButton';
import CancelButton from '@/components/ui/CancelButton';

type DeleteTaskProps = {
  params: {
    id: string;
  };
};

function page(props: DeleteTaskProps) {
  const { id } = props.params;
  return (
    <div className={pageStyle.page}>
      <h1 className={style.newTaskTitle}>Deletar Tarefa</h1>
      <p className={style.textConfirmationDelete}>
        Tem certeza que você deseja deletar essa tarefa?
      </p>
      <div className={style.buttonWrapper}>
        <DeleteButton taskId={id} />
        <CancelButton />
      </div>
    </div>
  )
}

export default page