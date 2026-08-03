import re

with open('mesPaiements.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_payments_content = """                    <div id="section-payments" style="padding: 40px 50px; box-sizing: border-box;">
                        <div class="db-section-header" style="margin-bottom: 30px; border-bottom: 1px solid rgba(20, 43, 99, 0.05); padding-bottom: 20px;">
                            <h3 class="db-section-title" style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: var(--primary-navy); font-weight: 300; margin: 0 0 8px 0;">Mes paiements</h3>
                            <p class="db-section-subtitle" style="font-size: 0.95rem; color: var(--text-muted); margin: 0; font-family: 'Instrument Sans', sans-serif;">Gérez vos factures et consultez l'historique de vos transactions.</p>
                        </div>

                        <!-- Summary Cards -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                            <div class="db-widget" style="padding: 24px; display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <h5 style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px; font-weight: 700;">DÉPENSES TOTALES</h5>
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 600; color: var(--primary-navy);">CHF 570.-</div>
                                </div>
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(20,43,99,0.05); display: flex; align-items: center; justify-content: center; color: var(--primary-navy);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                </div>
                            </div>
                            <div class="db-widget" style="padding: 24px; display: flex; align-items: center; justify-content: space-between;">
                                <div>
                                    <h5 style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px; font-weight: 700;">PROCHAIN PAIEMENT</h5>
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 600; color: var(--primary-navy);">1 mars 2027</div>
                                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 5px;">Renouvellement Adhésion</div>
                                </div>
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(214,164,55,0.1); display: flex; align-items: center; justify-content: center; color: var(--luxury-gold);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 24px; height: 24px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                </div>
                            </div>
                        </div>
                        
                        <div class="db-widget" style="padding: 0; overflow: hidden;">
                            <div style="padding: 20px 24px; border-bottom: 1px solid rgba(20,43,99,0.05); background-color: #fafbfc; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em;">
                                <div style="flex: 2;">Transaction</div>
                                <div style="flex: 1; text-align: center;">Date</div>
                                <div style="flex: 1; text-align: right;">Montant</div>
                                <div style="flex: 1; text-align: right;">Action</div>
                            </div>

                            <!-- Payment Item 1 -->
                            <div class="db-premium-item" style="border-radius: 0; margin-bottom: 0; padding: 20px 24px;">
                                <div style="flex: 2; display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(20,43,99,0.05); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--primary-navy);">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                    </div>
                                    <div>
                                        <h4 style="margin: 0 0 4px 0; font-family: 'Instrument Sans', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--primary-navy);">Soirée Dégustation & Échanges</h4>
                                        <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted);">Visa &middot;&middot;&middot; 4242 &middot; ID: TXN-83921</p>
                                    </div>
                                </div>
                                <div style="flex: 1; text-align: center; font-size: 0.9rem; color: var(--primary-navy);">
                                    12 avril 2026
                                </div>
                                <div style="flex: 1; text-align: right;">
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; color: var(--primary-navy);">CHF 120.-</div>
                                    <span style="display: inline-block; font-size: 0.65rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.1); padding: 3px 8px; border-radius: 4px; margin-top: 4px;">PAYÉ</span>
                                </div>
                                <div style="flex: 1; text-align: right; display: flex; justify-content: flex-end; align-items: center;">
                                    <button onclick="downloadPDF('Facture_Degustation.pdf')" class="db-widget-btn secondary" style="padding: 8px 12px; font-size: 0.7rem; border-radius: 6px; display: flex; align-items: center; gap: 6px; border: 1px solid rgba(20,43,99,0.15); background: transparent; transition: all 0.2s;" onmouseover="this.style.backgroundColor='var(--primary-navy)'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--primary-navy)'">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        PDF
                                    </button>
                                </div>
                            </div>

                            <!-- Payment Item 2 -->
                            <div class="db-premium-item" style="border-radius: 0; margin-bottom: 0; padding: 20px 24px;">
                                <div style="flex: 2; display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(214,164,55,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--luxury-gold);">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </div>
                                    <div>
                                        <h4 style="margin: 0 0 4px 0; font-family: 'Instrument Sans', sans-serif; font-size: 1.05rem; font-weight: 700; color: var(--primary-navy);">Adhésion Annuelle 7Sens</h4>
                                        <p style="margin: 0; font-size: 0.75rem; color: var(--text-muted);">Mastercard &middot;&middot;&middot; 8812 &middot; ID: TXN-77410</p>
                                    </div>
                                </div>
                                <div style="flex: 1; text-align: center; font-size: 0.9rem; color: var(--primary-navy);">
                                    1 mars 2026
                                </div>
                                <div style="flex: 1; text-align: right;">
                                    <div style="font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; color: var(--primary-navy);">CHF 450.-</div>
                                    <span style="display: inline-block; font-size: 0.65rem; font-weight: 700; color: #2b8a3e; background: rgba(43,138,62,0.1); padding: 3px 8px; border-radius: 4px; margin-top: 4px;">PAYÉ</span>
                                </div>
                                <div style="flex: 1; text-align: right; display: flex; justify-content: flex-end; align-items: center;">
                                    <button onclick="downloadPDF('Facture_Adhesion.pdf')" class="db-widget-btn secondary" style="padding: 8px 12px; font-size: 0.7rem; border-radius: 6px; display: flex; align-items: center; gap: 6px; border: 1px solid rgba(20,43,99,0.15); background: transparent; transition: all 0.2s;" onmouseover="this.style.backgroundColor='var(--primary-navy)'; this.style.color='white'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--primary-navy)'">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        PDF
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Toast Notification Container -->
                        <div id="toast-container" style="position: fixed; bottom: 30px; right: 30px; z-index: 9999; display: flex; flex-direction: column; gap: 10px;"></div>

                        <script>
                            function downloadPDF(filename) {
                                const toast = document.createElement('div');
                                toast.style.backgroundColor = 'var(--primary-navy)';
                                toast.style.color = 'white';
                                toast.style.padding = '15px 20px';
                                toast.style.borderRadius = '8px';
                                toast.style.boxShadow = '0 10px 25px rgba(20,43,99,0.2)';
                                toast.style.display = 'flex';
                                toast.style.alignItems = 'center';
                                toast.style.gap = '12px';
                                toast.style.fontFamily = "'Instrument Sans', sans-serif";
                                toast.style.fontSize = '0.9rem';
                                toast.style.transform = 'translateY(50px)';
                                toast.style.opacity = '0';
                                toast.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                                
                                toast.innerHTML = `
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--luxury-gold)" stroke-width="2" style="width: 24px; height: 24px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    <div>
                                        <div style="font-weight: 700;">Téléchargement en cours</div>
                                        <div style="font-size: 0.8rem; opacity: 0.8;">${filename} a été généré avec succès.</div>
                                    </div>
                                `;
                                
                                document.getElementById('toast-container').appendChild(toast);
                                
                                // Animate in
                                setTimeout(() => {
                                    toast.style.transform = 'translateY(0)';
                                    toast.style.opacity = '1';
                                }, 10);
                                
                                // Animate out
                                setTimeout(() => {
                                    toast.style.transform = 'translateY(50px)';
                                    toast.style.opacity = '0';
                                    setTimeout(() => toast.remove(), 300);
                                }, 3000);
                            }
                        </script>
                    </div>"""

# Replace the entire <div id="section-payments"> ... </div> block
content = re.sub(r'<div id="section-payments".*?</main>', new_payments_content + '\n                </div>\n            </main>', content, flags=re.DOTALL)

with open('mesPaiements.html', 'w', encoding='utf-8') as f:
    f.write(content)
