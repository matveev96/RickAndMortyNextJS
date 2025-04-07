import { PropsWithChildren } from "react";
import s from './Card.module.css'


type PropsType = {
  name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
  const { children, name } = props;

  return (
    <div className={s.cardBlock}>
      <p className={s.name}>{name}</p>
      {children}
    </div>
  );
};
