import styled from 'styled-components'
import { InfoCircle } from '@styled-icons/boxicons-regular/InfoCircle'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'
import { Wechat } from '@styled-icons/remix-line/Wechat'
import { Mail } from '@styled-icons/feather/Mail'

export const IconInfo = styled(InfoCircle)`
    ${(props) => props.iconStyle};
`
export const IconWhatsapp = styled(Whatsapp)`
    ${(props) => props.iconStyle};
`
export const IconUser = styled(UserCircle)`
    ${(props) => props.iconStyle};
`

export const IconWechat = styled(Wechat)`
    ${(props) => props.iconStyle};
`

export const IconMail = styled(Mail)`
    ${(props) => props.iconStyle};
`
