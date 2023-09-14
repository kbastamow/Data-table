
import { useToast } from "@/components/ui/use-toast"
 
interface ToastProps {
    buttonText: string,
    description: string
}


export function Toast({buttonText, description} : ToastProps) {
  const { toast } = useToast()
  return (
    <div
      onClick={() => {
        toast({
          description: description,
        })
      }}
    >
        {buttonText}
    </div>
  )
}