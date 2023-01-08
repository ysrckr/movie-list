import { Button, FormControl } from "@mui/material"
import { FC } from "react"

type Props = {
  fetch: () => void
}


export const FetchButton: FC<Props> = ({fetch}) => {
  return (
    <FormControl
      sx={{
        marginLeft: '1rem',
        minWidth: 120
      }}
    >
      <Button
        variant="outlined"
        onClick={fetch}
      >
        Search
      </Button>
    </FormControl>
  )
}