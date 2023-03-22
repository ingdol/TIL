import { forwardRef } from 'react'

export const TextInput = forwardRef(
  (
    {
      id,
      onFocus,
      onChange,
      onKeyUp,
      onKeyDown,
      className,
      readOnly,
      value,
      placeholder,
      isPasswordType,
      maxLength,
      width,
      height,
      pattern,
      defaultValue,
    },
    ref
  ) => (
    <input
      spellCheck={false}
      ref={ref}
      id={id}
      onFocus={(e) => onFocus && onFocus(e)}
      onChange={(e) => onChange && onChange(e)}
      onKeyUp={(e) => onKeyUp && onKeyUp(e)}
      onKeyDown={(e) => onKeyDown && onKeyDown(e)}
      readOnly={readOnly}
      value={value}
      defaultValue={defaultValue}
      className={`text-input ${className ? className : ''}`}
      type={isPasswordType ? 'password' : 'text'}
      placeholder={placeholder}
      maxLength={maxLength}
      pattern={pattern && pattern}
      style={{ width: width && `${width}px`, height: height && `${height}px` }}
    />
  )
)
