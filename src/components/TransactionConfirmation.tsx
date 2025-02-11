import * as React from "react"
import Button from "@mui/material/Button"
import {
  Dialog,
  DialogContent,
  // DialogClose, <-- assurez-vous de NE PAS l'importer si vous aviez un composant pour la croix
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "./ui/dialog"

interface TransactionConfirmationProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  transactionDetails: {
    type: string
    amount: string
    token: string
    estimatedFee?: string
    collateralAmount?: string
    depositAsset?: string
    apr?: number
    estimatedEarnings?: {
      daily: string
      weekly: string
      monthly: string
      yearly: string
    }
    expectedDebt?: string
    loanAsset?: string
  }
}

export const TransactionConfirmation: React.FC<TransactionConfirmationProps> = ({
  isOpen,
  onClose,
  onConfirm,
  transactionDetails
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent
        className="hide-close-button"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          backgroundColor: "rgb(14, 17, 22)",
          color: "rgba(255, 255, 255, 0.9)",
          padding: "1.25rem 1.5rem",
          borderRadius: "10px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          fontFamily: "Neue Kabel, Montserrat, sans-serif"
        }}
      >
        <div style={{ position: "absolute", right: "1rem", top: "1rem", display: "none" }}>
        </div>
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem" }}>
            Confirm Transaction
          </DialogTitle>
          <DialogDescription style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.7)" }}>
            Please review the details of your transaction before confirming.
          </DialogDescription>
        </DialogHeader>

        {/* Corps de la modale */}
        <div style={{ display: "grid", gap: "0.75rem", padding: "1rem 0", fontSize: "0.95rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: "bold" }}>Type:</span>
            <span>{transactionDetails.type === 'Borrow' ? 'Top-up' : transactionDetails.type === 'Top-up' ? 'Deposit & Topup' : transactionDetails.type}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: "bold" }}>Deposit:</span>
            <span>
              {transactionDetails.amount} {transactionDetails.token}
            </span>
          </div>
          {transactionDetails.estimatedFee && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "bold" }}>Estimated Fee:</span>
              <span>{transactionDetails.estimatedFee}</span>
            </div>
          )}
          {transactionDetails.type === 'Top-up' && transactionDetails.collateralAmount && transactionDetails.depositAsset && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>

            </div>
          )}
          {transactionDetails.type === 'Top-up' && transactionDetails.apr !== undefined && (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: "bold" }}>APR:</span>
              <span>{transactionDetails.apr}%</span>
            </div>
          )}
        </div>

        <DialogFooter style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
          <Button
            onClick={onClose}
            sx={{
              backgroundColor: "#141921",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textTransform: "none",
              border: "1px solid #333",
              "&:hover": {
                backgroundColor: "#333"
              }
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={onConfirm}
            sx={{
              backgroundColor: "#4caf50",
              color: "#fff",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#43a047"
              }
            }}
          >
            Confirm Transaction
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
