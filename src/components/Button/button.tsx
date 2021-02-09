import React from 'react'
import classNames from 'classnames'
import { type } from 'os'

// export type ButtonSize = 'lg' | 'sm'

// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Link = 'link',
//   Danger = 'danger'
// }
// todo 使用type 代替枚举
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// todo 什么是泛型？
const Button: React.FC<BaseButtonProps> = props => {
  const { 
    btnType,
    className,
    disabled,
    size,
    children,
    href
  } = props

  // todo 动态class名是什么
  const classes = classNames('btn',{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if(btnType === 'link' && href){
    return(
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return(
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;
