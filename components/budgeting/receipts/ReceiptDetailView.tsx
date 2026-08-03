import React from "react";
import { ReceiptItem } from "./data";
import ReceiptDetailHeader from "./ReceiptDetailHeader";
import ElectronicInvoiceCard from "./ElectronicInvoiceCard";
import ProviderCard from "./ProviderCard";
import ClientCard from "./ClientCard";
import ServiceDescriptionCard from "./ServiceDescriptionCard";
import VATSummaryCard from "./VATSummaryCard";
import DocumentTotalsCard from "./DocumentTotalsCard";
import PaymentMethodsCard from "./PaymentMethodsCard";
import LegalNotesCard from "./LegalNotesCard";
import ReceiptFooter from "./ReceiptFooter";

interface ReceiptDetailViewProps {
  receipt: ReceiptItem;
  onBack: () => void;
}

export default function ReceiptDetailView({ receipt, onBack }: ReceiptDetailViewProps) {
  return (
    <div className="space-y-6">
      <ReceiptDetailHeader onBack={onBack} />

      <div className="grid grid-cols-1 gap-6">
        <ElectronicInvoiceCard receiptNo="2025-000123" date="11/30/2024" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProviderCard />
          <ClientCard clientName={receipt.client.name} />
        </div>
        <ServiceDescriptionCard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VATSummaryCard />
          <DocumentTotalsCard />
        </div>
        <PaymentMethodsCard />
        <LegalNotesCard />
        <ReceiptFooter />
      </div>
    </div>
  );
}
