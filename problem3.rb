require 'prime'

def maxPrimeFactor (ar)
	d = ar-1

	while (d > 1) do
		if (ar%d==0 && Prime.prime?(d))
			return d
		end
		d -= 1
	end
	return ar
end

print maxPrimeFactor(13195)