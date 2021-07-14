import { useLocation } from "@chainsafe/common-components"

export const centerEllipsis = (address: string, remaining = 6) => {
  if (address.length <= remaining * 2) {
    return address
  }
  return `${address.substr(0, remaining)}...${address.substr(
    address.length - remaining,
    remaining
  )}`
}

export function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
