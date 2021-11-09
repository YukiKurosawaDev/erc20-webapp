import { Modal,Text,Link, ModalProps, Spinner} from "@yuki_kurosawa/uikit";
import { GetChainInfo } from "../context/chainInfo";


const TxSuccess: React.FC<ModalProps & {chainId:number}> = ({chainId,onDismiss}) => {
    const Hash=localStorage.getItem("hash");
    return (
        <Modal title="Thank You!" style={{marginLeft:"auto",marginRight:"auto", width:"80%"}}  onDismiss={onDismiss}>
            <Text style={{wordBreak:"break-all"}} >Tx Hash: {Hash}</Text>
            <Link href={GetChainInfo(chainId)?.chainExplorerUrl+"tx/"+Hash} target="_blank" >View on {GetChainInfo(chainId)?.chainExplorerName}</Link>
        </Modal>
    );
  };

  const TxProcessing:React.FC<ModalProps & {size:number}> = ({size,onDismiss}) => {
    return (
        <Modal title="" style={{marginLeft:"auto",marginRight:"auto", width:"80%"}} onDismiss={onDismiss}>
            <Text style={{wordBreak:"break-all",textAlign:"center",width:"90%",marginLeft:"auto",marginRight:"auto",display:"block"}} >Processing ... </Text>
            <div style={{marginLeft:"auto",marginRight:"auto"}} >
            <Spinner size={size}/>
            </div>
        </Modal>
    )
  }

  const TxError: React.FC<ModalProps & {chainId:number}> = ({chainId,onDismiss}) => {
    const message=localStorage.getItem("message");
    return (
        <Modal title="Transaction Failed" style={{marginLeft:"auto",marginRight:"auto", width:"80%"}}  onDismiss={onDismiss}>
            <Text style={{wordBreak:"break-all"}} >Error Message:<br/> {message}</Text>
        </Modal>
    );
  };

  export  {TxSuccess,TxProcessing,TxError};