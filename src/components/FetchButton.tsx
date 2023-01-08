import { Button, FormControl } from "@mui/material"
import { FC } from "react"

type Props = {
  fetch: () => void
  isFetching: boolean
}


export const FetchButton: FC<Props> = ({fetch, isFetching}) => {
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
        disabled={isFetching}
      >
        Search
      </Button>
    </FormControl>
  )
}