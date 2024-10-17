import { Button } from './catalyst_ui/button'

const FetchButton = ({ onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
        {disabled ? 'Retry' : 'Fetch another repository'}
    </Button>
  )
}

export default FetchButton