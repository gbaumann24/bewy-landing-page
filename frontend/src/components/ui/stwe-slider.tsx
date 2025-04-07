import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Users } from 'lucide-react';

interface PricingEntry {
	user: number;
	price: number;
}

interface StweSliderProps {
	minOwners?: number;
	maxOwners?: number;
	defaultOwners?: number;
	pricingData: PricingEntry[];
	onValueChange?: (price: number) => void;
}

export function StweSlider({ minOwners = 1, maxOwners = 10, defaultOwners = 1, pricingData, onValueChange }: StweSliderProps) {
	const [owners, setOwners] = useState<number>(defaultOwners);
	const [, setPrice] = useState<number>(calculatePrice(defaultOwners));
	const [custom, setCustom] = useState(false);

	function calculatePrice(numOwners: number): number {
		const pricingEntry = pricingData.find((entry) => entry.user === numOwners);
		return pricingEntry ? pricingEntry.price : 0;
	}

	useEffect(() => {
		const newPrice = calculatePrice(owners);
		setPrice(newPrice);

		if (onValueChange) {
			onValueChange(newPrice);
		}
	}, [owners, pricingData, onValueChange]);

	function handleValueChange(value: number[]) {
		if (value[0] == maxOwners) {
			setCustom(true);
		} else {
			setCustom(false);
		}
		setOwners(value[0]);
	}

	return (
		<div className="space-y-6 w-full px-6">
			<div className="space-y-4 flex-row">
				<div className="flex justify-between items-end">
					<label htmlFor="owners-slider" className="text-base text-muted-foreground leading-tight font-medium w-full">
						Anzahl Eigentümer <br /> in der Gemeinschaft
					</label>
					<span className="font-bold flex flex-row w-fit text-nowrap items-end  text-4xl text-secondary">
						{custom ? '> 50' : owners}
						<Users className="mb-1.5" size={'17px'} />
					</span>
				</div>

				<Slider id="owners-slider" defaultValue={[defaultOwners]} max={maxOwners} min={minOwners} step={1} onValueChange={handleValueChange} />
			</div>
		</div>
	);
}
