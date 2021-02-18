import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
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

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// todo 使用工具泛型Partial<> 将类型的所有属性转变为可选属性
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// todo 什么是泛型？
const Button: React.FC<ButtonProps> = props => {
  const { 
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // todo 动态class名是什么
  const classes = classNames('btn',className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if(btnType === 'link' && href){
    return(
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return(
      <button className={classes} disabled={disabled} {...restProps}>
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
