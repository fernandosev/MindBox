import React, { Dispatch, SetStateAction } from 'react';
import { TextInputProps } from 'react-native';
import { Title, Input, SmallTextContainer, SmallText, Labels } from './styles';
import { colors } from '~/styles';
import InputErrorMessage from '../InputErrorMessage';

const TextInput: React.FC<
  {
    title?: string;
    value?: string | undefined;
    placeholder?: string | undefined;
    maxLength?: number | undefined;
    showMaxLength?: boolean | undefined;
    errorMessage?: string | undefined;
  } & TextInputProps
> = ({
  title = '',
  value = undefined,
  placeholder = '',
  maxLength = 30,
  showMaxLength = false,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      {title !== undefined && title.length > 0 && <Title>{title}</Title>}
      <Input
        placeholderTextColor={colors.quaternaryText}
        autoCorrect={false}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        borderColor={errorMessage ? colors.danger : undefined}
        {...rest}
      />
      <Labels>
        {errorMessage !== undefined && errorMessage?.length > 0 && (
          <InputErrorMessage style={{ flex: 1 }} message={errorMessage} />
        )}
        {showMaxLength && maxLength && (
          <SmallTextContainer>
            <SmallText>
              {value ? `${value.length}/${maxLength}` : `0/${maxLength}`}
            </SmallText>
          </SmallTextContainer>
        )}
      </Labels>
    </>
  );
};

export default TextInput;
