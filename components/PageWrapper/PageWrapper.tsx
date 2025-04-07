import { PropsWithChildren } from "react";
import s from './PageWrapper.module.css'


export const PageWrapper = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <div className={s.block}>{children}</div>
    </>
  );
};

