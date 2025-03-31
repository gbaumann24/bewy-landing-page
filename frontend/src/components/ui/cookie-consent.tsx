import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { X } from 'lucide-react';
import { ButtonText, P } from '@/lib/typography';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogOverlay,
    DialogPortal,
} from './dialog';

const CookieConsent: React.FC = () => {
    const [showConsent, setShowConsent] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    // Cookie preferences state
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true, // Always true and disabled
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consentGiven = localStorage.getItem('cookieConsent');

        if (!consentGiven) {
            // Show the consent banner after a short delay
            const timer = setTimeout(() => {
                setShowConsent(true);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            // Load saved preferences
            try {
                const savedPreferences = JSON.parse(consentGiven);
                setCookiePreferences(savedPreferences);
            } catch (error) {
                console.error('Error parsing saved cookie preferences', error);
            }
        }
    }, []);

    const acceptAllCookies = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
        };

        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setCookiePreferences(allAccepted);
        setShowConsent(false);
    };

    const acceptNecessaryCookies = () => {
        const necessaryOnly = {
            necessary: true,
            analytics: false,
            marketing: false,
        };

        localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));
        setCookiePreferences(necessaryOnly);
        setShowConsent(false);
    };

    const savePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(cookiePreferences));
        setShowSettings(false);
        setShowConsent(false);
    };

    const handleCheckboxChange = (name: keyof typeof cookiePreferences) => {
        setCookiePreferences((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-md z-50 px-4">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium">Cookie-Einstellungen</h3>
                        <button onClick={() => setShowConsent(false)} className="text-gray-400 hover:text-gray-500">
                            <X size={20} />
                        </button>
                    </div>

                    <P className="text-sm text-gray-500 mt-2">Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen.</P>

                    <div className="mt-4 flex flex-col sm:flex-row gap-2">
                        <Button onClick={acceptAllCookies} className="flex-1" variant="default">
                            <ButtonText>Alle akzeptieren</ButtonText>
                        </Button>

                        <Button onClick={acceptNecessaryCookies} className="flex-1" variant="secondary">
                            <ButtonText>Nur notwendige</ButtonText>
                        </Button>

                        <Button onClick={() => setShowSettings(true)} className="flex-1" variant="outline">
                            <ButtonText>Anpassen</ButtonText>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Cookie Settings Dialog */}
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Cookie-Einstellungen anpassen</DialogTitle>
                        <DialogDescription>
                            Passen Sie Ihre Cookie-Einstellungen an. Notwendige Cookies sind für die Funktionalität der Website erforderlich.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">Notwendige Cookies</h4>
                                <p className="text-sm text-gray-500">Für die Grundfunktionalität der Website erforderlich</p>
                            </div>
                            <input type="checkbox" checked={cookiePreferences.necessary} disabled className="h-4 w-4 rounded border-gray-300 text-secondary" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">Analyse-Cookies</h4>
                                <p className="text-sm text-gray-500">Helfen uns zu verstehen, wie Sie die Website nutzen</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={cookiePreferences.analytics}
                                onChange={() => handleCheckboxChange('analytics')}
                                className="h-4 w-4 rounded border-gray-300 text-secondary cursor-pointer"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-medium">Marketing-Cookies</h4>
                                <p className="text-sm text-gray-500">Ermöglichen personalisierte Werbung</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={cookiePreferences.marketing}
                                onChange={() => handleCheckboxChange('marketing')}
                                className="h-4 w-4 rounded border-gray-300 text-secondary cursor-pointer"
                            />
                        </div>
                    </div>

                    <DialogFooter className="mt-6">
                        <Button onClick={() => setShowSettings(false)} variant="outline">
                            <ButtonText>Abbrechen</ButtonText>
                        </Button>
                        <Button onClick={savePreferences} variant="default">
                            <ButtonText>Speichern</ButtonText>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CookieConsent;
